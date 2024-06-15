import React from 'react';
import { Link } from 'react-router-dom';

const StartContributing = (props) => {
    const { mainHeading, formLink } = props;
    return (
        <section className='w-full bg-blue-100 py-20'>
            <main className='flex flex-col md:flex-row items-center justify-between px-6 md:px-20 space-y-6 md:space-y-0'>
                <div className='text-center md:text-left'>
                    <h1 className='text-3xl md:text-5xl font-roboto font-bold mb-4'>
                        {mainHeading}
                    </h1>
                    <p className='text-base md:text-lg font-mukta font-normal text-gray-700 max-w-full md:max-w-[800px]'>
                        Your code will be visible to users, who can use it to build their websites. Users can also give your code a 'love' sign to motivate you to contribute as much as possible.

                    </p>
                </div>

                <Link
                    to={formLink}
                    className="px-8 py-3 text-lg md:text-3xl rounded-lg font-mulish font-semibold text-white bg-gradient-to-r from-slate-500 to-slate-700 hover:from-slate-600 hover:to-slate-800 transition duration-300 transform hover:scale-105 shadow-lg"
                >
                    Contribute
                </Link>
            </main>
        </section >
    );
};

export default StartContributing;
