import SectionHeading from "./SectionHeading";
import { FiMail, FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  const email = "pranavdurai10" + "@" + "gmail.com";

  return (
    <section id="contact" className="py-10">
      <SectionHeading title="Contact" />
      <div className="p-5 rounded-xl border border-border/70 dark:border-dark-border/70 bg-surface dark:bg-dark-surface">
        <p className="text-[14px] font-sans text-primary/80 dark:text-dark-text/80 leading-[1.8]">
          I am always happy to discuss research collaborations, speaking
          opportunities, or potential projects. Feel free to reach out.
        </p>
        <a
          href={`mailto:${email}`}
          className="mt-4 inline-flex items-center gap-2 text-[13px] font-sans font-medium text-surface dark:text-dark-bg bg-primary dark:bg-dark-text px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-200"
        >
          <FiMail size={14} />
          {email}
          <FiArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
