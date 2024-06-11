import React from 'react'
import { Link } from 'react-router-dom';

const OurSocials = (props) => {
    const { socialsImage, smallHeading, aboutHeading, buttonText, socialBackground, socialLink } = props;
    return (
        <section className='w-full'>
            <div className='text-start border-2 border-gray-100 rounded-xl p-6 flex flex-col gap-8'>
                <div className={`${socialBackground} w-16 h-16 rounded-xl flex items-center justify-center`}>
                    <img src={socialsImage} alt="imageofsocials" className='w-8 h-8' />
                </div>

                <div>
                    <h1 className='font-roboto font-extrabold text-4xl'>{smallHeading}</h1>
                    <p className='  mx-auto text-slate-600 leading-6 text-[15px] md:text-[16px] pt-5 md:pt-3 font-mulsih font-semibold tracking-wide text-start'>{aboutHeading}</p>
                    <Link to={socialLink}>
                        <button className='w-full border-2 border-slate-100 py-2 mt-4 rounded-lg text-[17px] font-roboto font-bold hover:text-slate-600'>
                            {buttonText}
                        </button>
                    </Link>
                </div>

            </div>
        </section>

    )
}

export default OurSocials