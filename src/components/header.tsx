import React, { useState } from "react";
import Logo from "../assets/images/SS Capital Logo.png";
import { useNavigate, matchPath, useLocation, Link } from "react-router-dom";

interface HeaderProps {
  onScrollTo?: (section: string) => void; // Optional prop
}

const Header: React.FC<HeaderProps> = ({ onScrollTo }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  

  const propertyPaths = [
    "/terms",
    "/assecibilty",
    "/calendar",
    "/intro_to_technical_analysis_and_understanding",
    "/in_depth_technical_analysis_training",
    "/an_introduction_to_options_trading",
    "/membership",
  ];
  const isStaticPath = propertyPaths.includes(currentPath);
  const isDynamicPath =
    matchPath("/property/:id", currentPath) ||
    matchPath("/agent/:id", currentPath);
  const isPropertyPage = isStaticPath || isDynamicPath;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
  className={`fixed top-0 left-0 w-full flex justify-between md:px-16 lg:px-24 px-5 items-center z-20 ${
    isPropertyPage
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
        className={`fixed top-0 left-0 h-full w-full bg-purple-100 shadow-md z-50S  transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
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
        <ul className="flex flex-col text-xl mt-5 items-center p-6 space-y-4">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <li className="cursor-pointer hover:text-white">Home</li>
          </Link>
          <li
            className="cursor-pointer hover:text-white"
            onClick={() => {
              onScrollTo?.("courses");
              setIsMenuOpen(false);
            }}
          >
            Courses
          </li>
          <li className="cursor-pointer hover:text-white"
          onClick={() => {
            onScrollTo?.("about");
            setIsMenuOpen(false);
          }}
          >About</li>
          <li
            className="cursor-pointer hover:text-white"
            onClick={() => {
              onScrollTo?.("contact");
              setIsMenuOpen(false);
            }}
          >
            Contact
          </li>
        </ul>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-7 text-googleBlue-500 text-lg font-medium">
        <ul className="flex">
          <Link to="/">
            <li className="mx-4 cursor-pointer hover:text-black">Home</li>
          </Link>
          <li
            className="mx-4 cursor-pointer hover:text-black"
            onClick={() => onScrollTo?.("courses")}
          >
            Courses
          </li>
          <li className="mx-4 cursor-pointer hover:text-black"
          onClick={() => onScrollTo?.("about")}
          >About</li>
          <li
            className="mx-4 cursor-pointer hover:text-black"
            onClick={() => onScrollTo?.("contact")}
          >
            Contact
          </li>
        </ul>

        {/* <div className="flex gap-3">
          <button className="py-2 px-3 border-googleBlue-500 border rounded-full text-googleBlue-500"><p>Login</p></button>
          <button className="py-2 px-3 bg-googleBlue-500 rounded-full"><p>Sign Up</p></button>

        </div> */}
      </nav>
    </header>
  );
};

export default Header;
