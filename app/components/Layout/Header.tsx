"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Home, User, Briefcase, Wrench, FolderOpen, Mail } from "lucide-react";
import "./Header.css";

const getCurrentTime = () => {
  return new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experiences', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="header">
      <div className="flex items-center space-x-4">
        <div className="relative cursor-pointer" tabIndex={0}>
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 transition-all duration-300 will-change-transform hover:shadow-lg hover:shadow-cyan-400/25">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden will-change-transform">
              <div className="relative w-full h-full">
                <Image
                  alt="Portfolio Logo"
                  decoding="async"
                  fill
                  className="object-cover rounded-full"
                  sizes="(max-width: 768px) 40px, 48px"
                  src="/assets/logo2.avif"
                />
              </div>
            </div>
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 blur transition-opacity duration-300 hover:opacity-20"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <h1
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent cursor-pointer transition-all duration-300"
            style={{
              fontFamily: '"Dancing Script", cursive',
              textShadow: 'rgba(0, 255, 255, 0) 0px 0px 0px',
              transform: 'none'
            }}
          >
            Ursa Warrior
          </h1>
          <div className="flex items-center space-x-2">
            <span
              className="text-cyan-400 text-xs font-mono"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              {currentTime}
            </span>
            <div className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-400 font-mono">Available</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:flex items-center justify-center flex-1 space-x-2">
        <div style={{ opacity: 1, transform: 'none' }}>
          <button
            className={`nav-button relative inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
              activeSection === 'home'
                ? 'text-white bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30'
                : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent'
            }`}
            aria-label="Navigate to Home section"
            type="button"
            onClick={() => scrollToSection('home')}
          >
            <Home className={`w-4 h-4 transition-colors duration-300 ${
              activeSection === 'home' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
            }`} />
            <span className="text-sm">Home</span>
            {activeSection === 'home' && (
              <>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20"></div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
              </>
            )}
            {activeSection !== 'home' && (
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
            )}
          </button>
        </div>
        <div style={{ opacity: 1, transform: 'none' }}>
          <button
            className={`nav-button relative inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
              activeSection === 'about'
                ? 'text-white bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30'
                : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent'
            }`}
            aria-label="Navigate to About section"
            type="button"
            onClick={() => scrollToSection('about')}
          >
            <User className={`w-4 h-4 transition-colors duration-300 ${
              activeSection === 'about' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
            }`} />
            <span className="text-sm">About</span>
            {activeSection === 'about' && (
              <>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20"></div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
              </>
            )}
            {activeSection !== 'about' && (
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
            )}
          </button>
        </div>
        <div style={{ opacity: 1, transform: 'none' }}>
          <button
            className={`nav-button relative inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
              activeSection === 'experiences'
                ? 'text-white bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30'
                : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent'
            }`}
            aria-label="Navigate to Experience section"
            type="button"
            onClick={() => scrollToSection('experiences')}
          >
            <Briefcase className={`w-4 h-4 transition-colors duration-300 ${
              activeSection === 'experiences' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
            }`} />
            <span className="text-sm">Experience</span>
            {activeSection === 'experiences' && (
              <>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20"></div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
              </>
            )}
            {activeSection !== 'experiences' && (
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
            )}
          </button>
        </div>
        <div style={{ opacity: 1, transform: 'none' }}>
          <button
            className={`nav-button relative inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
              activeSection === 'skills'
                ? 'text-white bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30'
                : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent'
            }`}
            aria-label="Navigate to Skills section"
            type="button"
            onClick={() => scrollToSection('skills')}
          >
            <Wrench className={`w-4 h-4 transition-colors duration-300 ${
              activeSection === 'skills' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
            }`} />
            <span className="text-sm">Skills</span>
            {activeSection === 'skills' && (
              <>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20"></div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
              </>
            )}
            {activeSection !== 'skills' && (
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-400 to-red-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
            )}
          </button>
        </div>
        <div style={{ opacity: 1, transform: 'none' }}>
          <button
            className={`nav-button relative inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
              activeSection === 'projects'
                ? 'text-white bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30'
                : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent'
            }`}
            aria-label="Navigate to Projects section"
            type="button"
            onClick={() => scrollToSection('projects')}
          >
            <FolderOpen className={`w-4 h-4 transition-colors duration-300 ${
              activeSection === 'projects' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
            }`} />
            <span className="text-sm">Projects</span>
            {activeSection === 'projects' && (
              <>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20"></div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
              </>
            )}
            {activeSection !== 'projects' && (
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-400 to-purple-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
            )}
          </button>
        </div>
        <div style={{ opacity: 1, transform: 'none' }}>
          <button
            className={`nav-button relative inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
              activeSection === 'contact'
                ? 'text-white bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30'
                : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent'
            }`}
            aria-label="Navigate to Contact section"
            type="button"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className={`w-4 h-4 transition-colors duration-300 ${
              activeSection === 'contact' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'
            }`} />
            <span className="text-sm">Contact</span>
            {activeSection === 'contact' && (
              <>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20"></div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
              </>
            )}
            {activeSection !== 'contact' && (
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-400 to-rose-500 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
            )}
          </button>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-gray-300 text-xs font-mono">ONLINE</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700">
          <span className="text-gray-400 text-xs font-mono">Server:</span>
          <span className="text-xs font-mono text-green-400">UP</span>
        </div>
      </div>
    </header>
  );
}
