import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import photo1 from "../../assets/parentsDay.jpg";
import photo2 from "../../assets/prizeDistributions.jpg";
import photo3 from "../../assets/runningShieldCompetition.jpg";
import photo4 from "../../assets/sportsDay.jpg";
import photo5 from "../../assets/classroom.jpg";
import photo6 from "../../assets/facility.jpg";
import photo7 from "../../assets/kalas.jpg";
import photo8 from "../../assets/praman.jpg";
import photo9 from "../../assets/cup.jpg";
import photo10 from "../../assets/aboutHero.jpg";
import photo11 from "../../assets/medal.jpg";
import photo12 from "../../assets/police.jpg";
import photo13 from "../../assets/people.jpg";

const routeTo = () => {
  window.scrollTo({ top: 0 });
};

const CallToAction = () => {
  return (
    <div className="flex justify-center w-full">
      <Link
        onClick={routeTo}
        to="/Contact"
        className="md:w-1/2 w-11/12 text-center rounded-2xl bg-gradient-to-r from-orange-400/90 to-orange-700/90 text-white px-[5%] py-8 backdrop-blur-3xl flex items-center justify-center duration-300 hover:translate-y-[-.5rem] cursor-pointer"
      >
        <p className="text-lg font-semibold tracking-wide uppercase font-merriwether md:text-xl">
          Join us at Siddartha Smarak
        </p>
      </Link>
    </div>
  );
};

