import { useEffect, useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, MapPin, Sparkles } from 'lucide-react';

const HomeSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Software Engineer",
    "Full Stack Developer", 
    "Data Analyst",
    "Problem Solver"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "8.68", label: "CGPA", color: "text-blue-400" },
    { value: "SIH", label: "Finalist", color: "text-orange-400" },
    { value: "RF", label: "Scholar", color: "text-purple-400" },
    { value: "10+", label: "Projects", color: "text-green-400" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Location Badge */}
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
              <MapPin size={16} className="text-blue-400" />
              <span className="text-gray-300">Based in India</span>
              <Sparkles size={16} className="text-orange-400 animate-pulse" />
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
                  Siva Kirlampalli
                </span>
              </h1>
              
              {/* Animated Role */}
              <div className="text-2xl lg:text-3xl text-gray-300 h-12 flex items-center">
                <span className="mr-3">I'm a</span>
                <span className="bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent font-bold transition-all duration-500">
                  {roles[currentRole]}
                </span>
              </div>

              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Transforming complex challenges into elegant digital solutions. 
                Passionate about building scalable applications, analyzing data for insights, 
                and creating technology that makes a real impact.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-6 py-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-3xl font-bold ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => window.open('/Siva-Kirlampalli-Resume.pdf', '_blank')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-600/25 flex items-center space-x-2"
              >
                <Download size={20} />
                <span>View Resume</span>
              </button>
              
              <a
                href="https://github.com/sivakirlampalli"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:bg-gray-800 flex items-center space-x-2"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              
              <a
                href="https://linkedin.com/in/sivasankarkirlampalli"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:bg-gray-800 flex items-center space-x-2"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Call to Action */}
            <div className="flex items-center space-x-3 text-gray-400 animate-bounce">
              <span className="text-sm">Explore my work</span>
              <ArrowRight size={16} />
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Profile Image */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-600/30 shadow-2xl hover:scale-105 transition-transform duration-300 relative">
                <img
                  src="/Profile.jpg"
                  alt="Kirlampalli Siva Sankar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-40 animate-pulse delay-1000"></div>
              
              {/* Tech Stack Badges */}
              <div className="absolute -left-8 top-1/4 bg-gray-800/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700 animate-pulse">
                <span className="text-blue-400 text-sm font-medium">React.js</span>
              </div>
              <div className="absolute -right-8 top-1/2 bg-gray-800/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700 animate-pulse delay-500">
                <span className="text-orange-400 text-sm font-medium">Python</span>
              </div>
              <div className="absolute -left-12 bottom-1/4 bg-gray-800/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700 animate-pulse delay-1000">
                <span className="text-green-400 text-sm font-medium">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;