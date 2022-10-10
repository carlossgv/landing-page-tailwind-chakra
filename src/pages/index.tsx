import type { NextPage } from "next";
import React, { useEffect } from "react";
import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import { enPageData, esPageData } from "../utils/page-data";

export const LocaleContext = React.createContext({
  locale: "en",
  data: enPageData,
});

const Home: NextPage = () => {
  const [theme, setTheme] = useState<string>("light");
  const [localeData, setLocaleData] = useState({
    locale: "en",
    data: enPageData,
  });

  useEffect(() => {
    const prefersDark =
      window && window.matchMedia("(prefers-color-scheme: dark)").matches;

    setTheme(prefersDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  const toggleLocale = () => {
    setLocaleData((localeData) =>
      localeData.locale === "en"
        ? { locale: "es", data: esPageData }
        : { locale: "en", data: enPageData }
    );
  };

  return (
    <LocaleContext.Provider value={localeData}>
      <div className={`flex flex-col ${theme}`}>
        <NavBar
          onThemeClick={toggleTheme}
          onLocaleClick={toggleLocale}
          theme={theme}
        />
      </div>
    </LocaleContext.Provider>
  );
};

export default Home;
