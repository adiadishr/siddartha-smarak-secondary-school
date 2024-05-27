import React from "react";
import { Link } from "react-router-dom";

const toTop = () => {
  window.scrollTo({ top: 0 });
};

const BlogHero = () => {
  return (
    <div className="w-full mt-[130px] pt-12 pb-24 px-[5%]">
      <h5 className="mb-8 heading">Blogs</h5>
      <div className="w-full">
        <h5 className="w-full text-2xl text-center text-neutral-700 font-manrope">
          Featured Blogs
        </h5>
        <h5 className="w-full text-2xl text-center text-neutral-500 font-manrope">
          Explore the finest blogs Siddartha Smarak has to offer:
        </h5>
        <section className="grid justify-center w-full grid-cols-1 pt-16 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {blogs.map((blog) => (
            <card
              key={blog.id}
              className="flex flex-col items-center overflow-hidden bg-white border-b-4 border-r-4 h-max border-sky-800 rounded-xl hover:translate-y-[-.5rem] shadow-xl duration-300 outline-4 duration-750 outline-sky-700 hover:outline-dashed "
            >
              <img
                src="https://source.unsplash.com/random?blog"
                className="flex object-cover object-center w-full h-64"
                alt=""
              />
              <div className="flex flex-col w-full py-4 px-[5%] divide-y-2">
                <div className="flex justify-between w-full pb-2">
                  <h5 className="text-lg font-medium font-merriwether">
                    {blog.title}
                  </h5>
                  <h5 className="text-lg text-neutral-500 font-manrope">
                    {blog.date}
                  </h5>
                </div>
                <p className="pt-4 mb-4 text-base tracking-wider text-justify font-manrope text-neutral-700 line-clamp-4">
                  {blog.content}
                </p>
                <div className="flex items-center justify-between w-full pt-4 pb-2">
                  <Link
                    to="/BlogPage"
                    onClick={toTop}
                    className="px-4 py-2 text-white duration-300 rounded-xl hover:opacity-80 bg-sky-800/80"
                  >
                    Read More
                  </Link>
                  <p className="text-sm font-merriwether text-neutral-500">
                    Author's Name ~ <span className="italic">Class X</span>
                  </p>
                </div>
              </div>
            </card>
          ))}
        </section>
      </div>
    </div>
  );
};

export default BlogHero;

const blogs = [
  {
    id: 1,
    title: "Nurturing Young Minds",
    date: "24/12/24",
    content:
      "Nurturing minds involves more than just academic learning. It encompasses teaching kids how to think critically, solve problems creatively, and communicate effectively.When we talk about nurturing young minds, we're talking about more than just academic learning. Sure, learning math, science, and history is important, but education is about so much more than that. It's about teaching kids how to think critically, solve problems creatively, and communicate effectively. It's about instilling in them a love of learning that will stay with them for life.Education opens up doors to all sorts of cool opportunities in life. Whether it's becoming a scientist, an artist, or a doctor, education gives kids the skills they need to chase their dreams and make them real. Plus, it helps them understand the world around them better, which is pretty neat. We're living in a digital age, and that means technology is a big part of how kids learn nowadays. From cool educational apps to interactive online lessons, there's a whole world of learning waiting for our little ones at the touch of a screen.But education isn't just about learning facts and figures. Nope, it's about so much more. It's about giving kids the power to think for themselves, to ask questions, and to find answers. When kids are educated, they can make informed decisions about their own lives and the world they live in. Educating young brains plays a crucial role in personal development, societal progress, and the transmission of culture from one generation to the next. It empowers individuals to understand the world around them, make informed decisions, and contribute positively to their communities. Let's remember that every child is unique. Just like flowers in a garden, each one grows in their own way and at their own pace. So, it is important to celebrate their differences, support their strengths, and help them become the best versions of themselves. A little reminder to nurture those young minds and help them grow into the incredible individuals they're meant to be. Let's water those seeds of curiosity, shower them with love and support, and watch as our kids bloom into the awesome people they were always meant to be.",
  },
  {
    id: 2,
    title: "The Science of Failure",
    date: "24/12/24",
    content:
      "Making mistakes is a natural and integral part of the learning process.yet many of us fear them. We're often taught to avoid failure at all costs, seeing it as something to be ashamed of or a sign of incompetence. Think about the last time you encountered a challenge or tried something new. Perhaps you felt frustrated or discouraged when things didn't go according to plan. But here's the thing – every mistake we make is an opportunity to learn and grow. It's like stumbling upon a hidden treasure in the midst of adversity. Each mistake provides us with valuable feedback and insights that can guide us on our journey toward success. As adults, we come to understand that engaging in the process of learning is more important - and more satisfying - than focusing on doing things perfectly the first time. That process includes mistakes, errors, misconceptions, struggle, practice, and time. We know from our own experiences that when we embrace struggle and see it as an opportunity to grow intellectually, emotionally, socially and/or physically, learning can begin to feel almost magically satisfying.Indeed, some of the most remarkable accomplishments throughout history have arisen from individuals persisting despite encountering failure. Thomas Edison, for instance, made more than a thousand attempts before successfully inventing the light bulb. Similarly, J.K. Rowling faced rejection from multiple publishers before her Harry Potter series soared to become a worldwide sensation. These instances underscore the notion that setbacks are not only unavoidable but also crucial for personal development and creative advancement.Instead of being afraid of failure, we should welcome it as an inherent aspect of our path to success. Through understanding our mistakes, we acquire wisdom, build strength, and ultimately, reach our objectives. Therefore, setbacks should not demoralize us; rather, we should view them as opportunities for growth. With perseverance and an eagerness to learn, our potential knows no bounds.",
  },
  {
    id: 3,
    title: "Generative AI",
    date: "24/12/24",
    content:
      "The term 'emerging technology' typically describes either a novel technology or the ongoing advancement of an existing one. Its interpretation can vary depending on the context, such as its application in media, business, science, or education.Generative Artificial Intelligence (AI) stands at the forefront of technological innovation, representing a paradigm shift in how we approach creativity. By harnessing the power of machine learning algorithms, Generative AI has the remarkable ability to produce original content across various mediums, from visual art to music compositions. This technology has the potential to revolutionize industries, offering novel solutions to complex problems and driving unprecedented levels of innovation. In the realm of art and design, Generative AI opens up a world of possibilities, enabling artists and designers to explore new creative horizons. With the ability to generate diverse and imaginative outputs based on input data, artists can experiment with unique styles, forms, and concepts, pushing the boundaries of traditional artistic expression. Similarly, in fields such as architecture and product design, Generative AI offers invaluable tools for generating complex designs and prototypes, streamlining the creative process and accelerating innovation. However, as with any transformative technology, Generative AI also presents ethical and societal challenges that must be addressed. Concerns about data privacy, algorithmic bias, and the potential for misuse of AI-generated content underscore the need for thoughtful regulation and oversight. Additionally, questions arise about the impact of Generative AI on employment and the role of human creativity in an increasingly automated world. Looking ahead, the future of Generative AI holds both promise and uncertainty. While the technology has the potential to unlock new levels of creativity and innovation, it also raises important questions about its societal impact and ethical implications. As we continue to explore the possibilities of Generative AI, it is essential to approach its development with caution, ensuring that it is used responsibly and ethically to benefit society as a whole.",
  },
];
