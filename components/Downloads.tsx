"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileDown, FileText, Download } from "lucide-react";
import Image from "next/image";

const downloads = [
    {
        id: 1,
        title: "SnapBook December",
        description: "Monthly highlights and academic achievements.",
        type: "PDF",
        size: "2.4 MB",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Malayalam Brochure",
        description: "Complete overview of our curriculum and activities.",
        type: "PDF",
        size: "4.1 MB",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "SNAPBOOK-SEP",
        description: "September month activities and gallery.",
        type: "PDF",
        size: "1.8 MB",
        image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&w=600&auto=format&fit=crop"
    }
];

export default function Downloads() {
    const [downloading, setDownloading] = useState<number | null>(null);

    const handleDownload = (id: number) => {
        setDownloading(id);
        setTimeout(() => {
            setDownloading(null);
        }, 2000);
    };

    return (
        <section
            id="downloads"
            data-nav-theme="light"
            className="py-20 relative overflow-hidden bg-luxury-cream dark:bg-luxury-navy"
        >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(221,81,149,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.15),transparent)]" />
            <div className="max-w-[1440px] mx-auto px-[5vw] z-10 relative">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="text-2xl md:text-4xl font-heading font-bold text-luxury-charcoal dark:text-luxury-cream mb-3"
                        >
                            Curated Resources
                        </motion.h2>
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: "64px", opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: 0.08 }}
                            className="h-0.5 bg-gradient-to-r from-luxury-primary via-luxury-gold to-luxury-navy rounded-full mb-4"
                        />
                        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                            SnapBooks and brochures for parents who value detail and a glimpse into everyday classroom magic.
                        </p>
                    </div>
                    <motion.button
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group inline-flex items-center gap-2 rounded-full border-2 border-luxury-primary/60 bg-white dark:bg-white/5 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-luxury-primary dark:text-luxury-cream hover:bg-luxury-primary hover:text-white hover:border-luxury-primary transition-all duration-300"
                    >
                        <FileText className="w-4 h-4" />
                        View all archives
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {downloads.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.35, delay: i * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-gray-200/80 dark:border-white/10 bg-white dark:bg-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] dark:shadow-none flex flex-col h-full hover:shadow-[0_20px_50px_rgba(221,81,149,0.12)] hover:border-luxury-primary/30 transition-all duration-300"
                        >
                            <div className="relative h-40 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 dark:bg-black/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-luxury-charcoal dark:text-white">
                                    {item.type} · {item.size}
                                </span>
                            </div>

                            <div className="relative z-10 p-5 flex flex-col flex-grow">
                                <h3 className="text-base font-heading font-bold text-luxury-charcoal dark:text-white mb-1.5">
                                    {item.title}
                                </h3>
                                <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 flex-grow leading-relaxed">
                                    {item.description}
                                </p>

                                <motion.button
                                    type="button"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => handleDownload(item.id)}
                                    disabled={downloading === item.id}
                                    className="relative w-full inline-flex items-center justify-center gap-2 rounded-xl border-2 border-luxury-primary/50 bg-transparent py-2.5 text-xs font-semibold text-luxury-primary transition-all duration-300 hover:bg-luxury-primary hover:text-white hover:border-luxury-primary disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden"
                                >
                                    {downloading === item.id ? (
                                        <>
                                            <span className="h-3.5 w-3.5 rounded-full border-2 border-current border-t-transparent animate-spin" />
                                            <span>Preparing…</span>
                                        </>
                                    ) : (
                                        <>
                                            <FileDown className="w-4 h-4" />
                                            <span>Download PDF</span>
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
