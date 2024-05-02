import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

const MainNews = () => {
    return (
        <div className="pt-12 pb-24">
            <div className='flex flex-col w-full text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope px-[5%]'>
                <div className='flex flex-wrap pb-2 text-2xl font-bold uppercase border-b-2 text-sky-900 border-stone-200 w-max font-merriwether'>Latest News</div>
                <HorizontalScrollCarousel />

            </div>
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] ">
            <div className="sticky top-0 flex items-center h-screen overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="flex duration-1000 group relative h-[450px] w-[450px] overflow-hidden bg-white shadow-lg border-r-2 border-b-2 border-sky-900 rounded-lg"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-500 brightness-50 saturate-0 group-hover:scale-110 group-hover:saturate-100"
            ></div>
            <a href="#" className="absolute z-10 flex flex-col w-full h-full group-hover:bg-gradient-to-br from-white/20 to-white/0 group-hover:backdrop-blur-sm">
                <div className="flex justify-between w-full pr-8">
                    <p className="flex p-8 text-2xl font-black text-white uppercase font-merriwether">
                        {card.title}
                    </p>
                    <div className="flex items-center justify-center text-xl text-white duration-300 group-hover:rotate-[-45deg]">
                        <FaArrowRight />
                    </div>
                </div>
                <p className=" line-clamp-5 px-8 text-lg/[250%] tracking-tight text-white md:opacity-0 group-hover:opacity-100 duration-300 font-manrope ">
                    {card.subtitle}
                </p>
                <div className="flex w-full px-8 duration-300 md:opacity-0 group-hover:opacity-100 font-manrope"><button className="px-4 py-1 mt-12 text-white duration-300 bg-orange-500 border-2 border-transparent rounded-xl hover:bg-orange-400 ">Read More</button></div>
            </a>
        </div>
    );
};

export default MainNews;

const cards = [
    {
        url: "https://source.unsplash.com/random/?school",
        title: "Sports Day",
        subtitle: "Our school is equipped with state-of-the-art facilities designed to nurture the diverse talents and interests of our student body. From well-equipped science laboratories and computer rooms to extensive sports grounds and recreational spaces, we provide a stimulating environment that encourages exploration and innovation. Our library, stocked with a vast array of books, journals, and digital resources, serves as a hub for intellectual inquiry and research, fostering a culture of lifelong learning.",
        id: 1,
    },
    {
        url: "https://source.unsplash.com/random/?library",
        title: "Annual Day",
        subtitle: "Our school is equipped with state-of-the-art facilities designed to nurture the diverse talents and interests of our student body. From well-equipped science laboratories and computer rooms to extensive sports grounds and recreational spaces, we provide a stimulating environment that encourages exploration and innovation. Our library, stocked with a vast array of books, journals, and digital resources, serves as a hub for intellectual inquiry and research, fostering a culture of lifelong learning.",
        id: 2,
    },
    {
        url: "https://source.unsplash.com/random/?maths",
        title: "Results Out",
        subtitle: "Our school is equipped with state-of-the-art facilities designed to nurture the diverse talents and interests of our student body. From well-equipped science laboratories and computer rooms to extensive sports grounds and recreational spaces, we provide a stimulating environment that encourages exploration and innovation. Our library, stocked with a vast array of books, journals, and digital resources, serves as a hub for intellectual inquiry and research, fostering a culture of lifelong learning.",
        id: 3,
    },
    {
        url: "https://source.unsplash.com/random/?education",
        title: "Voted Best School",
        subtitle: "Our school is equipped with state-of-the-art facilities designed to nurture the diverse talents and interests of our student body. From well-equipped science laboratories and computer rooms to extensive sports grounds and recreational spaces, we provide a stimulating environment that encourages exploration and innovation. Our library, stocked with a vast array of books, journals, and digital resources, serves as a hub for intellectual inquiry and research, fostering a culture of lifelong learning.",
        id: 4,
    },
    {
        url: "https://source.unsplash.com/random/?teacher",
        title: "Teacher's Day",
        subtitle: "Our school is equipped with state-of-the-art facilities designed to nurture the diverse talents and interests of our student body. From well-equipped science laboratories and computer rooms to extensive sports grounds and recreational spaces, we provide a stimulating environment that encourages exploration and innovation. Our library, stocked with a vast array of books, journals, and digital resources, serves as a hub for intellectual inquiry and research, fostering a culture of lifelong learning.",
        id: 5,
    },
    {
        url: "https://source.unsplash.com/random/?laughter",
        title: "Children's Day",
        subtitle: "Our school is equipped with state-of-the-art facilities designed to nurture the diverse talents and interests of our student body. From well-equipped science laboratories and computer rooms to extensive sports grounds and recreational spaces, we provide a stimulating environment that encourages exploration and innovation. Our library, stocked with a vast array of books, journals, and digital resources, serves as a hub for intellectual inquiry and research, fostering a culture of lifelong learning.",
        id: 6,
    },
    {
        url: "https://source.unsplash.com/random/?students",
        title: "Student Poem",
        subtitle: "Our school is equipped with state-of-the-art facilities designed to nurture the diverse talents and interests of our student body. From well-equipped science laboratories and computer rooms to extensive sports grounds and recreational spaces, we provide a stimulating environment that encourages exploration and innovation. Our library, stocked with a vast array of books, journals, and digital resources, serves as a hub for intellectual inquiry and research, fostering a culture of lifelong learning.",
        id: 7,
    },
];