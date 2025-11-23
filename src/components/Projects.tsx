import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Pharmacy Benefit Manager Dashboard',
      description: 'Interactive dashboards for real-time visualization of hospital KPIs, enhancing decision-making for administrators.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      technologies: ['Angular 14', 'React.js', 'TypeScript', 'Bootstrap'],
      githubLink: 'https://github.com/GopirajuAllam',
      liveLink: '#'
    },
    {
      title: 'Insurance & Billing Microservices',
      description: 'Scalable microservices architecture for insurance, billing, and order management, processing 5K+ requests/min.',
      image: 'https://images.pexels.com/photos/45189/pexels-photo-45189.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      technologies: ['ASP.NET Core', 'Docker', 'Kubernetes', 'Azure'],
      githubLink: 'https://github.com/GopirajuAllam',
      liveLink: '#'
    },
    {
      title: 'Patient Appointment System',
      description: 'Comprehensive system for appointment scheduling, patient records, and virtual consultations.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      technologies: ['ASP.NET Core', 'SQL Server', 'Microservices', 'Redis'],
      githubLink: 'https://github.com/GopirajuAllam',
      liveLink: '#'
    },
    {
      title: 'SaaS Insurance Platform',
      description: 'Multi-tenant insurance platform handling high-volume banking transactions with secure authentication.',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      technologies: ['ASP.NET', 'Oracle', 'AWS', 'OAuth 2.0'],
      githubLink: 'https://github.com/GopirajuAllam',
      liveLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold font-heading mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-dark-900 rounded-2xl overflow-hidden border border-white/5 hover:border-primary-500/30 transition-colors"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent z-10 opacity-60" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-8 relative z-20 -mt-20">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    <Github size={18} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;