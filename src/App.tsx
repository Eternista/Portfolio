import Header from "./partials/Header";
import { BrowserRouter } from "react-router-dom";
import Contact from "./content/Contact";
import Banner from "./content/Banner";
import About from "./content/AboutMe";
import TechStack from "./content/TechStack";

export const AppContent = () => {
  const DevMode = false;

  return (
    <div className="page dark">
      <Banner />
      <TechStack />
      <About />
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
