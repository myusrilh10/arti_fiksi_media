'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const menuItems = [
    { title: "Layanan Kami", subtitle: "Our Services", href: "/services", img: "/images/cafe.png" },
    { title: "Klien & Mitra", subtitle: "Advertisement", href: "/advertisement", img: "/images/tech.png" },
    { title: "Tim & Kreator", subtitle: "Our Team", href: "/team", img: "/images/team1.png" }
];

export default function InteractiveMenu() {
    const [hoveredIndex, setHoveredIndex] = useState<number>(0);

    return (
        <section className="relative w-full py-24 md:py-32 bg-black overflow-hidden group">
            {/* Dynamic Background Image based on hover */}
            <div className="absolute inset-0 z-0 transition-opacity duration-700 ease-in-out">
                {menuItems.map((item, idx) => (
                    <Image
                        key={idx}
                        src={item.img}
                        alt="Background"
                        fill
                        className={`object-cover select-none pointer-events-none transition-all duration-1000 ${hoveredIndex === idx ? 'opacity-60 scale-105' : 'opacity-0 scale-100'}`}
                        priority
                    />
                ))}
                {/* Fallback dark overlay to ensure text is readable */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-12">
                <div className="flex flex-col space-y-2 md:space-y-4">
                    {menuItems.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.href}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            // We remove onMouseLeave so it stays on the last hovered image
                            className="block group/item relative border-b border-white/20 pb-4 md:pb-6 pt-4 transition-colors hover:border-[#e7fe41]"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between transition-transform duration-500 group-hover/item:translate-x-4">
                                <div>
                                    <span className="text-[#9cc4d4] font-montserrat-black uppercase tracking-[0.3em] text-xs md:text-sm block mb-2 opacity-70 group-hover/item:opacity-100 transition-opacity">
                                        {item.subtitle}
                                    </span>
                                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-black text-white group-hover/item:text-[#e7fe41] transition-colors">
                                        {item.title}
                                    </h2>
                                </div>
                                <div className="mt-4 md:mt-0 text-white group-hover/item:text-[#e7fe41] transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 md:h-10 md:w-10 transform group-hover/item:rotate-45 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
