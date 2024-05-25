'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDarkMode } from '@/context/DarkModeContext';

const Hero = () => {
    const { darkMode } = useDarkMode();
    return (
        <div className={`font-bebas min-h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-300`}>
            <div className='grid grid-rows-4 grid-flow-col'>
                <div>
                    <Image src={darkMode ? "/icons/lights-on.svg" : "/icons/lights-off.svg"} alt="Toggle Dark Mode" width={300} height={300} />
                </div>
                <div className="text-center">
                    <h1 className="text-4xl mb-2">Wisnu Cakra Basudewa Prasodjo</h1>
                    <p className="text-xl">Saya adalah seorang Software Engineer</p>
                    <Link href="/resume.pdf">
                        <div className="mt-4 inline-block bg-purple-500 text-white py-2 px-4 rounded">
                            Resume
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
