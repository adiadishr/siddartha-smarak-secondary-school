import React, { useRef } from "react";
import UseScrollTo from "../utilities/UseScrollTo";
import signature from "../../assets/signature.png";
import principal from "../../assets/staff/dilaram.jpg"

const AboutMessage = () => {
  const messageRef = useRef(null);
  UseScrollTo("message");

  return (
    <div className="w-full px-[5%] flex pb-28 relative">
      <div ref={messageRef} className="absolute top-[-7.5rem]" id="message" />
      <div className="flex flex-col gap-4">
        <h5 className="mb-8 heading">Message from the Principal</h5>
        <div className="flex flex-col w-full gap-12 md:gap-32 md:flex-row">
          <div className="text-base/[250%] text-stone-700 tracking-wide text-justify font-manrope gap-8 flex flex-col w-full md:order-1 order-2">
            <p className="mb-[-.5rem] font-merriwether">
              From the Principal's desk,
            </p>
            <div>
              बुद्धभूमि नगरपालिका वडा नं. १, भेलाईमा अवस्थित सिद्धार्थ स्मारक
              माध्यमिक विद्यालयमा शान्त, शैक्षिक, मनोरम वातावरणमा साधारण तर्फ र
              विशेष शिक्षा अन्तर्गत छात्रावाससहित दृष्ट्रिविहीन स्रोतकक्षासमेत
              संचालनमा रहेको छ । विक्रम सम्वत २०१८ सालमा स्थापना भएको यस
              क्षेत्रके सबैभन्दा पुरानो पूर्ण सरकारी अनुदान प्राप्त विद्यालयमा
              बालबिकाशका कक्षा देखि कक्षा १२ सम्म नेपाली र अंग्रेजी दुवै
              माध्यममा सिकाइ हुदै आएको छ ।
            </div>
            <div>
              गुणस्तरीय शिक्षा नै समृद्धिको मूल आधार हो भन्ने सिद्धान्तका आधारमा
              विद्यालयमा बालमैत्री कक्षाकोठा, प्रविधिमैत्री शिक्षण सिकाइ,
              राजनीतिक अहस्तक्षेप पूर्ण वातावरण 1. अतिरिक्त क्रियाकलाप जस्ता
              रणनीति अङ्गीकार गरेको यस विद्यालयले विद्यार्थीका सृजनशीलता, नैतिक
              मूल्य मान्यता र अनुशासनलाई पनि उत्तिकै महत्व दिदै आएको छ राष्ट्रिय
              परीक्षा बोर्डले लिने कक्षा १० र १२ को वार्षिक परीक्षा र नगरस्तरमा
              लिइने कक्षा ५ र ८ को वार्षिक परीक्षामा विद्यालयले राम्रो नतिजा
              प्राप्त गर्दै आएको यथार्थता सर्वविदितै छ | हाम्रा दक्ष, अनुभवी
              योग्य तथा उर्जाशील शिक्षक सहयोगी अभिभावक,लगनशील विद्यार्थी र
              विद्यालय भित्रको उल्लासमय बालमैत्री सहज सिकाइ वातारवणका कारण
              हामीलाई विद्यालयको शैक्षिक विकाश गर्न र यस क्षेत्रको सफल संस्थाको
              रुपमा स्थापित गराउन सक्षम बनाएको छ।
            </div>
            <div></div>
            <div className="font-merriwether">
              <img className="flex w-1/4 ml-[-10px]" src={signature} alt="" />
              <p>Dilaram Paudel,</p>
              <p>The Principal,</p>
              <p>Siddhartha Smarak Secondary School</p>
            </div>
          </div>
          <div className="flex order-1 w-full h-[40rem] md:h-full mb-8 shadow-lg md:order-2 md:mb-0">
            <img
              src={principal}
              className="object-cover object-center border-b-8 brightness-[.8] duration-300 hover:brightness-[.9] saturate-75 hover:saturate-100 border-r-8 border-sky-800 rounded-xl"
              alt="Image of the Principal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMessage;
