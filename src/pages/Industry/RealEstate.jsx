// src/pages/Industry/RealEstate.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  Activity,
  Zap,
  Headphones,
  Home,
  Building2,
  Key,
  MapPin,
  Star,
  Award,
  FileText,
  Mail,
  Youtube,
  AlertTriangle,
  DollarSign,
  Eye,
  BarChart3,
  Sparkles,
  Play,
  Heart,
  UserCheck,
  ClipboardList
} from "lucide-react";

const RealEstate = () => {
  const [activeTab, setActiveTab] = useState('inbound');

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
{/* Hero Section with Floating Bubbles */}
<section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-18 sm:pt-12">
  {/* Floating Bubbles Animation - Smaller and more subtle */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(40)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-gradient-to-r from-blue-200/20 to-cyan-200/20"
        style={{
          width: Math.random() * 30 + 8,
          height: Math.random() * 30 + 8,
          left: `${Math.random() * 100}%`,
          bottom: -50,
        }}
        animate={{
          y: [0, -window.innerHeight - 100],
          x: [0, (Math.random() - 0.5) * 80],
          opacity: [0, 0.4, 0],
          scale: [0.5, 1, 0.5],
        }}
        transition={{
          duration: Math.random() * 10 + 6,
          repeat: Infinity,
          delay: Math.random() * 15,
          ease: "linear",
        }}
      />
    ))}
  </div>

  {/* Animated Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="property-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <rect x="10" y="10" width="40" height="40" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
          <circle cx="30" cy="30" r="5" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#property-grid)" />
    </svg>
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      {/* Content Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">Real Estate AI</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black mb-6 tracking-tighter leading-[1.1] text-neutral-950"
        >
          Capture Eve<span className="tracking-normal">ry</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 block">
            Prope<span className="tracking-normal">rt</span>y Lead
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
        >
          AI voice agents that capture every enquiry, book viewings, and schedule valuations automatically
          — ensuring your agency never misses a property opportunity.
        </motion.p>

        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
>
  {/* Primary Button */}
   <Link to="/contact">
  <button className="group relative overflow-hidden h-14 sm:h-16 px-8 sm:px-10 rounded-full bg-blue-600 text-white font-bold text-base hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer">

    <span className="relative z-10 flex items-center gap-2">
      Start Your Journey
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
    </span>

    <div className="absolute inset-0 rounded-full bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
  </button>
   </Link>

  {/* Secondary Button */}
  <button className="h-14 sm:h-16 px-8 sm:px-10 rounded-full border-2 border-gray-200 text-gray-700 font-bold text-base hover:bg-gray-50 hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
    <Play className="w-5 h-5" />
    Watch Demo
  </button>
</motion.div>
      </div>

      {/* Animated Property Card with Smooth Rotating Enquiries - Wider on mobile */}
      <div className="lg:w-1/2 relative w-full pb-12 sm:pb-0">
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="relative z-10"
        >
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-6 sm:p-8 shadow-2xl border border-blue-100 mx-0 sm:mx-0">
            <div className="text-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Home className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950">Hot Property Alert</h3>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">Live lead tracking</p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
              <div className="bg-blue-50 rounded-xl p-2.5 sm:p-3 text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">+40%</div>
                <div className="text-[10px] sm:text-xs text-gray-600">More Viewings</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-2.5 sm:p-3 text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-600">30min</div>
                <div className="text-[10px] sm:text-xs text-gray-600">Avg Response</div>
              </div>
            </div>

            {/* Animated Enquiries – Ultra Smooth Continuous Scroll */}
