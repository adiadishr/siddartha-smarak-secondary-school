import { LocateIcon, Mail, Phone } from "lucide-react";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import AdmissionDrawer from "../global/AdmissionDrawer";
import { FaFacebook } from "react-icons/fa6";

const ContactHero = () => {
  return (
    <div className="pt-12 mt-[130px] px-[5%]">
      <div className="pb-28">
        <h2 className="w-full pb-2 text-2xl font-bold text-center uppercase border-b-2 md:text-start md:w-max text-sky-900 border-stone-200 font-merriwether">
          Siddartha Smarak Secondary School
        </h2>
        <p className="text-lg/[250%] text-stone-400 text-center tracking-wide md:text-left font-manrope md:mb-4 mb-12 ">
          Kapilvastu, Lumbini, Nepal
        </p>
        <div className="flex flex-col w-full gap-24 md:gap-12 md:flex-row">
          <div className="flex flex-col order-2 md:w-1/2 md:order-1">
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56517.01863800199!2d82.98113002243565!3d27.707600143765685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996f855c08f3c37%3A0xea6dd16c7db2fa3a!2sShree%20Siddhartha%20Smarak%20Secondary%20School!5e0!3m2!1sen!2snp!4v1716802921718!5m2!1sen!2snp"
                width="100%"
                height="600"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col order-1 gap-12 md:w-1/2 md:order-2">
            <div className="flex flex-col py-12 md:py-0">
              <div className="flex flex-col items-center justify-center w-full gap-12">
                <div className="text-4xl text-orange-500">
                  <ImQuotesLeft />
                </div>
                <div className="text-4xl font-semibold tracking-wide text-center text-sky-900 font-merriwether">
                  के हो ठूलो जगतमा । पसीना विवक उदेश्य के लिनु । उडी छुनु चन्द्र
                  एक
                </div>
              </div>
            </div>
            <div className="gap-4 flex flex-col w-full text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope">
              <div className="pt-4 ">
                We believe in fostering a seamless and transparent admission
                process to welcome prospective students into our community. To
                begin, interested guardians are invited to visit our school
                campus for a tour.
              </div>
              <div className="pt-4">
                To book such a visit or inquire more, scroll down for our
                contact details or cick the button below to fill out a form and
                inquire, after which our team will contact you ASAP.
              </div>
              <div className="flex justify-center w-full pt-4 md:justify-start">
                <AdmissionDrawer place="contact" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 pt-28">
          <div className="flex justify-center w-full">
            <p className="text-center heading md:text-start w-max">
              Our Details
            </p>
          </div>
          <div className="text-lg/[250%] font-manrope flex flex-col items-center justify-center gap-6  max-w-8xl md:flex-row">
            <a
              title="Our Location"
              target="_blank"
              href="https://maps.app.goo.gl/wBgLZxkXDrxFq2Yc8"
              className="flex items-center duration-300 cursor-default text-stone-400 hover:text-stone-700 "
            >
              <LocateIcon className="mr-4 size-8" />
              <span>
                Buddhabhumi, Kapilvastu
              </span>
            </a>
            <a
              title="Mail Us"
              href="mailto:info.ssmarak@gmail.com"
              className="flex items-center duration-300 cursor-default text-stone-400 hover:text-stone-700"
            >
              <Mail className="mr-4 size-8" />
              <span>info.ssmarak@gmail.com</span>
            </a>
            <a title="Click to call" href="tel:076-620128">
              <div className="flex items-center duration-300 cursor-default text-stone-400 hover:text-stone-700">
                <Phone className="mr-4 size-8" />
                <span>+977-1-076-620128</span>
              </div>
            </a>
            <a
              title="Our Facebook"
              target="_blank"
              href="https://www.facebook.com/siddharthasmarakofficial"
            >
              <div className="flex items-center duration-300 cursor-default text-stone-400 hover:text-stone-700">
                <FaFacebook className="mr-4 size-8" />
                <span>Siddartha Smarak Secondary School</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
