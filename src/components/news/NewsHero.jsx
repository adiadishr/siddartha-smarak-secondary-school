import NewsMain from "./NewsMain";

const NewsHero = () => {
  return (
    <div className="mt-[130px] px-[5%] pt-12 pb-8">
      <h5 className="heading">Notices</h5>
      <ul className="flex flex-col gap-2 pt-8 font-medium list-disc list-inside">
        {notices.map((notice) => (
          <li
            className="w-auto underline cursor-pointer md:w-max text-sky-700 hover:text-sky-900 font-manrope"
            title={notice.title}
          >
            <a target="_blank" href={notice.url}>
              {notice.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsHero;

const notices = [
  {
    title: "Timetable of Grade 11 Gadget Enhancement Exam",
    url: "https://www.facebook.com/photo/?fbid=898967038698124&set=a.303903848204449",
  },
  {
    title: "Class 11 Results Published",
    url: "https://www.facebook.com/photo?fbid=898310812097080&set=a.303903848204449",
  },
  {
    title: "Class 11 Annual Examination Timetable",
    url: "https://www.facebook.com/photo?fbid=884022610192567&set=a.303903848204449",
  },
  {
    title: "Anniversary, Parents Day, Results Publication and Prize Distribution Program Conducted",
    url: "https://www.facebook.com/siddharthasmarakofficial/posts/pfbid02ojdWRgJU14MGcUcwgh2EtuSfwqYY883aH7DKMJVPDMht3h9MaTeYH7HVDci55Yokl"
  },
  {
    title: "मिति २०८१।०१।११ गते सार्वजनिक विदा",
    url: "https://www.facebook.com/photo?fbid=877445110850317&set=a.303903851537782"
  },
  {
    title: "शैक्षिकसत्र २०८० सालको नतिजा प्रकाशन",
    url: "https://www.facebook.com/siddharthasmarakofficial/posts/pfbid0QkqA9YR5cH75jbQJ1dRbQbX39gtJxcFwPg2vZd2adMKdWzetb1wQWeWewD3WYnbYl"
  },
];
