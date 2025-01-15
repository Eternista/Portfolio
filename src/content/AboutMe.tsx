import Section from "../components/modules/Section";
import Portrait from "../components/modules/Portrait";
import SingleExp from "../components/Single/SingleExpirience";

import MeImg from "../assets/me-2.jpg";
import { workExperience } from "../extras/workExperience";

const About = () => {
  return (
    <Section idName="about">
      <div className="flex items-center justify-between">
        <Portrait imgSrc={MeImg} />
        <div className="max-w-xl w-full">
          <h2 className="text-white mb-4 text-7xl">ABOUT ME</h2>
          <p className="mb-11">
            I’m a frontend developer based in Poland, with a passion for
            creating sleek, responsive websites and user-friendly interfaces. I
            enjoy transforming ideas into digital experiences using modern tools
            and technologies. When I’m not diving into code, I’m likely
            exploring the latest tech trends, sipping on a strong cup of coffee,
            or brainstorming new ways to solve challenging problems. Let’s build
            something great together!
          </p>
          <SingleExp heading="WORK EXPERIENCE" expHistory={workExperience} />
        </div>
      </div>
    </Section>
  );
};

export default About;
