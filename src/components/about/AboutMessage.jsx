import React from 'react'

const AboutMessage = () => {
    return (
        <div className='w-full px-[5%] flex pb-28'>
            <div className='flex flex-col gap-4'>
                <div className='pb-2 text-2xl font-bold uppercase border-b-2 w-max md:w-max text-sky-900 border-stone-200 font-merriwether'>Message from the Principal</div>
                <div className='text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope gap-8 flex flex-col'>
                    <div>At Siddhartha Smarak Secondary School , we believe in fostering a seamless and transparent admission process to welcome prospective students into our community. To begin the journey towards enrollment, interested parents or guardians are invited to visit our school campus for a personalized tour and to meet with our admissions team. Following this initial visit, families can obtain an admissions packet containing all necessary forms and information.</div>
                    <div>Once the application forms are completed, along with any required documentation, they can be submitted to the admissions office either in person or electronically. Our admissions team carefully reviews each application, considering factors such as academic achievement, extracurricular involvement, and character.</div>
                </div>
            </div>
        </div>
    )
}

export default AboutMessage