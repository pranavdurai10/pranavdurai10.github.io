// Code written by Pranav Durai
import SectionHeading from "./SectionHeading";
import { talks } from "../data/content";
import { FiPlay, FiExternalLink } from "react-icons/fi";

const Talks = () => {
  return (
    <section id="talks" className="py-10">
      <SectionHeading title="Talks & Invited Lectures" />
      <div className="space-y-4">
        {talks.map((talk, i) => (
          <div
            key={i}
            className="group p-4 rounded-xl border border-border/70 dark:border-dark-border/70 bg-surface dark:bg-dark-surface hover:border-border dark:hover:border-dark-border hover:shadow-[0_1px_8px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_1px_8px_rgba(0,0,0,0.2)] transition-all duration-300 flex flex-col sm:flex-row justify-between sm:items-start gap-2.5"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 sm:block">
                <h3 className="text-[14px] font-sans font-semibold text-primary dark:text-dark-text leading-snug">
                  {talk.title}
                </h3>
                <span className="sm:hidden text-[12px] text-muted dark:text-dark-muted font-sans font-medium tabular-nums flex-shrink-0 bg-accent/5 dark:bg-dark-link/10 px-2 py-0.5 rounded-md">
                  {talk.year}
                </span>
              </div>
              <p className="mt-1 text-[12.5px] text-muted dark:text-dark-muted font-sans leading-normal">
                {talk.venue}
              </p>
              {(talk.youtubeLink || talk.link) && (
                <div className="mt-2.5 sm:hidden flex flex-wrap gap-2">
                  {talk.youtubeLink && (
                    <a
                      href={talk.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11.5px] font-sans font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 hover:bg-red-100 dark:hover:bg-red-950/50 px-2.5 py-1 rounded-lg transition-colors duration-200"
                    >
                      <FiPlay size={12} />
                      Watch Talk
                    </a>
                  )}
                  {talk.link && (
                    <a
                      href={talk.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11.5px] font-sans font-medium text-accent dark:text-dark-link bg-accent/5 dark:bg-dark-link/10 hover:bg-accent/10 dark:hover:bg-dark-link/20 px-2.5 py-1 rounded-lg transition-colors duration-200"
                    >
                      <FiExternalLink size={12} />
                      View Post
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Desktop right column */}
            <div className="hidden sm:flex flex-col items-end justify-between gap-3 flex-shrink-0 pt-0.5">
              <span className="text-[12px] text-muted dark:text-dark-muted font-sans font-medium tabular-nums">
                {talk.year}
              </span>
              {(talk.youtubeLink || talk.link) && (
                <div className="flex flex-wrap gap-2">
                  {talk.youtubeLink && (
                    <a
                      href={talk.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12px] font-sans font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 hover:bg-red-100 dark:hover:bg-red-950/50 px-2.5 py-1 rounded-lg transition-colors duration-200"
                    >
                      <FiPlay size={12} />
                      Watch Talk
                    </a>
                  )}
                  {talk.link && (
                    <a
                      href={talk.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[12px] font-sans font-medium text-accent dark:text-dark-link bg-accent/5 dark:bg-dark-link/10 hover:bg-accent/10 dark:hover:bg-dark-link/20 px-2.5 py-1 rounded-lg transition-colors duration-200"
                    >
                      <FiExternalLink size={12} />
                      View Post
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Talks;
