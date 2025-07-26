import React from 'react';
import { Code, Wrench, Heart } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      skills: ["C", "Java (Basics)", "Python"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools/Technologies",
      skills: ["Git", "HTML", "CSS", "JavaScript (Basic)"]
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Interests",
      skills: ["Web Development", "Problem-Solving", "Automation Testing"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Core competencies and areas of interest
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg text-center font-medium hover:bg-blue-100 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Currently Learning
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["React", "Node.js", "Database Management", "Software Testing", "DevOps Basics", "Data Structures & Algorithms"].map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium border border-blue-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;