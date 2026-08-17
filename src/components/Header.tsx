// Code written by Pranav Durai
import ThemeToggle from "./ThemeToggle";
import { FiMail } from "react-icons/fi";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Milestones", href: "#milestones" },
  { label: "Experience", href: "#experience" },
  { label: "Publications", href: "#publications" },
  { label: "Patents", href: "#patents" },
  { label: "Projects", href: "#projects" },
  { label: "Talks", href: "#talks" },
  { label: "Awards", href: "#awards" },
];

const Header = () => {
  const email = "pranavdurai10" + "@" + "gmail.com";

  return (
    <header className="sticky top-0 z-50 bg-bg/70 dark:bg-dark-bg/70 backdrop-blur-xl border-b border-border/60 dark:border-dark-border/60">
      <div className="max-w-3xl mx-auto px-6 py-3 flex items-center justify-between">
        <nav className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-sans font-medium text-muted dark:text-dark-muted hover:text-primary dark:hover:text-dark-text transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#hero"
          className="sm:hidden text-[14px] font-sans font-semibold text-primary dark:text-dark-text"
        >
          P. Durai
        </a>
        <div className="flex items-center gap-1.5">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-[12px] font-sans font-medium text-surface dark:text-dark-bg bg-primary dark:bg-dark-text hover:opacity-90 rounded-lg w-8 h-8 sm:w-auto sm:px-3 sm:py-1.5 transition-all duration-200"
          >
            <FiMail size={13} className="flex-shrink-0" />
            <span className="hidden sm:inline">Email</span>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
