import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold">Gopiraju Allam</a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/GopirajuAllam" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/gopiraju-allam-70284a15a" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:gopiraju.allam98@gmail.com" className="hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Gopiraju Allam. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://github.com/GopirajuAllam" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/gopiraju-allam-70284a15a" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:gopiraju.allam98@gmail.com" className="hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;