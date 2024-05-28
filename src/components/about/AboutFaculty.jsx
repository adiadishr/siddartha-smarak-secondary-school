import React, { useEffect, useState, useRef } from "react";
import UseScrollTo from "../utilities/UseScrollTo";

import staff1 from "../../assets/staff/aasha-pandey.jpg";
import staff2 from "../../assets/staff/anil-chaudhary.jpg";
import staff3 from "../../assets/staff/bashu-dev-khanal.jpg";
import staff4 from "../../assets/staff/bhojram.jpg";
import staff5 from "../../assets/staff/binaya-tharu.jpg";
import staff6 from "../../assets/staff/bishnu.jpg";
import staff7 from "../../assets/staff/buddhiram.jpg";
import staff8 from "../../assets/staff/choplal.jpg";
import staff9 from "../../assets/staff/devraj.jpg";
import staff10 from "../../assets/staff/dilaram.jpg";
import staff11 from "../../assets/staff/dinesh.jpg";
import staff12 from "../../assets/staff/dipak.jpg";
import staff13 from "../../assets/staff/divya.jpg";
import staff14 from "../../assets/staff/gaura.jpg";
import staff15 from "../../assets/staff/giri.jpg";
import staff16 from "../../assets/staff/jiblal.jpg";
import staff17 from "../../assets/staff/kalpana.jpg";
import staff18 from "../../assets/staff/kamala.jpg";
import staff19 from "../../assets/staff/khima.jpg";
import staff20 from "../../assets/staff/kulananda.jpg";
import staff21 from "../../assets/staff/laxmi.jpg";
import staff22 from "../../assets/staff/maya.jpg";
import staff23 from "../../assets/staff/pabitra.jpg";
import staff24 from "../../assets/staff/ramchandra.jpg";
import staff25 from "../../assets/staff/rudra.jpg";
import staff26 from "../../assets/staff/sabitra.jpg";
import staff27 from "../../assets/staff/sakuntala.jpg";
import staff28 from "../../assets/staff/sita.jpg";
import staff29 from "../../assets/staff/sumitra.jpg";
import staff30 from "../../assets/staff/surendra.jpg";
import staff31 from "../../assets/staff/uttam.jpg";

