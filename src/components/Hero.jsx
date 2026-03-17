import { ArrowRight, Mic } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-16 sm:pt-20 pb-24 px-4 sm:px-6 lg:px-8">

      {/* 💜 Animated Glow (FIXED POSITION) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/20 blur-[140px] rounded-full pointer-events-none"
      />

      <div className="relative mx-auto max-w-5xl text-center">

        {/* 🔥 HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-tight"
        >
          Never Miss Another Call
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent">
            or Another Customer
          </span>
        </motion.h1>

        {/* 🧠 SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-base sm:text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
        >
          AI voice agents that answer every call, capture opportunities, and book appointments automatically so your business never loses revenue to missed calls.
          <br /><br />
          We make bespoke AI Agents that are experts in your business.
        </motion.p>

        {/* 💡 FEATURE TAGS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {[
            "🌐 20+ Languages",
            "⚡ Always On",
            "📅 Books Appointments",
          ].map((item, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        {/* 🚀 CTA (FIXED SAME SIZE BUTTONS) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center gap-2 min-w-[180px] px-6 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-lg hover:bg-purple-700 transition cursor-pointer"
          >
            Get Started <ArrowRight size={18} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center justify-center min-w-[180px] px-6 py-3 rounded-full border border-neutral-300 text-neutral-700 font-semibold hover:bg-neutral-100 transition cursor-pointer"
          >
            See How It Works
          </motion.button>
        </motion.div>

        {/* 🎙️ FLOATING ORB */}
        <div className="mt-16 flex justify-center">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* OUTER GLOW */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 w-[280px] h-[280px] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 blur-2xl opacity-40"
            />

            {/* INNER */}
            <div className="relative w-[220px] h-[220px] rounded-full bg-white/40 backdrop-blur-xl border border-white/50 flex items-center justify-center shadow-2xl">

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg"
              >
                Talk to me <Mic size={18} />
              </motion.button>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}