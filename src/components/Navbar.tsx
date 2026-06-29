import { useThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, setTheme } = useThemeContext();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-20 py-4 align-items bg-bg-surface/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-900">
      <div className="flex justify-between gap-4 ">
        <div className="font-bold text-xl text-accent hover:text-accent-hover">SUHYUN</div>
        <div>
          <div className="flex gap-4 align-items text-gray-700 dark:text-gray-300 ">
            <a className="hover:text-accent" href="#about">
              About
            </a>
            <a className="hover:text-accent" href="#archiving">
              Archive
            </a>
            <a className="hover:text-accent" href="#skill">
              Skills
            </a>
            <a className="hover:text-accent" href="#project">
              Projects
            </a>
            <div>
              <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="hover:cursor-pointer">
                {theme === "light" ? "☀️" : "🌙"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
