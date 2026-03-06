"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
    Users,
    Sun,
    Moon,
    BookOpen,
    Music,
    Palette,
    Tent,
    Zap,
    Droplets,
    Construction,
    Compass,
    ArrowRight
} from "lucide-react";

const DaysAtZeeQue = [
    { title: "Welcome Circle", icon: Users },
    { title: "General Assembly", icon: Sun },
    { title: "Meditation", icon: Moon },
    { title: "Morning Activity", icon: Palette },
    { title: "Rhyme Time", icon: Music },
    { title: "Story Sessions", icon: BookOpen },
];

const Infrastructure = [
    { title: "Sand Pit", icon: Construction },
    { title: "Splash Pool", icon: Droplets },
    { title: "Mud Pond", icon: Compass },
    { title: "High-Tech Classrooms", icon: Zap },
];

const CreativeActivities = ["Puppetry", "Theater", "Origami Workshops", "Clay Modeling"];
const SpecialEvents = ["Monthly Sports Days", "Nature Camps", "ZeeQue Fest", "Festival Celebrations"];
const Excursions = ["Zoo", "Nature Gardens", "Fire Stations", "Post Office", "Police Station", "Village/Farm", "Hospitals"];

export default function AboutPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section data-nav-theme="light" className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-primary opacity-[0.03] dark:opacity-[0.07]" />
                <div className="max-w-[1440px] mx-auto px-[5vw] relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6">
                            Welcome to <span className="text-luxury-primary">ZeeQue</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Where learning meets Fun, and every child's potential shines bright.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Days at ZeeQue Section */}
            <section data-nav-theme="light" className="py-24 bg-luxury-cream/30 dark:bg-white/5 backdrop-blur-sm relative">
                <div className="max-w-[1440px] mx-auto px-[5vw]">
                    <div className="mb-16">
                        <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Days at ZeeQue</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-3xl">
                            Our daily sessions at ZeeQue are fun-filled, creative, and engaging, focusing on the child's personality development and overall well-being. These sessions include welcome circle, general assembly, meditation, morning activities, rhyme time, story sessions and outdoor activities.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 lg:grid-cols-6 gap-4"
                    >
                        {DaysAtZeeQue.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="glass-card p-6 rounded-2xl text-center group hover:border-luxury-primary/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-luxury-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6 text-luxury-primary" />
                                </div>
                                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">{item.title}</h3>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Infrastructure Section */}
            <section data-nav-theme="light" className="py-24 relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-[5vw]">
                    <div className="mb-16">
                        <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Infrastructure</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-3xl">
                            ZeeQue classrooms are child friendly with plenty of elbow space and learning inductive ambience. We have a sand pit, a splash pool, a mud pond, indoor and outdoor play area and age-appropriate learning materials which excite the kids to explore more and more. Ours are high tech classrooms with multi-media support.
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {Infrastructure.map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="group relative overflow-hidden rounded-3xl"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-luxury-navy/80 to-transparent z-10" />
                                <div className="h-48 bg-gray-200 dark:bg-white/10 flex items-center justify-center relative">
                                    <item.icon className="w-16 h-16 text-luxury-primary/20" />
                                </div>
                                <div className="absolute bottom-6 left-6 z-20">
                                    <h3 className="text-xl font-heading font-bold text-white">{item.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Activity Based Learning */}
            <section data-nav-theme="light" className="py-24 bg-luxury-cream/10 dark:bg-white/5 relative">
                <div className="max-w-[1440px] mx-auto px-[5vw]">
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Activity Based Learning</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                            We offer a wide range of co-curricular activities to enrich the learning experience, including puppetry, theater, origami workshops, clay modeling, monthly sports days, nature camps and our very own ZeeQue Fest. We also celebrate festivals, commemorate special days, and have special days such as Fruits/Vegetables/Color days.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="p-8 glass-card rounded-[2rem] border-l-4 border-l-luxury-primary">
                                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Creative Activities</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {CreativeActivities.map((act, i) => (
                                        <div key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                            <div className="w-2 h-2 rounded-full bg-luxury-primary" />
                                            <span>{act}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="p-8 glass-card rounded-[2rem] border-l-4 border-l-luxury-accent">
                                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Special Events</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {SpecialEvents.map((event, i) => (
                                        <div key={i} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                            <div className="w-2 h-2 rounded-full bg-luxury-accent" />
                                            <span>{event}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="h-full p-8 glass-card rounded-[2rem] border-l-4 border-l-luxury-navy dark:border-l-white/20">
                                <h3 className="text-2xl font-heading font-bold text-foreground mb-6">Educational Excursions</h3>
                                <p className="text-gray-500 dark:text-gray-400 mb-8 italic">
                                    Exciting trips and functional visits to expand learning beyond the classroom.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {Excursions.map((site, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 rounded-full bg-white dark:bg-white/10 border border-gray-100 dark:border-white/5 text-sm"
                                        >
                                            {site}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
