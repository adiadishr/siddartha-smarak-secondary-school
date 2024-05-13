import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Link } from "react-router-dom"

const routeTo = () => {
    window.scrollTo({ top: 0})
}

const CallToAction = () => {
    return (
        <Link onClick={routeTo} to='/Contact' className="w-full rounded-2xl bg-gradient-to-r from-orange-400/90 to-orange-700/90 text-white px-[5%] py-8 backdrop-blur-3xl flex items-center justify-center duration-300 hover:translate-y-[-1.5rem] cursor-pointer">
            <p  className="uppercase font-merriwether tracking-wide text-lg md:text-2xl font-semibold">Join us at Siddartha Smarak</p>
        </Link>
    )
}

const AcademicsHero = () => {

    return (
        <div className='flex flex-col w-full min-h-screen pb-24 pt-12 mt-[130px] px-[5%]'>
            <h5 className='mb-8 heading'>Academics</h5>
            <Tabs defaultValue="primary" className="relative flex flex-col w-full md:flex-row">
                <TabsList className='flex flex-wrap items-start w-min p-0 text-left md:w-[20%] sticky md:flex-col h-max top-36 bg-transparent font-merriwether text-black z-20'>
                    <TabsTrigger onClick={() => window.scrollTo({ top: 0 })} className='data-[state=active]:hover:bg-sky-800/90 justify-start w-full text-start hover:bg-sky-800/90 hover:text-white data-[state=active]:text-white data-[state=active]:bg-sky-800 px-4 py-4 bg-white' value="primary">Primary Program</TabsTrigger>
                    <TabsTrigger onClick={() => window.scrollTo({ top: 0 })} className='data-[state=active]:hover:bg-sky-800/90 justify-start w-full text-start hover:bg-sky-800/90 hover:text-white data-[state=active]:text-white data-[state=active]:bg-sky-800 px-4 py-4 bg-white' value="secondary">Secondary Program</TabsTrigger>
                    <TabsTrigger onClick={() => window.scrollTo({ top: 0 })} className='justify-start w-full text-start data-[state=active]:hover:bg-sky-800/90 hover:bg-sky-800/90 hover:text-white data-[state=active]:text-white data-[state=active]:bg-sky-800 px-4 py-4 bg-white' value="higher-secondary">Higher Secondary</TabsTrigger>
                </TabsList>
                <div className='relative w-full pt-12 md:pl-24 md:pt-0 text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope'>
                    <TabsContent className='flex flex-col gap-4 mt-0' value="primary">
                        <p>Moreover, our school prides itself on fostering a safe, inclusive, and supportive community where students feel valued, respected, and inspired to reach their highest aspirations. With a robust system of student support services in place, including counseling and extracurricular programs, we ensure that every student receives the guidance and encouragement they need to thrive both inside and outside the classroom.</p>
                        <p className="mb-8">Moreover, our school prides itself on fostering a safe, inclusive, and supportive community where students feel valued, respected, and inspired to reach their highest aspirations. With a robust system of student support services in place, including counseling and extracurricular programs, we ensure that every student receives the guidance and encouragement they need to thrive both inside and outside the classroom.</p>
                        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-2 xl:columns-3 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 mb-16">
                            <img src="https://source.unsplash.com/ztpUS4N1xhY" alt="" />
                            <img src="https://source.unsplash.com/mPFSPqZOO7s" alt="" />
                            <img src="https://source.unsplash.com/uPEnxrdSKIw" alt="" />
                            <img src="https://source.unsplash.com/hFKZ5-OT9Ys" alt="" />
                            <img src="https://source.unsplash.com/xoTt2fjs7d0" alt="" />
                            <img src="https://source.unsplash.com/Vc2dD4l57og" alt="" />
                            <img src="https://source.unsplash.com/hqnQWmIt3cY" alt="" />
                        </div>
                        <CallToAction />
                    </TabsContent>
                    <TabsContent className='flex flex-col gap-4 mt-0' value="secondary">
                        <p>As a testament to our commitment to excellence, our school has produced more than 5,000 successful passout who have gone on to make significant contributions to their respective fields and communities. With a legacy of academic achievement and a relentless pursuit of excellence, our secondary school continues to uphold its reputation as a premier institution dedicated to shaping the leaders of tomorrow.
                        </p>
                        <p>As a testament to our commitment to excellence, our school has produced more than 5,000 successful passout who have gone on to make significant contributions to their respective fields and communities. With a legacy of academic achievement and a relentless pursuit of excellence, our secondary school continues to uphold its reputation as a premier institution dedicated to shaping the leaders of tomorrow.
                        </p>
                        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-2 xl:columns-3 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 mb-16">
                            <img src="https://source.unsplash.com/uyX3qAQhZVA" alt="" />
                            <img src="https://source.unsplash.com/LV-NvIcA-Gg" alt="" />
                            <img src="https://source.unsplash.com/0qnRfgnZIsI" alt="" />
                            <img src="https://source.unsplash.com/mpwF3Mv2UaU" alt="" />
                            <img src="https://source.unsplash.com/gfMWhkDCwYM" alt="" />
                            <img src="https://source.unsplash.com/8KtqjrskUg8" alt="" />
                            <img src="https://source.unsplash.com/qAaGXj-AOv4" alt="" />
                        </div>
                        <div className="w-full rounded-2xl bg-orange-500/80 text-white px-[5%] py-8 backdrop-blur-3xl  ">
                            <p className="">Moreover, our school prides itself on fostering a safe, inclusive, and supportive community where students feel valued, respected, and inspired to reach their highest aspirations. With a robust system of student support services in place, including counseling and extracurricular programs, we ensure that every student receives the guidance and encouragement they need to thrive both inside and outside the classroom.</p>
                        </div>
                    </TabsContent>
                    <TabsContent className='flex flex-col gap-4 mt-0' value="higher-secondary">
                        <p>
                            At Siddhartha Smarak Secondary School , we believe in fostering a seamless and transparent admission process to welcome prospective students into our community. To begin the journey towards enrollment, interested parents or guardians are invited to visit our school campus for a personalized tour and to meet with our admissions team. Following this initial visit, families can obtain an admissions packet containing all necessary forms and information.

                        </p>
                        <p>
                            At Siddhartha Smarak Secondary School , we believe in fostering a seamless and transparent admission process to welcome prospective students into our community. To begin the journey towards enrollment, interested parents or guardians are invited to visit our school campus for a personalized tour and to meet with our admissions team. Following this initial visit, families can obtain an admissions packet containing all necessary forms and information.

                        </p>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}

export default AcademicsHero