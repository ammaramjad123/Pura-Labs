import { motion } from "framer-motion";

export default function Problems() {
  const problems = [
    "Missed calls could mean missed revenue",
    "Escalating staff costs",
    "Still answering repetitive calls when you could be focusing on growing your business?",
    "Customers waiting while staff are on another call",
    "Missing potential opportunities out of hours?",
    "Manual processes slowing everything down!"
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* 🌈 BACKGROUND ENERGY */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto">

        {/* 🔥 TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-center text-neutral-900"
        >
          Why Businesses Struggle With Calls
        </motion.h2>

        {/* 💬 CHAT FLOW */}
        <div className="relative mt-20">

         

          {/* 🔥 PROBLEM BUBBLES */}
          <div className="flex flex-col gap-10 relative">

            {problems.map((text, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: i % 2 === 0 ? -80 : 80,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  delay: i * 0.95,
                  type: "spring",
                  stiffness: 120,
                }}
                className={`flex ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="relative max-w-[85%] sm:max-w-md px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-neutral-200 shadow-xl text-neutral-700 text-sm sm:text-base">

                  {/* typing dots effect */}
                  <span className="absolute -top-2 left-4 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:0.15s]" />
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce [animation-delay:0.3s]" />
                  </span>

                  {text}
                </div>
              </motion.div>
            ))}

          </div>

          {/* 🌊 CONNECTION LINES */}
          {/* 🌊 ENERGY FLOW LINE */}
<div className="hidden sm:block absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full overflow-hidden">

  {/* base line */}
  <div className="absolute inset-0 bg-neutral-200/40" />

  {/* animated energy */}
  <motion.div
    initial={{ height: 0 }}
    whileInView={{ height: "100%" }}
    transition={{
      duration: 2,
      ease: "easeInOut",
    }}
    className="absolute left-0 top-0 w-full bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400"
  />

  {/* moving pulse (THIS IS THE MAGIC) */}
  <motion.div
    animate={{
      y: ["-20%", "120%"],
    }}
    transition={{
      duration: 2.5,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute left-1/2 -translate-x-1/2 w-[8px] h-[80px] rounded-full bg-gradient-to-b from-white/80 via-purple-400 to-transparent blur-sm"
  />

</div>
        </div>

        {/* ⚡ AI RESPONSE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="inline-block px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-extrabold shadow-lg">
            Pura AI Responds Instantly
          </div>

          <p className="mt-6 max-w-3xl sm:max-w-5xl  mx-auto text-base sm:text-xl text-neutral-900 leading-relaxed font-semibold">
            Every call is answered. Every opportunity is captured. Pura Labs AI Agent handles
            unlimited conversations at once  with the same professionalism every single time.
          </p>
        </motion.div>

      </div>
    </section>
  );
}