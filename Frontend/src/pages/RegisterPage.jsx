import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        userName: '',
        profession: '',
        location: '',
        email: '',
        password: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white pt-[135px]">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[650px]">
                <h2 className="text-4xl font-roboto font-extrabold mb-3">Create an account</h2>
                <p className='text-[17px] font-roboto font-semibold text-slate-600 mb-5'>Join our community of designers and developers to get access to hundreds of UI components, plugins, resources, and design systems.</p>
                <div className="mb-4">
                    <label className="block text-gray-700 font-roboto font-bold">UserName</label>
                    <input
                        type="text"
                        name="userName"
                        value={formData.userName}
                        onChange={handleChange}
                        placeholder='Sam Smith'
                        className="mt-1 p-2 w-full border rounded font-robto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-roboto font-bold">Profession</label>
                    <input
                        type="text"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        placeholder='Developer'
                        className="mt-1 p-2 w-full border rounded font-robto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-roboto font-bold">Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder='India'
                        className="mt-1 p-2 w-full border rounded font-robto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    />
                </div>
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
                <div className="mb-5">
                    <label className="block text-gray-700 font-roboto font-bold">Profile Image (Less than 250kb size)</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded font-robto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    />
                </div>
                <button type="submit">
                    <p class="inline-flex items-center justify-center px-5 py-3 text-[18px] font-roboto font-bold tracking-wide leading-6 text-white whitespace-no-wrap bg-orange-600 border border-orange-700 rounded-lg shadow-sm hover:bg-orange-700 focus:outline-none transition-all duration-100" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                        Create account
                    </p>
                </button>

                <div className='pt-5'>
                    <p className='text-[17px] font-bold font-roboto text-slate-500'>Already have an account? <Link to="/login" className='text-[#fd9f60] font-robot font-bold text-[16px] hover:text-[#FF7D49]'>Login here.</Link></p>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
