import React from 'react'
import MobileVideo from '../components/MobileVideo'

const AvoidingDependency = () => {
    return (
        <section className='w-full flex flex-col md:flex-row justify-between items-center'>
            <main className='px-4 md:px-20 pt-10 md:pt-20'>
                <h1 className='md:text-start text-center leadng-7 text-4xl md:text-7xl font-roboto font-extrabold text-slate-600'>
                    highly avoid{' '}
                    <span className='inline-block animate-bounce' role='img' aria-label='gesture-no'>
                        🙅‍♂️
                    </span>
                    <br />
                    dependency during
                    <span className='block'>building website...</span>
                    <p className='leading-8 text-[19px] md:text-[22px] pt-5 md:pt-8 font-mulsih font-semibold tracking-wide md:text-start text-center'>Say goodbye to the hassle of writing thousands of CSS classes <br className='md:block hidden' /> Our library simplifies your coding experience, allowing you to focus <br className='md:block hidden' /> on what truly matters.</p>
                </h1>
            </main>
            <MobileVideo />
        </section>
    )
}

export default AvoidingDependency