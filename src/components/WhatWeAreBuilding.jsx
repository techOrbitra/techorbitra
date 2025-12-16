// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef, useState, useEffect } from "react";

// export default function WhatWeAreBuilding() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { margin: "-200px", once: false });

//   const [deepReveal, setDeepReveal] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = ref.current;
//       if (!section) return;
//       const rect = section.getBoundingClientRect();
//       if (rect.top < 200) setDeepReveal(true);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const floatingNodes = [
//     {
//       text: "Launch Ideas Faster →",
//       desktop: "top-[8%] left-[5%]",
//       mobile: "top-[5%] left-[10%]",
//     },
//     {
//       text: "Automated Growth Systems",
//       desktop: "top-[18%] right-[12%]",
//       mobile: "top-[20%] right-[10%]",
//     },
//     {
//       text: "Future-Ready Intelligence",
//       desktop: "bottom-[22%] left-[9%]",
//       mobile: "bottom-[25%] left-[10%]",
//     },
//     {
//       text: "Your Vision → Our Build",
//       desktop: "bottom-[12%] right-[14%]",
//       mobile: "bottom-[10%] right-[10%]",
//     },
//     {
//       text: "Share Your Idea Anytime",
//       desktop: "top-[45%] right-[2%]",
//       mobile: "top-[45%] left-[10%]",
//     },
//   ];

//   return (
//     <section
//       id="what-we-are-building"
//       className="relative py-24 md:py-32 px-4 md:px-6 max-w-7xl mx-auto"
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 -z-20 opacity-5 bg-[url('/grid.svg')] bg-cover" />

//       {/* Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.9 }}
//         className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6"
//       >
//         What We’re Building{" "}
//         <span className="inline-block animate-pulse">🚀</span>
//       </motion.h2>

//       {/* Subtitle */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={inView ? { opacity: 1 } : {}}
//         transition={{ duration: 1.1 }}
//         className="text-center text-cyan-200/90 max-w-xl md:max-w-2xl mx-auto mb-14 md:mb-20 text-sm md:text-base px-2"
//       >
//         We’re creating next-gen intelligent systems designed to support your
//         ideas, empower your business, and accelerate your future projects.
//       </motion.p>

//       {/* MAIN CORE SECTION */}
//       <div
//         ref={ref}
//         className="relative flex justify-center items-center
//         h-[420px] sm:h-[480px] md:h-[520px] lg:h-[550px]"
//       >
//         {/* FLOATING MINI-TEXT NODES */}
//         {floatingNodes.map((node, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={
//               inView
//                 ? {
//                     opacity: 1,
//                     scale: 1,
//                     y: [0, -8, 0],
//                     transition: {
//                       duration: 3,
//                       delay: index * 0.25,
//                       repeat: Infinity,
//                     },
//                   }
//                 : {}
//             }
//             className={`absolute hidden sm:block ${node.desktop}
//             bg-cyan-500/10 border border-cyan-300/30
//             px-3 py-1.5 rounded-xl text-[12px] md:text-sm text-cyan-200 backdrop-blur-md
//             shadow-[0_0_15px_rgba(0,255,255,0.25)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)]
//             transition-all cursor-pointer`}
//           >
//             {node.text}
//           </motion.div>
//         ))}

