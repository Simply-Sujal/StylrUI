import React from 'react';

const LandingPageUniversal = (props) => {
    const { mainHeading, aboutHeading, landingImage } = props;
    return (
        <section className='flex flex-col items-center justify-center md:min-h-screen bg-white pt-16 md:pt-20 p-2 md:p-4'>
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
