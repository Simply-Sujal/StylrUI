import React from 'react';
import AdvertiseSkillez from '../components/AdvertiseSkillez';
import LandingPageButtons from '../components/LandingPageButtons';

const HomeLandingPage = () => {
    return (
        <div className="relative flex flex-col items-center justify-center md:min-h-screen bg-white pt-36 md:pt-20 p-2 md:p-4 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Abstract shapes */}
                <div className="absolute top-10 left-0 w-10 h-20 md:w-28 md:h-28 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full filter blur-2xl opacity-80 animate-spin-slow"></div>
                <div className="absolute bottom-10 right-0 w-10 h-20 md:w-28 md:h-28 bg-gradient-to-r from-green-400 to-blue-600 rounded-full filter blur-2xl opacity-80 animate-spin-slow"></div>
                <div className="absolute top-0 left-0 w-28 md:w-48 h-28 md:h-48 bg-gradient-to-r from-yellow-300 to-orange-500 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-28 md:w-48 h-28 md:h-48 bg-gradient-to-r from-blue-300 to-green-500 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
            </div>

            <main className="max-w-[1080px] flex flex-col gap-2 md:gap-10 z-10">
                <AdvertiseSkillez />
                <div>
                    <h1 className="text-4xl md:text-7xl font-roboto font-extrabold text-left md:text-center text-gray-800 mb-2 md:mb-6 opacity-100 tracking-tighter">
                        Build websites using 100% dependency free components library
                    </h1>
                    <p className="text-md md:text-[20px] text-start md:text-center text-gray-500 font-extrabold font-mulsih mb-2 md:mb-8">
                        Start building with an open-source library UI components, sections, and pages. Powered by Tailwind CSS utility classes, it's your go-to resource for modern web development.
                    </p>
                </div>
                <LandingPageButtons />
            </main>
        </div>
    );
};

export default HomeLandingPage;
