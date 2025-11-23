import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Engineer',
      company: 'PeaceHealth',
      location: 'Remote, Texas',
      period: 'June 2024 - Present',
      description: [
        'Designed and deployed ASP.NET Core microservices for appointment scheduling, patient record management, and virtual consultations, resulting in a 30% improvement in API throughput.',
        'Developed interactive Pharmacy Benefit Manager (PBM) dashboards using Angular 14, React.js, Bootstrap, and TypeScript, enabling real-time visualization of hospital KPIs.',
        'Implemented CI/CD pipelines using GitHub Actions and Azure DevOps, reducing deployment times by 40%.',
        'Built web interfaces using JavaScript ES6+, HTML5, CSS3; performed CRUD operations using Entity Framework.',
        'Implemented and maintained Redis-based caching to reduce service load and improve performance for high-traffic API endpoints.',
        'Automated ETL workflows using SSIS to import and clean data from CSV/Excel, reducing manual work by 20%.',
        'Improved MS SQL Server performance by normalizing database schema and optimizing stored procedures.',
        'Implemented secure OAuth 2.0 and JWT-based authentication/authorization using ASP.NET Identity and Azure API Management.',
        'Automated system administration tasks using PowerShell scripts, enhancing process efficiency by 40%.',
        'Developed unit and integration tests using xUnit and Moq for .NET APIs, and Jasmine/Karma for Angular components, achieving 85%+ test coverage.'
      ],
      technologies: ['ASP.NET Core', 'Angular 14', 'React.js', 'Azure DevOps', 'Redis', 'SSIS']
    },
    {
      title: 'Associate Consultant',
      company: 'Capgemini',
      location: 'Hyderabad, India',
      period: 'Oct 2020 - Nov 2023',
      description: [
        'Architected and deployed ASP.NET Core 8 and .NET Framework 4.7 microservices for insurance, billing, and order management systems, processing 5K+ requests/min.',
        'Delivered large-scale insurance platforms (PnL, Auto lines) improving policy and claims management for 1M+ users.',
        'Built GraphQL endpoints using Hot Chocolate GraphQL for .NET alongside traditional REST APIs to offer flexible querying.',
        'Built customer portals using Angular, ReactJS, Bootstrap, and Vue.js, improving user experience and engagement.',
        'Designed and optimized T-SQL databases performance to support real-time reporting and large-scale data ingestion.',
        'Containerized .NET services using Docker and deployed to AWS EC2, Azure App Services, and Azure Kubernetes Service (AKS).',
        'Ensured code quality and API reliability using SonarQube scans, Postman test automation, and Swagger/OpenAPI validation.',
        'Worked with Kafka and Elastic Stack for log aggregation and real-time data streaming for claims processing.',
        'Implemented TypeScript in Angular applications for type safety and better code maintenance.'
      ],
      technologies: ['ASP.NET Core', 'GraphQL', 'Docker', 'Kubernetes', 'AWS', 'Kafka']
    },
    {
      title: 'Full Stack .NET Developer',
      company: 'ICICI Bank',
      location: 'Remote, India',
      period: 'July 2019 - June 2020',
      description: [
        'Developed multi-tenant SaaS insurance platforms using ASP.NET, C#, Oracle servers and AWS cloud services.',
        'Developed real-time, responsive web applications using Blazor WebAssembly with SignalR and .NET Core.',
        'Designed and optimized PL/SQL and MongoDB (NoSQL) databases to handle high-volume banking transactions.',
        'Integrated Active Directory, SSO, SAML, JWT and OAuth for secure authentication across distributed systems.',
        'Used AWS CloudWatch and Serilog for custom dashboards, monitoring application health and performance.',
        'Used SQL Server Reporting Services (SSRS) for generating various invoices and cover pages.'
      ],
      technologies: ['ASP.NET', 'Blazor', 'SignalR', 'Oracle', 'AWS', 'MongoDB']
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold font-heading mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-0 mb-12 last:mb-0 group"
            >
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 group-last:bottom-auto group-last:h-full"></div>

              <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-950 -translate-x-[5px] md:-translate-x-1/2 mt-1.5 z-10 shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>

                <div className="md:w-[45%] mb-8 md:mb-0">
                  <div className="glass p-6 rounded-xl border border-white/5 hover:border-primary-500/30 transition-colors relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 rounded-l-xl opacity-50"></div>

                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <h4 className="text-lg font-medium text-primary-400 flex items-center gap-2">
                        <Briefcase size={16} />
                        {exp.company}
                      </h4>
                    </div>

                    <div className="flex flex-wrap text-gray-400 mb-6 text-sm gap-4">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 text-gray-300 mb-6 text-sm">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 text-primary-300 rounded-full text-xs font-medium border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="md:w-[45%]"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;