import { useState, useEffect } from "react";
import {
  Briefcase,
  Stethoscope,
  HeartPulse,
  PawPrint,
  Building2,
  Shield,
  Users,
  ChevronDown,
  Menu,
  X,
  Scale,
  Hammer,
} from "lucide-react";

const industries = [
  {
    title: "Law firms",
    desc: "Client intake, consultations, urgent call routing",
    bullets: ["Client intake", "Consultations", "Urgent matters"],
    icon: <Scale size={18} strokeWidth={2.2} />,
  },
  {
    title: "Tradespeople",
    desc: "Job enquiries, call capture, bookings",
    bullets: ["Job enquiries", "Emergency jobs", "Bookings"],
    icon: <Hammer size={18} strokeWidth={2.2} />,
  },
  {
    title: "GP Practices",
    desc: "Appointments, prescriptions, opening hours",
    bullets: ["Appointments", "Prescriptions", "Opening hours"],
    icon: <Stethoscope size={18} strokeWidth={2.2} />,
  },
  {
    title: "Veterinary Clinics",
    desc: "Pet appointments, medication, emergencies",
    bullets: ["Appointments", "Medication requests", "Emergency guidance"],
    icon: <PawPrint size={18} strokeWidth={2.2} />,
  },
  {
    title: "Dental Practices",
    desc: "Check-ups, urgent enquiries, treatment info",
    bullets: ["Check-ups", "Urgent enquiries", "Treatment info"],
    icon: <HeartPulse size={18} strokeWidth={2.2} />,
  },
  {
    title: "Finance",
    desc: "Consultations, fees, client follow-ups",
    bullets: ["Consultations", "Fees", "Follow-ups"],
    icon: <Briefcase size={18} strokeWidth={2.2} />,
  },
  {
    title: "Real Estate",
    desc: "Viewings, valuations, buyer enquiries",
    bullets: ["Viewings", "Valuations", "Buyer enquiries"],
    icon: <Building2 size={18} strokeWidth={2.2} />,
  },
  {
    title: "Insurance",
    desc: "Quotes, claims guidance, renewals",
    bullets: ["Quotes", "Claims guidance", "Renewals"],
    icon: <Shield size={18} strokeWidth={2.2} />,
  },
  {
    title: "Recruitment",
    desc: "Candidate screening, interviews, enquiries",
    bullets: ["Candidate screening", "Interviews", "Enquiries"],
    icon: <Users size={18} strokeWidth={2.2} />,
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto w-full max-w-[1600px] px-3 sm:px-4 lg:px-6">
          <div className="pt-3 sm:pt-4 transition-all duration-500">
            <div
              className={`relative mx-auto grid grid-cols-[auto_1fr_auto] items-center border border-white/40 px-4 py-4 sm:px-6 lg:px-8 transition-all duration-500 ${
                scrolled
                  ? "max-w-[1380px] rounded-full bg-white/70 shadow-[0_12px_40px_rgba(94,76,255,0.12)] backdrop-blur-xl"
                  : "max-w-full rounded-[32px] bg-white/10 backdrop-blur-md"
              }`}
            >
              {/* LOGO */}
           <a
  href="#home"
  className="justify-self-start flex items-center gap-3 font-bold tracking-tight text-blue-600"
>
  <img
    src="/logo.png"
    alt="Pura Labs logo"
    className={`object-contain transition-all duration-300 ${
      scrolled
        ? "h-14 w-14 sm:h-14 sm:w-14 lg:h-14 lg:w-14"
        : "h-17 w-17 sm:h-18 sm:w-18 lg:h-20 lg:w-20"
    }`}
  />
  <span
    className={`transition-all duration-300 font-[Montserrat] ${
      scrolled ? "text-xl sm:text-xl" : "text-2xl sm:text-2xl"
    }`}
  >
    Pura Labs
  </span>
</a>

              {/* NAV */}
              <nav className="hidden items-center justify-center gap-10 lg:flex">
                {navLinks.slice(0, 2).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group relative whitespace-nowrap text-[20px] font-medium text-neutral-800 transition-colors hover:text-blue-600"
                  >
                    {link.label}
                    <span className="absolute left-0 top-full mt-1 h-[2px] w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}

                {/* INDUSTRIES */}
                <div
                  className="relative"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <button
                    type="button"
                    className={`group relative flex items-center gap-1 whitespace-nowrap text-[20px] font-medium transition-colors ${
                      open ? "text-blue-600" : "text-neutral-800 hover:text-blue-600"
                    }`}
                  >
                    Industries
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                    <span
                      className={`absolute left-0 top-full mt-1 h-[2px] rounded-full bg-blue-600 transition-all duration-300 ${
                        open ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>

                  <div className="absolute left-1/2 -translate-x-1/2 top-full h-6 w-[980px] max-w-[95vw]" />

                  <div
                    className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%+16px)] w-[980px] max-w-[95vw] transition-all duration-300 ${
                      open
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-2 opacity-0"
                    }`}
                  >
                    <div className="rounded-[32px] bg-white p-8 shadow-[0_30px_80px_rgba(0,0,0,0.14)]">
                      <div className="grid grid-cols-3 gap-x-8 gap-y-10">
                        {industries.map((item, i) => (
                          <a
                            key={i}
                            href="#industries"
                            className="group flex items-start gap-4 rounded-2xl p-2 transition-colors hover:bg-neutral-50"
                          >
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                              {item.icon}
                            </div>

                            <div>
                              <h4 className="text-[18px] font-semibold text-neutral-900">
                                {item.title}
                              </h4>
                              <p className="mt-1 text-[15px] text-neutral-500">
                                {item.desc}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>

                      <div className="mt-8 border-t border-neutral-200 pt-8 text-center">
                        <button className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-blue-700 cursor-pointer">
                          View All Industries
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {navLinks.slice(2).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group relative whitespace-nowrap text-[20px] font-medium text-neutral-800 transition-colors hover:text-blue-600"
                  >
                    {link.label}
                    <span className="absolute left-0 top-full mt-1 h-[2px] w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </nav>

              <button
                onClick={() => setMobileOpen(true)}
                className="justify-self-end flex h-11 w-11 items-center justify-center rounded-full text-neutral-700 transition hover:bg-white/30 lg:hidden"
              >
                <Menu size={30} strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU — unchanged */}

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
          onClick={() => setMobileOpen(false)}
        />

        <div className="relative h-full w-full overflow-y-auto px-4 pt-4 pb-8 sm:px-6">
          <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-2xl flex-col rounded-[32px] border border-white/40 bg-[#e9e9e9]/95 px-5 py-5 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <a
                href="#home"
                className="flex items-center gap-3 text-2xl font-bold tracking-tight text-blue-600 sm:text-2xl"
              >
                <img
                  src="/logo.png"
                  alt="Pura Labs logo"
                  className="h-12 w-12 object-contain sm:h-10 sm:w-10"
                />
                <span>Pura Labs</span>
              </a>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full text-neutral-500 transition hover:bg-black/5"
              >
                <X size={30} strokeWidth={2.2} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto rounded-[26px] bg-white px-6 py-8 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <a href="#home" className="py-4 text-[28px] font-medium text-neutral-900">
                  Home
                </a>

                <a href="#about" className="py-4 text-[28px] font-medium text-neutral-900">
                  About Us
                </a>

                {/* FIXED COLOR */}
                <button
                  type="button"
                  onClick={() => setMobileIndustryOpen((prev) => !prev)}
                  className={`flex items-center gap-3 py-4 text-[28px] font-medium ${
                    mobileIndustryOpen ? "text-blue-600" : "text-neutral-900"
                  }`}
                >
                  Industries
                  <ChevronDown
                    size={26}
                    className={`transition-transform duration-300 ${
                      mobileIndustryOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* rest unchanged */}

               <div
  className={`w-full transition-all duration-300 ease-out ${
    mobileIndustryOpen
      ? "opacity-100 translate-y-0"
      : "opacity-0 -translate-y-1 pointer-events-none"
  }`}
>
  {mobileIndustryOpen && (
    <div className="space-y-5 px-1 pt-2 pb-6 text-left">
      {industries.map((item, i) => (
        <div
          key={i}
          className="rounded-[20px] border border-neutral-200 bg-[#f7f7f7] p-5"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              {item.icon}
            </div>

            <div className="min-w-0">
              <h4 className="text-[20px] font-semibold text-neutral-900">
                {item.title}
              </h4>

              <ul className="mt-3 space-y-1 text-[16px] text-neutral-600">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  )}
</div>

                <a
                  href="#pricing"
                  className="py-4 text-[28px] font-medium text-neutral-900"
                  onClick={() => setMobileOpen(false)}
                >
                  Pricing
                </a>

                <a
                  href="#contact"
                  className="py-4 text-[28px] font-medium text-neutral-900"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}