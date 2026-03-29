// src/pages/Cookies.jsx
import React from "react";
import { motion } from "framer-motion";
import { Cookie, Shield, Eye, Settings, Info, AlertCircle } from "lucide-react";

const Cookies = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden pt-42 pb-16">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6"
            >
              <Cookie className="w-4 h-4 text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">Cookies & Tracking</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-neutral-950 mb-4"
            >
              Cookie Policy
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 sm:gap-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="sm:hidden text-blue-500">•</span>
                  <span>Last updated: 11 March 2026</span>
                </div>
                <span className="hidden sm:inline text-gray-400">•</span>
                <div className="flex items-center justify-center gap-2">
                  <span className="sm:hidden text-blue-500">•</span>
                  <span>Effective date: 11 March 2026</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <p className="text-gray-600 leading-relaxed mb-4">
                Pura Labs Ltd ("we", "us", "our") uses cookies and similar technologies (collectively "cookies") on our website at <a href="https://www.puralabs.ai" className="text-blue-600 hover:underline">www.puralabs.ai</a> (the "Website") and within the Pura Labs service platform (the "Service"). This Cookie Policy explains what cookies are, the types we use, why we use them, and how you can manage or control them. It should be read alongside our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a>.
              </p>
            </motion.div>

            {/* Section 1 - What are cookies */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">1. What are cookies?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cookies are small text files placed on your device (computer, tablet, smartphone) by websites when you visit them. They allow the website (or third parties) to recognise your device and store or retrieve information, improving your experience or enabling certain functionality.
              </p>
              <p className="text-gray-600 leading-relaxed mb-2">Cookies can be:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><span className="font-semibold">Session cookies</span> — temporary; deleted when you close your browser.</li>
                <li><span className="font-semibold">Persistent cookies</span> — remain on your device until their expiry date or until you delete them.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-2">Similar technologies include pixels, web beacons, local storage, and SDKs in our Service.</p>
            </motion.div>

            {/* Section 2 - Why do we use cookies */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">2. Why do we use cookies?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">We use cookies to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Make the Website and Service function properly (e.g. log you in, remember preferences).</li>
                <li>Analyse how visitors use our Website to improve performance and content.</li>
                <li>Personalise your experience where possible.</li>
                <li>Deliver relevant marketing communications (where you have consented).</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Under PECR and UK GDPR, we only set non-essential cookies with your prior, informed consent. Strictly necessary cookies do not require consent but are still disclosed here for transparency.
              </p>
            </motion.div>

            {/* Section 3 - Types of cookies we use */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">3. Types of cookies we use</h2>
              
              {/* Strictly Necessary Cookies */}
              <h3 className="text-xl font-heading font-semibold text-neutral-950 mb-3 mt-6">Strictly Necessary Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These are essential for the Website or Service to function and cannot be switched off in our systems. They are usually set in response to actions you take (e.g. logging in, setting privacy preferences).
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">Purpose</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">Examples</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">Duration</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">First / Third Party</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600">Authentication & security</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Session management, login tokens</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Session or persistent (up to 1 year)</td>
                      <td className="px-4 py-3 text-sm text-gray-600">First party</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600">Preference / consent storage</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Remembering cookie choices</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Up to 1 year</td>
                      <td className="px-4 py-3 text-sm text-gray-600">First party</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600">Basic functionality</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Load balancing, CSRF protection</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Session</td>
                      <td className="px-4 py-3 text-sm text-gray-600">First party</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">These do not require consent under PECR.</p>

              {/* Functional / Preference Cookies */}
              <h3 className="text-xl font-heading font-semibold text-neutral-950 mb-3">Functional / Preference Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These enable enhanced features and personalisation (e.g. remembering language or dashboard settings). They may be first- or third-party.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">Purpose</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">Examples</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">Duration</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">First / Third Party</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600">User preferences</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Dashboard layout, theme</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Up to 1 year</td>
                      <td className="px-4 py-3 text-sm text-gray-600">First party</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">Consent required.</p>

              {/* Performance / Analytics Cookies */}
              <h3 className="text-xl font-heading font-semibold text-neutral-950 mb-3">Performance / Analytics Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These collect information about how you use the Website (e.g. pages visited, time spent) to help us understand performance and improve the site. Data is usually aggregated and anonymised.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">Provider</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">Purpose</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">Cookies / Technologies</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">Duration</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">More information</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600">Google Analytics / GA4</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Traffic analysis, user behaviour</td>
                      <td className="px-4 py-3 text-sm text-gray-600">_ga, _gid, _gat</td>
                      <td className="px-4 py-3 text-sm text-gray-600">2 years / 24 hours</td>
                      <td className="px-4 py-3 text-sm text-gray-600"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Privacy</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">Consent required. We use IP anonymisation where possible.</p>

              {/* Marketing / Targeting Cookies */}
              <h3 className="text-xl font-heading font-semibold text-neutral-950 mb-3">Marketing / Targeting Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These track your browsing to deliver relevant advertisements or measure campaign effectiveness (e.g. retargeting, LinkedIn/Facebook pixels).
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">Provider</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">Purpose</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">Cookies / Technologies</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">Duration</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">More information</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600">Google Ads / Remarketing</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Retargeting, conversion tracking</td>
                      <td className="px-4 py-3 text-sm text-gray-600">IDE, test_cookie</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Up to 540 days</td>
                      <td className="px-4 py-3 text-sm text-gray-600"><a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Ads Privacy</a></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600">LinkedIn Insight Tag</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Campaign performance, retargeting</td>
                      <td className="px-4 py-3 text-sm text-gray-600">lidc, bcookie</td>
                      <td className="px-4 py-3 text-sm text-gray-600">1 year / session</td>
                      <td className="px-4 py-3 text-sm text-gray-600"><a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn Privacy</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 leading-relaxed">Consent required. These may involve sharing data with third parties.</p>
            </motion.div>

            {/* Section 4 - Third-party cookies */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">4. Third-party cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                When we use third-party services (e.g. analytics, advertising), those providers may set their own cookies. We do not control these but select reputable providers compliant with UK data protection law. See their privacy policies (linked above) for details.
              </p>
            </motion.div>

            {/* Section 5 - Managing cookies */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">5. Managing and controlling cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You can manage cookies via:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li><span className="font-semibold">Our cookie banner</span> — Appears on first visit (and when choices change). Choose "Accept All", "Reject All", or customise preferences. Your choices are stored for 6–12 months.</li>
                <li><span className="font-semibold">Browser settings</span> — Block or delete cookies (may affect site functionality):</li>
              </ul>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">Chrome</a>
                <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">Firefox</a>
                <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">Safari</a>
                <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">Edge</a>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li><span className="font-semibold">Opt-out tools</span> (for specific providers):</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">Google Ads Settings</a>
                <a href="http://www.youronlinechoices.com/uk/your-ad-choices" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">YourOnlineChoices (UK)</a>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Note: Blocking strictly necessary cookies may prevent access to parts of the Website or Service.
              </p>
            </motion.div>

            {/* Section 6 - Changes */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">6. Changes to this Cookie Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this policy to reflect new cookies, technologies, or legal requirements. Check the "Last updated" date. Material changes will be notified via the Website, cookie banner, or email (for logged-in users).
              </p>
            </motion.div>

            {/* Section 7 - Contact */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">7. Contact us</h2>
              <p className="text-gray-600 leading-relaxed mb-2">
                Questions about cookies? Contact us at:
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Email: <a href="mailto:support@puralabs.ai" className="text-blue-600 hover:underline">support@puralabs.ai</a>
              </p>
              <p className="text-gray-600 leading-relaxed">
                For more on your UK GDPR rights, see our <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>. Thank you for using Pura Labs.
              </p>
            </motion.div>

            {/* Bottom Note */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-16 pt-8 border-t border-gray-200 text-center"
            >
              <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Pura Labs Ltd. All rights reserved.</p>
              <div className="text-gray-400 text-xs mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-1 sm:gap-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="sm:hidden text-blue-500">•</span>
                  <span>Company Registration Number: 17075255</span>
                </div>
                <span className="hidden sm:inline text-gray-500">•</span>
                <div className="flex items-center justify-center gap-2">
                  <span className="sm:hidden text-blue-500">•</span>
                  <span>Registered in England and Wales</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cookies;