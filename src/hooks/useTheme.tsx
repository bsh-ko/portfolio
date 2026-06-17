// 라이트, 다크 테마 관리 훅
import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    const setting = window.matchMedia("(prefers-color-scheme: dark)").matches;

    return saved || (setting ? "dark" : "light");
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
    console.log("테마 변경: ", theme);
  }, [theme]);

  return { theme, setTheme };
}
