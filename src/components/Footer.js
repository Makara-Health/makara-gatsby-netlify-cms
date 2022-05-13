import * as React from "react";
import {Link} from "gatsby";

import logo from "../img/logo-makara-m.svg";

const Footer = class extends React.Component {
    render() {
        return (
            <footer className="bg-blue px-2 sm:px-4 pt-5 pb-10">
                <div className="container max-w-6xl mx-auto gap-x-3 gap-y-8 grid grid-cols-6">

                    <section className="flex flex-col col-span-1 col-start-1 space-y-4">
                        <nav className="list-none">
                            <li>
                                <Link to="/" className="text-white text-xs hover:text-turquoise">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="text-white text-xs hover:text-turquoise" to="/about">
                                    Team
                                </Link>
                            </li>
                            <li>
                                <Link className="text-white text-xs hover:text-turquoise" to="/products">
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link className="text-white text-xs hover:text-turquoise" to="/contact/examples">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link className="text-white text-xs hover:text-turquoise" to="/contact/examples">
                                    News
                                </Link>
                            </li>
                        </nav>
                    </section>

                    <section className="flex flex-col col-span-2 cols-start-2 space-y-4">
                        <nav className="list-none">
                            <li>
                                <Link className="text-white text-xs hover:text-turquoise" to="/blog">
                                    Office Working Covid Risk Assessment
                                </Link>
                            </li>
                            <li>
                                <Link className="text-white text-xs hover:text-turquoise" to="/contact">
                                    Terms of Use
                                </Link>
                            </li>
                            <li>
                                <Link className="text-white text-xs hover:text-turquoise" to="/contact">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link className="text-white text-xs hover:text-turquoise" to="/contact">
                                    Contact Us
                                </Link>
                            </li>
                        </nav>
                    </section>

                    <section className="flex flex-col col-span-2 cols-start-4 space-y-4">
                        <p className="text-white text-xs">Follow</p>
                        <div className="">
                            <div className="inline-flex sm:ml-auto sm:mt-0 mt-1 justify-center sm:justify-start">
                                <a className="text-gray-500" href="https://google.co.uk">
                                    <svg fill="white"
                                         strokeLinecap="round"
                                         strokeLinejoin="round"
                                         strokeWidth="2"
                                         className="w-5 h-5"
                                         viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500" href="https://google.co.uk">
                                    <svg fill="white"
                                         strokeLinecap="round"
                                         strokeLinejoin="round"
                                         strokeWidth="2"
                                         className="w-5 h-5"
                                         viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500" href="https://google.co.uk">
                                    <svg fill="none" stroke="white"
                                         strokeLinecap="round"
                                         strokeLinejoin="round"
                                         strokeWidth="2"
                                         className="w-5 h-5"
                                         viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500" href="https://google.co.uk">
                                    <svg fill="white"
                                         stroke="currentColor"
                                         strokeLinecap="round"
                                         strokeLinejoin="round"
                                         strokeWidth="0"
                                         className="w-5 h-5"
                                         viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </section>

                    <section className="flex flex-col items-end justify-end space-y-4">
                        <img className="" src={logo} alt="Makara" style={{width: "42px"}}/>
                    </section>

                </div>
            </footer>
        );
    }
};

export default Footer;
