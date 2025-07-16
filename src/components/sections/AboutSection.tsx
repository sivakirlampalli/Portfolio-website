import { GraduationCap, Award, Trophy, Star, Target, Lightbulb, Code, Database } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Academic Excellence",
      subtitle: "CGPA 8.95",
      description: "Computer Science Engineering at Vishnu Institute of Technology",
      color: "blue"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "SIH Finalist",
      subtitle: "National Recognition",
      description: "Smart India Hackathon 2024 - Led team of 6 developers",
      color: "orange"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "RF Scholar",
      subtitle: "Leadership Award",
      description: "Reliance Foundation Scholar for excellence",
      color: "purple"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Certified Developer",
      subtitle: "Industry Ready",
      description: "AICTE Full Stack Development Certification",
      color: "green"
    }
  ];

  const passions = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Building end-to-end applications with modern frameworks"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Science",
      description: "Extracting insights from complex datasets"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Creating innovative solutions for real-world challenges"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Exploring cutting-edge technologies and methodologies"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-600 to-blue-400 border-blue-500/30 hover:border-blue-400/50",
      orange: "from-orange-600 to-orange-400 border-orange-500/30 hover:border-orange-400/50",
      purple: "from-purple-600 to-purple-400 border-purple-500/30 hover:border-purple-400/50",
      green: "from-green-600 to-green-400 border-green-500/30 hover:border-green-400/50"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A passionate developer who believes in the power of technology to transform ideas into reality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Story Section */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-6">My Journey</h3>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a Computer Science undergraduate at <span className="text-blue-400 font-semibold">Vishnu Institute of Technology (Autonomous)</span>, 
                  where I've maintained a stellar CGPA of 8.95 while diving deep into the world of software development.
                </p>
                <p>
                  My passion lies in creating <span className="text-orange-400 font-semibold">full-stack applications</span> that solve real-world problems, 
                  analyzing complex datasets to extract meaningful insights, and building systems that scale efficiently.
                </p>
                <p>
                  What drives me is the intersection of <span className="text-purple-400 font-semibold">innovation and impact</span> – 
                  I believe every line of code should contribute to making the world a little bit better.
                </p>
              </div>
            </div>

            {/* What I'm Passionate About */}
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h4 className="text-2xl font-bold text-white mb-6">What Drives Me</h4>
              <div className="grid grid-cols-1 gap-4">
                {passions.map((passion, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                    <div className="text-blue-400 mt-1">
                      {passion.icon}
                    </div>
                    <div>
                      <h5 className="text-white font-semibold mb-1">{passion.title}</h5>
                      <p className="text-gray-400 text-sm">{passion.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white text-center mb-8">Key Achievements</h3>
            <div className="grid grid-cols-1 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border transition-all duration-300 hover:scale-105 group ${getColorClasses(achievement.color)}`}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`bg-gradient-to-r ${getColorClasses(achievement.color)} p-4 rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                      <p className="text-blue-400 font-semibold mb-3">{achievement.subtitle}</p>
                      <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Highlight */}
        <div className="mt-16 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Education</h3>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-600 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600/20 p-4 rounded-xl">
                    <GraduationCap className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">Bachelor of Technology</h4>
                    <p className="text-blue-400 font-semibold text-lg">Computer Science Engineering</p>
                    <p className="text-gray-300">Vishnu Institute of Technology (Autonomous)</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full font-bold text-lg mb-2">
                    CGPA: 8.95
                  </div>
                  <p className="text-gray-400">2022 - 2026</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400 mb-2">Top 10%</div>
                  <div className="text-sm text-gray-400">Class Ranking</div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-orange-400 mb-2">4 Years</div>
                  <div className="text-sm text-gray-400">Program Duration</div>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-2">CSE</div>
                  <div className="text-sm text-gray-400">Specialization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;