import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Application Developer',
      company: 'Texas Tech University',
      location: 'Lubbock, Texas',
      period: 'Present',
      description: [
        'Developed internal applications using ASP.NET Core, Angular, and SQL Server',
        'Automated ETL processes via SSIS, cutting manual data handling by 20%',
        'Implemented OAuth 2.0 authentication and enhanced system security',
        'Built reusable HTML helper classes to improve UI consistency',
        'Integrated TouchNet payment systems ensuring PCI-DSS compliance'
      ],
      technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'OAuth 2.0', 'SSIS']
    },
    {
      title: 'Associate Consultant',
      company: 'Capgemini India',
      location: 'Hyderabad',
      period: 'Oct 2020 - Dec 2023',
      description: [
        'Delivered dashboard applications using ASP.NET Core Web API and Angular',
        'Developed secure REST APIs with JWT token-based authentication',
        'Built scheduled FTP-processing services and API data pipelines',
        'Designed Azure WebJobs to process Service Bus queues',
        'Connected ASP.NET MVC applications to Azure Functions'
      ],
      technologies: ['ASP.NET MVC', 'Azure', 'REST APIs', 'JWT', 'Angular']
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
        <div className="w-20 h-1 bg-blue-600 mb-12"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-gray-200">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600"></div>
              
              <div className="mb-2">
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <h4 className="text-lg font-semibold text-blue-600">{exp.company}</h4>
              </div>
              
              <div className="flex flex-wrap text-gray-600 mb-4">
                <div className="flex items-center mr-6 mb-2">
                  <MapPin size={16} className="mr-1" />
                  <span>{exp.location}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Calendar size={16} className="mr-1" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;