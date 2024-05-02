import React from 'react'


const fourthRowClassData = [
    {
        class: 'कक्षा ७',
        subjects: [
            { title: 'कक्षा ७ नेपाली', href: 'https://moecdc.gov.np/storage/gallery/1672800491.pdf' },
            { title: 'कक्षा ७ English', href: 'https://moecdc.gov.np/storage/gallery/1672800534.pdf' },
            { title: 'कक्षा ७ Maths(Nepali Version)', href: 'https://moecdc.gov.np/storage/gallery/1672800575.pdf' },
            { title: 'कक्षा ७ Maths(English Version)', href: 'https://moecdc.gov.np/storage/gallery/1709112299.pdf' },
            { title: 'कक्षा ७ विज्ञान (Nepali version)', href: 'https://moecdc.gov.np/storage/gallery/1674294172.pdf' },
            { title: 'कक्षा ७ विज्ञान (English version)', href: 'https://moecdc.gov.np/storage/gallery/1709186060.pdf' },
            { title: 'कक्षा ७ सामाजिक', href: 'https://moecdc.gov.np/storage/gallery/1672800794.pdf' },
            { title: 'कक्षा ७ Health and Physical (Nepali Version)', href: 'https://moecdc.gov.np/storage/gallery/1672800992.pdf' },
            { title: 'कक्षा ७ Health and Physical (English Version)', href: 'https://moecdc.gov.np/storage/gallery/1708934002.pdf' }
        ]
    },
    {
        class: 'कक्षा ८',
        subjects: [
            { title: 'कक्षा ८ नेपाली', href: 'https://moecdc.gov.np/storage/gallery/1682234494.pdf' },
            { title: 'कक्षा ८ English', href: 'https://moecdc.gov.np/storage/gallery/1689238602.pdf' },
            { title: 'कक्षा ८ Maths( Nepali Version)', href: 'https://moecdc.gov.np/storage/gallery/1684297112.pdf' },
            { title: 'कक्षा ८ Maths( English Version)', href: 'https://moecdc.gov.np/storage/gallery/1692693895.pdf' },
            { title: 'कक्षा ८ Science(Nepali Version)', href: 'https://moecdc.gov.np/storage/gallery/1684481476.pdf' },
            { title: 'कक्षा ८ Science(English Version)', href: 'https://moecdc.gov.np/storage/gallery/1687157819.pdf' },
            { title: 'कक्षा ८ सामाजिक', href: 'https://moecdc.gov.np/storage/gallery/1682060895.pdf' },
            { title: 'कक्षा ८ Health and Physical (Nepali Version)', href: 'https://moecdc.gov.np/storage/gallery/1708859361.pdf' },
            { title: 'कक्षा ८ Health and Physical (English Version)', href: 'https://moecdc.gov.np/storage/gallery/1687151177.pdf' }
        ]
    }
];

const BooksFourthRow = () => {
    return (
        <div className='flex flex-col justify-between w-full gap-16 md:flex-row'>
            {fourthRowClassData.map((classItem, index) => (

                <div key={index} id='class7&8' className='flex flex-col w-full gap-4 p-8 bg-white shadow-md rounded-3xl font-manrope h-max'>
                    <div className='pb-4 text-xl font-bold border-b-2 font-merriwether'>{classItem.class}</div>
                    {classItem.subjects.map((subject, subIndex) => (
                        <a target='_blank' key={subIndex} href={subject.href} className='font-medium underline cursor-pointer text-sky-700 hover:text-sky-900'>{subIndex + 1}. {subject.title}</a>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default BooksFourthRow