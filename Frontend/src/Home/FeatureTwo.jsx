import React, { useState } from 'react';
import { FaBeer, FaLink, FaPalette } from 'react-icons/fa';
import { MdAutoFixNormal } from "react-icons/md";


const FeatureTwo = () => {
    const [buttonStyle, setButtonStyle] = useState('bg-slate-800 text-white');
    const [copied, setCopied] = useState(false);

    const handleCopyLink = () => {
        navigator.clipboard.writeText('https://skillez.in');
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    const styles = [
        { name: 'Default', className: 'bg-slate-800 text-white', icon: MdAutoFixNormal },
        { name: 'Gradient', className: 'bg-gradient-to-r from-blue-500 to-green-500 text-white', icon: FaPalette },
        { name: 'Link', className: 'bg-slate-800 text-white', icon: FaLink, onClick: handleCopyLink },
        { name: 'Icon', className: 'bg-slate-800 text-white flex items-center justify-center', icon: FaBeer },
    ];

    return (
        <section className='w-full flex justify-center items-center'>
            <main className='border border-gray-300 font-roboto p-6 rounded-xl min-h-full'>
                <p className='text-[18px] font-bold'>Tailwind CSS Customizability</p>
                <h1 className='text-3xl font-extrabold pt-3'>Fully Customizable</h1>
                <p className='text-slate-600 leading-6 text-[16px] md:text-[17px] pt-5 md:pt-4 font-mulsih font-semibold tracking-wide text-start'>
                    StylrUI allows you to easily add or remove styles as needed. Customize your design to match your brand without any limitations.
                </p>

                <div className='mx-auto flex justify-center items-center'>
                    <div className='w-full md:w-[70%]'>
                        {/* <h2 className='text-2xl font-bold mb-4 mt-4'>Select Button Style</h2> */}
                        <div className='mb-4 flex justify-center pt-10'>
                            <button className={`px-8 py-3 font-bold rounded-xl hover:shadow-xl ${buttonStyle}`}>
                                {buttonStyle.includes('flex') ? <FaBeer className='mr-2' /> : null}
                                {copied ? 'Link Copied!' : 'Button'}
                            </button>
                        </div>

                        <div className='flex flex-wrap justify-between space-x-1 mb-4 pt-4'>
                            {styles.map((style, index) => {
                                const IconComponent = style.icon;
                                return (
                                    <button
                                        key={index}
                                        className={`px-4 py-2 rounded text-slate-800`}
                                        onClick={() => style.onClick ? style.onClick() : setButtonStyle(style.className)}
                                    >
                                        <div className='flex flex-col items-center text-[17px] font-asap font-semibold'>
                                            <IconComponent className='mb-1' />{style.name}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default FeatureTwo;
