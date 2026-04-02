import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, PhoneOutgoing, ChevronRight, X } from "lucide-react";

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState("inbound");
  const [openModal, setOpenModal] = useState(null);

  // Inbound Cards Data
  const inboundCards = [
    {
      id: 1,
      title: "We Build Your AI Agent Around Your Business",
      shortDesc: "Your AI is trained on your business services, FAQs, workflows, and call handling preferences.",
      modalContent: `We don't just set up a generic AI, we build a fully customised Pura Labs Voice Agent tailored to your business.

We start by understanding how your calls are handled today, including your workflows, common queries, and how your team interacts with customers.

Your Pura Labs Agent is then trained on:

• Your services and offerings
• Frequently asked questions
• Call scripts and conversation flows
• Booking processes and internal systems

We also configure how the AI should behave on calls, including:

• Tone of voice (professional, friendly, consultative, gender, accents, personality)
• How it handles different types of enquiries
• When to escalate to a human
• What it can and cannot say

Every response is grounded in your approved information, ensuring accuracy and consistency across every interaction.

Before going live, we test the agent across real scenarios to make sure it performs exactly as expected — handling conversations naturally, confidently, and in line with your business standards.

The result is an AI agent that doesn't just answer calls - it represents your business properly. That's the Pura Labs Way.`
    },
    {
      id: 2,
      title: "Your Pura Labs AI Agent Handles Every Call",
      shortDesc: "Customers get instant responses. Questions answered, appointments booked, enquiries captured.",
      modalContent: `Your Pura Labs Agent is always available, ensuring every call is answered instantly - no waiting, no missed opportunities.

It handles conversations in real time, responding naturally to customer enquiries, whether it's answering questions, capturing details, or guiding them to the next step.

Depending on your setup, the Pura Labs Agent can:

• Answer common or complex questions about your services
• Qualify leads and capture key information
• Book appointments directly into your calendar
• Route calls to the right person when needed

Every interaction follows your defined workflows, so responses stay consistent, accurate, and aligned with how your business operates.

During busy periods, your Pura Labs Agent handles multiple calls simultaneously, removing bottlenecks and ensuring no customer is left waiting.

Outside of working hours, it continues to represent your business, capturing enquiries and booking appointments even when your team is offline.

The result is a seamless customer experience where every call is handled quickly, professionally, and without interruption.`
    },
    {
      id: 3,
      title: "Everything Delivered Instantly",
      shortDesc: "Call summaries, caller details, and actions are sent directly to your team in real-time.",
      modalContent: `Every interaction is captured and delivered to your team instantly, so nothing gets missed or forgotten.

As soon as a call ends, your team receives:

• A clear summary of the conversation
• Key caller details and intent
• Any actions taken (e.g. bookings, enquiries, requests)

This gives you full visibility into every call without needing to listen back or manually log information.

Information can be sent directly into your existing tools, whether that's your CRM, helpdesk, or internal systems - keeping everything organised and up to date automatically.

Your team can quickly review what's happened, follow up where needed, and focus on high value tasks instead of admin.

Over time, this also builds a valuable dataset, helping you understand customer behaviour, common questions, and where opportunities are being won or lost.

The result is faster follow ups, better organisation, and complete control over every customer interaction.`
    },
    {
      id: 4,
      title: "Capture Every Opportunity",
      shortDesc: "Your AI works 24/7, no missed calls, more leads, higher conversions, zero lost revenue.",
      modalContent: `Every missed call is a potential customer lost and most won't call back.

Your Pura Labs Agent ensures that never happens.

It answers every call, at any time of day, capturing enquiries, qualifying leads, and guiding customers to take the next step, whether that's booking an appointment or requesting more information.

Even outside of business hours, your Pura Labs Agent continues working, turning missed calls into real opportunities while your team is offline.

By responding instantly and consistently, you reduce drop offs, improve customer experience, and increase the likelihood of conversion.

Instead of relying on limited staff availability, your business can handle demand at any scale, ensuring every potential customer is captured and nothing slips through the cracks.

The result is more leads, better conversion rates, and a system that continuously drives revenue without adding overhead.`
    }
  ];

  // Outbound Cards Data
  const outboundCards = [
    {
      id: 1,
      title: "Your AI Agent is Built for Outbound",
      shortDesc: "Your AI agent is built for both outbound outreach and follow-ups, engaging prospects, booking meetings, and keeping conversations moving.",
      modalContent: `We build outbound AI agents that can support both proactive outreach and ongoing follow-ups, depending on your needs.

For cold outreach, your agent is trained to contact prospects, introduce your business, and start relevant conversations, qualifying interest, handling initial objections, and booking meetings directly into your calendar.

We tailor this to your audience, messaging, and sales process, ensuring calls feel natural, targeted, and aligned with how your team would speak to potential clients.

Alongside this, your AI can also handle a wide range of follow-up interactions, including:

• Appointment reminders to reduce no-shows
• Post-service follow-ups to check in with customers
• Feedback and survey calls
• Re-engaging old leads or inactive prospects

Each use case is built with clear workflows, so the agent knows exactly how to guide the conversation and what outcome to achieve.

You control how the agent behaves from tone and messaging to qualification criteria and escalation points ensuring every interaction reflects your brand and business standards.

The result is an outbound system that not only generates new opportunities, but also strengthens existing relationships and improves overall customer experience all without adding extra workload to your team.`
    },
    {
      id: 2,
      title: "AI Makes Every Call Count",
      shortDesc: "AI-powered outreach that engages, qualifies, and converts.",
      modalContent: `Your Pura Labs AI Agent doesn't wait for calls it actively reaches out, starts conversations, and drives outcomes.

Whether it's cold outreach to new prospects or follow-ups with existing leads, the agent engages in real-time, introducing your business, asking relevant questions, and guiding each interaction toward a clear next step.

It can be used to:

• Contact new prospects and generate interest
• Qualify leads based on your criteria
• Book meetings directly into your calendar
• Send appointment reminders and follow-ups
• Re-engage old or inactive leads

Every interaction is tailored to your messaging and workflows, ensuring conversations feel natural, relevant, and aligned with your brand.

At scale, your AI can handle large volumes of outreach simultaneously keeping your pipeline active, consistent, and always moving forward.

The result is more conversations, better-qualified opportunities, and a system that works continuously in the background to generate and nurture leads.`
    },
    {
      id: 3,
      title: "Everything Tracked in Real-Time",
      shortDesc: "Every interaction tracked, summarised, and delivered in real-time.",
      modalContent: `Every outbound interaction is captured and delivered to your team instantly giving you full visibility without manual effort.

As calls are completed, you receive:

• Clear summaries of each conversation
• Lead details and qualification insights
• Outcomes such as interest level, objections, or booked meetings

This allows your team to quickly understand what's happening across all outreach without listening to calls or logging notes.

All information can be pushed directly into your existing systems including your CRM or internal tools keeping your pipeline organised and up to date automatically.

You can see which prospects are engaged, which need follow-up, and where opportunities are progressing or dropping off.

Over time, this builds valuable insight into your outreach performance helping you refine messaging, improve conversion rates, and make better decisions.

The result is complete control over your outbound activity, with real-time data that turns conversations into actionable opportunities.`
    },
    {
      id: 4,
      title: "More Revenue, Less Effort",
      shortDesc: "More conversations, more opportunities, more revenue.",
      modalContent: `Outbound success comes from consistency and that's where most teams fall short.

Your Pura Labs AI Agent works continuously in the background, ensuring outreach and follow-ups happen every day without gaps or delays.

It keeps your pipeline active by:

• Reaching out to new prospects consistently
• Following up at the right time without manual effort
• Re-engaging leads that would otherwise go cold

Unlike manual outreach, there are no missed follow-ups, no delays, and no drop in activity during busy periods.

Every opportunity is contacted, every lead is nurtured, and every conversation is pushed forward helping you maximise the value of your pipeline.

The result is a more predictable flow of opportunities, better conversion rates, and a system that continuously supports revenue growth without increasing workload.`
    }
  ];

  const cards = activeTab === "inbound" ? inboundCards : outboundCards;

  // Modal Component
  const Modal = ({ isOpen, onClose, title, content }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
        >
          <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
            <h3 className="text-xl font-semibold text-neutral-900 pr-8">{title}</h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <div className="p-6">
            <div className="text-gray-600 leading-relaxed whitespace-pre-line">{content}</div>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <section id="about" className="relative w-full py-18 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* subtle energy background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.06),transparent_70%)]" />

      <div className="relative max-w-5xl mx-auto">
        {/* 🔥 TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-center text-neutral-900 pb-2 sm:pb-10"
        >
          How Pura Labs AI Works
        </motion.h2>

        {/* 🔘 Inbound / Outbound Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-4 sm:gap-6 mt-8 mb-12"
        >
          <button
            onClick={() => setActiveTab("inbound")}
            className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
              activeTab === "inbound"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-900 hover:bg-gray-200"
            }`}
          >
            <Phone className="w-4 h-4" />
            Inbound Calls
          </button>
          <button
            onClick={() => setActiveTab("outbound")}
            className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
              activeTab === "outbound"
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-900 hover:bg-gray-200"
            }`}
          >
            <PhoneOutgoing className="w-4 h-4" />
            Outbound Calls
          </button>
        </motion.div>

        {/* ⚡ FLOW SYSTEM */}
        <div className="relative mt-12">
          {/* 🌊 MAIN ENERGY LINE */}
          <div className="hidden sm:block absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full overflow-hidden">
            <div className="absolute inset-0 bg-neutral-200/40" />
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 2 }}
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400"
            />
            <motion.div
              animate={{ y: ["-20%", "120%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 -translate-x-1/2 w-[8px] h-[80px] rounded-full bg-gradient-to-b from-white/80 via-purple-400 to-transparent blur-sm"
            />
          </div>

          {/* 🧩 STEPS - Alternating Cards */}
          <div className="flex flex-col gap-16">
            {cards.map((card, i) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.25, type: "spring", stiffness: 120 }}
                className={`flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className="relative max-w-[90%] sm:max-w-md p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-neutral-200 shadow-xl">
                  {/* step number */}
                  <div className="absolute -top-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-lg">
                    {i + 1}
                  </div>

                  {/* title */}
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mt-2">
                    {card.title}
                  </h3>

                  {/* short description */}
                  <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {card.shortDesc}
                  </p>

                  {/* See More Button */}
                  <button
                    onClick={() => setOpenModal(card.id)}
                    className="mt-4 inline-flex items-center gap-1 text-purple-600 font-medium text-sm hover:gap-2 transition-al cursor-pointer"
                  >
                    See more
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* connection line to center */}
                  <div className={`hidden sm:block absolute top-1/2 ${
                    i % 2 === 0 ? "right-[-40px]" : "left-[-40px]"
                  } w-[40px] h-[2px] bg-gradient-to-r from-purple-400 to-blue-400 opacity-40`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🚀 FINAL IMPACT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-block px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-extrabold shadow-lg">
            One AI Agent. Unlimited Calls.
          </div>
         <p className="mt-6 max-w-3xl sm:max-w-5xl  mx-auto text-base sm:text-xl text-neutral-900 leading-relaxed font-semibold">
            While your team focuses on closing deals and serving customers,
            Pura Labs AI Agent handles every conversation instantly, professionally, and at scale.
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openModal !== null && (
          <Modal
            isOpen={openModal !== null}
            onClose={() => setOpenModal(null)}
            title={cards.find(c => c.id === openModal)?.title}
            content={cards.find(c => c.id === openModal)?.modalContent}
          />
        )}
      </AnimatePresence>
    </section>
  );
}