const AboutFaculty = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var delay1, delay2, delay3, delay4, delay5, delay6;

  if (windowWidth > 768) {
    delay1 = 50;
    delay2 = 100;
    delay3 = 150;
    delay4 = 200;
    delay5 = 250;
    delay6 = 300;
  } else if (windowWidth > 640) {
    delay1 = 50;
    delay2 = 100;
    delay3 = 50;
    delay4 = 10;
    delay5 = 50;
    delay6 = 100;
  } else {
    delay1 = 100;
    delay2 = 100;
    delay3 = 100;
    delay4 = 100;
    delay5 = 100;
    delay6 = 100;
  }

  const staffSectionRef = useRef(null);
  UseScrollTo("staff");

  const staffs = [
    {
        url: staff10,
        name: "Dilaram Paudel",
        position: "Principal",
        id: 1,
        delay: delay1,
        number: 9857050484,
    },
    {
        url: staff3,
        name: "Basudev Khanal",
        position: "Accountant",
        id: 2,
        delay: delay2,
        number: 9848429632,
    },
    {
        url: staff1,
        name: "Aasha Pandey",
        position: "Teacher - Secondary",
        id: 3,
        delay: delay3,
        number: 9843679992,
    },
    {
        url: staff7,
        name: "Buddhiram Adhikari",
        position: "Teacher - Secondary",
        id: 4,
        delay: delay4,
        number: 9847589299,
    },
    {
        url: staff8,
        name: "Choplal Paudel",
        position: "Teacher - Secondary",
        id: 5,
        delay: delay5,
        number: 9843011770,
    },
    {
        url: staff9,
        name: "Dev Raj Chaudhary",
        position: "Teacher - Secondary",
        id: 6,
        delay: delay6,
        number: 9847045660,
    },
    {
        url: staff11,
        name: "Dinesh Khanal",
        position: "Teacher - Secondary",
        id: 7,
        delay: delay1,
        number: 9847083308,
    },
    {
        url: staff15,
        name: "Giri Prasad Khanal",
        position: "Teacher - Secondary",
        id: 8,
        delay: delay2,
        number: 9849422261,
    },
    {
        url: staff25,
        name: "Rudra Prasad Bhusal",
        position: "Teacher - Secondary",
        id: 9,
        delay: delay3,
        number: 9844728264,
    },
    {
        url: staff24,
        name: "Ramchandra Bhattrai",
        position: "Teacher - Secondary",
        id: 10,
        delay: delay4,
        number: 987198956,
    },
    {
        url: staff30,
        name: "Surendra Kumar GC",
        position: "Teacher - Secondary",
        id: 11,
        delay: delay5,
        number: 9847133921,
    },
    {
        url: staff4,
        name: "Bhojram Khanal",
        position: "Teacher - Primary",
        id: 12,
        delay: delay6,
        number: 9867542584,
    },
    {
        url: staff12,
        name: "Dipak Pandey",
        position: "Teacher - Primary",
        id: 13,
        delay: delay1,
        number: 9847276888,
    },
    {
        url: staff14,
        name: "Gaura Nyaupane",
        position: "Teacher - Primary",
        id: 14,
        delay: delay2,
        number: 9847219260,
    },
    {
        url: staff16,
        name: "Jiblal Panthi",
        position: "Teacher - Primary",
        id: 15,
        delay: delay3,
        number: 9847082337,
    },
    {
        url: staff17,
        name: "Kalpana Parajuli",
        position: "Teacher - Primary",
        id: 16,
        delay: delay4,
        number: 9842817639,
    },
    {
        url: staff18,
        name: "Kamala Ghimire",
        position: "Teacher - Primary",
        id: 17,
        delay: delay5,
        number: 9840604009,
    },
    {
        url: staff19,
        name: "Khima Shrestha",
        position: "Teacher - Primary",
        id: 18,
        delay: delay6,
        number: 9867232747,
    },
    {
        url: staff23,
        name: "Pabitra Chhetri",
        position: "Teacher - Primary",
        id: 19,
        delay: delay1,
        number: 9811467879,
    },
    {
        url: staff28,
        name: "Sita Pokhrel",
        position: "Teacher - Primary",
        id: 20,
        delay: delay2,
        number: 9847017965,
    },
    {
        url: staff6,
        name: "Bishnu Maya Bhusal",
        position: "Teacher Primary",
        id: 21,
        delay: delay3,
        number: 9847157632,
    },
    {
        url: staff5,
        name: "Binaya Tharu",
        position: "Teacher - Basic",
        id: 22,
        delay: delay4,
        number: 9867111472,
    },
    {
        url: staff26,
        name: "Sabitra Khanal",
        position: "Teacher - Basic",
        id: 23,
        delay: delay5,
        number: 9815424969,
    },
    {
        url: staff31,
        name: "Uttam Poudel",
        position: "Teacher - Basic",
        id: 24,
        delay: delay6,
        number: 9866148372,
    },
    {
        url: staff21,
        name: "Laxmi Belbase",
        position: "Teacher - Pre-Primary",
        id: 25,
        delay: delay1,
        number: 9867135173,
    },
    {
        url: staff27,
        name: "Sakintala Tharu",
        position: "Teacher - Pre-Primary",
        id: 26,
        delay: delay2,
        number: 9811527405,
    },
    {
        url: staff29,
        name: "Sumitra Rana",
        position: "Teacher - Pre-Primary",
        id: 27,
        delay: delay3,
        number: 9869405453,
    },
    {
        url: staff2,
        name: "Anil Chaudhary",
        position: "Security Guard",
        id: 28,
        delay: delay4,
        number: 9844533311,
    },
    {
        url: staff13,
        name: "Divya Parajuli",
        position: "Store-Keeper",
        id: 29,
        delay: delay5,
        number: 9847323279,
    },
    {
        url: staff22,
        name: "Maya Khanal",
        position: "Cleaning Assistant",
        id: 30,
        delay: delay6,
        number: 9814439849,
    }
];


  return (
    <>
      <div className="w-full px-[5%] flex relative">
        <div
          ref={staffSectionRef}
          className="absolute top-[-7.5rem]"
          id="staff"
        />
        <div className="flex flex-col w-full">
          <h5 className="heading">Members of our faculty & staff</h5>
          <div className="flex flex-wrap justify-between w-full gap-8 mt-8">
            {staffs.map((staff) => {
              return <Staff staff={staff} key={staff.id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const Staff = ({ staff }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={staff.delay}
      data-aos-duration="300"
      key={staff.id}
      className="group flex flex-col w-full sm:w-[45%] md:w-[30%] bg-white shadow-lg rounded-2xl overflow-hidden"
    >
      <div className="overflow-hidden">
        <img
          className="flex object-cover object-center w-full duration-500 h-96 group-hover:scale-105 brightness-[.8] group-hover:brightness-[.9]"
          src={staff.url}
          alt=""
        />
      </div>
      <div className="w-full pt-8 pb-2 text-xl text-center text-neutral-800 font-merriwether">
        {staff.name}
      </div>
      <div className="w-full text-base text-center text-black font-manrope">
        {staff.position}
      </div>
      <div className="w-full pt-1 pb-8 text-base italic text-center text-black font-manrope">
        {staff.number}
      </div>
    </div>
  );
};

export default AboutFaculty;
