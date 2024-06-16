import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaCloud } from 'react-icons/fa';

const Techstack = () => {
    return (
        <div className="relative bg-white overflow-hidden py-20 mt-16">
            <h1 className='text-center font-roboto font-light text-6xl'>Our Technologies</h1>
            <p className='text-center text-gray-600 font-asap font-light text-2xl mb-20 px-4 lg:px-48 mt-5'>
                Our products unify modern frameworks, aligning coded and designed versions for seamless communication between designers and developers, ensuring efficiency and consistency in development.
            </p>
            <div className="container mx-auto px-6 lg:px-20 grid grid-cols-2 md:grid-cols-7 gap-8">
                {/* React Icon */}
                <div className="flex justify-center items-center">
                    <FaReact className="text-5xl text-blue-500 animate-smoothBounce" />
                </div>
                {/* Node.js Icon */}
                <div className="flex justify-center items-center">
                    <FaNodeJs className="text-5xl text-green-500 animate-smoothBounce" />
                </div>
                {/* HTML5 Icon */}
                <div className="flex justify-center items-center">
                    <FaHtml5 className="text-5xl text-orange-500 animate-smoothBounce" />
                </div>
                {/* CSS3 Icon */}
                <div className="flex justify-center items-center">
                    <FaCss3Alt className="text-5xl text-blue-700 animate-smoothBounce" />
                </div>
                {/* JavaScript Icon */}
                <div className="flex justify-center items-center">
                    <FaJs className="text-5xl text-yellow-500 animate-smoothBounce" />
                </div>
                {/* Database Icon */}
                <div className="flex justify-center items-center">
                    <FaDatabase className="text-5xl text-purple-500 animate-smoothBounce" />
                </div>
                {/* Cloud Icon */}
                <div className="flex justify-center items-center">
                    <FaCloud className="text-5xl text-gray-600 animate-smoothBounce" />
                </div>
            </div>
        </div>
    );
};

export default Techstack;
