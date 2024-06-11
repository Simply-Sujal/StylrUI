import React from 'react'

const Topic = (props) => {
    const { smallHeading, mainHeading, aboutHeading } = props;
    return (
        <div className='text-center'>
            <h1 className='font-roboto font-bold text-3xl'>{smallHeading}</h1>
            <h1 className='font-roboto font-extrabold text-4xl md:text-5xl pt-5'>{mainHeading}</h1>
            <p className=' md:max-w-[65%] mx-auto text-slate-600 leading-8 text-[18px] md:text-[22px] pt-5 md:pt-4 font-mulsih font-semibold tracking-wide text-center'>{aboutHeading}</p>
        </div>
    )
}

export default Topic