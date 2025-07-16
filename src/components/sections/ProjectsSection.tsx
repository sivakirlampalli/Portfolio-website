import React, { useState } from 'react';
import { ExternalLink, Github, Play, BarChart3, Globe, ShoppingCart, Shield, Filter, Star } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "Social Media Forensics Tool",
      description: "Advanced automation tool for digital forensics that extracts posts, captures screenshots, and generates structured PDF reports. Features intelligent data parsing and automated evidence collection.",
      icon: <Shield className="w-8 h-8" />,
      color: "blue",
      category: "security",
      tags: ["Python", "Automation", "PDF Generation", "Digital Forensics", "Data Extraction"],
      links: {
        demo: "https://youtu.be/ItLralGN0G4",
        github: "#"
      },
      image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      status: "Completed"
    },
    {
      title: "Interactive Expense Dashboard",
      description: "Comprehensive Power BI dashboard with advanced KPIs, interactive slicers, and real-time financial insights. Provides deep expense analysis with predictive analytics capabilities.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "orange",
      category: "analytics",
      tags: ["Power BI", "Data Visualization", "Analytics", "Dashboard", "Business Intelligence"],
      links: {
        demo: "https://github.com/sivakirlampalli/Powerbi-expense-tracker",
        github: "https://github.com/sivakirlampalli/Powerbi-expense-tracker"
      },
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: true,
      status: "Live"
    },
    {
      title: "Premium Travel Platform",
      description: "Fully responsive tourism website with immersive UI, advanced booking system, and seamless user experience. Features destination showcases and integrated payment processing.",
      icon: <Globe className="w-8 h-8" />,
      color: "green",
      category: "web",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
      links: {
        demo: "https://sivakirlampalli.github.io/Travel/",
        github: "https://github.com/sivakirlampalli/Travel"
      },
      image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      status: "Live"
    },
    {
      title: "Smart Item Management",
      description: "Modern React.js application with advanced CRUD operations, image upload functionality, and efficient localStorage integration. Features real-time updates and intuitive interface.",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "purple",
      category: "web",
      tags: ["React.js", "JavaScript", "LocalStorage", "CRUD", "Modern UI"],
      links: {
        demo: "https://amrr-react.vercel.app",
        github: "#"
      },
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      featured: false,
      status: "Live"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'web', label: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'analytics', label: 'Data Analytics', count: projects.filter(p => p.category === 'analytics').length },
    { id: 'security', label: 'Security', count: projects.filter(p => p.category === 'security').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-600 to-blue-400 border-blue-500/30 hover:border-blue-400/50",
      orange: "from-orange-600 to-orange-400 border-orange-500/30 hover:border-orange-400/50",
      green: "from-green-600 to-green-400 border-green-500/30 hover:border-green-400/50",
      purple: "from-purple-600 to-purple-400 border-purple-500/30 hover:border-purple-400/50"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-800 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions that demonstrate technical expertise and real-world impact
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-600/50'
              }`}
            >
              <Filter size={16} />
              <span>{filter.label}</span>
              <span className="bg-gray-800/50 px-2 py-1 rounded-full text-xs">{filter.count}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-105 group ${getColorClasses(project.color)} ${
                project.featured ? 'ring-2 ring-blue-500/30' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                
                {/* Project Icon */}
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${getColorClasses(project.color)} p-3 rounded-xl text-white`}>
                  {project.icon}
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' 
                      ? 'bg-green-600/20 text-green-400 border border-green-500/30' 
                      : 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center space-x-1 bg-yellow-600/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-medium border border-yellow-500/30">
                      <Star size={12} />
                      <span>Featured</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-600/50 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gradient-to-r ${getColorClasses(project.color)} text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 hover:scale-105 shadow-lg flex-1 justify-center`}
                  >
                    <Play size={16} />
                    <span>Live Demo</span>
                  </a>
                  {project.links.github !== "#" && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-600 hover:border-gray-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 hover:scale-105 hover:bg-gray-700/50"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in My Work?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              These projects represent just a glimpse of my capabilities. I'm always working on new innovations and would love to discuss how I can contribute to your team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/sivakirlampalli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-600/25"
              >
                <Github size={20} />
                <span>View All Projects</span>
                <ExternalLink size={16} />
              </a>
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center space-x-2 border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:bg-gray-800"
              >
                <span>Let's Collaborate</span>
                <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;