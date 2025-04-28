import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Internal Web App',
      description: 'Built a secure full-stack system with ASP.NET Core, Angular, and SQL Server, integrating OAuth 2.0 authentication.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'OAuth 2.0'],
      githubLink: 'https://github.com/GopirajuAllam',
      liveLink: '#'
    },
    {
      title: 'Insurance Navigator Portal',
      description: 'Developed insurance comparison and secure payment system using Angular and ASP.NET Core Web API.',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      technologies: ['Angular', 'ASP.NET Core', 'Web API', 'Payment Integration'],
      githubLink: 'https://github.com/GopirajuAllam',
      liveLink: '#'
    },
    {
      title: 'Speech-to-Emotion Detection',
      description: 'Created ML models with TensorFlow and Librosa, boosting emotion recognition accuracy.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      technologies: ['Python', 'TensorFlow', 'Librosa', 'Machine Learning'],
      githubLink: 'https://github.com/GopirajuAllam',
      liveLink: '#'
    },
    {
      title: 'Employee Management System',
      description: 'Engineered Azure-based microservices for scalable employee data management.',
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      technologies: ['Azure', 'Microservices', '.NET Core', 'SQL Server'],
      githubLink: 'https://github.com/GopirajuAllam',
      liveLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <div className="w-20 h-1 bg-blue-600 mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-gray-800 rounded-md text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;