import React, { useRef } from 'react';
import UseScrollTo from '../utilities/UseScrollTo';

const AboutMessage = () => {

    const messageRef = useRef(null);
    UseScrollTo('message');

    return (
        <div className='w-full px-[5%] flex pb-28 relative'>
            <div ref={messageRef} className='absolute top-[-7.5rem]' id='message' />
            <div className='flex flex-col gap-4'>
                <h5 className='mb-8 heading'>Message from the Principal</h5>
                <div className='flex flex-col w-full gap-12 md:gap-32 md:flex-row'>
                    <div className='text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope gap-8 flex flex-col w-full md:order-1 order-2'>
                        <div>At Siddhartha Smarak Secondary School , we believe in fostering a seamless and transparent admission process to welcome prospective students into our community. To begin the journey towards enrollment, interested parents or guardians are invited to visit our school campus for a personalized tour and to meet with our admissions team. Following this initial visit, families can obtain an admissions packet containing all necessary forms and information.</div>
                        <div>Once the application forms are completed, along with any required documentation, they can be submitted to the admissions office either in person or electronically. Our admissions team carefully reviews each application, considering factors such as academic achievement, extracurricular involvement, and character.</div>
                    </div>
                    <div className='flex order-1 w-full h-full mb-8 shadow-lg md:order-2 md:mb-0' >
                        <img src='https://source.unsplash.com/random/?white_man' className='object-cover object-center border-b-8 brightness-[.6] duration-300 hover:brightness-75 saturate-50 hover:saturate-100 border-r-8 border-sky-800 rounded-xl' alt="Image of the Principal" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMessage