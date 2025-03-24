import Section from "../components/modules/Section";
import Portrait from "../components/modules/Portrait";
import SingleExp from "../components/Single/SingleExpirience";
import { useTranslation } from "react-i18next";

import MeImg from "../assets/me-2.jpg";
import { workExperience } from "../extras/workExperience";
import {TextAnim} from "../extras/Anim";

const About = () => {
  const { t } = useTranslation();
  const AboutMe = t("AboutMe");
  const workExp = t("workExp");

  return (
    <Section idName="about">
      <div className="flex lg:flex-row flex-col items-center justify-between">
        <Portrait imgSrc={MeImg} fromLeftToRight={true}/>
          <div className="max-w-xl w-full">
            <TextAnim fromLeftToRight={false}>
              <>
                <h2 className="text-white mb-4 text-7xl">{AboutMe}</h2>
                <p className="mb-11"></p>
                <SingleExp heading={workExp} expHistory={workExperience} />
              </>
             </TextAnim>
          </div>
      </div>
    </Section>
  );
};

export default About;
