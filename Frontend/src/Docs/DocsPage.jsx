import React, { useState } from 'react';
import Perks from '../components/Perks';
import Newsletter from '../components/Newsletter';

// Updated instructions object with HTML content and Tailwind CSS classes for styling
const instructions = {
  installation: `
    <h3 class="text-4xl font-roboto font-bold mb-3 text-gray-800">Get Started with StylrUI</h3>
    <p class="mb-10 text-lg font-mulish text-gray-500">StylrUI is a free and open-source components library for ReactJS and Tailwind CSS.</p>
    <div class="mb-4">
      <h4 class="text-2xl font-roboto font-semibold mb-2">Installation</h4>
      <p class="text-lg font-mulish text-gray-500 mb-3">Learn how to use StylrUI components from this documentation to quickly and easily create elegant and flexible pages using Tailwind CSS.</p>
      <p class="text-lg font-mulish text-gray-500 mb-10">Before you start, ensure you have Tailwind CSS installed in your React project. StylrUI is dependency-free, meaning you don't need to install any additional libraries to use it. Here’s how to set up Tailwind CSS in your React project or you can refer to the <a href="https://tailwindcss.com/docs/installation/framework-guides?ref=material-tailwind" class="font-semibold text-orange-500" target="_blank">Tailwind CSS Installation Guide</a>.</p>
      
      <div class="mb-8">
        <h4 class="text-2xl font-roboto font-semibold mb-4">Step 1: Install Tailwind CSS</h4>
        <pre class="bg-gray-200 p-2 rounded">npm install -D tailwindcss\nnpx tailwindcss init</pre>
      </div>

      <div class="mb-8">
        <h4 class="text-2xl font-roboto font-semibold mb-2">Step 2: Configure Tailwind CSS</h4>
        <p class="text-lg font-mulish text-gray-500 mb-3">Add the paths to all of your template files in your <code class="bg-gray-200 p-1 rounded">tailwind.config.js</code> file:</p>
        <pre class="bg-gray-200 p-2 rounded">module.exports = {\n  content: [\n    "./src/**/*.{js,jsx,ts,tsx}",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}</pre>
      </div>

      <div class="mb-8">
        <h4 class="text-2xl font-roboto font-semibold mb-2">Step 3: Add Tailwind CSS to your CSS file</h4>
        <p class="text-lg font-mulish text-gray-500 mb-3">Create a <code class="bg-gray-200 p-1 rounded">src/index.css</code> file and add the following lines:</p>
        <pre class="bg-gray-200 p-2 rounded">@tailwind base;\n@tailwind components;\n@tailwind utilities;</pre>
      </div>

      <div class="mb-8">
        <h4 class="text-2xl font-roboto font-semibold mb-2">Step 4: Import CSS in your project</h4>
        <p class="text-lg font-mulish text-gray-500 mb-3">Ensure your <code class="bg-gray-200 p-1 rounded">src/index.js</code> file imports the newly created CSS file:</p>
        <pre class="bg-gray-200 p-2 rounded">import './index.css';</pre>
      </div>

      <p class="text-lg font-mulish text-gray-500 mb-3">Now, you are all set up with Tailwind CSS! You can start using StylrUI components without needing to install any additional dependencies.</p>
    </div>
  `,

  react: `
    <h3 class="text-4xl font-roboto font-bold mb-3 text-gray-800">Get Started with StylrUI in React</h3>
    <p class="mb-10 text-lg font-mulish text-gray-500">StylrUI is a free and open-source components library for ReactJS and Tailwind CSS.</p>
    <div class="mb-4">
      <h4 class="text-2xl font-roboto font-semibold mb-2">Installation</h4>
      <p class="text-lg font-mulish text-gray-500 mb-3">To use StylrUI in your React project, follow these steps:</p>
      <p class="text-lg font-mulish text-gray-500 mb-10">Before you start, ensure you have Tailwind CSS installed in your React project. StylrUI is dependency-free, meaning you don't need to install any additional libraries to use it. Here’s how to set up Tailwind CSS in your React project or you can refer to <a href="https://tailwindcss.com/docs/installation/framework-guides?ref=material-tailwind" class="font-semibold text-orange-500" target="_blank">Tailwind CSS installation Guide</a></p>
      
      <div class="mb-8">
        <h4 class="text-2xl font-roboto font-semibold mb-4">Step 1: Install Tailwind CSS</h4>
        <pre class="bg-gray-200 p-2 rounded">npm install -D tailwindcss\nnpx tailwindcss init</pre>
      </div>

      <div class="mb-8">
        <h4 class="text-2xl font-roboto font-semibold mb-2">Step 2: Configure Tailwind CSS</h4>
        <p class="text-lg font-mulish text-gray-500 mb-3">Add the paths to all of your template files in your <code class="bg-gray-200 p-1 rounded">tailwind.config.js</code> file:</p>
        <pre class="bg-gray-200 p-2 rounded">module.exports = {\n  content: [\n    "./src/**/*.{js,jsx,ts,tsx}",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}</pre>
      </div>

      <div class="mb-8">
        <h4 class="text-2xl font-roboto font-semibold mb-2">Step 3: Add Tailwind CSS to your CSS file</h4>
        <p class="text-lg font-mulish text-gray-500 mb-3">Create a <code class="bg-gray-200 p-1 rounded">src/index.css</code> file and include the following lines to apply Tailwind's base, components, and utilities:</p>
        <pre class="bg-gray-200 p-2 rounded">@tailwind base;\n@tailwind components;\n@tailwind utilities;</pre>
      </div>

      <div class="mb-8">
        <h4 class="text-2xl font-roboto font-semibold mb-2">Step 4: Import CSS in your project</h4>
        <p class="text-lg font-mulish text-gray-500 mb-3">Make sure your <code class="bg-gray-200 p-1 rounded">src/index.js</code> file imports the newly created CSS file:</p>
        <pre class="bg-gray-200 p-2 rounded">import './index.css';</pre>
      </div>

      <p class="text-lg font-mulish text-gray-500 mb-3">Now, you are all set up with Tailwind CSS and ready to start using StylrUI components in your React project.</p>
    </div>
  `,

  html: `
     <h3 class="text-4xl font-roboto font-bold mb-3 text-gray-800">Get Started with StylrUI in HTML</h3>
    <p class="mb-10 text-lg font-mulish text-gray-500">StylrUI offers an easy way to incorporate modern UI components into your HTML projects. Powered by Tailwind CSS, StylrUI ensures that you can create stylish and responsive web pages without needing to install any additional dependencies.</p>
    <div class="mb-4">
      <h4 class="text-2xl font-roboto font-semibold mb-2">Integration</h4>
      <p class="text-lg font-mulish text-gray-500 mb-3">Using StylrUI with HTML is straightforward and does not require any external libraries or frameworks beyond Tailwind CSS.</p>
      
      <p class="text-lg font-mulish text-gray-500 mb-10">Ensure you have Tailwind CSS set up in your HTML project before incorporating StylrUI components:</p>
      
      <div class="mb-8">
        <h4 class="text-2xl font-roboto font-semibold mb-2">Step 1: Install Tailwind CSS</h4>
        <pre class="bg-gray-200 p-2 rounded">npm install -D tailwindcss\nnpx tailwindcss init</pre>
      </div>
      <div class="mb-8">
        <h4 class="text-2xl font-roboto font-semibold mb-2">Step 2: Configure Tailwind CSS</h4>
        <p class="text-lg font-mulish text-gray-500 mb-3">Add the paths to all of your template files in your <code class="bg-gray-200 p-1 rounded">tailwind.config.js</code> file:</p>
        <pre class="bg-gray-200 p-2 rounded">module.exports = {\n  content: [\n    "./src/**/*.{js,jsx,ts,tsx}",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}</pre>
      </div>

      <div class="mb-8">
        <h4 class="text-2xl font-roboto font-semibold mb-2">Step 3: Add Tailwind CSS to your CSS file</h4>
        <p class="text-lg font-mulish text-gray-500 mb-3">Create a <code class="bg-gray-200 p-1 rounded">src/index.css</code> file and include the following lines to apply Tailwind's base, components, and utilities:</p>
        <pre class="bg-gray-200 p-2 rounded">@tailwind base;\n@tailwind components;\n@tailwind utilities;</pre>
      </div>

      <div class="mb-8">
        <h4 class="text-2xl font-roboto font-semibold mb-2">Step 4: Import CSS in your project</h4>
        <p class="text-lg font-mulish text-gray-500 mb-3">Make sure your <code class="bg-gray-200 p-1 rounded">pages/_app.js</code> file imports the newly created CSS file:</p>
        <pre class="bg-gray-200 p-2 rounded">import '../styles/index.css';</pre>
      </div>

      <p class="text-lg font-mulish text-gray-500 mb-3">Now, you are all set up with Tailwind CSS and ready to start using StylrUI components in your Next.js project.</p>
    </div>
  `,

  next: `
    <h3 class="text-4xl font-roboto font-bold mb-3 text-gray-800">Get Started with StylrUI in Next.js</h3>
    <p class="mb-10 text-lg font-mulish text-gray-500">StylrUI is a free and open-source components library for Next.js and Tailwind CSS.</p>
    <div class="mb-4">
      <h4 class="text-2xl font-roboto font-semibold mb-2">Installation</h4>
      <p class="text-lg font-mulish text-gray-500 mb-3">To use StylrUI in your Next.js project, follow these steps:</p>
      <p class="text-lg font-mulish text-gray-500 mb-10">Before you start, ensure you have Tailwind CSS installed in your Next.js project. StylrUI is dependency-free, meaning you don't need to install any additional libraries to use it. Here’s how to set up Tailwind CSS in your Next.js project or you can refer to <a href="https://tailwindcss.com/docs/installation/framework-guides?ref=material-tailwind" class="font-semibold text-orange-500" target="_blank">Tailwind CSS installation Guide</a></p>
      
      <div class="mb-8">
        <h4 class="text-2xl font-roboto font-semibold mb-4">Step 1: Install Tailwind CSS</h4>
        <pre class="bg-gray-200 p-2 rounded">npm install -D tailwindcss\nnpx tailwindcss init</pre>
      </div>

      <div class="mb-8">
        <h4 class="text-2xl font-roboto font-semibold mb-2">Step 2: Configure Tailwind CSS</h4>
        <p class="text-lg font-mulish text-gray-500 mb-3">Add the paths to all of your template files in your <code class="bg-gray-200 p-1 rounded">tailwind.config.js</code> file:</p>
        <pre class="bg-gray-200 p-2 rounded">module.exports = {\n  content: [\n    "./src/**/*.{js,jsx,ts,tsx}",\n  ],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}</pre>
      </div>

      <div class="mb-8">
        <h4 class="text-2xl font-roboto font-semibold mb-2">Step 3: Add Tailwind CSS to your CSS file</h4>
        <p class="text-lg font-mulish text-gray-500 mb-3">Create a <code class="bg-gray-200 p-1 rounded">src/index.css</code> file and include the following lines to apply Tailwind's base, components, and utilities:</p>
        <pre class="bg-gray-200 p-2 rounded">@tailwind base;\n@tailwind components;\n@tailwind utilities;</pre>
      </div>

      <div class="mb-8">
        <h4 class="text-2xl font-roboto font-semibold mb-2">Step 4: Import CSS in your project</h4>
        <p class="text-lg font-mulish text-gray-500 mb-3">Make sure your <code class="bg-gray-200 p-1 rounded">pages/_app.js</code> file imports the newly created CSS file:</p>
        <pre class="bg-gray-200 p-2 rounded">import '../styles/index.css';</pre>
      </div>

      <p class="text-lg font-mulish text-gray-500 mb-3">Now, you are all set up with Tailwind CSS and ready to start using StylrUI components in your Next.js project.</p>
    </div>
  `,
};

