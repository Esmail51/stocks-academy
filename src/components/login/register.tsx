import { useState } from 'react';
import bgImg from '../../assets/images/loginBg.avif';
import googleLogo from '../../assets/images/googleLogo.png';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' });

    const validateForm = () => {
        let isValid = true;
        const newErrors = { email: '', password: '', confirmPassword: '' };

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

        if (!confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password.';
            isValid = false;
        } else if (confirmPassword !== password) {
            newErrors.confirmPassword = 'Passwords do not match.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted successfully:', { email, password, confirmPassword });
        }
    };

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Left Section */}
            <div 
                className="flex-1 bg-cover bg-center text-white flex items-center justify-center p-5 lg:p-0"
                style={{ backgroundImage: `url(${bgImg})`, borderRadius: "10px" }}
            >
                {/* Optional content */}
            </div>

            {/* Right Section */}
            <div className="flex-1 flex items-center justify-center p-5">
                <div className="w-full max-w-[400px] bg-white rounded-lg shadow-lg p-6 md:p-8 text-center">
                    <h2 className="text-2xl font-semibold mb-4">Register</h2>
                    <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                        <div className="text-left">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="rounded-md p-3 w-full"
                                style={{
                                    border: errors.email ? '1px solid #f87171' : '1px solid #d1d5db', // red border for error
                                    outline: errors.email ? '2px solid #fca5a5' : 'none', // light red outline
                                }}
                            />
                            {errors.email && (
                                <p className="text-xs mt-1" style={{ color: "red" }}>{errors.email}</p>
                            )}
                        </div>
                        <div className="text-left">
                            <input 
                                type="password" 
                                placeholder="New Password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="rounded-md p-3 w-full"
                                style={{
                                    border: errors.password ? '1px solid #f87171' : '1px solid #d1d5db', // red border for error
                                    outline: errors.password ? '2px solid #fca5a5' : 'none', // light red outline
                                }}
                            />
                            {errors.password && (
                                <p className="text-xs mt-1" style={{ color: "red" }}>{errors.password}</p>
                            )}
                        </div>
                        <div className="text-left">
                            <input 
                                type="password" 
                                placeholder="Confirm Password" 
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="rounded-md p-3 w-full"
                                style={{
                                    border: errors.confirmPassword ? '1px solid #f87171' : '1px solid #d1d5db', // red border for error
                                    outline: errors.confirmPassword ? '2px solid #fca5a5' : 'none', // light red outline
                                }}
                            />
                            {errors.confirmPassword && (
                                <p className="text-xs mt-1" style={{ color: "red" }}>{errors.confirmPassword}</p>
                            )}
                        </div>
                        <button 
                            type="submit" 
                            className="bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition">
                            Register
                        </button>
                    </form>
                    <div className="my-4 text-gray-500">or</div>
                    <button 
                        className="flex items-center justify-center w-full rounded-md py-2 px-4 bg-blue-700 text-white hover:bg-white hover:text-blue-700 border hover:border-blue-700 transition">
                        <img src={googleLogo} alt="Google Logo" className="h-6 w-6 mr-2" />
                        Sign up with Google
                    </button>
                    <p className="mt-4 text-sm text-gray-500">
                        Already have an account? <a href="/login" className="text-blue-600 underline">Login</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
