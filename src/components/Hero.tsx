import React from 'react';
import { ArrowRight } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="py-20 md:py-32 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-600">Gopiraju Allam</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
          Full Stack Developer
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-lg">
        Full Stack Developer with more than 4.5 years of web application development experience and an unwavering commitment to quality control and a strong work culture. Skilled in front-end and back-end technologies, contributing effectively to every phase of the Software Development Lifecycle (SDLC). Proficient in building Windows services, APIs, microservices, cloud integrations, third-party service integrations, event-based systems, and database integrations. Experienced with DevOps practices, CI/CD pipelines, authentication and authorization services, message queues, and secure data transformations.
        </p>
        <div className="flex space-x-4">
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium flex items-center transition-colors"
          >
            Contact Me <ArrowRight className="ml-2" size={18} />
          </a>
          <a 
            href="#projects" 
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-medium transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
      <div className="md:w-2/5">
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src={profileImage}
              alt="Gopiraju Allam" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold">
              4.5+ yrs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;