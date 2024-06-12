import React from 'react'

const CategoryComponent = (props) => {
    const { componentImage, componentHeading, aboutComponent } = props


    return (
        <section className='border-2 border-gray-100'>
            <main className='px-4 md:px-5 pt-10 md:pt-4 md:pb-4 pb-16 hover:scale-105 transition-all duration-150'>
                <div className=''>
                    <img src="https://img.daisyui.com/images/components/accordion.jpg" alt="" className='w-full' />

                    <div className='font-roboto w-full mt-4 text-start'>
                        <h1 className='text-2xl font-medium'>{componentHeading.charAt(0).toUpperCase() + componentHeading.slice(1)}</h1>
                        <p className='text-[13px] pt-2'>{aboutComponent}</p>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default CategoryComponent