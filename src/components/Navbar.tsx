import { useState } from "react";
import { useThemeContext } from "../context/ThemeContext";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const { theme, setTheme } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 align-items bg-bg-surface/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-900">
      <div className="flex justify-between gap-4 px-6 md:px-20 ">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-bold text-xl text-accent hover:text-accent-hover hover:cursor-pointer"
        >
          SUHYUN
        </button>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4 align-items text-gray-700 dark:text-gray-300 ">
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
          </div>

          <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="hover:cursor-pointer">
            {theme === "light" ? "☀️" : "🌙"}
          </button>

          <button className="md:hidden flex dark:text-gray-300" onClick={() => setIsOpen(!isOpen)}>
            <IoMdMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-end gap-4 py-4 px-6 bg-bg-surface/80 backdrop-blur-md dark:text-gray-300">
          <a onClick={() => setIsOpen(false)} href="#about">
            About
          </a>
          <a onClick={() => setIsOpen(false)} href="#archiving">
            Archiving
          </a>
          <a onClick={() => setIsOpen(false)} href="#skill">
            Skills
          </a>
          <a onClick={() => setIsOpen(false)} href="#project">
            Projects
          </a>
        </div>
      )}
    </nav>
  );
}
