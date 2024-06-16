import React from 'react';
import AdvertiseSkillez from '../components/AdvertiseSkillez';
import LandingPageButtons from '../components/LandingPageButtons';


const PricingLandingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center md:min-h-screen bg-white pt-36 md:pt-20 p-2 md:p-4">
            <main className='max-w-[1080px] flex flex-col gap-2 md:gap-10'>
                <AdvertiseSkillez />
                <div>
                    <h1 className="text-4xl md:text-7xl font-roboto font-extrabold text-left md:text-center text-gray-800 mb-2 md:mb-6 opacity-100 tracking-tighter">
                        Discover Premium UI Components and Blocks with Tailwind CSS
                    </h1>
                    <p className="text-md md:text-[20px] text-start md:text-center text-gray-500 font-extrabold font-mulsih mb-2 md:mb-8">
                        Jumpstart your projects with a comprehensive collection of open-source UI components, sections, and pages. Crafted using the power and flexibility of Tailwind CSS utility classes, it's your ultimate toolkit for modern web development.
                    </p>
                </div>
                <LandingPageButtons />
            </main>
        </div>
    );
};

export default PricingLandingPage;
