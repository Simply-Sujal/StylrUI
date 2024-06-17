import React from 'react';
import Avatar from "../assets/Avatars.png"

const CategoryComponent = (props) => {
    const { componentImage, componentHeading, aboutComponent } = props;

    return (
        <section className=' h-[300px]'>
            <main className='px-4 md:px-3 pt-7 md:pt-4 md:pb-4 pb-16 '>
                <div className='h-full flex flex-col'>
                    <img src={Avatar} alt={`${componentHeading} image`} className='w-full flex-shrink-0 object-contain border h-36 border-gray-500' />
                    <div className='font-roboto w-full mt-4 text-start flex-grow'>
                        <h1 className='text-[20px] text-gray-700 font-medium font-roboto'>{componentHeading.charAt(0).toUpperCase() + componentHeading.slice(1)}</h1>
                        <p className='text-[13px] pt-2 overflow-hidden font-mulsih font-medium'>{aboutComponent}</p>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default CategoryComponent;
