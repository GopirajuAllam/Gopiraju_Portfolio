import React from 'react';
import { Code, Server, Layout, Database, Cloud, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    {
      name: 'Languages & Frameworks',
      icon: <Code className="text-primary-400" size={32} />,
      description: 'C#, Python, Java, JavaScript (ES6+), ASP.NET Core, Angular, React.js, Vue.js, Node.js.',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      name: 'Cloud & DevOps',
      icon: <Cloud className="text-secondary-400" size={32} />,
      description: 'Azure, AWS, Docker, Kubernetes, Jenkins, Azure DevOps, CI/CD Pipelines.',
      color: 'from-purple-500/20 to-pink-500/20'
    },
    {
      name: 'Databases',
      icon: <Database className="text-emerald-400" size={32} />,
      description: 'SQL Server, PostgreSQL, MongoDB, Redis, Oracle, SSIS, SSRS.',
      color: 'from-emerald-500/20 to-teal-500/20'
    },
    {
      name: 'Architecture & Security',
      icon: <Server className="text-orange-400" size={32} />,
      description: 'Microservices, REST APIs, OAuth 2.0, JWT, Distributed Systems, SOLID Principles.',
      color: 'from-orange-500/20 to-amber-500/20'
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold font-heading mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
          >
            <p>
              I'm a passionate <span className="text-white font-bold">Full Stack Developer</span> with a Master's in Engineering (Computer Science) from Texas Tech University.
              Currently based in Lubbock, Texas, I specialize in building scalable web applications and enterprise solutions.
            </p>
            <p>
              With experience at <span className="text-primary-400 font-medium">Texas Tech University</span> and <span className="text-secondary-400 font-medium">Capgemini</span>, I've developed robust applications using modern technologies
              and best practices, focusing on security, performance, and user experience.
            </p>
            <p>
              I'm certified in <span className="text-white font-medium">Azure Fundamentals</span> and <span className="text-white font-medium">Agile Software Development</span>, constantly learning and adapting to new technologies
              and methodologies in the ever-evolving tech landscape.
            </p>

            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-bold text-white">Education</h3>
              <div className="glass p-4 rounded-xl border border-white/5">
                <h4 className="text-lg font-bold text-white">Master's of Engineering (Computer Science)</h4>
                <p className="text-primary-400">Texas Tech University</p>
                <p className="text-gray-500 text-sm">May 2025</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  Microsoft Certified: Azure Developer Associate
                </span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                  Microsoft Azure AI Essentials
                </span>
              </div>
            </div>

            <div className="pt-6">
              <a href="#contact" className="inline-flex items-center text-primary-400 font-medium hover:text-primary-300 transition-colors group">
                Let's work together
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;