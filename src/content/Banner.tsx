import Portrait from "../components/modules/Portrait";
import Section from "../components/modules/Section";
import DualIcon from "../components/modules/Dual-icons";
import {TextAnim} from "../extras/Anim";

import MEJPG from "../assets/rafal-z1.jpg";
import CVPL from "../assets/cv-pl.pdf";
import CVEN from "../assets/cv-en.pdf";

import { useTranslation } from "react-i18next";

const Banner = () => {

  const { t, i18n } = useTranslation();
  const welcome = t("welcome");
  const desc = t("description");
  const lang = i18n.language;
  return (
      <Section
         idName="home"
        >
        <div
          className="flex lg:flex-row flex-col-reverse items-center justify-between">
          <TextAnim fromLeftToRight={true}>
            <div
             className="max-w-xl w-full">
            <h1
              className="lg:text-9xl md:text-8xl text-6xl mb-6"
              dangerouslySetInnerHTML={{ __html: welcome }}
              />
            <p
              className="mb-11"
            >
              {desc}
            </p>
            <div className="flex gap-4">
              <a
                href={lang === "en" ? CVEN : CVPL}
                className="bg-primary pl-6 py-2 pr-2 rounded-[40px] transition-colors duration-300 hover:bg-secondary group"
                download={true}
                >
                <span className="text-lg text-black font-extrabold w-fit flex items-center transition-colors duration-300 group-hover:text-white">
                  RESUME
                  <span className="rounded-full h-10 w-10 flex items-center justify-center ml-3 bg-secondary transition-colors duration-300 group-hover:bg-primary">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      >
                      <g clipPath="url(#clip0_2004_7)">
                        <path
                          d="M5.98971 19.2175L16.3036 8.9036V16.389L18.3033 16.389L18.3033 5.48969L7.40392 5.48969L7.40393 7.48939L14.8894 7.48939L4.5755 17.8032L5.98971 19.2175Z"
                          fill="white"
                          />
                      </g>
                      <defs>
                        <clipPath id="clip0_2004_7">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </span>
              </a>
              <DualIcon />
            </div>
            </div>
          </TextAnim>
          <Portrait imgSrc={MEJPG} fromLeftToRight={false} />
        </div>
      </Section>
  );
};

export default Banner;
