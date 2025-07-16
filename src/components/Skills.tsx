import { Code, Database, Cloud, Shield, BarChart3, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      color: "blue",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "C", "C++"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Frameworks & Tools",
      color: "orange",
      skills: ["React.js", "Node.js", "Express.js", "Spring Boot", "REST APIs", "JSP"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Databases & Storage",
      color: "purple",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "Firebase"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Technologies & Platforms",
      color: "green",
      skills: ["Git", "VS Code", "Docker", "AWS", "Vercel", "Netlify"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data & Analytics",
      color: "pink",
      skills: ["Power BI", "Excel", "Data Visualization", "Statistical Analysis"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Domains",
      color: "indigo",
      skills: ["Web Development", "Data Science", "Cyber Security", "Full Stack Development"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-600 to-blue-400 border-blue-500/30 hover:border-blue-400/50",
      orange: "from-orange-600 to-orange-400 border-orange-500/30 hover:border-orange-400/50",
      purple: "from-purple-600 to-purple-400 border-purple-500/30 hover:border-purple-400/50",
      green: "from-green-600 to-green-400 border-green-500/30 hover:border-green-400/50",
      pink: "from-pink-600 to-pink-400 border-pink-500/30 hover:border-pink-400/50",
      indigo: "from-indigo-600 to-indigo-400 border-indigo-500/30 hover:border-indigo-400/50"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications and solving complex problems
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 group ${getColorClasses(category.color)}`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`bg-gradient-to-r ${getColorClasses(category.color)} p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-700/50 rounded-lg px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-600/50 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16 bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: "JavaScript/TypeScript", level: 90, color: "blue" },
              { skill: "React.js", level: 85, color: "orange" },
              { skill: "Python", level: 88, color: "green" },
              { skill: "Java", level: 82, color: "purple" }
            ].map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{item.skill}</span>
                  <span className="text-gray-400 text-sm">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${getColorClasses(item.color)} h-2 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;