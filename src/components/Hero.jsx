"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";

import OrbitGalaxy from "@/components/OrbitGalaxy";
import HologramPlanet from "@/components/HologramPlanet";

export default function Hero() {
  // NEW REQUIRED PARTICLES INIT — FIXES ERROR
  const particlesInit = useCallback(async (engine) => {
    await initParticlesEngine(async (engine) => {
      await loadSlim(engine); // replaces old loadFull()
    });
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 md:pt-32 pb-16 md:pb-32 px-6">
      {/* BACKGROUND SPIRAL GALAXY */}
      <div className="absolute inset-0 -z-40 opacity-30">
        <OrbitGalaxy />
      </div>
      {/* PARTICLES */}
      <Particles
        id="heroParticles"
        init={particlesInit}
        className="absolute inset-0 -z-20"
        options={{
          background: { color: "transparent" },
          particles: {
            number: { value: 30 },
            color: { value: "#38bdf8" },
            links: {
              enable: true,
              color: "#38bdf8",
              distance: 150,
              opacity: 0.2,
            },
            move: {
              enable: true,
              speed: 0.6,
            },
            size: { value: { min: 1, max: 3 } },
            opacity: { value: 0.3 },
          },
        }}
      />
      {/* MAIN GRID */}
      <div className="flex flex-col xl:flex-row justify-center xl:justify-around gap-8 xl:gap-32 items-center relative mx-auto">
        {/* LEFT SIDE */}
        <div className="relative text-center xl:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] bg-linear-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]"
          >
            Build Faster
            <br />
            with <span className="text-cyan-300">Orbitra</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 text-base md:text-lg lg:text-xl text-gray-300 max-w-md mx-auto xl:mx-0"
          >
            Modern tools for teams that want high performance, polished design,
            and simplicity. Build. Ship. Scale — with superpowers.
          </motion.p>

          {/* Buttons */}
          <div className="mt-8 xl:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center xl:justify-start">
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-linear-to-r from-cyan-400 to-blue-400 text-black font-semibold shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all text-sm sm:text-base"
            >
              Get Started 🚀
            </Link>

            <Link
              href="/blogs"
              className="text-gray-300 hover:text-white transition-colors text-base sm:text-lg flex items-center gap-2"
            >
              See More →
            </Link>
          </div>
        </div>

        {/* RIGHT: HOLOGRAM PLANET */}
        <div className="flex justify-center xl:justify-end mt-8 xl:mt-0">
          <div className="relative w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] lg:w-[420px] lg:h-[420px]">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

            {/* HOLOGRAM BOX */}
            <div className="relative w-full h-full rounded-3xl border border-cyan-500/25 bg-slate-900/10 backdrop-blur-2xl shadow-[0_0_80px_rgba(34,211,238,0.45)] overflow-hidden">
              <HologramPlanet />
            </div>

            {/* --- FLOATING CHIPS --- */}
            {/* Hide on small screens, show on xl+ */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="hidden xl:block absolute left-[-70px] top-1/2 -translate-y-1/2 
          px-3 md:px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-400/20 
          backdrop-blur-md text-cyan-300 text-xs md:text-sm"
            >
              ⚡ Faster Dev Cycles
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="hidden xl:block absolute -right-10 -top-5 
          px-3 md:px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-400/20 
          backdrop-blur-md text-blue-300 text-xs md:text-sm"
            >
              🛸 Powered by Hologram Engine
            </motion.div>
          </div>
        </div>
      </div>
      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes scan {
          0% {
            background-position-y: 0;
          }
          100% {
            background-position-y: 100%;
          }
        }
        @keyframes sweep {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
}
