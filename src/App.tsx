import { useEffect, useState } from "react";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import { getTestDate } from "./api/apiService";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const AppContent = () => {

  const {t} = useTranslation();
  const [numOfClicks, setOfClicks] = useState<number>(0);
  const [pageColorPalet, setPageColorPalet] = useState(false);

  const colorPaletChange = () => {
    setPageColorPalet((prev) => !prev);
  }

  useEffect(() => {
    getTestDate();
  }, []);

  return (
    <div className={`page ${pageColorPalet ? "light" : "dark"}`}>
      <Header handleColorPaletChange={colorPaletChange}/>
      <main className="p-5">
        <button onClick={() => setOfClicks((index) => ++index)}>
        {t("clicks", { count: numOfClicks })}
        </button>
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
