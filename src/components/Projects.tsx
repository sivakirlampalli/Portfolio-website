
import { ExternalLink, Github, Play, BarChart3, Globe, ShoppingCart, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Parsing of Social Media Feeds",
      description: "Built an automation tool to extract posts, capture screenshots, and generate structured PDF reports for digital forensics. Features advanced data parsing and automated report generation.",
      icon: <Shield className="w-8 h-8" />,
      color: "blue",
      tags: ["Python", "Automation", "PDF Generation", "Digital Forensics"],
      links: {
        demo: "https://youtu.be/ItLralGN0G4",
        github: "#"
      },
      image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Expense Tracker – Power BI",
      description: "Created an interactive dashboard for financial insights using slicers, KPIs, and visuals. Provides comprehensive expense analysis with real-time data visualization.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "orange",
      tags: ["Power BI", "Data Visualization", "Analytics", "Dashboard"],
      links: {
        demo: "https://github.com/sivakirlampalli/Powerbi-expense-tracker",
        github: "https://github.com/sivakirlampalli/Powerbi-expense-tracker"
      },
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Travel Website",
      description: "Developed a fully responsive tourism website with engaging UI and booking features. Includes destination showcases, booking system, and user-friendly navigation.",
      icon: <Globe className="w-8 h-8" />,
      color: "green",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      links: {
        demo: "https://sivakirlampalli.github.io/Travel/",
        github: "https://github.com/sivakirlampalli/Travel"
      },
      image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Item Management App",
      description: "React.js application with image uploads, add/edit/delete features, and localStorage. Complete CRUD operations with modern UI and efficient state management.",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "purple",
      tags: ["React.js", "JavaScript", "LocalStorage", "CRUD"],
      links: {
        demo: "https://amrr-react.vercel.app",
        github: "#"
      },
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

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
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my technical expertise through real-world applications and innovative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-105 group ${getColorClasses(project.color)}`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${getColorClasses(project.color)} p-3 rounded-xl text-white`}>
                  {project.icon}
                </div>
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
                    className={`bg-gradient-to-r ${getColorClasses(project.color)} text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 hover:scale-105 shadow-lg`}
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

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/sivakirlampalli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-blue-600/25"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;