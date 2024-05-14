import React from 'react'
import { ImQuotesLeft } from "react-icons/im";

const MainQuote = () => {
  return (
    <div className='flex w-full px-[7.5%] items-center justify-center md:min-h-screen min-h-[70vh]'>
      <div className='flex flex-col items-center justify-center w-full gap-12'>
        <div className='text-4xl text-orange-500'>
          <ImQuotesLeft />
        </div>
        <div className='text-4xl/[200%] font-semibold tracking-wide text-center text-sky-900 font-merriwether'>मनुष्यको सम्पूर्ण आत्मा बुझाउने, <br />  विद्या अहिलेसम्म निस्केको छैन</div>
      </div>
    </div>
  )
}

export default MainQuote