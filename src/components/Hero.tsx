// Code written by Pranav Durai
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { SiGooglescholar } from "react-icons/si";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/pranavdurai",
    icon: <FiLinkedin size={18} />,
  },
  {
    label: "Scholar",
    href: "https://scholar.google.com/citations?user=6retj3YAAAAJ&hl=en",
    icon: <SiGooglescholar size={18} />,
  },
  {
    label: "GitHub",
    href: "https://github.com/pranavdurai",
    icon: <FiGithub size={18} />,
  },
];

const Hero = () => {
  return (
    <section id="hero" className="pt-12 pb-10">
      <div className="flex flex-col sm:flex-row items-start gap-7">
        <div className="relative">
          <img
            src="/PDURAI_GITHUB.png"
            alt="Pranav Durai"
            className="w-[148px] h-[148px] rounded-full object-cover object-[center_60%] border border-border dark:border-dark-border shadow-sm flex-shrink-0 blur-[0.3px]"
          />
        </div>
        <div className="flex-1 pt-1">
          <h1 className="text-4xl sm:text-[2.75rem] font-heading font-semibold text-primary dark:text-dark-text tracking-tight leading-tight">
            Pranav Durai
          </h1>
          <p className="mt-2 text-[15px] text-muted dark:text-dark-muted font-sans font-medium tracking-tight">
            Applied AI Researcher &amp; Systems Engineer
          </p>
          <p className="mt-3 text-[15px] font-sans italic text-primary/60 dark:text-dark-text/60 leading-relaxed max-w-lg">
            Building intelligence for robotics, healthcare, and planetary environments.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-sans font-medium text-accent dark:text-dark-link bg-accent/5 dark:bg-dark-link/10 rounded-lg hover:bg-accent/10 dark:hover:bg-dark-link/20 transition-all duration-200"
              >
                {link.icon}
                <span className="hidden sm:inline">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
