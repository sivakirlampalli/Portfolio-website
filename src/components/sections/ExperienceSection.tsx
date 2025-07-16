
import { Briefcase, Award, Calendar, MapPin, Trophy, Star, CheckCircle, } from 'lucide-react';

const ExperienceSection = () => {
  const experience = {
    title: "Java Full Stack Developer Trainee",
    company: "AICTE (All India Council for Technical Education)",
    location: "Remote",
    duration: "2024 - Present",
    type: "Professional Training",
    description: "Intensive hands-on training program focusing on enterprise-level full-stack development with modern technologies and industry best practices.",
    responsibilities: [
      "Developed responsive web applications using Spring Boot and React.js",
      "Implemented RESTful APIs with proper authentication and authorization",
      "Designed and optimized MySQL database schemas for scalable applications",
      "Built mini-projects demonstrating full-stack development lifecycle",
      "Collaborated with cross-functional teams using Agile methodologies"
    ],
    skills: ["Spring Boot", "REST APIs", "MySQL", "Java", "React.js", "Microservices"],
    achievements: [
      "Completed 5+ full-stack projects with 95% code quality score",
      "Mentored 3 junior developers in the training program",
      "Implemented CI/CD pipeline reducing deployment time by 40%"
    ]
  };

  const majorAchievements = [
    {
      title: "Smart India Hackathon Finalist",
      organization: "Government of India",
      year: "2024",
      description: "Led a team of 6 developers to create an innovative forensic automation tool. Presented solution to national jury panel and secured finalist position among 10,000+ participants.",
      icon: <Trophy className="w-8 h-8" />,
      color: "orange",
      impact: "National Recognition",
      details: [
        "Developed automated social media parsing tool",
        "Implemented PDF report generation system",
        "Led team through 3 rounds of national competition",
        "Presented to industry experts and government officials"
      ]
    },
    {
      title: "Reliance Foundation Scholar",
      organization: "Reliance Foundation",
      year: "2023-2024",
      description: "Selected as a scholar for academic excellence and leadership potential. Recognized for outstanding performance in Computer Science Engineering.",
      icon: <Award className="w-8 h-8" />,
      color: "purple",
      impact: "Academic Excellence",
      details: [
        "Maintained CGPA of 8.95 throughout the program",
        "Demonstrated leadership in academic projects",
        "Contributed to community development initiatives",
        "Received mentorship from industry leaders"
      ]
    }
  ];

  const certifications = [
    {
      title: "Java Full Stack Development",
      issuer: "Eduskills",
      year: "2024",
      credentialId: "EDS-2024-JFS-001",
      skills: ["Java", "Spring Boot", "MySQL", "REST APIs", "Microservices"],
      status: "Verified"
    },
    {
      title: "Python Foundation",
      issuer: "Infosys Springboard",
      year: "2023",
      credentialId: "ISB-2023-PYF-002",
      skills: ["Python", "Data Structures", "Algorithms", "OOP"],
      status: "Verified"
    },
    {
      title: "Data Analytics Fundamentals",
      issuer: "Forage",
      year: "2023",
      credentialId: "FRG-2023-DA-003",
      skills: ["Data Analysis", "Statistics", "Visualization", "Excel"],
      status: "Verified"
    },
    {
      title: "SIH Grand Finale Certificate",
      issuer: "Smart India Hackathon",
      year: "2024",
      credentialId: "SIH-2024-GF-004",
      skills: ["Innovation", "Problem Solving", "Team Leadership", "Presentation"],
      status: "Verified"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Experience & <span className="text-blue-400">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional journey marked by continuous learning, innovation, and impactful contributions
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Briefcase className="w-8 h-8 text-blue-400 mr-4" />
            Professional Experience
          </h3>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Experience Details */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">{experience.title}</h4>
                  <div className="flex flex-wrap items-center gap-4 text-gray-300 mb-4">
                    <span className="text-blue-400 font-semibold text-lg">{experience.company}</span>
                    <div className="flex items-center space-x-1">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{experience.duration}</span>
                    </div>
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                      {experience.type}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">{experience.description}</p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h5 className="text-lg font-bold text-white mb-4">Key Responsibilities</h5>
                  <ul className="space-y-3">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle size={16} className="text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h5 className="text-lg font-bold text-white mb-4">Key Achievements</h5>
                  <ul className="space-y-3">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Star size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Skills & Technologies */}
              <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-600">
                <h5 className="text-lg font-bold text-white mb-4">Technologies Used</h5>
                <div className="space-y-3">
                  {experience.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gray-700/50 text-gray-300 px-3 py-2 rounded-lg text-sm hover:bg-gray-600/50 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Major Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Trophy className="w-8 h-8 text-orange-400 mr-4" />
            Major Achievements
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {majorAchievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start space-x-6 mb-6">
                  <div className="bg-orange-600/20 p-4 rounded-xl text-orange-400 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-orange-400 font-semibold">{achievement.organization}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">{achievement.year}</span>
                    </div>
                    <div className="bg-orange-600/10 text-orange-300 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                      {achievement.impact}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">{achievement.description}</p>
                
                <div className="space-y-2">
                  {achievement.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-400 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Award className="w-8 h-8 text-purple-400 mr-4" />
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-white flex-1">{cert.title}</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400 text-sm font-medium">{cert.year}</span>
                    {cert.status === 'Verified' && (
                      <CheckCircle size={16} className="text-green-400" />
                    )}
                  </div>
                </div>
                
                <p className="text-purple-400 font-semibold mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-4">Credential ID: {cert.credentialId}</p>
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs font-medium"
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
    </div>
  );
};

export default ExperienceSection;