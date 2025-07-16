import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">
              <span className="text-blue-400">Siva</span>Sankar
            </div>
            <p className="text-gray-400 leading-relaxed">
              Software Engineer passionate about building innovative solutions and turning ideas into reality.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/sivakirlampalli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/sivasankarkirlampalli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:sivakirlampalli04@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Experience', href: '#experience' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>sivakirlampalli04@gmail.com</p>
              <p>+91 9182153579</p>
              <p>India</p>
            </div>
            <a
              href="/Siva-Kirlampalli-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-center md:text-left">
            <p>© 2024 Kirlampalli Siva Sankar. All rights reserved.</p>
            <p className="flex items-center justify-center md:justify-start space-x-1 mt-1">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>using React & Tailwind CSS</span>
            </p>
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;