"use client";

import { 
  Brain, 
  BarChart3, 
  Target, 
  Users, 
  Zap, 
  CheckCircle,
  Star,
  ExternalLink,
  Code2,
  Database,
  LineChart,
  Cpu,
  FileCode,
  LayoutDashboard,
  Terminal,
  Eye,
  Notebook,
  Palette
} from "lucide-react";

// Core competencies data
const coreCompetencies = [
  {
    icon: Brain,
    title: "Problem Solving",
    description: "Analytical thinking & creative solutions"
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Extracting insights from complex datasets"
  },
  {
    icon: Target,
    title: "Research",
    description: "Staying updated with latest AI/ML trends"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively in teams"
  },
  {
    icon: Zap,
    title: "Continuous Learning",
    description: "Always expanding knowledge base"
  },
  {
    icon: CheckCircle,
    title: "Attention to Detail",
    description: "Precise and thorough work"
  }
];

// Technical skills with proficiency levels
const technicalSkills = [
  { name: "R Programming", level: 50, gradient: "from-purple-400 to-pink-500" },
  { name: "Python", level: 75, gradient: "from-blue-400 to-cyan-500" },
  { name: "PyTorch", level: 45, gradient: "from-red-400 to-pink-500" },
  { name: "TensorFlow", level: 45, gradient: "from-orange-400 to-yellow-500" },
  { name: "scikit-learn", level: 25, gradient: "from-cyan-400 to-blue-500" },
  { name: "OpenCV", level: 25, gradient: "from-green-400 to-teal-500" },
  { name: "Problem Solving", level: 70, gradient: "from-blue-400 to-cyan-500" },
  { name: "Communication", level: 75, gradient: "from-purple-400 to-pink-500" },
  { name: "Teamwork", level: 75, gradient: "from-green-400 to-emerald-500" },
  { name: "Computer Vision Basics", level: 25, gradient: "from-orange-400 to-yellow-500" },
  { name: "Data Visualization", level: 70, gradient: "from-blue-500 to-indigo-500" },
  { name: "Data Cleaning", level: 70, gradient: "from-green-400 to-teal-500" },
  { name: "MySQL Database", level: 45, gradient: "from-orange-400 to-red-500" },
  { name: "Power BI", level: 45, gradient: "from-yellow-400 to-orange-500" },
  { name: "Jupyter Notebook", level: 70, gradient: "from-teal-400 to-blue-500" },
  { name: "Matplotlib", level: 70, gradient: "from-indigo-400 to-purple-500" },
  { name: "Pandas", level: 70, gradient: "from-blue-500 to-indigo-500" }
];

// Technology stack data
const techStack = [
  {
    name: "Python",
    description: "High-level programming language widely used for AI, Data Science, and web development.",
    icon: Code2,
    color: "from-blue-400 to-yellow-400",
    url: "https://www.python.org"
  },
  {
    name: "R Programming",
    description: "Language for statistical computing, data analysis, and visualization.",
    icon: BarChart3,
    color: "from-blue-500 to-blue-700",
    url: "https://www.r-project.org"
  },
  {
    name: "PyTorch",
    description: "Deep learning framework for building and training neural networks.",
    icon: Cpu,
    color: "from-orange-500 to-red-500",
    url: "https://pytorch.org"
  },
  {
    name: "TensorFlow",
    description: "Open-source platform for machine learning and AI model development.",
    icon: Brain,
    color: "from-orange-400 to-orange-600",
    url: "https://www.tensorflow.org"
  },
  {
    name: "NumPy",
    description: "Python library for numerical computations and array operations.",
    icon: FileCode,
    color: "from-blue-400 to-cyan-400",
    url: "https://numpy.org"
  },
  {
    name: "Pandas",
    description: "Data manipulation and analysis library for structured datasets.",
    icon: Database,
    color: "from-blue-600 to-purple-600",
    url: "https://pandas.pydata.org"
  },
  {
    name: "Matplotlib",
    description: "Library for creating static, animated, and interactive visualizations.",
    icon: LineChart,
    color: "from-blue-500 to-orange-500",
    url: "https://matplotlib.org"
  },
  {
    name: "Seaborn",
    description: "Python library for statistical data visualization built on Matplotlib.",
    icon: Palette,
    color: "from-teal-400 to-blue-500",
    url: "https://seaborn.pydata.org"
  },
  {
    name: "Power BI",
    description: "Microsoft's business intelligence tool for data visualization and dashboards.",
    icon: LayoutDashboard,
    color: "from-yellow-400 to-yellow-600",
    url: "https://powerbi.microsoft.com"
  },
  {
    name: "Jupyter Notebook",
    description: "Open-source tool for interactive coding, data analysis, and visualization.",
    icon: Notebook,
    color: "from-orange-400 to-gray-500",
    url: "https://jupyter.org"
  },
  {
    name: "Cursor IDE",
    description: "AI-powered IDE designed to accelerate coding with intelligent assistance.",
    icon: Terminal,
    color: "from-purple-500 to-pink-500",
    url: "https://cursor.sh"
  },
  {
    name: "MySQL Database",
    description: "Open-source relational database management system for structured data storage.",
    icon: Database,
    color: "from-blue-500 to-orange-500",
    url: "https://www.mysql.com"
  },
  {
    name: "OpenCV",
    description: "Open-source library for computer vision, image processing, and machine learning.",
    icon: Eye,
    color: "from-green-500 to-blue-500",
    url: "https://opencv.org"
  }
];

