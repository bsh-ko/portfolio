import { useThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, setTheme } = useThemeContext();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-20 py-4 align-items bg-bg-surface/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-900">
      <div className="flex justify-between gap-4 ">
        <div className="font-bold text-xl text-accent hover:text-accent-hover">SUHYUN</div>
        <div>
          <ul className="flex gap-4 align-items text-gray-700 dark:text-gray-300 ">
            <li className="hover:text-accent">About</li>
            <li className="hover:text-accent">Skills</li>
            <li className="hover:text-accent">Projects</li>
            <li className="hover:text-accent">Contact</li>
            <li>
              <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme === "light" ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
