import React from 'react'
import { ImQuotesLeft } from "react-icons/im";

const MainQuote = () => {
  return (
    <div className='flex w-full px-[7.5%] items-center justify-center md:min-h-screen min-h-[70vh]'>
      <div className='flex flex-col items-center justify-center w-full gap-12'>
        <div className='text-4xl text-orange-500'>
          <ImQuotesLeft />
        </div>
        <div className='text-4xl font-semibold tracking-wide text-center text-sky-900 font-merriwether'>Connecting Minds, Shaping Futures</div>
      </div>
    </div>
  )
}

export default MainQuote