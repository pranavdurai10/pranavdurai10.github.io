// Code written by Pranav Durai
import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";
import { FiGithub, FiDatabase } from "react-icons/fi";

const Projects = () => {
  return (
    <section id="projects" className="py-10">
      <SectionHeading title="Projects" />
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((proj, i) => (
          <div
            key={i}
            className={`group p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
              proj.highlight
                ? "border-accent/20 dark:border-dark-highlight-bar/20 bg-accent-soft/30 dark:bg-dark-accent-soft/30"
                : "border-border/70 dark:border-dark-border/70 bg-surface dark:bg-dark-surface"
            } hover:border-border dark:hover:border-dark-border hover:shadow-[0_2px_12px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_2px_12px_rgba(0,0,0,0.25)]`}
          >
            <div>
              <div className="flex items-start justify-between gap-3 md:min-h-[3.5rem]">
                <h3 className="text-[15px] font-sans font-semibold text-primary dark:text-dark-text group-hover:text-accent dark:group-hover:text-dark-link transition-colors duration-200">
                  {proj.title}
                </h3>
                <div className="flex items-center gap-2 flex-shrink-0">
                  {proj.highlight && (
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-accent dark:text-dark-link bg-accent/10 dark:bg-dark-link/10 px-2 py-0.5 rounded-full">
                      Featured
                    </span>
                  )}
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${proj.title}`}
                      className="text-muted dark:text-dark-muted group-hover:text-accent dark:group-hover:text-dark-link transition-colors duration-200"
                    >
                      {proj.link.includes("github.com") ? (
                        <FiGithub size={16} />
                      ) : (
                        <FiDatabase size={16} />
                      )}
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-2 text-[13px] text-primary/70 dark:text-dark-text/70 leading-[1.7] font-sans">
                {proj.description}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {proj.tech.map((t, j) => (
                <span
                  key={j}
                  className="text-[11px] font-sans font-medium text-tag-text dark:text-dark-tag-text bg-tag-bg dark:bg-dark-tag-bg px-2 py-0.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
