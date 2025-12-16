// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// export default function Products() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black via-[#020617] to-black text-white mt-10 px-6 py-20 flex flex-col items-center relative overflow-hidden">
//       {/* Floating Glowing Orbs */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute w-72 h-72 bg-cyan-500/30 rounded-full blur-[120px] top-10 left-10 animate-pulse" />
//         <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-[140px] bottom-20 right-0 animate-ping" />
//       </div>

//       {/* TITLE */}
//       <motion.h1
//         initial={{ opacity: 0, scale: 0.7 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.8, ease: "easeOut" }}
//         className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.7)] mb-6 text-center"
//       >
//         Something Big Is Coming...
//       </motion.h1>

//       {/* SUBTEXT */}
//       <motion.p
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.9 }}
//         className="max-w-3xl text-center text-gray-300 leading-relaxed mb-14 text-lg"
//       >
//         We're crafting next-gen digital products designed to completely
//         transform the way creators, founders, and developers build, launch, and
//         grow.
//         <br />
//         <br />
//         These tools are powerful. Intelligent. Beautiful. And we can’t wait to
//         show them to you.
//       </motion.p>

//       {/* EMERGING MYSTERY BOX */}
//       <motion.div
//         initial={{ y: 60, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1, delay: 0.3 }}
//         className="bg-gray-900/60 border border-gray-700 rounded-2xl p-10 mb-16 shadow-2xl w-full max-w-3xl backdrop-blur-lg"
//       >
//         <motion.h2
//           animate={{ opacity: [0.4, 1, 0.4] }}
//           transition={{ duration: 3, repeat: Infinity }}
//           className="text-3xl font-semibold text-cyan-300 text-center mb-4"
//         >
//           ⚡ A New Digital Universe Is Loading…
//         </motion.h2>

//         <p className="text-gray-300 text-center">
//           We are building something futuristic — tools powered by automation,
//           creativity, and intelligence.
//           <br />
//           If you want early access, beta invites, or want to be part of this
//           incredible journey…
//         </p>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ repeat: Infinity, duration: 1.2, repeatType: "mirror" }}
//           className="text-center mt-4 text-cyan-400 font-semibold"
//         >
//           Be the first to know.
//         </motion.p>
//       </motion.div>

//       {/* CONTACT FORM */}
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="w-full max-w-2xl bg-black/70 border border-gray-700 p-8 rounded-2xl shadow-lg backdrop-blur-xl"
//       >
//         <h2 className="text-3xl font-semibold text-center mb-6 text-cyan-300">
//           Join Our Journey
//         </h2>

//         <form className="flex flex-col gap-5">
//           {/* Each input animated */}
//           {["Your Name", "Your Email", "Mobile Number", "Subject"].map(
//             (placeholder, i) => (
//               <motion.input
//                 key={i}
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 type="text"
//                 placeholder={placeholder}
//                 className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white focus:border-cyan-400 outline-none transition"
//               />
//             )
//           )}

//           {/* TEXTAREA */}
//           <motion.textarea
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.5 }}
//             placeholder="Write your message or description..."
//             rows="5"
//             className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white focus:border-cyan-400 outline-none transition"
//           ></motion.textarea>

//           {/* BUTTON */}
//           <motion.button
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.97 }}
//             className="w-full p-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold text-black shadow-lg"
//           >
//             Submit
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Products() {
  const [particles, setParticles] = useState([]);

  // Generate particles ONLY on the client (avoids SSR mismatch)
  useEffect(() => {
    const list = Array.from({ length: 25 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 4 + Math.random() * 3,
    }));
    setParticles(list);
  }, []);

  return (
    <div className="min-h-screen text-white mt-10 px-6 py-20 flex flex-col items-center relative overflow-hidden">
      {/* --- PREMIUM BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Ambient Glow Clouds */}
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/25 blur-[180px] top-[-100px] left-[-150px]" />
        <div className="absolute w-[700px] h-[700px] bg-purple-600/25 blur-[200px] bottom-[-150px] right-[-200px]" />

        {/* Elegant Moving Gradient Wave */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15, x: ["0%", "100%", "0%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent blur-3xl"
        />

        {/* Floating Particles */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full"
            style={{ top: p.top, left: p.left }}
          />
        ))}

        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_18px_rgba(34,211,238,0.7)] mb-6 text-center"
      >
        Something Big Is Coming...
      </motion.h1>

      {/* SUBTEXT */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-center text-gray-300 leading-relaxed mb-14 text-lg"
      >
        We're crafting next-gen digital products designed to transform how
        creators, founders, and developers build and grow.
        <br />
        <br />
        These tools are powerful. Intelligent. Beautiful. And we can’t wait to
        show them to you.
      </motion.p>

      {/* FUTURISTIC BOX */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="bg-gray-900/40 border border-cyan-500/20 rounded-2xl p-10 mb-16 shadow-[0_0_40px_rgba(34,211,238,0.15)] w-full max-w-3xl backdrop-blur-2xl"
      >
        <motion.h2
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-3xl font-semibold text-cyan-300 text-center mb-4"
        >
          ⚡ A New Digital Universe Is Loading…
        </motion.h2>

        <p className="text-gray-300 text-center">
          We are building futuristic tools powered by automation, creativity,
          and intelligence.
          <br />
          Want early access or beta invites?
        </p>

        <motion.p
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="text-center mt-4 text-cyan-400 font-semibold"
        >
          Be the first to know.
        </motion.p>
      </motion.div>

      {/* CONTACT FORM */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl bg-black/70 border border-cyan-500/20 p-8 rounded-2xl shadow-[0_0_35px_rgba(34,211,238,0.15)] backdrop-blur-xl"
      >
        <h2 className="text-3xl font-semibold text-center mb-6 text-cyan-300">
          Join Our Journey
        </h2>

        <form className="flex flex-col gap-5">
          {["Your Name", "Your Email", "Mobile Number", "Subject"].map(
            (placeholder, i) => (
              <motion.input
                key={i}
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                type="text"
                placeholder={placeholder}
                className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white focus:border-cyan-400 outline-none transition"
              />
            )
          )}

          {/* TEXTAREA */}
          <motion.textarea
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            placeholder="Write your message or description..."
            rows="5"
            className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white focus:border-cyan-400 outline-none transition"
          ></motion.textarea>

          {/* SUBMIT BUTTON */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full p-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold text-black shadow-lg"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
