// Code written by Pranav Durai
import SectionHeading from "./SectionHeading";
import { talks } from "../data/content";
import { FiPlay } from "react-icons/fi";

const Talks = () => {
  return (
    <section id="talks" className="py-10">
      <SectionHeading title="Talks & Invited Lectures" />
      <div className="space-y-4">
        {talks.map((talk, i) => (
          <div
            key={i}
            className="group p-4 rounded-xl border border-border/70 dark:border-dark-border/70 bg-surface dark:bg-dark-surface hover:border-border dark:hover:border-dark-border hover:shadow-[0_1px_8px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_1px_8px_rgba(0,0,0,0.2)] transition-all duration-300 min-h-[6rem] flex gap-4 justify-between items-stretch"
          >
            <div className="flex-1 min-w-0 flex flex-col justify-between">
              <div>
                <h3 className="text-[14px] font-sans font-semibold text-primary dark:text-dark-text leading-snug">
                  {talk.title}
                </h3>
                <p className="mt-1 text-[12.5px] text-muted dark:text-dark-muted font-sans leading-normal">
                  {talk.venue}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end justify-between gap-3 flex-shrink-0 pt-0.5">
              <span className="text-[12px] text-muted dark:text-dark-muted font-sans font-medium tabular-nums">
                {talk.year}
              </span>
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
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Talks;
