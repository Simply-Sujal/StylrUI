import React from 'react';

const LandingPageUniversal = (props) => {
    const { mainHeading, aboutHeading, landingImage } = props;
    return (
        <section className='flex flex-col items-center justify-center md:min-h-screen bg-white pt-16 md:pt-20 p-2 md:p-4 overflow-hidden'>
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Abstract shapes */}
                <div className="absolute top-10 left-0 w-10 h-20 md:w-28 md:h-28 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full filter blur-2xl opacity-80 animate-spin-slow"></div>
                <div className="absolute bottom-10 right-0 w-10 h-20 md:w-28 md:h-28 bg-gradient-to-r from-green-200 to-blue-600 rounded-full filter blur-2xl opacity-80 animate-spin-slow"></div>
                <div className="absolute top-0 left-0 w-28 md:w-48 h-28 md:h-48 bg-gradient-to-r from-yellow-300 to-orange-500 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-28 md:w-48 h-28 md:h-48 bg-gradient-to-r from-blue-300 to-green-300 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
            </div>
            <div className='max-w-[1080px] flex flex-col gap-2 md:gap-5'>
                <h1 className='text-4xl md:text-7xl font-roboto font-extrabold text-left md:text-center text-gray-800 mb-2 md:mb-6 opacity-100 tracking-tighter'>
                    {mainHeading}
                </h1>
                <p className='text-md md:text-[20px] text-start md:text-center text-gray-500 font-bold font-mulsih mb-2 md:mb-8'>
                    {aboutHeading}
                </p>
            </div>
            <div className='flex justify-center'>
                <img src={landingImage} className='w-full h-auto rounded-lg' />
            </div>
        </section>
    );
};

export default LandingPageUniversal;
