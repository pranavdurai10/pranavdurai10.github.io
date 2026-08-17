// Code written by Pranav Durai
import SectionHeading from "./SectionHeading";
import { awards } from "../data/content";
import { FiAward } from "react-icons/fi";

const Awards = () => {
  return (
    <section id="awards" className="py-10">
      <SectionHeading title="Awards & Honors" />
      <div className="space-y-3">
        {awards.map((award, i) => (
          <div
            key={i}
            className="group p-4 rounded-xl border border-border/70 dark:border-dark-border/70 bg-surface dark:bg-dark-surface hover:border-border dark:hover:border-dark-border hover:shadow-[0_1px_8px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_1px_8px_rgba(0,0,0,0.2)] transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center flex-shrink-0">
                <FiAward size={16} className="text-amber-600 dark:text-amber-400" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <h3 className="text-[14px] font-sans font-semibold text-primary dark:text-dark-text leading-snug">
                    {award.title}
                  </h3>
                  <span className="text-[12px] text-accent dark:text-dark-link font-sans font-medium tabular-nums flex-shrink-0 bg-accent/5 dark:bg-dark-link/10 px-2 py-0.5 rounded-md">
                    {award.year}
                  </span>
                </div>
                <p className="mt-0.5 text-[12.5px] text-muted dark:text-dark-muted font-sans">
                  {award.organization}
                </p>
                {award.description && (
                  <p className="mt-1.5 text-[13px] text-primary/65 dark:text-dark-text/65 leading-[1.6] font-sans">
                    {award.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
