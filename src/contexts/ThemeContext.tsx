import { useState, useEffect, type ReactNode } from "react";
import { lightTheme, darkTheme } from "../styles/theme";
import { ThemeContext } from "./types";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("bflfin-theme");
    return saved ? saved === "dark" : false;
  });

  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newMode = !prev;
      localStorage.setItem("bflfin-theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return <ThemeContext.Provider value={{ isDark, theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