// Star rating component
function StarRating({ level }: { level: number }) {
  const stars = Math.round(level / 20); // Convert percentage to 5-star scale
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= stars
              ? "text-yellow-400 fill-current"
              : "text-gray-600"
          }`}
        />
      ))}
    </div>
  );
}

// Competency card component
function CompetencyCard({ competency }: { competency: typeof coreCompetencies[0] }) {
  const Icon = competency.icon;
  return (
    <div className="relative group overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/60 backdrop-blur p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-400/10">
      {/* Corner accents */}
      <span className="card-corner-arrow top-0 left-0"></span>
      <span className="card-corner-arrow top-0 right-0"></span>
      <span className="card-corner-arrow bottom-0 right-0"></span>
      <span className="card-corner-arrow bottom-0 left-0"></span>
      
      {/* Shine effect */}
      <span className="card-shine-diagonal"></span>
      
      {/* Hover gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-black flex-shrink-0">
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-2">{competency.title}</h4>
          <p className="text-gray-400 text-sm leading-relaxed">{competency.description}</p>
        </div>
      </div>
    </div>
  );
}

// Skill bar card component
function SkillCard({ skill }: { skill: typeof technicalSkills[0] }) {
  return (
    <div className="relative group overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/60 backdrop-blur p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-cyan-400/10">
      {/* Corner accents */}
      <span className="card-corner-arrow top-0 left-0"></span>
      <span className="card-corner-arrow top-0 right-0"></span>
      <span className="card-corner-arrow bottom-0 right-0"></span>
      <span className="card-corner-arrow bottom-0 left-0"></span>
      
      {/* Shine effect */}
      <span className="card-shine-diagonal"></span>
      
      {/* Hover gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {skill.name}
          </h4>
          <span className="text-cyan-400 font-semibold text-lg">{skill.level}%</span>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-800 rounded-full h-3 mb-4 overflow-hidden">
          <div 
            className={`h-3 rounded-full bg-gradient-to-r ${skill.gradient} relative overflow-hidden`}
            style={{ width: `${skill.level}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">Proficiency Level</span>
          <StarRating level={skill.level} />
        </div>
      </div>
    </div>
  );
}

// Tech stack card component
function TechCard({ tech }: { tech: typeof techStack[0] }) {
  const Icon = tech.icon;
  return (
    <div className="group">
      <a 
        href={tech.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/60 backdrop-blur p-6 hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-cyan-400/10">
          {/* Corner accents */}
          <span className="card-corner-arrow top-0 left-0"></span>
          <span className="card-corner-arrow top-0 right-0"></span>
          <span className="card-corner-arrow bottom-0 right-0"></span>
          <span className="card-corner-arrow bottom-0 left-0"></span>
          
          {/* Shine effect */}
          <span className="card-shine"></span>
          
          {/* Hover gradient */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Icon */}
          <div className="flex items-center justify-center mb-4">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center overflow-hidden border border-gray-700 group-hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-110`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h4 className="text-xl font-bold text-white text-center mb-3 group-hover:text-cyan-400 transition-colors">
            {tech.name}
          </h4>
          
          <p className="text-gray-400 text-sm text-center mb-6 leading-relaxed">
            {tech.description}
          </p>
          
          <div className="flex items-center justify-center gap-2 text-cyan-400 text-sm font-medium group-hover:text-white transition-colors">
            <span>Learn More</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </a>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Main Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Skills{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              &amp; Tech Stack
            </span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded mb-4"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Advanced expertise in Data Science, Machine Learning, and AI-driven solutions
          </p>
        </div>

        {/* Core Competencies Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Core{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Competencies
            </span>
          </h3>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8 text-center">
            Essential skills and abilities that drive my success in data science and machine learning projects
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCompetencies.map((competency, index) => (
              <CompetencyCard key={index} competency={competency} />
            ))}
          </div>
        </div>

        {/* Technical Expertise Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technical{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto rounded mb-6"></div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Comprehensive skills in data science, machine learning, and AI technologies that drive innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Technology Stack Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technology{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Stack
              </span>
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded mb-6"></div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              The tools and technologies I use to build intelligent solutions and extract meaningful insights from data
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
