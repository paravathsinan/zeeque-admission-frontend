"use client";

import { useRef, useEffect } from "react";
import { motion, Variants, useInView, useMotionValue, useSpring } from "framer-motion";
import { Globe2, Building2, Users, GraduationCap } from "lucide-react";

const stats = [
    {
        id: 1,
        title: "Countries",
        value: 4,
        suffix: "",
        subtitle: "India, UAE, Oman, KSA",
        icon: Globe2,
    },
    {
        id: 2,
        title: "Schools",
        value: 152,
        suffix: "+",
        subtitle: "Across the network",
        icon: Building2,
    },
    {
        id: 3,
        title: "Students",
        value: 15000,
        suffix: "+",
        subtitle: "Happy learners",
        icon: Users,
    },
    {
        id: 4,
        title: "Teachers",
        value: 2200,
        suffix: "+",
        subtitle: "Dedicated professionals",
        icon: GraduationCap,
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 80, damping: 20 }
    }
};

const iconHoverVariants: Variants = {
    rest: { y: 0 },
    hover: {
        y: -5,
        transition: {
            duration: 0.3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }
    }
};

function AnimatedCounter({ value, suffix }: { value: number, suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        stiffness: 50,
        damping: 20,
        duration: 2000
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, isInView, value]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
            }
        });
    }, [springValue]);

    return (
        <div className="flex items-center justify-center">
            <span ref={ref}>0</span>
            <span>{suffix}</span>
        </div>
    );
}

export default function Stats() {
    return (
        <section id="network" data-nav-theme="light" className="py-24 bg-luxury-cream dark:bg-luxury-navy relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-luxury-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-[1440px] px-[5vw] mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-heading font-bold text-luxury-charcoal dark:text-luxury-cream mb-6 tracking-tight"
                    >
                        Our Global Network
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100px" }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-gradient-primary mx-auto rounded-full shadow-[0_0_15px_rgba(221,81,149,0.5)]"
                    />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
                >
                    {stats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            variants={itemVariants}
                            whileHover="hover"
                            initial="rest"
                            animate="rest"
                        >
                            <div className="group relative h-full bg-white/60 dark:bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/20 dark:border-white/10 hover:border-luxury-primary/30 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(221,81,149,0.1)] overflow-hidden">
                                {/* Ambient Glowing Orb on Hover */}
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-luxury-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" />

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="relative mb-8 group-hover:scale-110 transition-transform duration-500">
                                        <div className="absolute inset-0 bg-luxury-primary/10 rounded-full scale-150 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-luxury-cream to-white dark:from-white/10 dark:to-white/5 flex items-center justify-center shadow-lg shadow-luxury-primary/5 border border-white/50 dark:border-white/10 overflow-hidden">
                                            {/* Inner border glow */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <motion.div variants={iconHoverVariants}>
                                                <stat.icon className="w-10 h-10 text-luxury-primary" strokeWidth={1.5} />
                                            </motion.div>
                                        </div>
                                    </div>

                                    <h3 className="text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-luxury-charcoal to-luxury-navy dark:from-white dark:to-luxury-cream mb-4 group-hover:from-luxury-primary group-hover:to-luxury-accent transition-all duration-500">
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                    </h3>

                                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-luxury-primary/30 to-transparent mx-auto mb-4 scale-x-50 group-hover:scale-x-100 transition-transform duration-500" />

                                    <p className="text-xl font-bold text-luxury-navy dark:text-luxury-cream mb-2 group-hover:text-luxury-primary transition-colors duration-300">
                                        {stat.title}
                                    </p>

                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300">
                                        {stat.subtitle}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
