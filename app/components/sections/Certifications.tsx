"use client";

interface CertificationItem {
  type: "certification" | "achievement";
  title: string;
  organization: string;
  year: string;
  description: string;
  tags?: string[];
  category?: string;
}

const certifications: CertificationItem[] = [
  {
    type: "certification",
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    year: "2024",
    description: "Professional certification demonstrating expertise in designing distributed systems on AWS. Covers compute, storage, databases, networking, and security best practices for cloud architecture.",
    tags: ["AWS", "Cloud Architecture", "DevOps"]
  },
  {
    type: "certification",
    title: "Meta Front-End Developer Professional",
    organization: "Meta (Coursera)",
    year: "2024",
    description: "Comprehensive certification covering React, JavaScript, HTML, CSS, and modern front-end development practices. Includes hands-on projects and real-world application development.",
    tags: ["React", "JavaScript", "CSS"]
  },
  {
    type: "certification",
    title: "Node.js Application Developer",
    organization: "OpenJS Foundation",
    year: "2024",
    description: "Advanced certification for Node.js development covering async programming, APIs, testing, debugging, and deployment. Demonstrates proficiency in building scalable server-side applications.",
    tags: ["Node.js", "APIs", "Backend"]
  },
  {
    type: "certification",
    title: "TypeScript Professional Developer",
    organization: "Microsoft Learn",
    year: "2023",
    description: "Certification covering TypeScript fundamentals, advanced types, generics, decorators, and integration with modern frameworks. Demonstrates expertise in type-safe JavaScript development.",
    tags: ["TypeScript", "JavaScript", "OOP"]
  },
  {
    type: "certification",
    title: "PostgreSQL Database Administrator",
    organization: "PostgreSQL Global Development Group",
    year: "2023",
    description: "Database administration certification covering installation, configuration, backup, recovery, performance tuning, and security. Demonstrates proficiency in managing PostgreSQL databases.",
    tags: ["PostgreSQL", "SQL", "Database"]
  },
  {
    type: "achievement",
    title: "1st Place - Regional Hackathon",
    organization: "TechFest 2024",
    year: "2024",
    description: "Won first place in a 48-hour hackathon competition. Built an innovative web application solving real-world problems using React, Node.js, and AI integration.",
    category: "Competition"
  },
  {
    type: "achievement",
    title: "Open Source Contributor",
    organization: "GitHub Community",
    year: "2024",
    description: "Active contributor to popular open-source projects including React libraries, Node.js tools, and developer utilities. Recognized for quality contributions and code reviews.",
    category: "Open Source"
  },
  {
    type: "achievement",
    title: "Best Project Award",
    organization: "University of Technology",
    year: "2023",
    description: "Awarded for the best final year project - a full-stack e-commerce platform with AI-powered recommendations, built using Next.js, Node.js, and PostgreSQL.",
    category: "Recognition"
  },
  {
    type: "achievement",
    title: "Web Development Intern",
    organization: "StartUp Hub",
    year: "2023",
    description: "Successfully completed internship with outstanding performance. Developed customer-facing features and contributed to core product development using React and Node.js.",
    category: "Internship"
  },
  {
    type: "certification",
    title: "Docker Certified Associate",
    organization: "Docker Inc.",
    year: "2023",
    description: "Professional certification for Docker containerization and orchestration. Covers image creation, networking, storage, security, and Docker Compose for multi-container applications.",
    tags: ["Docker", "Containers", "DevOps"]
  },
  {
    type: "achievement",
    title: "100 Days of Code Challenge",
    organization: "Developer Community",
    year: "2023",
    description: "Completed the 100 Days of Code challenge, building and shipping projects daily. Improved coding skills, consistency, and built a portfolio of diverse web applications.",
    category: "Challenge"
  },
  {
    type: "certification",
    title: "Git & GitHub Fundamentals",
    organization: "GitHub Learning Lab",
    year: "2023",
    description: "Certification covering version control fundamentals, branching strategies, pull requests, code reviews, and collaboration workflows. Essential skills for team-based development.",
    tags: ["Git", "GitHub", "Version Control"]
  }
];

