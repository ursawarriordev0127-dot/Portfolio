"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamic import for 3D Earth to avoid SSR issues
const Earth3D = dynamic(() => import("../3D/Earth3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full border-4 border-cyan-400/30 border-t-cyan-400 animate-spin" />
        <div className="text-cyan-400 text-sm font-mono">Initializing 3D Space...</div>
      </div>
    </div>
  ),
});

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-80px)] w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-10 px-6 md:px-12 overflow-hidden">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[50vmax] w-[50vmax] rounded-full blur-3xl opacity-25 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35)_0%,rgba(0,0,0,0)_60%)]"></div>
        <div className="absolute -bottom-32 -right-32 h-[55vmax] w-[55vmax] rounded-full blur-3xl opacity-25 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35)_0%,rgba(0,0,0,0)_60%)]"></div>
      </div>

      {/* Left Content */}
      <div className="order-1 lg:order-1 flex flex-col gap-6">
        {/* Animated Logo */}
        <div className="flex items-center gap-4">
          <div className="relative w-28 h-28 md:w-36 md:h-36">
            {/* Spinning Rings */}
            <div className="absolute inset-0 rounded-full conic-ring animate-spin-slower opacity-80"></div>
            <div className="absolute inset-0 rounded-full conic-ring-2 animate-spin-reverse opacity-60"></div>

            {/* Inner Circle */}
            <div className="absolute inset-2 rounded-full border border-cyan-300/30 bg-neutral-900/60 backdrop-blur-md shadow-[0_0_40px_rgba(34,211,238,0.25)]"></div>

            {/* Animated Dots */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 animate-spin-slower">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_12px_2px_rgba(34,211,238,0.8)]"></div>
              </div>
              <div className="absolute inset-0 animate-spin-reverse">
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-fuchsia-300 shadow-[0_0_12px_2px_rgba(217,70,239,0.7)]"></div>
              </div>
            </div>

            {/* Logo Image */}
            <div className="absolute inset-3 rounded-full overflow-hidden">
              <Image
                alt="Logo"
                decoding="async"
                fill
                className="object-contain rounded-full"
                sizes="100vw"
                src="/assets/avatar.jfif"
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gradient-animated font-orbitron">
          Ursa Warrior
        </h1>

        {/* Title */}
        <div className="font-mono">
          <div className="flex items-center gap-2">
            <span className="text-pink-400 transition-colors duration-300 text-xl md:text-3xl">&gt;</span>
            <span className="text-pink-400 transition-colors duration-300 text-lg md:text-2xl">Full-Stack Developer<span className="animate-pulse">|</span></span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-neutral-300 max-w-2xl leading-relaxed">
          Creating immersive digital experiences through cutting-edge web development and innovative solutions.
          Passionate about building scalable applications with modern technologies.
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-200 border border-yellow-500/30 backdrop-blur-sm shadow-[0_0_20px_rgba(234,179,8,0.15)]">
            React & Next.js
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-200 border border-blue-500/30 backdrop-blur-sm shadow-[0_0_20px_rgba(59,130,246,0.15)]">
            TypeScript
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-200 border border-purple-500/30 backdrop-blur-sm shadow-[0_0_20px_rgba(168,85,247,0.15)]">
            Node.js
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-200 border border-green-500/30 backdrop-blur-sm shadow-[0_0_20px_rgba(34,197,94,0.15)]">
            Tailwind CSS
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-red-500/10 to-pink-500/10 text-red-200 border border-red-500/30 backdrop-blur-sm shadow-[0_0_20px_rgba(239,68,68,0.15)]">
            PostgreSQL
          </span>
          <span className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 text-indigo-200 border border-indigo-500/30 backdrop-blur-sm shadow-[0_0_20px_rgba(99,102,241,0.15)]">
            AWS & Docker
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-6 py-3 rounded-full bg-transparent border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-border transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] overflow-hidden"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-[2px]">
              <div className="w-full h-full rounded-full bg-black"></div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
            <div className="relative flex items-center gap-2 text-white font-medium z-10">
              <svg className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              <span>View Projects</span>
              <svg className="w-4 h-4 text-purple-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-6 py-3 rounded-full bg-transparent border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-border transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] overflow-hidden"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-[2px]">
              <div className="w-full h-full rounded-full bg-black"></div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-full group-hover:translate-x-0"></div>
            <div className="relative flex items-center gap-2 text-white font-medium z-10">
              <svg className="w-4 h-4 text-cyan-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>Contact Me</span>
            </div>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 pt-4">
          <a target="_blank" aria-label="GitHub" className="group relative" href="https://github.com">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-300"></div>
            <div className="relative w-12 h-12 rounded-full bg-black/50 border border-gray-700/50 backdrop-blur-sm flex items-center justify-center group-hover:border-gray-500/70 group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(156,163,175,0.3)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github text-gray-300 group-hover:text-white transition-colors duration-300">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </div>
          </a>
          <a target="_blank" aria-label="LinkedIn" className="group relative" href="https://linkedin.com">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-300"></div>
            <div className="relative w-12 h-12 rounded-full bg-black/50 border border-blue-700/50 backdrop-blur-sm flex items-center justify-center group-hover:border-blue-500/70 group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin text-blue-300 group-hover:text-blue-100 transition-colors duration-300">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
          </a>
          <a aria-label="Email" className="group relative" href="mailto:ursa.warrior.dev0127@gmail.com">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-400 to-pink-600 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-300"></div>
            <div className="relative w-12 h-12 rounded-full bg-black/50 border border-red-700/50 backdrop-blur-sm flex items-center justify-center group-hover:border-red-500/70 group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail text-red-300 group-hover:text-red-100 transition-colors duration-300">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
            </div>
          </a>
          <a target="_blank" aria-label="Instagram" className="group relative" href="https://instagram.com">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 opacity-0 group-hover:opacity-20 blur-sm transition-all duration-300"></div>
            <div className="relative w-12 h-12 rounded-full bg-black/50 border border-purple-700/50 backdrop-blur-sm flex items-center justify-center group-hover:border-purple-500/70 group-hover:scale-110 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram text-purple-300 group-hover:text-pink-100 transition-colors duration-300">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </div>
          </a>
        </div>

        {/* Statistics Cards */}
        <div className="mt-6 grid grid-cols-3 gap-4 max-w-lg">
          <div className="group relative rounded-xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm p-4 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                2+
              </div>
              <div className="text-xs text-yellow-300 font-medium mt-1">Years Experience</div>
            </div>
          </div>
          <div className="group relative rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm p-4 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                15+
              </div>
              <div className="text-xs text-blue-300 font-medium mt-1">Projects Delivered</div>
            </div>
          </div>
          <div className="group relative rounded-xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm p-4 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                100%
              </div>
              <div className="text-xs text-green-300 font-medium mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Mobile */}
        <div className="flex justify-center mt-8 lg:hidden">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative flex flex-col items-center gap-3 cursor-pointer"
            aria-label="Scroll down to experience section"
          >
            <div className="relative w-16 h-16 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-border p-[2px] group-hover:animate-spin">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-30 animate-pulse"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-4 h-4 text-cyan-400 group-hover:text-white transition-colors duration-300 relative z-10">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="sr-only">Scroll down to view experience section</span>
          </button>
        </div>
      </div>

      {/* Right Content - 3D Earth Visualization */}
      <div className="order-2 lg:order-2 relative w-full mx-auto h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[60vh] xl:h-[65vh] 2xl:h-[65vh] max-w-[680px] lg:max-w-[720px] sm:mb-8">
        {/* Outer glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-50" />
        
        {/* Main 3D container */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-700/30 bg-black/50 backdrop-blur-sm">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-400/50 rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-purple-400/50 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-pink-400/50 rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyan-400/50 rounded-br-lg" />
          
          {/* 3D Earth */}
          <Earth3D />
          
          {/* HUD overlay */}
          <div className="absolute top-4 right-4 pointer-events-none">
            <div className="px-3 py-1 rounded-full bg-black/50 border border-cyan-400/30 backdrop-blur-sm">
              <span className="text-xs font-mono text-cyan-400">INTERACTIVE MODE</span>
            </div>
          </div>
          
          {/* Status indicators */}
          <div className="absolute bottom-4 left-4 pointer-events-none">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] font-mono text-green-400">ONLINE</span>
              </div>
              <div className="w-px h-3 bg-gray-600" />
              <span className="text-[10px] font-mono text-gray-400">EARTH-01</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop */}
      <div className="hidden lg:flex absolute bottom-4 md:bottom-6 left-0 right-0 mx-auto w-max z-10 pointer-events-auto">
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative flex flex-col items-center gap-3 cursor-pointer"
          aria-label="Scroll down to experience section"
        >
          <div className="relative w-16 h-16 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-border p-[2px] group-hover:animate-spin">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-30 animate-pulse"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-4 h-4 text-cyan-400 group-hover:text-white transition-colors duration-300 relative z-10">
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <span className="sr-only">Scroll down to view experience section</span>
        </button>
      </div>
    </section>
  );
}

