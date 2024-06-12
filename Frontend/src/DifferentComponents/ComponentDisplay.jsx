import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ComponentDisplay = ({ category }) => {
    const [components, setComponents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComponents = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`http://localhost:4000/api/v1/code/category/${category}`);
                setComponents(response.data.codes); // Adjusting to response.data.codes
            } catch (error) {
                setError('Error fetching components');
                console.error("Error fetching components", error);
            } finally {
                setLoading(false);
            }
        };

        fetchComponents();
    }, [category]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            {components.map(component => (
                <div key={component._id}>
                    {component.codeImage && <img src={component.codeImage} alt={component.title} />}
                    <pre>{component.code}</pre>
                    <p>Likes: {component.likes.length}</p>
                </div>
            ))}
        </div>
    );
};

export default ComponentDisplay;
