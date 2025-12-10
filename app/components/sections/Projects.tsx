"use client";

import { useState } from "react";
import {
  Star,
  TrendingUp,
  Users,
  Eye,
  GitFork,
  Code,
  BarChart3,
  Award,
  Cpu,
  Globe,
  CodeXml,
  Github,
  ExternalLink
} from "lucide-react";

// Category types with colors
const categories = [
  { id: "all", name: "All Projects", icon: CodeXml, color: "cyan", count: 10 },
  { id: "featured", name: "Featured", icon: Award, color: "cyan", count: 0 },
  { id: "data-science", name: "Data Science", icon: CodeXml, color: "blue", count: 0 },
  { id: "machine-learning", name: "Machine Learning", icon: CodeXml, color: "purple", count: 1 },
  { id: "ai", name: "Artificial Intelligence", icon: Cpu, color: "pink", count: 1 },
  { id: "web", name: "Web Development", icon: Globe, color: "emerald", count: 4 },
  { id: "open-source", name: "Open Source", icon: CodeXml, color: "amber", count: 2 },
  { id: "personal", name: "Personal", icon: CodeXml, color: "cyan", count: 1 },
  { id: "other", name: "Other", icon: CodeXml, color: "gray", count: 1 }
];

// Project analytics data
const analytics = [
  { label: "Commits", value: "1,270", icon: BarChart3, color: "text-gray-400" },
  { label: "Stars", value: "7", icon: Star, color: "text-yellow-400" },
  { label: "Pull Requests", value: "16", icon: TrendingUp, color: "text-gray-400" },
  { label: "Views", value: "340", icon: Eye, color: "text-cyan-400" },
  { label: "Forks", value: "3", icon: GitFork, color: "text-green-400" },
  { label: "Contributors", value: "6", icon: Users, color: "text-blue-400" },
  { label: "Code Quality", value: "94", icon: Code, color: "text-gray-400" }
];

// Projects data
const projects = [
  {
    id: 1,
    title: "Nexa AI Bot",
    description: "An interactive AI chatbot built with Streamlit and LangChain, providing personalized conversations, jokes, shayari, quotes, and motivational responses, powered by DeepSeek and Groq APIs, with history and dynamic responses.",
    category: "ai",
    categoryLabel: "ARTIFICIAL_INTELLIGENCE",
    image: "/projects/project-2-nexa.webp",
    technologies: ["Python 3.9+", "Streamlit", "LangChain"],
    extraTech: 2,
    stars: 89,
    forks: 23,
    contributors: 2,
    github: "https://github.com/dhruvpatel16120/Nexa-AI-bot",
    live: "https://nexa-ai-bot.onrender.com/"
  },
  {
    id: 2,
    title: "Cricket Score Prediction System",
    description: "A machine learning system that predicts cricket match scores using historical data, player stats, and venue information, providing interactive visualizations through a Streamlit-based web interface.",
    category: "machine-learning",
    categoryLabel: "MACHINE_LEARNING",
    image: "/projects/project-7-csps.webp",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    extraTech: 2,
    stars: 1,
    forks: 1,
    contributors: 0,
    github: "https://github.com/dhruvpatel16120/Cricket-Score-Prediction-System",
    live: "https://cricketscorepredictionsystem.streamlit.app"
  },
  {
    id: 3,
    title: "Gas Agency System",
    description: "A full-stack web application for booking and managing gas cylinder deliveries, offering real-time tracking, secure payments, order history, and role-based admin management with analytics dashboards.",
    category: "web",
    categoryLabel: "WEB_DEVELOPMENT",
    image: "/projects/project-1-gas.webp",
    technologies: ["Node.js", "PostgreSQL", "TypeScript"],
    extraTech: 4,
    stars: 127,
    forks: 34,
    contributors: 3,
    github: "https://github.com/dhruvpatel16120/Gas-Agency-System",
    live: "https://agani-gas-agency-system.vercel.app/"
  },
  {
    id: 4,
    title: "TechBlog Blog Website",
    description: "A modern, full-stack blog platform built using Django and React, designed for developers and content creators, offering secure authentication, content management, categories, tags, comments, and a responsive, SEO-friendly interface.",
    category: "web",
    categoryLabel: "WEB_DEVELOPMENT",
    image: "/projects/project-9-tech-blog.webp",
    technologies: ["react.js", "next.js", "postgresql"],
    extraTech: 2,
    stars: 10,
    forks: 1,
    contributors: 0,
    github: "https://github.com/dhruvpatel16120/blog-website",
    live: "https://techblog-website.vercel.app/"
  },
  {
    id: 5,
    title: "Clinic Management System",
    description: "A modern and feature-rich clinic management system built with React ,Firebase, and Tailwind CSS, providing appointment scheduling, patient management, billing, prescription handling, and efficient healthcare workflow.",
    category: "open-source",
    categoryLabel: "OPEN_SOURCE",
    image: "/projects/project-6-cms.webp",
    technologies: ["React 19", "Firebase", "Tailwind CSS"],
    extraTech: 3,
    stars: 1,
    forks: 1,
    contributors: 0,
    github: "https://github.com/dhruvpatel16120/clinic-management-system",
    live: "https://life-clinic-management-system.vercel.app"
  },
  {
    id: 6,
    title: "Task Master (To-Do List App)",
    description: "A modern, professional, feature-rich to-do list app built with React, Tailwind CSS, and Firebase, enabling task organization, priority setting, progress tracking, collaboration, reminders, and secure real-time data synchronization for productivity.",
    category: "web",
    categoryLabel: "WEB_DEVELOPMENT",
    image: "/projects/project-5-task-master.webp",
    technologies: ["React", "Tailwind CSS", "firebase"],
    extraTech: 2,
    stars: 1,
    forks: 1,
    contributors: 0,
    github: "https://github.com/dhruvpatel16120/Task-master",
    live: "https://taskmaster-todolist.vercel.app/"
  }
];

