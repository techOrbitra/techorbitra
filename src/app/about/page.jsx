"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

export default function AboutUs() {
  const [init, setInit] = useState(false);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="relative min-h-screen w-full text-gray-200 py-28 px-6 md:px-16 lg:px-32 overflow-hidden">
      {/* PARTICLES BACKGROUND */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 -z-10"
          options={{
            background: { color: "transparent" },
            fpsLimit: 120,
            particles: {
              number: { value: 70 },
              size: { value: 2 },
              move: { enable: true, speed: 0.3 },
              opacity: { value: 0.3 },
              links: {
                enable: true,
                color: "#00eaff",
                opacity: 0.3,
                distance: 120,
              },
            },
          }}
        />
      )}

      {/* PREMIUM GRADIENT BACKGROUNDS */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_60%)] -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(147,51,234,0.15),transparent_70%)] -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
      />

      {/* HEADER */}
      <div className="text-center mb-20 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
                     bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,255,0.3)]"
        >
          Orbitra
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-300 mt-4 max-w-3xl mx-auto"
        >
          Turning Classroom Ideas into Real-World Innovation
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-6 h-[3px] w-40 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full"
        />
      </div>

      {/* STORY SECTIONS */}
      <div className="space-y-24 max-w-5xl mx-auto relative z-10">
        {[
          {
            title: "📚 The Awakening",
            color: "cyan",
            gradientFrom: "from-cyan-500/20",
            gradientTo: "to-cyan-300/20",
            textColor: "text-cyan-400",
            text: `We are two passionate B.Tech students in our 7th semester of Computer Engineering, driven by curiosity, creativity, and ambition.
      Over time, we realized traditional learning focused more on theory—books, exams, grades—while practical skills were left behind.`,
            quote:
              "We felt bored and unfulfilled, as if our days were passing by without meaningful work or responsibility.",
          },
          {
            title: "💡 The Spark",
            color: "blue",
            gradientFrom: "from-blue-500/20",
            gradientTo: "to-blue-300/20",
            textColor: "text-blue-400",
            text: `One day, we asked ourselves: Why not build something of our own? Something meaningful? Something the world needs?
      With passion for engineering and innovation, we committed ourselves to building powerful SaaS products that empower people.`,
          },
          {
            title: "🚀 The Birth of Orbitra",
            color: "purple",
            gradientFrom: "from-purple-500/20",
            gradientTo: "to-purple-300/20",
            textColor: "text-purple-400",
            text: `Orbitra was born not as a company, but as a dream—a mission built on ambition, courage, and innovation.
      Our goal is simple: Build solutions that genuinely help people and create real impact.`,
            quote:
              "Orbitra is our dream, our mission, and our promise to build something that makes a difference.",
          },
          {
            title: "🌟 The Journey Ahead",
            color: "green",
            gradientFrom: "from-green-500/20",
            gradientTo: "to-green-300/20",
            textColor: "text-green-400",
            text: `We are on a journey to innovate, inspire, and create meaningful products.
      From humble beginnings to ambitious goals—Orbitra is our path to turning ideas into real solutions that help millions.`,
          },
        ].map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group bg-[#0d0d0d] p-10 md:p-14 rounded-3xl border border-white/10 
                 shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            {/* STATIC SAFE GRADIENT CLASSES */}
            <div
              className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${section.gradientFrom} ${section.gradientTo} 
                    opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500`}
            ></div>

            <h2
              className={`relative text-3xl md:text-4xl font-semibold ${section.textColor} mb-5`}
            >
              {section.title}
            </h2>

            <p className="relative text-gray-300 text-lg leading-relaxed whitespace-pre-line">
              {section.text}
            </p>

            {section.quote && (
              <p className="relative italic text-gray-400 mt-4 border-l-4 border-white/20 pl-4">
                "{section.quote}"
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-28 relative z-10">
        <motion.a
          href="/contact"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 0 35px rgba(6,182,212,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 
                     px-10 py-5 rounded-full text-xl font-semibold text-black shadow-xl transition-all duration-300"
        >
          Join Our Journey <ArrowRight size={22} />
        </motion.a>

        <p className="mt-6 text-gray-400 text-sm tracking-wide">
          Currently Building • 7th Semester Students • Future Innovators
        </p>
      </div>
    </div>
  );
}
