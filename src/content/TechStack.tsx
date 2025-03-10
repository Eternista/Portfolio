import Section from "../components/modules/Section";
import SingleTech from "../components/Single/SingleTech";
import TechStackList from "../extras/iconExport";
// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  // const containerRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   if (containerRef.current) {
  //     const items = containerRef.current.querySelectorAll(".tech-item");

  //     items.forEach((item) => {
  //       gsap.fromTo(
  //         item,
  //         { opacity: 0, y: 50 }, // Start state (hidden)
  //         {
  //           opacity: 1,
  //           y: 0,
  //           duration: 0.5,
  //           scrollTrigger: {
  //             trigger: item,
  //             start: "top 80%", // When the item enters the viewport
  //             end: "top 20%", // When the item starts to leave the viewport
  //             toggleActions: "play reverse play reverse", // Play and reverse on enter/leave
  //           },
  //         },
  //       );
  //     });
  //   }
  // }, []);

  return (
    <Section idName="techstack" sectionTitle="MY TECHSTACK">
      <>
        <div className="tech-stack grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-16 gap-y-16 justify-between">
          {TechStackList.map((item, techIndex) => (
            <SingleTech
              key={techIndex}
              techName={item.name}
              techSrc={item.src}
            />
          ))}
        </div>
      </>
    </Section>
  );
};

export default TechStack;
