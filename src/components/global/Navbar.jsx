import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { TopScroll } from '../utilities/TopScroll';
import NavLink from '@/components/global/Flyoutlink';
import { Link } from "react-router-dom"
import AdmissionDrawer from './AdmissionDrawer';
import logo from '../../assets/logo.png'

const Navbar = () => {

    var origin

    const [nav, setNav] = useState(false);

    const routeTo = () => {
        window.scrollTo({
            top: 0,
        });
    };

    const routeToNav = () => {
        window.scrollTo({
            top: 0
        })
        setNav(!nav);
    }

    const routeToLogo = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

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
            <div style={{ top: topPos ? 0 : 40 }} className='z-30 duration-300 w-full border-b-2 fixed lg:flex px-[5%] bg-white lg:justify-center justify-end items-center py-3 min-h-[74px]'>
                <ul className='flex-row items-center justify-between hidden w-full tracking-tight lg:flex font-merriwether'>
                    <div className='flex items-center justify-center gap-8'>
                        <img className='flex h-16 cursor-pointer ' src={logo} onClick={routeToLogo} alt="Logo of Siddartha Smarak Secondary School" />
                        <Link onClick={routeTo} to='/'><li className='duration-300 cursor-pointer hover:text-orange-500'>Home</li></Link>
                        <Link onClick={routeTo} to='/About'><NavLink title='About' /></Link>
                        <Link onClick={routeTo} to='/Academics' className='duration-300 cursor-pointer hover:text-orange-500'>Academics</Link>
                        <Link onClick={routeTo} to='/News'><NavLink title='News & Events' /></Link>
                        <Link onClick={routeTo} to='/Blog'><NavLink title='Blog' /></Link>
                        <Link onClick={routeTo} to='/Books'> <NavLink title='किताब' /></Link>
                        <Link onClick={routeTo} to='/Contact' className='duration-300 cursor-pointer hover:text-orange-500'>Contact</Link>
                        <Link onClick={routeTo} to='/Gallery' className='duration-300 cursor-pointer hover:text-orange-500'>Gallery</Link>
                    </div>
                    <AdmissionDrawer />
                </ul>
                <ul className='flex flex-row items-center justify-between w-full gap-8 mt-[6px] tracking-tight lg:hidden font-merriwether'>
                    <img className='flex h-[58px] cursor-pointer ' src={logo} onClick={routeToLogo} alt="Logo of Siddartha Smarak Secondary School" />
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
                <div data-aos='fade' className='fixed inset-0 top-0 left-0 z-30 flex flex-col h-screen bg-black/35 backdrop-blur-xl'>
                    <div className='w-full flex flex-col gap-8 fixed px-[7.5%] justify-end items-center py-5'>
                        <ul className='flex flex-row items-center justify-end w-full mt-[6px]'>
                            <li className='z-50 duration-300 cursor-pointer'>
                                <motion.button
                                    onClick={toggleNav}
                                    className='relative z-50 flex size-10'
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
                                        className='absolute h-[1px] w-6 bg-stone-50 '
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
                                        className='absolute h-[1px] w-6 bg-stone-50 ' />
                                </motion.button>
                            </li>
                        </ul>
                        <ul className='flex flex-col w-full gap-2 tracking-tight text-xl divide-y-[1px] divide-stone-50/10 font-merriwether'>
                            <li className='flex justify-end w-full pt-2 duration-300 cursor-pointer text-end text-stone-50 hover:text-stone-600'><Link onClick={routeToNav} to='/'>Home</Link></li>
                            <li className='flex justify-end w-full pt-2 duration-300 cursor-pointer text-end text-stone-50 hover:text-stone-600'><Link onClick={routeToNav} to='/About'>About</Link></li>
                            <li className='flex justify-end w-full pt-2 duration-300 cursor-pointer text-end text-stone-50 hover:text-stone-600'><Link onClick={routeToNav} to='/Academics'>Academics</Link></li>
                            <li className='flex justify-end w-full pt-2 duration-300 cursor-pointer text-end text-stone-50 hover:text-stone-600'><Link onClick={routeToNav} to='/News'>News & Events</Link></li>
                            <li className='flex justify-end w-full pt-2 duration-300 cursor-pointer text-end text-stone-50 hover:text-stone-600'><Link onClick={routeToNav} to='/Blog'>Blog</Link></li>
                            <li className='flex justify-end w-full pt-2 duration-300 cursor-pointer text-end text-stone-50 hover:text-stone-600'><Link onClick={routeToNav} to='/Books'>किताब</Link></li>
                            <li className='flex justify-end w-full pt-2 duration-300 cursor-pointer text-end text-stone-50 hover:text-stone-600'><Link onClick={routeToNav} to='/Contact'>Contact</Link></li>
                            <li className='flex justify-end w-full pt-2 duration-300 cursor-pointer text-end text-stone-50 hover:text-stone-600'><Link onClick={routeToNav} to='/Gallery'>Galley</Link></li>
                            <AdmissionDrawer place='mobileNav' />
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