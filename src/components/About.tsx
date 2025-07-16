
import { GraduationCap, Award, Trophy, Star } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "CGPA 8.95",
      description: "Computer Science Engineering"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "SIH Finalist",
      description: "Smart India Hackathon 2024"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "RF Scholar",
      description: "Reliance Foundation Scholar"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Full Stack",
      description: "AICTE Certified Developer"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a Computer Science undergraduate at <span className="text-blue-400 font-medium">Vishnu Institute of Technology (Autonomous)</span>, 
                passionate about building full-stack applications, working with real-world data, and solving impactful problems through innovation and code.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in technology spans across web development, data science, and cybersecurity. 
                I believe in creating solutions that not only solve problems but also provide exceptional user experiences 
                and drive meaningful business outcomes.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">What drives me:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Building scalable and efficient web applications</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Extracting insights from complex datasets</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Contributing to open-source projects</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Continuous learning and skill development</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{achievement.title}</h4>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16 bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Education</h3>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white">Bachelor of Technology</h4>
                  <p className="text-blue-400 font-medium">Computer Science Engineering</p>
                  <p className="text-gray-300">Vishnu Institute of Technology (Autonomous)</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-400">2022 - 2026</span>
                    <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      CGPA: 8.95
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;