// Analytics card component
function AnalyticsCard({ item, index }: { item: typeof analytics[0]; index: number }) {
  const Icon = item.icon;
  return (
    <div className="relative group" style={{ animationDelay: `${index * 50}ms` }}>
      {/* Conic gradient border on hover */}
      <div 
        className="pointer-events-none absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{
          background: "conic-gradient(rgba(34, 211, 238, 0.4), rgba(168, 85, 247, 0.4), rgba(236, 72, 153, 0.4), rgba(34, 211, 238, 0.4))",
          mask: "linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)) content-box exclude, linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))",
          padding: "1px"
        }}
      ></div>
      <div className="relative bg-gray-900/60 backdrop-blur border border-gray-700 rounded-xl p-4 text-center hover:border-gray-600 transition-all duration-300">
        <div className="mb-3">
          <Icon className={`w-6 h-6 mx-auto ${item.color}`} />
        </div>
        <div className="mb-2">
          <div className="text-2xl font-bold text-white">{item.value}</div>
          <div className="text-sm text-gray-400 leading-tight">{item.label}</div>
        </div>
        <div className="text-xs text-gray-500">Updated 9/30/2025</div>
      </div>
    </div>
  );
}

// Category filter button component
function CategoryButton({ 
  category, 
  isActive, 
  onClick 
}: { 
  category: typeof categories[0]; 
  isActive: boolean; 
  onClick: () => void;
}) {
  const Icon = category.icon;
  
  const colorMap: Record<string, string> = {
    cyan: "rgb(6, 182, 212)",
    blue: "rgb(59, 130, 246)",
    purple: "rgb(139, 92, 246)",
    pink: "rgb(236, 72, 153)",
    emerald: "rgb(16, 185, 129)",
    amber: "rgb(245, 158, 11)",
    gray: "rgb(107, 114, 128)"
  };
  
  const color = colorMap[category.color] || colorMap.cyan;
  
  return (
    <button
      onClick={onClick}
      className={`relative group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 rounded-xl font-medium transition-all duration-300 min-h-[44px] overflow-hidden ${
        isActive ? "text-white shadow-2xl transform scale-105" : "text-gray-300"
      }`}
      style={{
        background: isActive 
          ? `linear-gradient(135deg, ${color}80, ${color}40)`
          : "rgba(31, 41, 55, 0.6)"
      }}
    >
      {isActive && (
        <>
          <div 
            className="absolute -inset-[2px] rounded-xl animate-spin-slower"
            style={{
              background: `conic-gradient(${color}, rgb(168, 85, 247), rgb(236, 72, 153), ${color})`
            }}
          ></div>
          <div 
            className="absolute inset-0 rounded-xl"
            style={{
              background: `linear-gradient(135deg, ${color}80, ${color}40)`
            }}
          ></div>
          <div 
            className="absolute inset-0 rounded-xl opacity-60"
            style={{
              background: `radial-gradient(circle, ${color}40, transparent 70%)`
            }}
          ></div>
        </>
      )}
      
      {!isActive && (
        <div 
          className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `conic-gradient(${color}, rgb(168, 85, 247), transparent, ${color})`
          }}
        ></div>
      )}
      
      <div className="relative z-10 flex items-center gap-2 sm:gap-3 group-hover:text-white transition-colors duration-300">
        <Icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${isActive ? "drop-shadow-lg" : "group-hover:scale-110 group-hover:drop-shadow-md"}`} />
        <span className={`text-xs sm:text-sm font-semibold transition-all duration-300 ${isActive ? "drop-shadow-lg" : "group-hover:font-bold"}`}>
          {category.name}
        </span>
        <span className={`px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs rounded-full font-bold transition-all duration-300 ${
          isActive 
            ? "bg-white/20 text-white drop-shadow-lg" 
            : "bg-gray-600/30 text-gray-400 group-hover:bg-white/10 group-hover:text-white group-hover:scale-105"
        }`}>
          {category.count}
        </span>
      </div>
    </button>
  );
}

// Project card component
function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div 
      className="relative group cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
      role="button"
      tabIndex={0}
    >
      {/* Glow effects */}
      <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
      <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
        <div className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out"></div>
      </div>
      
      <div className="relative rounded-2xl border border-gray-700 bg-gray-900/60 backdrop-blur overflow-hidden group-hover:border-gray-600 group-hover:bg-gray-900/80 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
        {/* Image section */}
        <div className="relative h-40 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-300 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-400/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]"></div>
          </div>
          
          <div className="relative w-16 h-16 group-hover:scale-110 transition-all duration-300">
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center">
              <CodeXml className="w-8 h-8 text-cyan-400/70 group-hover:text-cyan-400 transition-colors" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm -z-10"></div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="p-5 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          
          <div className="relative">
            {/* Title and category */}
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                {project.title}
              </h3>
              <span className="px-2 py-1 text-[10px] rounded bg-gray-800 border border-gray-700 text-gray-300 uppercase tracking-wide group-hover:bg-gray-700 group-hover:border-gray-600 group-hover:text-gray-200 transition-all duration-300 flex-shrink-0">
                {project.categoryLabel}
              </span>
            </div>
            
            {/* Description */}
            <p className="text-gray-300 group-hover:text-gray-200 mb-3 text-sm leading-relaxed transition-all duration-300 line-clamp-3">
              {project.description}
            </p>
            
            {/* Technologies */}
            <div className="flex flex-wrap gap-1 mb-3">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i}
                  className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded border border-gray-700 group-hover:bg-gray-700 group-hover:border-gray-600 group-hover:text-gray-200 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
              {project.extraTech > 0 && (
                <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded border border-gray-700 group-hover:bg-gray-700 group-hover:border-gray-600 group-hover:text-gray-300 transition-all duration-300">
                  +{project.extraTech}
                </span>
              )}
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex items-center gap-3 mb-3 text-xs text-gray-400 group-hover:text-gray-300 transition-all duration-300">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
              <span>{project.stars}</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
              <span>{project.forks}</span>
            </div>
            {project.contributors > 0 && (
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                <span>{project.contributors}</span>
              </div>
            )}
          </div>
          
          {/* Links */}
          <div className="flex gap-3 mt-auto pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-1.5 text-gray-400 hover:text-white transition-all duration-300 text-sm px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 hover:shadow-lg hover:shadow-cyan-500/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4 group-hover/btn:text-cyan-400 transition-colors duration-300" />
              <span>Code</span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center gap-1.5 text-gray-400 hover:text-white transition-all duration-300 text-sm px-3 py-1.5 rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 hover:shadow-lg hover:shadow-purple-500/10"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4 group-hover/btn:text-purple-400 transition-colors duration-300" />
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Calculate total stats
  const totalStars = projects.reduce((sum, p) => sum + p.stars, 0);
  const totalForks = projects.reduce((sum, p) => sum + p.forks, 0);
  const totalContributors = projects.reduce((sum, p) => sum + p.contributors, 0);
  
  // Filter projects
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded mb-4"></div>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            A collection of innovative projects showcasing my expertise in AI, web development, and software engineering
          </p>
          
          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-gray-300">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-2xl font-bold">{totalStars}</span>
              <span className="text-sm">Stars</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-2xl font-bold">{totalForks}</span>
              <span className="text-sm">Forks</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-2xl font-bold">{totalContributors}</span>
              <span className="text-sm">Contributors</span>
            </div>
          </div>
        </div>

        {/* Project Analytics */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Project Analytics</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 sm:gap-4 max-w-7xl mx-auto">
            {analytics.map((item, index) => (
              <AnalyticsCard key={item.label} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-4 sm:p-6">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {categories.map((category) => (
                  <CategoryButton
                    key={category.id}
                    category={category}
                    isActive={activeCategory === category.id}
                    onClick={() => setActiveCategory(category.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
              <CodeXml className="w-8 h-8 text-gray-500" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">No projects found</h4>
            <p className="text-gray-400">No projects match the selected category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
