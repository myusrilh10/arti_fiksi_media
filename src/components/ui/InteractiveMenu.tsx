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

            <div className="relative z-10 w-full h-full flex flex-col justify-center min-h-[50vh] px-4 md:px-12 lg:px-24">
                <div className="flex flex-col space-y-10 md:space-y-16">
                    {menuItems.map((item, idx) => (
                        <Link
                            key={idx}
                            href={item.href}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            className="block group/item relative text-left transition-transform duration-500 hover:translate-x-4"
                        >
                            <h2 className="text-3xl md:text-5xl lg:text-7xl font-montserrat-black font-black uppercase tracking-[0.2em] text-white/50 group-hover/item:text-white transition-colors duration-500">
                                {item.title}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
