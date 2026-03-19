import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

const industries = [
  {
    name: "Law Firms",
    path: "/industry/law",
    blurb: "Client intake, consultations, urgent matter routing",
    x: 18,
    y: 30,
    size: "md",
  },
  {
    name: "Tradespeople",
    path: "/industry/trades",
    blurb: "Job enquiries, emergency jobs, bookings",
    x: 78,
    y: 22,
    size: "md",
  },
  {
    name: "GP Practices",
    path: "/industry/gp",
    blurb: "Appointments, prescriptions, opening hours",
    x: 42,
    y: 45,
    size: "lg",
  },
  {
    name: "Veterinary Clinics",
    path: "/industry/vet",
    blurb: "Pet appointments, medication, emergencies",
    x: 72,
    y: 55,
    size: "md",
  },
  {
    name: "Dental Practices",
    path: "/industry/dental",
    blurb: "Check-ups, urgent enquiries, treatment info",
    x: 22,
    y: 68,
    size: "md",
  },
  {
    name: "Finance",
    path: "/industry/finance",
    blurb: "Consultations, fees, client follow-ups",
    x: 58,
    y: 75,
    size: "md",
  },
  {
    name: "Real Estate",
    path: "/industry/real-estate",
    blurb: "Viewings, valuations, buyer enquiries",
    x: 10,
    y: 52,
    size: "sm",
  },
  {
    name: "Insurance",
    path: "/industry/insurance",
    blurb: "Quotes, claims guidance, renewals",
    x: 88,
    y: 38,
    size: "sm",
  },
  {
    name: "Recruitment",
    path: "/industry/recruitment",
    blurb: "Screening, interviews, candidate enquiries",
    x: 50,
    y: 18,
    size: "sm",
  },
];

const sizeClasses = {
  sm: "h-14 min-w-[100px] px-3 text-xs",
  md: "h-16 min-w-[130px] px-4 text-sm",
  lg: "h-20 min-w-[160px] px-5 text-sm",
};

function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

export default function IndustriesGrid() {
  const [active, setActive] = useState(2);

  const activeIndustry = industries[active];

  const connections = useMemo(() => {
    const source = industries[active];
    return industries
      .map((node, index) => ({
        index,
        from: source,
        to: node,
        d: distance(source, node),
      }))
      .filter((item) => item.index !== active)
      .sort((a, b) => a.d - b.d)
      .slice(0, 3);
  }, [active]);

  return (
    <section className="bg-white px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Choose Your Industry
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-500 sm:text-lg">
            Explore how the same AI system adapts across different business worlds.
          </p>
        </div>

        <div className="mt-16 hidden lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">

          {/* ✅ UPDATED MAP (scrollable) */}
          <div className="relative h-[620px] overflow-x-auto overflow-y-hidden rounded-[32px] border border-neutral-200 bg-white">

            {/* ✅ inner wide container */}
            <div className="relative w-[1200px] h-full">

              <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:72px_72px]" />

              <svg className="pointer-events-none absolute inset-0 h-full w-full">
                {connections.map((line) => {
                  const from = line.from;
                  const to = line.to;
                  return (
                    <motion.line
                      key={`${active}-${line.index}`}
                      x1={`${from.x}%`}
                      y1={`${from.y}%`}
                      x2={`${to.x}%`}
                      y2={`${to.y}%`}
                      stroke="rgba(23,23,23,0.18)"
                      strokeWidth="1.5"
                      strokeDasharray="5 7"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.45 }}
                    />
                  );
                })}
              </svg>

              <div className="absolute right-5 top-5 rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-500">
                Live industry map
              </div>

              {industries.map((item, index) => {
                const isActive = active === index;
                const isConnected = connections.some((c) => c.index === index);

                return (
                  <motion.button
                    key={item.name}
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => {
                      window.location.href = item.path;
                    }}
                    animate={{
                      scale: isActive ? 1.08 : isConnected ? 1.02 : 1,
                      y: isActive ? -4 : 0,
                      opacity: isActive ? 1 : 0.88,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className={`absolute ${isActive ? "z-20" : "z-10"} -translate-x-1/2 -translate-y-1/2 rounded-[24px] border text-left shadow-sm transition-colors duration-300 ${
                      isActive
                        ? "border-neutral-900 bg-neutral-900 text-white shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                        : "border-neutral-200 bg-white text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50"
                    } ${sizeClasses[item.size]}`}
                    style={{ left: `${item.x}%`, top: `${item.y}%` }}
                  >
                    <div className="flex h-full items-center justify-between gap-4">
                      <div className="min-w-0">
                        <div className="truncate font-semibold">{item.name}</div>
                        <div
                          className={`mt-1 truncate text-[11px] leading-tight ${
                            isActive ? "text-white/70" : "text-neutral-400"
                          }`}
                        >
                          {item.blurb}
                        </div>
                      </div>

                      <motion.div
                        animate={{ x: isActive ? 2 : 0, opacity: isActive ? 1 : 0.55 }}
                        className={`shrink-0 text-lg ${isActive ? "text-white" : "text-neutral-400"}`}
                      >
                        ↗
                      </motion.div>
                    </div>
                  </motion.button>
                );
              })}

              <div className="pointer-events-none absolute bottom-5 left-5 rounded-2xl border border-neutral-200 bg-white/90 px-4 py-3 backdrop-blur">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  Active sector
                </div>
                <div className="mt-1 text-sm font-semibold text-neutral-900">
                  {activeIndustry.name}
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT PANEL (unchanged) */}
          <div className="flex min-h-[620px] flex-col rounded-[32px] border border-neutral-200 bg-neutral-50 p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.name}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.25 }}
                className="flex h-full flex-col"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                  Selected industry
                </div>

                <h3 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950">
                  {activeIndustry.name}
                </h3>

                <p className="mt-4 max-w-md text-base leading-8 text-neutral-600">
                  {activeIndustry.blurb}
                </p>

                <div className="mt-8 space-y-3">
                  <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                      What the AI handles
                    </div>
                    <div className="mt-2 text-sm leading-7 text-neutral-700">
                      Calls are answered immediately, details are captured accurately,
                      and the enquiry is routed or booked without delay.
                    </div>
                  </div>

                  <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">
                      Why this matters
                    </div>
                    <div className="mt-2 text-sm leading-7 text-neutral-700">
                      Fewer missed opportunities, less admin pressure, and a more
                      consistent caller experience across busy periods and after hours.
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <button
                    type="button"
                    onClick={() => {
                      window.location.href = activeIndustry.path;
                    }}
                    className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
                  >
                    Explore {activeIndustry.name}
                    <span>→</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* MOBILE (unchanged) */}
        <div className="mt-14 lg:hidden">
          <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {industries.map((item, index) => {
              const isActive = active === index;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : "border-neutral-200 bg-white text-neutral-700"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry.name}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.22 }}
              className="mt-6 rounded-[28px] border border-neutral-200 bg-white p-5"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Selected industry
              </div>

              <h3 className="mt-3 text-2xl font-bold text-neutral-950">
                {activeIndustry.name}
              </h3>

              <p className="mt-3 text-sm leading-7 text-neutral-600">
                {activeIndustry.blurb}
              </p>

              <div className="mt-5 rounded-2xl bg-neutral-50 p-4 text-sm leading-7 text-neutral-700">
                Calls are answered immediately, details are captured, and the enquiry
                is routed or booked without delay.
              </div>

              <button
                type="button"
                onClick={() => {
                  window.location.href = activeIndustry.path;
                }}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white"
              >
                Explore {activeIndustry.name}
                <span>→</span>
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}