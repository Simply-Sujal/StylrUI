import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegCopy, FaCopy, FaHeart, FaRegHeart } from "react-icons/fa";


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
                const response = await axios.get(`https://stylr-ui-backend.vercel.app/api/v1/code/category/${category}`);
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


    // get the token from local storage 
    const token = localStorage.getItem('token');

    // now lets write for like and dislike api calling 
    const handleLike = async (id) => {
        try {
            const response = await axios.put(
                'https://stylr-ui-backend.vercel.app/api/v1/code/likecode',
                { postId: id },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            setComponents(components.map(component => component._id === id ? response.data.updatedCode : component));
        } catch (error) {
            console.log("Error liking the components", error)
        }
    }

    // dislike feature , api calling
    const handleUnlike = async (id) => {
        try {
            const response = await axios.put('https://stylr-ui-backend.vercel.app/api/v1/code/dislikecode',
                { postId: id },
                { headers: { Authorization: `Bearer ${token}` } }
            )
            setComponents(components.map(component => component._id === id ? response.data.updatedCode : component))
        } catch (error) {
            console.log("Error unliking component", error)
        }
    }


    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className='w-full pt-28'>
            <main className='px-4 md:px-20 pt-10 md:pt-14 md:pb-20 pb-16'>
                <h1 className='text-5xl font-roboto font-bold mb-4'>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4'>
                    {components.map(component => (
                        <div key={component._id} className='border p-4 rounded bg-gray-800 text-white'>
                            <h3 className='text-[18px] md:text-2xl font-mulsih font-bold mb-2 text-blue-500'>{component.title.charAt(0).toUpperCase() + component.title.slice(1)}</h3>
                            {component.codeImage && <img src={component.codeImage} alt={component.title} className='w-full h-64 object-contain mb-4' />}

                            <div className='relative'>
                                <SyntaxHighlighter language="javascript" style={okaidia} showLineNumbers>
                                    {component.code}
                                </SyntaxHighlighter>
                                <CopyToClipboard
                                    text={component.code}
                                    onCopy={() => handleCopy(component._id)}
                                >
                                    <button className='absolute top-2 right-2 bg-blue-500 text-white py-2 px-4 rounded'>
                                        {copiedId === component._id ? <FaCopy /> : <FaRegCopy />}
                                    </button>
                                </CopyToClipboard>
                            </div>
                            <div className='flex justify-start gap-4 mb-2 mt-2 ml-2 mr-4 pt-2'>
                                <button
                                    className='text-red-500 bg-red-100 flex items-center gap-1 md:gap-2 text-xs md:text-xl font-mukta font-normal px-2 py-1 md:px-3 md:py-[8px] rounded-md'
                                    onClick={() => handleLike(component._id)}
                                    title="Like"
                                >
                                    <FaHeart size={22} md:size={20} className='text-red-500' /> {component.likes.length} Likes
                                </button>
                                <button
                                    className='flex bg-red-100 items-center gap-1 md:gap-2 text-xs md:text-xl font-mukta font-normal px-2 py-1 md:px-3 md:py-[8px] rounded-md  text-red-500'
                                    onClick={() => handleUnlike(component._id)}
                                    title="Unlike"
                                >
                                    <FaRegHeart size={22} md:size={20} /> Unlike
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </section>
    );
};

export default ComponentDisplay;
