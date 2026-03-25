import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  PhoneCall,
  CalendarDays,
  Mail,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const scenes = [
  {
    id: 1,
    eyebrow: "Step 01",
    title: "We Build Your AI Agent Around Your Business",
    description:
      "We train your AI on your services, opening hours, FAQs, pricing, and call-handling preferences so it can respond like a real member of your team.",
    icon: BrainCircuit,
    accent: "from-purple-600 via-fuchsia-500 to-blue-500",
    leftTitle: "Business Knowledge Base",
    leftLines: [
      "Opening hours synced",
      "FAQs and pricing loaded",
      "Services and workflows mapped",
      "Call preferences configured",
    ],
    rightTitle: "AI Training Status",
    pills: ["FAQs", "Pricing", "Hours", "Routing"],
    footer: "Ready to answer detailed and routine enquiries confidently",
  },
  {
    id: 2,
    eyebrow: "Step 02",
    title: "Your AI Agent Answers Every Call",
    description:
      "When someone calls, your AI responds instantly with a natural human-like voice, captures details, books appointments, and routes calls correctly.",
    icon: PhoneCall,
    accent: "from-blue-600 via-cyan-500 to-purple-500",
    leftTitle: "Live Incoming Call",
    leftLines: [
      "Caller: New enquiry",
      "Intent detected in seconds",
      "Questions answered naturally",
      "No hold music. No voicemail.",
    ],
    rightTitle: "AI Actions",
    pills: ["Answer", "Qualify", "Book", "Route"],
    footer: "Every caller gets immediate help without waiting",
  },
  {
    id: 3,
    eyebrow: "Step 03",
    title: "Your Team Gets Everything Instantly",
    description:
      "After each call, your team receives caller details, enquiry summaries, appointment bookings, and next actions — all in real time.",
    icon: Mail,
    accent: "from-purple-600 via-blue-500 to-cyan-400",
    leftTitle: "Call Outcome",
    leftLines: [
      "Caller details captured",
      "Appointment booked",
      "Lead qualified",
      "Next action assigned",
    ],
    rightTitle: "Delivered To Team",
    pills: ["Email", "CRM", "Calendar", "Summary"],
    footer: "No details lost. No admin bottlenecks.",
  },
  {
    id: 4,
    eyebrow: "Step 04",
    title: "Capture Leads",
    description:
      "Your AI works 24/7 during busy periods, after hours, and on weekends so more calls turn into bookings, leads, and revenue.",
    icon: CheckCircle2,
    accent: "from-fuchsia-500 via-purple-600 to-blue-500",
    leftTitle: "Business Impact",
    leftLines: [
      "Fewer missed opportunities",
      "More inbound leads captured",
      "Higher enquiry-to-booking conversion",
      "More time for your team to focus",
    ],
    rightTitle: "Always Active",
    pills: ["24/7", "Scalable", "Consistent", "Reliable"],
    footer:
      "One AI agent handling unlimited calls with the same professionalism",
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % scenes.length);
    }, 15000); // 15 seconds
  };

  useEffect(() => {
    startTimer();

    return () => clearInterval(timerRef.current);
  }, []);

  const current = scenes[active];
  const CurrentIcon = current.icon;

  const iconScale = [
    "scale-100", // Step 01
    "scale-100", // Step 02
    "scale-110", // Step 03 (Mail looks smaller → boost)
    "scale-120", // Step 04 (CheckCircle looks smaller → more boost)
  ];

  return (
    <section className="relative w-full overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(124,58,237,0.06),transparent_45%),radial-gradient(circle_at_80%_50%,rgba(59,130,246,0.05),transparent_40%),linear-gradient(to_bottom,transparent,rgba(255,255,255,0.4),transparent)]" />
      <div className="relative mx-auto max-w-7xl">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-600">
            How It Works
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            Watch The System Work
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg">
            Not just a list of steps — a live view of how your AI agent is
            built, answers calls, takes action, and delivers outcomes for your
            team.
          </p>
        </motion.div>

        {/* progress rail */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4">
          {scenes.map((scene, index) => (
            <button
              key={scene.id}
              type="button"
              onClick={() => {
                setActive(index);
                startTimer();
              }}
              className={`group rounded-2xl border px-4 py-4 text-left transition-all duration-300 ${
                active === index
                  ? "border-purple-200 bg-white/80 shadow-[0_10px_30px_rgba(124,58,237,0.10)]"
                  : "border-white/50 bg-white/45 hover:bg-white/65"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br ${scene.accent} text-white shadow-md`}
                >
                  <scene.icon
                    className={`h-5 w-5 sm:h-6 sm:w-6 ${iconScale[index]}`}
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                    {scene.eyebrow}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-neutral-900">
                    {scene.title.split(" ").slice(0, 3).join(" ")}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* cinematic console */}
        <div className="relative mx-auto mt-10 max-w-6xl">
          <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/65 shadow-[0_30px_120px_rgba(17,24,39,0.12)] backdrop-blur-2xl">
            {/* ✅ NEW LIGHT + CONTAINED GLOW */}
            <motion.div
              key={current.id}
              initial={{ opacity: 0.06, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="pointer-events-none absolute inset-0 rounded-[28px] blur-[140px]"
              style={{
                background:
                  active === 0
                    ? "radial-gradient(circle at center, rgba(124,58,237,0.08), rgba(59,130,246,0.05), transparent 70%)"
                    : active === 1
                      ? "radial-gradient(circle at center, rgba(37,99,235,0.08), rgba(6,182,212,0.05), transparent 70%)"
                      : active === 2
                        ? "radial-gradient(circle at center, rgba(139,92,246,0.08), rgba(56,189,248,0.05), transparent 70%)"
                        : "radial-gradient(circle at center, rgba(217,70,239,0.08), rgba(124,58,237,0.05), transparent 70%)",
                opacity: 0.04,
              }}
            />

            {/* top chrome */}
            <div className="flex items-center justify-between border-b border-neutral-200/70 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              </div>

              <div className="hidden rounded-full bg-neutral-100 px-4 py-1.5 text-xs font-medium text-neutral-500 sm:block">
                Pura AI Live Workflow
              </div>

              <div className="flex items-center gap-2">
                {scenes.map((scene, index) => (
                  <button
                    key={scene.id}
                    onClick={() => {
                      setActive(index);
                      startTimer();
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      active === index
                        ? "w-8 bg-gradient-to-r from-purple-600 to-blue-500"
                        : "w-3 bg-neutral-300 hover:bg-neutral-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* KEEP REST OF YOUR CODE EXACTLY SAME BELOW */}

            <div className="grid min-h-[620px] grid-cols-1 lg:grid-cols-[1.05fr_1.2fr]">
              {/* left story panel */}
              <div className="relative border-b border-neutral-200/70 p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.45 }}
                    className="flex h-full flex-col"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${current.accent} text-white shadow-lg`}
                      >
                        <CurrentIcon size={22} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-600">
                          {current.eyebrow}
                        </p>
                        <div className="mt-1 text-sm font-medium text-neutral-500">
                          AI workflow sequence
                        </div>
                      </div>
                    </div>

                    <h3 className="mt-8 font-heading text-2xl font-bold leading-tight text-neutral-950 sm:text-4xl">
                      {current.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-base leading-8 text-neutral-600 sm:text-lg">
                      {current.description}
                    </p>

                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {current.pills.map((pill) => (
                        <div
                          key={pill}
                          className="rounded-2xl border border-neutral-200 bg-white/75 px-4 py-3 text-sm font-medium text-neutral-700 shadow-sm"
                        >
                          {pill}
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-10">
                      <div className="rounded-3xl border border-purple-100 bg-gradient-to-r from-purple-50 to-blue-50 p-5">
                        <div className="flex items-center gap-3">
                          <CalendarDays className="text-purple-600" size={18} />
                          <p className="text-sm font-semibold text-neutral-900">
                            Outcome
                          </p>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-neutral-600 sm:text-base">
                          {current.footer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* right live panel */}
              <div className="relative p-5 sm:p-7 lg:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.985, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.985, y: -12 }}
                    transition={{ duration: 0.45 }}
                    className="h-full"
                  >
                    <div className="grid h-full gap-4 lg:grid-rows-[auto_auto_1fr_auto]">
                      {/* live header */}
                      <div className="flex flex-col gap-3 rounded-[24px] border border-neutral-200 bg-white/80 p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                            Live simulation
                          </p>
                          <p className="mt-1 text-lg font-semibold text-neutral-900">
                            {current.leftTitle}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                          </span>
                          System Active
                        </div>
                      </div>

                      {/* animated signal rail */}
                      <div className="relative overflow-hidden rounded-[24px] border border-neutral-200 bg-white/70 p-4 sm:p-5">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                            Signal Flow
                          </span>
                          <span className="text-xs font-medium text-neutral-500">
                            real-time
                          </span>
                        </div>

                        <div className="relative mt-5 h-14 overflow-hidden rounded-full bg-neutral-100">
                          <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.8),transparent)] opacity-60" />
                          {/* MOBILE beam (smooth gradient) */}
                          <motion.div
                            key={`beam-mobile-${current.id}`}
                            animate={{
                              backgroundPosition: ["0% 50%", "100% 50%"],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute inset-0 rounded-full opacity-60 sm:hidden"
                            style={{
                              backgroundImage:
                                "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(59,130,246,0.5), transparent)",
                              backgroundSize: "200% 100%",
                            }}
                          />

                          {/* DESKTOP beam (your original) */}
                          <motion.div
                            key={`beam-desktop-${current.id}`}
                            initial={{ x: "-25%" }}
                            animate={{ x: "115%" }}
                            transition={{
                              duration: 2.2,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className={`absolute top-1/2 h-8 w-32 -translate-y-1/2 rounded-full bg-gradient-to-r ${current.accent} blur-sm hidden sm:block`}
                          />
                          <div className="absolute inset-0 flex items-center justify-around px-5">
                            {[...Array(7)].map((_, i) => (
                              <motion.div
                                key={i}
                                animate={{
                                  scaleY: [0.7, 1.1, 0.7],
                                  opacity: [0.45, 1, 0.45],
                                }}
                                transition={{
                                  duration: 1.2,
                                  repeat: Infinity,
                                  delay: i * 0.08,
                                }}
                                className="h-6 w-[3px] rounded-full bg-gradient-to-b from-purple-500 to-blue-500"
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* live cards */}
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-[24px] border border-neutral-200 bg-white/80 p-5 shadow-sm">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                            {current.leftTitle}
                          </p>
                          <div className="mt-4 space-y-3">
                            {current.leftLines.map((line, i) => (
                              <motion.div
                                key={line}
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.08 }}
                                className="flex items-center gap-3 rounded-2xl bg-neutral-50 px-4 py-3"
                              >
                                <span
                                  className={`h-2.5 w-2.5 min-w-[10px] min-h-[10px] flex-shrink-0 rounded-full ${
                                    [
                                      "bg-purple-500",
                                      "bg-blue-500",
                                      "bg-indigo-500",
                                      "bg-fuchsia-500",
                                    ][active]
                                  }`}
                                />
                                <span className="text-sm leading-6 text-neutral-700 sm:text-base">
                                  {line}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-[24px] border border-neutral-200 bg-white/80 p-5 shadow-sm">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                            {current.rightTitle}
                          </p>

                          <div className="mt-4 grid gap-3">
                            {current.pills.map((pill, i) => (
                              <motion.div
                                key={pill}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.06 }}
                                className="flex items-center justify-between rounded-2xl bg-neutral-50 px-4 py-3"
                              >
                                <span className="text-sm font-medium text-neutral-700 sm:text-base">
                                  {pill}
                                </span>
                                <span className="rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                                  Active
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* bottom result */}
                      <div className="rounded-[24px] border border-white/60 bg-gradient-to-r from-neutral-950 to-neutral-800 p-5 text-white shadow-xl sm:p-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                              Final Outcome
                            </p>
                            <p className="mt-2 text-xl font-semibold sm:text-2xl">
                              One AI agent. Unlimited conversations.
                            </p>
                          </div>

                          <div className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90">
                            See flow
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