//         {/* MOBILE NODES */}
//         {floatingNodes.map((node, index) => (
//           <motion.div
//             key={"m-" + index}
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={
//               inView
//                 ? {
//                     opacity: 1,
//                     scale: 1,
//                     y: [0, -5, 0],
//                     transition: {
//                       duration: 3,
//                       delay: index * 0.2,
//                       repeat: Infinity,
//                     },
//                   }
//                 : {}
//             }
//             className={`absolute sm:hidden ${node.mobile}
//             bg-cyan-500/10 border border-cyan-300/30
//             px-2 py-1 rounded-lg text-xs text-cyan-200 backdrop-blur-md
//             shadow-[0_0_12px_rgba(0,255,255,0.25)]
//             transition-all`}
//           >
//             {node.text}
//           </motion.div>
//         ))}

//         {/* HOLOGRAM RINGS */}
//         <motion.div
//           animate={inView ? { rotate: 360 } : {}}
//           transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
//           className="absolute w-[320px] sm:w-[380px] md:w-[460px]
//           h-[320px] sm:h-[380px] md:h-[460px]
//           rounded-full border border-cyan-400/10"
//         />

//         <motion.div
//           animate={inView ? { rotate: -360 } : {}}
//           transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
//           className="absolute w-[260px] sm:w-[310px] md:w-[370px]
//           h-[260px] sm:h-[310px] md:h-[370px]
//           rounded-full border border-cyan-300/10"
//         />

//         <motion.div
//           animate={inView ? { rotate: 360 } : {}}
//           transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
//           className="absolute w-[180px] sm:w-[220px] md:w-[260px]
//           h-[180px] sm:h-[220px] md:h-[260px]
//           rounded-full border border-cyan-200/20"
//         />

//         {/* CORE SPHERE */}
//         <motion.div
//           initial={{ scale: 0.7, opacity: 0 }}
//           animate={
//             deepReveal
//               ? {
//                   scale: 1.25,
//                   opacity: 1,
//                   boxShadow: "0 0 100px rgba(0,255,255,0.6)",
//                 }
//               : inView
//               ? {
//                   scale: 1,
//                   opacity: 1,
//                   boxShadow: "0 0 60px rgba(0,255,255,0.35)",
//                 }
//               : {}
//           }
//           transition={{ duration: 1.2 }}
//           className="absolute
//           w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64
//           rounded-full bg-linear-to-b from-cyan-400/40 to-blue-500/10
//           backdrop-blur-xl border border-cyan-300/30"
//         />

//         {/* CENTER TEXT */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={
//             deepReveal
//               ? {
//                   opacity: 1,
//                   y: 0,
//                   textShadow: "0px 0px 12px rgba(0,255,255,0.7)",
//                 }
//               : inView
//               ? { opacity: 1, y: 0 }
//               : {}
//           }
//           transition={{ duration: 1.2 }}
//           className="relative text-center max-w-xs sm:max-w-sm md:max-w-md"
//         >
//           {!deepReveal ? (
//             <>
//               <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-300">
//                 Building Something New
//               </h3>
//               <p className="text-gray-300 mt-3 text-sm sm:text-base md:text-lg">
//                 Tools that evolve. Systems that adapt. Intelligence designed for
//                 real growth.
//               </p>
//             </>
//           ) : (
//             <>
//               <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-300 mb-3">
//                 🚀 Future Unlocked
//               </h3>
//               <p className="text-cyan-200 text-sm sm:text-base md:text-lg">
//                 Welcome to the <strong>Innovation Core</strong> — powering idea
//                 acceleration, business automation, and next-gen digital systems.
//               </p>
//             </>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function WhatWeAreBuilding() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-200px", once: false });

  const [deepReveal, setDeepReveal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = ref.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < 200) setDeepReveal(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const floatingNodes = [
    {
      text: "Launch Ideas Faster →",
      desktop: "top-[8%] left-[5%]",
      mobile: "top-[5%] left-[5%]",
    },
    {
      text: "Automated Growth Systems",
      desktop: "top-[18%] right-[12%]",
      mobile: "top-[20%] right-[5%]",
    },
    {
      text: "Future-Ready Intelligence",
      desktop: "bottom-[22%] left-[9%]",
      mobile: "bottom-[25%] left-[5%]",
    },
    {
      text: "Your Vision → Our Build",
      desktop: "bottom-[12%] right-[14%]",
      mobile: "bottom-[10%] right-[5%]",
    },
    {
      text: "Share Your Idea Anytime",
      desktop: "top-[45%] right-[2%]",
      mobile: "top-[45%] left-[5%]",
    },
  ];

  return (
    <section
      id="what-we-are-building"
      className="relative py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-20 opacity-5 bg-[url('/grid.svg')] bg-cover" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
        className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6"
      >
        What We’re Building{" "}
        <span className="inline-block animate-pulse">🚀</span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.1 }}
        className="text-center text-cyan-200/90 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto mb-10 md:mb-14 text-xs sm:text-sm md:text-base px-2"
      >
        We’re creating next-gen intelligent systems designed to support your
        ideas, empower your business, and accelerate your future projects.
      </motion.p>

      {/* MAIN CORE SECTION */}
      <div
        ref={ref}
        className="relative flex justify-center items-center
        h-[320px] sm:h-[400px] md:h-[520px] lg:h-[550px]"
      >
        {/* FLOATING MINI-TEXT NODES */}
        {floatingNodes.map((node, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              inView
                ? {
                    opacity: 1,
                    scale: 1,
                    y: [0, -8, 0],
                    transition: {
                      duration: 3,
                      delay: index * 0.25,
                      repeat: Infinity,
                    },
                  }
                : {}
            }
            className={`absolute hidden sm:block ${node.desktop} bg-cyan-500/10 border border-cyan-300/30 px-2 md:px-3 py-1.5 rounded-xl text-[10px] md:text-[12px] text-cyan-200 backdrop-blur-md shadow-[0_0_10px_rgba(0,255,255,0.25)] hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] transition-all cursor-pointer`}
          >
            {node.text}
          </motion.div>
        ))}

        {/* MOBILE NODES */}
        {floatingNodes.map((node, index) => (
          <motion.div
            key={"m-" + index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              inView
                ? {
                    opacity: 1,
                    scale: 1,
                    y: [0, -5, 0],
                    transition: {
                      duration: 3,
                      delay: index * 0.2,
                      repeat: Infinity,
                    },
                  }
                : {}
            }
            className={`absolute sm:hidden ${node.mobile} bg-cyan-500/10 border border-cyan-300/30 px-2 py-1 rounded-lg text-[9px] text-cyan-200 backdrop-blur-md shadow-[0_0_8px_rgba(0,255,255,0.25)] transition-all`}
          >
            {node.text}
          </motion.div>
        ))}

        {/* HOLOGRAM RINGS */}
        <motion.div
          animate={inView ? { rotate: 360 } : {}}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute w-[200px] sm:w-[260px] md:w-[460px] h-[200px] sm:h-[310px] md:h-[460px] rounded-full border border-cyan-400/10"
        />

        <motion.div
          animate={inView ? { rotate: -360 } : {}}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute w-[150px] sm:w-[210px] md:w-[370px] h-[150px] sm:h-[270px] md:h-[370px] rounded-full border border-cyan-300/10"
        />

        <motion.div
          animate={inView ? { rotate: 360 } : {}}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute w-[120px] sm:w-[180px] md:w-[260px] h-[120px] sm:h-[180px] md:h-[260px] rounded-full border border-cyan-200/20"
        />

        {/* CORE SPHERE */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={
            deepReveal
              ? {
                  scale: 1.1,
                  opacity: 1,
                  boxShadow: "0 0 80px rgba(0,255,255,0.6)",
                }
              : inView
              ? {
                  scale: 0.9,
                  opacity: 1,
                  boxShadow: "0 0 50px rgba(0,255,255,0.35)",
                }
              : {}
          }
          transition={{ duration: 1.2 }}
          className="absolute w-32 sm:w-44 md:w-64 h-32 sm:h-44 md:h-64 rounded-full bg-gradient-to-b from-cyan-400/40 to-blue-500/10 backdrop-blur-xl border border-cyan-300/30"
        />

        {/* CENTER TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            deepReveal
              ? {
                  opacity: 1,
                  y: 0,
                  textShadow: "0px 0px 10px rgba(0,255,255,0.7)",
                }
              : inView
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 1.2 }}
          className="relative text-center max-w-[220px] sm:max-w-sm md:max-w-md px-2"
        >
          {!deepReveal ? (
            <>
              <h3 className="text-sm sm:text-xl md:text-3xl font-semibold text-cyan-300">
                Building Something New
              </h3>
              <p className="text-gray-300 mt-2 sm:mt-3 text-[10px] sm:text-sm md:text-lg">
                Tools that evolve. Systems that adapt. Intelligence designed for
                real growth.
              </p>
            </>
          ) : (
            <>
              <h3 className="text-lg sm:text-2xl md:text-4xl font-bold text-cyan-300 mb-2">
                🚀 Future Unlocked
              </h3>
              <p className="text-cyan-200 text-xs sm:text-sm md:text-lg">
                Welcome to the <strong>Innovation Core</strong> — powering idea
                acceleration, business automation, and next-gen digital systems.
              </p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
