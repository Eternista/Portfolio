import Header from "./partials/Header";
import { BrowserRouter } from "react-router-dom";
import Contact from "./content/Contact";
import Banner from "./content/Banner";
import About from "./content/AboutMe";
import TechStack from "./content/TechStack";
import Projects from "./content/Projects";
import Testimonials from "./content/Testimonials";
import Separete from "./components/Single/Separate";

export const AppContent = () => {
  const DevMode = false;

  return (
    <div className="page dark pt-32">
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
