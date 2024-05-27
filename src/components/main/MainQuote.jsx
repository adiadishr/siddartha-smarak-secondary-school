import React from "react";
import { ImQuotesLeft } from "react-icons/im";

const MainQuote = () => {
  return (
    <div className="flex w-full px-[7.5%] items-center justify-center md:min-h-screen min-h-[70vh]">
      <div className="flex flex-col items-center justify-center w-full gap-12">
        <div className="text-4xl text-orange-500">
          <ImQuotesLeft />
        </div>
        <div className="text-4xl/[200%] font-semibold tracking-wide text-center text-sky-900 font-merriwether">
          के हो ठूलो जगतमा । पसीना विवक उदेश्य के लिनु ।
          <br /> उडी छुनु चन्द्र एक
        </div>
      </div>
    </div>
  );
};

export default MainQuote;
