import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ParticularUserComponents = () => {
    const [acceptedCode, setAcceptedCode] = useState([]);
    const navigate = useNavigate(); // Use useNavigate hook

    useEffect(() => {
        const fetchAcceptedCodes = async () => {
            try {
                const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
                const response = await axios.get('http://localhost:4000/api/v1/code/acceptedcodes', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    withCredentials: true, // Ensure cookies are sent with the request for authentication
                });
                setAcceptedCode(response.data.acceptedCodes);
            } catch (error) {
                console.log('Error fetching accepted codes', error);
                if (error.response && error.response.status === 401) {
                    navigate('/login');
                }
            }
        };
        fetchAcceptedCodes();
    }, [navigate]);

    return (
        <section className='w-full'>
            <main className='px-4 md:px-5 pt-5 md:pt-5 md:pb-20 pb-16 ml-0 md:ml-9'>
                <h1 className='text-3xl font-roboto font-bold mb-8'>Accepted Components Codes</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {acceptedCode.length > 0 ? (acceptedCode.map(componentcodes => (
                        <div key={componentcodes._id} className='relative border p-4 rounded shadow'>
                            <h1 className='text-xl font-semibold mb-2 text-blue-500'>{componentcodes.title}</h1>
                            {/* <pre className='bg-gray-100 p-2 rounded mb-2'>{block.code}</pre> */}
                            <p className='text-[18px] font-mukta font-semibold'>Status : <span className="text-green-500 font-mukta font-semibold">{componentcodes.status}</span> </p>
                            <p className='text-[18px] font-mukta font-semibold'>Likes : {componentcodes.likes.length}</p>
                        </div>
                    ))) :
                        (<h1 className='text-2xl text-red-500'>* No codes Available</h1>)
                    }
                </div>
            </main>
        </section>
    );
};

export default ParticularUserComponents;
