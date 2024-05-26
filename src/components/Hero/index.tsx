'use client'
import React from 'react';
import Image from 'next/image';
import { useDarkMode } from '@/context/DarkModeContext';
import { loremIpsum } from '@/utils/template';
import Button from '../Button';
import { LuDownloadCloud } from "react-icons/lu";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

const Hero = () => {
    const { darkMode } = useDarkMode();
    return (
        <div className={`font-bebas min-h-screen flex items-center justify-center ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-300`}>
            <div className='grid grid-cols-1 md:grid-cols-[45%_50%] gap-20 items-center'>
                <div className='flex justify-center md:justify-end p-8'>
                    <Image src={darkMode ? "/images/face-off.png" : "/images/face-on.png"} alt="Profile Image" width={300} height={300} />
                </div>
                <div className="p-8 text-right">
                    <h1 className="text-7xl mb-2"><span className='text-purple-500 mr-4'>I&apos;M</span>Wisnu Cakra Basudewa Prasodjo</h1>
                    <p className="text-xl pl-3">{loremIpsum}</p>
                    <div className='flex justify-end items-center'>
                        <Button className='mr-2' title="RESUME" link='https://drive.google.com/file/d/1BmftZkOVZypwyF0x6EDh5pTnftUAWhd-/view?usp=sharing' Icon={LuDownloadCloud} />
                        <Button className='mx-2' link='https://instagram.com/wisnucakra_' Icon={FaInstagram} />
                        <Button className='mx-2' link='https://linkedin.com/in/wisnu-cakra-basudewa-prasodjo-86b586199/' Icon={FaLinkedinIn} />
                        <Button className='mx-2' link='https://github.com/WisnuCakraa' Icon={FaGithub} />
                        <Button className='ml-2' link='mailto:wisnucakraa@gmail.com' Icon={AiOutlineMail} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
