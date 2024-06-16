import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/Auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        profession: '',
        location: '',
        email: '',
        password: '',
        image: null,
    });

    const { storingTokenInLS } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation: Password should be at least 8 characters
        if (formData.password.length < 8) {
            toast.error("Password must be at least 8 characters long.");
            return;
        }

        // Validation: Profile photo size should be less than 256kb
        if (formData.image && formData.image.size > 256 * 1024) {
            toast.error("Profile photo size should be less than 256kb.");
            return;
        }

        const data = new FormData();
        for (const key in formData) {
            data.append(key, formData[key]);
        }

        try {
            const response = await fetch('http://localhost:4000/api/v1/user/register', {
                method: 'POST',
                body: data, // Send FormData
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result.token);

                // storing the token in the localstorage
                storingTokenInLS(result.token);

                setFormData({
                    name: '',
                    profession: '',
                    location: '',
                    email: '',
                    password: '',
                    image: null,
                })
                navigate("/");
                toast.success("Registration successful!");
            } else {
                toast.error("Registration failed. Please check your details.");
            }

            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error:', error);
            toast.error("Registration failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white pt-[110px] md:pt-[135px]">
            <ToastContainer/>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm md:shadow-lg w-full max-w-[650px]">
                <h2 className="text-4xl font-roboto font-extrabold mb-3">Create an account</h2>
                <p className='text-[17px] font-roboto font-semibold text-slate-600 mb-5'>Join our community of designers and developers to get access to hundreds of UI components, plugins, resources, and design systems.</p>
                <div className="mb-4">
                    <label className="block text-gray-700 font-roboto font-bold">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Sam Smith'
                        className="mt-1 p-2 w-full border rounded font-roboto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
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
                        className="mt-1 p-2 w-full border rounded font-roboto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
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
                        className="mt-1 p-2 w-full border rounded font-roboto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
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
                        className="mt-1 p-2 w-full border rounded font-roboto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-roboto font-bold">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded font-roboto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    />
                </div>
                <div className="mb-5">
                    <label className="block text-gray-700 font-roboto font-bold">Profile Image (Less than 250kb size)</label>
                    <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded font-roboto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    />
                </div>
                <button type="submit" className="inline-flex items-center justify-center px-5 py-3 text-[18px] font-roboto font-bold tracking-wide leading-6 text-white whitespace-no-wrap bg-orange-600 border border-orange-700 rounded-lg shadow-sm hover:bg-orange-700 focus:outline-none transition-all duration-100">
                    Create account
                </button>

                <div className='pt-5'>
                    <p className='text-[17px] font-bold font-roboto text-slate-500'>Already have an account? <Link to="/login" className='text-[#fd9f60] font-roboto font-bold text-[16px] hover:text-[#FF7D49]'>Login here.</Link></p>
                </div>
            </form>
        </div>
    );
};

export default RegisterPage;
