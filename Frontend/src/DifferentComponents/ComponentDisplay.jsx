import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ComponentDisplay = () => {
    const { category } = useParams();
    const [components, setComponents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [copiedId, setCopiedId] = useState(null);

    useEffect(() => {
        const fetchComponents = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`http://localhost:4000/api/v1/code/category/${category}`);
                setComponents(response.data.codes);
            } catch (error) {
                setError('Error fetching components');
                console.error("Error fetching components", error);
            } finally {
                setLoading(false);
            }
        };

        fetchComponents();
    }, [category]);

    const handleCopy = (id) => {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 1500); // Reset copiedId after 1.5 seconds
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className='w-full pt-28'>
            <main className='px-4 md:px-20 pt-10 md:pt-14 md:pb-20 pb-16'>
                <h1 className='text-3xl font-roboto font-bold mb-4'>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4'>
                    {components.map(component => (
                        <div key={component._id} className='border p-4 rounded bg-gray-800 text-white'>
                            {component.codeImage && <img src={component.codeImage} alt={component.title} className='w-full h-32 object-cover mb-4' />}
                            <h3 className='text-lg font-bold mb-2'>{component.title.charAt(0).toUpperCase() + component.title.slice(1)}</h3>
                            <div className='relative'>
                                <SyntaxHighlighter language="javascript" style={okaidia} showLineNumbers>
                                    {component.code}
                                </SyntaxHighlighter>
                                <CopyToClipboard
                                    text={component.code}
                                    onCopy={() => handleCopy(component._id)}
                                >
                                    <button className='absolute top-2 right-2 bg-blue-500 text-white py-1 px-2 rounded'>
                                        {copiedId === component._id ? 'Copied!' : 'Copy'}
                                    </button>
                                </CopyToClipboard>
                            </div>
                            <p className='mt-2'>Likes: {component.likes.length}</p>
                        </div>
                    ))}
                </div>
            </main>
        </section>
    );
};

export default ComponentDisplay;
