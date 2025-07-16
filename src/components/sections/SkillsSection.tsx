import { useState } from 'react';
import { Code, Database, Cloud, Shield, BarChart3, Wrench, ChevronRight } from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      color: "blue",
      skills: [
        { name: "Python", level: 90, description: "Data analysis, automation, web development" },
        { name: "JavaScript", level: 88, description: "Frontend/backend development, React, Node.js" },
        { name: "TypeScript", level: 85, description: "Type-safe JavaScript development" },
        { name: "Java", level: 82, description: "Enterprise applications, Spring Boot" },
        { name: "SQL", level: 87, description: "Database queries, optimization" },
        { name: "C/C++", level: 75, description: "System programming, algorithms" }
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Frameworks & Libraries",
      color: "orange",
      skills: [
        { name: "React.js", level: 90, description: "Component-based UI development" },
        { name: "Node.js", level: 85, description: "Server-side JavaScript runtime" },
        { name: "Express.js", level: 83, description: "Web application framework" },
        { name: "Spring Boot", level: 80, description: "Java enterprise framework" },
        { name: "REST APIs", level: 88, description: "API design and development" },
        { name: "JSP", level: 75, description: "Java web pages" }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Databases & Storage",
      color: "purple",
      skills: [
        { name: "MySQL", level: 85, description: "Relational database management" },
        { name: "MongoDB", level: 80, description: "NoSQL document database" },
        { name: "PostgreSQL", level: 78, description: "Advanced relational database" },
        { name: "Redis", level: 70, description: "In-memory data structure store" },
        { name: "Firebase", level: 75, description: "Real-time database platform" }
      ]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Tools & Platforms",
      color: "green",
      skills: [
        { name: "Git", level: 88, description: "Version control system" },
        { name: "Docker", level: 75, description: "Containerization platform" },
        { name: "AWS", level: 70, description: "Cloud computing services" },
        { name: "VS Code", level: 92, description: "Code editor and IDE" },
        { name: "Vercel", level: 85, description: "Deployment platform" },
        { name: "Netlify", level: 83, description: "Web hosting platform" }
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data & Analytics",
      color: "pink",
      skills: [
        { name: "Power BI", level: 85, description: "Business intelligence tool" },
        { name: "Excel", level: 88, description: "Data analysis and visualization" },
        { name: "Data Visualization", level: 82, description: "Charts, graphs, dashboards" },
        { name: "Statistical Analysis", level: 78, description: "Data interpretation" }
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Specializations",
      color: "indigo",
      skills: [
        { name: "Web Development", level: 90, description: "Full-stack web applications" },
        { name: "Data Science", level: 80, description: "Data analysis and insights" },
        { name: "Cyber Security", level: 75, description: "Security best practices" },
        { name: "API Development", level: 85, description: "RESTful service design" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-600 to-blue-400 border-blue-500/30 hover:border-blue-400/50 bg-blue-600/10",
      orange: "from-orange-600 to-orange-400 border-orange-500/30 hover:border-orange-400/50 bg-orange-600/10",
      purple: "from-purple-600 to-purple-400 border-purple-500/30 hover:border-purple-400/50 bg-purple-600/10",
      green: "from-green-600 to-green-400 border-green-500/30 hover:border-green-400/50 bg-green-600/10",
      pink: "from-pink-600 to-pink-400 border-pink-500/30 hover:border-pink-400/50 bg-pink-600/10",
      indigo: "from-indigo-600 to-indigo-400 border-indigo-500/30 hover:border-indigo-400/50 bg-indigo-600/10"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Technical <span className="text-blue-400">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for building modern, scalable applications and solving complex problems
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6">Skill Categories</h3>
              <div className="space-y-2">
                {skillCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(index)}
                    className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-300 text-left ${
                      activeCategory === index
                        ? `bg-gradient-to-r ${getColorClasses(category.color)} text-white shadow-lg`
                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <div className={activeCategory === index ? 'text-white' : 'text-gray-400'}>
                      {category.icon}
                    </div>
                    <span className="font-medium flex-1">{category.title}</span>
                    <ChevronRight 
                      size={16} 
                      className={`transition-transform duration-300 ${
                        activeCategory === index ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`bg-gradient-to-r ${getColorClasses(skillCategories[activeCategory].color)} p-3 rounded-xl text-white`}>
                  {skillCategories[activeCategory].icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{skillCategories[activeCategory].title}</h3>
              </div>

              <div className="space-y-6">
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-900/50 rounded-xl p-6 border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-bold text-white">{skill.name}</h4>
                      <span className="text-blue-400 font-medium">{skill.level}%</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${getColorClasses(skillCategories[activeCategory].color)} h-3 rounded-full transition-all duration-1000 ease-out relative`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { label: "Languages Mastered", value: "5+", color: "blue" },
            { label: "Frameworks Used", value: "4+", color: "orange" },
            { label: "Projects Completed", value: "5+", color: "purple" },
            { label: "Hackathons", value: "SIH Finalist", color: "orange" }

          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-${stat.color}-500/50 transition-all duration-300 hover:scale-105 text-center`}
            >
              <div className={`text-3xl font-bold text-${stat.color}-400 mb-2`}>{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;