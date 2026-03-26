// src/pages/Industry/Recruitment.jsx
import React, { useState, useEffect } from "react";
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
  Activity,
  Zap,
  Headphones,
  Briefcase,
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
  ClipboardList,
  Building2,
  UserPlus,
  Target,
  Globe,
  Rocket,
  Code,
  Cpu,
  Network
} from "lucide-react";

const Recruitment = () => {
  const [activeTab, setActiveTab] = useState('inbound');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

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

  // Animated particles
  const particles = [...Array(60)].map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 15 + 10,
  }));


  return (
    <div className="bg-white overflow-hidden">
      {/* Extraordinary Hero Section */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-17 sm:pt-8">
        {/* Gray Grid Background */}
        <div className="absolute inset-0">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E5E7EB" strokeWidth="0.8"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-blue-400/30"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.left}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, (Math.random() - 0.5) * 50],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "linear",
              }}
            />
          ))}
        </div>

        

        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-200/20 blur-[100px]"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan-200/20 blur-[100px]"
          animate={{
            x: -mousePosition.x * 0.015,
            y: -mousePosition.y * 0.015,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div
          className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full bg-indigo-200/20 blur-[80px]"
          animate={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 backdrop-blur-2xl mb-8"
            >
              <Zap className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600">
                Recruitment AI v2.0
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-7xl md:text-8xl lg:text-9xl font-heading font-black text-neutral-950 tracking-tighter"
            >
              Find the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 block">
                Pe<span className="tracking-normal">rf</span>ect Talent
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-medium tracking-tight leading-relaxed mt-8 mb-10"
            >
              AI voice agents that screen candidates, schedule interviews, and nurture talent
              — ensuring your agency never misses the perfect hire.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="flex flex-wrap items-center justify-center gap-6 pt-6"
>
  {/* Primary */}
  <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 sm:px-10 py-4 rounded-full font-bold text-base hover:shadow-2xl transition-all duration-300 flex items-center justify-center w-full sm:w-auto">
    
    <span className="relative z-10 flex items-center gap-2">
      Start Recruiting
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
    </span>

    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </button>

  {/* Secondary */}
  <button className="border-2 border-gray-300 text-gray-700 px-8 sm:px-10 py-4 rounded-full font-bold text-base hover:bg-gray-50 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
    <Play className="w-5 h-5" />
    Watch Demo
  </button>
</motion.div>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-20 w-full max-w-5xl pb-12 sm:pb-0"
            >
              {[
                { value: "10,000+", label: "Candidates Placed", icon: Users, delay: 0 },
                { value: "98%", label: "Screening Accuracy", icon: Target, delay: 0.1 },
                { value: "45%", label: "Faster Hiring", icon: Clock, delay: 0.2 },
                { value: "24/7", label: "Candidate Support", icon: Headphones, delay: 0.3 },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center space-y-2"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-3xl md:text-4xl font-black text-neutral-950 tracking-tighter">
                    {stat.value}
                  </span>
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-blue-500 rounded-full mt-2 animate-pulse" />
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
              The Challenges Recruitment Agencies Face
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              In recruitment, speed and quality matter. Every missed call could be a perfect candidate.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Phone, title: "Missed Candidates", amount: "35%", description: "of candidate calls go unanswered", color: "from-red-500 to-orange-500" },
              { icon: Clock, title: "Slow Screening", amount: "2hrs+", description: "average response time", color: "from-orange-500 to-yellow-500" },
              { icon: Users, title: "Lost Talent", amount: "60%", description: "candidates go to competitors", color: "from-yellow-500 to-amber-500" },
              { icon: AlertTriangle, title: "Revenue Loss", amount: "£100k+", description: "annual loss per agency", color: "from-amber-500 to-red-500" }
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
              From candidate call to placement in days
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "01", title: "Call Comes In", icon: Phone, desc: "AI answers instantly with a professional, friendly voice", color: "from-blue-500 to-cyan-500" },
              { step: "02", title: "Screens Candidate", icon: MessageSquare, desc: "Assesses skills, experience, and availability", color: "from-cyan-500 to-blue-500" },
              { step: "03", title: "Schedules Interview", icon: Calendar, desc: "Books interviews with hiring managers", color: "from-blue-500 to-cyan-500" },
              { step: "04", title: "Placement Made", icon: UserCheck, desc: "Instant notification, candidate details sent", color: "from-cyan-500 to-blue-500" }
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
            <p className="text-lg sm:text-xl text-gray-600">Real conversation with our AI recruitment assistant</p>
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
              <div className="text-blue-600 text-sm font-medium">Recruitment AI Assistant • Live Call</div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 bg-blue-50 rounded-2xl p-4">
                  <div className="font-semibold text-blue-800 mb-1 text-sm">Candidate:</div>
                  <p className="text-gray-700 text-sm leading-relaxed">"I'm looking for a software developer role. Do you have any opportunities?"</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-cyan-600" />
                </div>
                <div className="flex-1 bg-cyan-50 rounded-2xl p-4">
                  <div className="font-semibold text-cyan-800 mb-1 text-sm">AI Assistant:</div>
                  <p className="text-gray-700 text-sm leading-relaxed">"Great! What's your tech stack and years of experience?"</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 bg-blue-50 rounded-2xl p-4">
                  <div className="font-semibold text-blue-800 mb-1 text-sm">Candidate:</div>
                  <p className="text-gray-700 text-sm leading-relaxed">"React, Node.js, 5 years experience. Looking for senior roles."</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-cyan-600" />
                </div>
                <div className="flex-1 bg-cyan-50 rounded-2xl p-4">
                  <div className="font-semibold text-cyan-800 mb-1 text-sm">AI Assistant:</div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">"Perfect! We have 3 senior developer roles matching your profile. I've scheduled interviews for this week. You'll receive details via email."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Profile screened
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Interviews scheduled
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Client notified
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
              Comprehensive Recruitment Support
            </h2>
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveTab('inbound')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'inbound' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                Inbound Calls
              </button>
              <button
                onClick={() => setActiveTab('outbound')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'outbound' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
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
              { icon: UserPlus, title: "Candidate Screening", examples: ["I'm looking for a job", "What roles do you have?"], description: "Screens and qualifies candidates" },
              { icon: Calendar, title: "Interview Booking", examples: ["When can I interview?", "Schedule my interview"], description: "Books interviews with clients" },
              { icon: Briefcase, title: "Job Enquiries", examples: ["Tell me about the role", "What's the salary range?"], description: "Provides job details" },
              { icon: Star, title: "Client Questions", examples: ["How do I hire through you?", "What's your fee structure?"], description: "Handles client enquiries" },
              { icon: FileText, title: "CV Submissions", examples: ["I want to submit my CV", "Upload my resume"], description: "Captures candidate details" },
              { icon: MessageSquare, title: "Reference Checks", examples: ["Can you verify my references?", "Reference request"], description: "Conducts reference checks" }
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
              { icon: Calendar, title: "Interview Reminders", examples: ["Your interview is tomorrow", "Don't miss your appointment"], description: "Reduces no-shows" },
              { icon: MessageSquare, title: "Follow-up Calls", examples: ["How did the interview go?", "Any feedback?"], description: "Nurtures candidates" },
              { icon: TrendingUp, title: "Client Updates", examples: ["New candidates available", "CVs sent for review"], description: "Keeps clients engaged" },
              { icon: Mail, title: "Job Alerts", examples: ["New roles matching your profile", "Job opportunities"], description: "Engages talent pool" },
              { icon: Star, title: "Feedback Surveys", examples: ["Rate your experience", "How can we improve?"], description: "Improves service" },
              { icon: Award, title: "Referral Requests", examples: ["Know someone looking for work?", "Refer a friend"], description: "Grows talent pool" }
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
              Why Recruitment Agencies Choose Pura AI
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by agencies placing over 50,000 candidates annually
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "24/7 Candidate Screening", description: "Never miss a potential hire", color: "from-blue-500 to-cyan-500" },
              { icon: TrendingUp, title: "Faster Placements", description: "Fill roles 45% faster", color: "from-cyan-500 to-blue-500" },
              { icon: Users, title: "Better Matches", description: "AI-powered candidate matching", color: "from-blue-500 to-cyan-500" },
              { icon: Award, title: "Higher Satisfaction", description: "Candidates and clients love it", color: "from-cyan-500 to-blue-500" }
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
      <section className="py-24 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl mx-auto text-center"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <UserPlus className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-neutral-950 mb-6">
                Ready to Find Better Talent?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join 500+ recruitment agencies placing candidates faster and smarter
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-blue-200 text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
              <p className="text-gray-500 mt-8 text-sm flex flex-wrap justify-center gap-x-2 gap-y-1">
                <span>REC compliant</span>
                <span className="text-gray-400">•</span>
                <span>GDPR ready</span>
                <span className="text-gray-400">•</span>
                <span>14-day free trial</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />
    </div>
  );
};

export default Recruitment;