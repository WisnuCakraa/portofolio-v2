'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useDarkMode } from '@/context/DarkModeContext';

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <nav className={`font-bebas relative w-full flex items-center justify-between p-4 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-300`}>
            <div className="text-3xl font-semibold">
                <Link className="text-purple-500 tracking-widest" href="/">WELCOME !</Link>
            </div>
            <ul className="flex space-x-16 text-2xl">
                <li><Link className="tracking-wider" href="/">Home</Link></li>
                <li><Link className="tracking-wider" href="/about">About</Link></li>
                <li><Link className="tracking-wider" href="/projects">Projects</Link></li>
                <li><Link className="tracking-wider" href="/contact">Contact Me</Link></li>
            </ul>
            <div className="absolute top-[14.3rem] transform -translate-y-1/2 left-48">
                <Image onClick={toggleDarkMode} src={darkMode ? "/icons/lights-on.svg" : "/icons/lights-off.svg"} alt="Toggle Dark Mode" width={300} height={300} />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-b from-purple-500 to-transparent opacity-50"></div>
        </nav>
    );
};

export default Navbar;
