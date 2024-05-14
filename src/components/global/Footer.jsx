import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom"

const toTop = () => {
    window.scrollTo({ top: 0 })
}

const Footer = () => {
    return (
        <div className='flex flex-col w-full'>
            {/* Newsletter */}
            <div className='md:gap-0 gap-8 w-full py-8 bg-gradient-to-br from-sky-800 to-sky-950 px-[7.5%] flex flex-col md:flex-row md:items-center md:justify-between'>
                <div className='flex items-center text-lg text-white md:justify-center md:text-2xl font-merriwether'>
                    Sign up for the newsletter:
                </div>
                <div>
                    <form className='flex' action="">
                        <input placeholder={'Enter your email:'} className='py-3 pl-3 text-sm tracking-wider text-white bg-transparent border border-r-0 border-white outline-none md:px-6 font-manrope placeholder:text-white' type="email" />
                        <input className='px-6 font-bold transition-all duration-300 bg-white cursor-pointer hover:text-sky-600 text-sky-900 font-manrope' type="submit" />
                    </form>
                </div>
            </div>
            {/* Footer */}
            <div className='w-full pt-24 h-max px-[7.5%]'>
                <div className='flex flex-col justify-between w-full gap-24 md:gap-12 md:flex-row'>
                    <div className='flex gap-24'>
                        <div className='flex flex-col gap-2 tracking-tight'>
                            <div className='text-2xl/[110%] text-stone-400 font-merriwether pb-2 '>Quick Links</div>
                            <Link to='/' onClick={toTop} className='group flex text-2xl/[110%] text-stone-700 font-merriwether  hover:text-orange-500 duration-300 cursor-pointer'><span className='flex items-center justify-center -mr-4 text-sm text-orange-400 duration-500 opacity-0 group-hover:mr-2 group-hover:opacity-100 '><FaArrowRight />
                            </span>Home</Link>
                            <Link to='/About' onClick={toTop} className='text-2xl/[110%] text-stone-700 font-merriwether group hover:text-orange-500 duration-300 cursor-pointer flex'><span className='flex items-center justify-center -mr-4 text-sm text-orange-400 duration-500 opacity-0 group-hover:mr-2 group-hover:opacity-100 '><FaArrowRight />
                            </span>About</Link>
                            <Link to='/Blog' onClick={toTop} className='text-2xl/[110%] group text-stone-700 font-merriwether hover:text-orange-500 duration-300 cursor-pointer flex'><span className='flex items-center justify-center -mr-4 text-sm text-orange-400 duration-500 opacity-0 group-hover:mr-2 group-hover:opacity-100 '><FaArrowRight />
                            </span>Blogs</Link>
                            <Link to='/Gallery' onClick={toTop} className='group flex text-2xl/[110%] text-stone-700 font-merriwether  hover:text-orange-500 duration-300 cursor-pointer'><span className='flex items-center justify-center -mr-4 text-sm text-orange-400 duration-500 opacity-0 group-hover:mr-2 group-hover:opacity-100 '><FaArrowRight />
                            </span>Gallery</Link>
                        </div>
                        <div className='flex flex-col gap-2 tracking-tight'>
                            <div className='text-2xl/[110%] text-stone-400 font-merriwether pb-2 '>Stay Updated</div>
                            <Link to='/News' onClick={toTop} className='group flex text-2xl/[110%] text-stone-700 font-merriwether  hover:text-orange-500 duration-300 cursor-pointer'><span className='flex items-center justify-center -mr-4 text-sm text-orange-400 duration-500 opacity-0 group-hover:mr-2 group-hover:opacity-100 '><FaArrowRight />
                            </span>News & Notices</Link>
                            <Link to='/Books' onClick={toTop} className='text-2xl/[110%] text-stone-700 font-merriwether group hover:text-orange-500 duration-300 cursor-pointer flex'><span className='flex items-center justify-center -mr-4 text-sm text-orange-400 duration-500 opacity-0 group-hover:mr-2 group-hover:opacity-100 '><FaArrowRight />
                            </span>किताब</Link>
                            <Link to='/Academics' onClick={toTop} className='text-2xl/[110%] group text-stone-700 font-merriwether  hover:text-orange-500 duration-300 cursor-pointer flex'><span className='flex items-center justify-center -mr-4 text-sm text-orange-400 duration-500 opacity-0 group-hover:mr-2 group-hover:opacity-100 '><FaArrowRight />
                            </span>Academics</Link>
                        </div>
                    </div>
                    <div className='flex items-center justify-start w-full mb-24 h-max md:mb-0 md:w-max'>
                        <iframe
                            className='flex w-full border-none md:w-max rounded-xl'
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14130.946795029693!2d85.34463115!3d27.694531700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1714392621439!5m2!1sen!2snp"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Map"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className='w-full pt-12 pb-8 h-max px-[7.5%]'>
                <p className='text-sm text-neutral-400 font-merriwether '>©Siddartha Smarak Secondary School, 2024 All rights reserved</p>
                <p className='text-sm text-neutral-700 font-manrope'>Developed and Maintained by <a href="https://www.project0rbit.com" target='_blank' className='underline duration-300 hover:text-black'>Antarikshya</a> </p>
            </div>
        </div>
    )
}

export default Footer