import React, { useState } from 'react'
import blockcategories from '../../public/blockcategories'
import { useNavigate } from 'react-router-dom';
import Blockview from './Blockview';
import LandingPageUniversal from '../components/LandingPageUniversal';
import blockLandingImage from "../assets/BlockLanding.webp"

const BlocksCategory = () => {
    // making the search query thing 
    const [searchBlock, setSearchBlock] = useState("");
    const navigate = useNavigate();

    // filter logic according the user query 
    const filteredCategories = blockcategories.filter(category => category.category.toLowerCase().includes(searchBlock.toLowerCase()));

    // if user clicks for any category then we need to forward the user to that particular category page 
    const handleCategoryClick = (categoryName) => {
        navigate(`/blocks/${categoryName}`)
    }

    return (
        <section className='w-full mt-10'>
            <main className='px-4 md:px-16 pt-10 md:pt-14 md:pb-20 pb-16'>
                <LandingPageUniversal mainHeading="Explore Tailwind CSS & React Blocks for Your Website" aboutHeading="Hero blocks play a pivotal role on your homepage by showcasing promotional content or key visuals that embody the essence of your product or service. They effectively create a compelling first impression, serving as impactful banners. Below, explore examples of Hero Blocks crafted using Tailwind CSS and React."
                    landingImage={blockLandingImage}
                />
                <div className='mx-auto pt-28'>
                    {/* <h1 className='font-roboto font-extrabold text-gray-500 text-5xl mb-5 pl-3'>Best Kurated Komponents Blocks</h1> */}
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
        </section>
    )
}

export default BlocksCategory