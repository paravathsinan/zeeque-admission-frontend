"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import { submitFooterEnquiry } from "@/app/actions";

const companyLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/#contact" },
    { label: "Explore ZeeQue", href: "/#admission" },
    { label: "Join Us", href: "/#admission" },
    { label: "AO Login", href: "https://zeeque.in" },
    { label: "HQ Login", href: "https://zeeque.in" },
    { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
    const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

    const handleFooterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, phone, message } = formData;

        if (!name.trim() || !email.trim() || !phone.trim()) {
            toast.error("Please fill in all mandatory fields before submitting.");
            return;
        }

        setFormStatus("loading");
        try {
            const res = await submitFooterEnquiry({ name: name.trim(), email: email.trim(), phone: phone.trim(), message: message.trim() });

            if (res.success) {
                setFormStatus("success");
                setFormData({ name: "", email: "", phone: "", message: "" });
                toast.success("Thank you! Our admissions team will contact you shortly.");
            } else {
                setFormStatus("error");
                toast.error("Failed to submit enquiry. Please try again.");
            }
        } catch {
            setFormStatus("error");
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            if (formStatus === "loading") {
                setFormStatus("idle");
            }
        }
    };

    return (
        <footer
            id="contact"
            data-nav-theme="dark"
            className="bg-[#1A1A1A] text-white pt-16 pb-8 relative overflow-hidden"
        >
            <div className="max-w-[1440px] px-[5vw] mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-14">
                    {/* Column 1: Logo + Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-5"
                    >
                        <div>
                            <Image
                                src="/logo-new.svg"
                                alt="ZeeQue Logo"
                                width={260}
                                height={80}
                                className="h-16 md:h-20 w-auto group-hover:scale-105 transition-transform brightness-0 invert mb-3"
                            />
                        </div>
                        <p className="text-white/90 text-sm leading-relaxed flex items-start gap-2">
                            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#DD5195]" />
                            Head Quarters - Zahra Park, Koduvally, Kozhikode, Kerala, India - 673572
                        </p>
                        <p className="text-white/90 text-sm flex items-center gap-2">
                            <Phone className="w-4 h-4 shrink-0 text-[#DD5195]" />
                            Phone : +91 9072500435
                        </p>
                        <p className="text-white/90 text-sm flex items-center gap-2">
                            <Mail className="w-4 h-4 shrink-0 text-[#DD5195]" />
                            E-mail : zqnetwork@zeeque.in
                        </p>
                        <div className="flex gap-3 pt-2">
                            <motion.a
                                href="https://www.facebook.com/zeeque.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#DD5195] hover:border-[#DD5195] transition-colors"
                            >
                                <Facebook className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href="https://www.instagram.com/zeeque.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#DD5195] hover:border-[#DD5195] transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href="https://www.youtube.com/zeeque"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#DD5195] hover:border-[#DD5195] transition-colors"
                            >
                                <Youtube className="w-5 h-5" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Column 2: Our Company */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="space-y-4"
                    >
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#DD5195]">
                            Our Company
                        </h3>
                        <ul className="space-y-2">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-2 text-sm text-white/90 hover:text-[#DD5195] transition-colors"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#DD5195] shrink-0" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3: Enquire Now form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#DD5195]">
                            Enquire Now
                        </h3>
                        <form onSubmit={handleFooterSubmit} className="space-y-3">
                            <input
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                                className="w-full bg-transparent border-0 border-b border-white/30 py-2 text-sm text-white placeholder:text-white/60 focus:border-[#DD5195] focus:outline-none transition-colors"
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                                className="w-full bg-transparent border-0 border-b border-white/30 py-2 text-sm text-white placeholder:text-white/60 focus:border-[#DD5195] focus:outline-none transition-colors"
                            />
                            <input
                                name="phone"
                                type="tel"
                                placeholder="Your Phone"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                                className="w-full bg-transparent border-0 border-b border-white/30 py-2 text-sm text-white placeholder:text-white/60 focus:border-[#DD5195] focus:outline-none transition-colors"
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows={3}
                                value={formData.message}
                                onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                                className="w-full bg-transparent border-0 border-b border-white/30 py-2 text-sm text-white placeholder:text-white/60 focus:border-[#DD5195] focus:outline-none transition-colors resize-none"
                            />
                            <motion.button
                                type="submit"
                                disabled={formStatus === "loading"}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-3 rounded-full text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#DD5195] to-[#8B5CF6] hover:opacity-95 transition-opacity disabled:opacity-70"
                            >
                                {formStatus === "loading"
                                    ? "Sending…"
                                    : formStatus === "success"
                                        ? "Sent"
                                        : "Submit Now"}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="border-t border-white/10 pt-6 text-center"
                >
                    <p className="text-white/80 text-sm">
                        All Rights Reserved by ZeeQue - 2013 to {new Date().getFullYear()}
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
