import React, { useRef } from 'react';
import UseScrollTo from '../utilities/UseScrollTo';


const AboutFaculty = () => {

    const staffSectionRef = useRef(null);
    UseScrollTo('staff');


    return (
        <>
            <div className='w-full pb-28 px-[5%] flex relative' >
                <div ref={staffSectionRef} className='absolute top-[-7.5rem]' id='staff' />
                <div className='flex flex-col w-full'>
                    <div className='w-full pb-2 text-2xl font-bold uppercase border-b-2 md:w-max text-sky-900 border-stone-200 font-merriwether'>Members of our faculty & staff
                    </div>
                    <div className='flex flex-wrap w-full gap-8 mt-8'>
                        {staffs.map((staff) => {
                            return <Staff staff={staff} key={staff.id} />;
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

const Staff = ({ staff }) => {
    return (
        <div data-aos='fade-up' data-aos-delay={staff.delay} data-aos-duration='300' key={staff.id} className='group flex flex-col w-full sm:w-[45%] md:w-[30%] bg-white shadow-lg rounded-2xl overflow-hidden'>
            <img className='flex object-cover object-center w-full duration-300 h-80 group-hover:scale-110' src={staff.url} alt="" />
            <div className='w-full pt-8 pb-2 text-xl text-center text-neutral-800 font-merriwether'>{staff.name}</div>
            <div className='w-full pb-8 text-base text-center text-black font-manrope'>{staff.position}</div>
        </div>
    );
}

export default AboutFaculty

const staffs = [
    {
        url: "https://source.unsplash.com/random/?teacher",
        name: "Rajesh Udas",
        position: "English Teacher",
        id: 1,
        delay: 0,
    },
    {
        url: "https://source.unsplash.com/random/?professor",
        name: "Brajesh Dangol",
        position: "English Teacher",
        id: 2,
        delay: 50,
    },
    {
        url: "https://source.unsplash.com/random/?english_teacher",
        name: "Rajesh Man Shrestha",
        position: "English Teacher",
        id: 3,
        delay: 100,
    },
    {
        url: "https://source.unsplash.com/random/?gardener",
        name: "Rajesh Man Shrestha",
        position: "English Teacher",
        id: 4,
        delay: 150,
    },
    {
        url: "https://source.unsplash.com/random/?doctor",
        name: "Rajesh Man Shrestha",
        position: "English Teacher",
        id: 5,
        delay: 200,
    },
    {
        url: "https://source.unsplash.com/random/?engineer",
        name: "Rajesh Man Shrestha",
        position: "English Teacher",
        id: 6,
        delay: 250,
    },
    {
        url: "https://source.unsplash.com/random/?scientist",
        name: "Rajesh Man Shrestha",
        position: "English Teacher",
        id: 7,
        delay: 300,
    },
];
