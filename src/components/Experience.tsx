
import { Briefcase, Award, Calendar, MapPin} from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Java Full Stack Developer Trainee",
      company: "AICTE",
      location: "Remote",
      duration: "2024 - Present",
      type: "Training Program",
      description: "Hands-on training in Spring Boot, REST APIs, and MySQL. Developed mini-projects with responsive UI and database integration. Gained expertise in full-stack development lifecycle.",
      skills: ["Spring Boot", "REST APIs", "MySQL", "Java", "Frontend Development"],
      color: "blue"
    }
  ];

  const achievements = [
    {
      title: "Smart India Hackathon Finalist",
      organization: "Government of India",
      year: "2024",
      description: "Led a team of 6 to present a forensic automation tool to a national jury. Developed innovative solutions for digital forensics and social media data analysis.",
      icon: <Award className="w-6 h-6" />,
      color: "orange"
    },
    {
      title: "Reliance Foundation Scholar",
      organization: "Reliance Foundation",
      year: "2023-2024",
      description: "Awarded for academic excellence and leadership potential. Recognized for outstanding performance in Computer Science Engineering.",
      icon: <Award className="w-6 h-6" />,
      color: "purple"
    }
  ];

  const certifications = [
    {
      title: "Java Full Stack Development",
      issuer: "Eduskills",
      year: "2024",
      credentialId: "EDS-2024-JFS",
      skills: ["Java", "Spring Boot", "MySQL", "REST APIs"]
    },
    {
      title: "Python Foundation",
      issuer: "Infosys Springboard",
      year: "2023",
      credentialId: "ISB-2023-PYF",
      skills: ["Python", "Data Structures", "Algorithms"]
    },
    {
      title: "Data Analytics",
      issuer: "Forage",
      year: "2023",
      credentialId: "FRG-2023-DA",
      skills: ["Data Analysis", "Statistics", "Visualization"]
    },
    {
      title: "SIH Grand Finale Certificate",
      issuer: "Smart India Hackathon",
      year: "2024",
      credentialId: "SIH-2024-GF",
      skills: ["Innovation", "Problem Solving", "Team Leadership"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-blue-400">Achievements</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional journey, recognitions, and continuous learning milestones
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mt-6"></div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
            Professional Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                    <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
                      <span className="text-blue-400 font-medium">{exp.company}</span>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-600/50 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Award className="w-6 h-6 text-orange-400 mr-3" />
            Key Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600/20 p-3 rounded-xl text-orange-400 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-orange-400 font-medium">{achievement.organization}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">{achievement.year}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Award className="w-6 h-6 text-purple-400 mr-3" />
            Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                  <span className="text-purple-400 text-sm font-medium">{cert.year}</span>
                </div>
                <p className="text-purple-400 font-medium mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-4">ID: {cert.credentialId}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;