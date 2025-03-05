import { useEffect, useRef, lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./partials/Header";
import Banner from "./content/Banner";
import Separete from "./components/Single/Separate";
import Loading from "./components/Single/Loading";
const About = lazy(() => import ("./content/AboutMe"));
const TechStack = lazy(() => import ("./content/TechStack"));
const Projects = lazy(() => import ("./content/Projects"));
const Testimonials = lazy(() => import ("./content/Testimonials"));
const Contact = lazy(() => import ("./content/Contact"));

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const AppContent = () => {
  const DevMode = false;
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef.current) {
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
          },
        );
      });
    }
  }, []);

  return (
    <div ref={contentRef} className="page dark lg:pt-24 md:pt-16 pt-16">
      <Banner />
      <Separete classNames="w-1/4" />
      <Suspense fallback={<Loading />}>
        <TechStack />
      </Suspense>
      <Separete classNames="w-1/3" />
      <Suspense fallback={<Loading />}>
        <Projects />
      </Suspense>
      <Separete classNames="w-1/2" />
      <Suspense fallback={<Loading />}>
        <Testimonials />
      </Suspense>
      <Separete classNames="w-3/4" />
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
      <Separete classNames="w-full" />
      <Suspense fallback={<Loading />}>
        <Contact DevMode={DevMode} />
      </Suspense>
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
