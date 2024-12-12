import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

const Timeline = () => {
  const { t } = useTranslation();
  const timelines: { date: string; title: string; desc: string }[] = t(
    "jobHistory",
    { returnObjects: true },
  );

  const sectionsRef = useRef<HTMLDivElement[]>([]); // Refs for each section
  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Animation starts when the section enters 80% of viewport height
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        },
      );
    });
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="flex-col relative">
      {timelines.map((item, index) => (
        <div
          key={index}
          data-index={index}
          ref={addToRefs}
          className={`flex ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } relative justify-between h-[300px] items-center`}
        >
          <time className="max-w-[540px] text-4xl min-w-[340px] w-full text-right">
            {item.date}
          </time>
          <span className="block absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 h-[40px] w-[40px] border-white border-8 bg-primary rounded-full"></span>
          <div className="p-5 w-full max-w-[540px] min-w-[340px]">
            <h2 className="block text-5xl">{item.title}</h2>
            <p
              className="block border-t border-white pt-6 mt-6"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
