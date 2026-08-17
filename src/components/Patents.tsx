// Code written by Pranav Durai
import SectionHeading from "./SectionHeading";
import { patents } from "../data/content";

const statusStyles = {
  Granted: "text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/30",
  Pending: "text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30",
  Filed: "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30",
};

const Patents = () => {
  return (
    <section id="patents" className="py-10">
      <SectionHeading title="Patents" />
      <div className="space-y-3">
        {patents.map((patent, i) => (
          <div
            key={i}
            className="group p-4 rounded-xl border border-border/70 dark:border-dark-border/70 bg-surface dark:bg-dark-surface hover:border-border dark:hover:border-dark-border hover:shadow-[0_1px_8px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_1px_8px_rgba(0,0,0,0.2)] transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5">
              <div className="flex-1">
                <h3 className="text-[14px] font-sans font-semibold text-primary dark:text-dark-text leading-snug">
                  {patent.title}
                </h3>
                <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] text-muted dark:text-dark-muted font-sans">
                  <span className="font-mono text-[12px] text-primary/50 dark:text-dark-text/50">
                    {patent.number}
                  </span>
                  {patent.coinventors && patent.coinventors.length > 0 && (
                    <span>
                      w/ {patent.coinventors.join(", ")}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span
                  className={`text-[10px] font-sans font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${statusStyles[patent.status]}`}
                >
                  {patent.status}
                </span>
                <span className="text-[12px] text-muted dark:text-dark-muted font-sans font-medium tabular-nums">
                  {patent.year}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Patents;
