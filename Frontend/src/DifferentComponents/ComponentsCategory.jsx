import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryComponent from './CategoryComponent';
import categories from '../../public/categories';
import LandingPageUniversal from '../components/LandingPageUniversal';
import blockLandingImage from "../assets/BlockLanding.webp";
import StartContributing from '../components/StartContributing';
import Perks from '../components/Perks';

const ComponentsCategory = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const filteredCategories = categories.filter(category =>
        category.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCategoryClick = (categoryName) => {
        navigate(`/components/${categoryName}`);

        window.scrollTo({
            top: 0,
        });
    };

    return (
        <section className='w-full mt-10 mb-10'>
            <main className='px-4 md:px-16 pt-10 md:pt-14 md:pb-20 pb-16'>
                <LandingPageUniversal
                    mainHeading="Discover Free Tailwind CSS & React Components"
                    aboutHeading="Browse our collection of versatile components designed to enhance your website's functionality and design. Quickly integrate beautiful, responsive elements built with Tailwind CSS and React."
                    landingImage={blockLandingImage}
                />
                <div className='mx-auto pt-20 md:pt-28'>
                    <div className='flex justify-center md:justify-start mb-4 ml-0 md:ml-3'>
                        <input
                            type='text'
                            placeholder='Search by category 🔍'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='border rounded px-4 py-2 w-[300px]'
                        />
                    </div>
                    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-8'>
                        {filteredCategories.map(category => (
                            <div key={category.category} className='hover:scale-105 transition-all duration-150'>
                                <button
                                    onClick={() => {
                                        handleCategoryClick(category.category);
                                    }}
                                    className='block w-full'
                                >
                                    <CategoryComponent
                                        componentImage={category.image}
                                        componentHeading={category.category}
                                        aboutComponent={category.description}
                                    />
                                </button>
                            </div>
                        ))}
                    </section>
                </div>
            </main>
            <Perks />
            <StartContributing
                mainHeading="Do you want to start contributing to components ?"
                formLink="/codesubmissionform"
            />

        </section>
    );
};

export default ComponentsCategory;
