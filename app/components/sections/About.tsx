import Image from "next/image";

export default function About() {
  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", 
    "PostgreSQL", "MongoDB", "Git", "Docker", "AWS", "Python", "JavaScript"
  ];

  return (
    <section className="" id="about">
      <section id="about" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              About <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-28 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mx-auto rounded mb-6"></div>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Get to know me better through my personal journey, skills, and passion for technology. 
              Discover what drives me and how I approach challenges in the world of web development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left Column - Profile */}
            <div className="relative flex flex-col items-center gap-8 lg:gap-10">
              {/* Profile Image with Animated Rings */}
              <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-[22rem] xl:h-[22rem] mb-8">
                <div className="relative w-full h-full">
                  {/* Image Container */}
                  <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 z-20">
                    <div className="w-full h-full rounded-full overflow-hidden bg-black">
                      <Image
                        alt="Profile photo"
                        width={320}
                        height={320}
                        className="w-full h-full object-cover"
                        src="/assets/avatar.jfif"
                      />
                    </div>
                  </div>
                  
                  {/* Spinning Ring 1 */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-[-14px] rounded-full z-10 pointer-events-none animate-spin"
                    style={{
                      background: "conic-gradient(rgb(34, 211, 238), rgb(168, 85, 247), rgb(236, 72, 153), rgb(34, 211, 238))",
                      mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), black calc(100% - 3px))",
                      animationDuration: "18s"
                    }}
                  ></div>
                  
                  {/* Spinning Ring 2 - Dashed */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-[-34px] rounded-full border-2 border-dashed z-10 pointer-events-none animate-spin"
                    style={{
                      borderColor: "rgba(168, 85, 247, 0.6)",
                      animationDirection: "reverse",
                      animationDuration: "24s"
                    }}
                  ></div>
                  
                  {/* Spinning Ring 3 - Dotted */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-[-54px] rounded-full border-2 border-dotted z-10 pointer-events-none animate-spin"
                    style={{
                      borderColor: "rgba(236, 72, 153, 0.6)",
                      animationDuration: "30s"
                    }}
                  ></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute -inset-16 rounded-full bg-gradient-to-r from-cyan-400/15 via-purple-500/15 to-pink-500/15 blur-2xl -z-10"></div>
                </div>
              </div>

              {/* Name and Title */}
              <div className="text-center mt-2 lg:mt-4">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Ursa Warrior</h3>
                <p className="mt-2 text-base md:text-lg text-gray-300">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold">Full-Stack Developer</span>
                  {" "} • {" "}
                  <span className="text-gray-400">React Expert • Node.js Engineer</span>
                </p>
              </div>

              {/* Social Links Card */}
              <div className="relative group w-full max-w-full sm:max-w-md mx-auto">
                {/* Conic Gradient Border */}
                <div
                  className="pointer-events-none absolute -inset-[1px] rounded-2xl"
                  style={{
                    background: "conic-gradient(rgba(34, 211, 238, 0.55), rgba(168, 85, 247, 0.55), rgba(236, 72, 153, 0.55), rgba(34, 211, 238, 0.55))",
                    mask: "linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)) content-box exclude, linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))",
                    padding: "1px"
                  }}
                ></div>

                <div className="relative rounded-2xl border border-gray-700/70 bg-gray-900/60 backdrop-blur-sm p-4 sm:p-5 md:p-6">
                  {/* Social Links */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-5">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="group inline-flex items-center justify-center gap-2 w-full min-h-10 px-3 py-2 rounded-xl border border-gray-700/70 text-white bg-gray-900/40 hover:border-cyan-400/60 hover:bg-gray-900/70 transition-all shadow-sm hover:shadow-cyan-500/10 text-sm hover:-translate-y-0.5"
                    >
                      <span className="text-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                      </span>
                      <span className="font-medium">GitHub</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="group inline-flex items-center justify-center gap-2 w-full min-h-10 px-3 py-2 rounded-xl border border-gray-700/70 text-white bg-gray-900/40 hover:border-cyan-400/60 hover:bg-gray-900/70 transition-all shadow-sm hover:shadow-cyan-500/10 text-sm hover:-translate-y-0.5"
                    >
                      <span className="text-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect width="4" height="12" x="2" y="9"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </span>
                      <span className="font-medium">LinkedIn</span>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Portfolio"
                      className="group inline-flex items-center justify-center gap-2 w-full min-h-10 px-3 py-2 rounded-xl border border-gray-700/70 text-white bg-gray-900/40 hover:border-cyan-400/60 hover:bg-gray-900/70 transition-all shadow-sm hover:shadow-cyan-500/10 text-sm hover:-translate-y-0.5"
                    >
                      <span className="text-cyan-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                      </span>
                      <span className="font-medium">Portfolio</span>
                    </a>
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4">
                    {skills.map((skill) => (
                      <div key={skill} className="group relative overflow-hidden px-3 py-1.5 rounded-full border border-gray-700/70 bg-gray-800/40 text-[11px] sm:text-xs text-gray-200 hover:border-cyan-400/50 hover:bg-gray-800/60 transition-all duration-300">
                        <span className="relative z-10 flex items-center gap-1.5 whitespace-nowrap">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-purple-400" aria-hidden="true">
                            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                            <path d="M20 2v4"></path>
                            <path d="M22 4h-4"></path>
                            <circle cx="4" cy="20" r="2"></circle>
                          </svg>
                          {skill}
                        </span>
                        <span aria-hidden="true" className="pointer-events-none absolute top-0 -left-16 h-full w-16 skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[200%]"></span>
                      </div>
                    ))}
                  </div>

                  {/* Status */}
                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="font-medium">Open to opportunities</span>
                    <span className="hidden sm:inline-flex items-center gap-1 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-cyan-400" aria-hidden="true">
                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                      </svg>
                      <span>Active</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Bio */}
            <div className="relative group w-full lg:w-[92%] xl:w-[95%]">
              {/* Conic Gradient Border */}
              <div
                className="pointer-events-none absolute -inset-[1px] rounded-2xl z-0"
                style={{
                  background: "conic-gradient(rgba(34, 211, 238, 0.6), rgba(168, 85, 247, 0.6), rgba(236, 72, 153, 0.6), rgba(34, 211, 238, 0.6))",
                  mask: "linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)) content-box exclude, linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))",
                  padding: "1px"
                }}
              ></div>

              {/* Corner Accents */}
              <div className="pointer-events-none absolute top-2 left-2 z-20">
                <span className="block h-[3px] w-10 sm:w-12 md:w-14 rounded-full bg-gradient-to-r from-cyan-400 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.55)]"></span>
                <span className="block h-10 sm:h-12 md:h-14 w-[3px] rounded-full bg-gradient-to-b from-cyan-400 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.55)]"></span>
              </div>
              <div className="pointer-events-none absolute top-2 right-2 text-right z-20">
                <span className="block h-[3px] w-10 sm:w-12 md:w-14 rounded-full bg-gradient-to-l from-purple-500 to-transparent shadow-[0_0_12px_rgba(168,85,247,0.55)]"></span>
                <span className="block h-10 sm:h-12 md:h-14 w-[3px] rounded-full bg-gradient-to-b from-purple-500 to-transparent shadow-[0_0_12px_rgba(168,85,247,0.55)] ml-auto"></span>
              </div>
              <div className="pointer-events-none absolute bottom-2 left-2 z-20 transform -rotate-90">
                <span className="block h-[3px] w-10 sm:w-12 md:w-14 rounded-full bg-gradient-to-r from-pink-500 to-transparent shadow-[0_0_12px_rgba(236,72,153,0.55)]"></span>
                <span className="block h-10 sm:h-12 md:h-14 w-[3px] rounded-full bg-gradient-to-t from-pink-500 to-transparent shadow-[0_0_12px_rgba(236,72,153,0.55)] rotate-180"></span>
              </div>
              <div className="pointer-events-none absolute bottom-2 right-2 text-right z-20 transform rotate-90">
                <span className="block h-[3px] w-10 sm:w-12 md:w-14 rounded-full bg-gradient-to-l from-cyan-400 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.55)]"></span>
                <span className="block h-10 sm:h-12 md:h-14 w-[3px] rounded-full bg-gradient-to-t from-cyan-400 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.55)] ml-auto rotate-180"></span>
              </div>

              {/* Content */}
              <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-10 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">Passionate Full-Stack Developer</h4>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  I&apos;m Ursa Warrior, a Full-Stack Developer with a passion for creating beautiful, functional, 
                  and user-centered digital experiences. My journey in web development has been driven by curiosity 
                  and a desire to solve real-world problems through innovative technology solutions.
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  This interactive portfolio showcases my expertise in React, Next.js, TypeScript, and Node.js. 
                  I specialize in building scalable web applications that bridge the gap between exceptional 
                  user experience and robust backend architecture.
                </p>
                
                <p className="text-gray-300 leading-relaxed mb-8">
                  As a dedicated developer, I continuously explore cutting-edge technologies including cloud services, 
                  containerization, and modern frontend frameworks. My goal is to contribute to impactful projects 
                  while developing solutions that make a meaningful difference.
                </p>

                {/* Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  <div className="group/sub relative overflow-hidden flex items-start gap-3 p-4 rounded-lg border border-gray-700/70 hover:border-cyan-400/40 bg-gray-800/30 hover:bg-gray-800/50 transition-all">
                    <span aria-hidden="true" className="pointer-events-none absolute top-0 -left-32 h-full w-32 skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover/sub:translate-x-[300%]"></span>
                    <div className="mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-cyan-400" aria-hidden="true">
                        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                        <path d="M22 10v6"></path>
                        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wide">Experience</div>
                      <div className="text-white font-medium">2+ Years • Full-Stack Development</div>
                    </div>
                  </div>
                  
                  <div className="group/sub relative overflow-hidden flex items-start gap-3 p-4 rounded-lg border border-gray-700/70 hover:border-cyan-400/40 bg-gray-800/30 hover:bg-gray-800/50 transition-all">
                    <span aria-hidden="true" className="pointer-events-none absolute top-0 -left-32 h-full w-32 skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover/sub:translate-x-[300%]"></span>
                    <div className="mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-pink-400" aria-hidden="true">
                        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wide">Hobbies</div>
                      <div className="text-white font-medium">Coding, Gaming, Learning</div>
                    </div>
                  </div>
                  
                  <div className="group/sub relative overflow-hidden flex items-start gap-3 p-4 rounded-lg border border-gray-700/70 hover:border-cyan-400/40 bg-gray-800/30 hover:bg-gray-800/50 transition-all">
                    <span aria-hidden="true" className="pointer-events-none absolute top-0 -left-32 h-full w-32 skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover/sub:translate-x-[300%]"></span>
                    <div className="mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-400" aria-hidden="true">
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wide">Email</div>
                      <div className="text-white font-medium text-xs sm:text-base break-all">ursa.warrior.dev0127@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="group/sub relative overflow-hidden flex items-start gap-3 p-4 rounded-lg border border-gray-700/70 hover:border-cyan-400/40 bg-gray-800/30 hover:bg-gray-800/50 transition-all">
                    <span aria-hidden="true" className="pointer-events-none absolute top-0 -left-32 h-full w-32 skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover/sub:translate-x-[300%]"></span>
                    <div className="mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-violet-400" aria-hidden="true">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wide">Location</div>
                      <div className="text-white font-medium">Remote • Worldwide</div>
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-cyan-400" aria-hidden="true">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span className="text-sm md:text-base">Actively building modern web applications with React & Next.js</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-cyan-400" aria-hidden="true">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span className="text-sm md:text-base">Focused on TypeScript, Node.js, PostgreSQL, and Cloud Services</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-cyan-400" aria-hidden="true">
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span className="text-sm md:text-base">Open to freelance projects, collaborations, and full-time positions</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download CV"
                    className="relative group inline-flex items-center justify-center rounded-lg px-5 py-2.5 font-semibold text-white hover:-translate-y-0.5 transition-transform duration-200"
                  >
                    <span className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></span>
                    <span className="relative z-10 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-gray-900/80 px-4 py-2.5 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-cyan-300" aria-hidden="true">
                        <path d="M12 15V3"></path>
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <path d="m7 10 5 5 5-5"></path>
                      </svg>
                      <span>Download CV</span>
                    </span>
                    <span className="absolute inset-0 rounded-xl blur-xl opacity-0 transition-opacity duration-300 group-hover:opacity-30 bg-cyan-400/30"></span>
                  </a>
                  
                  <a
                    href="mailto:ursa.warrior.dev0127@gmail.com"
                    aria-label="Contact Me"
                    className="relative group inline-flex items-center justify-center rounded-lg px-5 py-2.5 font-semibold text-white hover:-translate-y-0.5 transition-transform duration-200"
                  >
                    <span className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-cyan-400/60 via-purple-500/60 to-pink-500/60 opacity-60"></span>
                    <span className="relative z-10 inline-flex w-full items-center justify-center gap-2 rounded-[10px] border border-gray-700 bg-gray-900/60 px-4 py-2.5 text-sm transition-colors group-hover:border-cyan-400/60">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-cyan-300" aria-hidden="true">
                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                        <path d="m21.854 2.147-10.94 10.939"></path>
                      </svg>
                      <span>Contact Me</span>
                    </span>
                    <span className="absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity bg-cyan-400/20"></span>
                  </a>
                </div>

                {/* Availability Status */}
                <div className="mt-6 flex items-center gap-3 text-gray-400 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-green-400" aria-hidden="true">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span>Available for freelance • Open to full-time positions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
