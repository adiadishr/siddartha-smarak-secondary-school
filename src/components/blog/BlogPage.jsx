import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import blog1 from "../../assets/blog/1.png";
import blog2 from "../../assets/blog/2.png";
import blog3 from "../../assets/blog/3.png";
import blog4 from "../../assets/blog/4.png";
import blog5 from "../../assets/blog/5.png";
import blog6 from "../../assets/book.jpg";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const { id } = useParams();
  const blogId = parseInt(id);

  const blogs = [
    {
      id: 1,
      title: "Nurturing Young Minds",
      date: "24/12/24",
      name: "Shristi Bhusal",
      class: "X",
      url: blog1,
      content: (
        <>
          <p>
            Nurturing minds involves more than just academic learning. It
            encompasses teaching kids how to think critically, solve problems
            creatively, and communicate effectively.When we talk about nurturing
            young minds, we're talking about more than just academic learning.
            Sure, learning math, science, and history is important, but
            education is about so much more than that.
          </p>
          <p>
            It's about teaching kids how to think critically, solve problems
            creatively, and communicate effectively. It's about instilling in
            them a love of learning that will stay with them for life.Education
            opens up doors to all sorts of cool opportunities in life. Whether
            it's becoming a scientist, an artist, or a doctor, education gives
            kids the skills they need to chase their dreams and make them real.
            Plus, it helps them understand the world around them better, which
            is pretty neat.
          </p>
          <p>
            We're living in a digital age, and that means technology is a big
            part of how kids learn nowadays. From cool educational apps to
            interactive online lessons, there's a whole world of learning
            waiting for our little ones at the touch of a screen.But education
            isn't just about learning facts and figures. Nope, it's about so
            much more. It's about giving kids the power to think for themselves,
            to ask questions, and to find answers. When kids are educated, they
            can make informed decisions about their own lives and the world they
            live in. Educating young brains plays a crucial role in personal
            development, societal progress, and the transmission of culture from
            one generation to the next.{" "}
          </p>
          <p>
            It empowers individuals to understand the world around them, make
            informed decisions, and contribute positively to their communities.
            Let's remember that every child is unique. Just like flowers in a
            garden, each one grows in their own way and at their own pace. So,
            it is important to celebrate their differences, support their
            strengths, and help them become the best versions of themselves. A
            little reminder to nurture those young minds and help them grow into
            the incredible individuals they're meant to be. Let's water those
            seeds of curiosity, shower them with love and support, and watch as
            our kids bloom into the awesome people they were always meant to be.
          </p>
        </>
      ),
    },
    {
      id: 4,
      title: "ब्रह्माण्डको कविता",
      date: "24/12/24",
      url: blog4,
      name: "Binal Khanal",
      class: "IX",
      content: (
        <>
          <p>
            यो ब्रह्माण्ड, यो अनन्त आकाश, तारा, ग्रह, र आकाशगंगा भरी। अनगिन्ती
            रहस्य, अनन्त गहिराई, ब्रह्माण्डको सुन्दरतामा म मोहित छु हराइ।
            ताराहरू झलमलाउँछन्, जस्तो हजारौं दियो, प्रकाशले भरेको रात्रीको आँगन।
            चन्द्रमा मुस्कुराउँछ, शान्त र शीतल, रातभरि हेरेर, सपना बुन्छ
            उज्यालो। ग्रहहरू परिक्रमा गर्छन्, आफ्नो गतिको लयमा, सबैको यात्रामा
            एउटा अनौठो कथा। कृष्णविवरको गहिराइ, मेट्न खोज्छ सब कुरा, त्यो अनन्त
            अँध्यारो, भयमुक्त, रहस्यमय छ।
          </p>
          <p>
            आकाशगंगाहरूको नृत्य, एक विचित्रको दृश्य, तिनको सुन्दरता, शब्दहरूमा
            बयान गर्न कठिन। यो ब्रह्माण्ड विशाल, कहिल्यै अन्त्य नहुने कथा, हामी
            सबै यसकै एक अंश, एक सानो झल्का। तिमी र म, सारा संसार, यो अनन्त
            ब्रह्माण्डको एउटा अंशमात्र। रहस्य खोज्न, उत्तर पाउन, यस अनन्त
            यात्रामा, हामी अघि बढौं। यो ब्रह्माण्ड, यो जीवनको गहिरो सम्बन्ध,
            अनन्तको काव्य, एक विशाल बन्धन। अलौकिक सुन्दरताको खोजमा, यो
            ब्रह्माण्ड, हाम्रो अनन्त यात्रा।
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "The Science of Failure",
      date: "24/12/24",
      name: "Sheetal Khanal",
      class: "VI",
      url: blog2,
      content: (
        <>
          <p>
            Making mistakes is a natural and integral part of the learning
            process.yet many of us fear them. We're often taught to avoid
            failure at all costs, seeing it as something to be ashamed of or a
            sign of incompetence. Think about the last time you encountered a
            challenge or tried something new.
          </p>{" "}
          <p>
            Perhaps you felt frustrated or discouraged when things didn't go
            according to plan. But here's the thing – every mistake we make is
            an opportunity to learn and grow. It's like stumbling upon a hidden
            treasure in the midst of adversity. Each mistake provides us with
            valuable feedback and insights that can guide us on our journey
            toward success. As adults, we come to understand that engaging in
            the process of learning is more important - and more satisfying -
            than focusing on doing things perfectly the first time.
          </p>{" "}
          <p>
            That process includes mistakes, errors, misconceptions, struggle,
            practice, and time. We know from our own experiences that when we
            embrace struggle and see it as an opportunity to grow
            intellectually, emotionally, socially and/or physically, learning
            can begin to feel almost magically satisfying.Indeed, some of the
            most remarkable accomplishments throughout history have arisen from
            individuals persisting despite encountering failure. Thomas Edison,
            for instance, made more than a thousand attempts before successfully
            inventing the light bulb. Similarly, J.K. Rowling faced rejection
            from multiple publishers before her Harry Potter series soared to
            become a worldwide sensation.
          </p>{" "}
          <p className="mb-8">
            These instances underscore the notion that setbacks are not only
            unavoidable but also crucial for personal development and creative
            advancement.Instead of being afraid of failure, we should welcome it
            as an inherent aspect of our path to success. Through understanding
            our mistakes, we acquire wisdom, build strength, and ultimately,
            reach our objectives. Therefore, setbacks should not demoralize us;
            rather, we should view them as opportunities for growth. With
            perseverance and an eagerness to learn, our potential knows no
            bounds.
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "Generative AI",
      date: "24/12/24",
      name: "Punam Khadka",
      class: "VII",
      url: blog3,
      content: (
        <>
          <p>
            The term 'emerging technology' typically describes either a novel
            technology or the ongoing advancement of an existing one. Its
            interpretation can vary depending on the context, such as its
            application in media, business, science, or education.Generative
            Artificial Intelligence (AI) stands at the forefront of
            technological innovation, representing a paradigm shift in how we
            approach creativity. By harnessing the power of machine learning
            algorithms, Generative AI has the remarkable ability to produce
            original content across various mediums, from visual art to music
            compositions. This technology has the potential to revolutionize
            industries, offering novel solutions to complex problems and driving
            unprecedented levels of innovation.
          </p>{" "}
          <p>
            In the realm of art and design, Generative AI opens up a world of
            possibilities, enabling artists and designers to explore new
            creative horizons. With the ability to generate diverse and
            imaginative outputs based on input data, artists can experiment with
            unique styles, forms, and concepts, pushing the boundaries of
            traditional artistic expression. Similarly, in fields such as
            architecture and product design, Generative AI offers invaluable
            tools for generating complex designs and prototypes, streamlining
            the creative process and accelerating innovation.
          </p>{" "}
          <p>
            However, as with any transformative technology, Generative AI also
            presents ethical and societal challenges that must be addressed.
            Concerns about data privacy, algorithmic bias, and the potential for
            misuse of AI-generated content underscore the need for thoughtful
            regulation and oversight. Additionally, questions arise about the
            impact of Generative AI on employment and the role of human
            creativity in an increasingly automated world.
          </p>{" "}
          <p className="mb-8">
            Looking ahead, the future of Generative AI holds both promise and
            uncertainty. While the technology has the potential to unlock new
            levels of creativity and innovation, it also raises important
            questions about its societal impact and ethical implications. As we
            continue to explore the possibilities of Generative AI, it is
            essential to approach its development with caution, ensuring that it
            is used responsibly and ethically to benefit society as a whole.
          </p>
        </>
      ),
    },
    {
      id: 5,
      title: "पानीको कविता",
      date: "24/12/24",
      url: blog5,
      name: "Chandan Khadka",
      class: "X",
      content:
        "पानी, जीवनको मूल स्रोत, स्वच्छ, शीतल, शुद्ध, अनमोल। बग्छ नदीमा, झर्छ झरनामा, आकाशबाट बर्सिन्छ, तृप्ति लिन्छ धर्तीको।  पानी, जीवनदायी रस, समुन्द्रमा फैलिएर, आकाशमा उडेर। तिमी बिना सृष्टि अधुरो, जीवनको हरेक कोशमा तिमीको छ स्पर्श।  झरनामा झर्छ, बनाउँछ सुन्दर संगीत, नदीमा बग्छ, बनाउँछ जीवनको पुल। समुन्द्रमा मिल्छ, विशाल र असीम, तिमीले दिन्छौ जीवन, तिमी नै हो परम।  फूलहरू तिमीले फुलाउँछौ, हरेक हरियाली तिमीले नाँचाउँछौ। वन्यजन्तु, पशुपक्षी, मान्छे सबैलाई, तिमीले दिएको हो जीवनको रस।  पानीको रूप अनेक, तर सार एउटै, बर्फको रुपमा शीतल, वाफको रुपमा तातो। तरल स्वरूपमा, तिमीले बनाउँछौ जीवन, तिमी बिना यो संसार, शून्य, निर्जीव, खल्लो।  संरक्षण गरौं तिमीलाई, यो हाम्रो कर्तव्य, शुद्ध राखौं तिमीलाई, यो हाम्रो जिम्मेवारी। तिमी हो जीवन, तिमी हो उन्नति, पानी, तिमी हाम्रो अस्तित्व, तिमी हाम्रो प्रगति।  तिमीलाई आदर, तिमीलाई सम्मान, यो जीवनको पथमा, तिमी हौ हाम्रो साथी। पानी, तिमी नै हो जीवनको अमृत, तिमी बिना यो संसार, अधुरो, अनुपम। ",
    },
    {
      id: 6,
      title: "मेरो विद्यालय",
      date: "24/12/24",
      name: "Amit Paudel",
      class: "X",
      url: blog6,
      content: (
        <>
          <p>
            Siddhartha Smarak HSS actively engages with the local community,
            forging partnerships with parents, alumni, and stakeholders to
            enhance the educational experience and contribute to the welfare of
            society. The school organizes outreach programs, environmental
            conservation efforts, and social awareness campaigns, encouraging
            students to become active agents of positive change in their
            communities.
          </p>
          <h6 className="italic font-bold">Academic Excellence</h6>
          <p>
            The school is committed to academic excellence, offering a
            comprehensive curriculum designed to nurture critical thinking,
            creativity, and lifelong learning skills among its students. With
            highly qualified and dedicated faculty members, Siddhartha Smarak
            HSS provides a supportive learning environment where students are
            encouraged to explore their interests, pursue their passions, and
            achieve their academic goals.
          </p>
          <h6 className="italic font-bold">Holistic Development</h6>
          <p>
            Beyond academics, Siddhartha Smarak HSS places great emphasis on
            holistic development, recognizing the importance of extracurricular
            activities, sports, and cultural events in shaping well-rounded
            individuals. The school offers a wide range of extracurricular
            programs, including sports competitions, cultural festivals, music
            and dance performances, art exhibitions, and community service
            initiatives, providing students with opportunities to discover their
            talents, build leadership skills, and foster a spirit of teamwork
            and collaboration.
          </p>
          <h6 className="italic font-bold">Cultural and Ethical Values</h6>
          <p>
            Embedded within the ethos of Siddhartha Smarak HSS are cultural and
            ethical values that promote integrity, respect, and social
            responsibility. Through moral education programs, value-based
            learning initiatives, and community engagement activities, the
            school instills in its students a strong sense of ethics,
            compassion, and civic-mindedness, preparing them to be responsible
            citizens and leaders of tomorrow.
          </p>
          <h6 className="italic font-bold">Community Engagement</h6>
          <p>
            Siddhartha Smarak HSS actively engages with the local community,
            forging partnerships with parents, alumni, and stakeholders to
            enhance the educational experience and contribute to the welfare of
            society. The school organizes outreach programs, environmental
            conservation efforts, and social awareness campaigns, encouraging
            students to become active agents of positive change in their
            communities.
          </p>
          <p className="mb-8">
            In conclusion, Siddhartha Smarak Higher Secondary School stands as a
            beacon of educational excellence, nurturing young minds, fostering
            character development, and empowering students to realize their full
            potential. With a commitment to academic rigor, holistic
            development, cultural values, and community service, the school
            continues to inspire and uplift generations of students, leaving an
            indelible mark on the educational landscape of Nepal.
          </p>
        </>
      ),
    },
  ];

  const blog = blogs.find((blog) => blog.id === blogId);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="h-max mt-[130px] px-[5%] pb-24">
      <div className="flex flex-col gap-8 pt-12">
        <div className="flex flex-wrap items-center justify-between w-full">
          <div className="flex flex-col gap-4">
            <h5 className="heading">{blog.title}</h5>
            <p className="mt-8 font-merriwether text-neutral-400 md:mt-0">
              ~ {blog.name}, Class {blog.class}
            </p>
          </div>
          <Link to="/Blog">
            <FaArrowLeft className="text-xl duration-300 cursor-pointer hover:scale-110" />
          </Link>
        </div>
        <div className="relative flex flex-col gap-8 md:flex-row">
          <div className="sticky flex w-full md:w-1/3 h-max shrink top-32">
            <img src={blog.url} alt={blog.title} />
          </div>
          <div className="flex flex-col w-full md:w-2/3 gap-4 tracking-wide font-manrope text-neutral-700 text-lg/[200%]">
            {blog.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
