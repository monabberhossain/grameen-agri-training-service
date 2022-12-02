import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Footer = () => {
    return (
        <section className="mt-12 px-24 pt-12 pb-12 bg-black text-white">
            <footer
                id="footer"
                className="relative z-50 dark:bg-gray-900 pt-12"
            >
                <div className=" border-t border-b border-gray-200 dark:border-gray-700 py-16">
                    <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
                        <div className="lg:flex">
                            <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                                <div className="w-full lg:w-1/2 px-6">
                                    <ul>
                                        <li>
                                            <Link className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-500 dark:text-gray-50">
                                                Designing
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-500 dark:text-gray-50">
                                                Branding
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-500 dark:text-gray-50">
                                                Marketing
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-500 dark:text-gray-50">
                                                Pricing
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-500 dark:text-gray-50">
                                                Advertisement
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-1/2 px-6">
                                    <ul>
                                        <li>
                                            <Link>
                                                <Link className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-500 dark:text-gray-50">
                                                    About Us
                                                </Link>
                                            </Link>
                                        </li>

                                        <li className="mt-6">
                                            <Link>
                                                <Link className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-500 dark:text-gray-50">
                                                    Contact Us
                                                </Link>
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link>
                                                <Link className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-500 dark:text-gray-50">
                                                    FAQ
                                                </Link>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 flex">
                                <div className="w-full lg:w-1/2 px-6">
                                    <ul>
                                        <li>
                                            <Link className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-500 dark:text-gray-50">
                                                Privacy policy
                                            </Link>
                                        </li>
                                        <li className="mt-6">
                                            <Link>
                                                <Link className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-500 dark:text-gray-50">
                                                    Terms of service
                                                </Link>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-16 flex flex-col justify-center items-center">
                    <Link to="/" className="w-[80px] h-[80px]">
                        <img src={logo} alt="" />
                    </Link>
                    <p className="mt-6 text-xs lg:text-sm leading-none text-gray-500 dark:text-gray-50">
                        Copyright © 2022 - All rights reserved by Grameen Agri
                        Training Service
                    </p>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
