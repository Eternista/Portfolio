import { useTranslation } from "react-i18next";

interface HeaderProps {
  handleColorPaletChange: () => void;
}

const Header = ({handleColorPaletChange}: HeaderProps) => {

  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <header className="w-full p-6">
      <ul className="mt-0">
        <li className="language">
          <button
            className="text-6xl"
            onClick={() => 
            {
              changeLanguage("en")
            }
          }>
            English
          </button>
          <button onClick={() => 
            {
              changeLanguage("pl")
            }
          }
          >
            Polski
          </button>
        </li>
        <li>
           <button onClick={handleColorPaletChange}>Color</button>
        </li>
      </ul>      
    </header>
  );
};

export default Header;
