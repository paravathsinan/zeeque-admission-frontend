"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
    {
        id: 1,
        image: "/images/slide1.webp",
        alt: "Premium Preschool Slide 1",
    },
    {
        id: 2,
        image: "/images/slide2.webp",
        alt: "Premium Preschool Slide 2",
    },
    {
        id: 3,
        image: "/images/slide3.webp",
        alt: "Premium Preschool Slide 3",
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="hero" data-nav-theme="dark" className="relative h-screen w-full overflow-hidden bg-luxury-cream dark:bg-luxury-navy transition-colors duration-500">
            {/* Slideshow */}
            <AnimatePresence mode="sync">
                {slides.map((slide, index) => (
                    index === currentSlide && (
                        <motion.div
                            key={slide.id}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <div className="absolute inset-0 bg-black/50 z-10 transition-colors duration-500" />
                            <Image
                                src={slide.image}
                                alt={slide.alt}
                                fill
                                priority={index === 0}
                                className="object-cover"
                            />
                        </motion.div>
                    )
                ))}
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-xl">
                        India&apos;s Fastest Growing Preschool Network – Excellence in Every Play.
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 drop-shadow-lg"
                >
                    ZeeQue Preschool Network
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl md:text-2xl text-luxury-cream/90 mb-10 max-w-2xl font-light drop-shadow-md"
                >
                    Begin Your Journey with ZeeQue.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <a
                        href="#admission"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-primary rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(221,81,149,0.4)]"
                    >
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                        <span className="relative">Know More</span>
                    </a>
                </motion.div>
            </div>


        </section>
    );
}
