import React, { useState } from 'react'
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-dracula'; // Import the chosen theme

const categories = [
    "Landing Page",
    "Navbar",
    "Sign In Form",
    "Newsletter",
    "Hero Section",
    "Testimonials Section",
    "Authentication",
    "Team Section",
    "Footer",
    "Error Section",
    "Pricing Table",
    "Contact Form",
    "FAQ Section",
    "Blog Post",
    "Gallery",
    "Call to Action",
    "Services Section",
    "Portfolio",
    "Search Bar",
    "Feature Section"
];

const BlockCodeSubmissionForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        code: '',
        category: '',
        blockImage: null
    })


    const handleChange = (e) => {
        const { name, value, files } = e.target
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('title', formData.title)
        data.append('code', formData.code)
        data.append('category', formData.category)
        data.append('blockImage', formData.blockImage)

        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:4000/api/v1/block/blockcodesubmission`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: data
            })
            if (response.ok) {
                const result = await response.json();
                console.log(result);

                setFormData({
                    title: '',
                    code: '',
                    category: '',
                    blockImage: null,
                });
                alert("Code successfully submitted")
            } else {
                const errorResult = await response.json();
                console.error('Error:', errorResult.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white pt-[110px] md:pt-[135px]">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm md:shadow-lg w-full max-w-[650px]">
                <h2 className="text-4xl font-roboto font-extrabold mb-3">Submit Your Code</h2>
                <div className='mb-4'>
                    <label className=' font-roboto font-extrabold mb-3'>
                        Title
                    </label>
                    <input
                        type="text"
                        name='title'
                        value={formData.title}
                        onChange={handleChange}
                        placeholder='Enter title for your code'
                        className='mt-1 p-2 w-full border rounded font-roboto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold'
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 font-roboto font-bold'>
                        Category
                    </label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded font-roboto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    >
                        <option value="">Select a category...</option>
                        {
                            categories.map(category => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="code_editor">
                        Code
                    </label>
                    <AceEditor
                        mode="javascript"
                        theme="dracula"
                        value={formData.code}
                        onChange={(code) => setFormData({ ...formData, code })}
                        name="code_editor"
                        editorProps={{ $blockScrolling: true }}
                        placeholder="Write your code here..."
                        width="100%"
                        height="400px"
                        fontSize={14}
                        setOptions={{
                            showLineNumbers: true,
                            tabSize: 2,
                        }}
                        style={{
                            borderRadius: '8px',
                            padding: '15px',
                            fontFamily: 'monospace',
                        }}
                        className="transition-all duration-200 ease-in-out focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-roboto font-bold">Code Image (WebP format, max 250kb)</label>
                    <input
                        type="file"
                        name="blockImage"
                        accept=".webp"
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded font-roboto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    />
                </div>
                <button type="submit" className="inline-flex items-center justify-center px-5 py-3 text-[18px] font-roboto font-bold tracking-wide leading-6 text-white whitespace-no-wrap bg-orange-600 border border-orange-700 rounded-lg shadow-sm hover:bg-orange-700 focus:outline-none transition-all duration-100">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default BlockCodeSubmissionForm