import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/Auth';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { storingTokenInLS } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:4000/api/v1/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            if (response.ok) {
                const result = await response.json();
                console.log(result);
                storingTokenInLS(result.token);
                setFormData({
                    email: '',
                    password: '',
                })
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-white pt-[70px] md:pt-[135px]">
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
                        className="mt-1 p-2 w-full border rounded font-robto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-roboto font-bold">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded font-robto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    />
                </div>

                <button type="submit">
                    <p class="inline-flex items-center justify-center px-5 py-3 text-[18px] font-roboto font-bold tracking-wide leading-6 text-white whitespace-no-wrap bg-orange-600 border border-orange-700 rounded-lg shadow-sm hover:bg-orange-700 focus:outline-none transition-all duration-100" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                        Sign in to account
                    </p>
                </button>

                <div className='pt-5'>
                    <p className='text-[17px] font-bold font-roboto text-slate-500'>Not registered? <Link to="/register" className='text-[#fd9f60] font-robot font-bold text-[16px] hover:text-[#FF7D49]'>Create an account.</Link></p>
                </div>
            </form>
        </div>
    )
}

export default LoginPage