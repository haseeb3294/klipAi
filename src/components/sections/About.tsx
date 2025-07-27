import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        // Outer container with padding and top margin
        <div className='p-5 mt-10'>
            {/* Responsive bordered and padded section with grid layout */}
            <div className='md:border border-[#EDEDED] rounded-lg p-0 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 md:items-center'>

                {/* Left column: image container with background and border */}
                <div className='bg-[#F4F2F0] border border-[#EDEDED] rounded-lg'>

                    {/* Relative container for overlapping images */}
                    <div className='relative h-56 md:h-[420px]'>

                        {/* Main mobile phone image */}
                        <div className='w-4/5 relative h-full'>
                            <Image
                                src='/images/about-mobile.png'
                                alt='about mobile'
                                className='object-contain'
                                fill
                            />
                        </div>

                        {/* Overlay BTC image positioned on top of the main image */}
                        <div className='absolute h-12 md:h-[76px] w-30 md:w-56 top-3/5 right-0'>
                            <Image
                                src='/images/btc.png'
                                alt='btc'
                                fill
                                className='object-contain'
                            />
                        </div>
                    </div>
                </div>

                {/* Right column: text content */}
                <div>
                    {/* Heading for the section */}
                    <h1 className='text-[38px] md:text-[48px] font-bold text-[#0E100F]'>
                        What is KlipAi
                    </h1>

                    {/* Description text with responsive font and width */}
                    <p className='text-xs md:text-base md:w-10/12 md:leading-8'>
                        KlipAi is the all-in-one smart wallet layer for Web3. We turn every crypto transaction into a clean, AI-powered receipt. You can also send tokens using a simple username. No TX hashes. No wallet address mistakes. Just clarity, control, and convenience.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
