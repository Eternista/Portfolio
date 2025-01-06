import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const { t } = useTranslation();
  const welcome = t("welcome");

  // useEffect(() => {
  //   gsap.fromTo(
  //     ".banner h1",
  //     {
  //       opacity: 1,
  //       y: 0, // start at the original position
  //     },
  //     {
  //       opacity: 0,
  //       y: -100, // move up by 100px
  //       scrollTrigger: {
  //         trigger: ".banner h1", // Trigger when the h1 is in view
  //         start: "top center", // When the top of h1 reaches the center of the viewport
  //         end: "bottom top", // When the bottom of h1 leaves the top of the viewport
  //         scrub: true, // This ensures smooth animation
  //         markers: false, // Set markers to true if you want to see the trigger points (optional for debugging)
  //       },
  //     },
  //   );
  // }, []);

  return (
    <section className="banner min-h-[100vh] w-full flex justify-center items-center">
      <div className="w-5/6">
        <h1
          className="text-8xl"
          dangerouslySetInnerHTML={{ __html: welcome }}
        />
      </div>
    </section>
  );
};

export default Banner;
