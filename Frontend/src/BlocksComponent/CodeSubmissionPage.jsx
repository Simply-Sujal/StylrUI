import React, { useState } from 'react';
import BlockSubmissionForm from './BlockSubmissionForm';
import blockdata from '../../public/blockdata';

const CodeSubmissionPage = () => {
    const [data, setData] = useState(blockdata);

    const handleAddComponent = (category, newComponent) => {
        setData(prevData => {
            const categoryIndex = prevData.findIndex(item => item.category === category);

            if (categoryIndex > -1) {
                // Category exists, add component to existing category
                const updatedCategory = {
                    ...prevData[categoryIndex],
                    components: [...prevData[categoryIndex].components, newComponent],
                };
                return [
                    ...prevData.slice(0, categoryIndex),
                    updatedCategory,
                    ...prevData.slice(categoryIndex + 1),
                ];
            } else {
                // Category does not exist, create a new category
                return [
                    ...prevData,
                    {
                        category,
                        components: [newComponent],
                    },
                ];
            }
        });
    };

    return (
        <div className="container mx-auto p-4 pt-28">
            <h1 className="text-3xl font-bold mb-4">Submit New Component</h1>
            <BlockSubmissionForm onAddComponent={handleAddComponent} />
        </div>
    );
};

export default CodeSubmissionPage;
