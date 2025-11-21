import { useState, useEffect } from 'react';
import Header from './Header';
import Summary from './Summary';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Navigation from './Navigation';

const CVPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'summary', 'experience', 'education', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <Navigation
        activeSection={activeSection}
        isScrolled={isScrolled}
        onNavigate={scrollToSection}
      />

      <main className="relative">
        <div id="home">
          <Header />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          <div id="summary">
            <Summary />
          </div>

          <div id="experience">
            <Experience />
          </div>

          <div id="education">
            <Education />
          </div>

          <div id="skills">
            <Skills />
          </div>

          <div id="projects">
            <Projects />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">© 2024 Sarah Putri. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CVPortfolio;
