import { useEffect } from "react";
import Header from "./partials/Header";
import { getTestDate } from "./extras/apiService";
import { BrowserRouter } from "react-router-dom";
import StarsCanvas from "./components/canvas/Stars";
import ContactForm from "./content/ContactForm";
import Banner from "./content/Banner";
import About from "./content/AboutMe";
import TechStack from "./content/TechStack";

export const AppContent = () => {

  const DevMode = false;
  
  useEffect(() => {
    getTestDate();
  }, []);

  return (
    <div className="page dark">
      {/* <StarsCanvas pageColor="#f272c8" /> */}
          <Banner/>
          <TechStack />
          <About />
          <ContactForm DevMode={DevMode} />
      {DevMode && (
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
