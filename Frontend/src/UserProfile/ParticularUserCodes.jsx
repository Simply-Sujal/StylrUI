import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';

const ParticularUserCodes = () => {
    const [acceptedCode, setAcceptedCode] = useState([]);
    const [expandedBlock, setExpandedBlock] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAcceptedCodes = async () => {
            try {
                const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
                const response = await axios.get('https://stylr-ui-backend.vercel.app/api/v1/block/acceptedcodes', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    withCredentials: true, // Ensure cookies are sent with the request for authentication
                });
                setAcceptedCode(response.data.acceptedBlockCodes);
            } catch (error) {
                console.log('Error fetching accepted codes', error);
                if (error.response && error.response.status === 401) {
                    // Redirect to login if not authenticated
                    navigate('/login');
                }
            }
        };
        fetchAcceptedCodes();
    }, [navigate]);

    // Function to toggle expanded block
    const toggleExpanded = (id) => {
        if (expandedBlock === id) {
            setExpandedBlock(null); // Collapse if already expanded
        } else {
            setExpandedBlock(id); // Expand if not expanded
        }
    };

    // Function to handle copy code action
    const handleCopyCode = (code) => {
        alert('Code copied to clipboard!');
    };

    return (
        <section className='w-full'>
            <main className='px-4 md:px-5 pt-7 md:pt-8 md:pb-10 pb-8 ml-0 md:ml-9'>
                <h1 className='text-3xl font-roboto font-bold mb-8'>Accepted Block Codes</h1>
                <div className='grid grid-cols-1 md:grid-cols-1 gap-6'>
                    {acceptedCode.length > 0 ? (
                        acceptedCode.map(block => (
                            <div key={block._id} className={`cursor-pointer relative border p-4 rounded shadow ${expandedBlock === block._id ? 'bg-gray-200' : ''}`} onClick={() => toggleExpanded(block._id)}>
                                <h1 className='text-xl font-semibold mb-2 text-blue-500'>{block.title}
                                </h1>
                                <p className='text-[18px] font-mukta font-semibold'>Status : <span className="text-green-500 font-mukta font-semibold">{block.status}</span> </p>
                                <p className='text-[18px] font-mukta font-semibold'>Likes : {block.likes.length}</p>
                                {/* Conditionally render more details if block is expanded */}
                                {expandedBlock === block._id && (
                                    <div className="overflow-x-auto">
                                        <SyntaxHighlighter language="javascript" style={okaidia}>
                                            {block.code}
                                        </SyntaxHighlighter>
                                        <CopyToClipboard text={block.code} onCopy={() => handleCopyCode(block.code)}>
                                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mt-2 flex items-center">
                                                <FaCopy className="mr-2" /> Copy Code
                                            </button>
                                        </CopyToClipboard>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <h1 className='text-2xl text-red-500'>* No codes Available</h1>
                    )}
                </div>
            </main>
        </section>
    );
};

export default ParticularUserCodes;