const DocsPage = () => {
  const [selectedFramework, setSelectedFramework] = useState('installation');

  return (
    <>
      <div className="flex flex-col md:flex-row h-screen overflow-hidden mt-28 mb-20">
        <div className="md:w-1/4 bg-gray-100 p-4 h-full overflow-y-auto">
          <h2 className="text-3xl font-bold mb-4 p-2 font-roboto">Installation Guides</h2>
          <ul>
            {Object.keys(instructions).map((framework) => (
              <li key={framework} className="mb-2">
                <button
                  className={`block w-full font-roboto text-xl font-medium hover:text-orange-600 text-left p-2 rounded ${selectedFramework === framework
                    ? 'text-orange-500 bg-orange-100'
                    : 'text-slate-700 hover:bg-orange-100'
                    }`}
                  onClick={() => setSelectedFramework(framework)}
                >
                  {framework.charAt(0).toUpperCase() + framework.slice(1)}
                </button>
              </li>

            ))}
          </ul>
        </div>
        <div className="md:w-3/4 ml-auto p-4 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {/* <h2 className="text-xl font-bold mb-4">
            {selectedFramework.charAt(0).toUpperCase() + selectedFramework.slice(1)} Installation
          </h2> */}
            <div
              className="bg-white p-6 rounded shadow"
              dangerouslySetInnerHTML={{ __html: instructions[selectedFramework] }}
            ></div>
          </div>
        </div>
      </div>

      <Perks />
      <Newsletter />
    </>

  );
};

export default DocsPage;
