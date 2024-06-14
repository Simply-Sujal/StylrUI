import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryComponent from '../DifferentComponents/CategoryComponent';
import categories from '../../public/categories';
import Topic from '../components/Topic';

const HomeCategoryShow = () => {
    const navigate = useNavigate();

    // Take the first 28 categories from the list
    const showcasedCategories = categories.slice(0, 28);

    const handleCategoryClick = (categoryName) => {
        navigate(`/components/${categoryName}`);
    };

    return (
        <section className='w-full'>
            <main className='px-4 md:px-16 pt-10 md:pt-10 md:pb-20 pb-16'>
                <div className='mx-auto pt-28'>
                    <Topic
                        smallHeading="Ready-to-use"
                        mainHeading="200+ Tailwind CSS Components"
                        aboutHeading="Our ready-to-use Tailwind CSS components, like buttons, inputs, cards, tables, and more, will help you create visually appealing web pages for your project in a fraction of the time!"
                    />
                    <nav className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-8 mt-20'>
                        {showcasedCategories.map(category => (
                            <div key={category.category} className=' h-[230px] border-2 border-gray-50 rounded-lg hover:border-gray-100'>
                                <button
                                    onClick={() => handleCategoryClick(category.category)}
                                    className='block w-full'
                                >
                                    <CategoryComponent
                                        componentHeading={category.category}
                                    />
                                </button>
                            </div>
                        ))}
                    </nav>
                </div>
            </main>
        </section>
    );
};

export default HomeCategoryShow;
