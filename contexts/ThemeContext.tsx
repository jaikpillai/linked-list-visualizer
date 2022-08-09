import React, { ReactNode } from "react";
import { useDarkMode } from "storybook-dark-mode";

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    // const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    // if (userMedia.matches) {
    //   return "dark";
    // }
  }

  return "dark"; // light theme as the default;
};

interface Props {
  theme?: string;
  setTheme: (value: string) => void;
}

export const ThemeContext = React.createContext<Props>({
  setTheme: (val: string) => {},
});

interface ITheme {
  initialTheme?: string;
  children: ReactNode;
}

export const ThemeProvider: React.FunctionComponent<ITheme> = ({
  initialTheme,
  children,
}) => {
  const [theme, setTheme] = React.useState(getInitialTheme);

  const rawSetTheme = (rawTheme: string) => {
    const root = document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
