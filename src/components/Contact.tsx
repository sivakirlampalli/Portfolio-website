import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    const mailtoLink = `mailto:sivakirlampalli04@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "sivakirlampalli04@gmail.com",
      link: "mailto:sivakirlampalli04@gmail.com",
      color: "blue"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9182153579",
      link: "tel:+919182153579",
      color: "green"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "India",
      link: "#",
      color: "orange"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      username: "sivasankarkirlampalli",
      link: "https://linkedin.com/in/sivasankarkirlampalli",
      color: "blue"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      username: "sivakirlampalli",
      link: "https://github.com/sivakirlampalli",
      color: "gray"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, innovative projects, and potential collaborations. 
                Whether you're looking for a full-stack developer, data analyst, or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className={`bg-${info.color}-600/20 p-3 rounded-lg text-${info.color}-400 group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{info.title}</h4>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group flex-1"
                  >
                    <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <div>
                      <h5 className="text-white font-medium">{social.title}</h5>
                      <p className="text-gray-400 text-sm">@{social.username}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                    placeholder="your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  placeholder="Project Discussion / Job Opportunity / Collaboration"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-600/25 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;