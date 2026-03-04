"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type ThemeMode = "light" | "dark";
export type ColorTheme = "blue" | "green" | "yellow";

interface ThemeContextType {
  theme: ThemeMode;
  colorTheme: ColorTheme;
  toggleTheme: () => void;
  setColorTheme: (color: ColorTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getInitialTheme = (): ThemeMode => {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem("theme") as ThemeMode | null;
  return saved === "dark" || saved === "light" ? saved : "light";
};

const getInitialColor = (): ColorTheme => {
  if (typeof window === "undefined") return "blue";
  const saved = localStorage.getItem("colorTheme") as ColorTheme | null;
  return saved === "blue" || saved === "green" || saved === "yellow"
    ? saved
    : "blue";
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [colorTheme, setColorThemeState] =
    useState<ColorTheme>(getInitialColor);

  /* Apply classes to <html> whenever theme or colorTheme changes */
  useEffect(() => {
    const html = document.documentElement;

    // dark / light
    html.classList.toggle("dark", theme === "dark");

    // color theme
    html.classList.remove("theme-blue", "theme-green", "theme-yellow");
    html.classList.add(`theme-${colorTheme}`);

    localStorage.setItem("theme", theme);
    localStorage.setItem("colorTheme", colorTheme);
  }, [theme, colorTheme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const setColorTheme = (color: ColorTheme) => setColorThemeState(color);

  return (
    <ThemeContext.Provider
      value={{ theme, colorTheme, toggleTheme, setColorTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
};
