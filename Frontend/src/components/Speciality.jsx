import React from 'react'

const Speciality = (props) => {
    const { smallHeading, mainHeading, aboutHeading, topicImage } = props;
    return (
        <div className='text-start border-2 border-gray-100 rounded-xl p-6 flex flex-col justify-between gap-8'>
            <div>
                <h1 className='font-roboto font-extrabold text-4xl'>{smallHeading}</h1>
                <h1 className='font-roboto font-bold text-2xl md:text-[20px] pt-3'>{mainHeading}</h1>
                <p className='  mx-auto text-slate-600 leading-6 text-[15px] md:text-[16px] pt-5 md:pt-3 font-mulsih font-semibold tracking-wide text-start'>{aboutHeading}</p>
            </div>
            <img src={topicImage} alt="topicimage" className='w-full' height={100} width={100} />
        </div>
    )
}

export default Speciality