import React from 'react'
import technology from "../../public/technology"
import Topic from '../components/Topic'

const SupportingTech = () => {
    return (
        <section className='w-full bg-gray-50 mt-28'>
            <main className='px-4 md:px-20 pt-10 md:pt-20 md:pb-20 pb-16'>
                <div class="text-center py-4">
                    <Topic
                        smallHeading="Integration Ready"
                        mainHeading="StylrUI Compatibility with Technologies"
                        aboutHeading="Enhance your workflow with seamless integrations for your favorite tools using StylrUI."
                    />
                </div>


                {/* <!-- Compatibility Section --> */}
                <div className="container mx-auto px-2 pt-14">
                    <div className="flex flex-wrap justify-center gap-8">
                        {
                            technology.map((item) => (
                                <div key={item.id} className="relative group w-72 h-44 flex flex-col items-center justify-center gap-3 border border-gray-200 rounded-lg bg-white shadow-sm cursor-pointer hover:shadow-lg transition-all duration-200">
                                    <img src={item.image} alt={item.name} className="w-14 h-14 object-contain" />
                                    <p className='text-slate-800 text-[20px] font-roboto font-extrabold'>{item.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>
        </section >
    )
}

export default SupportingTech