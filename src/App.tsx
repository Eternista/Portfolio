import { lazy, Suspense } from "react";
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

export const AppContent = () => {
  const DevMode = false;

  return (
    <div className="page dark lg:pt-24 md:pt-16 pt-16">
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
