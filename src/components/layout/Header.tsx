'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../ui/Button';
import { Menu, X } from 'lucide-react';

const Header = () => {
    // State to manage mobile menu toggle
    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle mobile menu visibility
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        // Container for the entire header with sticky positioning
        <div className='container mx-auto sticky top-0 z-50'>
            {/* Header content */}
            <header className="bg-black px-6 lg:px-20 py-4 rounded-2xl shadow-lg flex items-center justify-between mx-auto mt-4 max-w-[95%] lg:max-w-10/12 border">

                {/* Logo with Next.js Image optimization */}
                <Link href="#" className="relative w-[99px] h-[30px]">
                    <Image src="/images/logo.svg" alt="logo" fill className="object-contain" />
                </Link>

                {/* Desktop navigation links */}
                <nav className="hidden lg:flex space-x-6 text-lg">
                    <Link href="#" className="text-[#F6E9E9] hover:text-[#12ED39] transition-colors duration-200">What is KlipAI?</Link>
                    <Link href="#" className="text-[#F6E9E9] hover:text-[#12ED39] transition-colors duration-200">Send KlapAI</Link>
                    <Link href="#" className="text-[#F6E9E9] hover:text-[#12ED39] transition-colors duration-200">AI-Agent</Link>
                    <Link href="#" className="text-[#F6E9E9] hover:text-[#12ED39] transition-colors duration-200">Testimonials</Link>
                    <Link href="#" className="text-[#F6E9E9] hover:text-[#12ED39] transition-colors duration-200">Web3</Link>
                </nav>

                {/* Desktop login button */}
                <div className='hidden lg:block'>
                    <Button>Login</Button>
                </div>

                {/* Hamburger menu icon for mobile view */}
                <div className='lg:hidden'>
                    <button onClick={toggleMenu}>
                        {isOpen ? <X size={28} color="#12ED39" /> : <Menu size={28} color="#F6E9E9" />}
                    </button>
                </div>

                {/* Mobile menu dropdown */}
                {isOpen && (
                    <div className='absolute top-full left-0 w-full lg:hidden z-40 pt-1'>
                        <div className="bg-black rounded-2xl border-t border-[#222] px-6 py-4">
                            <nav className="flex flex-col space-y-4 text-lg">
                                {/* Menu links - clicking also closes menu */}
                                <Link href="#" className="text-[#F6E9E9] hover:text-[#12ED39]" onClick={toggleMenu}>What is KlipAI?</Link>
                                <Link href="#" className="text-[#F6E9E9] hover:text-[#12ED39]" onClick={toggleMenu}>Send KlapAI</Link>
                                <Link href="#" className="text-[#F6E9E9] hover:text-[#12ED39]" onClick={toggleMenu}>AI-Agent</Link>
                                <Link href="#" className="text-[#F6E9E9] hover:text-[#12ED39]" onClick={toggleMenu}>Testimonials</Link>
                                <Link href="#" className="text-[#F6E9E9] hover:text-[#12ED39]" onClick={toggleMenu}>Web3</Link>

                                {/* Login button for mobile */}
                                <Button>Login</Button>
                            </nav>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Header;
