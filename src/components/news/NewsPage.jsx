import React from "react";
import photo1 from "../../assets/parentsDay.jpg";
import photo5 from "../../assets/classroom.jpg";
import photo8 from "../../assets/praman.jpg";
import photo11 from "../../assets/medal.jpg";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import cards from "../../constants/NewsCards";

const NewsPage = () => {
  const { id } = useParams();
  const newsId = parseInt(id);

  const news = cards.find((news) => news.id === newsId);

  if (!news) {
    return <div>News not found</div>;
  }

  return (
    <div className="h-max mt-[130px] px-[5%] pb-24">
      <div className="flex flex-col gap-8 pt-12">
        <div className="flex flex-wrap items-center justify-between w-full">
          <div className="flex flex-col gap-4">
            <h5 className="heading">{news.title}</h5>
          </div>
          <Link to="/news">
            <FaArrowLeft className="text-xl duration-300 cursor-pointer hover:scale-110" />
          </Link>
        </div>
        <div className="relative flex flex-col gap-8 md:flex-row">
          <div className="sticky flex w-full md:w-1/3 h-max shrink top-32">
            <img src={news.url} alt={news.title} />
          </div>
          <div className="flex flex-col w-full md:w-2/3 gap-4 tracking-wide font-manrope text-neutral-700 text-lg/[200%]">
            {news.subtitle}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
