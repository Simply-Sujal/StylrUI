import React from 'react'
import { SiAzuredataexplorer } from "react-icons/si";


const LandingPageButtons = () => {
    return (
        <div className='w-full'>
            <div className='max-w-[400px] flex flex-col md:flex-row gap-4 md:gap-8 mx-auto'>
                <a href="#_" class="inline-flex items-center justify-center px-4 py-2 text-base font-roboto font-bold tracking-wider leading-6 text-white whitespace-no-wrap bg-orange-600 border border-orange-700 rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                    Komponents
                </a>

                <a href="#_" class="tracking-wider font-roboto font-bold inline-flex items-center justify-center px-6 py-2 text-base leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none">
                    <SiAzuredataexplorer className='pr-4 text-[32px]' />
                    Explore Blocks
                </a>
            </div>


        </div>
    )
}

export default LandingPageButtons