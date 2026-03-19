import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is an AI answering service?",
    answer:
      "An AI answering service is an automated phone system that uses artificial intelligence to answer calls, qualify leads, and book appointments 24/7. Unlike voicemail or basic auto-attendants, AI answering services have natural conversations, capture caller details, and take action—securing bookings instead of just taking messages.",
  },
  {
    question: "How much do Pura Labs AI Agents cost?",
    answer:
      "Basic - £99, Basic Plus - £149, Pro - £199, Enterprise - £POA. For further details please refer to the pricing section above.",
  },
  {
    question: "How long does a Pura Labs voice agent take to set up?",
    answer:
      "It takes on average 3 to 5 working days depending on the complexity required.",
  },
  {
    question: "Do I need a new phone number?",
    answer:
      "No, you do not need a new phone number. We can integrate with your existing number.",
  },
  {
    question: "Can I answer the call before the AI does?",
    answer:
      "Absolutely. You can choose whether the phone rings a few times before forwarding to the AI or goes directly to the AI agent.",
  },
  {
    question: "How does the AI know my prices and services?",
    answer:
      "During setup, we build a knowledge base tailored to your business with all your services, pricing, and workflows.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <h2 className="text-3xl sm:text-5xl font-bold font-heading text-center mb-10 text-neutral-950">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 px-4 sm:px-6">

        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-300 ${
                isOpen
                  ? "bg-gray-100 shadow-md"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              
              {/* QUESTION */}
              <button
                onClick={() =>
                  setActiveIndex(isOpen ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span
                  className={`text-[16px] sm:text-xl font-semibold transition ${
                    isOpen ? "text-blue-600" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-blue-600" : "text-gray-500"
                  }`}
                />
              </button>

              {/* ANSWER (SMOOTH ANIMATION) */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      

      
    </div>
  );
};

export default FAQ;