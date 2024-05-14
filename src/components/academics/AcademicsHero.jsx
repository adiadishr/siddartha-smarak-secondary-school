import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "react-router-dom"
import photo1 from '../../assets/parentsDay.jpg'
import photo2 from '../../assets/prizeDistributions.jpg'
import photo3 from '../../assets/runningShieldCompetition.jpg'
import photo4 from '../../assets/sportsDay.jpg'

const routeTo = () => {
    window.scrollTo({ top: 0 })
}

const CallToAction = () => {
    return (
        <div className="flex justify-center w-full">
            <Link onClick={routeTo} to='/Contact' className="w-1/2 rounded-2xl bg-gradient-to-r from-orange-400/90 to-orange-700/90 text-white px-[5%] py-8 backdrop-blur-3xl flex items-center justify-center duration-300 hover:translate-y-[-.5rem] cursor-pointer">
                <p className="text-lg font-semibold tracking-wide uppercase font-merriwether md:text-xl">Join us at Siddartha Smarak</p>
            </Link>
        </div>
    )
}

const AcademicsHero = () => {

    return (
        <div className='flex flex-col w-full min-h-screen pb-24 pt-12 mt-[130px] px-[5%]'>
            <h5 className='mb-8 heading'>Academics</h5>
            <Tabs defaultValue="primary" className="relative flex flex-col w-full md:flex-row">
                <TabsList className='flex flex-wrap items-start w-min p-0 text-left md:w-[20%] sticky md:flex-col h-max top-24 bg-transparent font-merriwether text-black z-20'>
                    <TabsTrigger onClick={() => window.scrollTo({ top: 0 })} className='data-[state=active]:hover:bg-sky-800/90 justify-start w-full text-start hover:bg-sky-800/90 hover:text-white data-[state=active]:text-white data-[state=active]:bg-sky-800 px-4 py-4 bg-white' value="primary">Primary Program</TabsTrigger>
                    <TabsTrigger onClick={() => window.scrollTo({ top: 0 })} className='data-[state=active]:hover:bg-sky-800/90 justify-start w-full text-start hover:bg-sky-800/90 hover:text-white data-[state=active]:text-white data-[state=active]:bg-sky-800 px-4 py-4 bg-white' value="secondary">Secondary Program</TabsTrigger>
                    <TabsTrigger onClick={() => window.scrollTo({ top: 0 })} className='justify-start w-full text-start data-[state=active]:hover:bg-sky-800/90 hover:bg-sky-800/90 hover:text-white data-[state=active]:text-white data-[state=active]:bg-sky-800 px-4 py-4 bg-white' value="higher-secondary">Higher Secondary</TabsTrigger>
                </TabsList>
                <div className='relative w-full pt-12 md:pl-24 md:pt-0 text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope'>
                    <TabsContent className='flex flex-col gap-4 mt-0' value="primary">
                        <p>Moreover, our school prides itself on fostering a safe, inclusive, and supportive community where students feel valued, respected, and inspired to reach their highest aspirations. With a robust system of student support services in place, including counseling and extracurricular programs, we ensure that every student receives the guidance and encouragement they need to thrive both inside and outside the classroom.</p>
                        <p className="mb-8">Moreover, our school prides itself on fostering a safe, inclusive, and supportive community where students feel valued, respected, and inspired to reach their highest aspirations. With a robust system of student support services in place, including counseling and extracurricular programs, we ensure that every student receives the guidance and encouragement they need to thrive both inside and outside the classroom.</p>
                        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-2 xl:columns-3 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 mb-16">
                            <img src={photo1} alt="" />
                            <img src={photo2} alt="" />
                            <img src={photo3} alt="" />
                            <img src={photo4} alt="" />
                            <img src={photo1} alt="" />
                            <img src={photo2} alt="" />
                            <img src={photo3} alt="" />
                            <img src={photo4} alt="" />
                        </div>
                        <CallToAction />
                    </TabsContent>
                    <TabsContent className='flex flex-col gap-4 mt-0' value="secondary">
                        <p>As a testament to our commitment to excellence, our school has produced more than 5,000 successful passout who have gone on to make significant contributions to their respective fields and communities. With a legacy of academic achievement and a relentless pursuit of excellence, our secondary school continues to uphold its reputation as a premier institution dedicated to shaping the leaders of tomorrow.
                        </p>
                        <p className="mb-8">As a testament to our commitment to excellence, our school has produced more than 5,000 successful passout who have gone on to make significant contributions to their respective fields and communities. With a legacy of academic achievement and a relentless pursuit of excellence, our secondary school continues to uphold its reputation as a premier institution dedicated to shaping the leaders of tomorrow.
                        </p>
                        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-2 xl:columns-3 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 mb-16">
                            <img src={photo1} alt="" />
                            <img src={photo2} alt="" />
                            <img src={photo3} alt="" />
                            <img src={photo4} alt="" />
                            <img src={photo1} alt="" />
                            <img src={photo2} alt="" />
                            <img src={photo3} alt="" />
                            <img src={photo4} alt="" />
                        </div>
                        <CallToAction />
                    </TabsContent>
                    <TabsContent className='flex flex-col gap-4 mt-0' value="higher-secondary">
                        <p>
                            At Siddhartha Smarak Secondary School , we believe in fostering a seamless and transparent admission process to welcome prospective students into our community. To begin the journey towards enrollment, interested parents or guardians are invited to visit our school campus for a personalized tour and to meet with our admissions team. Following this initial visit, families can obtain an admissions packet containing all necessary forms and information.

                        </p>
                        <p className="mb-8">
                            At Siddhartha Smarak Secondary School , we believe in fostering a seamless and transparent admission process to welcome prospective students into our community. To begin the journey towards enrollment, interested parents or guardians are invited to visit our school campus for a personalized tour and to meet with our admissions team. Following this initial visit, families can obtain an admissions packet containing all necessary forms and information.

                        </p>
                        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-2 xl:columns-3 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 mb-16">
                            <img src={photo1} alt="" />
                            <img src={photo2} alt="" />
                            <img src={photo3} alt="" />
                            <img src={photo4} alt="" />
                            <img src={photo1} alt="" />
                            <img src={photo2} alt="" />
                            <img src={photo3} alt="" />
                            <img src={photo4} alt="" />
                        </div>
                        <CallToAction />
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}

export default AcademicsHero