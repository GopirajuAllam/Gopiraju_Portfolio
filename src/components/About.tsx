import React from 'react';
import { Code, Server, Layout, Database } from 'lucide-react';

const About = () => {
  const skills = [
    { 
      name: 'Frontend Development', 
      icon: <Layout className="text-blue-600" size={24} />, 
      description: 'Expertise in Angular, React.js, TypeScript, and responsive design with modern frameworks.' 
    },
    { 
      name: 'Backend Development', 
      icon: <Server className="text-blue-600" size={24} />, 
      description: 'Proficient in .NET Core, ASP.NET MVC, Spring Boot, and building secure REST APIs.' 
    },
    { 
      name: 'Database Management', 
      icon: <Database className="text-blue-600" size={24} />, 
      description: 'Experience with SQL Server, PostgreSQL, MySQL, Redis, and MongoDB.' 
    },
    { 
      name: 'Cloud & DevOps', 
      icon: <Code className="text-blue-600" size={24} />, 
      description: 'Skilled in AWS, Azure, GCP, Jenkins, Docker, and Kubernetes deployments.' 
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <div className="w-20 h-1 bg-blue-600 mb-8"></div>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              I'm a passionate Full Stack Developer with a Master's in Engineering (Computer Science) from Texas Tech University. 
              Currently based in Lubbock, Texas, I specialize in building scalable web applications and enterprise solutions.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              With experience at Texas Tech University and Capgemini, I've developed robust applications using modern technologies
              and best practices, focusing on security, performance, and user experience.
            </p>
            <p className="text-lg text-gray-700">
              I'm certified in Azure Fundamentals and Agile Software Development, constantly learning and adapting to new technologies
              and methodologies in the ever-evolving tech landscape.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">{skill.icon}</div>
                  <div>
                    <h4 className="font-medium text-lg">{skill.name}</h4>
                    <p className="text-gray-600">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;