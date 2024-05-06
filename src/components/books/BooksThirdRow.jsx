import React from 'react'

const thirdRowClassData = [
    {
        class: 'कक्षा ५',
        subjects: [
            { title: 'कक्षा ५ नेपाली', href: 'https://moecdc.gov.np/storage/gallery/1681211870.pdf' },
            { title: 'कक्षा ५ English', href: 'https://moecdc.gov.np/storage/gallery/1681367111.pdf' },
            { title: 'कक्षा ५ गणित Nepali Version', href: 'https://moecdc.gov.np/storage/gallery/1681211690.pdf' },
            { title: 'कक्षा ५ गणित English Version', href: 'https://moecdc.gov.np/storage/gallery/1709109482.pdf' },
            { title: 'कक्षा ५ विज्ञान Nepali Version', href: 'https://moecdc.gov.np/storage/gallery/1681212072.pdf' },
            { title: 'कक्षा ५ विज्ञान English Version', href: 'https://moecdc.gov.np/storage/gallery/1709112362.pdf' },
            { title: 'कक्षा ५ सामाजिक', href: 'https://moecdc.gov.np/storage/gallery/1681212176.pdf' },
            { title: 'कक्षा ५ स्वास्थ्य Nepali Version', href: 'https://moecdc.gov.np/storage/gallery/1682061955.pdf' }
        ]
    },
    {
        class: 'कक्षा ६',
        subjects: [
            { title: 'कक्षा ६ नेपाली', href: 'https://moecdc.gov.np/storage/gallery/1672799748.pdf' },
            { title: 'कक्षा ६ English', href: 'https://moecdc.gov.np/storage/gallery/1672799804.pdf' },
            { title: 'कक्षा ६ गणित Nepali Version', href: 'https://moecdc.gov.np/storage/gallery/1672799879.pdf' },
            { title: 'कक्षा ६ गणित English Version', href: 'https://moecdc.gov.np/storage/gallery/1708925838.pdf' },
            { title: 'कक्षा ६ विज्ञान Nepali Version', href: 'https://moecdc.gov.np/storage/gallery/1672799965.pdf' },
            { title: 'कक्षा ६ विज्ञान English Version', href: 'https://moecdc.gov.np/storage/gallery/1709542968.pdf' },
            { title: 'कक्षा ६ सामाजिक', href: 'https://moecdc.gov.np/storage/gallery/1672800056.pdf' },
            { title: 'कक्षा ६ Health and Physical(Nepali Version)', href: 'https://moecdc.gov.np/storage/gallery/1710760807.pdf' },
            { title: 'कक्षा ६ Health and Physical(English Version)', href: 'https://moecdc.gov.np/storage/gallery/1709191880.pdf' }
        ]
    }
];


const BooksThirdRow = () => {
    return (
        <div className='flex flex-col justify-between w-full gap-16 md:flex-row'>
            {thirdRowClassData.map((classItem, index) => (

                <div key={index} id='class5&6' className='flex flex-col w-full gap-4 p-8 bg-white shadow-md rounded-3xl font-manrope '>
                    <div className='pb-4 text-xl font-bold border-b-2 font-merriwether'>{classItem.class}</div>
                    {classItem.subjects.map((subject, subIndex) => (
                        <a target='_blank' key={subIndex} href={subject.href} className='font-medium underline cursor-pointer text-sky-700 hover:text-sky-900'>{subIndex + 1}. {subject.title}</a>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default BooksThirdRow