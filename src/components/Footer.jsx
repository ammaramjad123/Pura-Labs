import React from "react";
import { MessageCircle, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-32 bg-black text-white overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-700 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600 opacity-20 blur-3xl rounded-full"></div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* LEFT - HERO */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Let’s Create <br />
              <span className="text-gray-400">Beautiful AI Experiences</span>
            </h2>

            {/* Chat Card */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
                <MessageCircle />
              </div>
              <div>
                <p className="font-semibold">Chat</p>
                <p className="text-sm text-gray-400">Have any question? Let’s chat</p>
              </div>
              <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* CENTER - LINKS */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-3 text-gray-400">
                {[
                  "Guides & Tutorials",
                  "Community Forum",
                  "API Documentation",
                  "Webinars"
                ].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-white cursor-pointer transition-all duration-300 hover:translate-x-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-3 text-gray-400">
                {[
                  "AI Voice Agents",
                  "Automation",
                  "Integrations",
                  "Enterprise"
                ].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-white cursor-pointer transition-all duration-300 hover:translate-x-1"
                  >
                    {item}
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
                contact@puralabs.co.uk
              </li>
              <li className="flex items-start gap-3 hover:text-white transition">
                <MapPin size={18} />
                123 Street, London, UK
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <div className="flex flex-wrap gap-6">
            {["Terms & Conditions", "Privacy Policy", "Cookies"].map((item, i) => (
              <span key={i} className="hover:text-white cursor-pointer transition">
                {item}
              </span>
            ))}
          </div>

          <p className="text-gray-500">© {new Date().getFullYear()} PuraLabs. All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;