import React from 'react'
import FeatureOne from './FeatureOne'
import FeatureTwo from './FeatureTwo'
import FeatureThird from './FeatureThird'
import Topic from '../components/Topic'

const MainFeature = () => {
    return (
        <section className='w-full mt-20'>
            <main className='px-4 md:px-20 pt-10 md:pt-14 md:pb-20 pb-16'>
                <div className='text-center'>
                    <Topic
                        smallHeading="Kurated Komponent - Free"
                        mainHeading="Explore some of its features"
                        aboutHeading="Get Kurated Komponent and take advantage of its free components and features that will help you set up your web project quickly."
                    />
                </div>

                <div className='flex flex-col gap-4'>
                    <div className='flex justify-center md:flex-row flex-col gap-4 mt-20'>
                        <FeatureOne className="flex-1" />
                        <FeatureTwo className="flex-1" />
                    </div>
                    <FeatureThird />
                </div>

            </main>
        </section>
    )
}

export default MainFeature