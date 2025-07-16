
import { ArrowRight, Download, Github, Linkedin, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-400 font-medium">
                <MapPin size={16} />
                <span>Based in India</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent">
                  Kirlampalli Siva Sankar
                </span>
              </h1>
              <div className="text-xl lg:text-2xl text-gray-300 space-y-2">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    Software Engineer
                  </span>
                  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
                    Full Stack Developer
                  </span>
                  <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                    Data Analyst
                  </span>
                </div>
              </div>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                Turning real-world challenges into impactful digital solutions. 
                Passionate about building scalable applications and extracting insights from data 
                to drive innovation and business growth.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">8.95</div>
                <div className="text-sm text-gray-400">CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">SIH</div>
                <div className="text-sm text-gray-400">Finalist</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">RF</div>
                <div className="text-sm text-gray-400">Scholar</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/Siva-Kirlampalli-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 hover:scale-105 shadow-lg hover:shadow-blue-600/25"
              >
                <Download size={20} />
                <span>View Resume</span>
              </a>
              <a
                href="https://github.com/sivakirlampalli"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 hover:scale-105 hover:bg-gray-800"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/sivasankarkirlampalli"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 hover:scale-105 hover:bg-gray-800"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="flex items-center space-x-2 text-gray-400 animate-bounce">
              <span className="text-sm">Explore my work</span>
              <ArrowRight size={16} />
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-600/30 shadow-2xl hover:scale-105 transition-transform duration-300">
                <img
                  src="/Peofile.jpg"
                  alt="Kirlampalli Siva Sankar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-xl opacity-40 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;