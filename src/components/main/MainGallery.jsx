import React from 'react'
import photo1 from '../../assets/1.jpg'
import photo2 from '../../assets/2.jpg'
import photo3 from '../../assets/3.jpg'
import photo4 from '../../assets/1.jpg'

const MainGallery = () => {
    return (
        <div className='flex pb-24 md:pb-36 px-[5%] w-full items-center justify-center'>
            <div className='flex flex-col w-full gap-16 md:flex-row'>
                <div className='flex flex-col gap-4 md:w-1/2'>
                    <div className='w-full pb-2 text-2xl font-bold uppercase border-b-2 md:w-max text-sky-900 border-stone-200 font-merriwether'>Focus on Holistic Growth</div>
                    <div className='flex flex-col text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope gap-4'>
                        <div className='flex '>We organize weekly & annual <span className='px-1 text-orange-500'> events,</span></div>
                        <div className='flex'>Housing a vibrant community of over 600 students, Siddhartha Smarak Secondary School offers state-of-the-art facilities and resources conducive to learning.</div>
                        <div className='flex'>To provide a nurturing environment where every student is empowered to achieve academic excellence, personal growth, and social responsibility.</div>
                        <div className='flex'>To provide a nurturing environment where every student is empowered to achieve academic excellence, personal growth, and social responsibility.</div>
                    </div>
                </div>
                <div className='flex gap-4 md:w-1/2'>
                    <div className='flex flex-col w-1/2 gap-8 translate-y-8'>
                        <div className='relative hover:translate-y-[-10px] duration-300 cursor-pointer'><img className='rounded-xl border-t-8 border-b-[72px] border-x-8 border-white shadow-xl' src={photo1} alt={photo1} /> <div className='absolute bottom-0 w-full pb-6 text-xl tracking-tight text-center text-black font-merriwether '>Teacher's day</div> </div>
                        <div className='relative hover:translate-y-[-10px] duration-300 cursor-pointer'><img className='rounded-xl border-t-8 border-b-[72px] border-x-8 border-white shadow-xl' src={photo4} alt={photo1} /> <div className='absolute bottom-0 w-full pb-6 text-xl tracking-tight text-center text-black font-merriwether '>Teacher's day</div></div>
                    </div>
                    <div className='flex flex-col w-1/2 gap-8 translate-y-16'>
                        <div className='relative hover:translate-y-[-10px] duration-300 cursor-pointer'><img className='rounded-xl border-t-8 border-b-[72px] border-x-8 border-white shadow-xl' src={photo2} alt={photo1} /><div className='absolute bottom-0 w-full pb-6 text-xl tracking-tight text-center text-black font-merriwether '>Cultural Day</div></div>
                        <div className='relative hover:translate-y-[-10px] duration-300 cursor-pointer'><img className='rounded-xl border-t-8 border-b-[72px] border-x-8 border-white shadow-xl' src={photo3} alt={photo1} /><div className='absolute bottom-0 w-full pb-6 text-xl tracking-tight text-center text-black font-merriwether '>Sports Day</div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainGallery