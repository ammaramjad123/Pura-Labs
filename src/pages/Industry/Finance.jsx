// src/pages/Industry/Finance.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    {/* Hero Section */}
<section className="relative min-h-screen flex items-center bg-white overflow-hidden lg:pt-35 pt-35 pb-24">
  {/* Background elements */}
  <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 -skew-x-12 translate-x-32 z-0 hidden lg:block" />
  
  {/* Floating icons background */}
  <div className="absolute inset-0 pointer-events-none opacity-5">
    <div className="absolute top-20 left-10">
      <Briefcase className="w-32 h-32 text-blue-600" />
    </div>
  </div>

  <div className="container px-4 mx-auto relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      
      {/* Content Section - LEFT SIDE */}
      <div className="relative z-20 flex-1 text-center lg:text-left">
        
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-3 h-3 text-blue-600" />
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">
            Finance AI
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-heading font-black mb-8 tracking-tighter leading-[0.9] text-neutral-950"
        >
          Secure Every
          <span className="text-blue-600 italic block">Financial Opportunity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed text-gray-600"
        >
          AI voice agents that capture every enquiry, schedule consultations, and manage client follow-ups, ensuring your financial advisory firm never misses a high-value opportunity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
        >
          <Link to="/contact">
            <button className="w-full sm:w-auto h-16 px-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black rounded-2xl hover:scale-105 transition-all shadow-xl text-xs uppercase tracking-widest gap-3 flex items-center justify-center">
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
          <button className="w-full sm:w-auto h-16 px-10 bg-transparent border-2 border-gray-300 text-gray-700 font-black rounded-2xl hover:bg-gray-50 transition-all text-xs uppercase tracking-widest gap-3 flex items-center justify-center">
            <Play className="w-4 h-4" />
            Watch Demo
          </button>
        </motion.div>
      </div>

      {/* Animated Logo */}
      <div className="relative flex-1">
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="relative z-10"
        >
          <div className="relative">
            <div className="relative w-full aspect-square flex items-center justify-center">
              
              {/* Logo */}
              <motion.img
                src="/logo.png"
                alt="Pura AI Logo"
                className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10"
                animate={{ scale: [1, 1.05, 1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Ripple Rings */}
              <motion.div className="absolute inset-0 flex items-center justify-center scale-75 md:scale-100">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border-2 border-blue-400/40"
                    style={{
                      width: 120 + i * 30,
                      height: 120 + i * 30,
                    }}
                    animate={{
                      scale: [1, 1.5 + i * 0.1, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </motion.div>

              {/* Glow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-blue-500/20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Sound Bars */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-1">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-blue-500 rounded-full"
                    animate={{
                      height: [8, 20 + Math.random() * 30, 8],
                    }}
                    transition={{
                      duration: 0.5 + Math.random() * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.05,
                    }}
                    style={{ height: 8 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
      <div className="w-1 h-2 bg-blue-600 rounded-full mt-2 animate-pulse" />
    </div>
  </div>
</section>

{/* Stats Bar */}
<section className="py-12 bg-gray-50 border-b border-gray-200">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        { value: "100%", label: "Calls Answered", icon: Briefcase },
        { value: "45%", label: "Time Saving", icon: Clock },
        { value: "35%", label: "More Meetings", icon: Users },
        { value: "24/7", label: "Client Support", icon: Shield }
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
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-neutral-950 mb-1 sm:mb-2">{item.title}</h3>
          <div className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-950 mb-1 sm:mb-2">{item.amount}</div>
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
              Why Financial Firms Choose Pura Labs
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
              Trusted by advisers managing over £5B in client assets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Shield, title: "GDPR Compliant", description: "Fully compliant with UK financial regulations", color: "from-blue-500 to-cyan-500" },
              { icon: Clock, title: "24/7 Availability", description: "Capture enquiries anytime, anywhere", color: "from-cyan-500 to-blue-500" },
              { icon: TrendingUp, title: "Improved Results", description: "35% more meetings, 45% less admin", color: "from-blue-500 to-indigo-500" },
              { icon: Lock, title: "Data Security", description: "Encrypted data and GDPR ready", color: "from-indigo-500 to-purple-500" }
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
                Join a growing number of financial firms capturing every opportunity and serving more clients
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  Book a Demo
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                 <Link to="/contact">
                <button className="border-2 border-blue-200 text-blue-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-blue-50 transition-all duration-300 cursor-pointer">
                  Contact Sales
                </button>
                 </Link>
              </div>
             
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