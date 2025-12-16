// "use client";

// import { motion } from "framer-motion";

// export default function HowItWorks() {
//   const steps = [
//     {
//       id: "01",
//       title: "Create Workspace",
//       text: "Set up a new workspace instantly and organize all your automation resources in one place.",
//       image: "/1.png",
//     },
//     {
//       id: "02",
//       title: "Build Automation Flows",
//       text: "Design powerful no-code automation flows using triggers, actions, APIs, and logic blocks.",
//       image: "/2.png",
//     },
//     {
//       id: "03",
//       title: "Deploy Tasks",
//       text: "Deploy your automation tasks with one click and let TechOrbitra handle the execution.",
//       image: "/3.png",
//     },
//     {
//       id: "04",
//       title: "Monitor System",
//       text: "Track performance in real-time with detailed logs, analytics, and health monitoring.",
//       image: "/4.png",
//     },
//   ];

//   return (
//     <section className="relative py-24 px-6 bg-black overflow-hidden">
//       {/* dotted background */}
//       <div
//         className="absolute inset-0 opacity-[0.07] pointer-events-none"
//         style={{
//           backgroundImage: "radial-gradient(#6b7280 1px, transparent 1px)",
//           backgroundSize: "22px 22px",
//         }}
//       />

//       <div className="relative max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl md:text-5xl font-semibold text-center"
//         >
//           How It Works
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.15 }}
//           className="text-gray-400 text-center mt-3 mb-20"
//         >
//           Automate your entire workflow with TechOrbitra — no coding required.
//         </motion.p>

//         <div className="relative">
//           {/* central glowing vertical line */}
//           <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500/40 via-purple-500/40 to-transparent -translate-x-1/2 rounded-full" />

//           {steps.map((step, index) => (
//             <TimelineStep key={index} step={step} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function TimelineStep({ step, index }) {
//   const isLeft = index % 2 === 0;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 60 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7 }}
//       viewport={{ once: true }}
//       className="relative flex items-center my-24 max-md:flex-col max-md:items-start"
//     >
//       {/* TEXT */}
//       <div
//         className={`w-1/2 max-md:w-full ${
//           isLeft
//             ? "text-right pr-12 max-md:text-left max-md:pr-0"
//             : "order-2 pl-12 max-md:pl-0"
//         }`}
//       >
//         <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
//         <p className="text-gray-400 leading-relaxed mt-3">{step.text}</p>
//       </div>

//       {/* CENTER STEP NUMBER */}
//       <div className="absolute left-1/2 -translate-x-1/2 bg-black border border-cyan-400/40 shadow-[0_0_22px_rgba(0,255,255,0.25)] w-14 h-14 rounded-full flex items-center justify-center font-semibold text-cyan-300 backdrop-blur-xl z-20">
//         {step.id}
//       </div>

//       {/* IMAGE BLOCK */}
//       <div
//         className={`w-1/2 max-md:hidden ${isLeft ? "pl-12" : "order-1 pr-12"}`}
//       >
//         <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md p-4 shadow-[0_0_25px_rgba(0,255,255,0.16)]">
//           <img
//             src={step.image}
//             alt={step.title}
//             className="rounded-xl w-full h-full object-cover shadow-[0_0_25px_rgba(0,255,255,0.15)]"
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// }


"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      id: "1",
      title: "Create Workspace",
      text: "Set up a new workspace instantly and organize all your automation resources in one place.",
      image: "/1.png",
    },
    {
      id: "2",
      title: "Build Automation Flows",
      text: "Design powerful no-code automation flows using triggers, actions, APIs, and logic blocks.",
      image: "/2.png",
    },
    {
      id: "3",
      title: "Deploy Tasks",
      text: "Deploy your automation tasks with one click and let TechOrbitra handle the execution.",
      image: "/3.png",
    },
    {
      id: "4",
      title: "Monitor System",
      text: "Track performance in real-time with detailed logs, analytics, and health monitoring.",
      image: "/4.png",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      {/* dotted bg */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#6b7280 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold text-center"
        >
          How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-gray-400 text-center mt-3 mb-20"
        >
          Automate your entire workflow with TechOrbitra — no coding required.
        </motion.p>

        <div className="relative">
          {/* vertical glowing line on large screens only */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-500/40 via-purple-500/40 to-transparent -translate-x-1/2 rounded-full" />

          {steps.map((step, index) => (
            <TimelineStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineStep({ step, index }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative my-24"
    >
      {/* 📱 MOBILE LAYOUT (stacked) */}
      <div className="lg:hidden flex flex-col items-center text-center">
        <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-cyan-500/20 border border-cyan-400/30 shadow-[0_0_20px_rgba(0,255,255,0.25)] text-cyan-300 font-semibold text-lg">
          {step.id}
        </div>

        <h3 className="text-2xl font-semibold mt-6">{step.title}</h3>

        <p className="text-gray-400 max-w-sm mt-3">{step.text}</p>

        <img
          src={step.image}
          alt={step.title}
          className="mt-6 w-full max-w-xl rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(0,255,255,0.12)]"
        />
      </div>

      {/* 🖥 DESKTOP LAYOUT (original alternating) */}
      <div className="hidden lg:flex items-center">
        {/* TEXT SIDE */}
        <div
          className={`w-1/2 ${isLeft ? "text-right pr-12" : "order-2 pl-12"}`}
        >
          <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
          <p className="text-gray-400 leading-relaxed mt-3">{step.text}</p>
        </div>

        {/* NUMBER in the center */}
        <div className="absolute left-1/2 -translate-x-1/2 bg-black border border-cyan-400/40 shadow-[0_0_22px_rgba(0,255,255,0.25)] w-14 h-14 rounded-full flex items-center justify-center font-semibold text-cyan-300 backdrop-blur-xl z-20 text-lg">
          {step.id}
        </div>

        {/* IMAGE SIDE */}
        <div className={`w-1/2 ${isLeft ? "pl-12" : "order-1 pr-12"}`}>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_25px_rgba(0,255,255,0.16)] overflow-hidden">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
