"use client";

import Image from "next/image";
import Link from 'next/link';
import logo from "@/public/lockin_logo.png";
import { useState } from 'react';

export default function Appbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
    return (
        <nav className="bg-black text-white px-6 sm:px-16 py-5 relative z-20">
            <div className="flex justify-between items-center">
                <div>
                    <Image src={logo} alt="lockin logo" width={100} height={27.5} /> {/* Adjusted height for aspect ratio based on typical logo */} 
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-12">
                    <ul className="flex space-x-8 text-[#ECECEE]">
                        <li><Link href="#features" className="hover:text-gray-300">Features</Link></li>
                        <li><Link href="#faqs" className="hover:text-gray-300">FAQs</Link></li>
                        <li><Link href="#contact" className="hover:text-gray-300">Contact</Link></li>
                    </ul>
                    {/* <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center space-x-2">
                        <span>Get Started</span>
                        <span>→</span>
                    </button> */}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle menu" className="text-white focus:outline-none">
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Dropdown */}
            {isOpen && (
                <div className="md:hidden mt-4 pb-4 bg-black">
                    <ul className="flex flex-col items-center space-y-4 text-[#ECECEE] py-2">
                        <li><Link href="#features" className="hover:text-gray-300 block py-2" onClick={closeMenu}>Features</Link></li>
                        <li><Link href="#faqs" className="hover:text-gray-300 block py-2" onClick={closeMenu}>FAQs</Link></li>
                        <li><Link href="#contact" className="hover:text-gray-300 block py-2" onClick={closeMenu}>Contact</Link></li>
                    </ul>
                    {/* <div className="mt-4 flex justify-center">
                        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg flex items-center space-x-2">
                            <span>Get Started</span>
                            <span>→</span>
                        </button>
                    </div> */}
                </div>
            )}
        </nav>
    )
}