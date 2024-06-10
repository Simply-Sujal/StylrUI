import React from 'react'
import FeatureOne from './FeatureOne'
import FeatureTwo from './FeatureTwo'
import FeatureThird from './FeatureThird'

const MainFeature = () => {
    return (
        <section className='w-full mt-20'>
            <main className='px-4 md:px-20 pt-10 md:pt-14 md:pb-20 pb-16'>
                <div className='text-center'>
                    <h1 className='font-roboto font-bold text-3xl'>Kurated Komponent - Free</h1>
                    <h1 className='font-roboto font-extrabold text-5xl pt-5'>Explore some of its features</h1>
                    <p className=' md:max-w-[65%] mx-auto text-slate-600 leading-8 text-[18px] md:text-[22px] pt-5 md:pt-4 font-mulsih font-semibold tracking-wide text-center'>Get Kurated Komponent and take advantage of its free components and features that will help you set up your web project quickly.</p>
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='flex justify-center md:flex-row flex-col gap-4 mt-20'>
                        <FeatureOne />
                        <FeatureTwo />
                    </div>
                    <FeatureThird />
                </div>

            </main>
        </section>
    )
}

export default MainFeature