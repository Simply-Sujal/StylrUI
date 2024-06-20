import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/Auth';
import { FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import coverImage from '../assets/Profile_CoverImage.webp';
import ParticularUserCodes from './ParticularUserCodes';
import ParticularUserComponents from './ParticularUserComponents';

const UserInfo = () => {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState({
        image: "",
        name: "",
        location: "",
        profession: ""
    });

    useEffect(() => {
        if (user) {
            setUserInfo({
                image: user.image,
                name: user.name,
                location: user.location,
                profession: user.profession
            });
        }
    }, [user]);


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <section className='w-full'>
            <main className='flex flex-col lg:flex-row justify-center px-4 sm:px-20'>
                <div className='mt-16 md:mt-0 w-full lg:w-2/3 relative rounded-tl-xl rounded-tr-xl'>
                    <div className='w-full'>
                        <img src={coverImage} alt="cover photo" className='h-56 sm:h-96 w-full object-cover rounded-br-xl rounded-bl-xl rounded-tl-xl rounded-tr-xl' />
                    </div>
                    <div className='absolute top-44 sm:top-72 left-10'>
                        <img src={userInfo.image} alt="User profile" className='w-36 h-36 sm:w-48 sm:h-48 rounded-full border-4 border-white object-cover' />
                    </div>
                    <div className='mt-24 sm:mt-6 ml-4 md:ml-64 pb-2'>
                        <h1 className='text-2xl sm:text-4xl font-roboto font-extrabold text-slate-800'>{capitalizeFirstLetter(userInfo.name)}</h1>
                        <div className='flex items-center text-lg sm:text-xl text-gray-500 font-semibold mt-2'>
                            <FaBriefcase className='mr-2' /> {capitalizeFirstLetter(userInfo.profession)}
                        </div>
                        <div className='flex items-center text-lg sm:text-xl text-gray-500 font-semibold mt-2'>
                            <FaMapMarkerAlt className='mr-2' /> {capitalizeFirstLetter(userInfo.location)}
                        </div>
                    </div>

                    <div className='mt-4 md:mt-24 sm:mt-6 ml-0 md:ml-10 bg-white rounded-lg p-4'>
                        <h2 className='text-2xl font-roboto font-bold text-gray-800 mb-4'>About Me</h2>
                        <p className='text-lg text-gray-700 font-mulsih font-bold'>Hi, my name is {userInfo.name},</p>
                        <p className='text-lg text-gray-700 font-mulsih font-bold mb-3'>I am {capitalizeFirstLetter(userInfo.profession)} from {capitalizeFirstLetter(userInfo.location)}.</p>
                        <p className='text-lg text-gray-700 font-mulsih font-bold'>I am very passionate about building diverse projects and contributing extensively to StylrUI. I enjoy using various components to create successful projects.</p>
                    </div>

                    <ParticularUserCodes />

                    <ParticularUserComponents />

                </div>

                <div className='hidden md:block w-full lg:w-1/3 h-[120px] bg-white p-5 mt-10 lg:mt-0 lg:ml-5 rounded-lg shadow-md'>
                    <h2 className='text-xl font-bold mb-2'>Location</h2>
                    <div className='text-[18px] flex items-center text-gray-700 mb-2'>
                        <FaMapMarkerAlt className='mr-2' /> {capitalizeFirstLetter(userInfo.location)}
                    </div>
                    {/* Add more user details here */}

                </div>


            </main>
        </section>
    );
}

export default UserInfo;
