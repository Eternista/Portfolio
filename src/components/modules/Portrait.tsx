import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface PortraitProps {
  imgSrc: string;
  classes?: string;
}

gsap.registerPlugin(ScrollTrigger);

const Portrait = ({ imgSrc, classes }: PortraitProps) => {
  const portraitRef = useRef<HTMLDivElement | null>(null);

  //   useEffect(() => {
  //     if (portraitRef.current) {
  //       // Set initial styles in JavaScript to prevent "flash"
  //       gsap.set(portraitRef.current, { opacity: 0, x: 50 });

  //       // Animate with ScrollTrigger
  //       gsap.to(portraitRef.current, {
  //         opacity: 1,
  //         x: 0,
  //         duration: 0.5,
  //         scrollTrigger: {
  //           trigger: portraitRef.current,
  //           start: "top 80%", // Trigger point
  //           end: "top 20%", // End point
  //           toggleActions: "play reverse play reverse", // Animation plays forward and backward
  //         },
  //       });
  //     }
  //   }, []);

  return (
    <div
      ref={portraitRef}
      className={`portrait relative lg:max-w-[600px] max-w-[400px] w-full pl-[26px] lg:mb-0 mb-8 ${classes}`}
    >
      <span className="block z-0 absolute top-[30px] bottom-[30px] left-0 w-14 bg-primary rounded-3xl"></span>
      <img
        src={imgSrc}
        alt="Tak wyglądam"
        className="relative z-1 ml-auto lg:max-w-xl w-full object-contain rounded-3xl"
      />
    </div>
  );
};

export default Portrait;
