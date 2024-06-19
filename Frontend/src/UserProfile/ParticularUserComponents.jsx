import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';

const ParticularUserCodes = () => {
    const [acceptedCode, setAcceptedCode] = useState([]);
    const [expandedComponent, setExpandedComponent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAcceptedCodes = async () => {
            try {
                const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
                const response = await axios.get('https://stylr-ui-backend.vercel.app/api/v1/code/acceptedcodes', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    withCredentials: true, // Ensure cookies are sent with the request for authentication
                });
                setAcceptedCode(response.data.acceptedCodes);
            } catch (error) {
                console.error('Error fetching accepted codes', error);
                if (error.response && error.response.status === 401) {
                    navigate('/login');
                }
            }
        };
        fetchAcceptedCodes();
    }, [navigate]);

    // Function to toggle expanded component
    const toggleExpanded = (id) => {
        if (expandedComponent === id) {
            setExpandedComponent(null);
        } else {
            setExpandedComponent(id);
        }
    };

    // Function to handle copy code action
    const handleCopyCode = (code) => {
        alert('Code copied to clipboard!');
    };

    return (
        <section className='w-full'>
            <main className='px-4 md:px-5 pt-7 md:pt-8 md:pb-10 pb-8 ml-0 md:ml-9'>
                <h1 className='text-3xl font-roboto font-bold mb-8'>Accepted Component Codes</h1>
                <div className='grid grid-cols-1 md:grid-cols-1 gap-6'>
                    {acceptedCode.length > 0 ? (
                        acceptedCode.map(componentcodes => (
                            <div key={componentcodes._id} className={`cursor-pointer relative border p-4 rounded shadow ${expandedComponent === componentcodes._id ? 'bg-gray-200' : ''}`} onClick={() => toggleExpanded(componentcodes._id)}>
                                <h1 className='text-xl font-semibold mb-2 text-blue-500'>{componentcodes.title}</h1>
                                <p className='text-[18px] font-mukta font-semibold'>Status : <span className="text-green-500 font-mukta font-semibold">{componentcodes.status}</span> </p>
                                <p className='text-[18px] font-mukta font-semibold'>Likes : {componentcodes.likes.length}</p>

                                {expandedComponent === componentcodes._id && (
                                    <div className="overflow-x-auto">
                                        <SyntaxHighlighter language="javascript" style={okaidia}>
                                            {componentcodes.code}
                                        </SyntaxHighlighter>
                                        <CopyToClipboard text={componentcodes.code} onCopy={() => handleCopyCode(componentcodes.code)}>
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
