import SectionHeading from "./SectionHeading";
import { achievements } from "../data/content";
import { FiCheck } from "react-icons/fi";

const Achievements = () => {
  return (
    <section id="achievements" className="py-10">
      <SectionHeading title="Achievements" />
      <div className="space-y-2">
        {achievements.map((item, i) => (
          <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-tag-bg dark:hover:bg-dark-tag-bg transition-colors duration-200">
            <div className="mt-0.5 w-5 h-5 rounded-full bg-accent/10 dark:bg-dark-link/10 flex items-center justify-center flex-shrink-0">
              <FiCheck size={12} className="text-accent dark:text-dark-link" />
            </div>
            <p className="text-[14px] text-primary/80 dark:text-dark-text/80 leading-[1.7] font-sans">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
