import React from 'react'
import CreativeDesign from "../assets/CreativeDesign.webp"
import { Link } from "react-router-dom"

const FeatureThird = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
    }
    return (
        <section className='w-full flex flex-col md:flex-row items-start border border-gray-300 rounded-xl'>
            <main className='md:w-1/2 p-6 font-roboto rounded-lg'>
                <p className='text-[18px] font-bold'>Clean UI Components</p>
                <h1 className='text-3xl font-extrabold pt-3'>Modern and Clean Design</h1>
                <p className='text-slate-600 leading-6 text-[16px] md:text-[17px] pt-5 md:pt-4 font-mulsih font-semibold tracking-wide text-start'>
                    Our website features a modern, clean UI with well-designed components that enhance user experience. Each component is designed to maintain a consistent look and feel, providing a cohesive user experience across the website.
                </p>

                <Link to="/blocks" onClick={scrollToTop}>
                    <button className={`px-8 py-3 font-bold rounded-md hover:shadow-xl bg-slate-800 text-white mt-8 md:mt-36`}>
                        Explore
                    </button>
                </Link>

            </main>
            <div className='md:w-1/2 p-6 flex justify-center'>
                <img src={CreativeDesign} alt="Creative Design" className='rounded-lg max-w-full h-auto' />
            </div>
        </section>
    )
}

export default FeatureThird
