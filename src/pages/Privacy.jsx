// src/pages/Privacy.jsx
import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Server, Globe, Mail, Phone } from "lucide-react";

const Privacy = () => {
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
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">Privacy & Security</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-neutral-950 mb-4"
            >
              Privacy Policy
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
                Pura Labs Ltd ("we", "us", "our") is committed to protecting your privacy and handling your personal data in a transparent, secure, and lawful manner. This Privacy Policy explains how we collect, use, disclose, store, and protect personal data when you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Visit our website at <a href="https://www.puralabs.ai" className="text-blue-600 hover:underline">www.puralabs.ai</a></li>
                <li>Register for, access, or use our Pura Labs service (the "Service"), including voice AI agents that answer calls, book meetings, update CRMs, and handle general queries;</li>
                <li>Interact with us in any other way (e.g. enquiries, support, marketing).</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                We act as the data controller for most personal data we collect directly from you (e.g. account and billing information). When processing call recordings, transcripts, or other customer interaction data on behalf of our business customers ("Customers"), we generally act as a data processor — the Customer remains the data controller.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using our Website or Service, you agree to the practices described in this Privacy Policy.
              </p>
            </motion.div>

            {/* Section 1 - Who we are */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">1. Who we are</h2>
              <p className="text-gray-600 leading-relaxed mb-2">
                Pura Labs Ltd is a company registered in England and Wales with company number 17075255. You can contact us about this Privacy Policy at:
              </p>
              <p className="text-gray-600 leading-relaxed">
                Email: <a href="mailto:sales@puralabs.ai" className="text-blue-600 hover:underline">sales@puralabs.ai</a>
              </p>
            </motion.div>

            {/* Section 2 - Personal data we collect */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">2. Personal data we collect</h2>
              <p className="text-gray-600 leading-relaxed mb-4">We may collect the following categories of personal data:</p>
              
              <h3 className="text-xl font-heading font-semibold text-neutral-950 mb-3">From website visitors and enquirers</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li><span className="font-semibold">Identity and contact data:</span> name, email address, telephone number, job title, company name</li>
                <li><span className="font-semibold">Technical data:</span> IP address, browser type/version, operating system, device information, time zone, pages visited, time/date of visit, referral source</li>
                <li><span className="font-semibold">Marketing and communications data:</span> preferences for receiving marketing from us</li>
              </ul>

              <h3 className="text-xl font-heading font-semibold text-neutral-950 mb-3">From Service users (Customers and their authorised users)</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li><span className="font-semibold">Account data:</span> name, email, password (hashed), billing/contact details, company details</li>
                <li><span className="font-semibold">Usage data:</span> login times, features used, API calls, support tickets</li>
                <li><span className="font-semibold">Payment data:</span> billing address, payment method details (processed securely via third-party payment provider — we do not store full card details)</li>
              </ul>

              <h3 className="text-xl font-heading font-semibold text-neutral-950 mb-3">Data processed on behalf of Customers (as processor)</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li><span className="font-semibold">Call data:</span> voice recordings (if enabled), audio transcripts, call metadata (caller ID, duration, timestamps, outcome)</li>
                <li><span className="font-semibold">Interaction data:</span> meeting bookings, CRM updates, query responses, notes generated by the AI agent</li>
                <li><span className="font-semibold">End-user / caller data:</span> names, telephone numbers, email addresses, voice characteristics (where processed), any personal information contained in conversations</li>
              </ul>

              <p className="text-gray-600 leading-relaxed">
                We do not intentionally collect special category data (e.g. health, racial/ethnic origin, political opinions) or data about children. If such data appears in call content, it is processed only as instructed by the Customer (data controller).
              </p>
            </motion.div>

            {/* Section 3 - How we collect personal data */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">3. How we collect personal data</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Directly from you (e.g. account registration, forms, emails, support requests)</li>
                <li>Automatically via cookies, server logs, analytics tools (see our Cookie Policy)</li>
                <li>From Customers when they integrate the Service with their CRM or telephony systems</li>
                <li>From third parties (e.g. payment processors, identity verification providers where required)</li>
              </ul>
            </motion.div>

            {/* Section 4 - How we use personal data */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">4. How we use personal data (purposes and lawful bases)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">We process personal data only where we have a lawful basis under UK GDPR Article 6:</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">Purpose</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">Categories of data</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-950 border-b">Lawful basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600">Provide and improve the Service</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Account, usage, call/interaction data</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Contract (Art 6(1)(b)); Legitimate interests (Art 6(1)(f))</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600">Manage accounts, billing & support</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Account, payment, contact data</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Contract (Art 6(1)(b))</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600">Prevent fraud, abuse & secure systems</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Technical, usage, call metadata</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Legitimate interests (Art 6(1)(f))</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600">Analytics & service improvement</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Usage, aggregated/anonymised data</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Legitimate interests (Art 6(1)(f))</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600">Marketing (our own products/services)</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Contact, marketing preferences</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Consent (Art 6(1)(a)) or Legitimate interests (Art 6(1)(f))</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-gray-600">Comply with legal obligations</td>
                      <td className="px-4 py-3 text-sm text-gray-600">All relevant data</td>
                      <td className="px-4 py-3 text-sm text-gray-600">Legal obligation (Art 6(1)(c))</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-gray-600 leading-relaxed mt-4">
                When we rely on legitimate interests, we have carried out a balancing test to ensure our interests are not overridden by your rights and freedoms.
              </p>
            </motion.div>

            {/* Section 5 - Sharing personal data */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">5. Sharing personal data</h2>
              <p className="text-gray-600 leading-relaxed mb-4">We share personal data only where necessary:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>With subprocessors (e.g. cloud hosting providers, telephony infrastructure, transcription/AI model providers, CRM integration partners)</li>
                <li>With payment processors (e.g. Stripe) for billing</li>
                <li>With professional advisers (e.g. lawyers, accountants)</li>
                <li>To regulators, law enforcement, or courts if required by law</li>
                <li>In the event of a business sale, merger, or acquisition (with appropriate protections)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">We do not sell personal data.</p>
            </motion.div>

            {/* Section 6 - International transfers */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">6. International transfers</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Some recipients may be located outside the UK (e.g. US-based cloud/AI providers). We only transfer personal data to countries or organisations where:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>The UK has deemed the country adequate; or</li>
                <li>Appropriate safeguards are in place (e.g. UK International Data Transfer Agreement (IDTA), Addendum to EU SCCs, or Binding Corporate Rules)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-2">A list of transfers and safeguards is available on request.</p>
            </motion.div>

            {/* Section 7 - Data retention */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">7. Data retention</h2>
              <p className="text-gray-600 leading-relaxed mb-4">We keep personal data only for as long as necessary:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><span className="font-semibold">Account data:</span> duration of subscription + 6 years after termination (legal/tax reasons)</li>
                <li><span className="font-semibold">Call recordings/transcripts:</span> as set by the Customer (default: 90 days unless otherwise instructed)</li>
                <li><span className="font-semibold">Marketing data:</span> until you unsubscribe or object</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-2">We securely delete or anonymise data when no longer needed.</p>
            </motion.div>

            {/* Section 8 - Your rights */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">8. Your data protection rights (UK GDPR)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You have the following rights (subject to exceptions):</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                <li>Access your personal data</li>
                <li>Rectify inaccurate/incomplete data</li>
                <li>Erase data (in certain circumstances)</li>
                <li>Restrict processing</li>
                <li>Object to processing (including for direct marketing or legitimate interests)</li>
                <li>Data portability</li>
                <li>Withdraw consent (where consent is the basis)</li>
                <li>Not be subject to solely automated decisions with legal/significant effects</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-2">
                To exercise rights, email <a href="mailto:sales@puralabs.ai" className="text-blue-600 hover:underline">sales@puralabs.ai</a>. We usually respond within one month (extendable if complex). You also have the right to lodge a complaint with the Information Commissioner's Office (ICO): <a href="https://www.ico.org.uk" className="text-blue-600 hover:underline">www.ico.org.uk</a>.
              </p>
            </motion.div>

            {/* Section 9 - Security */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">9. Security</h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organisational measures (per UK GDPR Article 32) including encryption, access controls, regular testing, and incident response procedures. However, no system is completely secure.
              </p>
            </motion.div>

            {/* Section 10 - Cookies */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">10. Cookies and similar technologies</h2>
              <p className="text-gray-600 leading-relaxed">
                See our separate Cookie Policy for details on cookies, tracking technologies, and consent management.
              </p>
            </motion.div>

            {/* Section 11 - Changes */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">11. Changes to this Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Policy to reflect changes in law, our practices, or technology. We will notify you of material changes (e.g. via email or in-Service notice) and update the "Last updated" date.
              </p>
            </motion.div>

            {/* Section 12 - Contact */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">12. Contact us</h2>
              <p className="text-gray-600 leading-relaxed">
                Questions, comments, or rights requests: <a href="mailto:sales@puralabs.ai" className="text-blue-600 hover:underline">sales@puralabs.ai</a>
              </p>
              <p className="text-gray-600 leading-relaxed mt-2">Thank you for trusting Pura Labs with your data.</p>
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

export default Privacy;