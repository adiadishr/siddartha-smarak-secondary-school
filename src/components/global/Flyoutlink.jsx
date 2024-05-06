import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom"

const NavLink = ({ title }) => {

    var content;

    switch (title) {
        case 'About':
            content = AboutContent;
            break;
        case 'News & Events':
            content = NewsAndEventsContent;
            break;
        case 'Events':
            content = EventsContent;
            break;
        case 'किताब':
            content = किताबContent;
            break;
        case 'Blog':
            content = BlogContent;
            break;
    }

    return (
        <FlyoutLink href="#" FlyoutContent={content}>
            {title === 'किताब' ?
                <div className="flex items-center justify-center font-medium text-black duration-300 hover:text-orange-500 group">{title} <FaChevronDown className="ml-2 duration-500 group-hover:text-orange-400 group-hover:rotate-180" size={12.5} /></div>
                :
                <div className="flex items-center justify-center text-black duration-300 hover:text-orange-500 group">{title} <FaChevronDown className="ml-2 duration-500 group-hover:text-orange-400 group-hover:rotate-180" size={12.5} /></div>
            }
        </FlyoutLink>
    );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);

    const showFlyout = FlyoutContent && open;

    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className="relative w-fit h-fit"
        >
            <div href={href} className="relative text-white cursor-pointer">
                {children}
                <span
                    style={{
                        transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
                    }}
                    className="absolute h-1 transition-transform duration-700 ease-out origin-left scale-x-0 rounded-full bg-orange-500/80 -bottom-2 -left-2 -right-2"
                />
            </div>
            <AnimatePresence>
                {showFlyout && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ translateX: "-50%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute text-black bg-white left-1/2 top-16"
                    >
                        <div className="absolute top-0 w-4 h-4 duration-300 rotate-45 -translate-x-1/2 -translate-y-1/2 bg-white border-t-2 border-l-2 border-orange-400 left-1/2" />
                        <FlyoutContent />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const AboutContent = () => {
    return (
        <div className="w-64 p-6 bg-white border-t-2 border-orange-400 shadow-xl">
            <div className="space-y-3">
                <h3 className="font-semibold">About Us</h3>
                <Link className="block text-sm hover:underline" to='/About'>
                    Introduction
                </Link>
                <Link className="block text-sm hover:underline" to='/About#history'>
                    History & Resources
                </Link>
                <Link className="block text-sm hover:underline" to='/About#mission'>
                    Mission, Vision & Objective
                </Link>
                <Link className="block text-sm hover:underline" to='/About#message'>
                    Message From the Principal
                </Link>
                <Link className="block text-sm hover:underline" to='/About#staff'>
                    Faculty & Administrative Staff
                </Link>
            </div>
        </div>
    );
};

const NewsAndEventsContent = () => {
    return (
        <div className="w-64 p-6 bg-white border-t-2 border-orange-400 shadow-xl">
            <div className="space-y-3">
                <h3 className="font-semibold">News</h3>
                <a href="#" className="block text-sm hover:underline">
                    Latest News
                </a>
                <a href="#" className="block text-sm hover:underline">
                    Notices
                </a>
                <h3 className="font-semibold">Events</h3>
                <a href="#" className="block text-sm hover:underline">
                    Latest Events
                </a>
                <h3 href="#" className="block text-sm font-semibold">
                    Recurring Events
                </h3>
                <a href="#" className="block text-sm hover:underline">
                    Annual Day
                </a>
                <a href="#" className="block text-sm hover:underline">
                    Investiture Ceremony
                </a>
            </div>
            {/* <button className="w-full px-4 py-2 font-semibold transition-colors border-2 rounded-lg border-neutral-950 hover:bg-neutral-950 hover:text-white">
                Contact sales
            </button> */}
        </div>
    );
};

const किताबContent = () => {
    return (
        <div className="w-64 p-6 bg-white border-t-2 border-orange-400 shadow-xl">
            <div className="space-y-3">
                <Link className="block text-sm font-semibold hover:underline" to='/Books'>
                    किताब
                </Link>
                <Link className="block text-sm hover:underline" to='/Books#classone'>
                    कक्षा १
                </Link>
                <Link className="block text-sm hover:underline" to='/Books#classone'>
                    कक्षा २
                </Link>
                <Link className="block text-sm hover:underline" to='/Books#class3n4'>
                    कक्षा ३
                </Link>
                <Link className="block text-sm hover:underline" to='/Books#class3n4'>
                    कक्षा ४
                </Link>
                <Link className="block text-sm hover:underline" to='/Books#class5n6'>
                    कक्षा ५
                </Link>
                <Link className="block text-sm hover:underline" to='/Books#class5n6'>
                    कक्षा ६
                </Link>
                <Link className="block text-sm hover:underline" to='/Books#class7n8'>
                    कक्षा ७
                </Link>
                <Link className="block text-sm hover:underline" to='/Books#class7n8'>
                    कक्षा ८
                </Link>
                <Link className="block text-sm hover:underline" to='/Books#classnine'>
                    कक्षा ९
                </Link>
                <Link className="block text-sm hover:underline" to='/Books#classnine'>
                    कक्षा १०
                </Link>
            </div>
        </div>
    );
};

const BlogContent = () => {
    return (
        <div className="w-64 p-6 bg-white border-t-2 border-orange-400 shadow-xl">
            <div className="space-y-3">
                <h3 className="font-semibold">Blogs</h3>
                <a href="#" className="block text-sm hover:underline">
                    Latest Blogs
                </a>
                <a href="#" className="block text-sm font-semibold hover:underline">
                    Featured Blogs
                </a>
                <a href="#" className="block text-sm italic hover:underline">
                    My Journey In Siddartha Smarak ~ Puja Poon
                </a>
                <a href="#" className="block text-sm italic hover:underline">
                    मेरो यात्रा ~ Ankit Bhusal
                </a>
                <a href="#" className="block text-sm italic hover:underline">
                    नेपाली हाउ, नेपाल मा बसौ ~ Jeshan Pradhan
                </a>
            </div>
            {/* <button className="w-full px-4 py-2 font-semibold transition-colors border-2 rounded-lg border-neutral-950 hover:bg-neutral-950 hover:text-white">
                Contact sales
            </button> */}
        </div>
    );
};

export default NavLink;