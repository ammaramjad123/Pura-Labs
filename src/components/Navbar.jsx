import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
    path: "/industries/law-firms",
    desc: "Client intake, consultations, urgent call routing",
    bullets: ["Client intake", "Consultations", "Urgent matters"],
    icon: <Scale size={18} strokeWidth={2.2} />,
  },
  {
    title: "Tradespeople",
    path: "/industries/tradespeople",
    desc: "Job enquiries, call capture, bookings",
    bullets: ["Job enquiries", "Emergency jobs", "Bookings"],
    icon: <Hammer size={18} strokeWidth={2.2} />,
  },
  {
    title: "GP Practices",
    path: "/industries/gp-practices",
    desc: "Appointments, prescriptions, opening hours",
    bullets: ["Appointments", "Prescriptions", "Opening hours"],
    icon: <Stethoscope size={18} strokeWidth={2.2} />,
  },
  {
    title: "Veterinary Clinics",
    path: "/industries/veterinary-clinics",
    desc: "Pet appointments, medication, emergencies",
    bullets: ["Appointments", "Medication requests", "Emergency guidance"],
    icon: <PawPrint size={18} strokeWidth={2.2} />,
  },
  {
    title: "Dental Practices",
    path: "/industries/dental-practices",
    desc: "Check-ups, urgent enquiries, treatment info",
    bullets: ["Check-ups", "Urgent enquiries", "Treatment info"],
    icon: <HeartPulse size={18} strokeWidth={2.2} />,
  },
  {
    title: "Finance",
    path: "/industries/finance",
    desc: "Consultations, fees, client follow-ups",
    bullets: ["Consultations", "Fees", "Follow-ups"],
    icon: <Briefcase size={18} strokeWidth={2.2} />,
  },
  {
    title: "Real Estate",
    path: "/industries/real-estate",
    desc: "Viewings, valuations, buyer enquiries",
    bullets: ["Viewings", "Valuations", "Buyer enquiries"],
    icon: <Building2 size={18} strokeWidth={2.2} />,
  },
  {
    title: "Insurance",
    path: "/industries/insurance",
    desc: "Quotes, claims guidance, renewals",
    bullets: ["Quotes", "Claims guidance", "Renewals"],
    icon: <Shield size={18} strokeWidth={2.2} />,
  },
  {
    title: "Recruitment",
    path: "/industries/recruitment",
    desc: "Candidate screening, interviews, enquiries",
    bullets: ["Candidate screening", "Interviews", "Enquiries"],
    icon: <Users size={18} strokeWidth={2.2} />,
  },
];

