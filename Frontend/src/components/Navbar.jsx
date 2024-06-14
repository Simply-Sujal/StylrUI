// src/components/NavBar.jsx

import React, { useEffect, useState } from 'react';
import { FaGithub, FaBars } from 'react-icons/fa';
import { IoIosArrowRoundForward } from "react-icons/io";
import websiteLogo from "../assets/websitelogo.webp";
import { Link } from 'react-router-dom';
import { useAuth } from '../store/Auth';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userImage, setUserImage] = useState("");

    const { isTokenAvailable, user } = useAuth();
    // console.log(user);

    // const [userData, setUserData] = useState(true);

    useEffect(() => {
        if (user) {
            setUserImage(user.image)
        }
        // setUserData(false);
    }, [user])


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white fixed w-full top-14 z-50 shadow-sm">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                {/* Left: Logo */}
                <div className="flex items-center space-x-4 md:ml-10">
                    <Link to="/"><img className="h-8 w-8 md:h-24 md:w-24 cursor-pointer" src={websiteLogo} alt="Logo" /></Link>
                    <div className="hidden md:block relative">
                        <input
                            type="text"
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100"
                            placeholder="Search..."
                        />
                    </div>
                </div>

                {/* Center: Navigation Links */}
                <div className="hidden md:flex space-x-6 text-[16px] font-roboto font-medium md:pr-32">
                    <Link to="/components" className="text-gray-800 hover:text-[#FF7D29] transition-all duration-200">Components</Link>
                    <Link to="/blocks" className="text-gray-800 hover:text-[#FF7D29] transition-all duration-200">Blocks</Link>
                    <a href="#" className="text-gray-800 hover:text-[#FF7D29]">Figmaa</a>
                    <a href="#" className="text-gray-800 hover:text-[#FF7D29]">Blog</a>
                    <a href="#" className="text-gray-800 hover:text-[#FF7D29]">Pricing & FAQ</a>
                </div>

                {/* Right: GitHub Link and Sign In */}
                <div className="flex items-center space-x-5 pr-0 md:pr-16">

                    <a href="https://github.com/Simply-Sujal" target='_blank' className="text-gray-800 hover:text-gray-600">
                        <FaGithub size={24} />
                    </a>

                    {isTokenAvailable ? (
                        <Link to="/profile" >
                            <img src={userImage} alt="User profile image" className='rounded-full h-10 w-10' />
                        </Link>
                    ) : (
                        <Link to="/login" className="rounded relative inline-flex group items-center justify-center px-3 py-[3px] m-1 cursor-pointer border-b-4 border-l-2 active:border-orange-600 active:shadow-none shadow-lg bg-gradient-to-tr from-orange-600 to-orange-500 border-orange-700 text-white">
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                            <span className="relative">Sign In</span>
                            <IoIosArrowRoundForward className='text-[30px] pt-[3px]' />
                        </Link>
                    )}



                    <button onClick={toggleMenu} className="md:hidden text-gray-800 hover:text-gray-600">
                        <FaBars size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 bg-black bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`} onClick={toggleMenu}></div>
            <div className={`fixed top-0 left-0 w-64 bg-white h-full z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="flex flex-col items-start p-4 space-y-4">
                    <div className="relative w-full">
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-100"
                            placeholder="Search..."
                        />
                    </div>
                    <a href="#" className="text-gray-800 hover:text-[#FF7D29] transition-all duration-200">Components</a>
                    <a href="#" className="text-gray-800 hover:text-[#FF7D29]">Blocks</a>
                    <a href="#" className="text-gray-800 hover:text-[#FF7D29]">Figmaa</a>
                    <a href="#" className="text-gray-800 hover:text-[#FF7D29]">Blog</a>
                    <a href="#" className="text-gray-800 hover:text-[#FF7D29]">Pricing & FAQ</a>
                    <a href="https://github.com/Simply-Sujal" className="text-gray-800 hover:text-gray-600 flex items-center">
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
