import Header from "./partials/Header";
import { BrowserRouter } from "react-router-dom";
import Contact from "./content/Contact";
import Banner from "./content/Banner";
import About from "./content/AboutMe";
import TechStack from "./content/TechStack";
import Separete from "./components/Single/Separate";

export const AppContent = () => {
  const DevMode = false;

  return (
    <div className="page dark pt-32">
      <Banner />
      <Separete classNames="w-1/4" />
      <TechStack />
      <Separete classNames="w-1/3" />
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
