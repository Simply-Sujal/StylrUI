import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
    };

    return (
        <>
            <footer className="bg-white dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Link to="https://skillez.in/" className="flex items-center" onClick={scrollToTop}>
                                <img src="" className="h-8 me-3" alt="KK Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">StylrUI</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
                            <div>
                                <h2 className="mb-6 text-sm font-mulsih font-extrabold text-gray-900 uppercase dark:text-white">Resources</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-roboto font-medium">
                                    <li className="mb-3">
                                        <Link to="/docs" className="hover:underline" onClick={scrollToTop}>Docs</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/components" className="hover:underline" onClick={scrollToTop}>Components</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/blocks" className="hover:underline" onClick={scrollToTop}>Blocks</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/contributorpage" className="hover:underline" onClick={scrollToTop}>Contribute</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="/pricingfaq" className="hover:underline" onClick={scrollToTop}>Pricing & FAQ</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-mulsih font-extrabold text-gray-900 uppercase dark:text-white">Company</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-roboto font-medium">
                                    <li className="mb-3">
                                        <Link to="/aboutus" className="hover:underline" onClick={scrollToTop}>About Us</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="https://github.com/Simply-Sujal/kurated-komponents" className="hover:underline" onClick={scrollToTop}>Github</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-mulsih font-extrabold text-gray-900 uppercase dark:text-white">Help & Support</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-3">
                                        <Link to="https://github.com/themesberg/KK" className="hover:underline" onClick={scrollToTop}>Github Discussion</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="https://discord.gg/4eeurUVvTy" className="hover:underline" onClick={scrollToTop}>Contact Us</Link>
                                    </li>
                                    <li className="mb-3">
                                        <Link to="https://discord.gg/4eeurUVvTy" className="hover:underline" onClick={scrollToTop}>Join Team</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-mulsih font-extrabold text-gray-900 uppercase dark:text-white">Legal</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link to="#" className="hover:underline" onClick={scrollToTop}>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="hover:underline" onClick={scrollToTop}>Terms & Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline" onClick={scrollToTop}>StylrUI</Link>. All Rights Reserved.</span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                    <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                                </svg>
                                <span className="sr-only">Discord community</span>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                    <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.995A4.108 4.108 0 0 0 9.847 4.602a4.255 4.255 0 0 0 .094.936A11.65 11.65 0 0 1 1.392.75a4.11 4.11 0 0 0 1.265 5.485 3.942 3.942 0 0 1-1.857-.512v.052a4.11 4.11 0 0 0 3.292 4.018 4.103 4.103 0 0 1-1.85.071A4.108 4.108 0 0 0 5.85 13.5a8.246 8.246 0 0 1-5.096 1.76A8.59 8.59 0 0 1 0 15.211a11.672 11.672 0 0 0 6.29 1.84c7.547 0 11.675-6.154 11.675-11.5 0-.18 0-.355-.012-.53A8.24 8.24 0 0 0 20 1.892Z" clipRule="evenodd" />
                                </svg>
                                <span className="sr-only">Twitter page</span>
                            </a>
                            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 .13a10 10 0 1 0 0 19.74A10 10 0 0 0 10 .13Zm3.549 13.284-1.264-3.968c-.097-.304-.186-.58-.267-.829-.081-.249-.144-.456-.188-.622-.049-.188-.09-.353-.122-.495a15.9 15.9 0 0 1-.29-1.417c-.056-.307-.102-.556-.137-.747-.036-.192-.065-.34-.086-.448a.265.265 0 0 0-.073-.151.092.092 0 0 0-.085-.036l-1.708.008a.543.543 0 0 0-.238.057.344.344 0 0 0-.147.163c-.045.1-.09.23-.134.39-.044.16-.09.348-.137.562l-.59 2.464-.609-2.464a11.56 11.56 0 0 0-.151-.552 2.144 2.144 0 0 0-.139-.367.325.325 0 0 0-.143-.153.511.511 0 0 0-.225-.052H6.07a.12.12 0 0 0-.104.043.276.276 0 0 0-.055.131l-.745 3.228c-.056.251-.111.482-.167.693-.052.211-.096.397-.131.556-.13.543-.267 1.057-.408 1.542a12.13 12.13 0 0 1-.497 1.408.58.58 0 0 0-.029.298c.014.092.055.174.122.243a.408.408 0 0 0 .263.106h1.608c.151 0 .275-.05.372-.151a.56.56 0 0 0 .135-.275c.035-.147.08-.308.135-.482.056-.173.114-.364.175-.572h2.273c.064.237.123.437.175.602.052.165.091.293.117.383a.62.62 0 0 0 .151.274c.098.1.221.15.372.15h1.555a.416.416 0 0 0 .257-.092.3.3 0 0 0 .12-.234.613.613 0 0 0-.045-.215ZM8.256 11.35l.77-3.066.756 3.066H8.256Z" clipRule="evenodd" />
                                </svg>
                                <span className="sr-only">Dribbble account</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
