// src/pages/Industry/GPPractices.jsx
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
  Stethoscope,
  Heart,
  Pill,
  Syringe,
  Ambulance,
  Microscope,
  Activity,
  Star,
  Award,
  FileText,
  Mail,
  UserCheck,
  AlertCircle,
  Play,
  Youtube
} from "lucide-react";

const GPPractices = () => {
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
      {/* Hero Section - Inspired by Hero04 */}
<section className="relative min-h-screen flex items-center bg-white overflow-hidden lg:pt-35 pt-35 pb-24">
  {/* Background elements */}
  <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/30 -skew-x-12 translate-x-32 z-0 hidden lg:block" />
  
  {/* Floating medical icons background */}
  <div className="absolute inset-0 pointer-events-none opacity-5">
    <div className="absolute top-20 left-10">
      <Stethoscope className="w-32 h-32 text-emerald-600" />
    </div>
    <div className="absolute bottom-20 right-10">
      <Heart className="w-40 h-40 text-emerald-600" />
    </div>
    <div className="absolute top-1/3 right-1/4">
      <Pill className="w-24 h-24 text-emerald-600" />
    </div>
  </div>

  <div className="container px-4 mx-auto relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-20">
      {/* Content Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-8">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-emerald-200 border-2 border-white flex items-center justify-center">
                <span className="text-[10px] font-bold text-emerald-700">{i}</span>
              </div>
            ))}
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">Trusted by 500+ UK GP Practices</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-heading font-black mb-8 tracking-tighter leading-[0.9] text-neutral-950"
        >
          Transform Your
          <span className="text-emerald-600 italic block">GP Practice</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed text-gray-600"
        >
          AI voice agents that handle appointments, prescriptions, and patient enquiries 24/7
          — reducing phone pressure on your reception team and improving patient experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
        >
          <button className="w-full sm:w-auto h-16 px-10 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-700 transition-all shadow-xl text-xs uppercase tracking-widest gap-3 flex items-center justify-center">
            Start Your Journey
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="w-full sm:w-auto h-16 px-10 bg-transparent border border-gray-200 text-gray-700 font-black rounded-2xl hover:bg-gray-50 transition-all text-xs uppercase tracking-widest gap-3 flex items-center justify-center group">
            <Youtube className="w-5 h-5 text-red-500" />
            Watch Demo
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex items-center justify-center lg:justify-start gap-8"
        >
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-neutral-950">4.9/5</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-emerald-400 text-emerald-400" />
              ))}
            </div>
          </div>
          <div className="w-px h-10 bg-gray-200" />
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 leading-tight">
            Patient <br /> Satisfaction
          </p>
        </motion.div>
      </div>

      {/* Image/Visual Section */}
      <div className="lg:w-1/2 relative">
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white"
        >
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3"
            alt="GP Practice Dashboard"
            className="w-full h-auto"
          />
          {/* Overlay Glass Badge */}
          <div className="absolute bottom-8 left-8 p-6 bg-white/90 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl max-w-[220px]">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center mb-4">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <p className="text-gray-800 text-xs font-medium leading-relaxed">
              "Reduced reception call volume by 40% in just 2 weeks"
            </p>
            <p className="text-emerald-600 text-xs font-bold mt-2">— NHS GP Practice, Manchester</p>
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-[80px] -z-10"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-100/30 rounded-full blur-[100px] -z-10"
        />
      </div>
    </div>
  </div>
</section>

      {/* Stats Bar */}
      <section className="py-12 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "GP Practices", icon: Stethoscope },
              { value: "98%", label: "Call Answer Rate", icon: Phone },
              { value: "40%", label: "Less Admin Time", icon: Clock },
              { value: "24/7", label: "Patient Support", icon: Heart }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <stat.icon className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-black text-neutral-950">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
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
        The Challenges GP Practices Face
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
        Overwhelmed reception teams and frustrated patients
      </p>
    </motion.div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {[
        { icon: Phone, title: "High Call Volume", amount: "200+", description: "daily calls overwhelming reception staff", color: "from-emerald-500 to-green-500" },
        { icon: Clock, title: "Long Wait Times", amount: "15min", description: "average patient wait on hold", color: "from-green-500 to-emerald-500" },
        { icon: Users, title: "Staff Burnout", amount: "60%", description: "of receptionists report high stress levels", color: "from-emerald-500 to-teal-500" },
        { icon: AlertCircle, title: "After-Hours Loss", amount: "30%", description: "of calls go unanswered after 6pm", color: "from-teal-500 to-emerald-500" }
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
        { step: "01", title: "Call Comes In", icon: Phone, desc: "AI answers instantly with a professional, friendly voice", color: "from-emerald-500 to-green-500" },
        { step: "02", title: "Identifies Need", icon: MessageSquare, desc: "Determines if it's appointment, prescription, or enquiry", color: "from-green-500 to-emerald-500" },
        { step: "03", title: "Books Appointment", icon: Calendar, desc: "Schedules into your system, prioritises urgent cases", color: "from-emerald-500 to-teal-500" },
        { step: "04", title: "Patient Cared For", icon: Heart, desc: "Instant confirmation, follow-up if needed", color: "from-teal-500 to-emerald-500" }
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
            <p className="text-lg sm:text-xl text-gray-600">Real conversation with our AI assistant</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gray-900 px-6 py-4 flex items-center gap-3 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-emerald-400 text-sm">NHS GP Assistant • Live Call</div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 bg-blue-500/10 rounded-2xl p-4 border border-blue-500/30">
                  <div className="font-bold text-blue-400 mb-1">Patient:</div>
                  <div className="text-gray-300">"Hello, I need to book an appointment with Dr. Smith. I've been feeling unwell for a few days."</div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 bg-emerald-500/10 rounded-2xl p-4 border border-emerald-500/30">
                  <div className="font-bold text-emerald-400 mb-1">AI Assistant:</div>
                  <div className="text-gray-300">"I can help with that. Let me check Dr. Smith's availability. Do you need an urgent appointment or routine check-up?"</div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 bg-blue-500/10 rounded-2xl p-4 border border-blue-500/30">
                  <div className="font-bold text-blue-400 mb-1">Patient:</div>
                  <div className="text-gray-300">"It's not an emergency, but I'd like to be seen this week if possible."</div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 bg-emerald-500/10 rounded-2xl p-4 border border-emerald-500/30">
                  <div className="font-bold text-emerald-400 mb-1">AI Assistant:</div>
                  <div className="text-gray-300">"Dr. Smith has availability this Thursday at 10 AM and Friday at 2 PM. Which works best for you?"</div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-lg text-xs font-medium">✓ Appointment booked</span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-xs font-medium">✓ SMS confirmation sent</span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-500/20 text-purple-400 rounded-lg text-xs font-medium">✓ Added to calendar</span>
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
              Comprehensive Patient Support
            </h2>
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveTab('inbound')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'inbound' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                Inbound Calls
              </button>
              <button
                onClick={() => setActiveTab('outbound')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'outbound' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
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
              { icon: Calendar, title: "Appointment Booking", examples: ["I need to book an appointment", "Can I see Dr. Smith?"], description: "Checks availability and schedules appointments" },
              { icon: Pill, title: "Prescription Requests", examples: ["How do I get a repeat prescription?", "I need my medication refilled"], description: "Verifies details and processes requests securely" },
              { icon: Clock, title: "Opening Hours", examples: ["What are your opening hours?", "Do you offer evening appointments?"], description: "Provides practice hours and services" },
              { icon: Activity, title: "Symptom Checks", examples: ["My child has a rash", "I have a persistent cough"], description: "Gathers details and books appropriate appointments" },
              { icon: Stethoscope, title: "Test Results", examples: ["Are my test results ready?", "Can I get my blood test results?"], description: "Routes to clinical team for review" },
              { icon: Ambulance, title: "Emergency Guidance", examples: ["This is an emergency", "What should I do?"], description: "Provides urgent care guidance and directs appropriately" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950 mb-3">{feature.title}</h3>
                <ul className="space-y-2 mb-4">
                  {feature.examples.map((example, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
                      <span className="flex-1">"{example}"</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-sm border-t border-gray-100 pt-3">{feature.description}</p>
              </motion.div>
            )) : [
              { icon: Calendar, title: "Appointment Reminders", examples: ["Your check-up is tomorrow", "Need to reschedule?"], description: "Reduces no-shows by 25%" },
              { icon: MessageSquare, title: "Follow-up Calls", examples: ["How are you feeling?", "Any side effects from medication?"], description: "Post-appointment patient care" },
              { icon: Syringe, title: "Vaccination Campaigns", examples: ["Flu jab appointments available", "COVID booster booking"], description: "Proactive patient outreach" },
              { icon: FileText, title: "Health Screenings", examples: ["Time for cervical screening", "NHS health check reminder"], description: "Encourages preventative care" },
              { icon: Mail, title: "Feedback Surveys", examples: ["How was your experience?", "Rate your consultation"], description: "Collects valuable patient feedback" },
              { icon: Shield, title: "Recall Notices", examples: ["Annual review due", "Medication review reminder"], description: "Keeps patients engaged" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950 mb-3">{feature.title}</h3>
                <ul className="space-y-2 mb-4">
                  {feature.examples.map((example, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
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
        Why NHS GP Practices Choose Pura AI
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
        Trusted by practices across the UK
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { icon: Shield, title: "NHS Compliant", description: "Fully compliant with NHS data security standards", color: "from-emerald-500 to-green-500" },
        { icon: Clock, title: "24/7 Availability", description: "Patients can book appointments anytime", color: "from-green-500 to-emerald-500" },
        { icon: Users, title: "Reduce Staff Burnout", description: "Free up receptionists for patient care", color: "from-emerald-500 to-teal-500" },
        { icon: TrendingUp, title: "Proven Results", description: "40% less admin time, 25% fewer no-shows", color: "from-teal-500 to-emerald-500" }
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
      <section className="py-24 bg-emerald-50/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl mx-auto text-center"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Stethoscope className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-neutral-950 mb-6">
                Ready to Transform Your Practice?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join 500+ GP practices improving patient care and reducing admin burden
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300">
                  Contact NHS Team
                </button>
              </div>
              <p className="text-gray-500 mt-8 text-sm flex flex-wrap justify-center gap-x-2 gap-y-1">
                <span>NHS-approved</span>
                <span className="text-gray-400">•</span>
                <span>GDPR compliant</span>
                <span className="text-gray-400">•</span>
                <span>14-day free trial</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GPPractices;