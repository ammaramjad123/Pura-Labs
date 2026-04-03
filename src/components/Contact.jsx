// Contact.jsx
import React, { useState, useEffect } from 'react';
import emailjs from "@emailjs/browser";
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  CheckCircle,
  ArrowRight,
  Headphones,
  Calendar,
  Users,
  Globe,
  Shield,
  Sparkles,
  Star,
  MessageCircle,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  ChevronRight,
  User,
  AtSign,
  AlertCircle,
  Loader2
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    service: 'general'
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  const services = [
    { value: 'general', label: 'General Enquiry' },
    { value: 'pricing', label: 'Pricing & Plans' },
    { value: 'support', label: 'Technical Support' },
    { value: 'enterprise', label: 'Enterprise Solution' },
    { value: 'partnership', label: 'Partnership Opportunity' }
  ];

  const benefits = [
    { icon: <Headphones className="w-5 h-5" />, text: '24/7 Expert Support' },
    { icon: <Clock className="w-5 h-5" />, text: 'Same-Day Response' },
    { icon: <Shield className="w-5 h-5" />, text: '100% Data Protection' },
    { icon: <Users className="w-5 h-5" />, text: 'Dedicated Account Manager' }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Emergency Support Only' }
  ];

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s+\-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_nye0gid",          // your service id
        "template_1m2cwpb",         // your template id
        {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service: services.find(s => s.value === formData.service)?.label,
          message: formData.message,
          title: "Contact Form Submission"
        },
        "VDna6eslsdAD20e3O"          // your public key
      );

      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        service: "general"
      });

    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['+44 (0) 79 7720 7542', '+44 (0) 20 8765 4321'],
      action: 'Call Now',
      link: 'tel:+44 (0) 79 7720 7542',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['sales@puralabs.ai'],
      action: 'Send Email',
      link: 'mailto:sales@puralabs.ai',
      color: 'from-purple-500 to-pink-500'
    },
  ];

  const faqs = [
    { q: 'How quickly will you respond?', a: 'We aim to respond to all enquiries within 2-4 hours during business hours.' },
    { q: 'Can I book a demo?', a: 'Absolutely! Select "Enterprise Solution" in the form and we\'ll schedule a personalized demo.' },
    { q: 'Do you offer support?', a: 'Yes, all plans include dedicated team support with 24/7 availability for critical issues.' }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 mt-22">
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-27 sm:pt-28 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">
              Get in Touch
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-neutral-950 mb-6 animate-slide-up">
            Let's Build Something
            <span className="block text-neutral-950">
              Extraordinary Together
            </span>
          </h1>
          <p className="text-[18px] sm:text-xl lg:text-xl text-gray-600 max-w-3xl sm:pb-12 pb-0 mx-auto animate-slide-up animation-delay-200">
            Have questions about our AI voice agents? Ready to transform your business? 
            Our team is here to help you every step of the way.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-0 sm:-mt-16 pb-24">
        {/* Main Contact Card */}
        <div className="relative">
          {/* Floating Background Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Side - Contact Form */}
              <div className="p-6 sm:p-8 md:p-12">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Send us a message</h2>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                {isSubmitted ? (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 text-center animate-fade-in">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out. Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                      <div className={`relative transition-all duration-300 ${focusedField === 'fullName' ? 'transform scale-[1.02]' : ''}`}>
                        <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === 'fullName' ? 'text-purple-500' : 'text-gray-400'}`} />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('fullName')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                            errors.fullName 
                              ? 'border-red-300 bg-red-50 focus:border-red-500' 
                              : 'border-gray-200 focus:border-purple-400 hover:border-purple-300'
                          }`}
                          placeholder="John Smith"
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                      <div className={`relative transition-all duration-300 ${focusedField === 'email' ? 'transform scale-[1.02]' : ''}`}>
                        <AtSign className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === 'email' ? 'text-purple-500' : 'text-gray-400'}`} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                            errors.email 
                              ? 'border-red-300 bg-red-50 focus:border-red-500' 
                              : 'border-gray-200 focus:border-purple-400 hover:border-purple-300'
                          }`}
                          placeholder="john@company.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                      <div className={`relative transition-all duration-300 ${focusedField === 'phone' ? 'transform scale-[1.02]' : ''}`}>
                        <Phone className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${focusedField === 'phone' ? 'text-purple-500' : 'text-gray-400'}`} />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none ${
                            errors.phone 
                              ? 'border-red-300 bg-red-50 focus:border-red-500' 
                              : 'border-gray-200 focus:border-purple-400 hover:border-purple-300'
                          }`}
                          placeholder="+44 20 1234 5678"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Service Type */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">What are you interested in?</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <div className="relative mb-6">
                          <div
                            onClick={() => setOpenDropdown(!openDropdown)}
                            className="relative w-full flex items-center px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 cursor-pointer hover:border-purple-400 hover:shadow-md transition"
                          >
                            <span className="text-sm font-medium text-gray-700 pr-6">
                              {services.find(s => s.value === formData.service)?.label}
                            </span>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                              <svg
                                className="w-4 h-4 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                          {openDropdown && (
                            <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
                              {services.map((service, i) => (
                                <div
                                  key={i}
                                  onClick={() => {
                                    setFormData(prev => ({ ...prev, service: service.value }));
                                    setOpenDropdown(false);
                                  }}
                                  className="px-4 py-3 text-sm hover:bg-purple-50 cursor-pointer transition"
                                >
                                  {service.label}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-400 hover:border-purple-300 transition-all duration-300 focus:outline-none resize-none"
                        placeholder="Tell us about your requirements..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-purple-500 hover:bg-purple-600 text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    {/* Trust Badge */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-2 pt-6 text-center">
                      {benefits.map((benefit, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 text-xs text-gray-500">
                          {benefit.icon}
                          <span className="text-center leading-tight">{benefit.text}</span>
                        </div>
                      ))}
                    </div>
                  </form>
                )}
              </div>

              {/* Right Side - Contact Information */}
              <div className="bg-gradient-to-br from-gray-900 to-purple-900 p-6 sm:p-8 md:p-12 text-white">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">Connect With Us</h2>
                  <p className="text-purple-200">We're here to help and answer any questions you might have.</p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6 mb-8">
                  {contactMethods.map((method, idx) => (
                    <a
                      key={idx}
                      href={method.link}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
                        {method.details.map((detail, i) => (
                          <p key={i} className="text-purple-200 text-sm">{detail}</p>
                        ))}
                        <span className="inline-flex items-center gap-1 text-sm text-purple-300 mt-2 group-hover:text-white transition-colors">
                          {method.action}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Office Hours */}
                <div className="border-t border-purple-700 pt-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5" />
                    <h3 className="font-semibold">Support Availability</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-purple-200">Monday - Sunday</span>
                      <span className="font-medium text-green-300">24/7 Available</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="border-t border-purple-700 pt-6">
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {[Linkedin, Twitter, Facebook, Instagram].map((Icon, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Contact;