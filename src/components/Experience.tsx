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
      'Contributed to developing internal web applications using ASP.NET Core, Angular, JavaScript, and HTML; Utilized Entity Framework for performing CRUD operations over SQL Server databases' ,
      'Designed and implemented an SSIS package to automate ETL processes for CSV and Excel flat files, improving operational efficiency by 20\% through streamlined data cleansing, filtering, and aggregation',
      'Improved database performance by normalizing tables and implementing stored procedures for efficient data retrieval',
      'Developed and implemented OAuth 2.0 authentication and authorization, ensuring application security',
      'Created HTML helper classes to modularize view rendering, simplifying front-end development',
      'Assisted in deploying applications to IIS and managing client certificates for secure communication',
      'Integrated the TouchNet payment gateway, enabling secure and seamless payment processing for users',
      'Implemented robust forms authentication to safeguard the application against unauthorized access',
      ],
      technologies: ['ASP.NET Core', 'Angular', 'SQL Server', 'OAuth 2.0', 'SSIS']
    },
    {
      title: 'Associate Consultant',
      company: 'Capgemini India',
      location: 'Hyderabad',
      period: 'Oct 2020 - Dec 2023',
      description: [
       'Designed and implemented a single-page reporting and dashboard application using ASP.NET Core and Angular',
      'Developed ASP.NET Web APIs providing RESTful services secured by JWT-based authentication',
      'Created stored procedures, triggers, and views in MS SQL Server to handle data manipulation and enforce business rules',
      'Built SSRS packages to automate detailed report generation, significantly improving reporting efficiency',
      'Integrated an ASP.NET MVC application with Azure Functions via Azure Service Bus Queues for seamless backend processing',
      'Developed a scheduled console application using ASP.NET, Task Scheduler, and FTP integration, optimizing file processing workflows',
      'Built responsive web applications using ASP.NET MVC, HTML, CSS, JavaScript, and SQL',
      'Improved landing page performance by 30\% by leveraging asynchronous programming and Ajax',
      'Developed a Windows Service for address standardization using the SmartyStreet API, enhancing data quality',
      'Deployed a WebJob in Azure to reliably process Service Bus queue records, improving system efficiency',
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