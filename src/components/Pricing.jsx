import React, { useState } from "react";
import { Check, X, Star, Crown, Rocket, Award, Sparkles, Infinity,
  Users,
  Calendar,
  BarChart,
  Shield,
  MessageSquare,
  CheckCircle } from "lucide-react";

const Pricing = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  const [selectedOptions, setSelectedOptions] = useState([
  150, 150, 250
]);

  const plans = [
    {
      name: "Basic",
      price: "99",
      icon: <Star className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600",
      badge: "Perfect for Startups",
    },
    {
      name: "Basic Plus",
      price: "149",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600",
      badge: "Most Popular",
      popular: true,
    },
    {
      name: "Pro",
      price: "199",
      icon: <Crown className="w-6 h-6" />,
      color: "from-amber-400 to-amber-600",
      badge: "For Growing Teams",
    },
    {
      name: "Enterprise",
      price: "POA",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-emerald-400 to-emerald-600",
      badge: "Custom Solutions",
    },
  ];

  const pricingMap = {
    Basic: {
      150: 99,
      300: 129,
      450: 179,
      600: 209,
    },
    "Basic Plus": {
      150: 149,
      300: 179,
      450: 209,
      600: 239,
    },
    Pro: {
      250: 199,
      500: 249,
      750: 299,
      1000: 349,
    },
  };

  const optionsMap = {
  Basic: [
    { label: '150 minutes / month', value: 150 },
    { label: '300 minutes / month', value: 300 },
    { label: '450 minutes / month', value: 450 },
    { label: '600 minutes / month', value: 600 },
  ],

  "Basic Plus": [
    { label: '150 minutes / month', value: 150 },
    { label: '300 minutes / month', value: 300 },
    { label: '450 minutes / month', value: 450 },
    { label: '600 minutes / month', value: 600 },
  ],

  Pro: [
    { label: '250 minutes / month', value: 250 },
    { label: '500 minutes / month', value: 500 },
    { label: '750 minutes / month', value: 750 },
    { label: '1000 minutes / month', value: 1000 },
  ],
};

  const features = [
    {
      name: "Custom AI Voice Assistant",
      basic: true,
      plus: true,
      pro: true,
      enterprise: true,
    },
    {
      name: "Email Transcript",
      basic: true,
      plus: true,
      pro: true,
      enterprise: true,
    },
    {
      name: "Free Minutes",
      basic: "150",
      plus: "150",
      pro: "250",
      enterprise: "custom",
    },
    { name: "Agents", basic: "1", plus: "2", pro: "5", enterprise: "custom" },
    {
      name: "Languages",
      basic: "1",
      plus: "1",
      pro: "2",
      enterprise: "up to 20",
    },
    {
      name: "Advanced Knowledge Base",
      basic: false,
      plus: false,
      pro: true,
      enterprise: true,
    },
    {
      name: "CRM Integration",
      basic: false,
      plus: false,
      pro: true,
      enterprise: true,
    },
    {
      name: "Monthly Reports",
      basic: false,
      plus: true,
      pro: true,
      enterprise: true,
    },
    {
      name: "Dashboard",
      basic: false,
      plus: true,
      pro: true,
      enterprise: true,
    },
    {
      name: "Edits / Year",
      basic: "3",
      plus: "5",
      pro: "10",
      enterprise: "Custom",
    },
  ];

  const renderFeatureRow = (feature, index) => {
    const key =
      index === 0
        ? "basic"
        : index === 1
          ? "plus"
          : index === 2
            ? "pro"
            : "enterprise";

    const value = feature[key];

    return (
      <div className="flex items-center justify-between py-2 hover:bg-purple-50 rounded-lg px-2 transition">
        <div className="flex items-center gap-2">
          {typeof value === "boolean" &&
            (value ? (
              <Check className="w-5 h-5 text-green-600" />
            ) : (
              <X className="w-5 h-5 text-red-500" />
            ))}
          <span className="text-sm text-gray-700">{feature.name}</span>
        </div>

        {typeof value !== "boolean" && (
          <span className="text-sm font-semibold text-purple-600">{value}</span>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="max-w-[1600px] mx-auto px-6 py-20">
        {/* Heading */}
        <div className="text-center mb-16">

  {/* Badge */}
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-6">
    <Sparkles className="w-4 h-4 text-purple-600" />
    <span className="text-sm font-semibold text-purple-600">
      Simple, Transparent Pricing
    </span>
  </div>

  {/* Heading */}
  <h1 className="text-5xl md:text-7xl font-bold mb-6">
    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 font-heading text-neutral-950">
  Choose Your AI Agent
</h2>
  </h1>

  {/* Subtext */}
  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    Never miss another call or customer. Select the perfect plan for your business needs.
  </p>

</div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const selected = selectedOptions[index];
            const selectedLabel = optionsMap[plan.name]?.find(
              (o) => o.value === selected,
            )?.label;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative hover:-translate-y-2 hover:scale-105 transition-all duration-500"
              >
                <div
                  className={`relative bg-white rounded-3xl p-8 border flex flex-col h-full ${
                    plan.popular
                      ? "border-purple-400 shadow-2xl"
                      : "border-gray-200"
                  }`}
                >
                  {/* Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </div>
                  )}

                  {/* HEADER */}
                  <div>
                    <div className="text-center mb-6">
                      <div
                        className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white`}
                      >
                        {plan.icon}
                      </div>

                      <h3 className="text-xl font-semibold">{plan.name}</h3>

                      <p className="text-3xl font-bold mt-2">
                        £
                        {plan.name !== "Enterprise"
                          ? pricingMap[plan.name]?.[selected] || plan.price
                          : plan.price}
                        {plan.price !== "POA" && (
                          <span className="text-sm text-gray-500"> /mo</span>
                        )}
                      </p>

                      <p className="text-sm text-gray-500 mb-4">{plan.badge}</p>
                    </div>

                    {/* DROPDOWN */}
                    {plan.name !== "Enterprise" ? (
                      <div className="relative mb-6">
                        <div
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === index ? null : index,
                            )
                          }
                          className="relative w-full flex items-center px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 cursor-pointer hover:border-purple-400 hover:shadow-md transition"
                        >
                          <span className="text-sm font-medium text-gray-700 pr-6">
                            {selectedLabel}
                          </span>

                          {/* PERFECT CENTER ARROW */}
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                            <svg
                              className="w-4 h-4 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>

                        {openDropdown === index && (
                          <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
                            {optionsMap[plan.name].map((opt, i) => (
                              <div
                                key={i}
                                onClick={() => {
                                  const updated = [...selectedOptions];
                                  updated[index] = opt.value;
                                  setSelectedOptions(updated);
                                  setOpenDropdown(null);
                                }}
                                className="px-4 py-3 text-sm hover:bg-purple-50 cursor-pointer flex justify-between items-center transition"
                              >
                                <span>{opt.label}</span>
                                <span className="text-purple-600 font-medium">
                                  £{pricingMap[plan.name][opt.value]}/mo
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <button className="w-full mb-6 py-3 rounded-xl font-semibold bg-purple-600 text-white hover:bg-purple-700 transition">
                        Contact Sales
                      </button>
                    )}
                  </div>

                  {/* FEATURES */}
                  <div className="mt-auto">
                    {features.map((f, i) => (
                      <div key={i}>{renderFeatureRow(f, index)}</div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>


{/* Enterprise Features */}
<div className="mt-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

  <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-[1px] shadow-2xl">
    
    <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-6">
            <Infinity className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">
              Enterprise Grade
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold mb-6 leading-tight">
            <span className="text-neutral-950 font-heading ">
              Need Something More?
            </span>
          </h2>

          <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed">
            We'll work with you to design bespoke workflows, call forwarding, multiple calendar integration, CRM integration, and multiple agents dedicated to specific divisions within your business.
          </p>

          {/* ICON FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: <Users />, label: 'Multiple Agents' },
              { icon: <Calendar />, label: 'Advanced Calendar' },
              { icon: <BarChart />, label: 'Custom Reports' },
              { icon: <Shield />, label: 'Dedicated Support' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                  {item.icon}
                </div>
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="mt-8 w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2">
            Talk to Our Team
            <MessageSquare className="w-5 h-5" />
          </button>
        </div>

        {/* RIGHT */}
        <div className="relative">
          
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-10 blur-3xl"></div>

          {/* Content box */}
          <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 sm:p-8">
            
            <div className="space-y-4">
              {[
                'Bespoke workflow design',
                'Multiple calendar integration',
                'Advanced CRM integration',
                'Dedicated division agents',
                'Custom reporting dashboard',
                'SLA guarantees'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>

</div>
        
      </div>


      
    </div>
  );
};

export default Pricing;
