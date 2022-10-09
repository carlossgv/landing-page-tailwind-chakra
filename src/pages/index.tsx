import { Button } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`h-screen flex justify-center items-center ${theme}`}>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
      <p className="bg-primary text-accent dark:bg-primaryBgDark dark:text-accentDark">
        CENTERED TEXT
      </p>
    </div>
  );
};

export default Home;
