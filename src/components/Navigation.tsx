import React from 'react';
import { Home, User, Code, Briefcase, Trophy, Mail, Download, Github, Linkedin } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'about', label: 'About', icon: <User size={20} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={20} /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase size={20} /> },
    { id: 'experience', label: 'Experience', icon: <Trophy size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> }
  ];

  const handleResumeView = () => {
    // Open the actual PDF resume file
    window.open('/Siva-Kirlampalli-Resume.pdf', '_blank');
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <span className="text-blue-400">Siva</span>Sankar
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handleResumeView}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <Download size={16} />
              <span>Resume</span>
            </button>
            <a
              href="https://github.com/sivakirlampalli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/sivasankarkirlampalli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-lg"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;