import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero/Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Welcome
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            I'm Ursa Warrior, a passionate full-stack developer creating amazing digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:from-cyan-500 hover:via-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border-2 border-gray-300 dark:border-gray-600 hover:border-cyan-400 text-gray-700 dark:text-gray-300 hover:text-cyan-400 font-semibold py-3 px-8 rounded-full transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get to know more about my journey, skills, and passion for development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Who I Am</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a dedicated full-stack developer with a passion for creating beautiful, functional,
                and user-centered digital experiences. With expertise in modern web technologies,
                I bring ideas to life through clean code and innovative solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Always Learning</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Technology evolves rapidly, and I love staying ahead of the curve with the latest tools and frameworks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiences" className="py-20 bg-gray-50 dark:bg-gray-800 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey and key milestones.
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full-Stack Developer</h3>
                  <p className="text-cyan-400 font-medium">Current Position</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">2024 - Present</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Developing modern web applications using React, Next.js, Node.js, and various other technologies.
                Focus on creating scalable solutions and exceptional user experiences.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Frontend Developer</h3>
                  <p className="text-cyan-400 font-medium">Previous Role</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">2023 - 2024</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Specialized in creating responsive and interactive user interfaces with modern JavaScript frameworks
                and CSS technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-900 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React", "Next.js", "TypeScript", "Node.js",
              "Tailwind CSS", "PostgreSQL", "MongoDB", "Git",
              "Docker", "AWS", "Python", "JavaScript"
            ].map((skill) => (
              <div key={skill} className="bg-gradient-to-br from-cyan-400/10 to-purple-500/10 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300">
                <span className="font-semibold text-gray-900 dark:text-white">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Some of my recent work and personal projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Project {project}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    A brief description of this amazing project and the technologies used.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-xs rounded-full">
                      React
                    </span>
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">
                      Next.js
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    >
                      Live Demo →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
