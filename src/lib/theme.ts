import { createContext } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "jay-bholenath-theme";
const DEFAULT_THEME: Theme = "dark";

export type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  const isDark = theme === "dark";

  root.classList.toggle("dark", isDark);
  root.style.colorScheme = theme;
}

export function getThemeFromDom(): Theme {
  if (typeof document === "undefined") return DEFAULT_THEME;
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function persistTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Ignore storage failures and still apply the theme in-memory.
  }
}

export const themeInitScript = `
  (() => {
    const fallbackTheme = "${DEFAULT_THEME}";

    try {
      const storedTheme = localStorage.getItem("${STORAGE_KEY}");
      const theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : fallbackTheme;
      const root = document.documentElement;
      root.classList.toggle("dark", theme === "dark");
      root.style.colorScheme = theme;
    } catch {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = fallbackTheme;
    }
  })();
`;
