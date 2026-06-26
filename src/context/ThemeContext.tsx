import { createContext, useContext } from "react";
import { useTheme } from "../hooks/useTheme";

const ThemeContext = createContext({
  theme: "light",
  setTheme: (_: string) => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
