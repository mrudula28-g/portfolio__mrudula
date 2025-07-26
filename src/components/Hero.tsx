import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Professional Image Placeholder */}
          <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-xl">
            <img 
              src="/profile.jpg" 
              alt="Mrudula Gattupalli" 
              className="w-44 h-44 rounded-full object-cover border-4 border-white"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            Aspiring Software Developer
          </h1>
          
          <div className="text-xl sm:text-2xl text-blue-600 font-semibold mb-2">
            Passionate About Problem-Solving & Clean Code
          </div>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Recent Computer Science Graduate | Eager to Contribute to Innovative Tech Solutions
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a 
              href="/Gattupalli_mrudula_Resume__.pdf" 
              download="Mrudula_Gattupalli_Resume.pdf"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            
            <button 
              onClick={scrollToContact}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://github.com/mrudula28-g" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-110 text-gray-700 hover:text-blue-600"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-110 text-gray-700 hover:text-blue-600"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:mrudulagattupalli@gmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all transform hover:scale-110 text-gray-700 hover:text-blue-600"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;