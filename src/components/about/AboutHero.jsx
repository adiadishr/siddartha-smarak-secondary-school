import React, { useRef } from 'react';
import UseScrollTo from '../utilities/UseScrollTo';
import aboutHeroImage from '../../assets/aboutHero.jpg'

const AboutHero = () => {

    const historySectionRef = useRef(null);
    UseScrollTo('history');

    return (
        <div className='pt-12 mt-[130px] pb-28 px-[5%]'>
            <div className='flex flex-col'>
                <div className='flex flex-col w-full gap-8'>
                    <h5 className='heading'>About Us</h5>
                    <div className='flex flex-col w-full gap-12 md:flex-row'>
                        <div className='flex flex-col w-full gap-4 md:w-1/2'>
                            <div className='text-2xl/[110%] text-stone-700 font-merriwether pt-4 flex'>An Introduction</div>
                            <div className='text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope gap-4 flex'>
                                Nestled in the heart of Kapilvastu, our Siddhartha Smarak Secondary School Stands as a beacon of academic excellence and holistic development, catering to the educational needs of over 200+ students annually. With a rich legacy spanning decades, our institution boasts a dynamic learning environment where students thrive academically, socially, and emotionally.
                            </div>
                        </div>
                        <div className='flex flex-col items-center flex-shrink w-full overflow-hidden md:w-1/2 '>
                            <img src={aboutHeroImage} className='border-b-4 border-r-4 border-sky-800 object-cover object-center rounded-3xl brightness-75 saturate-[.9] duration-300 md:max-h-[20rem] w-full' alt="" />
                        </div>
                    </div>
                    <div className='relative flex flex-col w-full gap-12 md:flex-row'>
                        <div ref={historySectionRef} id='history' className='absolute top-[-7.5rem]' />
                        <div className='flex flex-col w-full gap-4 md:w-1/2'>
                            <div className='text-2xl/[110%] text-stone-700 font-merriwether pt-4'>History</div>
                            <div className='text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope gap-4'>
                                As a testament to our commitment to excellence, our school has produced more than 5,000 successful passout who have gone on to make significant contributions to their respective fields and communities. With a legacy of academic achievement and a relentless pursuit of excellence, our secondary school continues to uphold its reputation as a premier institution dedicated to shaping the leaders of tomorrow.
                            </div>
                        </div>
                        <div className='flex flex-col w-full gap-4 md:w-1/2'>
                            <div className='text-2xl/[110%] text-stone-700 font-merriwether pt-4'>Resources</div>
                            <div className='text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope gap-4'>
                                Our school is equipped with state-of-the-art facilities designed to nurture the diverse talents and interests of our student body. From well-equipped science laboratories and computer rooms to extensive sports grounds and recreational spaces, we provide a stimulating environment that encourages exploration and innovation. We pride ourselves on fostering a safe, inclusive, and supportive community where students feel valued, respected, and inspired to reach their highest aspirations.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutHero