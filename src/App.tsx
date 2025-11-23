import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="bg-dark-950 text-white min-h-screen selection:bg-primary-500/30">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold font-heading bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            GA.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full" />
              </a>
            ))}
            <div className="flex space-x-4 pl-4 border-l border-white/10">
              <a href="https://github.com/GopirajuAllam" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/gopiraju-allam-70284a15a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Linkedin size={20} />
              </a>
              <a href="mailto:gopiraju.allam98@gmail.com" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-white/10"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-white py-2 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex space-x-6 pt-4 border-t border-white/10">
                  <a href="https://github.com/GopirajuAllam" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <Github size={20} />
                  </a>
                  <a href="https://linkedin.com/in/gopiraju-allam-70284a15a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                    <Linkedin size={20} />
                  </a>
                  <a href="mailto:gopiraju.allam98@gmail.com" className="text-gray-400 hover:text-white">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="relative overflow-hidden">
        {/* Background Gradients */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/10 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-500/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        </div>

        <div className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-dark-900 border-t border-white/5 py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-heading font-bold mb-6">Gopiraju Allam</h2>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/GopirajuAllam" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/gopiraju-allam-70284a15a" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="mailto:gopiraju.allam98@gmail.com" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
              <Mail size={20} />
            </a>
          </div>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Gopiraju Allam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;