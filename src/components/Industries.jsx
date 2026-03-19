import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Industries() {
  const calls = [
    {
      text: "Hi, I need help with a legal issue",
      industry: "Law Firms",
    },
    {
      text: "My boiler just broke, can someone come today?",
      industry: "Tradespeople",
    },
    {
      text: "I'd like to book a GP appointment",
      industry: "GP Practices",
    },
    {
      text: "My dog is unwell, can I get an appointment?",
      industry: "Veterinary Clinics",
    },
    {
      text: "I need to book a dental check-up",
      industry: "Dental Practices",
    },
  ];

  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing → thinking → done

  useEffect(() => {
    setDisplayedText("");
    setCharIndex(0);
    setPhase("typing");
  }, [index]);

  useEffect(() => {
    if (phase !== "typing") return;

    if (charIndex < calls[index].text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + calls[index].text[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 25);
      return () => clearTimeout(timeout);
    } else {
      setPhase("thinking");

      setTimeout(() => {
        setPhase("done");
      }, 600);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % calls.length);
      }, 2200);
    }
  }, [charIndex, phase, index]);

  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.05),transparent_70%)]" />

      <div className="relative max-w-4xl mx-auto text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-neutral-900"
        >
          One AI. Every Industry.
        </motion.h2>

        <div className="mt-16 flex flex-col items-center gap-8">

          {/* Incoming */}
          <div className="text-sm text-neutral-500">
            Incoming Call...
          </div>

          {/* TYPING MESSAGE */}
          <div className="max-w-[90%] sm:max-w-lg px-6 py-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-neutral-200 shadow-lg text-sm sm:text-base text-neutral-700 text-left min-h-[90px] sm:min-h-[70px] flex items-center">

            “{displayedText}
            <span className="animate-pulse">|</span>”
          </div>

          {/* THINKING INDICATOR */}
          <div className="h-[44px] flex items-center justify-center">
  {phase === "thinking" && (
    <div className="flex gap-1">
      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:0.15s]" />
      <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:0.3s]" />
    </div>
  )}

  {phase === "done" && (
    <motion.div
      key={calls[index].industry}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-md text-sm sm:text-base"
    >
      {calls[index].industry}
    </motion.div>
  )}
</div>

          {/* SIGNAL LINE */}
          <motion.div
            animate={{
              width: ["0%", "100%", "0%"],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 w-[220px] sm:w-[320px]"
          />

          {/* TEXT */}
          <p className="mt-4 text-sm sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
            Pura AI doesn’t just answer calls — it understands intent,
            responds intelligently, and adapts instantly to every situation.
          </p>

        </div>

      </div>
    </section>
  );
}