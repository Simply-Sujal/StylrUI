import React from 'react';
import AboutImage from "../assets/AboutLandingImage.webp"

const LandingPageAbout = () => {
    return (
        <div className="relative bg-[#ffffff] overflow-hidden py-20 mt-16">
            <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
                {/* Write-up Section */}
                <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                    <h1 className="text-4xl md:text-5xl lg:text-5xl font-mulsih font-light text-slate-700 dark:text-white mb-6 animate__animated animate__fadeInLeft leading-10">Ready Made Stylish UI Components and Ready-to-Use Blocks</h1>
                    <p className="text-2xl md:text-3xl font-light font-asap text-slate-600  mb-6 ">
                        Our components are built on top of React and Tailwind CSS.
                    </p>
                </div>
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <img
                        src={AboutImage}
                        alt="StylrUI Preview"
                        className="w-full lg:w-full rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default LandingPageAbout;
