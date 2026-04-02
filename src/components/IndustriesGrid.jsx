import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Briefcase, Wrench, Stethoscope, PawPrint, Smile, TrendingUp, Building2, Shield, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    name: "Law Firms",
    path: "/industries/law-firms",
    icon: Briefcase,
    description: "Transform how your law firm handles calls with AI-powered voice agents designed for UK legal practices.",
    fullContent: `Transform how your law firm handles calls with AI-powered voice agents designed for UK legal practices.

Answer every enquiry instantly, capture key client details, and book consultations directly into your calendar all while maintaining professionalism and compliance with regulations like GDPR and SRA standards.

Ensure no potential client is missed, improve response times, and deliver a consistent, high-quality experience across every interaction.

Learn more about how we support legal practices`
  },
  {
    name: "Tradespeople",
    path: "/industries/tradespeople",
    icon: Wrench,
    description: "Never miss another job call, even when you're on-site.",
    fullContent: `Never miss another job call, even when you're on-site.

Pura Labs AI agents answer every enquiry instantly, capture job details, and book work directly into your diary while you stay focused on the job in front of you.

No more missed calls, no more lost revenue just consistent, professional call handling that helps you win more work.

See how we help tradespeople capture more jobs`
  },
  {
    name: "GP Practices",
    path: "/industries/gp-practices",
    icon: Stethoscope,
    description: "Improve patient access and reduce pressure on your phone lines.",
    fullContent: `Improve patient access and reduce pressure on your phone lines.

Pura Labs AI Agents handle routine enquiries, book appointments, and capture patient requests instantly helping your practice manage high call volumes without overwhelming staff.

Ensure every patient is responded to quickly, consistently, and professionally, while freeing up your team to focus on care.

See how we support healthcare providers`
  },
  {
    name: "Veterinary Clinics",
    path: "/industries/veterinary-clinics",
    icon: PawPrint,
    description: "In veterinary clinics, calls often come at urgent or emotional moments.",
    fullContent: `In veterinary clinics, calls often come at urgent or emotional moments and delays can impact both patient care and client trust.

Pura Labs AI Agents ensure every call is answered promptly, helping pet owners book appointments, handle urgent enquiries, and get the information they need without long wait times.

From routine check-ups to urgent concerns, every interaction is handled calmly and consistently keeping your phones covered while your team focuses on delivering care in the clinic.

See how we support veterinary clinics`
  },
  {
    name: "Dental Practices",
    path: "/industries/dental-practices",
    icon: Smile,
    description: "Missed calls in a dental clinic mean unfilled appointment slots.",
    fullContent: `Missed calls in a dental clinic don't just mean lost enquiries they mean unfilled appointment slots and lost treatment revenue.

Pura Labs AI Agents ensure every patient call is answered promptly, helping patients book appointments, request information, or follow up on treatments without delays or long hold times.

From new patient enquiries to existing patients trying to reschedule or confirm appointments, every interaction is handled smoothly keeping your diary full and your front desk free to focus on patients in the clinic.

See how we support dental clinics`
  },
  {
    name: "Finance",
    path: "/industries/finance",
    icon: TrendingUp,
    description: "In finance, every call carries weight whether it's a new enquiry or existing client.",
    fullContent: `In finance, every call carries weight whether it's a new enquiry, a time-sensitive mortgage case, or an existing client needing advice.

Pura Labs AI Agents ensure every call is handled promptly and professionally, capturing key details, triaging enquiries, and securing consultations without interrupting your day.

Maintain a responsive, high-trust client experience while protecting revenue opportunities and reducing the risk of missed or delayed responses.

See how we support financial firms`
  },
  {
    name: "Real Estate",
    path: "/industries/real-estate",
    icon: Building2,
    description: "In property, speed wins deals and missed calls mean missed opportunities.",
    fullContent: `In property, speed wins deals and missed calls mean missed viewings, valuations, and instructions.

Pura Labs AI Agents ensure every enquiry is handled immediately, capturing buyer and seller details, booking viewings, and scheduling valuations without delay.

Stay responsive in a competitive market, secure more instructions, and keep your team focused on closing deals instead of chasing calls.

See how we support estate and letting agents`
  },
  {
    name: "Insurance",
    path: "/industries/insurance",
    icon: Shield,
    description: "When someone is shopping for insurance, they go with who responds first.",
    fullContent: `When someone is shopping for insurance, they don't wait they call multiple brokers and go with the one who responds first.

Pura Labs AI Agents ensure every inbound enquiry is handled instantly, capturing key details, understanding the type of cover required, and moving prospects efficiently toward a quote or callback.

From new business enquiries to existing policyholders chasing updates, every call is handled with consistency and care — without pulling your team away from underwriting, renewals, or client servicing.

See how we support insurance providers`
  },
  {
    name: "Recruitment",
    path: "/industries/recruitment",
    icon: UserPlus,
    description: "Screening candidates is time-consuming but speed makes the difference.",
    fullContent: `Screening candidates is one of the most time-consuming parts of recruitment but it's also where speed makes the difference.

Pura Labs AI Agents handle initial candidate calls automatically, asking the right questions, capturing key details, and qualifying applicants before they reach your consultants.

This means your team only speaks to candidates who meet your criteria, saving hours of back-and-forth while keeping your pipeline moving.

Stay responsive, reduce admin, and focus your time on interviews, client relationships, and closing placements.

See how we support recruitment agencies`
  }
];

const IndustriesGrid = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);

  return (
    <section className="bg-white px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            How Pura Labs AI Agents Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-500 sm:text-lg">
            Explore how our AI adapts across different business sectors
          </p>
        </div>

        {/* Industry Buttons - Scrollable on mobile, grid on desktop */}
        <div className="mt-12 flex gap-3 overflow-x-auto pb-4 sm:flex-wrap sm:justify-center sm:overflow-visible [&::-webkit-scrollbar]:hidden">
          {industries.map((industry) => {
            const Icon = industry.icon;
            const isActive = selectedIndustry.name === industry.name;
            return (
              <button
                key={industry.name}
                onClick={() => setSelectedIndustry(industry)}
                className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                {industry.name}
              </button>
            );
          })}
        </div>

        {/* Industry Details Card - Wider and more spacious */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIndustry.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 rounded-3xl border border-gray-100 bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-6">
              {/* Larger Icon Box */}
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center flex-shrink-0 shadow-md">
                <selectedIndustry.icon className="w-10 h-10 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-neutral-950 mb-4">
                  {selectedIndustry.name}
                </h3>
                <div className="text-gray-600 text-base leading-relaxed whitespace-pre-line">
                  {selectedIndustry.fullContent}
                </div>
                <Link
                  to={selectedIndustry.path}
                  className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Each industry solution is fully customised to your specific workflows and requirements
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesGrid;