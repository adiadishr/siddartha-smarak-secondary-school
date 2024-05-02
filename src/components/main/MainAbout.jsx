import { FaGraduationCap, FaTrophy } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";

const MainAbout = () => {
    return (
        <div className='w-full flex px-[7.5%] pb-48'>
            <div className="flex flex-col w-full gap-24">
                <div className='flex flex-col items-center w-full gap-2'>
                    <div className='text-xl tracking-wide text-stone-500 font-manrope '>What do we <span className='text-2xl font-bold text-orange-500 uppercase font-merriwether'>AIM</span> for?</div>
                    <div className='w-full text-center text-2xl/[110%] text-stone-700 font-merriwether'>Our Mission, Vision and Objective</div>
                </div>
                <div className='flex flex-col items-center justify-center w-full gap-24 md:gap-8 px-[5%] sm:px-[10%] md:px-0 md:flex-row'>
                    {/* Card 1 */}
                    <div className='flex-col group border-r-2 hover:translate-y-[-2rem] cursor-pointer  border-b-4  border-sky-900 bg-white flex items-center gap-8 md:h-[26rem] h-[30rem] rounded-xl hover:shadow-lg duration-500 shadow-orange-200 relative w-full'>
                        <div className='flex items-center justify-center md:mt-8 mt-24 text-white bg-gradient-to-br from-sky-800 to-sky-950 rounded-full size-36 group-hover:rotate-[360deg] duration-1000 ease-in-out'>
                            <FaGraduationCap className="text-7xl" />
                        </div>
                        <div className='w-full text-center text-base/[150%] px-[10%] font-manrope text-stone-700'>To provide a nurturing environment where every student is empowered to achieve academic excellence, personal growth, and social responsibility.

                        </div>
                        <div className='absolute px-[15%] py-4 text-white bg-sky-900 rounded-lg -bottom-5 font-manrope group-hover:bg-white group-hover:text-sky-900 group-hover:font-bold duration-300 border-2 border-sky-900'>Our Vison</div>
                    </div>
                    {/* Card 2 */}
                    <div className='flex-col group border-r-2 hover:translate-y-[-2rem] md:hover:translate-y-[-4rem] cursor-pointer  border-b-4  border-sky-900 bg-white flex items-center gap-8 md:h-[26rem] h-[30rem] rounded-xl hover:shadow-lg duration-500 shadow-orange-200 relative w-full md:translate-y-[-2rem]'>
                        <div className='flex items-center justify-center md:mt-8 mt-24 text-white bg-gradient-to-br from-sky-800 to-sky-950 rounded-full size-36 group-hover:rotate-[360deg] duration-1000 ease-in-out'>
                            <FaTrophy className="text-7xl" />
                        </div>
                        <div className='w-full text-center text-base/[150%] px-[10%] font-manrope text-stone-700'>To be a leading institution in fostering holistic development, innovation, and leadership, preparing students to thrive in a dynamic global society.
                        </div>
                        <div className='absolute px-[15%] py-4 text-white bg-sky-900 rounded-lg -bottom-5 font-manrope group-hover:bg-white group-hover:text-sky-900 group-hover:font-bold duration-300 border-2 border-sky-900'>Our Vison</div>
                    </div>
                    {/* Card 3 */}
                    <div className='flex-col group border-r-2 hover:translate-y-[-2rem] cursor-pointer  border-b-4  border-sky-900 bg-white flex items-center gap-8 md:h-[26rem] h-[30rem] rounded-xl hover:shadow-lg duration-500 shadow-orange-200 relative w-full'>
                        <div className='flex items-center justify-center md:mt-8 mt-24 text-white bg-gradient-to-br from-sky-800 to-sky-950 rounded-full size-36 group-hover:rotate-[360deg] duration-1000 ease-in-out'>
                            <FaPersonCircleCheck className="text-7xl" />
                        </div>
                        <div className='w-full text-center text-base/[150%] px-[10%] font-manrope text-stone-700'>Equip students with the skills and mindset necessary to become compassionate and responsible global citizens & cultivate a culture of lifelong learning and curiosity.
                        </div>
                        <div className='absolute px-[15%] py-4 text-white bg-sky-900 rounded-lg -bottom-5 font-manrope group-hover:bg-white group-hover:text-sky-900 group-hover:font-bold duration-300 border-2 border-sky-900'>Our Objective</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainAbout