import React, { useState } from 'react';

const BlockSubmissionForm = ({ onAddComponent }) => {
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [demoImage, setDemoImage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const newComponent = {
            id: Date.now(),
            name,
            code,
            demoImage,
        };

        onAddComponent(category, newComponent);
        setCategory('');
        setName('');
        setCode('');
        setDemoImage('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700">Category</label>
                <input
                    type="text"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    className="mt-1 p-2 w-full border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Component Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="mt-1 p-2 w-full border rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Component Code</label>
                <textarea
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    className="mt-1 p-2 w-full border rounded"
                    rows="6"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Demo Image URL</label>
                <input
                    type="text"
                    value={demoImage}
                    onChange={e => setDemoImage(e.target.value)}
                    className="mt-1 p-2 w-full border rounded"
                    required
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit Code</button>
        </form>
    );
};

export default BlockSubmissionForm;
