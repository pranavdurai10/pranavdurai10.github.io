// Code written by Pranav Durai
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle dark mode"
      className="p-2 rounded-lg text-muted dark:text-dark-muted hover:text-primary dark:hover:text-dark-text hover:bg-primary/5 dark:hover:bg-dark-text/5 transition-all duration-200"
    >
      {dark ? <FiSun size={17} /> : <FiMoon size={17} />}
    </button>
  );
};

export default ThemeToggle;
