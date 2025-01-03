import React, { useEffect, useState } from "react";
import Logo from "../assets/images/SS Capital Logo.png";
import { useNavigate, matchPath, useLocation, Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { FiLogOut, FiUserCheck, FiHome, FiBookOpen, FiLogIn } from 'react-icons/fi';  // Add Sign-out icon from react-icons
import { MdCardMembership } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";

interface HeaderProps {
  onLoginOpen: () => void;
  onScrollTo?: (section: string) => void; // Optional prop
}

const Header: React.FC<HeaderProps> = ({ onScrollTo, onLoginOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState<any>({});
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // Track profile menu visibility


  const propertyPaths = [
    "/terms",
    "/assecibilty",
    "/calendar",
    "/intro_to_technical_analysis_and_understanding",
    "/in_depth_technical_analysis_training",
    "/an_introduction_to_options_trading",
    "/membership",
    "/contact"
  ];

  const getLoginDetails = () => {
    const userDetailsString = Cookies.get('userDetails') || '{}';
    const userDetails = JSON.parse(userDetailsString);
    if (userDetails && userDetails.photoUrl) {
      setIsLoggedIn(true);
      setUserDetails(userDetails);
      console.log("Photo URL:", userDetails);
    } else {
      setIsLoggedIn(false);
      setUserDetails({});
    }
  };

  const handleSignOut = () => {
    // Clear cookies and reset states
    Cookies.remove('userDetails');
    Cookies.remove('refreshToken');
    Cookies.remove('accessToken');
    setIsLoggedIn(false);
    setUserDetails({});
    navigate('/');  // Redirect to login page
  };


  useEffect(() => {
    getLoginDetails();
  }, [onLoginOpen]);

  const isStaticPath = propertyPaths.includes(currentPath);
  const isDynamicPath =
    matchPath("/property/:id", currentPath) ||
    matchPath("/agent/:id", currentPath);
  const isPropertyPage = isStaticPath || isDynamicPath;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`top-0 left-0 w-full flex justify-between md:px-16 lg:px-24 px-5 items-center z-20 ${isPropertyPage
        ? "bg-white shadow-gray-300 shadow-md"
        : "bg-white shadow-md"
        }`}
    >
      {/* Logo */}
      <div className="header__logo">
        <img src={Logo} alt="SS Capital Logo" className="h-24" />
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden text-white bg-purple-500 p-2 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Sliding Navigation Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-md z-50 transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:hidden`}
      >
        <button
          className="text-white p-2 bg-purple-500 focus:outline-none absolute top-4 right-4"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col text-xl mt-2 p-4 space-y-4">
          <li>
            <div className="flex gap-3 relative">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center space-x-2 relative">
                    {/* Avatar Image */}
                    <img
                      src={userDetails.photoUrl}
                      alt=""
                      className="rounded-full w-10 h-10 cursor-pointer"
                      // onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} // Toggle profile menu
                      onError={(e) => {
                        console.error("Image failed to load:", userDetails.photoUrl);
                      }}
                    />
                    <div className="p-1 cursor-pointer">
                      <p className="text-black text-semibold text-md">{userDetails.displayName}</p>
                      <p className="text-gray-500 text-sm">{userDetails.email}</p>

                    </div>
                    {/* Profile Dropdown */}
                    {/* {isProfileMenuOpen && (
                    
                  )} */}

                  </div>
                </>
              ) : null}
            </div>
          </li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <div className="flex space-x-2 items-center cursor-pointer hover:text-[#4285F4]">
              <FiHome />
              <li className="">Home</li>
            </div>
          </Link>
          <Link to="/courses">
            <div className="flex space-x-2 items-center cursor-pointer hover:text-[#4285F4]">
              <FiBookOpen />
              <li className="">Courses</li>
            </div>
          </Link>
          <div className="flex space-x-2 items-center cursor-pointer hover:text-[#4285F4]">
            <MdCardMembership />
            <li
              className=""
              onClick={() => {
                navigate('/choose_plan');
                setIsMenuOpen(false);
              }}
            >Membership</li>
          </div>
          <div className="flex space-x-2 items-center cursor-pointer hover:text-[#4285F4]">
            <RiContactsLine />
            <li
              className="cursor-pointer hover:text-[#4285F4]"
              onClick={() => {
                navigate('/contact');
              }}
            >
              Contact
            </li>
          </div>
          <li>
            <div>
              <hr />
              {isLoggedIn ? (
                <div className="flex items-center space-x-2 pt-2 text-Red-500 hover:text-[#4285F4] text-md cursor-pointer" onClick={handleSignOut}>
                  <FiLogOut />
                  <p>Sign out</p>
                </div>
              ) : (
                <div className="flex space-x-2 items-center pt-2 text-black cursor-pointer hover:text-[#4285F4]" onClick={() => {
                  onLoginOpen();
                  setIsMenuOpen(false);
                }}>
                  <FiLogIn />
                  <p
                    className=""
                  // onClick={() => navigate('/login')}

                  >
                    Sign in
                  </p>
                </div>
              )}


            </div>
          </li>

        </ul>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <img src={Logo} alt="SS Capital Logo" className="h-24 w-28" />
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-7 text-googleBlue-500 text-lg font-medium">
        <ul className="flex">
          <li className="mx-4 cursor-pointer hover:text-black" onClick={() => navigate('/')}>Home</li>
          <li
            className="mx-4 cursor-pointer hover:text-black"
            onClick={() => navigate('/courses')}
          >
            Courses
          </li>
          <li className="mx-4 cursor-pointer hover:text-black"
            onClick={() => navigate('/choose_plan')}
          >Membership</li>
          <li
            className="mx-4 cursor-pointer hover:text-black"
            onClick={() => {
              navigate('/contact')
            }}
          >
            Contact
          </li>
        </ul>

        {/* Show User Avatar or Sign-Up button */}
        <div className="flex gap-3 relative">
          {isLoggedIn ? (
            <div className="relative">
              {/* Avatar Image */}
              <img
                loading="lazy"
                src={userDetails.photoUrl}
                alt="User Avatar"
                className="rounded-full w-10 h-10 cursor-pointer"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)} // Toggle profile menu
                onError={(e) => {
                  console.error("Image failed to load:", userDetails.photoUrl, e);
                }}
              />
              {/* Profile Dropdown */}
              {isProfileMenuOpen && (
                <div className="absolute z-10 right-0 top-12 bg-white shadow-lg border rounded-lg p-2 min-w-[8rem] max-w-[16rem]">
                  <div className="flex items-center space-x-2 p-2 cursor-pointer">
                    <FiUserCheck />
                    <p className="text-[#4285F4] text-sm overflow-hidden whitespace-nowrap text-ellipsis">{userDetails.displayName}</p>
                  </div>
                  <hr />
                  <div className="flex items-center space-x-2 p-2 hover:bg-gray-200 text-sm cursor-pointer" onClick={handleSignOut}>
                    <FiLogOut style={{ color: "red" }} />
                    <p style={{ color: "red" }}>Sign out</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              className="py-2 px-3 border-googleBlue-500 border rounded-full text-googleBlue-500"
              // onClick={() => navigate('/login')}
              onClick={() => onLoginOpen()}
            >
              <p>Sign in</p>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
