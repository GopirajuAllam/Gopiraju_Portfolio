import React from 'react';
import { ArrowRight, Code, Database, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 font-medium mb-6"
          >
            👋 Welcome to my portfolio
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Gopiraju Allam</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-8 flex items-center">
            <span className="mr-2">I build</span>
            <span className="text-white">Full Stack Solutions</span>
          </h2>

          <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
            With over 5+ years of experience, I craft robust web applications using modern technologies.
            Specializing in scalable microservices, cloud integrations, and intuitive user interfaces.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-medium flex items-center transition-colors shadow-lg shadow-primary-600/20"
            >
              Contact Me <ArrowRight className="ml-2" size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="glass text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-colors"
            >
              View Projects
            </motion.a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-gray-500">
            <div className="flex items-center gap-2">
              <Code size={20} className="text-primary-400" />
              <span>Frontend</span>
            </div>
            <div className="flex items-center gap-2">
              <Database size={20} className="text-secondary-400" />
              <span>Backend</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={20} className="text-blue-400" />
              <span>Cloud</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center relative z-10"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-3xl opacity-20 animate-pulse" />
            <motion.div
              whileHover={{ scale: 1.02, rotate: 2 }}
              className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl glass p-2"
            >
              <img
                src={profileImage}
                alt="Gopiraju Allam"
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 glass p-4 rounded-xl border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="bg-primary-500/20 p-2 rounded-lg">
                  <Code className="text-primary-400" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Experience</p>
                  <p className="text-lg font-bold text-white">5+ Years</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute -top-6 -right-6 glass p-4 rounded-xl border border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="bg-secondary-500/20 p-2 rounded-lg">
                  <Database className="text-secondary-400" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Projects</p>
                  <p className="text-lg font-bold text-white">5+ Done</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;