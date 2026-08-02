import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Education } from "@/sections/Education";
import { Achievements } from "@/sections/Achievements";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
