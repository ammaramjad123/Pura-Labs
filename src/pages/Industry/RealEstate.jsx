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
{/* Hero Section */}
<section className="relative min-h-screen flex items-center bg-white overflow-hidden lg:pt-35 pt-35 pb-24">
  {/* Background elements */}
  <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/30 -skew-x-12 translate-x-32 z-0 hidden lg:block" />
  
  {/* Floating icons background */}
  <div className="absolute inset-0 pointer-events-none opacity-5">
    <div className="absolute top-20 left-10">
      <Home className="w-32 h-32 text-blue-600" />
    </div>
  </div>

  <div className="container px-4 mx-auto relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      
      {/* Content Section - LEFT SIDE */}
      <div className="relative z-20 flex-1 text-center lg:text-left">
        
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-8">
          <Sparkles className="w-3 h-3 text-blue-600" />
          <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">
            Real Estate AI
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-heading font-black mb-8 tracking-tighter leading-[0.9] text-neutral-950"
        >
          Capture Every
          <span className="text-blue-600 italic block">Property Lead</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed text-gray-600"
        >
          AI voice agents that capture every enquiry, book viewings, and schedule valuations automatically — ensuring your agency never misses a property opportunity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
        >
          <Link to="/contact">
            <button className="w-full sm:w-auto h-16 px-10 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl text-xs uppercase tracking-widest gap-3 flex items-center justify-center">
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
<section className="py-12 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        { value: "100%", label: "Calls Answered", icon: Building2 },
        { value: "100", label: "Call Answered Simultaneously", icon: Phone },
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
          <h3 className="text-lg md:text-xl font-bold text-neutral-950 mb-2">{item.title}</h3>
          <div className="text-2xl md:text-3xl font-black text-neutral-950 mb-2">{item.amount}</div>
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
               <Link to="/contact">
                <button className="group bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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