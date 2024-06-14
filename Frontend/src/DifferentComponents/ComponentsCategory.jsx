import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryComponent from './CategoryComponent';
import categories from '../../public/categories';


const ComponentsCategory = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const filteredCategories = categories.filter(category =>
        category.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCategoryClick = (categoryName) => {
        navigate(`/components/${categoryName}`);
    };

    return (
        <section className='w-full mt-10'>
            <main className='px-4 md:px-16 pt-10 md:pt-14 md:pb-20 pb-16'>
                <div className='mx-auto pt-28'>
                    <h1 className='font-roboto font-extrabold text-gray-500 text-5xl mb-5 pl-3'>Best Kurated Komponents</h1>
                    <div className='flex justify-end mb-4 mr-3'>
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
                                    onClick={() => handleCategoryClick(category.category)}
                                    className='block w-full'
                                >
                                    <CategoryComponent
                                        componentHeading={category.category}
                                        aboutComponent={category.description}
                                    />
                                </button>
                            </div>
                        ))}
                    </section>
                </div>
            </main>
        </section>
    );
};

export default ComponentsCategory;
