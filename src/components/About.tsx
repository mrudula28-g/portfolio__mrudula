import React from 'react';
import { Code2, Lightbulb, Target, Zap } from 'lucide-react';

const About = () => {
  const qualities = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Strong Foundation",
      description: "Solid understanding of programming fundamentals and computer science principles"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Quick Learner",
      description: "Passionate about learning new technologies and adapting to industry trends"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Analytical mindset with a focus on finding efficient and elegant solutions"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Highly Motivated",
      description: "Eager to contribute to meaningful projects and grow as a developer"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As a recent Computer Science graduate, I bring a fresh perspective and strong 
                technical foundation to software development. My academic journey has equipped 
                me with solid programming skills in <strong>C, Python and Java</strong>, along 
                with a deep understanding of algorithms, data structures, and software engineering principles.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I am highly motivated and passionate about learning new technologies. My interests 
                span across web development, problem-solving, and automation testing. I thrive on 
                challenges and am always eager to expand my skill set to stay current with industry trends.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm actively seeking opportunities to contribute to innovative tech solutions and 
                grow as a software developer in a collaborative team environment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {qualities.map((quality, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-blue-600 mb-3">
                    {quality.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {quality.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {quality.description}
                  </p>
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