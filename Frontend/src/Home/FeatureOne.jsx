import React, { useState } from 'react'
import HighSpeed from "../assets/HighSpeed.webp"
import ReloadFast from "../assets/ReloadFast.webp"
import Independent from "../assets/Independent.webp"
import { FaSun, FaMoon } from 'react-icons/fa';

const FeatureOne = (className) => {
    const [darkMode, setDarkMode] = useState(false);


    return (
        <div className={`w-full ${darkMode ? "dark" : ""}`}>
            <section className={`w-full ${className}`}>
                <main className='border border-gray-300 font-roboto p-6 rounded-xl min-h-full dark:bg-[#1d232a] dark:text-[#FF7D29] text-slate-800'>
                    <div className='flex justify-between'>
                        <p className='text-[18px] font-bold'>Dependency-Free</p>
                        <button onClick={() => setDarkMode(!darkMode)}
                            className=" top-4 left-4 p-2 bg-gray-300 dark:bg-gray-700 rounded-full"
                        >
                            {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
                        </button>
                    </div>

                    <h1 className='text-3xl font-extrabold pt-3'>Faster Load Times</h1>
                    <p className=' dark:text-slate-400 text-slate-600 leading-6 text-[16px] md:text-[17px] pt-5 md:pt-4 font-mulsih font-semibold tracking-wide text-start'>By eliminating dependencies, our website ensures faster load times, enhancing user experience and performance.</p>

                    <div className='flex md:flex-row justify-around pt-16 md:pt-24 items-center'>
                        <div className='flex flex-col items-center gap-3'>
                            <img src={HighSpeed} alt="" className='h-14 md:h-16 w-14 md:w-16 hover:animate-smoothBounce' />
                            <p className='text-center text-[14px] md:text-[18px] font-muslih font-medium dark:text-slate-400 text-slate-700'>High Speed</p>
                        </div>

                        <div className='flex flex-col items-center gap-3'>
                            <img src={ReloadFast} alt="" className='h-14 md:h-16 w-14 md:w-16 hover:animate-smoothBounce' />
                            <p className='text-center text-[14px] md:text-[18px] font-muslih font-medium dark:text-slate-400 text-slate-700'>Reload Page Fast</p>
                        </div>
                        <div className='flex flex-col items-center gap-3'>
                            <img src={Independent} alt="" className='h-14 md:h-16 w-14 md:w-16 hover:animate-smoothBounce' />
                            <p className='text-center text-[14px] md:text-[18px] font-muslih font-medium dark:text-slate-400 text-slate-700'>Zero Dependency</p>
                        </div>


                    </div>
                </main>
            </section>
        </div>

    )
}

export default FeatureOne