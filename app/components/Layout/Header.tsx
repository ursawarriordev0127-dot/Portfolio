"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Home, User, Briefcase, Wrench, FolderOpen, Mail, Menu, X } from "lucide-react";

const navItems = [
  { id: 'home', label: 'Home', icon: Home, gradient: 'from-cyan-400 to-blue-500' },
  { id: 'about', label: 'About', icon: User, gradient: 'from-purple-400 to-pink-500' },
  { id: 'experiences', label: 'Experience', icon: Briefcase, gradient: 'from-green-400 to-emerald-500' },
  { id: 'skills', label: 'Skills', icon: Wrench, gradient: 'from-orange-400 to-red-500' },
  { id: 'projects', label: 'Projects', icon: FolderOpen, gradient: 'from-indigo-400 to-purple-500' },
  { id: 'contact', label: 'Contact', icon: Mail, gradient: 'from-pink-400 to-rose-500' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');
  // Initialize with placeholder to avoid hydration mismatch
  const [currentTime, setCurrentTime] = useState("--:--:--");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const updateActiveSection = () => {
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

  useEffect(() => {
    const initializeActiveSection = () => {
      const urlHash = window.location.hash.replace('#', '');
      const validSections = ['home', 'about', 'experiences', 'skills', 'projects', 'contact'];

      if (urlHash && validSections.includes(urlHash)) {
        setActiveSection(urlHash);
        return;
      }

      setTimeout(() => {
        updateActiveSection();
      }, 100);
    };

    initializeActiveSection();

    const handleScroll = () => {
      updateActiveSection();
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Start time updates only on client to avoid hydration mismatch
  useEffect(() => {
    const getCurrentTime = () => {
      return new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    };
    
    // Update time immediately on mount
    setCurrentTime(getCurrentTime());
    
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 overflow-x-hidden ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-xl shadow-2xl border-b border-cyan-400/20' 
          : 'bg-black/40 backdrop-blur-xl shadow-2xl border-b border-cyan-400/20'
      }`}>
        {/* Safe area for mobile devices */}
        <div className="pt-[env(safe-area-inset-top)]"></div>

        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-gray-900/30 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"></div>
        
        {/* Cyber grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-15">
          <div className="absolute inset-0 cyber-grid"></div>
        </div>
        
        {/* Top shine effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-transparent opacity-40"></div>
        
        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

        {/* Main content */}
        <div className="relative z-10 mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 md:py-4 min-h-16">
          {/* Left side - Logo and Name */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="relative group cursor-pointer" tabIndex={0} onClick={() => scrollToSection('home')}>
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300 will-change-transform">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden will-change-transform">
                  <div className="relative w-full h-full">
                    <Image
                      alt="UW Logo"
                      decoding="async"
                      fill
                      className="object-cover rounded-full"
                      sizes="(max-width: 768px) 40px, 48px"
                      src="/assets/avatar.jfif"
                    />
                    {/* Fallback initials */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-xl md:text-2xl font-bold text-white opacity-0">
                      UW
                    </div>
                  </div>
                </div>
              </div>
              {/* Hover glow */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
            </div>

            {/* Name and Status */}
            <div className="flex flex-col">
              <h1
                className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent cursor-pointer transition-all duration-300 hover:scale-105"
                style={{ fontFamily: '"Dancing Script", cursive' }}
                onClick={() => scrollToSection('home')}
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

          {/* Center - Navigation (Desktop) */}
          <div className="hidden xl:flex items-center justify-center flex-1 space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <div key={item.id} style={{ opacity: 1, transform: 'none' }}>
                  <button
                    className={`relative group inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
                      isActive
                        ? 'text-white bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent'
                    }`}
                    aria-label={`Navigate to ${item.label} section`}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                  >
                    <Icon
                      className={`w-4 h-4 transition-colors duration-300 ${
                        isActive ? 'text-cyan-400' : 'text-gray-400 group-hover:text-white'
                      }`}
                      aria-hidden="true"
                    />
                    <span className="text-sm">{item.label}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20"></div>
                    )}
                    
                    {/* Hover effect */}
                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right side - Status indicators (Desktop) */}
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

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              className="relative p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-cyan-400/50 active:border-cyan-400/70 transition-all duration-300 group touch-manipulation"
              aria-label={isMobileMenuOpen ? "Close Mobile Menu" : "Open Mobile Menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              tabIndex={0}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="text-white text-xl">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 xl:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div className={`absolute inset-x-4 top-24 bottom-4 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}>
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="absolute inset-0 cyber-grid"></div>
          </div>

          {/* Menu Items */}
          <div className="relative z-10 p-6 space-y-3 overflow-y-auto h-full">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-0.5">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-sm font-bold text-cyan-400">
                    DP
                  </div>
                </div>
                <div>
                  <div className="text-white font-semibold">Navigation</div>
                  <div className="text-xs text-gray-400">Select a section</div>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-400/50 transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Navigation Items */}
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border border-cyan-400/30'
                      : 'bg-gray-800/30 border border-gray-700/50 hover:bg-gray-800/50 hover:border-gray-600'
                  }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.3s ease ${index * 50}ms`
                  }}
                  onClick={() => scrollToSection(item.id)}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-500' 
                      : 'bg-gray-800'
                  }`}>
                    <Icon className={`w-5 h-5 ${isActive ? 'text-black' : 'text-gray-400'}`} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className={`font-medium ${isActive ? 'text-white' : 'text-gray-300'}`}>
                      {item.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.id === 'home' && 'Back to top'}
                      {item.id === 'about' && 'Learn about me'}
                      {item.id === 'experiences' && 'My journey'}
                      {item.id === 'skills' && 'What I know'}
                      {item.id === 'projects' && 'My work'}
                      {item.id === 'contact' && 'Get in touch'}
                    </div>
                  </div>
                  {isActive && (
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                  )}
                </button>
              );
            })}

            {/* Status Section */}
            <div className="pt-4 mt-4 border-t border-gray-700/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800/50 border border-gray-700">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-gray-300 text-xs font-mono">ONLINE</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800/50 border border-gray-700">
                  <span className="text-gray-400 text-xs font-mono">Server:</span>
                  <span className="text-xs font-mono text-green-400">UP</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 text-center">
              <p className="text-xs text-gray-500">
                © 2025 Ursa Warrior. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-20 md:h-24"></div>
    </>
  );
}
