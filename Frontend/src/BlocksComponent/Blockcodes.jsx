import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaImage, FaCode, FaCopy, FaCheck, FaHeart, FaRegHeart } from 'react-icons/fa';


const Blockcodes = () => {
    const { category } = useParams();
    const [blockData, setBlockData] = useState([]);
    const [copyCode, setCopyCode] = useState(null);
    const [viewImage, setViewImage] = useState(true); // State to toggle between image and code

    // Fetching data from API
    useEffect(() => {
        const fetchBlockData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/v1/block/category/${category}`);
                setBlockData(response.data.blockCodes);
            } catch (error) {
                console.log("Error fetching blocksData", error);
            }
        }
        fetchBlockData();
    }, [category]);

    // Copying the code logic
    const handleCopyCode = (id) => {
        setCopyCode(id);
        setTimeout(() => setCopyCode(null), 2000); // Reset after 2 seconds
    }

    // Get the token from local storage
    const token = localStorage.getItem('token');

    // Handling like and unlike functionality
    const handleLike = async (id) => {
        try {
            const response = await axios.put(
                'http://localhost:4000/api/v1/block/likecode',
                { postId: id },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setBlockData(blockData.map(block => block._id === id ? response.data.updatedBlockCode : block));
        } catch (error) {
            console.log("Error liking block", error);
        }
    }

    const handleUnlike = async (id) => {
        try {
            const response = await axios.put(
                'http://localhost:4000/api/v1/block/dislikecode',
                { postId: id },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setBlockData(blockData.map(block => block._id === id ? response.data.updatedBlockCode : block));
        } catch (error) {
            console.log("Error unliking block", error);
        }
    }

    return (
        <section className='w-full pt-28'>
            <main className='px-4 md:px-20 pt-10 md:pt-14 pb-16 md:pb-20'>
                <h1 className='text-4xl md:text-5xl font-roboto font-bold mb-4'>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
                <div className='grid grid-cols-1 gap-6'>
                    {blockData.map(block => (
                        <div key={block._id} className='relative border rounded shadow border-b-2'>
                            <h1 className='text-[18px] md:text-2xl font-mulsih font-extrabold text-blue-500 text-center md:text-start ml-4 mt-2'>{block.title}</h1>
                            <div className='flex justify-center md:justify-end gap-4 border-b-2 border-gray-100 mb-2 py-2 mr-2'>
                                <button
                                    className={`flex items-center gap-1 md:gap-2 text-xs md:text-sm font-mukta font-normal px-2 py-1 md:px-3 md:py-[8px] rounded-md ${viewImage ? 'bg-green-200 text-slate-900' : 'bg-gray-400 text-white'}`}
                                    onClick={() => setViewImage(true)}
                                    title="View Image"
                                >
                                    <FaImage size={16} md:size={20} /> Preview
                                </button>
                                <button
                                    className={`flex items-center gap-1 md:gap-2 text-xs md:text-sm font-mukta font-normal px-2 py-1 md:px-3 md:py-[8px] rounded-md ${!viewImage ? 'bg-green-200 text-slate-900' : 'bg-gray-400 text-white'}`}
                                    onClick={() => setViewImage(false)}
                                    title="View Code"
                                >
                                    <FaCode size={16} md:size={20} /> Code
                                </button>
                                <CopyToClipboard text={block.code} onCopy={() => handleCopyCode(block._id)}>
                                    <button
                                        className='flex items-center gap-1 md:gap-2 text-xs md:text-sm px-2 py-1 md:px-3 md:py-[8px] rounded-md bg-green-500 text-white'
                                        title={copyCode === block._id ? 'Copied!' : 'Copy Code'}
                                    >
                                        {copyCode === block._id ? <FaCheck size={16} md:size={20} /> : <FaCopy size={16} md:size={20} />}
                                    </button>
                                </CopyToClipboard>
                            </div>

                            {viewImage ? (
                                <img src={block.blockImage} alt={block.title} className='w-full h-auto mb-2 rounded-md p-4' />
                            ) : (
                                <div className="p-4">
                                    <SyntaxHighlighter showLineNumbers language="javascript" style={okaidia}>
                                        {block.code}
                                    </SyntaxHighlighter>
                                </div>
                            )}

                            <div className='flex justify-start gap-4 mb-4 ml-4 mr-4'>
                                <button
                                    className='text-red-500 bg-red-100 flex items-center gap-1 md:gap-2 text-xs md:text-xl font-mukta font-normal px-2 py-1 md:px-3 md:py-[8px] rounded-md'
                                    onClick={() => handleLike(block._id)}
                                    title="Like"
                                >
                                    <FaHeart size={22} md:size={20} className='text-red-500' /> {block.likes.length} Likes
                                </button>
                                <button
                                    className='flex bg-red-100 items-center gap-1 md:gap-2 text-xs md:text-xl font-mukta font-normal px-2 py-1 md:px-3 md:py-[8px] rounded-md  text-red-500'
                                    onClick={() => handleUnlike(block._id)}
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
    )
}

export default Blockcodes;
