import React, { useState } from 'react';
import blockcategories from '../../public/blockcategories';
import { useNavigate } from 'react-router-dom';
import Blockview from './Blockview';
import LandingPageUniversal from '../components/LandingPageUniversal';
import blockLandingImage from "../assets/BlockLanding.webp";
import StartContributing from '../components/StartContributing';

const BlocksCategory = () => {
    const [searchBlock, setSearchBlock] = useState("");
    const navigate = useNavigate();

    const filteredCategories = blockcategories.filter(category => category.category.toLowerCase().includes(searchBlock.toLowerCase()));

    const handleCategoryClick = (categoryName) => {
        navigate(`/blocks/${categoryName}`);

        // Smooth scroll to the top of the page
        window.scrollTo({
            top: 0,
        });
    }

    return (
        <section className='w-full mt-10'>
            <main className='px-4 md:px-16 pt-10 md:pt-14 md:pb-20 pb-16'>
                <LandingPageUniversal
                    mainHeading="Explore Tailwind CSS & React Blocks for Your Website"
                    aboutHeading="Hero blocks play a pivotal role on your homepage by showcasing promotional content or key visuals that embody the essence of your product or service. They effectively create a compelling first impression, serving as impactful banners. Below, explore examples of Hero Blocks crafted using Tailwind CSS and React."
                    landingImage={blockLandingImage}
                />
                <div className='mx-auto pt-28'>
                    <div className='flex justify-center md:justify-start mb-4 mr-0 md:ml-3'>
                        <input
                            type="text"
                            placeholder='Search by category 🔍'
                            value={searchBlock}
                            onChange={(e) => setSearchBlock(e.target.value)}
                            className='border rounded px-4 py-2 w-[300px]'
                        />
                    </div>

                    <section className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-between gap-8'>
                        {
                            filteredCategories.map(category => (
                                <div key={category.category} className='hover:scale-105 transition-all duration-150'>
                                    <button
                                        onClick={() => handleCategoryClick(category.category)}
                                        className='block w-full'
                                    >
                                        <Blockview
                                            componentImage={category.image}
                                            blockHeading={category.category}
                                            aboutComponent={category.description}
                                        />
                                    </button>
                                </div>
                            ))
                        }
                    </section>
                </div>
            </main>
            <StartContributing
                mainHeading="Do you want to start contributing to blocks?"
                formLink="/blockSubmissionForm"
            />
        </section>
    );
}

export default BlocksCategory;
