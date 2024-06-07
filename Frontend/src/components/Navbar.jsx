// src/components/NavBar.jsx

import React, { useState } from 'react';
import { FaGithub, FaBars } from 'react-icons/fa';
import { IoIosArrowRoundForward } from "react-icons/io";
import websiteLogo from "../assets/websitelogo.webp";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white fixed w-full top-0 z-50 ">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                {/* Left: Logo */}
                <div className="flex items-center space-x-4 md:ml-10">
                    <img className="h-8 w-8 md:h-24 md:w-24 cursor-pointer" src={websiteLogo} alt="Logo" />
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
                    <a href="#" className="text-gray-800 hover:text-[#FF7D29] transition-all duration-200">Components</a>
                    <a href="#" className="text-gray-800 hover:text-[#FF7D29]">Blocks</a>
                    <a href="#" className="text-gray-800 hover:text-[#FF7D29]">Blogs</a>
                    <a href="#" className="text-gray-800 hover:text-[#FF7D29]">Build</a>
                    <a href="#" className="text-gray-800 hover:text-[#FF7D29]">Pricing & FAQ</a>
                </div>

                {/* Right: GitHub Link and Sign In */}
                <div className="flex items-center space-x-5 pr-0 md:pr-16">
                    <a href="https://github.com/Simply-Sujal" className="text-gray-800 hover:text-gray-600">
                        <FaGithub size={24} />
                    </a>
                    <a href="#_" className="rounded relative inline-flex group items-center justify-center px-3 py-[6px] m-1 cursor-pointer border-b-4 border-l-2 active:border-orange-600 active:shadow-none shadow-lg bg-gradient-to-tr from-orange-600 to-orange-500 border-orange-700 text-white">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                        <span className="relative">Sign In</span>
                        <IoIosArrowRoundForward className='text-[30px] pt-[3px]' />
                    </a>
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
                    <a href="#" className="text-gray-800 hover:text-[#FF7D29]">Blogs</a>
                    <a href="#" className="text-gray-800 hover:text-[#FF7D29]">Build</a>
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