export default function Certifications() {
  const certCount = certifications.filter(c => c.type === "certification").length;
  const achieveCount = certifications.filter(c => c.type === "achievement").length;
  const totalCount = certifications.length;

  return (
    <section className="" id="certifications">
      <section id="certifications" className="py-16 md:py-24 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-transparent to-gray-800/30 pointer-events-none"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Certifications <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">& Achievements</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded-full mb-6 shadow-lg shadow-cyan-400/20"></div>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Professional certifications and notable achievements that showcase my expertise and dedication to continuous learning
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8 pt-6 border-t border-gray-700/30">
              <div className="text-center group cursor-default">
                <div className="text-3xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">{certCount}</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Certifications</div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-3xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">{achieveCount}</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Achievements</div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-3xl font-bold text-pink-400 group-hover:text-pink-300 transition-colors">{totalCount}</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Total Items</div>
              </div>
            </div>
          </div>

          {/* Marquee Container */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900/20 via-gray-800/10 to-gray-900/20 backdrop-blur-sm border border-gray-700/30 p-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Professional Journey</h3>
              <p className="text-gray-400">Scroll through my certifications and achievements</p>
            </div>

            {/* Marquee */}
            <div className="marquee-container group/marquee">
              <div className="marquee-content">
                {/* First set of items */}
                {certifications.map((item, index) => (
                  <CertificationCard key={`first-${index}`} item={item} />
                ))}
                {/* Duplicate for seamless loop */}
                {certifications.map((item, index) => (
                  <CertificationCard key={`second-${index}`} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

function CertificationCard({ item }: { item: CertificationItem }) {
  const isCert = item.type === "certification";

  return (
    <div className="marquee-item">
      <div className="relative group overflow-hidden rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-xl p-5 md:p-7 hover:border-cyan-400/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-400/20 cursor-pointer h-[300px] md:h-[340px] flex flex-col min-w-[280px] md:min-w-[320px] max-w-[350px]">
        {/* Corner Accents */}
        <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-lg"></span>
        <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400/50 rounded-tr-lg"></span>
        <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-pink-400/50 rounded-br-lg"></span>
        <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400/50 rounded-bl-lg"></span>

        {/* Shine Effect */}
        <span className="absolute top-0 -left-32 h-full w-32 skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[500%]"></span>

        {/* Hover Overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
              {isCert ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 text-black" aria-hidden="true">
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 text-black" aria-hidden="true">
                  <path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path>
                  <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path>
                  <path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path>
                  <path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path>
                </svg>
              )}
            </div>
            <div className="flex items-center gap-1 md:gap-2 text-gray-400 text-xs md:text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 md:w-4 md:h-4 text-cyan-300" aria-hidden="true">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              <span>{item.year}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-base md:text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
            {item.title}
          </h3>

          {/* Organization */}
          <p className="text-cyan-400 text-xs md:text-sm mb-2 md:mb-3 line-clamp-1">
            {item.organization}
          </p>

          {/* Description */}
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-3 mb-3 md:mb-4">
            {item.description}
          </p>

          {/* Tags or Category */}
          {item.tags ? (
            <div className="flex flex-wrap gap-1 mb-3 md:mb-4">
              {item.tags.slice(0, 2).map((tag, i) => (
                <span key={i} className="px-1.5 py-0.5 md:px-2 md:py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs">
                  {tag}
                </span>
              ))}
              {item.tags.length > 2 && (
                <span className="px-1.5 py-0.5 md:px-2 md:py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  +{item.tags.length - 2}
                </span>
              )}
            </div>
          ) : (
            <div className="mb-3 md:mb-4">
              <span className="px-2 py-0.5 md:px-3 md:py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">
                {item.category}
              </span>
            </div>
          )}

          {/* Spacer */}
          <div className="flex-1"></div>

          {/* View Details */}
          <div className="flex items-center gap-1 md:gap-2 text-cyan-400 text-xs md:text-sm font-medium group-hover:text-white transition-colors mt-auto">
            <span>View Details</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true">
              <path d="M15 3h6v6"></path>
              <path d="M10 14 21 3"></path>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

