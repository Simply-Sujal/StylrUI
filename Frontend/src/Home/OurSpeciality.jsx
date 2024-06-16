import React from 'react'
import Topic from '../components/Topic'
import Speciality from '../components/Speciality'
import { Link } from 'react-router-dom'



const OurSpeciality = () => {
    return (
        <section className='w-full mt-10'>
            <main className='px-4 md:px-20 pt-10 md:pt-14 md:pb-20 pb-16'>
                <div className='text-center'>
                    <Topic
                        smallHeading="Kurated Komponent - Real"
                        mainHeading="Premium Tailwind CSS Components"
                        aboutHeading="Elevate your web development process with our curated collection of premium Tailwind CSS components."
                    />
                </div>
                <div className='flex flex-col md:flex-row gap-4 mt-20'>
                    <Speciality
                        smallHeading="50+"
                        mainHeading="Tailwind CSS Components"
                        aboutHeading="A vast array of components to build websites with lightning speed."
                    />
                    <Speciality
                        smallHeading="30+"
                        mainHeading="Figma Designs"
                        aboutHeading="Beautiful Figma designs to streamline your creative process."
                    />
                    <Speciality
                        smallHeading="3"
                        mainHeading="Popular Technologies"
                        aboutHeading="Optimized for React, Next, and HTML developers."
                    />

                </div>

                <section className='w-full flex flex-col md:flex-row items-start border-2 border-gray-100 rounded-xl mt-4'>
                    <main className='md:w-1/2 p-6 font-roboto rounded-lg'>
                        <p className='font-roboto font-extrabold text-4xl'>20+</p>
                        <h1 className='font-roboto font-bold text-2xl md:text-[20px] pt-3'>Pre Built Section</h1>
                        <p className='mx-auto text-slate-600 leading-6 text-[15px] md:text-[16px] pt-5 md:pt-3 font-mulsih font-semibold tracking-wide text-start'>
                            Fully coded pre build section allows you to start building website in second.
                        </p>

                        <Link to="/components" onClick={() => window.scrollTo({ top: 0 })}>
                            <button className={`px-8 py-3 font-bold rounded-md hover:shadow-xl bg-slate-800 text-white mt-8 md:mt-36`}>
                                Explore
                            </button>
                        </Link>

                    </main>
                    <div className=' p-6 flex justify-center w-full'>
                        <img src="https://www.material-tailwind.com/_next/image?url=%2Fimage%2Fready-made-sections.png&w=1080&q=75" alt="Creative Design" className='w-full h-auto md:h-[350px]' />
                    </div>
                </section>
            </main>
        </section>
    )
}

export default OurSpeciality