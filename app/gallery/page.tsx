"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Maximize2, Camera } from "lucide-react";

const galleryItems = [
    {
        id: 1,
        title: "Nature Walk Activity",
        description: "Students visit Elephant Farm as part of their Nature Walk activity.",
        image: "https://images.unsplash.com/photo-1581061090141-c357732ad503?auto=format&fit=crop&q=80&w=800",
        category: "Learning"
    },
    {
        id: 2,
        title: "India Book of Record",
        description: "Muhammed Adam (LZQ) - World Record Achievement.",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800",
        category: "Achievement"
    },
    {
        id: 3,
        title: "News Feature",
        description: "Siraj News - Akshara Dheepam Inauguration ceremony.",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
        category: "Events"
    },
    {
        id: 4,
        title: "Global Inauguration",
        description: "Alif Day Global Inauguration by Grand Mufti of India.",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
        category: "Events"
    },
    {
        id: 5,
        title: "School Launch",
        description: "Dr. Abdul Hakim Azhari officially launching ZeeQue International School.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
        category: "Milestones"
    },
    {
        id: 6,
        title: "Independence Day",
        description: "Independence Day Flag Hosting Ceremony at ZeeQue.",
        image: "https://images.unsplash.com/photo-1532375811400-d7d132d09c62?auto=format&fit=crop&q=80&w=800",
        category: "Celebration"
    },
    {
        id: 7,
        title: "Planting Saplings",
        description: "Planting 15000 saplings - Karnataka state Inauguration.",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800",
        category: "Green Initiative"
    },
    {
        id: 8,
        title: "Plant the Planet",
        description: "Planting 15000 saplings campaign launch.",
        image: "https://images.unsplash.com/photo-1530836361283-2eb13038a6f3?auto=format&fit=crop&q=80&w=800",
        category: "Green Initiative"
    },
    {
        id: 9,
        title: "Snapbook Launch",
        description: "Snapbook (June) Launch - Ubaidulla Saquafi (Director, Markaz).",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
        category: "Publications"
    },
    {
        id: 10,
        title: "Green Lakshadweep",
        description: "Plant the Planet - Lakshadweep state Inauguration.",
        image: "https://images.unsplash.com/photo-1500628550463-c8881a54d4d4?auto=format&fit=crop&q=80&w=800",
        category: "Green Initiative"
    },
    {
        id: 11,
        title: "Qur'an Competition",
        description: "Tarnim'25 - ZeeQue Qur'an Competition Highlights.",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800",
        category: "Events"
    }
];

export default function GalleryPage() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const selectedImage = galleryItems.find(item => item.id === selectedId);

    return (
        <main className="min-h-screen bg-background relative selection:bg-luxury-primary/30">
            <Header />

            {/* Premium Hero */}
            <section data-nav-theme="dark" className="relative pt-40 pb-24 overflow-hidden bg-luxury-navy dark:bg-black">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(221,81,149,0.1),transparent_70%)] opacity-50" />
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-luxury-primary/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[120px] animate-pulse" />
                </div>

                <div className="max-w-[1440px] mx-auto px-[5vw] relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="inline-block"
                    >
                        <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-luxury-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                            <Camera className="w-3.5 h-3.5" /> Captured Memories
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-heading font-bold text-white mb-6 tracking-tight"
                    >
                        Explore <span className="bg-clip-text text-transparent bg-gradient-to-r from-luxury-primary to-luxury-accent">ZeeQue</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-light"
                    >
                        A playful collection of adorable, colorful, and creative moments.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "120px" }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="h-1 bg-gradient-primary mx-auto mt-12 mb-4 rounded-full"
                    />
                </div>
            </section>

            {/* Gallery Grid */}
            <section data-nav-theme="light" className="py-24 relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-[5vw]">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                        className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
                    >
                        {galleryItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layoutId={`card-${item.id}`}
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
                                }}
                                whileHover={{ y: -10 }}
                                className="break-inside-avoid relative overflow-hidden rounded-[2rem] border border-gray-100 dark:border-white/10 group cursor-pointer bg-white dark:bg-white/5 shadow-premium hover:shadow-2xl transition-all duration-500"
                                onClick={() => setSelectedId(item.id)}
                            >
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                    <div className="absolute top-6 right-6 z-20">
                                        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 hover:bg-luxury-primary hover:border-luxury-primary">
                                            <Maximize2 className="w-5 h-5" />
                                        </div>
                                    </div>

                                    <div className="absolute bottom-8 left-8 right-8 z-20">
                                        <span className="inline-block px-3 py-1 rounded-full bg-luxury-primary/20 backdrop-blur-md border border-luxury-primary/30 text-luxury-primary text-[10px] font-bold uppercase tracking-wider mb-3">
                                            {item.category}
                                        </span>
                                        <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-luxury-accent transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-white/70 text-sm line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {selectedId && selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-xl"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.button
                            className="absolute top-8 right-8 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-luxury-primary transition-colors hover:scale-110 z-[110]"
                            whileHover={{ rotate: 90 }}
                        >
                            <X className="w-6 h-6" />
                        </motion.button>

                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="relative w-full max-w-6xl aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                fill
                                className="object-contain bg-black/40"
                            />

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black via-black/60 to-transparent"
                            >
                                <span className="inline-block px-4 py-1 rounded-full bg-luxury-primary text-white text-[10px] font-bold uppercase tracking-widest mb-4">
                                    {selectedImage.category}
                                </span>
                                <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                                    {selectedImage.title}
                                </h2>
                                <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
                                    {selectedImage.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
