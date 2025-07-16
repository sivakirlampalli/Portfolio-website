import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const FloatingSocial = () => {
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/sivakirlampalli",
      label: "GitHub",
      color: "hover:bg-gray-700"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/sivasankarkirlampalli",
      label: "LinkedIn",
      color: "hover:bg-blue-600"
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:sivakirlampalli04@gmail.com",
      label: "Email",
      color: "hover:bg-red-600"
    }
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col space-y-4">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
          rel={link.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
          className={`bg-gray-800/80 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 ${link.color} shadow-lg hover:shadow-xl group`}
          aria-label={link.label}
        >
          <div className="group-hover:animate-pulse">
            {link.icon}
          </div>
        </a>
      ))}
    </div>
  );
};

export default FloatingSocial;