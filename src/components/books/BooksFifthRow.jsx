import React, { useRef } from 'react';
import UseScrollTo from '../utilities/UseScrollTo';

const fifthRowClassData = [
    {
        class: 'कक्षा ९',
        subjects: [
            { title: 'कक्षा ९ नेपाली', href: 'https://moecdc.gov.np/storage/gallery/1672903464.pdf' },
            { title: 'कक्षा ९ English', href: 'https://moecdc.gov.np/storage/gallery/1688289325.pdf' },
            { title: 'कक्षा ९ Maths(Nepali Version)', href: 'https://moecdc.gov.np/storage/gallery/1672910414.pdf' },
            { title: 'कक्षा ९ Maths ( English Version)', href: 'https://moecdc.gov.np/storage/gallery/1708861009.pdf' },
            { title: 'कक्षा ९ Science(Nepali Version)', href: 'https://moecdc.gov.np/storage/gallery/1672910467.pdf' },
            { title: 'कक्षा ९ Science (English Version)', href: 'https://moecdc.gov.np/storage/gallery/1709189449.pdf' },
            { title: 'कक्षा ९ सामाजिक', href: 'https://moecdc.gov.np/storage/gallery/1672910576.pdf' }
        ]
    },
    {
        class: 'कक्षा १०',
        subjects: [
            { title: 'कक्षा १० नेपाली', href: 'https://moecdc.gov.np/storage/gallery/1681370216.pdf' },
            { title: 'कक्षा १० English', href: 'https://moecdc.gov.np/storage/gallery/1681716079.pdf' },
            { title: 'कक्षा १० Maths (Nepali Version)', href: 'https://moecdc.gov.np/storage/gallery/1681715186.pdf' },
            { title: 'कक्षा १० Maths (English Version)', href: 'https://moecdc.gov.np/storage/gallery/1687066510.pdf' },
            { title: 'कक्षा १० Science(Nepali Version)', href: 'https://moecdc.gov.np/storage/gallery/1682668847.pdf' },
            { title: 'कक्षा १० Science(English Version)', href: 'https://moecdc.gov.np/storage/gallery/1692097269.pdf' },
            { title: 'कक्षा १० सामाजिक', href: 'https://moecdc.gov.np/storage/gallery/1710845068.pdf' }
        ]
    }
];


const BooksFifthRow = () => {

    const classRef = useRef(null);
    UseScrollTo('classnine');

    return (
        <div className='relative flex flex-col justify-between w-full gap-16 md:flex-row'>
        <div ref={classRef} className='absolute top-[-7.5rem]' id='classnine' />
            {fifthRowClassData.map((classItem, index) => (

                <div key={index} className='flex flex-col w-full gap-4 p-8 bg-white shadow-md rounded-3xl font-manrope '>
                    <div className='pb-4 text-xl font-bold border-b-2 font-merriwether'>{classItem.class}</div>
                    {classItem.subjects.map((subject, subIndex) => (
                        <a target='_blank' key={subIndex} href={subject.href} className='font-medium underline cursor-pointer text-sky-700 hover:text-sky-900'>{subIndex + 1}. {subject.title}</a>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default BooksFifthRow