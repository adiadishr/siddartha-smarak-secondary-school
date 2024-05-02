import React from 'react'

const firstRowClassData = [
    {
        class: 'कक्षा १',
        subjects: [
            { title: 'कक्षा १ नेपाली', href: 'https://moecdc.gov.np/storage/gallery/1704094300.pdf' },
            { title: 'कक्षा १ अंग्रेजी', href: 'https://moecdc.gov.np/storage/gallery/1672307877.pdf' },
            { title: 'कक्षा १ गणित नेपाली version', href: 'https://moecdc.gov.np/storage/gallery/1672308310.pdf' },
            { title: 'कक्षा १ गणित English version', href: 'https://moecdc.gov.np/storage/gallery/1708925298.pdf' },
            { title: 'कक्षा १ सेरोफेरो', href: 'https://moecdc.gov.np/storage/gallery/1672308652.pdf' }
        ]
    },
    {
        class: 'कक्षा २',
        subjects: [
            { title: 'कक्षा २ नेपाली', href: 'https://moecdc.gov.np/storage/gallery/1672633608.pdf' },
            { title: 'कक्षा २ English', href: 'https://moecdc.gov.np/storage/gallery/1672556083.pdf' },
            { title: 'कक्षा २ Maths नेपाली Version', href: 'https://moecdc.gov.np/storage/gallery/1672567946.pdf' },
            { title: 'कक्षा २ Maths English Version', href: 'https://moecdc.gov.np/storage/gallery/1708852295.pdf' },
            { title: 'कक्षा २ सेरोफेरो', href: 'https://moecdc.gov.np/storage/gallery/1682058190.pdf' }
        ]
    }
];


const BooksFirstRow = () => {
    return (
        <div className='flex flex-col justify-between w-full gap-16 md:flex-row'>
            {firstRowClassData.map((classItem, index) => (

                <div key={index} id='class1&2' className='flex flex-col w-full gap-4 p-8 bg-white shadow-md rounded-3xl font-manrope'>
                    <div className='pb-4 text-xl font-bold border-b-2 font-merriwether'>{classItem.class}</div>
                    {classItem.subjects.map((subject, subIndex) => (
                        <a target='_blank' key={subIndex} href={subject.href} className='font-medium underline cursor-pointer text-sky-700 hover:text-sky-900'>{subIndex + 1}. {subject.title}</a>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default BooksFirstRow