// Code written by Pranav Durai
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { publications } from "../data/content";
import { FiArrowUpRight, FiCopy, FiCheck, FiDatabase } from "react-icons/fi";

const renderAuthors = (authors?: string) => {
  if (!authors) return null;
  const parts = authors.split(/(Pranav Durai|P\. Durai)/g);
  return (
    <p className="mt-1 text-[12.5px] text-primary/70 dark:text-dark-text/70 font-sans leading-normal">
      {parts.map((part, index) =>
        part === "Pranav Durai" || part === "P. Durai" ? (
          <strong key={index} className="font-semibold text-primary dark:text-dark-text">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </p>
  );
};

const Publications = () => {
  const [activeCiteIndex, setActiveCiteIndex] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <section id="publications" className="py-10">
      <SectionHeading title="Publications" />
      <div className="space-y-3">
        {publications.map((pub, i) => {
          const isFeatured = pub.highlight;
          const showCite = activeCiteIndex === i;

          return (
            <div
              key={i}
              className={`group p-4 rounded-xl border transition-all duration-300 ${
                isFeatured
                  ? "border-accent/20 dark:border-dark-highlight-bar/20 bg-accent-soft/30 dark:bg-dark-accent-soft/30"
                  : "border-border/70 dark:border-dark-border/70 bg-surface dark:bg-dark-surface hover:border-border dark:hover:border-dark-border"
              } hover:shadow-[0_1px_8px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_1px_8px_rgba(0,0,0,0.2)]`}
            >
              <div className="flex justify-between gap-3 items-stretch">
                <div className="flex-1 min-w-0">
                  <h3 className="text-[14px] font-sans font-semibold text-primary dark:text-dark-text leading-snug group-hover:text-accent dark:group-hover:text-dark-link transition-colors duration-200">
                    {pub.link ? (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      pub.title
                    )}
                  </h3>
                  {renderAuthors(pub.authors)}
                  <p className="mt-1 text-[12.5px] text-muted dark:text-dark-muted font-sans leading-normal">
                    {pub.venue}
                  </p>
                  {pub.description && (
                    <p className="mt-2 text-[12.5px] text-primary/65 dark:text-dark-text/65 leading-[1.65] font-sans">
                      {pub.description}
                    </p>
                  )}
                  
                  {pub.citation && (
                    <button
                      onClick={() => setActiveCiteIndex(showCite ? null : i)}
                      className="mt-2.5 text-[11px] font-sans font-medium text-accent dark:text-dark-link hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      {showCite ? "Hide Citation" : "Cite"}
                    </button>
                  )}
                </div>
                
                <div className="flex flex-col items-end justify-between gap-3 flex-shrink-0 pt-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[12px] text-muted dark:text-dark-muted font-sans font-medium tabular-nums">
                      {pub.year}
                    </span>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted dark:text-dark-muted hover:text-accent dark:hover:text-dark-link transition-colors duration-200"
                      >
                        {pub.type === "dataset" ? (
                          <FiDatabase size={14} />
                        ) : (
                          <FiArrowUpRight size={14} />
                        )}
                      </a>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1.5 justify-end">
                    {pub.type === "dataset" && (
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-400/10 px-2 py-0.5 rounded-full">
                        Dataset
                      </span>
                    )}
                    {isFeatured && (
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-accent dark:text-dark-link bg-accent/10 dark:bg-dark-link/10 px-2 py-0.5 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {pub.citation && showCite && (
                <div className="mt-3 p-3 rounded-lg bg-tag-bg/50 dark:bg-dark-tag-bg/50 border border-border/40 dark:border-dark-border/40 flex justify-between gap-3 items-start animate-fade-up">
                  <p className="text-[11px] font-mono text-muted dark:text-dark-muted select-all leading-normal flex-1">
                    {pub.citation}
                  </p>
                  <button
                    onClick={() => handleCopy(pub.citation!, i)}
                    className="text-[11px] font-sans font-medium text-accent dark:text-dark-link hover:underline flex-shrink-0 inline-flex items-center gap-1 cursor-pointer"
                  >
                    {copiedIndex === i ? (
                      <>
                        <FiCheck size={12} className="text-green-600 dark:text-green-400" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <FiCopy size={11} />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Publications;
