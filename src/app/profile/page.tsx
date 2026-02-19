'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import AdBanner from "@/components/ui/AdBanner";

export default function ProfilePage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div className="bg-[#efefef] min-h-screen text-[#203627] font-sans selection:bg-lemon-lime selection:text-[#203627]">
            {/* Hero Section with Parallax */}
            <section ref={containerRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/images/office.png"
                        alt="Office Aesthetic"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#203627]/30 mix-blend-multiply" />
                </motion.div>

                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-9xl font-playfair font-black text-[#e7fe41] mb-6 tracking-tighter drop-shadow-lg"
                    >
                        ARTI FIKSI
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-white text-xl md:text-2xl font-montserrat-regular tracking-widest uppercase max-w-2xl mx-auto"
                    >
                        Reimagining Media for the Creative Soul
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Discover</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                </motion.div>
            </section>

            <div className="bg-[#efefef] relative z-20 rounded-t-[3rem] -mt-20 pt-20 shadow-2xl">
                <div className="container mx-auto px-4 md:px-6">

                    {/* Manifesto / About */}
                    <section className="py-20 max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-12 leading-tight">
                                We are a digital sanctuary for <span className="italic text-[#9cc4d4]">tastemakers</span>, <span className="italic text-[#9cc4d4]">storytellers</span>, and <span className="italic text-[#9cc4d4]">visionaries</span>.
                            </h2>
                            <div className="grid md:grid-cols-2 gap-12 text-left text-lg leading-relaxed text-gray-600 font-medium">
                                <p>
                                    Founded in 2026, Arti Fiksi Media was born from a desire to cut through the noise. We believe that media shouldn't just inform—it should inspire. It should provoke thought and ignite the creative spark within.
                                </p>
                                <p>
                                    From deep dives into emerging subcultures to the latest in sustainable fashion and tech, we curate stories that matter. We don't just follow trends; we explore the *why* behind them.
                                </p>
                            </div>
                        </motion.div>
                    </section>

                    {/* Ad Break */}
                    <div className="mb-20">
                        <AdBanner size="leaderboard" className="hidden md:flex justify-center" />
                    </div>

                    {/* Values - Aesthetic Grid */}
                    <section className="py-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Authenticity", desc: "Real stories, real people. No fluff.", color: "bg-[#203627]", text: "text-[#e7fe41]" },
                                { title: "Curation", desc: "Quality over quantity, always.", color: "bg-[#9cc4d4]", text: "text-[#203627]" },
                                { title: "Innovation", desc: "Pushing boundaries in digital storytelling.", color: "bg-[#e7fe41]", text: "text-[#203627]" }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                                    className={`${item.color} ${item.text} p-10 rounded-2xl aspect-square flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-500`}
                                >
                                    <span className="text-6xl font-playfair font-black">{idx + 1}.</span>
                                    <div>
                                        <h3 className="text-2xl font-black font-montserrat-black uppercase tracking-tighter mb-2">{item.title}</h3>
                                        <p className="font-medium opacity-80">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Team Section */}
                    <section className="py-20 border-t border-gray-200">
                        <div className="flex flex-col md:flex-row items-baseline justify-between mb-16">
                            <h2 className="text-5xl md:text-7xl font-playfair font-black text-[#203627]">The Minds.</h2>
                            <p className="text-gray-500 font-bold uppercase tracking-widest mt-4 md:mt-0">Behind the scenes</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                            {[
                                { name: "Andi Pratama", role: "Creative Director", img: "/images/team1.png" },
                                { name: "Sarah Wijaya", role: "Editor in Chief", img: null },
                                { name: "Budi Santoso", role: "Head of Tech", img: null },
                                { name: "Dina Kusuma", role: "Senior Writer", img: null },
                            ].map((member, idx) => (
                                <div key={idx} className="group cursor-pointer">
                                    <div className="relative overflow-hidden mb-6 aspect-[3/4] rounded-sm bg-gray-200">
                                        {member.img ? (
                                            <div className="w-full h-full bg-gray-300 animate-pulse" />
                                            // Placeholder for actual image if available
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 font-bold uppercase tracking-widest text-xs">
                                                [Image]
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-[#203627]/0 group-hover:bg-[#203627]/20 transition-colors duration-500" />
                                    </div>
                                    <h4 className="text-xl font-bold font-playfair text-[#203627] group-hover:text-[#9cc4d4] transition-colors">{member.name}</h4>
                                    <p className="text-xs font-black font-montserrat-black uppercase tracking-widest text-gray-400 mt-1">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Collaboration / Contact CTA */}
                    <section className="py-32 text-center">
                        <h2 className="text-4xl md:text-6xl font-black font-montserrat-black uppercase tracking-tighter text-[#203627] mb-6">
                            Have an <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#203627] to-[#9cc4d4]">Idea?</span>
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto mb-10 text-lg font-medium">
                            Kami selalu terbuka untuk ide-ide segar, kolaborasi artistik, atau kritik yang membangun. Berikan percikan inspirasi kamu sekarang.
                        </p>
                        <a
                            href="mailto:contact@artifiksi.com"
                            className="inline-block bg-[#203627] text-[#e7fe41] px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-[#e7fe41] hover:text-[#203627] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                        >
                            Contact Us
                        </a>
                    </section>

                </div>
            </div>
        </div>
    );
}
