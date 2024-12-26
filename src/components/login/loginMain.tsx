import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import googleLogo from '../../assets/images/googleLogo.png';
import bgImg from '../../assets/images/imgBg.svg';

// import bgImg from '../../assets/images/loginBg.avif';
import { auth } from '../../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';




const LoginMain = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });

    //used for changing from sign in to login
    const [changeAuth, setChangeAuth] = useState(false);;
    const navigate = useNavigate()

    const validateForm = () => {
        let isValid = true;
        const newErrors = { email: '', password: '' };
        // const navigate = useNavigate()


        if (!email) {
            newErrors.email = 'Email is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email address.';
            isValid = false;
        }

        if (!password) {
            newErrors.password = 'Password is required.';
            isValid = false;
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted successfully:', { email, password });
        }
    };
    const handleGoogleLogin = async () => {
        console.log('auth', auth)
        const provider = new GoogleAuthProvider();
        try {
            const result:any = await signInWithPopup(auth, provider);
            console.log('User Info:', result.user);
            // localStorage.setItem('accessToken',result.user.accessToken)
            // localStorage.setItem('refreshToken',result.user.stsTokenManager.refreshToken)
            // localStorage.setItem('userDetails', JSON.stringify(result.user.reloadUserInfo))
            Cookies.set('accessToken', result.user.accessToken, { expires: 1 });
            Cookies.set('refreshToken', result.user.stsTokenManager.refreshToken, { expires: 1 });
            Cookies.set('userDetails', JSON.stringify(result.user.reloadUserInfo), { expires: 1 });
            navigate(-1);
        } catch (error) {
            console.error('Login Error:', error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row ">
            {/* Left Section */}
            <div
                className=" lg:w-1/2 w-full bg-cover bg-center text-white flex items-center justify-center lg:p-0 "
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                {/* Optional content */}
                <img src={bgImg} alt="" className='lg:hidden block' />
            </div>

            {/* Right Section */}
            <div className=" lg:w-1/2 w-full flex items-center justify-center p-5">
                <div className="w-full max-w-[400px] bg-white rounded-lg shadow-lg p-6 md:p-8 text-center">
                    <h2 className="text-3xl font-semibold text-start ">{changeAuth?"Login":"Sign Up"}</h2>
                    <div className='flex justify-between items-center mb-8'>
                        <p>{changeAuth?"Welcome Back !":"Create an Account"}</p>
                    <p className=" text-sm text-gray-500">
                       {changeAuth?"New User ?":"Existing User ?"} <a  className="text-blue-600 underline cursor-pointer" onClick={()=>setChangeAuth(!changeAuth)}>{changeAuth?"Sign Up":"Log In"}</a>
                    </p>
                    </div>
                    {/* <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                        <div className="text-left">
                            <input
                                type="email"
                                placeholder="Email"
                                className="rounded-md p-3 w-full"
                                style={{
                                    border: errors.email ? '1px solid #f87171' : '1px solid #d1d5db',
                                    outline: errors.email ? '2px solid #fca5a5' : 'none',
                                }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && (
                                <p className="text-xs mt-1" style={{ color: "red" }}>{errors.email}</p>
                            )}
                        </div>
                        <div className="text-left">
                            <input
                                type="password"
                                placeholder="Password"
                                className="rounded-md p-3 w-full"
                                style={{
                                    border: errors.password ? '1px solid #f87171' : '1px solid #d1d5db',
                                    outline: errors.password ? '2px solid #fca5a5' : 'none',
                                }}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {errors.password && (
                                <p className="text-xs mt-1" style={{ color: "red" }}>{errors.password}</p>
                            )}
                        </div>
                        <button 
                            type="submit" 
                            className="bg-googleBlue-500 text-white py-2 rounded-md hover:bg-blue-800 transition">
                            Sign In
                        </button> 
                    </form> */}
                    {/* <div className="my-4 text-gray-500">or</div> */}
                    <button onClick={handleGoogleLogin}
                        className="flex items-center justify-center w-full rounded-full py-3 px-3 bg-googleBlue-500 text-white hover:bg-blue-300 hover:text-black">
                        <img src={googleLogo}  alt="Google Logo" className="h-6 w-6 mr-2 bg-white rounded-full" />
                        Sign up with Google
                    </button>
                   
                </div>
            </div>
        </div>
    );
};

export default LoginMain;
