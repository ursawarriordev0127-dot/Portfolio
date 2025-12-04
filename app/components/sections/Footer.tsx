export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Ursa Warrior
            </h3>
            <p className="text-gray-400">
              Full-stack developer passionate about creating beautiful and functional web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                About
              </a>
              <a href="#experiences" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Experience
              </a>
              <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 ursa.warrior.dev0127@gmail.com</p>
              <p>📱 Available for freelance projects</p>
              <p>🌍 Based in Your Location</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ursa Warrior. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
