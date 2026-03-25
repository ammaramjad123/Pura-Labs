// src/pages/Industry/DentalPractices.jsx
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
  Activity,
  Zap,
  Headphones,
  Smile,
  Sparkles,
  Syringe,
  Pill,
  Ambulance,
  Star,
  Award,
  FileText,
  Mail,
  Youtube,
  AlertTriangle,
  Stethoscope,
  Orbit,
  Play
} from "lucide-react";

const DentalPractices = () => {
  const [activeTab, setActiveTab] = useState('inbound');

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-white overflow-hidden">
   {/* Hero Section - Inspired by Hero07 */}
<section className="relative w-full min-h-[90vh] bg-white overflow-hidden flex items-center justify-center pt-38 sm:pt-42 pb-20 px-6">
  {/* Ambient Background */}
  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
  
  {/* Floating Orbs */}
  <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[160px] pointer-events-none opacity-40 animate-pulse" />
  <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none opacity-30" />

  {/* Orbiting Elements Decoration */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-blue-200/50 rounded-full"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] border border-cyan-200/30 rounded-full"
    />
  </div>

  <div className="max-w-7xl mx-auto w-full relative z-10">
    <div className="flex flex-col items-center text-center space-y-10">
      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 rounded-full px-6 py-2 bg-blue-50 border border-blue-200 backdrop-blur-xl">
          <Orbit className="w-4 h-4 text-blue-500 animate-spin-slow" style={{ animation: 'spin 3s linear infinite' }} />
          <span className="font-black uppercase tracking-widest text-[10px] text-blue-700">Dental AI v2.0 is Live</span>
        </div>
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter text-neutral-950 leading-[1.2]"
      >
        Pe<span className="tracking-normal">rf</span>ect Your
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 italic inline-block pr-0 sm:pr-4">
          Patient Experience
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl text-lg md:text-xl text-gray-600 font-medium leading-relaxed"
      >
        AI voice agents that handle appointments, treatment enquiries, and patient reminders
        — ensuring every patient gets the care they need, when they need it.
      </motion.p>

      {/* CTA Group */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-6 pt-4 w-full sm:w-auto"
      >
        <button className="group h-16 px-12 rounded-[2rem] bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-black text-lg shadow-2xl shadow-blue-500/30 hover:scale-[1.05] transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-center">
          Start Building Now
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
        <button className="h-16 px-10 rounded-[2rem] border border-gray-200 bg-white/50 backdrop-blur-xl font-black text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-3 w-full sm:w-auto text-center">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <Play className="w-4 h-4 text-blue-600 fill-blue-600" />
          </div>
          Watch Demo
        </button>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 pt-12 pb-6"
      >
        <div className="flex items-center gap-2 font-black italic text-xl tracking-tighter text-gray-900">
          <Smile className="w-6 h-6 text-blue-600" /> 500+ PRACTICES
        </div>
        <div className="flex items-center gap-2 font-black italic text-xl tracking-tighter text-gray-900">
          <Star className="w-6 h-6 text-blue-600" /> 4.9/5 RATING
        </div>
        <div className="flex items-center gap-2 font-black italic text-xl tracking-tighter text-gray-900">
          <Shield className="w-6 h-6 text-blue-600" /> GDC COMPLIANT
        </div>
        <div className="flex items-center gap-2 font-black italic text-xl tracking-tighter text-gray-900">
          <Users className="w-6 h-6 text-blue-600" /> 24/7 SUPPORT
        </div>
      </motion.div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-2 sm:bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
      <div className="w-1 h-2 bg-blue-500 rounded-full mt-2 animate-pulse" />
    </div>
  </div>

  {/* Bottom Glass Edge */}
  <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white/80 to-transparent pointer-events-none z-0" />
</section>

      {/* Stats Bar */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Dental Practices", icon: Smile },
              { value: "100%", label: "Call Answer Rate", icon: Phone },
              { value: "40%", label: "Less Admin Time", icon: Clock },
              { value: "24/7", label: "Emergency Support", icon: Activity }
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
              The Challenges Dental Practices Face
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Busy reception teams and patients needing immediate care
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Phone, title: "High Call Volume", amount: "150+", description: "daily calls during peak hours", color: "from-blue-500 to-cyan-500" },
              { icon: Clock, title: "After-Hours Calls", amount: "35%", description: "of calls come outside normal hours", color: "from-cyan-500 to-blue-500" },
              { icon: Users, title: "Staff Burnout", amount: "55%", description: "of receptionists report high stress", color: "from-blue-500 to-cyan-500" },
              { icon: AlertTriangle, title: "Emergency Loss", amount: "30%", description: "of emergency calls go to competitors", color: "from-cyan-500 to-blue-500" }
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
              From patient call to appointment booked in minutes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "01", title: "Call Comes In", icon: Phone, desc: "AI answers instantly with a friendly, professional voice", color: "from-blue-500 to-cyan-500" },
              { step: "02", title: "Identifies Need", icon: MessageSquare, desc: "Determines if it's routine, urgent, or emergency", color: "from-cyan-500 to-blue-500" },
              { step: "03", title: "Books Appointment", icon: Calendar, desc: "Schedules based on urgency, prioritises emergencies", color: "from-blue-500 to-cyan-500" },
              { step: "04", title: "Patient Cared For", icon: Smile, desc: "Instant confirmation, treatment advice if needed", color: "from-cyan-500 to-blue-500" }
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
            <p className="text-lg sm:text-xl text-gray-600">Real conversation with our AI dental assistant</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
          >
            <div className="bg-gray-50 px-6 py-4 flex items-center gap-3 border-b border-gray-200">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="text-blue-600 text-sm font-medium">Dental AI Assistant • Live Call</div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 bg-blue-50 rounded-2xl p-4">
                  <div className="font-semibold text-blue-800 mb-1 text-sm">Patient:</div>
                  <p className="text-gray-700 text-sm leading-relaxed">"I've got a severe toothache. Can I get an emergency appointment today?"</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-cyan-600" />
                </div>
                <div className="flex-1 bg-cyan-50 rounded-2xl p-4">
                  <div className="font-semibold text-cyan-800 mb-1 text-sm">AI Assistant:</div>
                  <p className="text-gray-700 text-sm leading-relaxed">"I understand. Let me check our emergency availability. Do you have any swelling or fever?"</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 bg-blue-50 rounded-2xl p-4">
                  <div className="font-semibold text-blue-800 mb-1 text-sm">Patient:</div>
                  <p className="text-gray-700 text-sm leading-relaxed">"Yes, my cheek is slightly swollen."</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-cyan-600" />
                </div>
                <div className="flex-1 bg-cyan-50 rounded-2xl p-4">
                  <div className="font-semibold text-cyan-800 mb-1 text-sm">AI Assistant:</div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">"Based on your symptoms, I've booked an emergency appointment with Dr. Williams in 1 hour. Please come in immediately. Take over-the-counter pain relief if needed."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Emergency booked
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Dentist notified
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Instructions sent
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
              Comprehensive Dental Care Support
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
              { icon: Calendar, title: "Appointment Booking", examples: ["I need to book a check-up", "Can I schedule a cleaning?"], description: "Checks availability and schedules appointments" },
              { icon: Sparkles, title: "Treatment Enquiries", examples: ["How much is teeth whitening?", "Tell me about veneers"], description: "Provides treatment information and pricing" },
              { icon: Clock, title: "Opening Hours", examples: ["What are your hours?", "Do you offer evening appointments?"], description: "Provides practice hours and emergency contacts" },
              { icon: AlertTriangle, title: "Dental Emergencies", examples: ["I have a broken tooth", "Severe toothache"], description: "Assesses urgency and books emergency appointments" },
              { icon: Activity, title: "Hygiene Advice", examples: ["How often should I floss?", "Best electric toothbrush?"], description: "Offers basic dental care tips" },
              { icon: Ambulance, title: "Emergency Guidance", examples: ["What to do for a knocked-out tooth?", "I'm bleeding after extraction"], description: "Provides first aid instructions" }
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
              { icon: Calendar, title: "Recall Reminders", examples: ["Six-month check-up due", "Time for hygiene visit"], description: "Reduces no-shows by 25%" },
              { icon: MessageSquare, title: "Post-Procedure Follow-ups", examples: ["How's your recovery?", "Any issues after filling?"], description: "Ensures proper healing" },
              { icon: Syringe, title: "Treatment Reminders", examples: ["Root canal follow-up", "Crown fitting appointment"], description: "Keeps treatments on track" },
              { icon: Smile, title: "Promotions & Offers", examples: ["Discount on teeth whitening", "New patient offer"], description: "Drives patient engagement" },
              { icon: Mail, title: "Feedback Surveys", examples: ["Rate your experience", "How was your visit?"], description: "Collects valuable feedback" },
              { icon: Shield, title: "Treatment Plan Reminders", examples: ["Orthodontic adjustment due", "Denture fitting reminder"], description: "Keeps patients compliant" }
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
              Why Dental Practices Choose Pura AI
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by practices caring for smiles across the UK
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Smile, title: "Better Patient Experience", description: "24/7 availability for all dental needs", color: "from-blue-500 to-cyan-500" },
              { icon: Clock, title: "Reduce Reception Load", description: "Free up staff for clinical care", color: "from-cyan-500 to-blue-500" },
              { icon: TrendingUp, title: "Increase Bookings", description: "Capture more appointments and reduce no-shows", color: "from-blue-500 to-cyan-500" },
              { icon: Award, title: "Professional Image", description: "Always sound professional and caring", color: "from-cyan-500 to-blue-500" }
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl mx-auto text-center"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Smile className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-neutral-950 mb-6">
                Ready to Transform Your Dental Practice?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join 500+ dental practices improving patient care and reducing admin burden
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300">
                  Contact Our Team
                </button>
              </div>
              <p className="text-gray-500 mt-8 text-sm flex flex-wrap justify-center gap-x-2 gap-y-1">
                <span>GDC compliant</span>
                <span className="text-gray-400">•</span>
                <span>GDPR compliant</span>
                <span className="text-gray-400">•</span>
                <span>14-day free trial</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent" />

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default DentalPractices;