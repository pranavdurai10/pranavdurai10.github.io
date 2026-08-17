// Code written by Pranav Durai
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Publications from "./components/Publications";
import Patents from "./components/Patents";
import Projects from "./components/Projects";
import Talks from "./components/Talks";
import Awards from "./components/Awards";
import Gallery from "./components/Gallery";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg dark:bg-dark-bg text-primary dark:text-dark-text">
      <Header />
      <main className="max-w-3xl mx-auto px-6 pb-8 divide-y divide-border/50 dark:divide-dark-border/50">
        <Hero />
        <About />
        <Gallery />
        <Experience />
        <Publications />
        <Patents />
        <Projects />
        <Talks />
        <Awards />

      </main>
      <div className="max-w-3xl mx-auto px-6 border-t border-border/50 dark:border-dark-border/50">
        <Footer />
      </div>
    </div>
  );
}

export default App;
