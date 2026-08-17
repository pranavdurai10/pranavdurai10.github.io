// Code written by Pranav Durai
import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <section id="about" className="py-10">
      <SectionHeading title="About" />
      <div className="space-y-4 text-[15px] leading-[1.85] text-primary/85 dark:text-dark-text/85 font-sans">
        <p>
          I come from a family of goldsmiths. While my ancestors crafted with metal and fire, I found my medium in code, robotics, and intelligent systems. The tools changed, but the desire to build from scratch remained the same.
        </p>
        <p>
          Grounded in low-level systems, from kernels and operating systems to embedded firmware, I now design end-to-end hardware–AI pipelines and foundation model architectures that operate reliably under real-world constraints. I’m interested in bridging disciplines, from hardware and software to research and deployment, and ultimately extending intelligent systems beyond Earth.
        </p>
      </div>
    </section>
  );
};

export default About;
