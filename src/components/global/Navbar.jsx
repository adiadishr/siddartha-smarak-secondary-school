import React, { useState } from 'react'
import { motion } from "framer-motion"
import { TopScroll } from '../utilities/TopScroll';
import NavLink from '@/components/global/Flyoutlink';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    const topPos = TopScroll();

    return (
        <>
            <div style={{ top: topPos ? 0 : 40 }} className='z-40 duration-300 w-full border-b-2 fixed md:flex px-[7.5%] bg-white md:justify-center justify-end items-center py-3'>
                <ul className='flex-row items-center justify-center hidden w-full gap-16 tracking-tight font-merriwether lg:flex'>
                    <li className='duration-300 cursor-pointer hover:text-orange-500'>Home</li>
                    <NavLink title='About Us' />
                    <li className='duration-300 cursor-pointer hover:text-orange-500'>Academics</li>
                    <NavLink title='News' />
                    <NavLink title='Events' />
                    <NavLink title='Blog' />
                    <li className='duration-300 cursor-pointer hover:text-orange-500'>Contact</li>
                    <button id='admissionButton' className='px-4 py-[10px] text-white bg-orange-500 border-2 border-transparent rounded-xl hover:opacity-80 duration-300  '>Admissions</button>
                </ul>
                <ul className='flex flex-row items-center justify-end w-full gap-16 tracking-tight font-merriwether lg:hidden'>
                    <li className='duration-300 cursor-pointer hover:text-orange-500'>
                        <motion.button
                            onClick={toggleNav}
                            className='relative text-black duration-300 hover:text-orange-500 size-10'
                            animate={nav ? "open" : "close"}
                        >
                            <motion.span
                                transition={{ duration: 0.3 }}
                                style={{
                                    left: '50%',
                                    top: '40%',
                                    x: '-50%',
                                    y: '-50%',
                                }}
                                className='absolute h-[1px] w-6 bg-black'
                                variants={{
                                    open: {
                                        rotate: "45deg",
                                        top: '50%',
                                    },
                                    close: {
                                        rotate: "0deg",
                                    }
                                }}
                            />
                            <motion.span
                                transition={{ duration: 0.3 }}
                                style={{
                                    left: '50%',
                                    top: '60%',
                                    x: '-50%',
                                    y: '-50%',
                                }}
                                variants={{
                                    open: {
                                        rotate: "-45deg",
                                        top: '50%',
                                    },
                                    close: {
                                        rotate: "0deg",
                                    }
                                }}
                                className='absolute h-[1px] w-6 bg-black' />
                        </motion.button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar