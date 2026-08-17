// Code written by Pranav Durai
import SectionHeading from "./SectionHeading";
import { experiences } from "../data/content";

const Experience = () => {
  return (
    <section id="experience" className="py-10">
      <SectionHeading title="Experience" />
      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="group p-4 rounded-xl border border-border/70 dark:border-dark-border/70 bg-surface dark:bg-dark-surface hover:border-border dark:hover:border-dark-border hover:shadow-[0_1px_8px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_1px_8px_rgba(0,0,0,0.2)] transition-all duration-300"
          >
            {/* Company header */}
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-[15px] font-sans font-semibold text-primary dark:text-dark-text">
                  {exp.organization}
                </h3>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-0.5">
                  {exp.type && (
                    <span className="text-[12px] text-muted dark:text-dark-muted font-sans">
                      {exp.type}
                    </span>
                  )}
                  {exp.type && exp.location && (
                    <span className="text-[11px] text-muted/40 dark:text-dark-muted/40">·</span>
                  )}
                  {exp.location && (
                    <span className="text-[12px] text-muted dark:text-dark-muted font-sans">
                      {exp.location}
                    </span>
                  )}
                </div>
              </div>
              {(exp.overallDuration || (exp.roles.length === 1 && exp.roles[0].duration)) && (
                <span className="text-[12px] text-accent dark:text-dark-link font-sans font-medium tabular-nums flex-shrink-0 w-fit bg-accent/5 dark:bg-dark-link/10 px-2 py-0.5 rounded-md mt-0.5">
                  {exp.overallDuration || exp.roles[0].duration}
                </span>
              )}
            </div>

            {/* Roles */}
            <div className={`mt-3 ${exp.roles.length > 1 ? "space-y-4" : ""}`}>
              {exp.roles.map((role, j) => (
                <div key={j} className={exp.roles.length > 1 && j > 0 ? "pt-3 border-t border-border/40 dark:border-dark-border/40" : ""}>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-[13.5px] font-sans font-semibold text-primary/85 dark:text-dark-text/85">
                      {role.title}
                    </h4>
                    {exp.roles.length > 1 && (
                      <span className="text-[12px] text-accent dark:text-dark-link font-sans font-medium tabular-nums flex-shrink-0 w-fit bg-accent/5 dark:bg-dark-link/10 px-2 py-0.5 rounded-md mt-0.5">
                        {role.duration}
                      </span>
                    )}
                  </div>
                  <ul className="mt-2 space-y-1 pl-4 list-disc list-outside">
                    {role.bullets.map((bullet, k) => (
                      <li
                        key={k}
                        className="text-[13px] text-primary/70 dark:text-dark-text/70 leading-[1.7] font-sans"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
