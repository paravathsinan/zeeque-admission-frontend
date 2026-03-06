"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { MapPin, Phone, Mail, Download, Globe, GraduationCap, Calendar, FileText, Send, Navigation, ArrowUpRight, PhoneCall, Map } from "lucide-react";

export default function ContactPage() {
    // ----------------------------------------------------------------------
    // Constants
    // ----------------------------------------------------------------------
    const contactInfo = [
        {
            icon: MapPin,
            title: "ZeeQue Headquarters",
            details: "Zahra Park, Koduvally, Kozhikode, Kerala, India - 673572",
            colorClass: "from-[#FF6B6B] to-[#EE5253]",
            shadowClass: "shadow-[#FF6B6B]/30"
        },
        {
            icon: Phone,
            title: "Contact Numbers",
            details: "+91 9072500435, +91 9556222212",
            colorClass: "from-[#48dbfb] to-[#0abde3]",
            shadowClass: "shadow-[#48dbfb]/30"
        },
        {
            icon: Mail,
            title: "Email",
            details: "zqnetwork@zeeque.in",
            colorClass: "from-[#1dd1a1] to-[#10ac84]",
            shadowClass: "shadow-[#1dd1a1]/30"
        }
    ];

    const downloads = [
        {
            icon: GraduationCap,
            title: "School Details",
            description: "Detailed information about our curriculum, facilities, affiliation and CBSE codes.",
            link: "#",
            colorClass: "text-[#8B5CF6]"
        },
        {
            icon: Calendar,
            title: "Academic Calendar",
            description: "Plan ahead with our comprehensive list of holidays, events, and exams dates.",
            link: "#",
            colorClass: "text-[#3B82F6]"
        },
        {
            icon: FileText,
            title: "Corporate Brochure",
            description: "A professional overview of the ZeeQue education network, admission process and values.",
            link: "#",
            colorClass: "text-[#DD5195]"
        }
    ];

    // ----------------------------------------------------------------------
    // Variants
    // ----------------------------------------------------------------------
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <main className="min-h-screen bg-background relative selection:bg-luxury-primary/30">
            <Header />

            {/* Premium Hero */}
            <section data-nav-theme="light" className="relative pt-40 pb-20 overflow-hidden bg-white dark:bg-[#0a0a0a]">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-luxury-primary/5 to-luxury-accent/5 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-luxury-navy/5 to-luxury-gold/5 rounded-full blur-[100px]" />
                </div>

                <div className="max-w-[1440px] mx-auto px-[5vw] relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-luxury-cream dark:bg-white/5 border border-gray-100 dark:border-white/10 text-luxury-primary text-xs font-bold uppercase tracking-widest mb-8 shadow-sm"
                    >
                        <MapPin className="w-3.5 h-3.5" /> Contact Us
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 tracking-tight"
                    >
                        Connecting You to <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-luxury-primary to-[#8B5CF6]">
                            Excellence in Education
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium"
                    >
                        We&#39;re here to help! Whether you have a question, need support, or just want to say hello, feel free to reach out.
                    </motion.p>
                </div>
            </section>

            {/* Info Cards - Upgraded Premium UI */}
            <section data-nav-theme="light" className="py-12 pb-24 bg-white dark:bg-[#0a0a0a]">
                <div className="max-w-[1440px] mx-auto px-[5vw]">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {contactInfo.map((info, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                className="group relative bg-white dark:bg-[#111111] p-10 rounded-[2rem] border border-gray-100 dark:border-white/5 shadow-premium hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_20px_40px_rgba(255,255,255,0.02)] transition-all duration-500 overflow-hidden"
                            >
                                {/* Decorative Background Blob */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${info.colorClass} opacity-5 group-hover:opacity-10 rounded-bl-[100px] transition-opacity duration-500`} />

                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.colorClass} shadow-lg ${info.shadowClass} flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                                    <info.icon className="w-7 h-7 text-white drop-shadow-md" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4 relative z-10">{info.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium relative z-10">
                                    {info.details}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Form Section - Light in Light Mode, Dark in Dark Mode */}
            <section data-nav-theme="light" className="py-32 bg-gray-50 dark:bg-black relative overflow-hidden">
                {/* Beautiful Glowing Orbs */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                        animate={{ x: [-50, 50, -50], y: [-20, 30, -20] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-40 right-[10%] w-[600px] h-[600px] bg-gradient-to-bl from-luxury-primary/10 to-[#8B5CF6]/10 rounded-full blur-[100px]"
                    />
                    <motion.div
                        animate={{ x: [50, -30, 50], y: [30, -40, 30] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-[-20%] left-[5%] w-[800px] h-[800px] bg-gradient-to-tr from-[#3B82F6]/10 to-luxury-accent/10 rounded-full blur-[120px]"
                    />
                </div>

                <div className="max-w-6xl mx-auto px-[5vw] relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-center lg:text-left"
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                                Ready to <span className="text-luxury-primary">Get Started?</span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
                                Fill out the form, and our admissions team will reach out to you within 24 hours to discuss the next steps for your child&#39;s bright future.
                            </p>

                            <div className="hidden lg:flex items-center gap-5 p-6 glass-card border border-gray-200 dark:border-white/10 rounded-[2rem] bg-white/80 dark:bg-white/5 shadow-xl max-w-sm">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-luxury-primary to-[#8B5CF6] flex items-center justify-center shadow-lg shadow-[#8B5CF6]/30">
                                    <Globe className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Global Network</p>
                                    <p className="text-lg font-bold text-foreground">Worldwide Campuses</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/70 dark:bg-[#111111]/80 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] border border-gray-200/50 dark:border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] relative"
                        >
                            <form className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-2">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-foreground placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-luxury-primary/50 transition-all shadow-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-2">Phone</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 90000 00000"
                                            className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-foreground placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-luxury-primary/50 transition-all shadow-sm"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-2">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-foreground placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-luxury-primary/50 transition-all shadow-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 ml-2">Your Message</label>
                                    <textarea
                                        placeholder="How can we help you?"
                                        rows={4}
                                        className="w-full bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-4 text-foreground placeholder:text-gray-400 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-luxury-primary/50 transition-all resize-none shadow-sm"
                                    />
                                </div>
                                <button type="button" className="w-full py-5 rounded-2xl bg-gradient-to-r from-luxury-primary to-[#8B5CF6] text-white font-bold text-sm uppercase tracking-[0.2em] shadow-[0_8px_20px_rgba(221,81,149,0.3)] hover:shadow-[0_12px_30px_rgba(221,81,149,0.5)] transition-all duration-500 flex items-center justify-center gap-3 group hover:-translate-y-1 mt-4">
                                    Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Downloads Section - Redesigned */}
            <section data-nav-theme="light" className="py-16 relative bg-white dark:bg-[#0a0a0a] overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-[5vw]">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">Resources</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Download essential information about our academic programs and school network.</p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {downloads.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="group relative overflow-hidden rounded-[2rem] bg-gray-50 dark:bg-[#111111] p-10 border border-gray-100 dark:border-white/5 hover:border-luxury-primary/30 dark:hover:border-luxury-primary/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col items-center text-center"
                            >
                                {/* Hover Reveal Gradient */}
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-luxury-primary via-[#8B5CF6] to-luxury-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                <div className={`w-20 h-20 rounded-full bg-white dark:bg-[#1A1A1A] shadow-[0_8px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_24px_rgba(255,255,255,0.02)] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 ${item.colorClass}`}>
                                    <item.icon className="w-10 h-10" />
                                </div>
                                <h4 className="text-2xl font-heading font-bold text-foreground mb-4">{item.title}</h4>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium mb-10 flex-grow">{item.description}</p>

                                <a href={item.link} className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-white/10 text-foreground font-bold text-sm uppercase tracking-widest hover:border-luxury-primary hover:text-luxury-primary dark:hover:border-luxury-primary dark:hover:text-luxury-primary transition-colors shadow-sm">
                                    Download <Download className="w-4 h-4" />
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Campus Visit Section - Integrated Card Layout */}
            <section data-nav-theme="light" className="py-24 bg-white dark:bg-[#0a0a0a]">
                <div className="max-w-[1440px] mx-auto px-[5vw]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-[#111111] rounded-[2.5rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.4)] border border-gray-100 dark:border-white/5"
                    >
                        {/* Header Content Area */}
                        <div className="p-8 md:p-12 pb-8">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-8">
                                {/* Left Side: Icon & Titles */}
                                <div className="flex items-start gap-6">
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-[#FF6B6B] to-[#EE5253] flex items-center justify-center shrink-0 shadow-lg shadow-[#EE5253]/30">
                                        <MapPin className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-3xl md:text-4xl font-bold font-heading text-foreground tracking-tight">Visit Our Campus</h3>
                                        <p className="text-gray-500 dark:text-gray-400 font-medium max-w-xl leading-relaxed">
                                            If you prefer to speak with us in person, you&#39;re welcome to visit our headquarters in Koduvally. Explore our facilities and meet our academic team.
                                        </p>
                                    </div>
                                </div>

                                {/* Right Side: Quick Action Buttons */}
                                <div className="flex flex-wrap items-center gap-3 shrink-0">
                                    <a href="https://maps.google.com/?q=Zahra+Park,+Koduvally,+Kozhikode,+Kerala" target="_blank" rel="noopener noreferrer" className="flex-1 lg:flex-none flex items-center justify-center gap-2 py-4 px-8 rounded-2xl bg-[#8B5CF6] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#7e53de] transition-all shadow-lg shadow-[#8B5CF6]/20 hover:-translate-y-1">
                                        Open Maps <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                    <a href="https://maps.google.com/?daddr=Zahra+Park,+Koduvally,+Kozhikode,+Kerala" target="_blank" rel="noopener noreferrer" className="flex-1 lg:flex-none flex items-center justify-center gap-2 py-4 px-8 rounded-2xl bg-gray-50 dark:bg-[#1A1A1A] text-foreground border border-gray-100 dark:border-white/10 text-sm font-bold uppercase tracking-widest hover:bg-gray-100 dark:hover:bg-[#222] transition-all hover:-translate-y-1">
                                        Directions <Navigation className="w-4 h-4 text-[#8B5CF6]" />
                                    </a>
                                    <a href="tel:+919072500435" className="flex-none flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gray-50 dark:bg-[#1A1A1A] text-foreground border border-gray-100 dark:border-white/10 text-sm font-bold uppercase tracking-widest hover:bg-gray-100 dark:hover:bg-[#222] transition-all hover:-translate-y-1">
                                        <PhoneCall className="w-5 h-5 text-[#FF6B6B]" />
                                    </a>
                                </div>
                            </div>

                            {/* Address Row */}
                            <div className="flex flex-col md:flex-row md:items-center gap-4 py-6 border-t border-gray-100 dark:border-white/5">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6B6B] shrink-0">Address:</span>
                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 font-semibold italic text-sm md:text-base">
                                    <Map className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                                    Head Quarters - Zahra Park, Koduvally, Kozhikode, Kerala, India - 673572
                                </div>
                            </div>
                        </div>

                        {/* Integrated Maps Container - Reduced height and integrated look */}
                        <div className="relative w-full h-[350px] md:h-[400px] group/map">
                            <iframe
                                src="https://maps.google.com/maps?q=Zahra+Park,+Koduvally,+Kozhikode,+Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full border-0"
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            {/* Decorative Map Inner Shadow */}
                            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
