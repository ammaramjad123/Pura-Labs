import { ArrowRight, Mic } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-16 sm:pt-20 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-hero">

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
          className="font-heading text-[28px] sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-tight"
        >
          Never Miss Another Call
          <br />
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
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

        {/* 🚀 CTA */}
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
            className="flex items-center justify-center min-w-[180px] px-6 py-3 rounded-full border border-neutral-700 text-neutral-700 font-semibold hover:bg-neutral-100 transition cursor-pointer"
          >
            See How It Works
          </motion.button>
        </motion.div>

        {/* 🎙️ FLOATING ORB */}
        {/* ✨ AI LOGO CORE */}
<div className="mt-18 sm:mt-20 flex justify-center">
  <motion.div
    animate={{ y: [0, -8, 0], scale: [1, 1.015, 1] }}
    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
    className="relative flex items-center justify-center"
  >
    {/* outer ambient glow */}
    <motion.div
      animate={{
        scale: [1, 1.08, 1],
        opacity: [0.22, 0.34, 0.22],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.22)_0%,rgba(59,130,246,0.14)_35%,rgba(255,255,255,0)_72%)] blur-3xl"
    />

    {/* pulse ring 1 */}
    <motion.div
      animate={{
        scale: [0.92, 1.08, 0.92],
        opacity: [0.18, 0.05, 0.18],
      }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      className="absolute h-[220px] w-[220px] sm:h-[280px] sm:w-[280px] rounded-full border border-white/35"
    />

    {/* pulse ring 2 */}
    <motion.div
      animate={{
        scale: [1, 1.16, 1],
        opacity: [0.1, 0.02, 0.1],
      }}
      transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      className="absolute h-[250px] w-[250px] sm:h-[320px] sm:w-[320px] rounded-full border border-purple-200/40"
    />

    {/* main glass core */}
    <motion.div
      animate={{
        boxShadow: [
          "0 20px 60px rgba(124,58,237,0.14)",
          "0 28px 80px rgba(37,99,235,0.18)",
          "0 20px 60px rgba(124,58,237,0.14)",
        ],
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative flex h-[180px] w-[180px] sm:h-[240px] sm:w-[240px] items-center justify-center rounded-full border border-white/55 bg-white/18 backdrop-blur-2xl"
    >
      {/* inner gradient aura */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-3 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),rgba(255,255,255,0.18)_28%,rgba(168,85,247,0.22)_55%,rgba(59,130,246,0.18)_78%,rgba(255,255,255,0)_100%)] blur-md"
      />

      {/* logo itself */}
      <motion.img
        src="/logo.png"
        alt="Pura Labs logo"
        animate={{
          y: [0, -4, 0],
          rotate: [0, 1.2, -1.2, 0],
          scale: [1, 1.03, 1],
        }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 h-45 w-50 sm:h-59 sm:w-59 object-contain drop-shadow-[0_10px_30px_rgba(124,58,237,0.28)]"
      />

      {/* glossy highlight */}
      <div className="pointer-events-none absolute left-1/2 top-4 h-10 w-[65%] -translate-x-1/2 rounded-full bg-white/28 blur-md" />
    </motion.div>
  </motion.div>
</div>

      </div>
    </section>
  );
}