// src/pages/Industry/LawFirms.jsx
import React, { useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Scale, 
  Phone, 
  Calendar, 
  MessageSquare, 
  Shield, 
  TrendingUp, 
  Clock, 
  Users,
  ArrowRight,
  CheckCircle,
  Play,
  BarChart3,
  Mail,
  Zap,
  Headphones,
  Briefcase,
  Gavel,
  FileText,
  Star,
  ChevronRight
} from 'lucide-react';

const LawFirms = () => {
  const [activeTab, setActiveTab] = useState('inbound');
  const [hoveredCard, setHoveredCard] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
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

  const scaleOnHover = {
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  return (
    <div className="bg-white overflow-hidden">
    
{/* Hero Section */}
<section className="relative min-h-screen flex items-center bg-white overflow-hidden lg:pt-35 pt-35 pb-24">
  {/* Background elements */}
  <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-50/30 -skew-x-12 translate-x-32 z-0 hidden lg:block" />
  
  {/* Floating medical icons background */}
  <div className="absolute inset-0 pointer-events-none opacity-5">
    <div className="absolute top-20 left-10">
      <Gavel className="w-32 h-32 text-purple-600" />
    </div>
  </div>

  <div className="container px-4 mx-auto relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      
      {/* Content Section - LEFT SIDE */}
      <div className="relative z-20 flex-1 text-center lg:text-left">
        
        <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-2 mb-8">
          <Gavel className="w-3 h-3 text-purple-600" />
          <span className="text-[10px] font-black uppercase tracking-widest text-purple-700">
            Trusted by Top UK Law Firms
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-heading font-black mb-8 tracking-tighter leading-[0.9] text-neutral-950"
        >
          Transform Your
          <span className="text-purple-600 italic block">Law Firm</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed text-gray-600"
        >
          AI voice agents that answer every call, capture opportunities, and book consultations automatically ensuring your law firm never loses revenue to missed calls.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
        >
          <Link to="/contact">
            <button className="w-full sm:w-auto h-16 px-10 bg-purple-600 text-white font-black rounded-2xl hover:bg-purple-700 transition-all shadow-xl text-xs uppercase tracking-widest gap-3 flex items-center justify-center">
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
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
                    className="absolute rounded-full border-2 border-purple-400/40"
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
                className="absolute inset-0 rounded-full bg-purple-500/20"
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
                    className="w-1 bg-purple-500 rounded-full"
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
      <div className="w-1 h-2 bg-purple-600 rounded-full mt-2 animate-pulse" />
    </div>
  </div>
</section>

{/* Stats Bar */}
<section className="py-12 bg-purple-50">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        { value: "100%", label: "Call Answer Rate", icon: Phone },
        { value: "45%", label: "Time Savings", icon: Clock },
        { value: "30%", label: "More Bookings", icon: Calendar },
        { value: "24/7", label: "Always Available", icon: Shield }
      ].map((stat, idx) => (
        <div key={idx} className="text-center">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
            <stat.icon className="w-5 h-5 text-purple-600" />
          </div>
          <div className="text-2xl md:text-3xl font-black text-neutral-950">{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Problem Statement Section */}
<section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-center mb-12 sm:mb-16"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 mb-3 sm:mb-4 px-4 font-heading">
        The Challenge Law Firms Face
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
        Missed calls cost UK law firms millions in lost revenue annually
      </p>
    </motion.div>

    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {[
        {
          icon: Phone,
          title: "Missed Revenue",
          description: "Every unanswered call is a potential client going to your competitor",
          color: "from-red-500 to-orange-500"
        },
        {
          icon: Users,
          title: "Staff Burnout",
          description: "Receptionists overwhelmed with routine enquiries, unable to focus on billable work",
          color: "from-purple-500 to-pink-500"
        },
        {
          icon: Clock,
          title: "After-Hours Loss",
          description: "60% of legal enquiries come outside office hours and go unanswered",
          color: "from-blue-500 to-cyan-500"
        },
        {
          icon: MessageSquare,
          title: "Poor Experience",
          description: "Clients expect instant responses, not voicemail or busy tones",
          color: "from-green-500 to-emerald-500"
        }
      ].map((problem, idx) => (
        <motion.div
          key={idx}
          variants={fadeInUp}
          whileHover={{ y: -8, scale: 1.02 }}
          className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
          onMouseEnter={() => setHoveredCard(idx)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className={`bg-gradient-to-r ${problem.color} w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6`}>
            <problem.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
            {problem.title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {problem.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

     {/* Interactive Call Flow Section */}
<section className="py-24 bg-white relative overflow-hidden">
  <div className="container mx-auto px-4">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-neutral-950 font-heading mb-4">
        How Pura Labs Agents Handle Your Calls
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Watch how our AI agent professionally manages a legal enquiry
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-6 md:p-8 shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">AI Agent</div>
              <div className="text-sm text-gray-500">Virtual Receptionist</div>
            </div>
          </div>

          <div className="space-y-4">
            <motion.div 
              className="bg-white rounded-2xl p-4 shadow"
              whileHover={{ x: 10 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">Caller: "I need to speak with a solicitor about a family matter"</div>
                  <div className="text-sm text-gray-500 mt-1">Incoming call - 2:34 PM</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-purple-50 rounded-2xl p-4 shadow ml-4 md:ml-8"
              whileHover={{ x: 10 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">AI: "I understand. Let me help you schedule a consultation with our family law specialist. Could you please provide your name and briefly describe your situation?"</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-4 shadow"
              whileHover={{ x: 10 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">AI: "I've booked your consultation for Wednesday at 10 AM with Sarah Mitchell. You'll receive confirmation details via email and SMS."</div>
                  {/* Enhanced confirmation items with better styling */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-xs sm:text-sm font-medium">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Consultation booked
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-xs sm:text-sm font-medium">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Email sent
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-lg text-xs sm:text-sm font-medium">
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Calendar updated
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        {/* Enhanced Intelligent Call Handling Card */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 md:p-8 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Intelligent Call Handling</h3>
          <p className="text-purple-100 mb-6 text-base md:text-lg leading-relaxed">
            Our AI agent understands legal terminology, qualifies leads, and books consultations seamlessly
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-sm">
              <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
              <span className="text-sm md:text-base font-medium">Lead qualification</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-sm">
              <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
              <span className="text-sm md:text-base font-medium">Urgent call routing</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-sm">
              <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
              <span className="text-sm md:text-base font-medium">SRA compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2.5 backdrop-blur-sm">
              <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
              <span className="text-sm md:text-base font-medium">GDPR ready</span>
            </div>
          </div>
        </div>

        
       
      </motion.div>
    </div>
  </div>
</section>

      {/* Features Tab Section */}
<section className="py-24 bg-gradient-to-b from-gray-50 to-white">
  <div className="container mx-auto px-4">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-center mb-12"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-neutral-950 font-heading mb-4">
        Comprehensive Call Management
      </h2>
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setActiveTab('inbound')}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'inbound' ? 'bg-purple-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          Inbound Calls
        </button>
        <button
          onClick={() => setActiveTab('outbound')}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'outbound' ? 'bg-purple-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
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
        {
          icon: MessageSquare,
          title: "Service Enquiries",
          examples: ["What areas of law do you specialise in?", "Do you handle family law cases?"],
          description: "AI explains practice areas and services"
        },
        {
          icon: Calendar,
          title: "Consultation Bookings",
          examples: ["I'd like to speak with a solicitor about my situation", "Book an initial consultation"],
          description: "Gathers case details and schedules appointments"
        },
        {
          icon: FileText,
          title: "Fee Transparency",
          examples: ["How much does an initial consultation cost?", "What are your fixed fees?"],
          description: "Provides pricing information or arranges callbacks"
        },
        {
          icon: Users,
          title: "Existing Client Queries",
          examples: ["I'm calling about my case", "Need an update on my file"],
          description: "Routes to appropriate department or team member"
        },
        {
          icon: Zap,
          title: "Urgent Matters",
          examples: ["I need legal help immediately", "This is an emergency"],
          description: "Prioritizes and escalates to designated staff"
        },
        {
          icon: Scale,
          title: "Lead Qualification",
          examples: ["Collects case details", "Assesses urgency and value"],
          description: "Captures key information for better qualification"
        }
      ].map((feature, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <feature.icon className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
          <ul className="space-y-3 mb-4">
            {feature.examples.map((example, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0" />
                <span className="flex-1">"{example}"</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-500 text-sm border-t border-gray-100 pt-3 mt-1">{feature.description}</p>
        </motion.div>
      )) : [
        {
          icon: MessageSquare,
          title: "Lead Follow-ups",
          examples: ["Regarding your enquiry about wills and probate...", "Following up on your consultation request"],
          description: "Nurtures leads and answers follow-up questions"
        },
        {
          icon: Calendar,
          title: "Appointment Reminders",
          examples: ["Your consultation is tomorrow at 10 AM", "Need to reschedule?"],
          description: "Reduces no-shows with automated reminders"
        },
        {
          icon: Star,
          title: "Client Feedback",
          examples: ["How would you rate our service?", "What could we improve?"],
          description: "Collects valuable feedback and testimonials"
        },
        {
          icon: TrendingUp,
          title: "Nurturing Campaigns",
          examples: ["Based on your interest in GDPR compliance...", "Would you like details on our services?"],
          description: "Converts prospects into clients"
        },
        {
          icon: Mail,
          title: "Payment Reminders",
          examples: ["Follow-up on outstanding invoice", "Payment options available"],
          description: "Professional payment collection"
        },
        {
          icon: Shield,
          title: "Compliance Checks",
          examples: ["Review of your file", "Document submission reminder"],
          description: "Maintains regulatory compliance"
        }
      ].map((feature, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <feature.icon className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
          <ul className="space-y-3 mb-4">
            {feature.examples.map((example, i) => (
              <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0" />
                <span className="flex-1">"{example}"</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-500 text-sm border-t border-gray-100 pt-3 mt-1">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

     {/* Why Choose Us Section */}
<section className="py-24 bg-white relative overflow-hidden">
  {/* Subtle purple accent elements */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-30" />
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-30" />
  
  <div className="container mx-auto px-4 relative z-10">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-shadow-neutral-950 font-heading mb-4">
        Why Leading Law Firms choose Pura Labs
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        Trusted by solicitors and legal practices across the UK
      </p>
    </motion.div>

    <motion.div 
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {[
        {
          icon: Scale,
          title: "SRA Compliant",
          description: "Designed to support firms operating under Solicitors Regulation Authority standards",
          color: "from-amber-500 to-orange-500"
        },
        {
          icon: Shield,
          title: "GDPR Ready",
          description: "Follows best practices for handling personal data with full encryption",
          color: "from-emerald-500 to-teal-500"
        },
        {
          icon: Clock,
          title: "24/7 Availability",
          description: "Capture enquiries outside office hours that would otherwise be lost",
          color: "from-blue-500 to-cyan-500"
        },
        {
          icon: TrendingUp,
          title: "Improved Results",
          description: "More meetings, More revenue, Time saved",
          color: "from-purple-500 to-pink-500"
        }
      ].map((reason, idx) => (
        <motion.div
          key={idx}
          variants={fadeInUp}
          whileHover={{ y: -8, scale: 1.02 }}
          className="bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 shadow-lg"
        >
          <div className={`bg-gradient-to-br ${reason.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
            <reason.icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


{/* CTA Section */}
<section className="py-24 bg-purple-50/80">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative max-w-4xl mx-auto text-center"
    >
      <div className="bg-white rounded-3xl p-8 md:p-12">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Scale className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-neutral-950 mb-6">
          Ready to Transform Your Law Firm?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Improve client outcomes and reduce admin workload in your law firm by joining Pura Labs today
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
             <Link to="/contact">
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300 cursor-pointer">
            Contact Sales
          </button>
             </Link>
        </div>
        
      </div>
    </motion.div>
  </div>
</section>
     
    </div>
  );
};

export default LawFirms;