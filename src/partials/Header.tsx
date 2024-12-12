import { useState } from "react";
import { useTranslation } from "react-i18next";
import logoWhite from "../assets/logo-white.svg";

const styleContainer = {
  button: "text-xl transition-all text-bold text-white hover:text-primary",
};

const Header = () => {
  const { i18n } = useTranslation();
  const [acLang, setAcLang] = useState<string>(i18n.language);
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setAcLang(lang);
  };
  return (
    <header className="w-full absolute top-0 left-0 z-30 p-6">
      <menu className="flex items-center justify-between">
        <img className="w-64" src={logoWhite} alt="logo" />
        <div className="flex items-center gap-4 w-fit">
          {acLang == "en" ? (
            <button
              className={styleContainer.button}
              onClick={() => {
                changeLanguage("pl");
              }}
            >
              PL
            </button>
          ) : (
            <button
              className={styleContainer.button}
              onClick={() => {
                changeLanguage("en");
              }}
            >
              EN
            </button>
          )}
        </div>
      </menu>
    </header>
  );
};

export default Header;
