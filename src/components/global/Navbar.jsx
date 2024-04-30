import { Ellipsis } from 'lucide-react';
import React from 'react'
import { TopScroll } from '../utilities/TopScroll';
import Example from '@/components/global/Flyoutlink'

const Navbar = () => {

    const topPos = TopScroll();

    return (
        <div style={{ top: topPos ? 0 : 40 }} className='z-50 duration-200 w-full border-b-2 fixed md:flex px-[7.5%] bg-white md:justify-center justify-end items-center py-3'>
            <ul className='flex-row items-center justify-center hidden w-full gap-16 tracking-tight font-merriwether lg:flex'>
                <li className='duration-300 cursor-pointer hover:text-orange-500'>Home</li>
                <Example title='About Us' content='about' />
                <li className='duration-300 cursor-pointer hover:text-orange-500'>Academics</li>
                <Example title='News' />
                <Example title='Events' />
                <Example title='Blog' />
                <li className='duration-300 cursor-pointer hover:text-orange-500'>Contact</li>
                <button className='px-4 py-[10px] text-white duration-300 bg-orange-500 border-2 border-transparent rounded-xl hover:border-orange-500 hover:bg-white hover:text-orange-500 hover:translate-y-[-2px] '>Admissions</button>
            </ul>
            <ul className='flex flex-row items-center justify-end w-full gap-16 tracking-tight font-merriwether lg:hidden'>
                <li className='duration-300 cursor-pointer hover:text-orange-500'><Ellipsis /></li>
            </ul>
        </div>
    )
}

export default Navbar