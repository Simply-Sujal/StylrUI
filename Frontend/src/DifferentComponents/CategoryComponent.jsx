import React from 'react'

const CategoryComponent = (props) => {
    const { componentImage, componentHeading, aboutComponent } = props
    return (
        <section className='w-full'>
            <main className='px-4 md:px-20 pt-10 md:pt-14 md:pb-20 pb-16 bg-slate-800'>
                <div className=''>
                    <img src="https://img.daisyui.com/images/components/accordion.jpg" alt="" className='w-full' />

                    <div className='font-roboto w-full'>
                        <h1 className='text-2xl'>{componentHeading}</h1>
                        <p className='text-xl'>{aboutComponent}</p>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default CategoryComponent