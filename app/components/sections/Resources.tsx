"use client";

import {
  Github,
  Linkedin,
  Database,
  Brain,
  Zap,
  Code,
  BookOpen,
  Globe,
  Award,
  ExternalLink
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// Resource link type
interface ResourceLink {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
}

// Resource category type
interface ResourceCategory {
  title: string;
  links: ResourceLink[];
}

// Resources data
const resourceCategories: ResourceCategory[] = [
  {
    title: "Professional Profiles",
    links: [
      {
        title: "GitHub Profile",
        description: "Open source contributions and AI/ML projects",
        url: "https://github.com/dhruvpatel16120",
        icon: Github
      },
      {
        title: "LinkedIn Profile",
        description: "Professional network and career updates",
        url: "https://linkedin.com/in/dhruvpatel16120",
        icon: Linkedin
      }
    ]
  },
  {
    title: "Learning Resources",
    links: [
      {
        title: "Kaggle",
        description: "Data science competitions and datasets",
        url: "https://kaggle.com",
        icon: Database
      },
      {
        title: "Google AI Education",
        description: "Machine learning courses and resources",
        url: "https://ai.google/education/",
        icon: Brain
      },
      {
        title: "TensorFlow",
        description: "Open source machine learning platform",
        url: "https://tensorflow.org",
        icon: Zap
      },
      {
        title: "PyTorch",
        description: "Deep learning framework for Python",
        url: "https://pytorch.org",
        icon: Code
      }
    ]
  },
  {
    title: "Industry Resources",
    links: [
      {
        title: "Papers With Code",
        description: "Latest machine learning research papers",
        url: "https://paperswithcode.com",
        icon: BookOpen
      },
      {
        title: "Towards Data Science",
        description: "Data science and AI articles on Medium",
        url: "https://towardsdatascience.com",
        icon: Globe
      },
      {
        title: "AI Research",
        description: "Cutting-edge AI research and developments",
        url: "https://openai.com/research/",
        icon: Award
      }
    ]
  },
  {
    title: "Technical Documentation",
    links: [
      {
        title: "Next.js Documentation",
        description: "React framework for production applications",
        url: "https://nextjs.org/docs",
        icon: Code
      },
      {
        title: "Three.js Documentation",
        description: "3D graphics library for interactive portfolios",
        url: "https://threejs.org/docs/",
        icon: Globe
      },
      {
        title: "React Documentation",
        description: "JavaScript library for building user interfaces",
        url: "https://react.dev",
        icon: Code
      }
    ]
  }
];

// Resource link component
function ResourceLink({ link }: { link: ResourceLink }) {
  const Icon = link.icon;
  
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link block p-4 rounded-xl border border-gray-700/50 bg-gray-800/30 hover:bg-gray-800/60 hover:border-cyan-400/40 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 text-cyan-400 group-hover/link:text-cyan-300 transition-colors">
          <Icon className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-white group-hover/link:text-cyan-100 transition-colors">
              {link.title}
            </h4>
            <ExternalLink className="w-3 h-3 text-gray-400 group-hover/link:text-cyan-400 transition-colors" />
          </div>
          <p className="text-sm text-gray-400 group-hover/link:text-gray-300 transition-colors leading-relaxed">
            {link.description}
          </p>
        </div>
      </div>
    </a>
  );
}

// Resource card component
function ResourceCard({ category }: { category: ResourceCategory }) {
  return (
    <div className="group">
      <div className="relative">
        {/* Gradient border on hover */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300">
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
            {category.title}
          </h3>
          
          {/* Links */}
          <div className="space-y-4">
            {category.links.map((link, index) => (
              <ResourceLink key={index} link={link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Resources() {
  return (
    <section id="resources" className="py-16 px-4 bg-gradient-to-b from-black via-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Useful{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Resources
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore these valuable resources for AI, data science, and web development. Perfect for students and professionals looking to advance their skills in machine learning and technology.
          </p>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {resourceCategories.map((category, index) => (
            <ResourceCard key={index} category={category} />
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Building the Future with AI &amp; Data Science
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              As an AI &amp; Data Science student from India, I&apos;m passionate about leveraging these cutting-edge technologies and frameworks to build innovative solutions. This interactive 3D portfolio showcases my journey in artificial intelligence, machine learning, and web development.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Whether you&apos;re interested in Python programming, TensorFlow implementations, PyTorch models, or Next.js applications, these resources provide valuable insights for students and professionals in the data science and AI community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

