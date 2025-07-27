'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Hero = () => {
    // State to detect mobile screen
    const [isMobile, setIsMobile] = useState(false);

    // Effect to update isMobile state on window resize
    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 768);
        checkScreen(); // Initial check
        window.addEventListener('resize', checkScreen); // Add event listener
        return () => window.removeEventListener('resize', checkScreen); // Cleanup
    }, []);

    return (
        // Wrapper for hero section with relative positioning
        <div className='relative pb-16'>

            {/* Main heading and CTA for desktop */}
            <div className='pt-20'>
                <h1 className='px-5 md:px-0 text-[38px] lg:text-[48px] font-bold text-center leading-none'>
                    AI receipts. Simple crypto.
                    <span className='block'>Smart control.</span>
                </h1>

                {/* Desktop CTA & description */}
                <div className='hidden md:block'>
                    <p className='text-center mt-5'>Klip is your all-in-one decentralized wallet</p>
                    <p className='text-center mb-5'>designed for security, flexibility, and full ownership.</p>
                    <button className='bg-[#12ED39] text-sm py-4 px-8 rounded-full flex items-center gap-5 uppercase mx-auto my-3'>
                        Get Started <ArrowRight size={12} />
                    </button>
                </div>
            </div>

            {/* Center image wrapper and currency cards */}
            <div className='relative'>
                <div className='w-11/12 md:w-6/12 lg:w-[586px] h-96 md:h-[480px] lg:h-[586px] relative mx-auto'>
                    {/* Main image of mobile wrapper */}
                    <Image src='/images/wrapper.png' fill alt='wrapper' className='object-contain' />

                    {/* Left floating card (Apollo) */}
                    <div className="absolute left-0 md:-left-1/5 top-1/6 md:top-1/3 border border-[#C4C4C4] backdrop-blur-md bg-[#8C8C8C57] rounded-full p-3 w-fit flex items-center gap-3 md:gap-6 z-10">
                        <div>
                            <p className="text-sm md:text-lg font-semibold text-[#F7F7F7]">$2,951.73</p>
                            <p className="text-xs md:text-base text-black">APL 17</p>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div>
                                <p className="text-sm md:text-lg font-semibold text-[#F7F7F7]">Apollo</p>
                                <p className="text-xs md:text-base text-black text-right">APL</p>
                            </div>
                            {/* Apollo icon */}
                            <div className='w-8 md:w-10 h-8 md:h-10 rounded-full bg-white relative p-1'>
                                <Image src='/icons/apollo.svg' alt='apollo' fill className='object-contain p-2' />
                            </div>
                        </div>
                    </div>

                    {/* Right floating card (Romulus) */}
                    <div className="absolute right-0 md:-right-1/4 top-3/4 md:top-2/3 border border-[#C4C4C4] backdrop-blur-md bg-[#8C8C8C57] rounded-full p-3 w-fit flex items-center gap-3 md:gap-6 z-10">
                        <div className='flex items-center gap-4'>
                            {/* Romulus icon */}
                            <div className='w-8 md:w-10 h-8 md:h-10 rounded-full bg-white relative p-1'>
                                <Image src='/icons/stars.svg' alt='apollo' fill className='object-contain p-2' />
                            </div>
                            <div>
                                <p className="text-sm md:text-lg font-semibold text-[#F7F7F7]">Romulus</p>
                                <p className="text-xs md:text-base text-black">RLS</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm md:text-lg font-semibold text-[#F7F7F7]">$3,271.20</p>
                            <p className="text-xs md:text-base text-black text-right">RLS 24</p>
                        </div>
                    </div>
                </div>

                {/* Hero mobile image (different based on screen) */}
                <div className='absolute w-full h-[580px] md:h-[640px] lg:h-[797px] -top-1/5 md:-top-1/5 lg:-top-1/4 left-0 md:-left-5'>
                    <Image
                        src={isMobile ? '/images/hero-mobile-sm.png' : '/images/hero-mobile.png'}
                        alt='mobile'
                        fill
                        className='object-contain'
                    />
                </div>
            </div>

            {/* CTA and description for mobile screens */}
            <div className='block md:hidden pt-20 w-10/12 mx-auto'>
                <p className='text-sm md:text-base text-center mt-5'>Klip is your all-in-one decentralized wallet</p>
                <p className='text-sm md:text-base text-center mb-5'>designed for security, flexibility, and full ownership.</p>
                <button className='bg-[#12ED39] text-sm py-4 px-8 rounded-full flex items-center gap-5 uppercase mx-auto my-3'>
                    Get Started <ArrowRight size={12} />
                </button>
            </div>

            {/* Background image behind entire section */}
            <div className='absolute w-full h-full top-0 -z-10'>
                <Image src='/images/hero-bg.png' alt='hero bg' fill />
            </div>
        </div>
    )
}

export default Hero
