// src/pages/About.jsx
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { 
  Phone, 
  Clock, 
  Users, 
  ArrowRight, 
  CheckCircle,
  Sparkles,
  Heart,
  Target,
  Shield,
  Zap,
  TrendingUp,
  MessageCircle,
  Headphones,
  Calendar,
  Mail,
  Star,
   AlertTriangle
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const heroRef = useRef(null);
  const problemRef = useRef(null);
  const solutionRef = useRef(null);
  const statsRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  // Floating particles animation
  const particles = [...Array(40)].map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 15 + 10,
  }));

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden -mt-6 sm:mt-0 sm:pt-7">
        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30"
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

        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-200/30 blur-[100px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-200/30 blur-[100px]"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">Our Story</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-6 tracking-tight leading-[1.1] text-neutral-950"
            >
              Eve<span className="tracking-wide">ry</span> Call
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">
                Deserves an Answer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              At Pura Labs, we believe that no business should lose an opportunity simply because they couldn't answer the phone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
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

      {/* The Problem Section */}
      <section ref={problemRef} className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-400 rounded-full px-4 py-2 mb-6">
                <AlertTriangle className="w-4 h-4 text-red-600" />
                <span className="text-[10px] font-black uppercase tracking-widest text-red-700">The Challenge</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-neutral-950 mb-6">
                The Problem We're Solving
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.div variants={fadeInUp} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Every day, thousands of businesses miss calls from potential customers.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Sometimes the team is busy. Sometimes the phone rings outside office hours. Sometimes there simply aren't enough people available to answer every enquiry.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  But when a call goes unanswered, the opportunity often disappears. Customers move on to the next business.
                </p>
                <p className="text-blue-600 text-xl font-semibold leading-relaxed">
                  At Pura Labs AI, we believe that should never happen.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mt-4">
                  We're building intelligent voice agents that ensure every business has a reliable, professional first point of contact — one that answers every call, captures every opportunity, and helps teams focus on the work that matters most.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <h3 className="text-xl font-bold text-neutral-950 mb-4">The Reality of Missed Calls</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For many businesses, the phone is still the most important channel for new enquiries. But managing calls effectively is harder than it seems.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  During busy periods, reception teams get overwhelmed. Small businesses often can't justify hiring dedicated staff to answer every call. And outside working hours, enquiries frequently go straight to voicemail. When that happens, potential customers usually move on to the next provider.
                </p>
                <p className="text-gray-600 leading-relaxed font-semibold">
                  The result is simple: missed calls mean lost revenue.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section ref={solutionRef} className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-green-50 border border-green-400 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-green-600" />
                <span className="text-[10px] font-black uppercase tracking-widest text-green-700">Our Solution</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-neutral-950 mb-6">
                The Pura Labs Difference
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Pura Labs, we believe businesses shouldn't lose opportunities simply because they were busy.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100"
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our AI voice agents answer calls instantly, speak naturally with customers, capture key information, book appointments, and route enquiries to the right people.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                By handling routine conversations and call management, Pura Labs AI empowers teams to focus on the work that matters most — serving customers, closing deals, and growing their business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100%", label: "Call Answer Rate", icon: Phone },
              { value: "24/7", label: "Always Available", icon: Clock },
              { value: "35%", label: "More Bookings", icon: Calendar },
              { value: "40%", label: "Time Saved", icon: TrendingUp }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-blue-600" />
                </div>
                <div className="text-3xl md:text-4xl font-black text-neutral-950">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Customer First", description: "We put our customers at the heart of everything we build" },
              { icon: Target, title: "Innovation Driven", description: "We constantly push boundaries to deliver cutting-edge solutions" },
              { icon: Shield, title: "Trust & Security", description: "We protect your data with enterprise-grade security" },
              { icon: Zap, title: "Speed & Efficiency", description: "We help businesses respond faster and work smarter" },
              { icon: Users, title: "Partnership", description: "We succeed when our customers succeed" },
              { icon: Star, title: "Excellence", description: "We never compromise on quality" }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 shadow-lg"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-950 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="py-24 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto text-center"
    >
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black text-neutral-950 mb-6">
          Ready to Never Miss Another Call?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join hundreds of businesses that trust Pura Labs to handle their calls 24/7
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </motion.div>
  </div>
</section>
    </div>
  );
};

export default About;