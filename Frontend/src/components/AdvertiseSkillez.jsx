import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";


const AdvertiseSkillez = () => {
    return (
        <main className='w-full'>
            <div className='max-w-[620px] mx-auto py-[4px] bg-slate-100 rounded-full cursor-pointer hover:bg-slate-200 transition-all duration-200'>
                <a href="https://skillez.in" target="_blank" rel="noopener noreferrer">
                    <div className='flex items-center'>
                        <div className='ml-1 py-[4px] px-2 bg-[#FF7D29] max-w-[80px] rounded-full text-white text-[12px] md:text-[15px] font-bold tracking-wide'>Surprise</div>
                        <h1 className='text-[12px] md:text-[15px] text-[#151515] font-roboto font-bold tracking-wide pl-2'>We also have a website to help you build your own websites effortlessly </h1>
                        <MdKeyboardArrowRight className='hidden md:block text-[20px]' />
                    </div>
                </a>
            </div>
        </main>
    );
};

export default AdvertiseSkillez;
