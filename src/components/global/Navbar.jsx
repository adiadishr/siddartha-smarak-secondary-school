import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { TopScroll } from '../utilities/TopScroll';
import NavLink from '@/components/global/Flyoutlink';
import { Link } from "react-router-dom"
import AdmissionDrawer from './AdmissionDrawer';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const routeTo = () => {
        window.scrollTo({
            top: 0,
        });
    };

    useEffect(() => {
        if (nav) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [nav]);

    const toggleNav = () => {
        setNav(!nav);
    };

    const topPos = TopScroll();

    return (
        <>
            <div style={{ top: topPos ? 0 : 40 }} className='z-30 duration-300 w-full border-b-2 fixed lg:flex px-[7.5%] bg-white lg:justify-center justify-end items-center py-3 min-h-[74px]'>
                <ul className='flex-row items-center justify-between hidden w-full tracking-tight lg:flex font-merriwether'>
                    <div className='flex items-center justify-center gap-8'>
                        <Link onClick={routeTo} to='/'><li className='duration-300 cursor-pointer hover:text-orange-500'>Home</li></Link>
                        <Link onClick={routeTo} to='/About'><NavLink title='About' /></Link>
                        <li className='duration-300 cursor-pointer hover:text-orange-500'>Academics</li>
                        <NavLink title='News & Events' />
                        <NavLink title='Blog' />
                        <Link onClick={routeTo} to='/Books'> <NavLink title='किताब' /></Link>
                        <Link onClick={routeTo} to='/Contact' className='duration-300 cursor-pointer hover:text-orange-500'>Contact</Link>
                    </div>
                    <AdmissionDrawer />
                </ul>
                <ul className='flex flex-row items-center justify-end w-full gap-8 mt-[6px] tracking-tight lg:hidden font-merriwether'>
                    <li className='z-50 duration-300 cursor-pointer hover:text-orange-500'>

                        <motion.button
                            onClick={toggleNav}
                            className='relative z-50 text-black duration-300 hover:text-orange-500 size-10'
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
            {nav
                ?
                <div data-aos='fade' className='fixed inset-0 top-0 left-0 z-30 flex flex-col h-screen bg-white/10 backdrop-blur-xl'>
                    <div style={{ top: topPos ? 0 : 40 }} className='w-full fixed px-[7.5%] justify-end items-center py-3'>
                        <ul className='flex flex-row items-center justify-end w-full gap-16 tracking-tight lg:hidden font-merriwether mt-[6px]'>
                            <li className='z-50 duration-300 cursor-pointer hover:text-orange-500'>
                                <motion.button
                                    onClick={toggleNav}
                                    className='relative z-50 flex text-black duration-300 hover:text-orange-500 size-10'
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
                </div>
                :
                null
            }

        </>
    )
}

export default Navbar