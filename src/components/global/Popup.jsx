import React, { useState, useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Popup = () => {

    const [popup, setPopup] = useState(true);
    const [popupAnimate, setPopupAnimate] = useState(false);


    const togglePopup = () => {
        setPopupAnimate(!popupAnimate);
        setTimeout(() => {
            setPopup(!popup);
        }, 500);
    }

    useEffect(() => {
        if (popup) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [popup]);


    return (

        popup ?
            <motion.div
                transition={{ duration: 0.5 }}
                animate={popupAnimate ? "close" : "open"}
                style={{
                    opacity: 100
                }}
                variants={{
                    open: {
                        opacity: 100,
                    },
                    close: {
                        opacity: 0,
                    }
                }}
                data-aos='fade'
                className='fixed inset-0 top-0 left-0 z-50 flex items-center justify-center h-screen bg-black/50 backdrop-blur-xl' >
                <motion.button
                    animate={popupAnimate ? "close" : "open"}
                    onClick={togglePopup}
                    className='absolute text-4xl text-white right-4 top-4'
                    transition={{ duration: 0.5 }}
                    style={{
                        scale: 3,
                        opacity: 0,
                    }}
                    variants={{
                        open: {
                            scale: 1,
                            opacity: 1,
                        },
                        close: {
                            rotate: "360deg",
                            opacity: 0,
                            scale: 0,
                        }
                    }}>
                    <IoClose />
                </motion.button>
                <div
                    data-aos="fade-up"
                    className='flex h-[80vh] w-full mx-[5%] sm:mx-[10%] md:mx-[20%] bg-white items-center justify-center'>
                    <h1 className='text-6xl text-black'>POPUP</h1>
                </div>
            </motion.div>
            :
            null
    )
}

export default Popup