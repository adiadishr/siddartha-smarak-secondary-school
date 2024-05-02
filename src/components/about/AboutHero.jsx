import React from 'react'

const AboutHero = () => {
    return (
        <div className='mt-[114px] pt-24 pb-28 px-[5%]'>
            <div className='flex flex-col'>
                <div className='flex flex-col w-full gap-12'>
                    <div className='pb-2 text-2xl font-bold uppercase border-b-2 w-max md:w-max text-sky-900 border-stone-200 font-merriwether'>About Us</div>
                    <div className='flex flex-col w-full gap-12 md:flex-row'>
                        <div className='flex flex-col w-full gap-4 md:w-1/2'>
                            <div className='text-2xl/[110%] text-stone-700 font-merriwether pt-4'>An Introduction</div>
                            <div className='text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope gap-4'>
                                Nestled in the heart of Kapilvastu, our Siddhartha Smarak Secondary School Stands as a beacon of academic excellence and holistic development, catering to the educational needs of over 200+ students annually. With a rich legacy spanning decades, our institution boasts a dynamic learning environment where students thrive academically, socially, and emotionally.
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center w-full gap-4 overflow-hidden md:w-1/2'>
                            <img src="https://source.unsplash.com/random/?school" className='flex rounded-3xl' alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col w-full gap-12 md:flex-row'>
                        <div className='flex flex-col w-full gap-4 md:w-1/2'>
                            <div className='text-2xl/[110%] text-stone-700 font-merriwether pt-4'>History</div>
                            <div className='text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope gap-4'>
                                Our school is equipped with state-of-the-art facilities designed to nurture the diverse talents and interests of our student body. From well-equipped science laboratories and computer rooms to extensive sports grounds and recreational spaces, we provide a stimulating environment that encourages exploration and innovation. Our library, stocked with a vast array of books, journals, and digital resources, serves as a hub for intellectual inquiry and research, fostering a culture of lifelong learning.
                            </div>
                        </div>
                        <div className='flex flex-col w-full gap-4 md:w-1/2'>
                            <div className='text-2xl/[110%] text-stone-700 font-merriwether pt-4'>Resources</div>
                            <div className='text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope gap-4'>
                                As a testament to our commitment to excellence, our school has produced more than 5,000 successful passout who have gone on to make significant contributions to their respective fields and communities. With a legacy of academic achievement and a relentless pursuit of excellence, our secondary school continues to uphold its reputation as a premier institution dedicated to shaping the leaders of tomorrow.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutHero