// src/components/HomeLandingPage.jsx

import React from 'react';
import AdvertiseSkillez from '../components/AdvertiseSkillez';
import LandingPageButtons from '../components/LandingPageButtons';

const HomeLandingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center md:min-h-screen bg-white pt-20 p-2 md:p-4">
            <main className='max-w-[1080px] flex flex-col gap-2 md:gap-5'>
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
