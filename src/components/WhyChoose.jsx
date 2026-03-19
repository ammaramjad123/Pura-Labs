import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      title: "We Build Your AI Agent",
      desc: "Your AI is trained on your business — services, FAQs, workflows, and call handling preferences.",
    },
    {
      title: "AI Answers Every Call",
      desc: "Customers get instant responses. Questions answered, appointments booked, enquiries captured.",
    },
    {
      title: "Everything Delivered Instantly",
      desc: "Call summaries, caller details, and actions are sent directly to your team in real-time.",
    },
    {
      title: "Capture Every Opportunity",
      desc: "Your AI works 24/7 — no missed calls, more leads, higher conversions, zero lost revenue.",
    },
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* subtle energy background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.06),transparent_70%)]" />

      <div className="relative max-w-5xl mx-auto">

        {/* 🔥 TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-center text-neutral-900"
        >
          How Pura AI Works
        </motion.h2>

        {/* ⚡ FLOW SYSTEM */}
        <div className="relative mt-20">

          {/* 🌊 MAIN ENERGY LINE */}
          <div className="hidden sm:block absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full overflow-hidden">

            <div className="absolute inset-0 bg-neutral-200/40" />

            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2 }}
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400"
            />

            {/* moving energy pulse */}
            <motion.div
              animate={{ y: ["-20%", "120%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 -translate-x-1/2 w-[8px] h-[80px] rounded-full bg-gradient-to-b from-white/80 via-purple-400 to-transparent blur-sm"
            />
          </div>

          {/* 🧩 STEPS */}
          <div className="flex flex-col gap-16">

            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: i % 2 === 0 ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: i * 0.25,
                  type: "spring",
                  stiffness: 120,
                }}
                className={`flex ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className="relative max-w-[90%] sm:max-w-md p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-neutral-200 shadow-xl">

                  {/* step number */}
                  <div className="absolute -top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-lg">
                    {i + 1}
                  </div>

                  {/* title */}
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900">
                    {step.title}
                  </h3>

                  {/* desc */}
                  <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* connection line to center */}
                  <div className={`hidden sm:block absolute top-1/2 ${
                    i % 2 === 0 ? "right-[-40px]" : "left-[-40px]"
                  } w-[40px] h-[2px] bg-gradient-to-r from-purple-400 to-blue-400 opacity-40`} />

                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* 🚀 FINAL IMPACT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg">
            One AI Agent. Unlimited Calls.
          </div>

          <p className="mt-6 max-w-3xl mx-auto text-sm sm:text-lg text-neutral-600 leading-relaxed">
            While your team focuses on closing deals and serving customers,
            Pura AI handles every conversation — instantly, professionally, and at scale.
          </p>
        </motion.div>

      </div>
    </section>
  );
}