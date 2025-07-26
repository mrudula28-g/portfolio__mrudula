import React from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Automated Emerging Cyber-threat Identification and Profiling based on NLP",
      description: "Developed a system that uses Twitter and MITRE ATT&CK to identify, profile, and assess threats, achieving 77.7% F1 accuracy in profiling. The identified threat filtered and classified by NLP and alarm generation based on the threat's risk.",
      technologies: ["Python", "NLP", "Machine Learning", "Twitter API", "MITRE ATT&CK"],
      githubUrl: "https://github.com/mrudula28-g/final_project",
      highlights: ["77.7% F1 Accuracy", "NLP-based Classification", "Threat Risk Assessment", "Real-time Monitoring"]
    },
    {
      title: "Visitors Management System",
      description: "A comprehensive visitors management system developed using full stack Python. Features visitor registration, check-in/check-out tracking, and administrative dashboard for monitoring visitor activities.",
      technologies: ["Python", "Flask/Django", "SQLite", "HTML/CSS", "JavaScript"],
      githubUrl: "https://github.com/mrudula28-g/Visitor-s-Management-System",
      highlights: ["Visitor Registration", "Check-in/Check-out System", "Admin Dashboard", "Database Integration"]
    },
    {
      title: "Simple Calculator Web App",
      description: "A responsive web-based calculator built with HTML, CSS, and JavaScript. Features a clean interface with basic arithmetic operations and keyboard support.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/mrudula28-g/calculator-application",
      highlights: ["Responsive Design", "Keyboard Support", "Clean UI"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Academic and personal projects showcasing my programming skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:gap-3 transition-all"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">More projects coming soon as I continue learning and building!</p>
            <a
              href="https://github.com/mrudulagattupalli"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;