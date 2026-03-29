// src/pages/Industry/VeterinaryClinics.jsx
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
  PawPrint,
  Heart,
  Syringe,
  Pill,
  Ambulance,
  Star,
  Award,
  FileText,
  Mail,
  Dog,
  Cat,
  Youtube,
  AlertTriangle
} from "lucide-react";

const VeterinaryClinics = () => {
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
      <div className="relative w-full">
        <div className="relative z-10 container mx-auto px-4 pt-40 lg:pt-41 pb-20 lg:pb-24">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 backdrop-blur-2xl mb-8"
            >
              <Zap className="w-3.5 h-3.5 text-purple-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-700">
                Veterinary AI
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-black text-neutral-950 tracking-tighter leading-[0.85]"
            >
              Caring for Pets
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 block mt-4 tracking-wider">
                24<span className="tracking-wider">/</span>7
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-neutral-600 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-medium tracking-tight leading-relaxed mt-8 mb-10 px-4"
            >
              AI voice agents that handle appointments, prescription requests, and emergency calls, ensuring every concerned pet owner gets immediate help, day or night.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact">
              <button className="group h-14 sm:h-16 px-6 sm:px-10 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl shadow-purple-500/20 flex items-center gap-2 cursor-pointer">
                Start Your Journey
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              </Link>
              <button className="h-14 sm:h-16 px-6 sm:px-10 rounded-2xl bg-gray-100 border border-gray-200 text-gray-700 font-black uppercase tracking-widest text-xs hover:bg-gray-200 transition-all">
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-20 w-full max-w-4xl"
            >
              {[
                { value: "45%", label: "Time Saving" },
                { value: "100%", label: "Call Answer Rate" },
                { value: "40%", label: "Less Admin Time" },
                { value: "24/7", label: "Emergency Support" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-950 tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-neutral-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-purple-500 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-neutral-950 mb-4">
              The Challenges Veterinary Clinics Face
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
              Concerned pet owners need immediate help, especially during emergencies
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Phone, title: "High Call Volume", amount: "150+", description: "daily calls during peak hours", color: "from-purple-500 to-pink-500" },
              { icon: Clock, title: "After-Hours Calls", amount: "35%", description: "of calls come outside normal hours", color: "from-pink-500 to-purple-500" },
              { icon: Users, title: "Staff Burnout", amount: "55%", description: "of vets report high stress levels", color: "from-purple-500 to-pink-500" },
              { icon: AlertTriangle, title: "Emergency Loss", amount: "30%", description: "of emergency calls go to competitors", color: "from-pink-500 to-purple-500" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 shadow-lg"
              >
                <div className={`bg-gradient-to-r ${item.color} w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-4 md:mb-6`}>
                  <item.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-black text-neutral-950 mb-2">{item.amount}</div>
                <h3 className="text-lg md:text-xl font-bold text-neutral-950 mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-neutral-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white border-t border-gray-200">
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
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto">
              From concerned call to scheduled appointment in minutes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: "01", title: "Call Comes In", icon: Phone, desc: "AI answers instantly with a caring, professional voice", color: "from-purple-500 to-pink-500" },
              { step: "02", title: "Assesses Urgency", icon: MessageSquare, desc: "Determines if it's routine, urgent, or emergency", color: "from-pink-500 to-purple-500" },
              { step: "03", title: "Books Appointment", icon: Calendar, desc: "Schedules based on urgency, prioritizes emergencies", color: "from-purple-500 to-pink-500" },
              { step: "04", title: "Pet Cared For", icon: Heart, desc: "Instant confirmation, emergency guidance if needed", color: "from-pink-500 to-purple-500" }
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
                <p className="text-sm md:text-base text-neutral-600 px-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
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
            <p className="text-lg sm:text-xl text-neutral-600">Real conversation with our AI veterinary assistant</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200"
          >
            <div className="bg-gray-50 px-6 py-4 flex items-center gap-3 border-b border-gray-200">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-purple-600 text-sm font-medium">Veterinary AI Assistant • Live Call</div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 bg-blue-50 rounded-2xl p-4 border border-blue-100">
                  <div className="font-semibold text-blue-800 mb-1 text-sm">Pet Owner:</div>
                  <p className="text-neutral-700 text-sm leading-relaxed">"My dog has been vomiting and seems lethargic. Should I bring him in?"</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1 bg-purple-50 rounded-2xl p-4 border border-purple-100">
                  <div className="font-semibold text-purple-800 mb-1 text-sm">AI Assistant:</div>
                  <p className="text-neutral-700 text-sm leading-relaxed">"I understand your concern. How long has this been happening? Is your dog still drinking water?"</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1 bg-blue-50 rounded-2xl p-4 border border-blue-100">
                  <div className="font-semibold text-blue-800 mb-1 text-sm">Pet Owner:</div>
                  <p className="text-neutral-700 text-sm leading-relaxed">"It started about 2 hours ago. He's not drinking much."</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-purple-600" />
                </div>
                <div className="flex-1 bg-purple-50 rounded-2xl p-4 border border-purple-100">
                  <div className="font-semibold text-purple-800 mb-1 text-sm">AI Assistant:</div>
                  <p className="text-neutral-700 text-sm leading-relaxed mb-3">"Based on your description, I recommend bringing him in. I've booked an emergency appointment for you in 30 minutes with Dr. Williams. Please bring him immediately."</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 rounded-lg text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Emergency booked
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-lg text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Vet notified
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg text-xs font-medium">
                      <CheckCircle className="w-3 h-3" />
                      Directions sent
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Tab Section */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-neutral-950 mb-4">
              Comprehensive Pet Care Support
            </h2>
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setActiveTab('inbound')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'inbound' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                Inbound Calls
              </button>
              <button
                onClick={() => setActiveTab('outbound')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeTab === 'outbound' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
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
              { icon: Calendar, title: "Appointment Booking", examples: ["I need to book an appointment for my dog", "Can I see Dr. Smith?"], description: "Schedules appointments based on urgency" },
              { icon: Pill, title: "Medication Requests", examples: ["Can I reorder flea treatment?", "Need more heartworm medication"], description: "Processes prescription requests securely" },
              { icon: Clock, title: "Opening Hours", examples: ["What are your hours?", "Are you open on weekends?"], description: "Provides practice hours and emergency contacts" },
              { icon: Activity, title: "Symptom Assessment", examples: ["My cat isn't eating", "Dog has a limp"], description: "Gathers details and recommends next steps" },
              { icon: Syringe, title: "Vaccination Enquiries", examples: ["When is my puppy due for vaccines?", "What vaccinations are needed?"], description: "Provides vaccine schedules and reminders" },
              { icon: Ambulance, title: "Emergency Guidance", examples: ["This is an emergency!", "My pet was hit by a car"], description: "Provides urgent care instructions and directs to emergency services" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950 mb-3">{feature.title}</h3>
                <ul className="space-y-2 mb-4">
                  {feature.examples.map((example, i) => (
                    <li key={i} className="text-sm text-neutral-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0" />
                      <span className="flex-1">"{example}"</span>
                    </li>
                  ))}
                </ul>
                <p className="text-neutral-500 text-sm border-t border-gray-100 pt-3">{feature.description}</p>
              </motion.div>
            )) : [
              { icon: Calendar, title: "Appointment Reminders", examples: ["Your pet's check-up is tomorrow", "Need to reschedule?"], description: "Reduces no-shows by 25%" },
              { icon: MessageSquare, title: "Post-Visit Follow-ups", examples: ["How's your pet recovering?", "Any concerns after surgery?"], description: "Ensures proper recovery and care" },
              { icon: Syringe, title: "Vaccination Reminders", examples: ["Booster due next week", "Annual vaccines coming up"], description: "Keeps pets protected" },
              { icon: FileText, title: "Wellness Plans", examples: ["Interested in our pet health plan?", "Save on routine care"], description: "Promotes preventative care" },
              { icon: Mail, title: "Feedback Surveys", examples: ["How was your experience?", "Rate your visit"], description: "Collects valuable feedback" },
              { icon: Heart, title: "Seasonal Alerts", examples: ["Tick prevention advice", "Summer heat safety tips"], description: "Keeps pets safe year-round" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950 mb-3">{feature.title}</h3>
                <ul className="space-y-2 mb-4">
                  {feature.examples.map((example, i) => (
                    <li key={i} className="text-sm text-neutral-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600 flex-shrink-0" />
                      <span className="flex-1">"{example}"</span>
                    </li>
                  ))}
                </ul>
                <p className="text-neutral-500 text-sm border-t border-gray-100 pt-3">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-neutral-950 mb-4">
              Why Veterinary Clinics Choose Pura AI
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Trusted by practices caring for pets across the UK
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "24/7 Emergency Support", description: "Never miss an after-hours emergency call", color: "from-purple-500 to-pink-500" },
              { icon: PawPrint, title: "Pet-Friendly Voice", description: "Calming, caring tone that comforts worried pet owners", color: "from-pink-500 to-purple-500" },
              { icon: Users, title: "Reduce Staff Burnout", description: "Free up vets and nurses for clinical care", color: "from-purple-500 to-pink-500" },
              { icon: TrendingUp, title: "Improved Results", description: "30% more consultations, 40% less admin time", color: "from-pink-500 to-purple-500" }
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
                <p className="text-neutral-600 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-purple-50 border-t border-purple-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-4xl mx-auto text-center"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-purple-100">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <PawPrint className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-neutral-950 mb-6">
                Ready to Provide Better Pet Care?
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
                Join a growing list of Veterinary clinics improving pet care and reducing admin burden
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link to="/contact">
                <button className="border-2 border-purple-200 text-purple-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all duration-300 cursor-pointer">
                  Contact Our Team
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

export default VeterinaryClinics;