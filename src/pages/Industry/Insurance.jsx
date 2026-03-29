// src/pages/Industry/Insurance.jsx
import React, { useState } from "react";
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
  Activity,
  Zap,
  Headphones,
  Umbrella,
  FileText,
  Star,
  Award,
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
  Home,
  Car,
  Briefcase,
  Landmark,
  Scale
} from "lucide-react";

const Insurance = () => {
  const [activeTab, setActiveTab] = useState('inbound');
  const [hoveredCard, setHoveredCard] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Floating particles animation
  const floatingParticles = [...Array(50)].map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 8 + 4,
  }));

  return (
    <div className="bg-white overflow-hidden">
      {/* Extraordinary Hero Section */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-18 sm:pt-12">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {floatingParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-blue-400/20"
              style={{
                width: particle.size,
                height: particle.size,
                left: `${particle.left}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
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

        {/* Animated Insurance Icons */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          {[Umbrella, Shield, Home, Car, Briefcase].map((Icon, idx) => (
            <motion.div
              key={idx}
              className="absolute"
              style={{
                left: `${15 + idx * 20}%`,
                top: `${20 + idx * 15}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: idx * 0.5,
              }}
            >
              <Icon className="w-16 h-16 text-blue-600/20" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Content Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full px-4 py-2 mb-6"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">Insurance AI</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black mb-6 tracking-tighter leading-[1.1] text-neutral-950"
              >
                Never Miss
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 block">
                  Another Policy
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                AI voice agents that capture every enquiry, provide instant quotes, and schedule consultations, ensuring your insurance brokerage never misses a high-value opportunity.
              </motion.p>

              <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
>
  {/* Primary Button */}
   <Link to="/contact">
  <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-base hover:shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer">
    
    <span className="relative z-10 flex items-center gap-2">
      Get Protected Today
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
    </span>

    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </button>
   </Link>

  {/* Secondary Button */}
  <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-bold text-base hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2">
    <Play className="w-5 h-5" />
    Watch Demo
  </button>
</motion.div>

            
            </div>

            {/* Animated Insurance Quote Card */}
            <div className="lg:w-1/2 relative pb-12 sm:pb-0">
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.9, rotateY: 10 }}
                animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 shadow-2xl border border-blue-100">
                  {/* Live Quote Counter */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full px-3 py-1 shadow-lg">
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[9px] font-bold text-white">LIVE QUOTES</span>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Umbrella className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-950">Instant Quote Generator</h3>
                    <p className="text-gray-500 text-sm mt-1">AI-powered quotes in seconds</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                      <div className="text-2xl font-bold text-blue-600">£247</div>
                      <div className="text-xs text-gray-500">Avg. Premium</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center shadow-sm">
                      <div className="text-2xl font-bold text-cyan-600">2.4s</div>
                      <div className="text-xs text-gray-500">Quote Time</div>
                    </div>
                  </div>

                  {/* Animated Quote Requests */}
                  <div className="space-y-3">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-3 border border-blue-100"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Home className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-neutral-950">Home Insurance</div>
                          <div className="text-[10px] text-gray-500">Manchester, UK</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-blue-600">£342</div>
                          <div className="text-[9px] text-gray-400">Annual</div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-3 border border-blue-100"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Car className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-neutral-950">Car Insurance</div>
                          <div className="text-[10px] text-gray-500">BMW 3 Series</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-blue-600">£456</div>
                          <div className="text-[9px] text-gray-400">Comprehensive</div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 }}
                      className="bg-gradient-to-r from-cyan-50 to-white rounded-xl p-3 border border-cyan-100"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center">
                          <Briefcase className="w-4 h-4 text-cyan-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-neutral-950">Business Insurance</div>
                          <div className="text-[10px] text-gray-500">SME Package</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold text-cyan-600">£1,247</div>
                          <div className="text-[9px] text-gray-400">Annual</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Animated Counter */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mt-6 text-center"
                  >
                    <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-blue-700">
                        2,347 quotes generated today
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Glow */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 w-40 h-40 bg-blue-200/30 rounded-full blur-[80px] -z-10"
              />
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 w-56 h-56 bg-cyan-200/30 rounded-full blur-[100px] -z-10"
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
              { value: "100%", label: "Quote Capture", icon: TrendingUp },
              { value: "45%", label: "Faster Quotes", icon: Clock },
              { value: "24/7", label: "Claims Support", icon: Shield }
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
              The Challenges Insurance Brokers Face
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              In insurance, the first to respond often wins the business
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Phone, title: "Missed Quotes", amount: "35%", description: "of quote requests go unanswered", color: "from-red-500 to-orange-500" },
              { icon: Clock, title: "Slow Response", amount: "2hrs+", description: "average callback time", color: "from-orange-500 to-yellow-500" },
              { icon: Users, title: "Lost Clients", amount: "60%", description: "contact another broker", color: "from-yellow-500 to-amber-500" },
              { icon: AlertTriangle, title: "Revenue Loss", amount: "£50k+", description: "annual loss per broker", color: "from-amber-500 to-red-500" }
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
              From quote request to policy issued in minutes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "01", title: "Call Comes In", icon: Phone, desc: "AI answers instantly with a professional, friendly voice", color: "from-blue-500 to-cyan-500" },
              { step: "02", title: "Captures Details", icon: MessageSquare, desc: "Gathers coverage needs, property details, and budget", color: "from-cyan-500 to-blue-500" },
              { step: "03", title: "Generates Quote", icon: DollarSign, desc: "Provides instant quotes based on your rates", color: "from-blue-500 to-cyan-500" },
              { step: "04", title: "Policy Issued", icon: Shield, desc: "Instant confirmation, coverage details sent", color: "from-cyan-500 to-blue-500" }
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
            <p className="text-lg sm:text-xl text-gray-600">Real conversation with our AI insurance assistant</p>
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
              <div className="text-blue-600 text-sm font-medium">Insurance AI Assistant • Live Call</div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 bg-blue-50 rounded-2xl p-4">
                  <div className="font-semibold text-blue-800 mb-1 text-sm">Prospect:</div>
                  <p className="text-gray-700 text-sm leading-relaxed">"I need a quote for home insurance. My house is in Manchester."</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-cyan-600" />
                </div>
                <div className="flex-1 bg-cyan-50 rounded-2xl p-4">
                  <div className="font-semibold text-cyan-800 mb-1 text-sm">AI Assistant:</div>
                  <p className="text-gray-700 text-sm leading-relaxed">"I can help with that. What's your property value and when would you like cover to start?"</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 bg-blue-50 rounded-2xl p-4">
                  <div className="font-semibold text-blue-800 mb-1 text-sm">Prospect:</div>
                  <p className="text-gray-700 text-sm leading-relaxed">"Around £350,000. Can I get cover from next week?"</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-cyan-600" />
                </div>
                <div className="flex-1 bg-cyan-50 rounded-2xl p-4">
                  <div className="font-semibold text-cyan-800 mb-1 text-sm">AI Assistant:</div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">"Great news! Based on your details, your premium is £342/year with contents cover. I've emailed you the quote and can schedule a call with our specialist to finalise."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Quote generated
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Specialist notified
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Quote emailed
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
              Comprehensive Insurance Support
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
              { icon: Home, title: "Home Insurance", examples: ["Quote for home insurance", "Contents cover needed"], description: "Provides instant home insurance quotes" },
              { icon: Car, title: "Car Insurance", examples: ["Car insurance quote", "Comprehensive cover"], description: "Generates auto insurance quotes" },
              { icon: Briefcase, title: "Business Insurance", examples: ["Small business cover", "Public liability quote"], description: "Handles commercial insurance" },
              { icon: Umbrella, title: "Life Insurance", examples: ["Life cover quote", "Critical illness cover"], description: "Provides life insurance options" },
              { icon: Shield, title: "Claims Guidance", examples: ["How do I make a claim?", "Claim status check"], description: "Guides through claims process" },
              { icon: FileText, title: "Policy Questions", examples: ["What does my policy cover?", "Renewal questions"], description: "Answers policy queries" }
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
              { icon: Calendar, title: "Renewal Reminders", examples: ["Your policy renews next month", "Time to review cover"], description: "Increases retention" },
              { icon: MessageSquare, title: "Quote Follow-ups", examples: ["Still interested in the quote?", "Any questions about cover?"], description: "Converts more quotes" },
              { icon: TrendingUp, title: "Policy Reviews", examples: ["Annual review time", "Check your coverage"], description: "Proactive client care" },
              { icon: Mail, title: "Market Updates", examples: ["New products available", "Rate changes"], description: "Adds value" },
              { icon: Star, title: "Feedback Surveys", examples: ["Rate your experience", "How can we improve?"], description: "Improves service" },
              { icon: Award, title: "Referral Requests", examples: ["Know someone who needs cover?", "Refer a friend"], description: "Grows business" }
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
              Why Insurance Brokers Choose Pura AI
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by brokers placing over £500M in premiums annually
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Clock, title: "24/7 Quote Capture", description: "Never miss a quote request, day or night", color: "from-blue-500 to-cyan-500" },
              { icon: TrendingUp, title: "Increase Conversion", description: "Respond first, win more business", color: "from-cyan-500 to-blue-500" },
              { icon: Users, title: "Reduce Admin", description: "Free up brokers to advise", color: "from-blue-500 to-cyan-500" },
              { icon: Award, title: "Better Service", description: "Always professional and responsive", color: "from-cyan-500 to-blue-500" }
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
                <Umbrella className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-neutral-950 mb-6">
                Ready to Sell More Policies?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join a growing list of insurance brokers capturing every quote and winning more business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
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

export default Insurance;