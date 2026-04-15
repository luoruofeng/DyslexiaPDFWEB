"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Eye, 
  CloudRain, 
  Sun, 
  Waves, 
  Snowflake,
  WifiOff,
  Languages,
  FileText,
  Headphones,
  Zap,
  Volume2
} from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#0a0a0f] text-white">
      {/* Background Noise & Ambience */}
      <div className="bg-noise"></div>
      
      {/* Dynamic Glows */}
      <div className="ambient-glow glow-blue top-[10%] left-[20%] w-[400px] h-[400px]"></div>
      <div className="ambient-glow glow-purple top-[40%] right-[10%] w-[500px] h-[500px]"></div>
      <div className="ambient-glow glow-blue bottom-[10%] left-[30%] w-[600px] h-[600px] opacity-20"></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 glass-panel border-b-0 border-white/5 py-4 px-8 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter flex items-center gap-2"
        >
          <BookOpen className="text-cyan-400" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 neon-glow">
            One PDF
          </span>
        </motion.div>
        <motion.button 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/10 animate-breathe text-sm font-medium"
        >
          Get Started
        </motion.button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full glass-panel border-white/10 text-cyan-300 text-sm font-medium tracking-wide"
        >
          ✨ A focused reading app for dyslexia and reading challenges
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight max-w-4xl"
        >
          Read every line with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-glow">
            Absolute Clarity
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl font-light leading-relaxed"
        >
          A simple tool that helps people with reading difficulties read books more easily. Stay focused on every single line of text.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full max-w-4xl h-[400px] md:h-[500px] glass-panel rounded-3xl overflow-hidden neon-border flex items-center justify-center group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
          
          {/* Mock UI Demo */}
          <div className="z-20 w-full max-w-2xl px-8 py-12 text-center">
            <motion.div 
              animate={{ opacity: [0.3, 1, 0.3] }} 
              transition={{ duration: 4, repeat: Infinity }}
              className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-8"
            ></motion.div>
            
            <p className="text-3xl md:text-4xl font-medium leading-relaxed tracking-wide text-white drop-shadow-2xl">
              Each page displays only <span className="text-cyan-400">one line</span>.
            </p>
            <p className="text-gray-400 mt-4 text-lg">This reduces distractions and improves focus.</p>

            <motion.div 
              animate={{ opacity: [0.3, 1, 0.3] }} 
              transition={{ duration: 4, delay: 2, repeat: Infinity }}
              className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-8"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* Focus Modes Section */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Immersive Environments</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Four distinct focus modes. Each includes ambient white noise and environment-specific sounds to help you enter a deep reading flow state.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Snowflake className="w-8 h-8" />, name: "Snow", color: "from-blue-200 to-blue-400" },
            { icon: <Sun className="w-8 h-8" />, name: "Sunshine", color: "from-yellow-200 to-orange-400" },
            { icon: <Waves className="w-8 h-8" />, name: "Ocean", color: "from-cyan-300 to-blue-600" },
            { icon: <CloudRain className="w-8 h-8" />, name: "Rain", color: "from-gray-300 to-gray-500" }
          ].map((mode, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-panel p-8 rounded-2xl flex flex-col items-center justify-center gap-4 cursor-pointer relative overflow-hidden group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${mode.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className={`p-4 rounded-full bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>
                {mode.icon}
              </div>
              <h3 className="text-xl font-semibold tracking-wide">{mode.name}</h3>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Volume2 className="w-3 h-3" />
                <span>Ambient Audio</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <FeatureCard 
            icon={<Eye />}
            title="Line-by-Line Format"
            desc="Clean presentation showing only one line per page to eliminate distractions completely."
            delay={0.1}
          />
          
          <FeatureCard 
            icon={<WifiOff />}
            title="Powerful Offline"
            desc="Works perfectly without internet on subways or airplanes. Real-time reading and translation still function."
            delay={0.2}
          />
          
          <FeatureCard 
            icon={<Languages />}
            title="Real-time Translation"
            desc="Sentence and word-level translation supported in 12+ major languages instantly."
            delay={0.3}
          />
          
          <FeatureCard 
            icon={<Headphones />}
            title="Full Text-to-Speech"
            desc="Customizable reading timers and natural voices to guide you through the text."
            delay={0.4}
          />
          
          <FeatureCard 
            icon={<FileText />}
            title="Format Support"
            desc="Easily import and read your favorite books in PDF, EPUB, and TXT formats."
            delay={0.5}
          />
          
          <FeatureCard 
            icon={<Zap />}
            title="Read Anywhere"
            desc="A buttery smooth experience anytime and anywhere, designed for ultimate accessibility."
            delay={0.6}
          />

        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative z-10 py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass-panel p-12 rounded-3xl neon-border relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <h2 className="text-4xl font-bold mb-6 relative z-10">Ready to transform your reading?</h2>
          <p className="text-gray-400 mb-8 text-lg relative z-10">
            Join thousands of users who have found their focus again.
          </p>
          <button className="relative z-10 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            Download Now
          </button>
        </motion.div>
      </section>
    </main>
  );
}

function FeatureCard({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors border border-white/5 hover:border-white/10"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 mb-6 border border-white/10">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white/90">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
    </motion.div>
  );
}