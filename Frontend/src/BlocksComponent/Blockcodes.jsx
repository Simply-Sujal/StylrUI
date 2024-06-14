import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
        setTimeout(() => setCopyCode(null), 1500);
    }

    return (
        <section className='w-full pt-28'>
            <main className='px-4 md:px-20 pt-10 md:pt-14 md:pb-20 pb-16'>
                <h1 className='text-3xl font-roboto font-bold mb-4'>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>

                <button
                    className="mb-6 px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => setViewImage(!viewImage)}
                >
                    Toggle View
                </button>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {blockData.map(block => (
                        <div key={block._id} className='border p-4 rounded shadow'>
                            {viewImage ? (
                                <img src={block.image} alt={block.title} className='w-full h-auto mb-4' />
                            ) : (
                                <>
                                    <SyntaxHighlighter language="javascript" style={okaidia}>
                                        {block.code}
                                    </SyntaxHighlighter>
                                    <CopyToClipboard text={block.code} onCopy={() => handleCopyCode(block._id)}>
                                        <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
                                            {copyCode === block._id ? 'Copied!' : 'Copy Code'}
                                        </button>
                                    </CopyToClipboard>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </main>
        </section>
    )
}

export default Blockcodes;
