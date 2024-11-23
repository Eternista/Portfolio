import { useEffect, useState } from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import { getTestDate } from "./api/apiService";
import { BrowserRouter } from "react-router-dom";
import StarsCanvas from "./components/canvas/Stars";
import ContactForm from "./components/ContactForm";
import Banner from "./components/Banner";

export const AppContent = () => {

  const [pageColorPalet, setPageColorPalet] = useState(false);

  const colorPaletChange = () => {
    setPageColorPalet((prev) => !prev);
  }

  useEffect(() => {
    getTestDate();
  }, []);

  return (
    <div className={`page ${pageColorPalet ? "light" : "dark"}`}>
      <StarsCanvas pageColor={pageColorPalet ? "#f272c8" : "#333"} />
      <Header handleColorPaletChange={colorPaletChange} isPageDark={pageColorPalet}/>
      <main className="p-5 max-w-[1360px] w-full relative z-1 mx-auto">
        <Banner />
        <ContactForm/>
      </main>
      <Footer />
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
