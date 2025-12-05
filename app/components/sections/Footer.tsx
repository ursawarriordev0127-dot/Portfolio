"use client";

import { MapPin, Mail, Github, Linkedin, Instagram, Send, Code, Palette, Zap } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer className="relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
      </div>

      {/* Gradient Borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 group-hover:shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      UW
                    </span>
                  </div>
                </div>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              </div>
              <div>
                <h2
                  className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300"
                  style={{ fontFamily: 'Dancing Script, cursive' }}
                >
                  Ursa Warrior
                </h2>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  Full-Stack Developer
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-mono">Available for work</span>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Creating immersive digital experiences through cutting-edge web development and innovative solutions.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Your Location</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span className="text-sm">ursa.warrior.dev0127@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"></div>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
              {[
                { id: "home", text: "Home" },
                { id: "about", text: "About" },
                { id: "experiences", text: "Experience" },
                { id: "skills", text: "Skills" },
                { id: "projects", text: "Projects" },
                { id: "contact", text: "Contact" }
              ].map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 text-sm font-medium group flex items-center text-left"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  {link.text}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative">
              Services
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </h3>
            <div className="space-y-4">
              {[
                { icon: Code, text: "Full-Stack Development", color: "purple" },
                { icon: Palette, text: "UI/UX Design", color: "purple" },
                { icon: Zap, text: "Performance Optimization", color: "purple" }
              ].map((service, index) => (
                <div key={service.text} className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                    <service.icon className={`w-4 h-4 text-purple-400 group-hover:text-pink-400 transition-colors duration-300`} />
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors duration-300 text-sm font-medium">
                    {service.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stay Connected */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white relative">
              Stay Connected
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-pink-500 to-cyan-500"></div>
            </h3>

            <div className="space-y-4">
              <p className="text-gray-400 text-sm">Get updates on new projects and insights</p>

              <form className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 pr-14 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    title="Subscribe to newsletter"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-md flex items-center justify-center text-black hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-4">
              <p className="text-gray-400 text-sm">Follow me on social media</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { href: "https://github.com", icon: Github, label: "GitHub", color: "gray" },
                  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn", color: "blue" },
                  { href: "mailto:ursa.warrior.dev0127@gmail.com", icon: Mail, label: "Email", color: "red" },
                  { href: "https://instagram.com", icon: Instagram, label: "Instagram", color: "pink" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-gray-800/50 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-${social.color}-400 hover:bg-${social.color}-500/10 transition-all duration-300 border border-gray-700 hover:border-gray-600 hover:shadow-lg group`}
                    aria-label={social.label}
                    tabIndex={0}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-gray-800/50">
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {new Date().getFullYear()} Ursa Warrior. All rights reserved.</span>
              <span>•</span>
              <span>Built with</span>
              <span className="text-red-400 animate-pulse">❤️</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/site-map" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>

          <div className="md:hidden space-y-4">
            <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
              <span>© {new Date().getFullYear()} Ursa Warrior. All rights reserved.</span>
              <span className="sm:hidden">•</span>
              <span className="sm:hidden">Built with</span>
              <span className="sm:hidden text-red-400 animate-pulse">❤️</span>
            </div>
            <div className="flex items-center justify-center space-x-1 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Privacy Policy</a>
              <span className="text-gray-600 mx-1 text-2xl">|</span>
              <a href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Terms of Service</a>
              <span className="text-gray-600 mx-1 text-2xl">|</span>
              <a href="/site-map" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/60 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </footer>
  );
}