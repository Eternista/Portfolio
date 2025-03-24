import { useEffect, useRef } from "react";

import Section from "../components/modules/Section";
import SingleTech from "../components/Single/SingleTech";
import TechStackList from "../extras/iconExport";
import { motion, useInView, useAnimation } from "framer-motion";

const TechStack = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, {once: false});
  const mainControls = useAnimation();


  useEffect(() => {
    if(isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);

  return (
    <Section idName="techstack" sectionTitle="MY TECHSTACK">
      <>
        <div
         ref={ref}
         className="tech-stack grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-16 gap-y-16 justify-between">
          {TechStackList.map((item, techIndex) => (
            <motion.div
            key={techIndex}
              variants={{
                hidden: {opacity: 0.5, scale: 0.7},
                visible: {opacity: 1, scale: 1}
              }}
              animate={mainControls}
              transition={{duration: 0.5, delay: 0.25}}
            >
              <SingleTech
                techName={item.name}
                techSrc={item.src}
                />
              </motion.div>
          ))}
        </div>
      </>
    </Section>
  );
};

export default TechStack;
