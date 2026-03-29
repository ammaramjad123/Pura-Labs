// src/pages/Terms.jsx
import React from "react";
import { motion } from "framer-motion";
import { Shield, FileText, Scale, Lock, Users, Globe } from "lucide-react";

const Terms = () => {
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
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">Legal</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-neutral-950 mb-4"
            >
              Terms of Service
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              <div className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2">
    <div className="flex items-center justify-center sm:justify-start gap-2">
      <span className="sm:hidden text-blue-500 text-sm">•</span>
      <span>Last Updated: 11 March 2026</span>
    </div>
    <span className="hidden sm:inline text-gray-400">•</span>
    <div className="flex items-center justify-center sm:justify-start gap-2">
      <span className="sm:hidden text-blue-500 text-sm">•</span>
      <span>Effective Date: 11 March 2026</span>
    </div>
  </div>
</div>
            </motion.p>
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
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">ACCEPTANCE OF TERMS</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Welcome to Pura Labs (the "Service"). These Terms of Service (these "Terms") are a legal agreement between you ("you" or "User") and Pura Labs Ltd, a company registered in England and Wales with company number 17075255 ("Company," "we," "us," or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Service.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you are using the Service on behalf of an organisation (such as your employer), you represent and warrant that you have the authority to bind that organisation to these Terms, and "you" and "User" will refer to that organisation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We recommend that you print or save a copy of these Terms for your records.
              </p>
            </motion.div>

            {/* Section 1 - Definitions */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">1. DEFINITIONS</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p><span className="font-semibold text-neutral-950">1.1 "Account"</span> means your registered account for accessing and using the Service.</p>
                <p><span className="font-semibold text-neutral-950">1.2 "Content"</span> means any text, data, information, software, graphics, photographs, videos, audio, or other materials.</p>
                <p><span className="font-semibold text-neutral-950">1.3 "Service"</span> means the Pura Labs voice AI agents software-as-a-service platform, including all features, functionality, and content provided by the Company, which enables voice AI agents to answer clients' calls, book meetings, update customer relationship management (CRM) systems, and answer general queries.</p>
                <p><span className="font-semibold text-neutral-950">1.4 "Subscription Plan"</span> means the specific pricing plan and feature set you have selected for your Account.</p>
                <p><span className="font-semibold text-neutral-950">1.5 "User Content" or "Customer Data"</span> means any Content that you upload, submit, post, transmit, or otherwise make available through the Service, including but not limited to call recordings, meeting details, CRM data, and query responses.</p>
                <p><span className="font-semibold text-neutral-950">1.6 "Intellectual Property Rights"</span> means all patent rights, copyright rights, trademark rights, trade secret rights, and any other intellectual property rights recognised in any country or jurisdiction in the world.</p>
                <p><span className="font-semibold text-neutral-950">1.7 "Personal Data"</span> has the meaning given to it in the UK General Data Protection Regulation (UK GDPR).</p>
                <p><span className="font-semibold text-neutral-950">1.8 "DPA"</span> means the Data Processing Agreement incorporated into these Terms as Schedule 1.</p>
              </div>
            </motion.div>

            {/* Section 2 - Eligibility */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">2. ELIGIBILITY</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p><span className="font-semibold text-neutral-950">2.1 Age Requirement.</span> You must be at least 18 years old to use the Service. By using the Service, you represent and warrant that you meet this age requirement.</p>
                <p><span className="font-semibold text-neutral-950">2.2 Legal Capacity.</span> You must have the legal capacity to enter into a binding contract. If you do not have such capacity, you may not use the Service.</p>
                <p><span className="font-semibold text-neutral-950">2.3 Compliance with Laws.</span> You must comply with all applicable laws and regulations in your use of the Service, including but not limited to data protection laws such as the UK GDPR and the Data Protection Act 2018.</p>
              </div>
            </motion.div>

            {/* Section 3 - Account Registration */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">3. ACCOUNT REGISTRATION AND SECURITY</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p><span className="font-semibold text-neutral-950">3.1 Account Creation.</span> To access the Service, you must create an Account by providing accurate information, including your full name, email address, password, and any other required details.</p>
                <p><span className="font-semibold text-neutral-950">3.2 Accurate Information.</span> You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.</p>
                <p><span className="font-semibold text-neutral-950">3.3 Account Security.</span> You are responsible for maintaining the confidentiality of your Account credentials and for all activities that occur under your Account. You must notify us immediately of any unauthorised use.</p>
                <p><span className="font-semibold text-neutral-950">3.4</span> We reserve the right to suspend or terminate your Account if any information provided is inaccurate or if you breach these Terms.</p>
              </div>
            </motion.div>

            {/* Section 4 - Subscription Plans */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">4. SUBSCRIPTION PLANS AND BILLING</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p><span className="font-semibold text-neutral-950">4.1 Subscription Plans.</span> The Service is provided on a monthly subscription basis. Details of available plans, including pricing and features, are available on our website at www.puralabs.ai. Pricing is subject to change with reasonable notice.</p>
                <p><span className="font-semibold text-neutral-950">4.2 Billing and Payment.</span></p>
                <ul className="list-disc pl-6 space-y-2 ml-4">
                  <li>Subscriptions are billed in advance on a monthly basis.</li>
                  <li>Your subscription will automatically renew each month unless cancelled.</li>
                  <li>You must provide a valid payment method, and you authorise us to charge the applicable fees.</li>
                  <li>All fees are exclusive of VAT and other taxes, which you are responsible for paying.</li>
                </ul>
                <p><span className="font-semibold text-neutral-950">4.3 Refunds.</span> Fees are non-refundable except as required by law. Upon cancellation, access continues until the end of the current billing period.</p>
                <p><span className="font-semibold text-neutral-950">4.4 Late Payment.</span> We may suspend your Account for non-payment and charge additional late fees if we deem necessary.</p>
              </div>
            </motion.div>

            {/* Section 5 - Licence */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">5. LICENCE AND RESTRICTIONS</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p><span className="font-semibold text-neutral-950">5.1 Licence Grant.</span> Subject to your compliance with these Terms and payment of fees, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable licence to access and use the Service for your internal business purposes.</p>
                <p><span className="font-semibold text-neutral-950">5.2 Restrictions.</span> You may not:</p>
                <ul className="list-disc pl-6 space-y-2 ml-4">
                  <li>Copy, modify, or create derivative works of the Service.</li>
                  <li>Reverse engineer, decompile, or disassemble the Service.</li>
                  <li>Use the Service to build a competitive product.</li>
                  <li>Use the Service in violation of laws or to process illegal content.</li>
                </ul>
                <p><span className="font-semibold text-neutral-950">5.3 Third-Party Integrations.</span> The Service may integrate with third-party CRM systems or other services. Your use of such integrations is subject to the third parties' terms.</p>
              </div>
            </motion.div>

            {/* Section 6 - User Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">6. USER CONTENT AND DATA OWNERSHIP</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p><span className="font-semibold text-neutral-950">6.1 Ownership.</span> You retain ownership of your Customer Data.</p>
                <p><span className="font-semibold text-neutral-950">6.2 Licence to Us.</span> You grant us a licence to use your Customer Data to provide and improve the Service.</p>
                <p><span className="font-semibold text-neutral-950">6.3 Restrictions.</span> You must not upload Customer Data that infringes rights or violates laws.</p>
                <p><span className="font-semibold text-neutral-950">6.4 Backup.</span> You are responsible for backing up your Customer Data.</p>
              </div>
            </motion.div>

            {/* Section 7 - Data Protection */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">7. DATA PROTECTION</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p><span className="font-semibold text-neutral-950">7.1 Compliance.</span> We comply with the UK GDPR and Data Protection Act 2018. Where we process Personal Data on your behalf, we act as a data processor, and you act as the data controller.</p>
                <p><span className="font-semibold text-neutral-950">7.2 DPA.</span> The DPA in Schedule 1 forms part of these Terms and governs our processing of Personal Data.</p>
                <p><span className="font-semibold text-neutral-950">7.3 Privacy Policy.</span> Our processing of Personal Data is also subject to our Privacy Policy.</p>
              </div>
            </motion.div>

            {/* Section 8 - Intellectual Property */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">8. INTELLECTUAL PROPERTY</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p><span className="font-semibold text-neutral-950">8.1 Service Ownership.</span> The Service is owned by us and protected by Intellectual Property Rights.</p>
                <p><span className="font-semibold text-neutral-950">8.2 Feedback.</span> Any feedback you provide grants us a licence to use it.</p>
              </div>
            </motion.div>

            {/* Section 9 - Acceptable Use */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">9. ACCEPTABLE USE</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p><span className="font-semibold text-neutral-950">9.1</span> You must not use the Service for illegal activities, harassment, spam, or security violations.</p>
                <p><span className="font-semibold text-neutral-950">9.2</span> We may suspend or terminate for breaches.</p>
              </div>
            </motion.div>

            {/* Section 10 - Termination */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">10. TERMINATION</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p><span className="font-semibold text-neutral-950">10.1 By You.</span> Cancel via your Account or by notice.</p>
                <p><span className="font-semibold text-neutral-950">10.2 By Us.</span> For breach, non-payment, or if required by law.</p>
                <p><span className="font-semibold text-neutral-950">10.3 Effect.</span> Access ends, and we may delete data subject to the DPA.</p>
              </div>
            </motion.div>

            {/* Section 11 - Disclaimer */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">11. DISCLAIMER OF WARRANTIES</h2>
              <p className="text-gray-600 leading-relaxed">The Service is provided "as is" without warranties. We disclaim implied warranties to the extent permitted by law.</p>
            </motion.div>

            {/* Section 12 - Liability */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">12. LIMITATION OF LIABILITY</h2>
              <p className="text-gray-600 leading-relaxed">Our liability is limited to the fees paid by you in the 12 months preceding the claim. We are not liable for indirect losses.</p>
            </motion.div>

            {/* Section 13 - Indemnification */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">13. INDEMNIFICATION</h2>
              <p className="text-gray-600 leading-relaxed">You indemnify us against claims arising from your use of the Service or breach of these Terms.</p>
            </motion.div>

            {/* Section 14 - Governing Law */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">14. GOVERNING LAW</h2>
              <p className="text-gray-600 leading-relaxed">These Terms are governed by the laws of England and Wales. Disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
            </motion.div>

            {/* Section 15 - General Provisions */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">15. GENERAL PROVISIONS</h2>
              <div className="space-y-3 text-gray-600 leading-relaxed">
                <p><span className="font-semibold text-neutral-950">15.1 Entire Agreement.</span> These Terms constitute the entire agreement.</p>
                <p><span className="font-semibold text-neutral-950">15.2 Changes.</span> We may update these Terms with notice.</p>
                <p><span className="font-semibold text-neutral-950">15.3 Force Majeure.</span> We are not liable for events beyond our control.</p>
                <p><span className="font-semibold text-neutral-950">15.4 Severability.</span> Invalid provisions do not affect others.</p>
                <p className="mt-4">For questions, contact us at <a href="mailto:sales@puralabs.ai" className="text-blue-600 hover:underline">sales@puralabs.ai</a></p>
              </div>
            </motion.div>

            {/* Schedule 1 - DPA */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-950 mb-4">SCHEDULE 1: DATA PROCESSING AGREEMENT (DPA)</h2>
              <p className="text-gray-600 leading-relaxed mb-4">This DPA applies where we process Personal Data on your behalf.</p>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p><span className="font-semibold text-neutral-950">1. Subject Matter and Duration</span><br />Processing for providing the Service, during the Subscription Term plus 30 days post-termination.</p>
                
                <p><span className="font-semibold text-neutral-950">2. Types of Personal Data</span><br />Contact details, call data, meeting info, CRM data; categories: clients' customers, employees.</p>
                
                <p><span className="font-semibold text-neutral-950">3. Obligations</span><br />We process only on your instructions. We ensure confidentiality and security measures per Article 32 of UK GDPR.</p>
                
                <p><span className="font-semibold text-neutral-950">4. Subprocessors</span><br />We may use subprocessors with your general authorisation. You may object within 30 days.</p>
                
                <p><span className="font-semibold text-neutral-950">5. Security and Breaches</span><br />We implement appropriate measures. Notify you of breaches within 48 hours.</p>
                
                <p><span className="font-semibold text-neutral-950">6. Audits</span><br />You may audit once per year with notice.</p>
                
                <p><span className="font-semibold text-neutral-950">7. Data Return/Deletion</span><br />At termination, return or delete data within 60 days.</p>
                
                <p><span className="font-semibold text-neutral-950">8. International Transfers</span><br />Use UK IDTA or equivalent for transfers.</p>
                
                <p><span className="font-semibold text-neutral-950">9. Liability</span><br />Subject to the limitations in the Terms.</p>
              </div>
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
  
  {/* Company Registration - Responsive with bullets on mobile */}
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

export default Terms;