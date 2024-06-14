import React from 'react';
import { Link } from 'react-router-dom';
import blockdata from '../../public/blockdata';

const BlockCategory = () => {
    const categories = [...new Set(blockdata.map(item => item.category))];

    return (
        <section className='w-full mt-20'>
            <main className='px-4 md:px-16 pt-10 md:pt-14 md:pb-20 pb-16'>
                <h1 className="text-3xl font-roboto font-bold mb-4">Component Categories</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {categories.map(category => (
                        <Link key={category} to={`/blocks/${category}`} className="block p-4 bg-blue-500 text-white rounded">
                            {category}
                        </Link>
                    ))}
                </div>
            </main>
        </section>
    );
};

export default BlockCategory;
