import React from 'react'


const secondRowClassData = [
    {
        class: 'कक्षा ३',
        subjects: [
            { title: 'कक्षा ३  नेपाली', href: 'https://moecdc.gov.np/storage/gallery/1672633680.pdf' },
            { title: 'कक्षा ३  English', href: 'https://moecdc.gov.np/storage/gallery/1672633746.pdf' },
            { title: 'कक्षा ३  Maths नेपाली Version', href: 'https://moecdc.gov.np/storage/gallery/1672633791.pdf' },
            { title: 'कक्षा ३  Maths English Version', href: 'https://moecdc.gov.np/storage/gallery/1708924606.pdf' },
            { title: 'कक्षा ३  सेरोफेरो', href: 'https://moecdc.gov.np/storage/gallery/1672633882.pdf' }
        ]
    },
    {
        class: 'कक्षा ४',
        subjects: [
            { title: 'कक्षा ४ नेपाली', href: 'https://moecdc.gov.np/storage/gallery/1681727544.pdf' },
            { title: 'कक्षा ४ English', href: 'https://moecdc.gov.np/storage/gallery/1681728172.pdf' },
            { title: 'कक्षा ४ गणित Nepali version', href: 'https://moecdc.gov.np/storage/gallery/1681727585.pdf' },
            { title: 'कक्षा ४ गणित English Version', href: 'https://moecdc.gov.np/storage/gallery/1708926663.pdf' },
            { title: 'कक्षा ४ सामाजिक', href: 'https://moecdc.gov.np/storage/gallery/1681727636.pdf' },
            { title: 'कक्षा ४ विज्ञान Nepali version', href: 'https://moecdc.gov.np/storage/gallery/1681728702.pdf' },
            { title: 'कक्षा ४ विज्ञान English Version', href: 'https://moecdc.gov.np/storage/gallery/1704704471.pdf' },
            { title: 'कक्षा ४ स्वास्थ्य Nepali Version', href: 'https://moecdc.gov.np/storage/gallery/1681792950.pdf' },
            { title: 'कक्षा ४ स्वास्थ्य English Version', href: 'https://moecdc.gov.np/storage/gallery/1704704216.pdf' }
        ]
    }
];


const BooksSecondRow = () => {
    return (
        <div className='flex flex-col justify-between w-full gap-16 md:flex-row'>
            {secondRowClassData.map((classItem, index) => (

                <div key={index} id='class3&4' className='flex flex-col w-full gap-4 p-8 bg-white shadow-md rounded-3xl font-manrope h-max'>
                    <div className='pb-4 text-xl font-bold border-b-2 font-merriwether'>{classItem.class}</div>
                    {classItem.subjects.map((subject, subIndex) => (
                        <a target='_blank' key={subIndex} href={subject.href} className='font-medium underline cursor-pointer text-sky-700 hover:text-sky-900'>{subIndex + 1}. {subject.title}</a>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default BooksSecondRow