"use client";

import { useState } from "react";

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

interface EducationItem {
  degree: string;
  institution: string;
  date: string;
  location: string;
  description: string;
  subjects: string[];
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Full-Stack Developer",
    company: "Tech Innovations Inc.",
    date: "Jan 2024 - Present",
    location: "Remote",
    description: "Leading development of modern web applications using React, Next.js, and Node.js. Collaborating with cross-functional teams to deliver scalable solutions and improve user experience across multiple products.",
    technologies: ["React.js", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    achievements: [
      "Built and deployed 5+ production-ready web applications",
      "Improved application performance by 40% through code optimization",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    date: "Jun 2023 - Dec 2023",
    location: "Hybrid",
    description: "Developed responsive and interactive user interfaces for enterprise clients. Worked closely with designers to implement pixel-perfect designs and ensure cross-browser compatibility.",
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Redux", "REST APIs"],
    achievements: [
      "Developed responsive UI components used across 3 major projects",
      "Reduced bundle size by 35% through code splitting and lazy loading",
      "Collaborated with UX team to improve user engagement by 25%",
      "Implemented accessibility features meeting WCAG 2.1 standards"
    ]
  },
  {
    title: "Web Development Intern",
    company: "StartUp Hub",
    date: "Jan 2023 - May 2023",
    location: "On-site",
    description: "Gained hands-on experience in full-stack development while working on real client projects. Learned agile methodologies and collaborative development practices in a fast-paced startup environment.",
    technologies: ["HTML/CSS", "JavaScript", "React.js", "Node.js", "MongoDB"],
    achievements: [
      "Built a customer dashboard increasing user satisfaction by 20%",
      "Learned React.js and Node.js for modern web development",
      "Participated in daily stand-ups and sprint planning sessions",
      "Completed internship with outstanding performance rating"
    ]
  }
];

const education: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    date: "2019 - 2023",
    location: "City, Country",
    description: "Focused on software engineering, web development, and database management. Completed various projects involving full-stack development and cloud computing.",
    subjects: ["Data Structures", "Algorithms", "Web Development", "Database Systems", "Cloud Computing"],
    achievements: [
      "Graduated with First Class Honours (GPA: 3.8/4.0)",
      "Led the university coding club for 2 years",
      "Won 1st place in annual hackathon competition",
      "Published research paper on web optimization techniques"
    ]
  },
  {
    degree: "High School Diploma",
    institution: "Central High School",
    date: "2017 - 2019",
    location: "City, Country",
    description: "Focused on science and mathematics with computer science electives. First introduced to programming through school coding club.",
    subjects: ["Mathematics", "Physics", "Computer Science", "English"],
    achievements: [
      "Graduated with distinction in all subjects",
      "Founded the school's first coding club",
      "Completed online web development certification",
      "Participated in regional science fair"
    ]
  }
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  return (
    <section className="" id="experience">
      <section id="experiences" className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              Experience <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">&</span> Journey
            </h2>
            <div className="w-40 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded mb-6"></div>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Explore my professional journey and educational background through an interactive timeline 
              showcasing growth, achievements, and continuous learning in the ever-evolving world of technology.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex justify-center mb-12 md:mb-16">
            <div className="relative p-1 rounded-2xl border border-gray-700 bg-gray-900/60 backdrop-blur-xl">
              <div className="flex">
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 ${
                    activeTab === "experience"
                      ? "text-white bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg shadow-cyan-500/25"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>
                  Experience
                  {activeTab === "experience" && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50"></div>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("education")}
                  className={`relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 ${
                    activeTab === "education"
                      ? "text-white bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg shadow-cyan-500/25"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                    <path d="M22 10v6"></path>
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                  </svg>
                  Education
                  {activeTab === "education" && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/50"></div>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Timeline Line - Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[3px] bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-pink-500/50 rounded-full"></div>

            <div className="space-y-6 md:space-y-16">
              {activeTab === "experience" ? (
                experiences.map((exp, index) => (
                  <TimelineItem
                    key={index}
                    index={index}
                    title={exp.title}
                    subtitle={exp.company}
                    date={exp.date}
                    location={exp.location}
                    description={exp.description}
                    tags={exp.technologies}
                    achievements={exp.achievements}
                    tagLabel="Technologies"
                  />
                ))
              ) : (
                education.map((edu, index) => (
                  <TimelineItem
                    key={index}
                    index={index}
                    title={edu.degree}
                    subtitle={edu.institution}
                    date={edu.date}
                    location={edu.location}
                    description={edu.description}
                    tags={edu.subjects}
                    achievements={edu.achievements}
                    tagLabel="Subjects"
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

interface TimelineItemProps {
  index: number;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  description: string;
  tags: string[];
  achievements: string[];
  tagLabel: string;
}

function TimelineItem({ index, title, subtitle, date, location, description, tags, achievements, tagLabel }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  const dotColors = ["from-cyan-400 to-cyan-600", "from-purple-400 to-purple-600", "from-pink-400 to-pink-600"];
  const dotColor = dotColors[index % dotColors.length];
  const glowColors = ["bg-cyan-400/30", "bg-purple-400/30", "bg-pink-400/30"];
  const glowColor = glowColors[index % glowColors.length];

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      {/* Desktop Card */}
      <div className={`hidden md:block ${isEven ? "md:order-2" : "md:order-1"}`}>
        <div className="relative group overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/60 backdrop-blur p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10">
          {/* Corner Accents */}
          <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-lg"></span>
          <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400/50 rounded-tr-lg"></span>
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-pink-400/50 rounded-br-lg"></span>
          <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-lg"></span>
          
          {/* Shine Effect */}
          <span className="absolute top-0 -left-32 h-full w-32 skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[400%]"></span>

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gray-800/80 flex items-center justify-center overflow-hidden border border-gray-700 group-hover:border-cyan-400/50 transition-colors flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">{title}</h3>
                <p className="text-cyan-400 font-semibold text-lg mb-2">{subtitle}</p>
              </div>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-cyan-400" aria-hidden="true">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span className="font-mono">{date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-purple-400" aria-hidden="true">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{location}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

            {/* Tags */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellow-400" aria-hidden="true">
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
                {tagLabel}
              </h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-400" aria-hidden="true">
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
                Key Achievements
              </h4>
              <div className="space-y-3">
                {achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" aria-hidden="true">
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                    <span className="text-sm leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Empty space for the other side on desktop */}
      <div className={`hidden md:block ${isEven ? "md:order-1" : "md:order-2"}`}></div>

      {/* Center Timeline Dot - Desktop */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative">
          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${dotColor} border-4 border-gray-900 shadow-lg shadow-cyan-500/50`}></div>
          <div className={`absolute -inset-2 rounded-full ${glowColor} blur animate-pulse`}></div>
        </div>
      </div>

      {/* Connecting Line - Desktop */}
      {isEven ? (
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-1/2 mr-3 w-[calc(50%-5rem)] h-1 bg-gradient-to-r from-cyan-400/80 via-purple-500/60 to-transparent"></div>
      ) : (
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-1/2 ml-3 w-[calc(50%-5rem)] h-1 bg-gradient-to-l from-cyan-400/80 via-purple-500/60 to-transparent"></div>
      )}

      {/* End Dot - Desktop */}
      {isEven ? (
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-16 z-20">
          <div className="relative">
            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${dotColor} border-2 border-gray-900 shadow-lg`}></div>
            <div className={`absolute -inset-1 rounded-full ${glowColor} blur animate-pulse`}></div>
          </div>
        </div>
      ) : (
        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 right-16 z-20">
          <div className="relative">
            <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${dotColor} border-2 border-gray-900 shadow-lg`}></div>
            <div className={`absolute -inset-1 rounded-full ${glowColor} blur animate-pulse`}></div>
          </div>
        </div>
      )}

      {/* Mobile Card */}
      <div className="md:hidden">
        <div className="relative group overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/60 backdrop-blur p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10">
          {/* Corner Accents */}
          <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-lg"></span>
          <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400/50 rounded-tr-lg"></span>
          <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-pink-400/50 rounded-br-lg"></span>
          <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-lg"></span>
          
          {/* Shine Effect */}
          <span className="absolute top-0 -left-32 h-full w-32 skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[400%]"></span>

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gray-800/80 flex items-center justify-center overflow-hidden border border-gray-700 group-hover:border-cyan-400/50 transition-colors flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">{title}</h3>
                <p className="text-cyan-400 font-semibold text-lg mb-2">{subtitle}</p>
              </div>
            </div>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-cyan-400" aria-hidden="true">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span className="font-mono">{date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-purple-400" aria-hidden="true">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{location}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>

            {/* Tags */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellow-400" aria-hidden="true">
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
                {tagLabel}
              </h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-400" aria-hidden="true">
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
                Key Achievements
              </h4>
              <div className="space-y-3">
                {achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" aria-hidden="true">
                      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                      <circle cx="12" cy="8" r="6"></circle>
                    </svg>
                    <span className="text-sm leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
