import React from 'react'

const BlogHero = () => {
    return (
        <div className='w-full mt-[130px] pt-12 pb-24 px-[5%]'>
            <h5 className='mb-8 heading'>Blogs</h5>
            <div className='w-full'>
                <h5 className='w-full text-2xl text-center text-neutral-700 font-manrope'>Featured Blogs</h5>
                <h5 className='w-full text-2xl text-center text-neutral-500 font-manrope'>Explore the finest blogs Siddartha Smarak has to offer:</h5>
                <section className='grid justify-center w-full grid-cols-1 pt-16 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12'>
                    <card className='flex flex-col items-center bg-white border-b-4 border-r-4 h-max border-sky-800 rounded-xl'>
                        <img src="https://source.unsplash.com/random?blog" className='flex object-cover object-center w-full h-64' alt="" />
                        <div className='flex flex-col w-full py-4 px-[5%] divide-y-2 '>
                            <div className='flex justify-between w-full pb-2'>
                                <h5 className='text-lg font-medium font-merriwether' >Yo what's up</h5>
                                      <h5 className='text-lg text-neutral-500 font-manrope'>24/25/16</h5>
                      </div>
                            <p className='pt-4 mb-4 text-base tracking-wider text-justify font-manrope text-neutral-700 line-clamp-4' >Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                            <div className='flex items-center justify-between w-full pt-4 pb-2'>
                                <button className='px-4 py-2 text-white duration-300 rounded-xl hover:opacity-80 bg-sky-800/80'>Read More</button>
                                <p className='text-sm font-merriwether text-neutral-500'>Author's Name ~ <span className='italic'>Class X</span></p>
                            </div>
                        </div>
                    </card>
                    <card className='flex flex-col items-center bg-white border-b-4 border-r-4 h-max border-sky-800 rounded-xl'>
                        <img src="https://source.unsplash.com/random?blog" className='flex object-cover object-center w-full h-64' alt="" />
                        <div className='flex flex-col w-full py-4 px-[5%] divide-y-2 '>
                            <div className='flex justify-between w-full pb-2'>
                                <h5 className='text-lg font-medium font-merriwether' >Yo what's up</h5>
                                <h5 className='text-lg text-neutral-500 font-manrope'>24/25/16</h5>
                            </div>
                            <p className='pt-4 mb-4 text-base tracking-wider text-justify font-manrope text-neutral-700 line-clamp-4' >Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                            <div className='flex items-center justify-between w-full pt-4 pb-2'>
                                <button className='px-4 py-2 text-white duration-300 rounded-xl hover:opacity-80 bg-sky-800/80'>Read More</button>
                                <p className='text-sm font-merriwether text-neutral-500'>Author's Name ~ <span className='italic'>Class X</span></p>
                            </div>
                        </div>
                    </card>
                    <card className='flex flex-col items-center bg-white border-b-4 border-r-4 h-max border-sky-800 rounded-xl'>
                        <img src="https://source.unsplash.com/random?blog" className='flex object-cover object-center w-full h-64' alt="" />
                        <div className='flex flex-col w-full py-4 px-[5%] divide-y-2 '>
                            <div className='flex justify-between w-full pb-2'>
                                <h5 className='text-lg font-medium font-merriwether' >Yo what's up</h5>
                                <h5 className='text-lg text-neutral-500 font-manrope'>24/25/16</h5>
                            </div>
                            <p className='pt-4 mb-4 text-base tracking-wider text-justify font-manrope text-neutral-700 line-clamp-4' >Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                            <div className='flex items-center justify-between w-full pt-4 pb-2'>
                                <button className='px-4 py-2 text-white duration-300 rounded-xl hover:opacity-80 bg-sky-800/80'>Read More</button>
                                <p className='text-sm font-merriwether text-neutral-500'>Author's Name ~ <span className='italic'>Class X</span></p>
                            </div>
                        </div>
                    </card>
                    <card className='flex flex-col items-center bg-white border-b-4 border-r-4 h-max border-sky-800 rounded-xl'>
                        <img src="https://source.unsplash.com/random?blog" className='flex object-cover object-center w-full h-64' alt="" />
                        <div className='flex flex-col w-full py-4 px-[5%] divide-y-2 '>
                            <div className='flex justify-between w-full pb-2'>
                                <h5 className='text-lg font-medium font-merriwether' >Yo what's up</h5>
                                <h5 className='text-lg text-neutral-500 font-manrope'>24/25/16</h5>
                            </div>
                            <p className='pt-4 mb-4 text-base tracking-wider text-justify font-manrope text-neutral-700 line-clamp-4' >Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                            <div className='flex items-center justify-between w-full pt-4 pb-2'>
                                <button className='px-4 py-2 text-white duration-300 rounded-xl hover:opacity-80 bg-sky-800/80'>Read More</button>
                                <p className='text-sm font-merriwether text-neutral-500'>Author's Name ~ <span className='italic'>Class X</span></p>
                            </div>
                        </div>
                    </card>
                    <card className='flex flex-col items-center bg-white border-b-4 border-r-4 h-max border-sky-800 rounded-xl'>
                        <img src="https://source.unsplash.com/random?blog" className='flex object-cover object-center w-full h-64' alt="" />
                        <div className='flex flex-col w-full py-4 px-[5%] divide-y-2 '>
                            <div className='flex justify-between w-full pb-2'>
                                <h5 className='text-lg font-medium font-merriwether' >Yo what's up</h5>
                                <h5 className='text-lg text-neutral-500 font-manrope'>24/25/16</h5>
                            </div>
                            <p className='pt-4 mb-4 text-base tracking-wider text-justify font-manrope text-neutral-700 line-clamp-4' >Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                            <div className='flex items-center justify-between w-full pt-4 pb-2'>
                                <button className='px-4 py-2 text-white duration-300 rounded-xl hover:opacity-80 bg-sky-800/80'>Read More</button>
                                <p className='text-sm font-merriwether text-neutral-500'>Author's Name ~ <span className='italic'>Class X</span></p>
                            </div>
                        </div>
                    </card>
                    <card className='flex flex-col items-center bg-white border-b-4 border-r-4 h-max border-sky-800 rounded-xl'>
                        <img src="https://source.unsplash.com/random?blog" className='flex object-cover object-center w-full h-64' alt="" />
                        <div className='flex flex-col w-full py-4 px-[5%] divide-y-2 '>
                            <div className='flex justify-between w-full pb-2'>
                                <h5 className='text-lg font-medium font-merriwether' >Yo what's up</h5>
                                <h5 className='text-lg text-neutral-500 font-manrope'>24/25/16</h5>
                            </div>
                            <p className='pt-4 mb-4 text-base tracking-wider text-justify font-manrope text-neutral-700 line-clamp-4' >Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>
                            <div className='flex items-center justify-between w-full pt-4 pb-2'>
                                <button className='px-4 py-2 text-white duration-300 rounded-xl hover:opacity-80 bg-sky-800/80'>Read More</button>
                                <p className='text-sm font-merriwether text-neutral-500'>Author's Name ~ <span className='italic'>Class X</span></p>
                            </div>
                        </div>
                    </card>
                </section>
            </div>
        </div>
    )
}

export default BlogHero