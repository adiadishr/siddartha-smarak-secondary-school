import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";

const Example = ({ title, content }) => {

    switch (content) {
        case 'about':
            content = AboutContent;
            break;
        default:
            content = PricingContent;
    }

    return (
        <FlyoutLink href="#" FlyoutContent={content}>
            <div className="flex items-center justify-center text-black duration-300 hover:text-orange-500 group">{title} <FaChevronDown className="ml-2 duration-500 group-hover:text-orange-400 group-hover:rotate-180" size={12.5} /></div>
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
                        <div className="absolute top-0 w-4 h-4 rotate-45 -translate-x-1/2 -translate-y-1/2 bg-white border-t-2 border-l-2 border-orange-400 left-1/2" />
                        <FlyoutContent />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const PricingContent = () => {
    return (
        <div className="w-64 p-6 bg-white border-t-2 border-orange-400 shadow-xl">
            <div className="mb-3 space-y-3">
                <h3 className="font-semibold font-merriwether">Introduction</h3>
                <a href="#" className="block text-sm hover:underline">
                    Introduction
                </a>
                <a href="#" className="block text-sm hover:underline">
                    Pay as you go
                </a>
            </div>
            <div className="mb-3 space-y-3">
                <h3 className="font-semibold">For Companies</h3>
                <a href="#" className="block text-sm hover:underline">
                    Startups
                </a>
                <a href="#" className="block text-sm hover:underline">
                    SMBs
                </a>
                <a href="#" className="block text-sm hover:underline">
                    Enterprise
                </a>
            </div>
            {/* <button className="w-full px-4 py-2 font-semibold transition-colors border-2 rounded-lg border-neutral-950 hover:bg-neutral-950 hover:text-white">
                Contact sales
            </button> */}
        </div>
    );
};

const AboutContent = () => {
    return (
        <div className="w-64 p-6 bg-white border-t-2 border-orange-400 shadow-xl">
            <div className="space-y-3">
                <h3 className="font-semibold">About Us</h3>
                <a href="#" className="block text-sm hover:underline">
                    Introduction
                </a>
                <a href="#" className="block text-sm hover:underline">
                    Pay as you go
                </a>
                <a href="#" className="block text-sm hover:underline">
                    Startups
                </a>
                <a href="#" className="block text-sm hover:underline">
                    SMBs
                </a>
                <a href="#" className="block text-sm hover:underline">
                    Enterprise
                </a>
            </div>
            {/* <button className="w-full px-4 py-2 font-semibold transition-colors border-2 rounded-lg border-neutral-950 hover:bg-neutral-950 hover:text-white">
                Contact sales
            </button> */}
        </div>
    );
};

export default Example;