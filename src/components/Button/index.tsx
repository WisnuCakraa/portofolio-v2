import { useDarkMode } from '@/context/DarkModeContext';
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
    className?: string;
    title?: string;
    link?: string;
    Icon?: IconType;
}

function Button(props: ButtonProps) {
    const { className, title, link, Icon } = props;
    const { darkMode } = useDarkMode();

    const buttonStyles = darkMode
        ? 'bg-black text-white'
        : 'bg-white text-black';

    return (
        <>
            {link ? (
                <div className={`mt-4 inline-block relative ${className}`} >
                    <Link href={link} target='_blank' passHref>
                        <div
                            className={`inline-flex items-center py-2 px-4 rounded-full ${buttonStyles} relative z-10`}
                            style={{
                                border: darkMode ? 'none' : '2px solid black',
                            }}
                        >
                            {title && title}
                            {Icon && <Icon className={`${title ? 'ml-2' : ''}`} />}
                        </div>
                    </Link>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 opacity-75 blur-lg"></div>
                </div>
            ) : (
                <div className={`mt-4 inline-block relative ${className}`}>
                    <div className={`py-2 px-4 rounded-full ${buttonStyles} relative z-10`} style={{ border: darkMode ? 'none' : '2px solid black' }}>
                        <button className="relative z-10">{title}</button>
                        {Icon && <Icon className={`${title ? 'ml-2' : ''}`} />}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 opacity-75 blur-lg"></div>
                </div>
            )}
        </>
    );
}

export default Button;