const AcademicsHero = () => {
  return (
    <div className="flex flex-col w-full min-h-screen pb-24 pt-12 mt-[130px] px-[5%]">
      <h5 className="mb-8 heading">Academics</h5>
      <Tabs
        defaultValue="primary"
        className="relative flex flex-col w-full md:flex-row"
      >
        <TabsList className="flex flex-wrap items-start w-min p-0 text-left md:w-[20%] sticky md:flex-col h-max top-24 bg-transparent font-merriwether text-black z-20">
          <TabsTrigger
            onClick={() => window.scrollTo({ top: 0 })}
            className="data-[state=active]:hover:bg-sky-800/90 justify-start w-full text-start hover:bg-sky-800/90 hover:text-white data-[state=active]:text-white data-[state=active]:bg-sky-800 px-4 py-4 bg-white"
            value="primary"
          >
            Primary Program
          </TabsTrigger>
          <TabsTrigger
            onClick={() => window.scrollTo({ top: 0 })}
            className="data-[state=active]:hover:bg-sky-800/90 justify-start w-full text-start hover:bg-sky-800/90 hover:text-white data-[state=active]:text-white data-[state=active]:bg-sky-800 px-4 py-4 bg-white"
            value="secondary"
          >
            Secondary Program
          </TabsTrigger>
          <TabsTrigger
            onClick={() => window.scrollTo({ top: 0 })}
            className="justify-start w-full text-start data-[state=active]:hover:bg-sky-800/90 hover:bg-sky-800/90 hover:text-white data-[state=active]:text-white data-[state=active]:bg-sky-800 px-4 py-4 bg-white"
            value="higher-secondary"
          >
            Higher Secondary
          </TabsTrigger>
        </TabsList>
        <div className="relative w-full pt-12 md:pl-24 md:pt-0 text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope">
          <TabsContent className="flex flex-col gap-4 mt-0" value="primary">
            <p>
              Primary level education is the bedrock upon which a child's
              academic journey is built. These foundational years are critical
              in shaping not only a child's academic abilities but also their
              character, values, and outlook towards life.
            </p>
            <p>
              These early years are crucial for instilling a love for learning
              and developing a growth mindset that will serve children
              throughout their lives. Schools are instrumental in delivering
              quality primary education and creating a conducive learning
              environment for young learners. They provide a structured
              curriculum that covers core subjects such as language arts,
              mathematics, science, and social studies, tailored to meet the
              developmental needs of children at this stage.
            </p>
            <p>
              Additionally, schools play a vital role in nurturing the holistic
              development of students by offering opportunities for creative
              expression, physical activity, and character building. Schools
              also serve as a hub for social interaction, where children learn
              valuable skills such as teamwork, communication, and
              problem-solving through collaboration with peers and teachers.
            </p>
            <p className="mb-8">
              By investing in primary education and fostering strong
              partnerships between schools, parents, and communities, we can
              ensure that every child receives the support and guidance they
              need to thrive academically and beyond.
            </p>
            <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-2 xl:columns-3 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 mb-16">
              <img src={photo2} alt="" />
              <img src={photo3} alt="" />
              <img src={photo10} alt="" />
              <img src={photo1} alt="" />
              <img src={photo5} alt="" />
            </div>
            <CallToAction />
          </TabsContent>
          <TabsContent className="flex flex-col gap-4 mt-0" value="secondary">
            <p>
              Secondary level education marks a pivotal stage in a student's
              academic journey, where foundational knowledge from primary
              education is further developed and expanded. In this blog, we'll
              delve into the importance of secondary level education, the role
              schools play in providing it, and how this stage prepares students
              for higher education and beyond.
            </p>
            <p>
              Secondary education builds upon the foundation laid in primary
              school, offering students a more comprehensive and specialized
              curriculum. They offer a diverse range of academic programs,
              extracurricular activities, and support services to meet the
              diverse needs and interests of students. Moreover, schools play a
              crucial role in guiding students through the college and career
              exploration process, offering counseling, resources, and
              opportunities for hands-on experience.
            </p>
            <p className="mb-8">
              Secondary level education is a transformative period in a
              student's life, where they build upon the foundation of primary
              education and prepare for future academic and professional
              endeavors. Schools play a crucial role in providing quality
              secondary education, fostering intellectual growth, and nurturing
              the holistic development of students. By investing in secondary
              education and empowering schools to offer diverse and enriching
              learning experiences, we can ensure that every student has the
              opportunity to reach their full potential and succeed in the
              rapidly evolving global landscape.
            </p>
            <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-2 xl:columns-3 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 mb-16">
              <img src={photo4} alt="" />
              <img src={photo6} alt="" />
              <img src={photo7} alt="" />
              <img src={photo8} alt="" />
              <img src={photo9} alt="" />
            </div>
            <CallToAction />
          </TabsContent>
          <TabsContent
            className="flex flex-col gap-4 mt-0"
            value="higher-secondary"
          >
            <p>
              Higher education stands as the pinnacle of academic achievement,
              offering students the opportunity to delve deep into their chosen
              fields of study and prepare for impactful careers and
              contributions to society.
            </p>
            <p>
              Higher education serves as a gateway to advanced knowledge,
              critical thinking, and specialized skills that are essential for
              success in today's complex and interconnected world. It offers
              students the opportunity to pursue their passions and interests
              in-depth, whether in the sciences, humanities, arts, or
              professional fields.
            </p>
            <p>
              Beyond academic rigor, higher education fosters personal growth,
              independence, and a lifelong love for learning, preparing
              individuals to adapt to ever-changing societal and technological
              landscapes. Colleges play a central role in providing higher
              education, offering a diverse array of academic programs, research
              opportunities, and experiential learning opportunities. They
              provide students with access to world-class faculty,
              state-of-the-art facilities, and a vibrant campus community that
              nurtures intellectual curiosity and creativity.
            </p>
            <p className="mb-8">
              Here at Siddartha Smarak, we serve as a hub of innovation and
              research, driving advancements in various fields and addressing
              challenges through interdisciplinary collaboration.
            </p>

            <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-2 xl:columns-3 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 mb-16">
              <img src={photo11} alt="" />
              <img src={photo12} alt="" />
              <img src={photo1} alt="" />
              <img src={photo2} alt="" />
              <img src={photo13} alt="" />
            </div>
            <CallToAction />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default AcademicsHero;
