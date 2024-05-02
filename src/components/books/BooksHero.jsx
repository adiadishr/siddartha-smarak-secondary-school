import React from 'react'
import BooksFirstRow from './BooksFirstRow'
import BooksSecondRow from './BooksSecondRow'
import BooksThirdRow from './BooksThirdRow'
import BooksFourthRow from './BooksFourthRow'

const BooksHero = () => {

    return (
        <div className='w-full px-[5%] pb-24 flex mt-[114px] pt-12' >
            <div className='flex flex-col w-full gap-12'>
                <div className='w-full pb-2 text-2xl font-bold uppercase border-b-2 md:w-max text-sky-900 border-stone-200 font-merriwether'>Click to download your desired resource:</div>
                <BooksFirstRow />
                <BooksSecondRow />
                <BooksThirdRow />
                <BooksFourthRow />
                <BooksFirstRow />
                
                
                
               

            </div>
        </div>
    )
}

export default BooksHero