"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");
    const [navTheme, setNavTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const observerOptions = {
            root: null,
            rootMargin: "0px 0px -90% 0px", // Focus on the top part of the viewport
            threshold: 0
        };

        const observerCallback: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const theme = entry.target.getAttribute("data-nav-theme") as "light" | "dark";
                    if (theme) setNavTheme(theme);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = document.querySelectorAll("[data-nav-theme]");
        sections.forEach((section) => observer.observe(section));

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-white/10 dark:bg-black/10 backdrop-blur-xl border-b border-white/10 shadow-2xl py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-[5vw] flex justify-between items-center w-full">
                {/* Logo Area */}
                <div className="flex items-center">
                    <a href="/" className="flex items-center group">
                        <Image
                            src="/logo-new.svg"
                            alt="ZeeQue Logo"
                            width={260}
                            height={80}
                            priority
                            className="h-16 md:h-20 w-auto group-hover:scale-105 transition-transform"
                        />
                    </a>
                </div>

                {/* Desktop Nav */}
                <nav
                    className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center p-1 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.05)]"
                    onMouseLeave={() => setActiveLink("")}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onMouseEnter={() => setActiveLink(link.name)}
                            className={`relative px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-500 ${navTheme === "light" ? "text-luxury-charcoal dark:text-gray-200" : "text-white/90"
                                } hover:text-luxury-primary dark:hover:text-white`}
                        >
                            {activeLink === link.name && (
                                <motion.div
                                    layoutId="nav-indicator"
                                    className={`absolute inset-0 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.15)] ${navTheme === "light" ? "bg-luxury-navy/5 dark:bg-white/10" : "bg-white/10"
                                        }`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{link.name}</span>
                        </a>
                    ))}
                </nav>

                {/* Actions Area */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <a
                        href="/#admission"
                        className="relative group px-8 py-3 rounded-full bg-gradient-primary text-white font-bold text-xs tracking-[0.2em] uppercase transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(221,81,149,0.4)] hover:shadow-[0_0_35px_rgba(221,81,149,0.7)] hover:-translate-y-1 active:scale-95 border border-white/20 hover:border-white/40"
                    >
                        {/* Shimmer effect */}
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer transition-transform duration-1000" />

                        <span className="relative z-10 flex items-center gap-2">
                            Enquiry Now
                            <motion.span
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className="inline-block group-hover:translate-x-1 transition-transform duration-300"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </motion.span>
                        </span>
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    className={`md:hidden p-2 transition-colors duration-500 ${navTheme === "light" ? "text-luxury-charcoal dark:text-white" : "text-white"
                        }`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <div className="space-y-1.5 w-6">
                        <span className={`block w-full h-0.5 bg-current transform transition-transform duration-500 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-full h-0.5 bg-current transition-opacity duration-500 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-full h-0.5 bg-current transform transition-transform duration-500 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/10 backdrop-blur-xl border-t border-white/10"
                    >
                        <div className="px-4 py-6 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-white/80 hover:text-white text-lg font-medium px-4 py-2 rounded-lg hover:bg-white/5"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 px-4 flex flex-col gap-4">
                                <div className="flex justify-center">
                                    <ThemeToggle />
                                </div>
                                <a
                                    href="#admission"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="relative group block w-full text-center px-8 py-4 rounded-full bg-gradient-primary text-white font-bold tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(221,81,149,0.4)] active:scale-95 transition-all overflow-hidden border border-white/20"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Enquiry Now
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                                </a>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
