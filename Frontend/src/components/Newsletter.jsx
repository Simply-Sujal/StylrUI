import React from 'react';
import Topic from './Topic';
import { Link } from 'react-router-dom';

const Newsletter = () => {
    return (
        <section className='w-full mt-10 bg-cover bg-center' style={{ backgroundImage: "url('https://img.freepik.com/free-photo/blue-toned-collection-paper-sheets-with-copy-space_23-2148320445.jpg?w=1380&t=st=1718172726~exp=1718173326~hmac=22aa117c4923e8ae4a9f8e1a33351b88f8770b6e4cfd13922314ecb17df7d306')" }}>
            <main className='px-4 md:px-20 pt-10 md:pt-14 md:pb-20 pb-16 bg-white bg-opacity-75 rounded-lg'>
                <div className='text-center'>
                    <Topic
                        mainHeading="Subscribe to Our Newsletter"
                        aboutHeading="Stay updated with the latest news, features, and tools. Join our mailing list to receive the newest updates directly in your inbox."
                    />
                </div>

                <div className='border-2 border-gray-100 flex flex-col md:flex-row mt-16 md:mt-20 justify-between items-center py-8 md:py-20 px-6 rounded-lg bg-white shadow-lg'>
                    <div className='mb-6 md:mb-0 md:text-left text-center'>
                        <h1 className='text-4xl font-roboto font-bold mb-2'>Thank You!</h1>
                        <p className='text-[20px] font-mulish font-bold text-slate-600'>We appreciate your interest. Stay tuned for exciting updates.</p>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4 w-full md:w-auto items-center'>
                        <input type="email" className='border-2 border-gray-300 px-4 py-3 md:py-2 rounded-lg w-full md:w-auto' placeholder='Enter your email' />
                        <Link to="/">
                            <button className='w-full md:w-auto border-2 border-slate-100 py-2 rounded-lg text-[17px] font-roboto font-bold px-6 bg-slate-800 text-white'>
                                Subscribe
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Newsletter;
