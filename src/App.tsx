import { useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./partials/Header";
import Contact from "./content/Contact";
import Banner from "./content/Banner";
import About from "./content/AboutMe";
import TechStack from "./content/TechStack";
import Projects from "./content/Projects";
import Testimonials from "./content/Testimonials";
import Separete from "./components/Single/Separate";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AppContent = () => {
  const DevMode = false;
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if(contentRef.current) {
      const sections = contentRef.current.querySelectorAll(".section");
      sections.forEach((section) => {
        gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }
  }, []);

  return (
    <div ref={contentRef} className="page dark lg:pt-32 md:pt-24 pt-16">
      <Banner />
      <Separete classNames="w-1/4" />
      <TechStack />
      <Separete classNames="w-1/3" />
      <Projects />
      <Separete classNames="w-1/2" />
      <Testimonials />
      <Separete classNames="w-3/4" />
      <About />
      <Separete classNames="w-full" />
      <Contact DevMode={DevMode} />
      {!DevMode && (
        <>
          <Header />
        </>
      )}
    </div>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};
