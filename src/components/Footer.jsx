import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  // Industries list for footer
  const industries = [
    { name: "Law Firms", path: "/industries/law-firms" },
    { name: "Tradespeople", path: "/industries/tradespeople" },
    { name: "GP Practices", path: "/industries/gp-practices" },
    { name: "Veterinary Clinics", path: "/industries/veterinary-clinics" },
    { name: "Dental Practices", path: "/industries/dental-practices" },
    { name: "Finance", path: "/industries/finance" },
    { name: "Real Estate", path: "/industries/real-estate" },
    { name: "Insurance", path: "/industries/insurance" },
    { name: "Recruitment", path: "/industries/recruitment" }
  ];

  // How Pura Works menu items (top menu items)
  const howPuraWorks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact Us", path: "/contact" }
  ];

  // Function to handle Home click - scroll to top
  const handleHomeClick = (e, path) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      window.location.href = path;
    }, 100);
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-700 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600 opacity-20 blur-3xl rounded-full"></div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* LEFT - HERO */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Let’s Create <br />
              <span className="text-gray-400">Beautiful AI Experiences</span>
            </h2>
          </div>

          {/* CENTER - LINKS */}
          <div className="grid grid-cols-2 gap-10">
            {/* Industries Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Industries</h3>
              <ul className="space-y-3 text-gray-400">
                {industries.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.path}
                      className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* How Pura Works Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">How Pura Works</h3>
              <ul className="space-y-3 text-gray-400">
                {howPuraWorks.map((item, i) => (
                  <li key={i}>
                    {item.name === "Home" ? (
                      <a
                        href="/"
                        onClick={(e) => handleHomeClick(e, item.path)}
                        className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT - CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-5 text-gray-400">
              <li className="flex items-center gap-3 hover:text-white transition">
                <Phone size={18} />
                +44 (0) 79 7720 7542
              </li>
              <li className="flex items-center gap-3 hover:text-white transition">
                <Mail size={18} />
                sales@puralabs.ai
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12"></div>

        {/* Bottom - Legal links, Social Icons, Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div className="flex flex-wrap gap-6">
            <Link to="/terms" className="hover:text-white cursor-pointer transition">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </Link>
            <Link to="/cookies" className="hover:text-white cursor-pointer transition">
              Cookies
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Facebook size={20} />
            </a>
          </div>

          <p className="text-gray-500">© {new Date().getFullYear()} PuraLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;