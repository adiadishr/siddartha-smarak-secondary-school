import React from 'react'
import { FaArrowRight } from "react-icons/fa";

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
                        <input placeholder={'Enter your email:'} className='px-6 py-3 text-xs tracking-wider text-white bg-transparent border border-r-0 border-white outline-none font-manrope placeholder:text-white' type="email" />
                        <input className='px-6 font-bold transition-all duration-300 bg-white cursor-pointer hover:text-sky-600 text-sky-900 font-manrope' type="submit" />
                    </form>
                </div>
            </div>
            {/* Footer */}
            <div className='w-full py-24 h-max px-[7.5%]'>
                <div className='flex flex-col justify-between w-full gap-24 md:gap-12 md:flex-row'>
                    <div className='flex gap-24'>
                        <div className='flex flex-col gap-2 tracking-tight'>
                            <div className='text-2xl/[110%] text-stone-400 font-merriwether pb-2 '>Quick Links</div>
                            <div className='group flex text-2xl/[110%] text-stone-700 font-merriwether  hover:text-orange-500 duration-300 cursor-pointer'><span className='flex items-center justify-center -mr-4 text-sm text-orange-400 duration-500 opacity-0 group-hover:mr-2 group-hover:opacity-100 '><FaArrowRight />
                            </span>Home</div>
                            <div className='text-2xl/[110%] text-stone-700 font-merriwether group hover:text-orange-500 duration-300 cursor-pointer flex'><span className='flex items-center justify-center -mr-4 text-sm text-orange-400 duration-500 opacity-0 group-hover:mr-2 group-hover:opacity-100 '><FaArrowRight />
                            </span>About</div>
                            <div className='text-2xl/[110%] group text-stone-700 font-merriwether hover:text-orange-500 duration-300 cursor-pointer flex'><span className='flex items-center justify-center -mr-4 text-sm text-orange-400 duration-500 opacity-0 group-hover:mr-2 group-hover:opacity-100 '><FaArrowRight />
                            </span>Blogs</div>
                        </div>
                        <div className='flex flex-col gap-2 tracking-tight'>
                            <div className='text-2xl/[110%] text-stone-400 font-merriwether pb-2 '>Stay Updated</div>
                            <div className='group flex text-2xl/[110%] text-stone-700 font-merriwether  hover:text-orange-500 duration-300 cursor-pointer'><span className='flex items-center justify-center -mr-4 text-sm text-orange-400 duration-500 opacity-0 group-hover:mr-2 group-hover:opacity-100 '><FaArrowRight />
                            </span>News & Notices</div>
                            <div className='text-2xl/[110%] text-stone-700 font-merriwether group hover:text-orange-500 duration-300 cursor-pointer flex'><span className='flex items-center justify-center -mr-4 text-sm text-orange-400 duration-500 opacity-0 group-hover:mr-2 group-hover:opacity-100 '><FaArrowRight />
                            </span>Events</div>
                            <div className='text-2xl/[110%] group text-stone-700 font-merriwether  hover:text-orange-500 duration-300 cursor-pointer flex'><span className='flex items-center justify-center -mr-4 text-sm text-orange-400 duration-500 opacity-0 group-hover:mr-2 group-hover:opacity-100 '><FaArrowRight />
                            </span>Academics</div>
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
        </div>
    )
}

export default Footer