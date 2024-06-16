import React from 'react';
import { FaCubes, FaBoxOpen, FaDesktop } from 'react-icons/fa';

const Whatwehaveinpremium = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
            <div className="max-w-7xl mx-auto p-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-8">What's <span className='text-orange-500'>Coming Soon</span> in Premium</h1>

                <div className="font-roboto flex flex-col md:flex-row gap-8 items-center justify-center">
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <FaCubes className="text-6xl text-blue-600 mb-4" />
                        <h2 className="text-3xl font-semibold text-gray-700 mb-4 text-center">Premium Blocks</h2>
                        <p className="text-gray-600 leading-relaxed text-center">
                            Discover a variety of professionally designed blocks to enhance your website's functionality.
                        </p>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center">
                        <FaBoxOpen className="text-6xl text-green-600 mb-4" />
                        <h2 className="text-3xl font-semibold text-gray-700 mb-4 text-center">Premium Components</h2>
                        <p className="text-gray-600 leading-relaxed text-center">
                            Access a rich library of UI components crafted with precision and ready to integrate into your projects.
                        </p>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center">
                        <FaDesktop className="text-6xl text-purple-600 mb-4" />
                        <h2 className="text-3xl font-semibold text-gray-700 mb-4 text-center">Full Website Designs</h2>
                        <p className="text-gray-600 leading-relaxed text-center">
                            Get complete website designs that are responsive, customizable, and tailored for different industries.
                        </p>
                    </div>
                </div>

                <p className="font-roboto font-bold text-gray-600 mt-8 text-center">
                    Stay tuned! These exciting features are coming soon to elevate your web development experience.
                </p>
            </div>
        </div>
    );
};

export default Whatwehaveinpremium;
