import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryComponent from './CategoryComponent';

const categories = ['alert', 'accordion', 'dropdown', 'footer', 'form'];

const ComponentsCategory = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const filteredCategories = categories.filter(category =>
        category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCategoryClick = (category) => {
        navigate(`/category/${category}`);
    };

    return (
        <section className='w-full mt-10'>
            <main className='px-4 md:px-20 pt-10 md:pt-14 md:pb-20 pb-16'>
                <div className='container mx-auto pt-32'>
                    <div className='flex justify-center mb-4'>
                        <input
                            type='text'
                            placeholder='Search by category...'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='border rounded px-4 py-2 w-full max-w-md'
                        />
                    </div>
                    <nav className='grid grid-cols-4 gap-5'>
                        {filteredCategories.map(category => (
                            <div>
                                <button
                                    key={category}
                                    onClick={() => handleCategoryClick(category)}
                                    className={`px-2 py-2 rounded`}
                                >
                                    <CategoryComponent componentHeading={category} aboutComponent={`Details about ${category}`} />
                                </button>
                            </div>
                        ))}
                    </nav>
                </div>
            </main>
        </section>
    );
};

export default ComponentsCategory;
