import React, { useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-dracula'; // Import the chosen theme
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const categories = [
    "Accordion", "Alert", "Artboard", "Avatar", "Badge", "Bottom navigation", "Breadcrumbs", "Button",
    "Card", "Carousel", "Chat bubble", "Checkbox", "Collapse", "Countdown", "Diff", "Divider", "Drawer",
    "Dropdown", "File Input", "Footer", "Hero", "Indicator", "Join", "Kbd", "Link", "Loading", "Mask",
    "Menu", "Browser mockup", "Code mockup", "Phone mockup", "Window mockup", "Modal", "Navbar", "Pagination",
    "Progress", "Radial progress", "Radio", "Range slider", "Rating", "Select", "Skeleton", "Stack", "Stat",
    "Steps", "Swap", "Tabs", "Table", "Textarea", "Theme Controller", "Timeline", "Toast", "Toggle", "Tooltip"
];

const CodeSubmissionForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        code: '',
        category: '', // Updated state to include category
        codeImage: null,
    });

    const [loading, setLoading] = useState(false); // Loading state

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true on form submission

        const data = new FormData();
        data.append('title', formData.title);
        data.append('code', formData.code);
        data.append('category', formData.category);
        data.append('codeImage', formData.codeImage);

        try {
            const token = localStorage.getItem('token');
            const response = await fetch('https://stylr-ui-backend.vercel.app/api/v1/code/codesubmission', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: data,
            });

            if (response.ok) {
                const result = await response.json();
                // console.log(result);

                setFormData({
                    title: '',
                    code: '',
                    category: '',
                    codeImage: null,
                });
                toast.success("Code successfully submitted");
            } else {
                const errorResult = await response.json();
                // console.error('Error:', errorResult.message);
                toast.error("Failed to submit form");
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); // Set loading to false after form submission
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white pt-[110px] md:pt-[135px]">
            <ToastContainer />
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm md:shadow-lg w-full max-w-[650px]">
                <h2 className="text-4xl font-roboto font-extrabold mb-3">Submit Your Components Code</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-roboto font-bold"><span className='text-red-500'>* </span>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter title for your code"
                        className="mt-1 p-2 w-full border rounded font-roboto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-roboto font-bold"><span className='text-red-500'>* </span>Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded font-roboto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    >
                        <option value="">Select a category...</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="code_editor">
                        <span className='text-red-500'>* </span>Code
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
                    <label className="block text-gray-700 font-roboto font-bold"><span className='text-red-500'>* </span>Output Image (max 1mb)</label>
                    <input
                        type="file"
                        name="codeImage"
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded font-roboto font-semibold bg-[#f7fbff] placeholder-opacity-75 md:placeholder-opacity-50 placeholder-gray-800 placeholder:font-bold"
                    />
                </div>
                <button
                    type="submit"
                    className="inline-flex items-center justify-center px-5 py-3 text-[18px] font-roboto font-bold tracking-wide leading-6 text-white whitespace-no-wrap bg-orange-600 border border-orange-700 rounded-lg shadow-sm hover:bg-orange-700 focus:outline-none transition-all duration-100 relative"
                    style={{ minWidth: "160px" }} // Ensure a minimum width to prevent resizing
                    disabled={loading} // Disable the button when loading
                >
                    {loading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                                className="animate-spin h-5 w-5 mr-3"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8zm10 5.291V14a2 2 0 10-4 0v3.291a6 6 0 114 0z"
                                ></path>
                            </svg>
                            <span>Loading...</span>
                        </div>
                    )}
                    {!loading && "Submit"}
                </button>
            </form>
        </div>
    );
};

export default CodeSubmissionForm;
