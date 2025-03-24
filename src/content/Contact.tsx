import Section from "../components/modules/Section";
import ContactForm from "../components/modules/ContactForm";
import DualIcon from "../components/modules/Dual-icons";
import Logo from "../assets/logo.png";
import LazyImage from "../components/Single/LazyImage";
import { useTranslation } from "react-i18next";
import CVPL from "../assets/cv-pl.pdf";
import CVEN from "../assets/cv-en.pdf"

import { DownAnim } from "../extras/Anim";

interface ContactProps {
  DevMode: boolean;
}

const Contact = ({ DevMode }: ContactProps) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const heading = t("contactHead");
  const desc1 = t("contactDesc");
  const email = t("contactEmail");
  const desc2 = t("contactDesc2");
  const resume = t("resume");

  return (
    <Section idName="contact">
      <div className="flex justify-between lg:flex-row flex-col gap-8 lg:gap-0">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-4">
          <DownAnim UpDownAnim={false}>
            <>
              <h2 className="text-white text-7xl">{heading}</h2>
              <p className="mb-4">
                {desc1}{" "}
                <a
                  className="border-b border-primary"
                  href="mailto:rafal.ziolkowski1234@gmail.com"
                  >
                  {email}
                </a>
                <br />
                {desc2}{" "}
                <a
                  href={lang === "en" ? CVEN : CVPL}
                  className="border-b border-primary"
                  download={true}
                  >
                  {resume}
                </a>
              </p>
              <div className="flex gap-4">
                <DualIcon />
              </div>
                  </>
            </DownAnim>
          </div>
          <DownAnim UpDownAnim={true}>
            <LazyImage classes="lg:block hidden w-24" src={Logo} alt="My Logo" />
          </DownAnim>
        </div>
        <ContactForm DevMode={DevMode} />
        <DownAnim UpDownAnim={true}>
          <LazyImage classes="lg:hidden block w-24 mt-4" src={Logo} alt="My Logo" />
        </DownAnim>
      </div>
    </Section>
  );
};

export default Contact;
