import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Application Developer',
      company: 'Texas Tech University',
      location: 'Lubbock, Texas',
      period: 'Jan 2024 - May 2025',
      description: [
      '• Architected and launched a full-stack academic portal for 45,000+ students. The new system handled 10,000+ concurrent users during peak registration, improving page load times by 50% over the legacy platform.', 'Developed fault-tolerant Java microservices, containerized with Docker and orchestrated on AWS EKS', 
'Engineered responsive UI dashboards with Angular, HTML5, and CSS3 for real-time student performance.', 'Automated 20+ ETL jobs using Python and Apache Airflow, eliminating 15 hours of manual data processing per week and improving data refresh frequency from weekly to daily.',  'Designed CI/CD pipelines using GitHub Actions, with support for automated rollback and versioning.',
'Delivered reporting tools using Python (Pandas/Matplotlib), replacing Excel VBA-based analyzztics',
'Implemented Infrastructure as Code using Ansible, reducing the time to provision new development environments',
'Conducted system profiling and fine-tuned Java-based APIs for millisecond-level latency under production load',
      ],
      technologies: ['Java', 'Spring Boot', 'SQL Server', 'OAuth 2.0', 'AWS', 'Python', 'ETL']
    },
    {
      title: 'Associate Consultant',
      company: 'Capgemini India',
      location: 'Hyderabad',
      period: 'Oct 2020 - Dec 2023',
      description: [
       'Delivered scalable insurance platforms for PnL and Auto line of business, improving claims processing and policy management efficiency used by 10 Million+ customers.', 'Architected and developed high-availability insurance portals using Java and J2EE frameworks including Servlets, JSP, JDBC and SQL Server for enterprise insurance clients.', 'Developed a suite of 25+ RESTful microservices in Java, which served as the backbone for the new platform and improved system modularity, allowing for independent team development and deployment.', 'Implemented robust security controls using session management and OAuth 2.0, successfully eliminating 100% of previously identified OWASP Top 10 vulnerabilities in penetration testing.', 'Designed and deployed web applications in containerized environments using Docker and Kubernetes, ensuring consistent runtime behavior across development, staging, and production.', 'Designed and optimized SQL and NoSQL databases to support real-time reporting and large-scale data ingestion.','Automated REST API and UI testing using REST Assured and Selenium to ensuring no pre-deployement bugs.','Applied design patterns such as Singleton, Factory, and DAO to promote code reusability and maintainability.','Led cross-functional design sessions, conducted peer code reviews, and continuously improved engineering processes.','Contributed to migrating legacy systems monolithic Java applications towards microservice-based architectures.',
      ],
      technologies: ['Java', 'AWS', 'No SQL', 'Spring', 'Angular', 'Docker', 'Kubernetes']
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