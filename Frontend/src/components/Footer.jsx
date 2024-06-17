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
                                <h2 className="mb-6 text-sm font-mulsih font-extrabold text-gray-900 uppercase dark:text-white">Legal</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <Link to="/privacypolicy" className="hover:underline" onClick={scrollToTop}>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/termsandcondtion" className="hover:underline" onClick={scrollToTop}>Terms & Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline" onClick={scrollToTop}>StylrUI</Link>. All Rights Reserved.</span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
