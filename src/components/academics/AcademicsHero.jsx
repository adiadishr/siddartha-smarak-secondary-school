import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const AcademicsHero = () => {

    return (
        <div className='flex flex-col w-full min-h-screen pb-24 pt-12 mt-[130px] px-[5%]'>
            <div className='w-full pb-2 mb-8 text-2xl font-bold text-center uppercase border-b-2 md:text-start md:w-max text-sky-900 border-stone-200 font-merriwether'>Academics</div>
            <Tabs defaultValue="primary" className="relative flex flex-col w-full md:flex-row">
                <TabsList className='flex items-start w-full p-0 text-left md:w-[20%] sticky md:flex-col h-max top-36 bg-transparent font-merriwether text-black z-20'>
                    <TabsTrigger onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='data-[state=active]:hover:bg-sky-800/90 justify-start w-full text-start hover:bg-sky-800/90 hover:text-white data-[state=active]:text-white data-[state=active]:bg-sky-800 px-4 py-4 bg-white' value="primary">Primary Program</TabsTrigger>
                    <TabsTrigger onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='data-[state=active]:hover:bg-sky-800/90 justify-start w-full text-start hover:bg-sky-800/90 hover:text-white data-[state=active]:text-white data-[state=active]:bg-sky-800 px-4 py-4 bg-white' value="secondary">Secondary Program</TabsTrigger>
                    <TabsTrigger onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='justify-start w-full text-start data-[state=active]:hover:bg-sky-800/90 hover:bg-sky-800/90 hover:text-white data-[state=active]:text-white data-[state=active]:bg-sky-800 px-4 py-4 bg-white' value="higher-secondary">Higher Secondary</TabsTrigger>
                </TabsList>
                <div className='relative w-full pt-12 md:pl-24 md:pt-0 text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope'>
                    <TabsContent className='flex flex-col gap-4 mt-0' value="primary">
                        <p>Moreover, our school prides itself on fostering a safe, inclusive, and supportive community where students feel valued, respected, and inspired to reach their highest aspirations. With a robust system of student support services in place, including counseling and extracurricular programs, we ensure that every student receives the guidance and encouragement they need to thrive both inside and outside the classroom.</p>
                        <p>Moreover, our school prides itself on fostering a safe, inclusive, and supportive community where students feel valued, respected, and inspired to reach their highest aspirations. With a robust system of student support services in place, including counseling and extracurricular programs, we ensure that every student receives the guidance and encouragement they need to thrive both inside and outside the classroom.</p>
                    </TabsContent>
                    <TabsContent className='flex flex-col gap-4 mt-0' value="secondary">
                        <p>As a testament to our commitment to excellence, our school has produced more than 5,000 successful passout who have gone on to make significant contributions to their respective fields and communities. With a legacy of academic achievement and a relentless pursuit of excellence, our secondary school continues to uphold its reputation as a premier institution dedicated to shaping the leaders of tomorrow.
                        </p>
                        <p>As a testament to our commitment to excellence, our school has produced more than 5,000 successful passout who have gone on to make significant contributions to their respective fields and communities. With a legacy of academic achievement and a relentless pursuit of excellence, our secondary school continues to uphold its reputation as a premier institution dedicated to shaping the leaders of tomorrow.
                        </p>
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