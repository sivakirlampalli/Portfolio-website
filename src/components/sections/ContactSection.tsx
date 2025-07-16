import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, ExternalLink, Calendar, Clock,  MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mailtoLink = `mailto:sivakirlampalli04@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}

Message:
${formData.message}
    `)}`;
    
    window.location.href = mailtoLink;
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "sivakirlampalli04@gmail.com",
      link: "mailto:sivakirlampalli04@gmail.com",
      color: "blue",
      description: "Best for detailed discussions"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9182153579",
      link: "tel:+919182153579",
      color: "green",
      description: "Available 9 AM - 6 PM IST"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "India",
      link: "#",
      color: "orange",
      description: "Open to remote opportunities"
    }
  ];

  const socialPlatforms = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      username: "sivasankarkirlampalli",
      link: "https://linkedin.com/in/sivasankarkirlampalli",
      color: "blue",
      description: "Professional networking"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      username: "sivakirlampalli",
      link: "https://github.com/sivakirlampalli",
      color: "gray",
      description: "Code repositories & projects"
    }
  ];

  const quickActions = [
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Schedule a Call",
      description: "Book a 30-minute discussion",
      action: () => window.open('mailto:sivakirlampalli04@gmail.com?subject=Schedule a Call', '_blank')
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "Quick Question",
      description: "Ask anything about my work",
      action: () => window.open('mailto:sivakirlampalli04@gmail.com?subject=Quick Question', '_blank')
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Project Inquiry",
      description: "Discuss collaboration opportunities",
      action: () => window.open('mailto:sivakirlampalli04@gmail.com?subject=Project Inquiry', '_blank')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Let's <span className="text-blue-400">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Why Work With Me?</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  <p><span className="text-blue-400 font-semibold">Full-Stack Expertise:</span> End-to-end development capabilities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                  <p><span className="text-orange-400 font-semibold">Data-Driven Solutions:</span> Analytics and insights integration</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                  <p><span className="text-purple-400 font-semibold">Innovation Focus:</span> Cutting-edge technologies and approaches</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p><span className="text-green-400 font-semibold">Proven Track Record:</span> SIH finalist with real-world impact</p>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white mb-6">Get In Touch</h4>
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className={`flex items-center space-x-4 p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-${method.color}-500/50 transition-all duration-300 hover:scale-105 group`}
                >
                  <div className={`bg-${method.color}-600/20 p-3 rounded-lg text-${method.color}-400 group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h5 className="text-white font-semibold">{method.title}</h5>
                    <p className="text-gray-300">{method.value}</p>
                    <p className="text-gray-400 text-sm">{method.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Quick Actions */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Quick Actions</h4>
              <div className="grid gap-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={action.action}
                    className="flex items-center space-x-4 p-4 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 text-left group"
                  >
                    <div className="bg-blue-600/20 p-2 rounded-lg text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {action.icon}
                    </div>
                    <div>
                      <h5 className="text-white font-medium">{action.title}</h5>
                      <p className="text-gray-400 text-sm">{action.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Social Platforms */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Connect on Social</h4>
              <div className="grid gap-4">
                {socialPlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                        {platform.icon}
                      </div>
                      <div>
                        <h5 className="text-white font-medium">{platform.title}</h5>
                        <p className="text-gray-400 text-sm">@{platform.username}</p>
                        <p className="text-gray-500 text-xs">{platform.description}</p>
                      </div>
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
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address *
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
                <label htmlFor="company" className="block text-white font-medium mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  placeholder="Your company name (optional)"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors duration-200"
                >
                  <option value="">Select a subject</option>
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Technical Discussion">Technical Discussion</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project, opportunity, or question. I'd love to hear from you!"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-600/25 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;