import React, { useEffect, useState } from 'react';
import { FaGithub, FaBars } from 'react-icons/fa';
import { IoIosArrowRoundForward } from "react-icons/io";
// import websiteLogo from "../assets/websitelogo.webp";
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../store/Auth';
import stylrlogo from "../assets/design.png"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userImage, setUserImage] = useState("");
    const [activeLink, setActiveLink] = useState(null);

    const { isTokenAvailable, user } = useAuth();
    const location = useLocation();

    useEffect(() => {
        if (user) {
            setUserImage(user.image);
        }

        // Clear active link when navigating to home
        if (location.pathname === "/") {
            setActiveLink(null);
        }
    }, [user, location]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
    };

    return (
        <nav className="bg-white fixed w-full top-14 z-50 shadow-sm">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                {/* Left: Logo */}
                <div className="flex items-center space-x-4 md:ml-10">
                    <Link to="/" onClick={scrollToTop}>
                        <img className="h-12 w-12 md:h-[70px] md:w-[130px] cursor-pointer object-contain" src={stylrlogo} alt="Logo" />
                    </Link>
                </div>

                {/* Center: Navigation Links */}
                <div className="hidden md:flex space-x-6 text-[16px] font-roboto font-medium">
                    <Link
                        to="/docs"
                        className={`text-gray-800 hover:text-[#FF7D29] transition-all duration-200 ${activeLink === 'docs' ? 'bg-orange-100 text-orange-500 rounded-md px-2' : ''}`}
                        onClick={() => {
                            handleLinkClick('docs');
                            scrollToTop();
                        }}
                    >
                        Docs
                    </Link>
                    <Link
                        to="/components"
                        className={`text-gray-800 hover:text-[#FF7D29] transition-all duration-200 ${activeLink === 'components' ? 'bg-orange-100 text-orange-500 rounded-md px-2' : ''}`}
                        onClick={() => {
                            handleLinkClick('components');
                            scrollToTop();
                        }}
                    >
                        Components
                    </Link>
                    <Link
                        to="/blocks"
                        className={`text-gray-800 hover:text-[#FF7D29] transition-all duration-200 ${activeLink === 'blocks' ? 'bg-orange-100 text-orange-500 rounded-md px-2' : ''}`}
                        onClick={() => {
                            handleLinkClick('blocks');
                            scrollToTop();
                        }}
                    >
                        Blocks
                    </Link>

                    <Link
                        to="/contributorpage"
                        className={`text-gray-800 hover:text-[#FF7D29] transition-all duration-200 ${activeLink === 'contribute' ? 'bg-orange-100 text-orange-500 rounded-md px-2' : ''}`}
                        onClick={() => {
                            handleLinkClick('contribute');
                            scrollToTop();
                        }}
                    >
                        Contribute
                    </Link>
                    <Link
                        to="/pricingfaq"
                        className={`text-gray-800 hover:text-[#FF7D29] transition-all duration-200 ${activeLink === 'pricing-faq' ? 'bg-orange-100 text-orange-500 rounded-md px-2' : ''}`}
                        onClick={() => {
                            handleLinkClick('pricing-faq');
                            scrollToTop();
                        }}
                    >
                        Pricing & FAQ
                    </Link>
                </div>

                {/* Right: GitHub Link and Sign In */}
                <div className="flex items-center space-x-5 pr-0 md:pr-16">
                    <a href="https://github.com/Simply-Sujal" target='_blank' className="text-gray-800 hover:text-gray-600">
                        <FaGithub size={24} />
                    </a>

                    {isTokenAvailable ? (
                        <Link to="/profile" onClick={scrollToTop}>
                            <img src={userImage} alt="User profile image" className='rounded-full h-10 w-10' />
                        </Link>
                    ) : (
                        <Link to="/login" onClick={scrollToTop} className="rounded relative inline-flex group items-center justify-center px-3 py-[3px] m-1 cursor-pointer border-b-4 border-l-2 active:border-orange-600 active:shadow-none shadow-lg bg-gradient-to-tr from-orange-600 to-orange-500 border-orange-700 text-white">
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
                <div className="flex flex-col items-start p-4 space-y-4 text-xl font-mulsih font-semibold bg-orange-100 h-screen">

                    <Link
                        to="/docs"
                        className={`text-gray-800 hover:text-[#FF7D29] transition-all duration-200 ${activeLink === 'docs' ? 'bg-orange-100 text-orange-500 rounded-md px-2' : ''}`}
                        onClick={() => {
                            handleLinkClick('docs');
                            scrollToTop();
                        }}
                    >
                        Docs
                    </Link>
                    <Link
                        to="/components"
                        className={`text-gray-800 hover:text-[#FF7D29] transition-all duration-200 ${activeLink === 'components' ? 'bg-orange-100 text-orange-500 rounded-md px-2' : ''}`}
                        onClick={() => {
                            handleLinkClick('components');
                            scrollToTop();
                        }}
                    >
                        Components
                    </Link>
                    <Link
                        to="/blocks"
                        className={`text-gray-800 hover:text-[#FF7D29] transition-all duration-200 ${activeLink === 'blocks' ? 'bg-orange-100 text-orange-500 rounded-md px-2' : ''}`}
                        onClick={() => {
                            handleLinkClick('blocks');
                            scrollToTop();
                        }}
                    >
                        Blocks
                    </Link>

                    <Link
                        to="/contributorpage"
                        className={`text-gray-800 hover:text-[#FF7D29] transition-all duration-200 ${activeLink === 'contribute' ? 'bg-orange-100 text-orange-500 rounded-md px-2' : ''}`}
                        onClick={() => {
                            handleLinkClick('contribute');
                            scrollToTop();
                        }}
                    >
                        Contribute
                    </Link>
                    <Link
                        to="/pricingfaq"
                        className={`text-gray-800 hover:text-[#FF7D29] transition-all duration-200 ${activeLink === 'pricing-faq' ? 'bg-orange-100 text-orange-500 rounded-md px-2' : ''}`}
                        onClick={() => {
                            handleLinkClick('pricing-faq');
                            scrollToTop();
                        }}
                    >
                        Pricing & FAQ
                    </Link>
                    <a href="https://github.com/Simply-Sujal" className="text-gray-800 hover:text-gray-600 flex items-center">
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
