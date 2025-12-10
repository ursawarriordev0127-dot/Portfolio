"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

// Pre-defined particle positions to avoid hydration mismatch
const PARTICLES = [
  { left: 5, top: 70, duration: 4.8, delay: 0.5 },
  { left: 15, top: 20, duration: 5.2, delay: 1.2 },
  { left: 25, top: 85, duration: 3.8, delay: 0.8 },
  { left: 35, top: 45, duration: 6.1, delay: 1.5 },
  { left: 45, top: 15, duration: 4.2, delay: 0.3 },
  { left: 55, top: 75, duration: 5.5, delay: 1.8 },
  { left: 65, top: 30, duration: 3.5, delay: 0.6 },
  { left: 75, top: 90, duration: 4.9, delay: 1.1 },
  { left: 85, top: 55, duration: 5.8, delay: 0.9 },
  { left: 95, top: 10, duration: 4.1, delay: 1.4 },
  { left: 10, top: 60, duration: 5.3, delay: 0.4 },
  { left: 20, top: 35, duration: 4.6, delay: 1.7 },
  { left: 30, top: 95, duration: 3.9, delay: 0.7 },
  { left: 40, top: 25, duration: 6.4, delay: 1.3 },
  { left: 50, top: 80, duration: 4.4, delay: 0.2 },
  { left: 60, top: 40, duration: 5.1, delay: 1.6 },
  { left: 70, top: 5, duration: 3.7, delay: 1.0 },
  { left: 80, top: 65, duration: 4.7, delay: 0.1 },
  { left: 90, top: 50, duration: 5.9, delay: 1.9 },
  { left: 12, top: 88, duration: 4.3, delay: 0.5 },
];

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("--:--:--");
  const [currentDate, setCurrentDate] = useState("--/--/----");
  const [statusMessage, setStatusMessage] = useState("Initializing...");
  const [showSecure, setShowSecure] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Mark as mounted on client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Update time
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
      setCurrentDate(
        now.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
      );
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        
        // Update status messages based on progress
        if (prev === 20) setStatusMessage("Loading assets...");
        if (prev === 40) setStatusMessage("Initializing components...");
        if (prev === 60) setStatusMessage("Building interface...");
        if (prev === 80) {
          setStatusMessage("Almost ready...");
          setShowSecure(true);
        }
        if (prev === 95) setStatusMessage("Host is Started");
        
        return prev + 1;
      });
    }, 30);

    return () => {
      clearInterval(timeInterval);
      clearInterval(progressInterval);
    };
  }, [isMounted]);

  // Trigger completion when progress reaches 100
  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        onLoadingComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress, onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      {/* Floating particles - using pre-defined positions */}
      <div className="absolute inset-0 overflow-hidden">
        {PARTICLES.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400/30"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animation: `float-particle ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Main loading container */}
      <div className="relative z-10 w-full max-w-lg px-6">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-20 h-20">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1 animate-pulse overflow-hidden">
              <div className="w-full h-full rounded-xl bg-black flex items-center justify-center overflow-hidden">
                <Image
                  alt="UW Logo"
                  width={72}
                  height={72}
                  className="object-cover rounded-xl"
                  src="/assets/avatar.jfif"
                />
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 blur-xl opacity-50 -z-10"></div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-center text-2xl md:text-3xl font-bold text-white mb-2">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Ursa Warrior&apos;s Portfolio
          </span>
        </h1>

        {/* Status message */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 text-cyan-400 font-mono text-sm">
            <span className="text-lg">🚀</span>
            {statusMessage}
          </span>
        </div>

        {/* Progress bar container */}
        <div className="relative mb-6">
          {/* Progress bar background */}
          <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
            {/* Progress bar fill */}
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full transition-all duration-100 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
          
          {/* Progress percentage */}
          <div className="absolute -top-8 right-0 text-cyan-400 font-mono font-bold text-xl">
            {progress}%
          </div>
        </div>

        {/* System info panel */}
        <div className="bg-gray-900/80 backdrop-blur border border-gray-700 rounded-xl p-4 font-mono text-sm space-y-2">
          <div className="flex justify-between text-gray-400">
            <span>SYSTEM :</span>
            <span className="text-cyan-400">portfolio v1.5</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>DATE :</span>
            <span className="text-white">{currentDate}</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>TIME :</span>
            <span className="text-white">{currentTime}</span>
          </div>
          
          {/* Secure connection message */}
          <div
            className={`flex items-center justify-center gap-2 pt-2 border-t border-gray-700 transition-opacity duration-500 ${
              showSecure ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-green-400">Secure Connection Established</span>
          </div>
        </div>

        {/* Terminal-style cursor */}
        <div className="mt-6 text-center">
          <span className="text-gray-500 font-mono text-xs">
            &gt; Loading portfolio
            <span className="animate-pulse">_</span>
          </span>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4">
        <div className="w-16 h-16">
          <div className="absolute top-0 left-0 w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent"></div>
          <div className="absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-cyan-400 to-transparent"></div>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <div className="w-16 h-16">
          <div className="absolute top-0 right-0 w-8 h-[2px] bg-gradient-to-l from-purple-500 to-transparent"></div>
          <div className="absolute top-0 right-0 w-[2px] h-8 bg-gradient-to-b from-purple-500 to-transparent"></div>
        </div>
      </div>
      <div className="absolute bottom-4 left-4">
        <div className="w-16 h-16">
          <div className="absolute bottom-0 left-0 w-8 h-[2px] bg-gradient-to-r from-pink-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-[2px] h-8 bg-gradient-to-t from-pink-500 to-transparent"></div>
        </div>
      </div>
      <div className="absolute bottom-4 right-4">
        <div className="w-16 h-16">
          <div className="absolute bottom-0 right-0 w-8 h-[2px] bg-gradient-to-l from-cyan-400 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-gradient-to-t from-cyan-400 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
