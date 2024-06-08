import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const TopAdvertisment = () => {
    return (
        <div className='w-full top-0 fixed z-50 bg-[#f9fafb] h-20 border-b'>
            <main className='max-w-[900px] mx-auto flex-none md:flex flex-row items-center justify-center gap-3 pt-2 md:pt-4 text-[#151515] font-roboto font-semibold text-[15px] px-4 md:px-2'>
                <div className='hidden md:block md:w-[45px] text-center bg-orange-100 text-orange-600 font-mukta font-semibold text-[14px] rounded-md tracking-wide'>
                    New
                </div>
                Copy-paste components for instant website creation!<Link to="/" className='flex items-center gap-2 text-[#FF7D29] hover:text-orange-600 transition-colors duration-300'>
                    Check it out <FaArrowRightLong />
                </Link>
            </main>
        </div>
    )
}

export default TopAdvertisment;
