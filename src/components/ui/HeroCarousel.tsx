'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Article {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    imageUrl: string;
    slug: string;
}

interface HeroCarouselProps {
    articles: Article[];
}

export default function HeroCarousel({ articles }: HeroCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, [articles.length]);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
    }, [articles.length]);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    if (!articles.length) return null;

    const currentArticle = articles[currentIndex];

    // Animation variants
    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 10 : -10,
            opacity: 0,
            scale: 1.05
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                x: { type: "spring" as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.8 },
                scale: { duration: 0.8 }
            }
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 10 : -10,
            opacity: 0,
            scale: 1,
            transition: {
                x: { type: "spring" as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.6 }
            }
        })
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" as const }
        })
    };

    return (
        <div className="relative w-full aspect-[16/10] md:aspect-[2.35/1] overflow-hidden rounded-2xl bg-gray-900 group shadow-2xl">
            {/* Background Image Slider */}
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                >
                    {currentArticle.imageUrl ? (
                        <Image
                            src={currentArticle.imageUrl}
                            alt={currentArticle.title}
                            fill
                            priority
                            className="object-cover"
                            sizes="100vw"
                        />
                    ) : (
                        <div className="w-full h-full bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                            <span className="text-gray-700 font-bold text-4xl opacity-20">ARTI FIKSI</span>
                        </div>
                    )}

                    {/* Cinematic Gradient Overlays */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content Content - Re-renders on slide change to trigger animations */}
            <div className="absolute inset-0 flex items-end p-6 md:p-12 lg:p-16 z-20 pointer-events-none">
                <div className="max-w-4xl w-full pointer-events-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`content-${currentIndex}`}
                            initial="hidden"
                            animate="visible"
                            className="space-y-4"
                        >
                            {/* Category & Date */}
                            <motion.div variants={contentVariants} custom={1} className="flex items-center gap-3">
                                <span className="inline-block bg-[#FACC15] text-black text-[10px] md:text-xs font-extrabold px-3 py-1 uppercase tracking-widest rounded-sm shadow-lg">
                                    {currentArticle.category}
                                </span>
                                <span className="text-gray-300 text-xs md:text-sm font-medium tracking-wide uppercase">
                                    {currentArticle.date}
                                </span>
                            </motion.div>

                            {/* Title */}
                            <motion.h2 variants={contentVariants} custom={2} className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg">
                                <Link href={`/articles/${currentArticle.slug}`} className="hover:text-[#FACC15] transition-colors duration-300">
                                    {currentArticle.title}
                                </Link>
                            </motion.h2>

                            {/* Excerpt */}
                            <motion.p variants={contentVariants} custom={3} className="text-gray-300 text-sm md:text-lg line-clamp-2 max-w-2xl leading-relaxed drop-shadow-md font-light">
                                {currentArticle.excerpt}
                            </motion.p>

                            {/* Read More Link */}
                            <motion.div variants={contentVariants} custom={4} className="pt-4">
                                <Link
                                    href={`/articles/${currentArticle.slug}`}
                                    className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs md:text-sm border-b-2 border-[#FACC15] pb-1 hover:text-[#FACC15] transition-colors"
                                >
                                    Read Full Story <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-30 flex items-center gap-4">
                {/* Custom Dots */}
                <div className="flex gap-2 mr-4">
                    {articles.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setDirection(idx > currentIndex ? 1 : -1);
                                setCurrentIndex(idx);
                            }}
                            className={`h-1 transition-all duration-300 rounded-full ${idx === currentIndex ? 'w-8 bg-[#FACC15]' : 'w-4 bg-white/30 hover:bg-white/60'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm text-white hover:bg-[#FACC15] hover:border-[#FACC15] hover:text-black transition-all active:scale-95"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm text-white hover:bg-[#FACC15] hover:border-[#FACC15] hover:text-black transition-all active:scale-95"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
