import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import blockdata from '../../public/blockdata';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiCode, FiImage } from 'react-icons/fi';
import clsx from 'clsx';

const BlockDisplay = () => {
    const { category } = useParams();
    const components = blockdata.find(item => item.category === category)?.components || [];
    const [view, setView] = useState('image');

    const toggleView = () => {
        setView(prevView => (prevView === 'image' ? 'code' : 'image'));
    };

    return (
        <section className='w-full mt-20'>
            <main className='px-4 md:px-16 pt-10 md:pt-14 md:pb-20 pb-16'>
                <h1 className="text-3xl font-bold mb-4">{category}</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                    {components.map(component => (
                        <div key={component.id} className="border p-4 rounded-lg relative">
                            <h2 className="text-lg font-bold mb-4">{component.name}</h2>
                            <button
                                onClick={toggleView}
                                className={clsx(
                                    'absolute top-4 right-4 p-2 rounded-full bg-blue-500 text-white flex items-center justify-center transition duration-300',
                                    {
                                        'hover:bg-blue-600': view === 'image',
                                        'hover:bg-blue-600': view === 'code',
                                    }
                                )}
                            >
                                {view === 'image' ? <FiCode size={20} /> : <FiImage size={20} />}
                            </button>
                            {view === 'image' ? (
                                <img
                                    src={component.demoImage}
                                    alt={component.name}
                                    className="mt-2 w-full h-auto md:h-[300px] lg:h-[400px] object-cover"
                                />
                            ) : (
                                <pre className="bg-gray-800 text-white p-4 rounded mt-2 overflow-x-auto">
                                    {component.code}
                                </pre>
                            )}
                            {view === 'code' && (
                                <CopyToClipboard text={component.code}>
                                    <button className="mt-2 bg-green-500 text-white p-2 rounded">Copy Code</button>
                                </CopyToClipboard>
                            )}
                        </div>
                    ))}
                </div>
            </main>
        </section>
    );
};

export default BlockDisplay;
