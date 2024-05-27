import React from "react";
import book from "../../assets/book.jpg";
import { Link } from "react-router-dom";
import routeTo from "../utilities/RouteTo";

const MainHero = () => {
  return (
    <div className="w-full flex px-[7.5%] pb-32">
      <div className="flex flex-col w-full gap-16 md:flex-row">
        <div className="flex w-full overflow-hidden">
          <img
            src={book}
            className="rounded-3xl brightness-75 blur-[.5px]"
            alt=""
          />
        </div>
        <div className="flex flex-col w-full text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope">
          <div className="w-full pb-2 text-2xl font-bold text-center uppercase border-b-2 md:text-start md:w-auto text-sky-900 border-stone-200 font-merriwether">
            Siddartha Smarak Secondary School
          </div>
          <div className="pt-4 ">
            सिद्धार्थ स्मारक माध्यमिक विद्यालय,जहाँ उत्कृष्टता र संघर्षको बीचमा,
            हाम्रो संस्था शैक्षिक उत्कृष्टता र सम्पूर्ण विकासको प्रकाशको रूपमा
            उभिन्छ।
          </div>
          <div className="pt-4">
            600 भन्दा बढी छात्र-छात्राहरूको उत्साही समुदायले भरिपूर्ण संसाधनहरू
            र सुविधाहरू प्रदान गर्दछ, सिद्धार्थ स्मारक माध्यमिक विद्यालयमा
            शिक्षा पाइन्छ।
          </div>
          <div className="pt-4">
            एक अद्यापित शिक्षक तथा परिपालक वातावरणसँगै, हामी प्रत्येक छात्रलाई
            उनीहरूको पूर्ण संभावनामा पुग्न प्रायस गर्दछौं।
          </div>
          <div className="pt-4">
            सिद्धार्थ स्मारक माध्यमिक विद्यालयमा हाम्रो साथी बन्नुहोस् र शैक्षिक
            उत्कृष्टता र व्यक्तिगत विकासको यात्रामा सामिल हुनुहोस्।"
          </div>
          <Link
            onClick={routeTo}
            to="/About"
            className="flex px-4 py-1 mt-8 text-white duration-75 bg-orange-500 hover:bg-orange-400 rounded-xl font-merriwether w-max active:scale-90"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
