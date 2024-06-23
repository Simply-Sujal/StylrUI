import React from 'react';
import HorizontalMobileView from '../components/HorizontalMobileView';

const ChoosingKodeKomp = () => {
    return (
        <section className='w-full flex flex-col md:flex-row justify-center md:justify-start items-center'>
            <main className='px-4 md:px-16 pt-10 md:pt-28'>
                <h1 className='md:text-start text-center leadng-7 text-4xl md:text-7xl font-roboto font-extrabold text-slate-600'>
                    simply <span className='text-[#4CCD99]'>copy & paste</span>{' '}
                    <br />
                    code snippets<span className='inline-block animate-bounce' role='img' aria-label='gesture-no'>🤷‍♂️</span>
                </h1>
                <p className='leading-8 text-[19px] md:text-[22px] pt-5 md:pt-8 font-mulsih font-semibold tracking-wide md:text-start text-center text-slate-600'>
                    Make it easy, descriptive, quick, and clean styling
                </p>
            </main>
            <HorizontalMobileView />
        </section >
    );
};

export default ChoosingKodeKomp;
