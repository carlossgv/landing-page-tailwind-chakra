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

  return (
    <nav
      className={`w-full flex flex-col items-center md:flex-row md:justify-between bg-primaryBg dark:bg-primaryBgDark text-text dark:text-textDark ease-linear duration-300 ${locale}`}
    >
      <h3 className="text-4xl font-bold">&lt;CG.DEV/&gt;</h3>
      <ul className="flex space-x-4 ">
        <li>{data.NAVIGATION_BAR.ABOUT_ME}</li>
        <li>{data.NAVIGATION_BAR.PROJECTS}</li>
        <li>{data.NAVIGATION_BAR.CONTACT}</li>
      </ul>
      <div className="flex space-x-1">
        <button onClick={onLocaleClick} className="flex items-center">
          {locale.toUpperCase()}
        </button>
        <button className="flex items-center" onClick={onThemeClick}>
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </nav>
  );
}
