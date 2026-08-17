// Code written by Pranav Durai
import { useState, useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { galleryItems } from "../data/content";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

const Gallery = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIdx === null) return;
      if (e.key === "Escape") setActiveIdx(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIdx]);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev !== null ? (prev + 1) % galleryItems.length : null));
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.75;
    scrollRef.current.scrollTo({
      left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="milestones" className="py-10">
      <div className="flex items-center justify-between mb-6">
        <SectionHeading title="Milestones" />
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-border/70 dark:border-dark-border/70 text-muted dark:text-dark-muted hover:text-primary dark:hover:text-dark-text hover:bg-tag-bg/50 dark:hover:bg-dark-tag-bg/50 transition-all duration-200 cursor-pointer"
          >
            <FiChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-border/70 dark:border-dark-border/70 text-muted dark:text-dark-muted hover:text-primary dark:hover:text-dark-text hover:bg-tag-bg/50 dark:hover:bg-dark-tag-bg/50 transition-all duration-200 cursor-pointer"
          >
            <FiChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory scrollbar-none"
      >
        {galleryItems.map((item, i) => (
          <div
            key={i}
            className="snap-start flex-shrink-0 w-[280px] sm:w-[320px] rounded-xl border border-border/70 dark:border-dark-border/70 bg-surface dark:bg-dark-surface p-4 flex flex-col justify-between hover:border-border dark:hover:border-dark-border hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <div>
              <div
                onClick={() => setActiveIdx(i)}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group mb-3.5 bg-tag-bg dark:bg-dark-tag-bg ${
                  item.fit === "contain" ? "p-3 bg-black/5 dark:bg-black/20" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                    item.fit === "contain" ? "object-contain" : "object-cover"
                  }`}
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-[11px] font-sans font-medium text-white bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    View Photo
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[12px] font-sans font-semibold text-accent dark:text-dark-link bg-accent/10 dark:bg-dark-link/10 px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
                <span className="text-[12.5px] text-muted dark:text-dark-muted font-sans font-medium tabular-nums">
                  {item.year}
                </span>
              </div>
              <h3 className="text-[14px] font-sans font-semibold text-primary dark:text-dark-text mb-1">
                {item.title}
              </h3>
              <p className="text-[12.5px] text-primary/70 dark:text-dark-text/70 leading-relaxed font-sans">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeIdx !== null && (
        <div
          onClick={() => setActiveIdx(null)}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col justify-between items-center p-4 sm:p-6 animate-fade-in select-none"
        >
          {/* Fixed Prev Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous photo"
            className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-200 cursor-pointer z-[110] shadow-lg backdrop-blur-sm"
          >
            <FiChevronLeft size={24} className="text-white" />
          </button>

          {/* Fixed Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next photo"
            className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all duration-200 cursor-pointer z-[110] shadow-lg backdrop-blur-sm"
          >
            <FiChevronRight size={24} className="text-white" />
          </button>

          {/* Header Action Row */}
          <div className="w-full max-w-4xl flex items-center justify-between py-2 text-white/80 z-[105]">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-sans uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-full">
                {galleryItems[activeIdx].category}
              </span>
              <span className="text-[13px] font-sans font-medium text-white/60 tabular-nums">
                {galleryItems[activeIdx].year}
              </span>
            </div>
            <button
              onClick={() => setActiveIdx(null)}
              aria-label="Close modal"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 hover:text-white flex items-center justify-center transition-colors duration-200 cursor-pointer"
            >
              <FiX size={18} />
            </button>
          </div>

          {/* Focal Image */}
          <div className="w-full max-w-4xl flex-1 flex items-center justify-center min-h-0 my-2 px-12 sm:px-16">
            <img
              key={activeIdx}
              src={galleryItems[activeIdx].image}
              alt={galleryItems[activeIdx].title}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl animate-scale-up"
            />
          </div>

          {/* Caption Overlay */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-xl p-4 text-center text-white backdrop-blur-sm mb-2 z-[105]"
          >
            <h4 className="text-[15px] font-sans font-semibold mb-1">
              {galleryItems[activeIdx].title}
            </h4>
            <p className="text-[13px] text-white/70 leading-relaxed font-sans">
              {galleryItems[activeIdx].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
