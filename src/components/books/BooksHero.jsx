import React from 'react'
import BooksFirstRow from './BooksFirstRow'
import BooksSecondRow from './BooksSecondRow'
import BooksThirdRow from './BooksThirdRow'
import BooksFourthRow from './BooksFourthRow'
import BooksFifthRow from './BooksFifthRow'

const BooksHero = () => {

    return (
        <div className='w-full px-[5%] pb-24 flex mt-[130px] pt-12' >
            <div className='flex flex-col w-full gap-12'>
                <h5 className='heading'>Click to download your desired resource:</h5>
                <BooksFirstRow />
                <BooksSecondRow />
                <BooksThirdRow />
                <BooksFourthRow />
                <BooksFifthRow />
                
                
                
               

            </div>
        </div>
    )
}

export default BooksHero