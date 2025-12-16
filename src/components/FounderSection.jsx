"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FounderSection() {
  const founders = [
    {
      name: "Jay Prajapati",
      // role: "Co-Founder & CEO",
      img: "/jay.jpg",
      text: "Orbitra was built with one mission — to make automation accessible, powerful, and beautifully simple for every team.",
    },
    {
      name: "Darshan Satapara",
      // role: "Co-Founder & CTO",
      img: "/darshan.png",
      text: "We focus on speed, reliability, and future-proof automation tech that scales with businesses of every size.",
    },
  ];

  return (
    <section className="py-28 px-6 relative overflow-hidden max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl text-center mb-20 font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-xl">
        Meet the Team
      </h2>

      <div className="max-w-7xl mx-auto space-y-28 flex flex-col justify-center items-center">
        {founders.map((f, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center justify-center gap-20 w-full group ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* ---------- IMAGE BLOCK WITH VISIBLE HOVER ---------- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-64 h-64 mx-auto transition-all duration-500
              group-hover:scale-[1.1] group-hover:-translate-y-3"
            >
              {/* Outer glow border */}
              <div
                className="absolute inset-0 rounded-full border-[3px]
              border-cyan-400/80 shadow-[0_0_35px_rgba(0,255,255,0.25)]
              transition-all duration-500
              group-hover:shadow-[0_0_70px_rgba(0,255,255,0.8)]
              group-hover:border-cyan-300"
              />

              {/* Rotating text ring */}
              <div
                className="absolute inset-0 animate-spin-slow transition-all duration-500
              group-hover:brightness-150 group-hover:animate-spin-fast"
              >
                <svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 w-full h-full"
                >
                  <defs>
                    <path
                      id={`circlePath-${i}`}
                      d="
                        M 100,100
                        m -82,0
                        a 82,82 0 1,1 164,0
                        a 82,82 0 1,1 -164,0
                      "
                    />
                  </defs>

                  <text
                    fill="#00eaff"
                    fontSize="10"
                    letterSpacing="6"
                    style={{ textTransform: "uppercase" }}
                  >
                    <textPath
                      xlinkHref={`#circlePath-${i}`}
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      ORBITRA • TECHNOLOGY • INNOVATION • FUTURE • ORBITRA •
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Bright neon halo */}
              <div
                className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl
              transition-all duration-500
              group-hover:bg-cyan-400/40 group-hover:blur-[50px]"
              ></div>

              {/* Inner ring */}
              <div
                className="absolute inset-6 rounded-full border-[2px] border-white/60
              transition-all duration-500 group-hover:border-cyan-300"
              />

              {/* Founder Image */}
              <motion.div
                whileHover={{ scale: 1.12 }}
                className="absolute inset-6 rounded-full overflow-hidden shadow-2xl
                transition-all duration-500"
              >
                <Image
                  src={f.img}
                  alt={f.name}
                  width={1900}
                  height={1900}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </motion.div>

            {/* ---------- TEXT CARD HOVER EFFECT ---------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex-1 text-center md:text-left p-10 rounded-3xl border border-white/10
              bg-white/5 backdrop-blur-xl shadow-[0_0_35px_rgba(0,255,255,0.25)] max-w-xl
              overflow-hidden transition-all duration-500
              group-hover:scale-[1.05] group-hover:-translate-y-2
              group-hover:shadow-[0_0_55px_rgba(0,255,255,0.5)]"
            >
              {/* Shine effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20
              bg-gradient-to-r from-transparent via-white to-transparent
              translate-x-[-200%] group-hover:translate-x-[200%] blur-xl
              transition-all duration-[1200ms]"
              ></div>

              <h3 className="text-3xl text-white font-semibold relative z-10">
                {f.name}
              </h3>
              <p className="text-cyan-400 text-sm tracking-wide font-medium relative z-10">
                {f.role}
              </p>
              <p className="text-gray-300 mt-5 leading-relaxed text-[16px] relative z-10">
                {f.text}
              </p>

              <div className="mt-6 w-20 h-[3px] bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full relative z-10"></div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Spin animations */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 20s linear infinite;
          }
          .animate-spin-fast {
            animation: spin 8s linear infinite;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
}
