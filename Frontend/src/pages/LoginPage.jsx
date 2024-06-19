import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/Auth';
import { toast, ToastContainer } from 'react-toastify';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);

    const { storingTokenInLS, userAuthentication } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`https://stylr-ui-backend.vercel.app/api/v1/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                toast.success("Login Successful");
                const result = await response.json();
                await storingTokenInLS(result.token);
                setFormData({
                    email: '',
                    password: '',
                });
                window.scrollTo({ top: 0 });
                navigate("/");
                await userAuthentication(); // Fetch user data immediately after storing the token
            } else {
                const error = await response.json();
                toast.error(error.message || "Login failed. Please try again.");
            }
        } catch (error) {
            toast.error("Problem while logging in!");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white pt-[100px] md:pt-[120px]">
            <ToastContainer />
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm md:shadow-lg w-full max-w-[650px]">
                <h2 className="text-4xl font-roboto font-extrabold mb-3">Sign in to your account</h2>
                <p className='text-[17px] font-roboto font-semibold text-slate-600 mb-5'>Join our community of designers and developers to get access to hundreds of UI components, plugins, resources, and design systems.</p>
                <div className="mb-4">
                    <label className="block text-gray-700 font-roboto font-bold">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='name@company.com'
                        className="mt-1 p-2 w-full border rounded font-roboto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    />
                </div>
                <div className="mb-4 relative">
                    <label className="block text-gray-700 font-roboto font-bold">Password</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded font-roboto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    />
                    <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 top-6 pr-3 flex items-center text-[23px] leading-5">
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </button>
                </div>

                <button type="submit">
                    <p className="inline-flex items-center justify-center px-5 py-3 text-[18px] font-roboto font-bold tracking-wide leading-6 text-white whitespace-no-wrap bg-orange-600 border border-orange-700 rounded-lg shadow-sm hover:bg-orange-700 focus:outline-none transition-all duration-100" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                        Sign in to account
                    </p>
                </button>

                <div className='pt-5'>
                    <p className='text-[17px] font-bold font-roboto text-slate-500'>Not registered? <Link to="/register" className='text-[#fd9f60] font-robot font-bold text-[16px] hover:text-[#FF7D49]'>Create an account.</Link></p>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
