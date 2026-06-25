import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-bg-surface">
      <div className="flex justify-between">
        <div>logo</div>
        <div>
          <ul className="flex gap-4">
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>
              <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme === "light" ? "🌙" : "☀️"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