const navLinks = [
  { label: "Home", path: "/", type: "route" },
  { label: "About Us", path: "#about", type: "hash", targetPage: "/" },
  { label: "Pricing", path: "#pricing", type: "hash", targetPage: "/" },
  { label: "Contact Us", path: "#contact", type: "hash", targetPage: "/" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const location = useLocation();
  const navigate = useNavigate(); // ✅ Moved inside component

 // Define which pages should be dark (add or remove paths as needed)
const darkPages = [
  "/industries/real-estate",
  "/industries/insurance",
  "/industries/recruitment",
];

// Check if current page should be dark
const isDarkPage = darkPages.includes(location.pathname);

  // 🎨 DYNAMIC STYLES - NOW SCROLL-AWARE
  const navText = scrolled 
    ? (isDarkPage ? "text-gray-800" : "text-neutral-800")
    : (isDarkPage ? "text-white" : "text-neutral-800");

  const navHover = scrolled
    ? (isDarkPage ? "hover:text-blue-600" : "hover:text-blue-600")
    : (isDarkPage ? "hover:text-white" : "hover:text-blue-600");

  const underline = scrolled
    ? (isDarkPage ? "bg-blue-600" : "bg-blue-600")
    : (isDarkPage ? "bg-white" : "bg-blue-600");

  const activeText = scrolled
    ? (isDarkPage ? "text-blue-600" : "text-blue-600")
    : (isDarkPage ? "text-white" : "text-blue-600");

  const activeUnderline = scrolled
    ? (isDarkPage ? "bg-blue-600" : "bg-blue-600")
    : (isDarkPage ? "bg-white" : "bg-blue-600");

  const navBgScrolled = isDarkPage
    ? "bg-white/95 backdrop-blur-md border-white/20"
    : "bg-white/95 backdrop-blur-xl border-white/40";

  const navBgDefault = isDarkPage
    ? "bg-white/10 backdrop-blur-md border-white/20"
    : "bg-white/10 backdrop-blur-md";

  // ✅ Add the hash navigation function inside component
  const handleHashNavigation = (link) => {
    const currentPath = location.pathname;
    const targetPath = link.targetPage || "/";
    const hash = link.path;
    
    if (currentPath === targetPath) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `${targetPath}${hash}`;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto w-full max-w-[1600px] px-3 sm:px-4 lg:px-6">
          <div className="pt-3 sm:pt-4 transition-all duration-500">
            <div
              className={`relative mx-auto grid grid-cols-[auto_1fr_auto] items-center border transition-all duration-500 ${
                scrolled
                  ? `${navBgScrolled} max-w-[1100px] sm:max-w-[1200px] lg:max-w-[1250px] rounded-full shadow-[0_12px_40px_rgba(94,76,255,0.12)] px-2 py-1 sm:px-5 sm:py-3 lg:px-8 lg:py-4`
                  : `${navBgDefault} max-w-full rounded-[32px] px-4 py-4 sm:px-6 sm:py-4 lg:px-8 lg:py-4`
              }`}
            >
              {/* LOGO */}
              <Link
                to="/"
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
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
                  } ${
                    !isDarkPage 
                      ? "text-blue-600"
                      : (scrolled ? "text-black" : "text-white")
                  }`}
                >
                  Pura Labs
                </span>
              </Link>

              {/* DESKTOP NAV */}
              <nav className="hidden items-center justify-center gap-10 lg:flex">
                <Link
                  to="/"
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className={`group relative whitespace-nowrap text-[20px] font-medium transition-colors ${
                    isActive("/") ? activeText : navText
                  } ${!isActive("/") && navHover}`}
                >
                  Home
                  <span
                    className={`absolute left-0 top-full mt-1 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-full ${
                      isActive("/") ? activeUnderline : underline
                    }`}
                  />
                </Link>

                <button
                  onClick={() => handleHashNavigation({ label: "About Us", path: "#about", targetPage: "/" })}
                  className={`group relative whitespace-nowrap text-[20px] font-medium transition-colors ${navText} ${navHover} cursor-pointer`}
                >
                  About Us
                  <span className={`absolute left-0 top-full mt-1 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-full ${underline}`} />
                </button>

                {/* INDUSTRIES DROPDOWN */}
                <div
                  className="relative"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <button
                    type="button"
                    className={`group relative flex items-center gap-1 whitespace-nowrap text-[20px] font-medium transition-colors ${
                      open || location.pathname.includes("/industries")
                        ? activeText
                        : navText
                    } ${!open && !location.pathname.includes("/industries") && navHover}`}
                  >
                    Industries
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                    <span
                      className={`absolute left-0 top-full mt-1 h-[2px] rounded-full transition-all duration-300 ${
                        open || location.pathname.includes("/industries")
                          ? `w-full ${activeUnderline}`
                          : `w-0 group-hover:w-full ${underline}`
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
                          <Link
                            key={i}
                            to={item.path}
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
                          </Link>
                        ))}
                      </div>
                      <div className="mt-8 border-t border-neutral-200 pt-8 text-center">
                        <Link
                          to="/industries"
                          className="inline-block rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-blue-700 cursor-pointer"
                        >
                          View All Industries
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleHashNavigation({ label: "Pricing", path: "#pricing", targetPage: "/" })}
                  className={`group relative whitespace-nowrap text-[20px] font-medium transition-colors ${navText} ${navHover} cursor-pointer`}
                >
                  Pricing
                  <span className={`absolute left-0 top-full mt-1 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-full ${underline}`} />
                </button>

                <button
                  onClick={() => handleHashNavigation({ label: "Contact Us", path: "#contact", targetPage: "/" })}
                  className={`group relative whitespace-nowrap text-[20px] font-medium transition-colors ${navText} ${navHover} cursor-pointer`}
                >
                  Contact Us
                  <span className={`absolute left-0 top-full mt-1 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-full ${underline}`} />
                </button>
              </nav>

              <button
                onClick={() => setMobileOpen(true)}
                className="justify-self-end flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-white/30 lg:hidden"
              >
                <Menu size={30} strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>
      </header>

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
          <div className={`mx-auto flex min-h-[calc(100vh-2rem)] max-w-2xl flex-col rounded-[32px] border px-5 py-5 shadow-2xl backdrop-blur-xl ${
            isDarkPage 
              ? "bg-white/95 border-white/20" 
              : "bg-[#e9e9e9]/95 border-white/40"
          }`}>
            <div className="mb-6 flex items-center justify-between">
              <Link
                to="/"
                className="flex items-center gap-3 text-2xl font-bold tracking-tight sm:text-2xl"
                onClick={() => setMobileOpen(false)}
              >
                <img
                  src="/logo.png"
                  alt="Pura Labs logo"
                  className="h-12 w-12 object-contain sm:h-10 sm:w-10"
                />
                <span className="font-heading text-blue-600">
                  Pura Labs
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className={`flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-black/5 ${
                  isDarkPage ? "text-neutral-600" : "text-neutral-500"
                }`}
              >
                <X size={30} strokeWidth={2.2} />
              </button>
            </div>

            <div className={`flex-1 overflow-y-auto rounded-[26px] px-6 py-8 shadow-sm ${
              isDarkPage ? "bg-white/95" : "bg-white"
            }`}>
              <div className="flex flex-col items-center text-center">
                <Link
                  to="/"
                  className={`py-4 text-[28px] font-medium transition-colors ${
                    isActive("/") 
                      ? "text-blue-600" 
                      : isDarkPage ? "text-neutral-800" : "text-neutral-900"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>

                <button
                  onClick={() => {
                    handleHashNavigation({ label: "About Us", path: "#about", targetPage: "/" });
                    setMobileOpen(false);
                  }}
                  className={`py-4 text-[28px] font-medium transition-colors ${
                    isDarkPage ? "text-neutral-800" : "text-neutral-900"
                  }`}
                >
                  About Us
                </button>

                <button
                  type="button"
                  onClick={() => setMobileIndustryOpen((prev) => !prev)}
                  className={`flex items-center gap-3 py-4 text-[28px] font-medium ${
                    mobileIndustryOpen || location.pathname.includes("/industries")
                      ? "text-blue-600"
                      : isDarkPage ? "text-neutral-800" : "text-neutral-900"
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
                        <Link
                          key={i}
                          to={item.path}
                          onClick={() => setMobileOpen(false)}
                          className={`block rounded-[20px] border p-5 transition-colors hover:bg-blue-50 ${
                            location.pathname === item.path 
                              ? "border-blue-200 bg-blue-50" 
                              : "border-neutral-200 bg-[#f7f7f7]"
                          }`}
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
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => {
                    handleHashNavigation({ label: "Pricing", path: "#pricing", targetPage: "/" });
                    setMobileOpen(false);
                  }}
                  className={`py-4 text-[28px] font-medium transition-colors ${
                    isDarkPage ? "text-neutral-800" : "text-neutral-900"
                  }`}
                >
                  Pricing
                </button>

                <button
                  onClick={() => {
                    handleHashNavigation({ label: "Contact Us", path: "#contact", targetPage: "/" });
                    setMobileOpen(false);
                  }}
                  className={`py-4 text-[28px] font-medium transition-colors ${
                    isDarkPage ? "text-neutral-800" : "text-neutral-900"
                  }`}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}