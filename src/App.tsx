import "./App.css";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-bg-base text-black dark:text-white">
      <button onClick={toggleTheme} className="items-center border px-4 py-2">
        현재 테마: {theme} / 테마 전환
      </button>
    </div>
  );
}

export default App;
