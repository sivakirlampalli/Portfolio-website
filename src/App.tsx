import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSectionChange = (section: string) => {
    if (section === activeSection) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(section);
      setIsTransitioning(false);
    }, 150);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomeSection />;
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const currentIndex = sections.indexOf(activeSection);
      
      if (e.key === 'ArrowRight' && currentIndex < sections.length - 1) {
        handleSectionChange(sections[currentIndex + 1]);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        handleSectionChange(sections[currentIndex - 1]);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden">
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      {/* Main Content */}
      <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {renderActiveSection()}
      </div>

      {/* Section Indicator */}
      <div className="fixed right-6 bottom-6 z-40 hidden lg:block">
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-full p-3 border border-gray-700">
          <div className="flex flex-col space-y-2">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => handleSectionChange(section)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section
                    ? 'bg-blue-400 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                title={section.charAt(0).toUpperCase() + section.slice(1)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Keyboard Navigation Hint */}
      <div className="fixed bottom-6 left-6 z-40 hidden lg:block">
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-3 border border-gray-700">
          <p className="text-gray-400 text-xs">
            Use ← → keys to navigate
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-gray-900/95 backdrop-blur-md border-t border-gray-800 py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <p className="w-full lg:w-auto">© 2024 Kirlampalli Siva Sankar. Crafted with innovation.</p>
            <p className="flex items-center space-x-1">
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;