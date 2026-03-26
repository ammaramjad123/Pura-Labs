// src/pages/Industry/Finance.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  Headphones,
  DollarSign,
  Briefcase,
  Star,
  Award,
  FileText,
  Mail,
  AlertTriangle,
  Lock,
  Sparkles,
  Play,
  BarChart3,
  LineChart,
  PieChart,
  Wallet,
  PiggyBank,
  ChartLine,
  Globe,
  Landmark
} from "lucide-react";

const Finance = () => {
  const [activeTab, setActiveTab] = useState('inbound');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section with Interactive Gradient */}
<section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-19">
  {/* Animated Gradient Background - CHANGED TO WHITE */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
    
    {/* Animated Orbs - Lighter colors for white background */}
    <motion.div
      className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-200/40 blur-[100px]"
      animate={{
        x: mousePosition.x * 0.02,
        y: mousePosition.y * 0.02,
      }}
      transition={{ type: "spring", stiffness: 50, damping: 30 }}
    />
    <motion.div
      className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-200/40 blur-[100px]"
      animate={{
        x: -mousePosition.x * 0.015,
        y: -mousePosition.y * 0.015,
      }}
      transition={{ type: "spring", stiffness: 50, damping: 30 }}
    />
    <motion.div
      className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full bg-indigo-200/40 blur-[80px]"
      animate={{
        x: mousePosition.x * 0.01,
        y: mousePosition.y * 0.01,
      }}
      transition={{ type: "spring", stiffness: 50, damping: 30 }}
    />
  </div>

  {/* Floating Particles - Lighter color */}
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-gray-400/20 rounded-full"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          y: [null, -100, -200],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: Math.random() * 5 + 3,
          repeat: Infinity,
          delay: Math.random() * 5,
        }}
      />
    ))}
  </div>

  <motion.div 
    className="relative z-10 container mx-auto px-4 py-20 lg:py-32"
    style={{ opacity, scale }}
  >
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      {/* Content Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-gray-100 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-gray-500"
        >
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-gray-700">Trusted by 500+ UK Financial Firms</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] font-heading font-black mb-6 leading-[1.1] tracking-tight pr-0 sm:pr-4"
        >
          <span className="text-neutral-950">Secure Every</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 whitespace-normal break-words">
            Financial Opportunity
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
        >
          AI voice agents that capture every enquiry, schedule consultations, and manage client follow-ups
          — ensuring your financial advisory firm never misses a high-value opportunity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
        >
          <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-base hover:shadow-2xl transition-all duration-300 flex items-center justify-center">
            <span className="relative z-10 flex items-center gap-2">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-bold text-base hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2">
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </motion.div>
      </div>

      {/* Extraordinary 3D Financial Dashboard */}
      <div className="lg:w-1/2 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative perspective-1000"
        >
          {/* 3D Rotating Card Container */}
          <div className="relative transform-gpu transition-all duration-500 hover:rotateY-5 hover:rotateX-5 pb-8 sm:pb-0">
            {/* Main Dashboard Card - Light theme */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-6 border border-gray-200 shadow-xl">
              
              {/* Animated Chart Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Live Market Data</span>
                </div>
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                  ))}
                </div>
              </div>

              {/* Animated Line Chart */}
              <div className="relative h-32 mb-6">
                <svg className="w-full h-full" viewBox="0 0 400 120" preserveAspectRatio="none">
                  <motion.path
                    d="M0 80 L50 60 L100 85 L150 40 L200 55 L250 25 L300 45 L350 30 L400 50"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-500/10 to-transparent" />
              </div>

              {/* Animated Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 rounded-xl p-3 text-center border border-gray-200"
                >
                  <div className="text-2xl font-black text-blue-600">+247%</div>
                  <div className="text-[10px] text-gray-500">Client Growth</div>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 rounded-xl p-3 text-center border border-gray-200"
                >
                  <div className="text-2xl font-black text-purple-600">£2.4M</div>
                  <div className="text-[10px] text-gray-500">New Assets</div>
                </motion.div>
              </div>

              {/* Animated Progress Circle */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="32" cy="32" r="28" stroke="#E5E7EB" strokeWidth="4" fill="none" />
                    <motion.circle
                      cx="32" cy="32" r="28"
                      stroke="url(#gradient2)"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: 176, strokeDashoffset: 176 }}
                      animate={{ strokeDashoffset: 44 }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                    />
                    <defs>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-900">75%</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold text-gray-900">Conversion Rate</div>
                  <div className="text-xs text-gray-400">+15% vs last month</div>
                </div>
              </div>

              {/* Animated Client List - Fixed with bullets */}
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-sm text-gray-700">Sarah Johnson</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-blue-600">£450k</span>
                    <span className="text-xs text-gray-400">2 min ago</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    <span className="text-sm text-gray-700">Michael Chen</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-purple-600">£280k</span>
                    <span className="text-xs text-gray-400">15 min ago</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    <span className="text-sm text-gray-700">Emma Williams</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-indigo-600">£620k</span>
                    <span className="text-xs text-gray-400">1 hour ago</span>
                  </div>
                </div>
              </div>

              {/* Live Badge */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full px-3 py-1"
              >
                <span className="text-[10px] font-bold text-white">LIVE</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Floating Glow - Lighter */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl -z-10" />
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl -z-10" />
      </div>
    </div>
  </motion.div>

  {/* Scroll Indicator - Light theme */}
  <motion.div 
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
      <div className="w-1 h-2 bg-blue-500 rounded-full mt-2 animate-pulse" />
    </div>
  </motion.div>
</section>

      {/* Stats Bar - CHANGED to light theme */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Financial Firms", icon: Briefcase },
              { value: "£5B+", label: "Assets Managed", icon: DollarSign },
              { value: "98%", label: "Client Retention", icon: Users },
              { value: "24/7", label: "Client Support", icon: Shield }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-black text-neutral-950">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section - CHANGED to light theme */}
      <section className="py-16 sm:py-20 md:py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 mb-4">
              The Challenges Financial Advisers Face
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-3xl mx-auto px-4">
              High-value opportunities slipping away due to missed calls and delays
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
            {[
              { icon: Phone, title: "Missed Opportunities", amount: "35%", description: "of calls go unanswered", color: "from-red-500 to-orange-500" },
              { icon: Clock, title: "Time Lost", amount: "40%", description: "of day on phone admin", color: "from-orange-500 to-yellow-500" },
              { icon: Users, title: "Competition", amount: "60%", description: "call the next adviser", color: "from-yellow-500 to-amber-500" },
              { icon: AlertTriangle, title: "Revenue Loss", amount: "£50k+", description: "annual loss per adviser", color: "from-amber-500 to-red-500" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-200 shadow-lg"
              >
                <div className={`bg-gradient-to-r ${item.color} w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-6`}>
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-950 mb-1 sm:mb-2">{item.amount}</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-neutral-950 mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-500">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - CHANGED to light theme */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 mb-4">
              How It Works
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-3xl mx-auto px-4">
              From prospect call to client meeting in minutes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "01", title: "Call Comes In", icon: Phone, desc: "AI answers instantly with a professional, trusted voice", color: "from-blue-500 to-cyan-500" },
              { step: "02", title: "Qualifies Lead", icon: MessageSquare, desc: "Gathers goals, assets, and appointment preferences", color: "from-cyan-500 to-blue-500" },
              { step: "03", title: "Books Consultation", icon: Calendar, desc: "Schedules into your diary with all client details", color: "from-blue-500 to-indigo-500" },
              { step: "04", title: "Client Acquired", icon: TrendingUp, desc: "Instant notification, follow-up if needed", color: "from-indigo-500 to-purple-500" }
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
                <p className="text-sm md:text-base text-gray-500 px-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section - CHANGED to light theme */}
      <section className="py-16 sm:py-20 md:py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 mb-4">
              Watch It In Action
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-3xl mx-auto px-4">
              Real conversation with our AI financial assistant
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
          >
            <div className="bg-gray-50 px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3 border-b border-gray-200">
              <div className="flex gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-blue-600 text-[10px] sm:text-xs md:text-sm font-medium">Financial AI Assistant • Live Call</div>
            </div>

            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <div className="flex gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <div className="flex-1 bg-blue-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-blue-100">
                  <div className="font-semibold text-blue-700 mb-1 text-[11px] sm:text-xs md:text-sm">Prospect:</div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">"I'm looking for retirement planning advice. Can I speak with an adviser?"</p>
                </div>
              </div>

              <div className="flex gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                </div>
                <div className="flex-1 bg-purple-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-purple-100">
                  <div className="font-semibold text-purple-700 mb-1 text-[11px] sm:text-xs md:text-sm">AI Assistant:</div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">"I can help with that. What's your current retirement timeframe and approximate investment amount?"</p>
                </div>
              </div>

              <div className="flex gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <div className="flex-1 bg-blue-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-blue-100">
                  <div className="font-semibold text-blue-700 mb-1 text-[11px] sm:text-xs md:text-sm">Prospect:</div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">"I'm planning to retire in 10 years and have around £250,000 to invest."</p>
                </div>
              </div>

              <div className="flex gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                </div>
                <div className="flex-1 bg-purple-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-purple-100">
                  <div className="font-semibold text-purple-700 mb-1 text-[11px] sm:text-xs md:text-sm">AI Assistant:</div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">"Thank you. I've booked a consultation with our senior retirement specialist for Thursday at 10 AM. You'll receive a confirmation email with details and what to prepare."</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 bg-green-100 text-green-700 rounded-lg text-[10px] sm:text-xs font-medium">
                      <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      Consultation booked
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 bg-blue-100 text-blue-700 rounded-lg text-[10px] sm:text-xs font-medium">
                      <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      Adviser notified
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 bg-purple-100 text-purple-700 rounded-lg text-[10px] sm:text-xs font-medium">
                      <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      Client profile created
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Tab Section - CHANGED to light theme */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 mb-4">
              Comprehensive Financial Support
            </h2>
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveTab('inbound')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'inbound' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                Inbound Calls
              </button>
              <button
                onClick={() => setActiveTab('outbound')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'outbound' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
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
              { icon: Briefcase, title: "Financial Advice", examples: ["What types of advice do you offer?", "Do you help with retirement planning?"], description: "Explains services and specializations" },
              { icon: Calendar, title: "Consultation Booking", examples: ["How do I book a consultation?", "Can I speak with an adviser?"], description: "Schedules appointments with details" },
              { icon: DollarSign, title: "Fee Enquiries", examples: ["What are your fees?", "How much for a consultation?"], description: "Provides transparent pricing" },
              { icon: ChartLine, title: "Investment Questions", examples: ["What's your investment philosophy?", "How do you manage portfolios?"], description: "Answers investment queries" },
              { icon: Shield, title: "Compliance Info", examples: ["Are you FCA regulated?", "How is my data protected?"], description: "Builds trust and confidence" },
              { icon: TrendingUp, title: "Wealth Management", examples: ["Do you offer wealth management?", "Help with inheritance planning?"], description: "Covers comprehensive services" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 shadow-lg"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950 mb-3">{feature.title}</h3>
                <ul className="space-y-2 mb-4">
                  {feature.examples.map((example, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span className="flex-1">"{example}"</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-sm border-t border-gray-100 pt-3">{feature.description}</p>
              </motion.div>
            )) : [
              { icon: Calendar, title: "Appointment Reminders", examples: ["Your review is tomorrow", "Need to reschedule?"], description: "Reduces no-shows" },
              { icon: MessageSquare, title: "Follow-up Calls", examples: ["How was your consultation?", "Any questions about the plan?"], description: "Nurtures leads" },
              { icon: TrendingUp, title: "Review Campaigns", examples: ["Time for annual review", "Portfolio check-in"], description: "Proactive client care" },
              { icon: Mail, title: "Market Updates", examples: ["Inheritance tax changes", "ISA allowance reminder"], description: "Adds value" },
              { icon: Star, title: "Feedback Surveys", examples: ["Rate your experience", "How can we improve?"], description: "Collects feedback" },
              { icon: Award, title: "Client Satisfaction", examples: ["Thank you for choosing us", "Refer a friend"], description: "Builds loyalty" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 shadow-lg"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950 mb-3">{feature.title}</h3>
                <ul className="space-y-2 mb-4">
                  {feature.examples.map((example, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
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

      {/* Why Choose Us Section - CHANGED to light theme */}
      <section className="py-16 sm:py-20 md:py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 mb-4">
              Why Financial Firms Choose Pura AI
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
              Trusted by advisers managing over £5B in client assets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Shield, title: "FCA Compliant", description: "Fully compliant with UK financial regulations", color: "from-blue-500 to-cyan-500" },
              { icon: Clock, title: "24/7 Availability", description: "Capture enquiries anytime, anywhere", color: "from-cyan-500 to-blue-500" },
              { icon: TrendingUp, title: "Proven Results", description: "35% more meetings, 45% less admin", color: "from-blue-500 to-indigo-500" },
              { icon: Lock, title: "Data Security", description: "Bank-level encryption and GDPR ready", color: "from-indigo-500 to-purple-500" }
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 border border-gray-200 shadow-lg"
              >
                <div className={`bg-gradient-to-br ${reason.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950 mb-3">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - CHANGED to light theme */}
      <section className="py-16 sm:py-20 md:py-24 bg-blue-50 border-t border-blue-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl mx-auto text-center"
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-blue-100 shadow-xl">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <Briefcase className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-neutral-950 mb-4 sm:mb-6">
                Ready to Grow Your Practice?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Join 500+ financial firms capturing every opportunity and serving more clients
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  Book a Demo
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-blue-200 text-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-blue-50 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
              <p className="text-gray-500 mt-6 sm:mt-8 text-[11px] sm:text-xs md:text-sm flex flex-wrap justify-center gap-x-2 gap-y-1">
                <span>FCA compliant</span>
                <span className="text-gray-300">•</span>
                <span>GDPR ready</span>
                <span className="text-gray-300">•</span>
                <span>14-day free trial</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </div>
  );
};

export default Finance;