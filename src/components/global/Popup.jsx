import React, { useState, useEffect } from 'react'
import { IoClose } from "react-icons/io5";

const Popup = () => {

    const [popup, setPopup] = useState(true);

    useEffect(() => {
        // Disable scrolling when the popup is active
        if (popup) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        // Cleanup function to reset overflow style when the component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [popup]);


    return (
        popup ?
            <div className='fixed inset-0 top-0 z-50 flex items-center justify-center w-full h-screen bg-black/50 backdrop-blur-sm'>
                <button onClick={() => setPopup(!popup)} className='absolute text-4xl text-white right-4 top-4'><IoClose /></button>
                <div data-aos="fade-up" className='flex h-[80vh] w-full mx-[20%] bg-white items-center justify-center'>
                    <h1 className='text-6xl text-black'>POPUP</h1>
                </div>
            </div>
            :
            null
    )
}

export default Popup