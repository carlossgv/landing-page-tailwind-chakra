import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { LocaleContext } from "../../pages";

interface Props {
  onThemeClick: () => void;
  onLocaleClick: () => void;
  theme: string;
}

export default function NavBar({ onThemeClick, onLocaleClick, theme }: Props) {
  const { locale, data } = useContext(LocaleContext);

  const renderLinks = () => {
    return Object.values(data.NAVIGATION_BAR).map((link) => {
      return (
        <li
          key={link}
          className="animate-toggleIn hover:text-linkHover dark:hover:text-linkHoverDark"
        >
          <a href={`#${link.toLowerCase()}`} className="">
            {link}
          </a>
        </li>
      );
    });
  };

  return (
    <nav
      className="w-full px-4 
      bg-primaryBg dark:bg-primaryBgDark 
      text-text dark:text-textDark ease-linear duration-300"
    >
      <div
        className="max-w-7xl m-auto h-full py-2 flex flex-col space-y-2 items-center 
      md:flex-row md:space-y-0 md:justify-between"
      >
        <h3 className="text-4xl font-bold">&lt;CG.DEV/&gt;</h3>
        <div className="flex space-x-2">
          <ul className="flex space-x-4">{renderLinks()}</ul>
          <span>|</span>
          <div className="flex space-x-2">
            <button
              onClick={onLocaleClick}
              className="flex items-center animate-toggleIn"
            >
              {locale === "en" ? "ES" : "EN"}
            </button>
            <button className="flex items-center" onClick={onThemeClick}>
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
