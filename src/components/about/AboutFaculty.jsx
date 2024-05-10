import React, { useEffect, useState, useRef } from 'react';
import UseScrollTo from '../utilities/UseScrollTo';

const AboutFaculty = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    var delay1, delay2, delay3, delay4, delay5, delay6;

    if (windowWidth > 768) {
        delay1 = 50;
        delay2 = 100;
        delay3 = 150;
        delay4 = 200;
        delay5 = 250;
        delay6 = 300;
    } else if (windowWidth > 640) {
        delay1 = 50;
        delay2 = 100;
        delay3 = 50;
        delay4 = 10;
        delay5 = 50;
        delay6 = 100;
    } else {
        delay1 = 100;
        delay2 = 100;
        delay3 = 100;
        delay4 = 100;
        delay5 = 100;
        delay6 = 100;
    }

    const staffSectionRef = useRef(null);
    UseScrollTo('staff');

        const staffs = [
        {
            url: "https://source.unsplash.com/random/?teacher",
            name: "Rajesh Udas",
            position: "English Teacher",
            id: 1,
            delay: delay1,
        },
        {
            url: "https://source.unsplash.com/random/?professor",
            name: "Brajesh Dangol",
            position: "Physics Teacher",
            id: 2,
            delay: delay2,
        },
        {
            url: "https://source.unsplash.com/random/?english_teacher",
            name: "Rajesh Man Shrestha",
            position: "Physical Education Teacher",
            id: 3,
            delay: delay3,
        },
        {
            url: "https://source.unsplash.com/random/?gardener",
            name: "Rajesh Man Shrestha",
            position: "English Teacher",
            id: 4,
            delay: delay4,
        },
        {
            url: "https://source.unsplash.com/random/?doctor",
            name: "Rajesh Man Shrestha",
            position: "English Teacher",
            id: 5,
            delay: delay5,
        },
        {
            url: "https://source.unsplash.com/random/?engineer",
            name: "Rajesh Man Shrestha",
            position: "English Teacher",
            id: 6,
            delay: delay6,
        },
        {
            url: "https://source.unsplash.com/random/?scientist",
            name: "Rajesh Man Shrestha",
            position: "English Teacher",
            id: 7,
            delay: delay1,
        },
    ];

    return (
        <>
            <div className='w-full px-[5%] flex relative' >
                <div ref={staffSectionRef} className='absolute top-[-7.5rem]' id='staff' />
                <div className='flex flex-col w-full'>
                    <h5 className='heading'>Members of our faculty & staff
                    </h5>
                    <div className='flex flex-wrap justify-between w-full gap-8 mt-8'>
                        {staffs.map((staff) => {
                            return <Staff staff={staff} key={staff.id} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

const Staff = ({ staff }) => {
    return (
        <div data-aos='fade-up' data-aos-delay={staff.delay} data-aos-duration='300' key={staff.id} className='group flex flex-col w-full sm:w-[45%] md:w-[30%] bg-white shadow-lg rounded-2xl overflow-hidden'>
            <div className='overflow-hidden'><img className='flex object-cover object-center w-full duration-500 h-80 group-hover:scale-110 saturate-0 group-hover:saturate-100' src={staff.url} alt="" /></div>
            <div className='w-full pt-8 pb-2 text-xl text-center text-neutral-800 font-merriwether'>{staff.name}</div>
            <div className='w-full pb-8 text-base text-center text-black font-manrope'>{staff.position}</div>
        </div>
    );
}

export default AboutFaculty;