<div className="relative h-[140px] sm:h-[180px] md:h-[200px] overflow-hidden">
  <motion.div
    className="absolute w-full will-change-transform"
    animate={{ y: ["0%", "-50%"] }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    {/* ================= ORIGINAL SET ================= */}
    <div className="space-y-4">
      
      {/* Enquiry 1 */}
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <MapPin className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-sm font-semibold text-neutral-950">
            New Enquiry
          </span>
          <span className="text-xs text-green-600 ml-auto">
            Just now
          </span>
        </div>
        <p className="text-gray-600 text-sm">
          "Looking for a 3-bed house in Manchester. Can we view this weekend?"
        </p>
      </div>

      {/* Enquiry 2 */}
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <Home className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-sm font-semibold text-neutral-950">
            Valuation Request
          </span>
          <span className="text-xs text-blue-600 ml-auto">
            2 min ago
          </span>
        </div>
        <p className="text-gray-600 text-sm">
          "I'm thinking of selling my flat in London. What's it worth?"
        </p>
      </div>

      {/* Enquiry 3 */}
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <Key className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-sm font-semibold text-neutral-950">
            Viewing Booking
          </span>
          <span className="text-xs text-purple-600 ml-auto">
            5 min ago
          </span>
        </div>
        <p className="text-gray-600 text-sm">
          "The property on Oak Road looks perfect. Can I book a viewing for Saturday?"
        </p>
      </div>

    </div>

    {/* ================= DUPLICATE SET (FOR SEAMLESS LOOP) ================= */}
    <div className="space-y-4 mt-4">
      
      {/* Enquiry 1 */}
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <MapPin className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-sm font-semibold text-neutral-950">
            New Enquiry
          </span>
          <span className="text-xs text-green-600 ml-auto">
            Just now
          </span>
        </div>
        <p className="text-gray-600 text-sm">
          "Looking for a 3-bed house in Manchester. Can we view this weekend?"
        </p>
      </div>

      {/* Enquiry 2 */}
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <Home className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-sm font-semibold text-neutral-950">
            Valuation Request
          </span>
          <span className="text-xs text-blue-600 ml-auto">
            2 min ago
          </span>
        </div>
        <p className="text-gray-600 text-sm">
          "I'm thinking of selling my flat in London. What's it worth?"
        </p>
      </div>

      {/* Enquiry 3 */}
      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <Key className="w-4 h-4 text-blue-600" />
          </div>
          <span className="text-sm font-semibold text-neutral-950">
            Viewing Booking
          </span>
          <span className="text-xs text-purple-600 ml-auto">
            5 min ago
          </span>
        </div>
        <p className="text-gray-600 text-sm">
          "The property on Oak Road looks perfect. Can I book a viewing for Saturday?"
        </p>
      </div>

    </div>
  </motion.div>
</div>
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-8 -right-8 w-32 h-32 bg-blue-200/30 rounded-full blur-[60px] -z-10"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-100/30 rounded-full blur-[80px] -z-10"
        />
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
      <div className="w-1 h-2 bg-blue-500 rounded-full mt-2 animate-pulse" />
    </div>
  </div>
</section>

      {/* Stats Bar */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100%", label: "Calls Answered", icon: Building2 },
              { value: "100%", label: "Call Answer Rate", icon: Phone },
              { value: "40%", label: "More Viewings", icon: Eye },
              { value: "24/7", label: "Lead Capture", icon: Clock }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl md:text-3xl font-black text-neutral-950">{stat.value}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
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
              The Challenges Estate Agents Face
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              In property, timing is everything. Every missed call is a lost sale.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Phone, title: "Missed Enquiries", amount: "35%", description: "of calls go unanswered", color: "from-red-500 to-orange-500" },
              { icon: Clock, title: "Slow Response", amount: "2hrs+", description: "average callback time", color: "from-orange-500 to-yellow-500" },
              { icon: Users, title: "Lost Buyers", amount: "60%", description: "contact another agent", color: "from-yellow-500 to-amber-500" },
              { icon: AlertTriangle, title: "Valuation Loss", amount: "£50k+", description: "annual loss per agent", color: "from-amber-500 to-red-500" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${item.color} w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6`}>
                  <item.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-black text-neutral-950 mb-2">{item.amount}</div>
                <h3 className="text-lg md:text-xl font-bold text-neutral-950 mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From enquiry to viewing in minutes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "01", title: "Call Comes In", icon: Phone, desc: "AI answers instantly with a professional, friendly voice", color: "from-blue-500 to-blue-600" },
              { step: "02", title: "Captures Details", icon: MessageSquare, desc: "Gathers property needs, budget, and viewing preferences", color: "from-blue-500 to-blue-600" },
              { step: "03", title: "Books Viewing", icon: Calendar, desc: "Schedules appointments, prioritizes hot leads", color: "from-blue-500 to-blue-600" },
              { step: "04", title: "Lead Converted", icon: Key, desc: "Instant notification, property details sent", color: "from-blue-500 to-blue-600" }
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

      {/* Live Demo Section */}
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
              Watch It In Action
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">Real conversation with our AI property assistant</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
          >
            <div className="bg-gray-50 px-6 py-4 flex items-center gap-3 border-b border-gray-200">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="text-blue-600 text-sm font-medium">Property AI Assistant • Live Call</div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 bg-blue-50 rounded-2xl p-4">
                  <div className="font-semibold text-blue-800 mb-1 text-sm">Buyer:</div>
                  <p className="text-gray-700 text-sm leading-relaxed">"I'm looking for a 3-bedroom house in Manchester. Can I book a viewing?"</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 bg-blue-50 rounded-2xl p-4">
                  <div className="font-semibold text-blue-800 mb-1 text-sm">AI Assistant:</div>
                  <p className="text-gray-700 text-sm leading-relaxed">"I can help with that. What's your budget and preferred area in Manchester?"</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 bg-blue-50 rounded-2xl p-4">
                  <div className="font-semibold text-blue-800 mb-1 text-sm">Buyer:</div>
                  <p className="text-gray-700 text-sm leading-relaxed">"Around £350,000, somewhere near Didsbury."</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 bg-blue-50 rounded-2xl p-4">
                  <div className="font-semibold text-blue-800 mb-1 text-sm">AI Assistant:</div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">"Great news! We have 3 properties matching your criteria. I've booked viewings for this Saturday at 10 AM, 12 PM, and 2 PM. You'll receive details via email."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Viewings booked
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Agent notified
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Property details sent
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Tab Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-neutral-950 mb-4">
              Comprehensive Property Support
            </h2>
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveTab('inbound')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'inbound' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                Inbound Calls
              </button>
              <button
                onClick={() => setActiveTab('outbound')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'outbound' ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
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
              { icon: Calendar, title: "Viewing Bookings", examples: ["Can I book a viewing?", "Show me the property on Oak Road"], description: "Schedules viewings instantly" },
              { icon: Home, title: "Property Enquiries", examples: ["Is this property still available?", "Tell me about this listing"], description: "Provides property details" },
              { icon: DollarSign, title: "Valuation Requests", examples: ["I'm thinking of selling", "What's my house worth?"], description: "Books valuations" },
              { icon: MapPin, title: "Area Questions", examples: ["What's the area like?", "School catchment info"], description: "Provides local insights" },
              { icon: Users, title: "Landlord Enquiries", examples: ["Need a tenant", "Property management questions"], description: "Handles landlord queries" },
              { icon: Key, title: "Mortgage Advice", examples: ["Can you recommend a broker?", "Mortgage pre-approval"], description: "Connects with partners" }
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
              { icon: Calendar, title: "Viewing Reminders", examples: ["Your viewing is tomorrow", "Don't miss your appointment"], description: "Reduces no-shows" },
              { icon: MessageSquare, title: "Follow-up Calls", examples: ["How was the viewing?", "Any questions about the property?"], description: "Nurtures leads" },
              { icon: TrendingUp, title: "Valuation Follow-ups", examples: ["Thinking about the valuation?", "Market update for your area"], description: "Converts sellers" },
              { icon: Mail, title: "Property Alerts", examples: ["New properties matching your criteria", "Price reduction alert"], description: "Keeps buyers engaged" },
              { icon: Star, title: "Feedback Surveys", examples: ["Rate your viewing experience", "How was our service?"], description: "Improves service" },
              { icon: Award, title: "Referral Requests", examples: ["Know someone looking to move?", "Refer a friend"], description: "Grows business" }
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
              Why Estate Agents Choose Pura AI
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by agencies selling over £2B in property annually
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "24/7 Lead Capture", description: "Never miss an after-hours enquiry", color: "from-blue-500 to-blue-600" },
              { icon: TrendingUp, title: "Increase Viewings", description: "Book more appointments, sell faster", color: "from-blue-500 to-blue-600" },
              { icon: Users, title: "Reduce Admin Time", description: "Free up negotiators to sell", color: "from-blue-500 to-blue-600" },
              { icon: Award, title: "Better Service", description: "Always sound professional and responsive", color: "from-blue-500 to-blue-600" }
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 shadow-lg"
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

      {/* CTA Section */}
      <section className="py-24 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl mx-auto text-center"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Building2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-neutral-950 mb-6">
                Ready to Sell More Properties?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join a growing list of real estate agencies capturing every lead and selling faster
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                 <Link to="/contact">
                <button className="border-2 border-blue-200 text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer">
                  Contact Sales
                </button>
                 </Link>
              </div>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
    </div>
  );
};

export default RealEstate;