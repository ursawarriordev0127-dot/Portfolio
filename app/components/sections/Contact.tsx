"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import {
  MapPin,
  Mail,
  Linkedin,
  Github,
  Instagram,
  Send,
  User,
  Tag,
  MessageSquare
} from "lucide-react";

// Dynamic import for 3D Globe to avoid SSR issues
const ConnectGlobe = dynamic(() => import("../3D/ConnectGlobe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-cyan-400/20 border-t-cyan-400 animate-spin" />
          <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-r-purple-500/50 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
        </div>
        <div className="text-cyan-400 text-sm font-mono">Connecting to Network...</div>
      </div>
    </div>
  ),
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", category: "", message: "" });
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section id="contact" className="py-24 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Connect Together
            </span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded mb-4"></div>
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Let&apos;s connect and explore new opportunities together
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-10 items-stretch grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto,auto]">
          {/* Left Column */}
          <div className="space-y-6">
            {/* 3D Connect Globally Visualization */}
            <div className="relative group w-full h-[420px] md:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-gray-700/70 bg-gray-900/60">
              {/* Conic gradient border */}
              <div className="pointer-events-none absolute -inset-[1px] rounded-2xl z-10">
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "conic-gradient(rgba(34, 211, 238, 0.9), rgba(168, 85, 247, 0.9), rgba(236, 72, 153, 0.9), rgba(34, 211, 238, 0.9))",
                    mask: "linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)) content-box exclude, linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))",
                    padding: "1px",
                  }}
                ></div>
              </div>

              {/* 3D Globe Component */}
              <div className="absolute inset-0">
                <ConnectGlobe />
              </div>

              {/* Glow effect */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl blur-2xl opacity-30 bg-gradient-to-r from-cyan-400/30 via-purple-500/30 to-pink-500/30 -z-10"></div>
            </div>

            {/* Contact Info Card */}
            <div className="relative group overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/60 backdrop-blur p-6">
              {/* Shine effect */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-0 h-full w-32 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                style={{ transform: "translateX(-120%)" }}
              ></span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Contact Details */}
                <div className="space-y-5">
                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-black">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wide">
                        Location
                      </div>
                      <div className="text-white font-semibold break-all">
                        Gujarat, India
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-black">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wide">
                        Email
                      </div>
                      <div className="text-white font-semibold break-all">
                        dhruvpatel16120@gmail.com
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-black">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wide">
                        LinkedIn
                      </div>
                      <div className="text-white font-semibold break-all">
                        dhruvpatel16120
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-white font-semibold mb-4">Connect on social</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <a
                      href="https://www.linkedin.com/in/dhruvpatel16120"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-gray-700/70 hover:border-cyan-400/50 bg-gray-800/40 hover:bg-gray-800/60 px-4 py-3 transition"
                    >
                      <span className="inline-flex items-center gap-3 text-gray-200">
                        <Linkedin className="w-5 h-5 text-cyan-400" />
                        LinkedIn
                      </span>
                      <span className="text-xs text-gray-400">/in/dhruvpatel16120</span>
                    </a>

                    <a
                      href="https://github.com/dhruvpatel16120"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-gray-700/70 hover:border-cyan-400/50 bg-gray-800/40 hover:bg-gray-800/60 px-4 py-3 transition"
                    >
                      <span className="inline-flex items-center gap-3 text-gray-200">
                        <Github className="w-5 h-5 text-gray-200" />
                        GitHub
                      </span>
                      <span className="text-xs text-gray-400">@dhruvpatel16120</span>
                    </a>

                    <a
                      href="https://instagram.com/dhruv_patel_16120"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-gray-700/70 hover:border-cyan-400/50 bg-gray-800/40 hover:bg-gray-800/60 px-4 py-3 transition"
                    >
                      <span className="inline-flex items-center gap-3 text-gray-200">
                        <Instagram className="w-5 h-5 text-pink-400" />
                        Instagram
                      </span>
                      <span className="text-xs text-gray-400">@dhruv_patel_16120</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="relative h-full lg:row-span-2"
          >
            {/* Conic gradient border */}
            <div
              className="pointer-events-none absolute -inset-[1px] rounded-2xl"
              style={{
                background:
                  "conic-gradient(rgba(34, 211, 238, 0.6), rgba(168, 85, 247, 0.6), rgba(236, 72, 153, 0.6), rgba(34, 211, 238, 0.6))",
                mask: "linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)) content-box exclude, linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))",
                padding: "1px",
              }}
            ></div>

            {/* Corner accents - Top Left */}
            <div className="pointer-events-none absolute top-2 left-2 z-20">
              <span className="block h-[3px] w-12 md:w-14 rounded-full bg-gradient-to-r from-cyan-400 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.55)]"></span>
              <span className="block h-12 md:h-14 w-[3px] rounded-full bg-gradient-to-b from-cyan-400 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.55)]"></span>
            </div>

            {/* Corner accents - Top Right */}
            <div className="pointer-events-none absolute top-2 right-2 text-right z-20">
              <span className="block h-[3px] w-12 md:w-14 rounded-full bg-gradient-to-l from-purple-500 to-transparent shadow-[0_0_12px_rgba(168,85,247,0.55)]"></span>
              <span className="block h-12 md:h-14 w-[3px] rounded-full bg-gradient-to-b from-purple-500 to-transparent shadow-[0_0_12px_rgba(168,85,247,0.55)] ml-auto"></span>
            </div>

            {/* Corner accents - Bottom Left */}
            <div className="pointer-events-none absolute bottom-2 left-2 z-20 transform -rotate-90">
              <span className="block h-[3px] w-10 sm:w-12 md:w-14 rounded-full bg-gradient-to-r from-pink-500 to-transparent shadow-[0_0_12px_rgba(236,72,153,0.55)]"></span>
              <span className="block h-10 sm:h-12 md:h-14 w-[3px] rounded-full bg-gradient-to-t from-pink-500 to-transparent shadow-[0_0_12px_rgba(236,72,153,0.55)] rotate-180"></span>
            </div>

            {/* Corner accents - Bottom Right */}
            <div className="pointer-events-none absolute bottom-2 right-2 text-right z-20 transform rotate-90">
              <span className="block h-[3px] w-10 sm:w-12 md:w-14 rounded-full bg-gradient-to-l from-cyan-400 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.55)]"></span>
              <span className="block h-10 sm:h-12 md:h-14 w-[3px] rounded-full bg-gradient-to-t from-cyan-400 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.55)] ml-auto rotate-180"></span>
            </div>

            {/* Form Content */}
            <div className="relative rounded-2xl border border-gray-700 bg-gray-900/60 backdrop-blur p-6 md:p-8 h-full flex flex-col">
              {/* Form Header */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Send a message
                </h3>
                <p className="text-sm text-gray-400">
                  I typically reply within a day.
                </p>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                {/* Name */}
                <div className="relative">
                  <label className="block text-sm text-gray-400 mb-1">Name</label>
                  <User className="w-4 h-4 absolute left-3 top-[42px] text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-gray-800/70 border pl-9 pr-4 py-3 text-white outline-none transition-colors border-gray-700 focus:border-cyan-400"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="block text-sm text-gray-400 mb-1">Email</label>
                  <Mail className="w-4 h-4 absolute left-3 top-[42px] text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-gray-800/70 border pl-9 pr-4 py-3 text-white outline-none transition-colors border-gray-700 focus:border-cyan-400"
                  />
                </div>

                {/* Subject */}
                <div className="md:col-span-2 relative">
                  <label className="block text-sm text-gray-400 mb-1">Subject</label>
                  <Tag className="w-4 h-4 absolute left-3 top-[42px] text-gray-400" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="How can I help you?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-gray-800/70 border pl-9 pr-4 py-3 text-white outline-none transition-colors border-gray-700 focus:border-cyan-400"
                  />
                </div>

                {/* Category */}
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-400 mb-1">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-gray-800/70 border px-4 py-3 text-white outline-none transition-colors border-gray-700 focus:border-cyan-400"
                  >
                    <option value="">--select--</option>
                    <option value="Freelance work">Freelance work</option>
                    <option value="Bug report">Bug report</option>
                    <option value="General feedback">General feedback</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Speaking/Workshop">Speaking/Workshop</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="md:col-span-2 relative flex flex-col">
                  <label className="block text-sm text-gray-400 mb-1">Message</label>
                  <MessageSquare className="w-4 h-4 absolute left-3 top-9 text-gray-400" />
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-gray-800/70 border pl-9 pr-4 py-3 text-white outline-none resize-none min-h-[160px] flex-1 transition-colors border-gray-700 focus:border-cyan-400"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm"></div>
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    aria-label="Send message"
                    className="relative inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-black overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                  >
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></span>
                    <span className="absolute inset-0 rounded-xl blur-xl opacity-30 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
