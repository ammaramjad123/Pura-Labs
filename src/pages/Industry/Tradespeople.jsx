// src/pages/Industry/Tradespeople.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Calendar,
  MessageSquare,
  Shield,
  TrendingUp,
  Clock,
  Users,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Zap,
  Headphones,
  Hammer,
  Truck,
  AlertTriangle,
  Star,
  DollarSign,
  Award,
  Wrench,
  Gauge,
  HardHat,
  Play,
  ThumbsUp,
  Briefcase,
  Target
} from "lucide-react";

const Tradespeople = () => {
  const [activeTab, setActiveTab] = useState('inbound');

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
     {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-16">
  {/* Minimal Geometric Pattern Background */}
  <div className="absolute inset-0 opacity-30">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
        </pattern>
        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#3B82F6" opacity="0.3"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  </div>

  {/* Floating Elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
    <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
    <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300/20 rounded-full blur-2xl animate-pulse" />
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 relative z-10">
    <div className="max-w-5xl mx-auto text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 bg-blue-50 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-100 shadow-sm"
      >
        <Hammer className="w-4 h-4 text-blue-600" />
        <span className="text-blue-700 text-sm font-semibold">Trusted by 5,000+ UK Tradespeople</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black text-neutral-950 mb-6 leading-tight"
      >
        Never Miss Another
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
          Job Call
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
      >
        AI voice agents that answer every call, capture job details, and book work automatically
        — so you can focus on what you do best.
      </motion.p>

      {/* CTA Button - Only Watch Demo */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex justify-center"
      >
        <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
          <Play className="w-5 h-5" />
          Watch Demo
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      {/* Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-8 border-t border-gray-100"
      >
        {[
          { value: "5,000+", label: "Active Tradespeople", icon: Users },
          { value: "98%", label: "Call Answer Rate", icon: Phone },
          { value: "40%", label: "More Bookings", icon: TrendingUp },
          { value: "24/7", label: "Always Available", icon: Clock }
        ].map((stat, idx) => (
          <div key={idx} className="text-center">
            <stat.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl sm:text-3xl font-bold text-neutral-950">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
      <div className="w-1 h-2 bg-blue-600 rounded-full mt-2 animate-pulse" />
    </div>
  </div>
</section>

      {/* Problem Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-neutral-950 mb-4">
              The Hidden Cost of Missed Calls
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Every unanswered call is money walking out the door
            </p>
          </motion.div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: DollarSign, title: "Lost Revenue", amount: "£40,000+", description: "Average annual loss from missed calls", color: "from-red-500 to-orange-500" },
              { icon: Clock, title: "Wasted Time", amount: "40%", description: "of work hours spent on phone admin", color: "from-orange-500 to-yellow-500" },
              { icon: Users, title: "Lost Customers", amount: "60%", description: "call the next tradesperson", color: "from-yellow-500 to-amber-500" },
              { icon: AlertTriangle, title: "Emergency Loss", amount: "30%", description: "of emergency jobs lost", color: "from-amber-500 to-red-500" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${item.color} w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6`}>
                  <item.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-neutral-950 mb-2">{item.amount}</div>
                <h3 className="text-lg md:text-xl font-bold text-neutral-950 mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-neutral-950 mb-4">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From missed call to booked job in minutes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "01", title: "Call Comes In", icon: Phone, desc: "AI answers instantly with a professional, human-like voice", color: "from-blue-500 to-cyan-500" },
              { step: "02", title: "Captures Details", icon: MessageSquare, desc: "Gathers job info, location, urgency, and provides quotes", color: "from-cyan-500 to-teal-500" },
              { step: "03", title: "Books the Job", icon: Calendar, desc: "Schedules appointments, prioritizes emergencies", color: "from-teal-500 to-green-500" },
              { step: "04", title: "You Get Paid", icon: DollarSign, desc: "Instant notification with all job details", color: "from-green-500 to-emerald-500" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className={`bg-gradient-to-r ${item.color} w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-gray-500 mb-2">{item.step}</div>
                <h3 className="text-lg md:text-xl font-bold text-neutral-950 mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600 px-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live AI Demo Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-neutral-950 mb-4">
              Watch It In Action
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">Real conversation with our AI agent</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-gray-900 px-6 py-4 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-gray-400 text-sm">Live AI Assistant • Active Call</div>
            </div>

            {/* Conversation */}
            <div className="p-6 space-y-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 bg-blue-50 rounded-2xl p-4">
                  <div className="font-bold text-blue-900 mb-1">Caller:</div>
                  <div className="text-gray-700">"Hi, I've got a burst pipe in my kitchen. Can someone come out today?"</div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-cyan-600" />
                </div>
                <div className="flex-1 bg-cyan-50 rounded-2xl p-4">
                  <div className="font-bold text-cyan-900 mb-1">AI Agent:</div>
                  <div className="text-gray-700">"I understand this is urgent. Let me check availability. I can schedule an emergency plumber to arrive within 2 hours. Can I get your address and contact details?"</div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 bg-blue-50 rounded-2xl p-4">
                  <div className="font-bold text-blue-900 mb-1">Caller:</div>
                  <div className="text-gray-700">"123 Main Street. My number is 07700 123456."</div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-cyan-600" />
                </div>
                <div className="flex-1 bg-cyan-50 rounded-2xl p-4">
                  <div className="font-bold text-cyan-900 mb-1">AI Agent:</div>
                  <div className="text-gray-700">"Perfect. I've booked Mark, our emergency plumber. He'll arrive between 2-4 PM. You'll receive confirmation via SMS with his details."</div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-medium">✓ Job booked</span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-medium">✓ SMS sent</span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium">✓ Calendar updated</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Tab Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-neutral-950 mb-4">
              Comprehensive Call Management
            </h2>
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveTab('inbound')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'inbound' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                Inbound Calls
              </button>
              <button
                onClick={() => setActiveTab('outbound')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'outbound' ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                Outbound Calls
              </button>
            </div>
          </motion.div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeTab === 'inbound' ? [
              { icon: Wrench, title: "Job Enquiries", examples: ["How much to fix a leaking tap?", "Can you replace my boiler?"], description: "Provides ballpark quotes and captures job details" },
              { icon: Calendar, title: "Emergency Bookings", examples: ["Can you come out today?", "I have a burst pipe emergency"], description: "Checks availability and books emergency slots" },
              { icon: Shield, title: "Credential Checks", examples: ["Are you Gas Safe registered?", "Do you cover my area?"], description: "Confirms qualifications and service radius" },
              { icon: DollarSign, title: "Pricing Enquiries", examples: ["What are your call-out fees?", "Do you offer guarantees?"], description: "Explains transparent pricing and warranties" },
              { icon: Truck, title: "Job Prioritisation", examples: ["This is urgent", "Can you come ASAP?"], description: "Prioritises emergencies and urgent jobs" },
              { icon: MessageSquare, title: "Product Advice", examples: ["What boiler do you recommend?", "Best materials for roofing?"], description: "Provides expert advice and recommendations" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950 mb-3">{feature.title}</h3>
                <ul className="space-y-2 mb-4">
                  {feature.examples.map((example, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                      <span className="flex-1">"{example}"</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-sm border-t border-gray-100 pt-3">{feature.description}</p>
              </motion.div>
            )) : [
              { icon: MessageSquare, title: "Quote Follow-ups", examples: ["Following the estimate we sent...", "Any questions about the quote?"], description: "Nurtures leads and answers questions" },
              { icon: Calendar, title: "Appointment Reminders", examples: ["Your appointment is tomorrow", "Need to reschedule?"], description: "Reduces no-shows by 25%" },
              { icon: Star, title: "Post-Job Check-ins", examples: ["How's the new boiler running?", "Any issues we can help with?"], description: "Ensures customer satisfaction" },
              { icon: Zap, title: "Maintenance Reminders", examples: ["Time for annual gas safety check", "Boiler service due"], description: "Keeps customers coming back" },
              { icon: TrendingUp, title: "Seasonal Outreach", examples: ["Winter gutter cleaning", "Summer insulation upgrades"], description: "Generates repeat business" },
              { icon: Award, title: "Review Requests", examples: ["How was your experience?", "Would you recommend us?"], description: "Builds reputation and trust" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950 mb-3">{feature.title}</h3>
                <ul className="space-y-2 mb-4">
                  {feature.examples.map((example, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                      <span className="flex-1">"{example}"</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-sm border-t border-gray-100 pt-3">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-neutral-950 mb-4">
              Why UK Tradespeople Choose Pura AI
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of tradespeople who never miss another job
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "24/7 Availability", description: "Answer calls even when you're on a ladder, under a sink, or driving", color: "from-blue-500 to-cyan-500" },
              { icon: Target, title: "Capture More Jobs", description: "Never lose another job to voicemail or unanswered calls", color: "from-cyan-500 to-teal-500" },
              { icon: DollarSign, title: "Cost-Effective", description: "Save thousands on reception staff while capturing more work", color: "from-teal-500 to-green-500" },
              { icon: TrendingUp, title: "Proven Results", description: "40% more bookings, 25% fewer no-shows, £40k+ annual savings", color: "from-green-500 to-emerald-500" }
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`bg-gradient-to-br ${reason.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5,000+", label: "Active Tradespeople" },
              { value: "98%", label: "Call Answer Rate" },
              { value: "40%", label: "More Bookings" },
              { value: "24/7", label: "Support" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-white"
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-blue-100 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative max-w-4xl mx-auto text-center"
    >
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-gray-100">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Hammer className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-neutral-950 mb-6">
          Ready to Stop Missing Calls?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join 5,000+ tradespeople who never miss another job opportunity
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
            Start Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300">
            Contact Sales
          </button>
        </div>
        
        {/* Fixed legal text with proper spacing */}
        <p className="text-gray-500 mt-8 text-sm flex flex-wrap justify-center gap-x-2 gap-y-1">
        <span className="hidden sm:inline">•</span>
          <span>No credit card required</span>
          <span className="hidden sm:inline">•</span>
          <span className="sm:hidden block w-full h-0"></span>
          <span>14-day free trial</span>
          <span className="hidden sm:inline">•</span>
          <span className="sm:hidden block w-full h-0"></span>
          <span>Cancel anytime</span>
        </p>
      </div>
    </motion.div>
  </div>
</section>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-bounce {
          animation: bounce 1s infinite;
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default Tradespeople;