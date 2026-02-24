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
        <div className="relative w-full aspect-[4/5] md:aspect-[2.35/1] overflow-hidden rounded-2xl bg-gray-900 group shadow-2xl">
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
                            className="object-cover transition-transform duration-[8000ms] ease-out scale-100 group-hover:scale-[1.02]"
                            sizes="100vw"
                        />
                    ) : (
                        <div className="w-full h-full bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                            <span className="text-gray-700 font-bold text-4xl opacity-20">ARTI FIKSI</span>
                        </div>
                    )}

                    {/* Cinematic Gradient Overlays — strengthened for headline contrast */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/[0.92] via-black/60 to-black/10" />
                    <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/20 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content Content - Re-renders on slide change to trigger animations */}
            <div className="absolute inset-0 flex items-end p-8 md:p-12 lg:p-16 z-20 pointer-events-none">
                <div className="max-w-4xl w-full pointer-events-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`content-${currentIndex}`}
                            initial="hidden"
                            animate="visible"
                            className="space-y-4 md:space-y-6"
                        >
                            {/* Category, Author & Date */}
                            <motion.div variants={contentVariants} custom={1} className="flex items-center flex-wrap gap-3">
                                {currentArticle.category && (
                                    <span className="inline-block bg-lemon-lime text-black text-[10px] md:text-xs font-black font-montserrat-black px-3 py-1 uppercase tracking-widest rounded-sm shadow-lg">
                                        {currentArticle.category}
                                    </span>
                                )}
                                <div className="flex items-center gap-2">
                                    <span className="text-lemon-lime text-[10px] md:text-xs font-black font-montserrat-black uppercase tracking-wider">
                                        By {currentArticle.author}
                                    </span>
                                    <span className="text-gray-400 text-xs">•</span>
                                    <span className="text-gray-300 text-[10px] md:text-xs font-medium tracking-wide uppercase">
                                        {currentArticle.date}
                                    </span>
                                </div>
                            </motion.div>

                            {/* Title */}
                            <motion.h2
                                variants={contentVariants}
                                custom={2}
                                className="font-montserrat-black text-2xl md:text-4xl lg:text-5xl font-black text-white leading-[1.15] md:leading-[1.08] tracking-tight drop-shadow-2xl"
                            >
                                <Link href={`/articles/${currentArticle.slug}`} className="hover:text-lemon-lime transition-colors duration-300">
                                    {currentArticle.title}
                                </Link>
                            </motion.h2>

                            {/* Excerpt */}
                            <motion.p variants={contentVariants} custom={3} className="text-gray-300 text-xs md:text-base line-clamp-3 md:line-clamp-2 max-w-2xl leading-relaxed drop-shadow-md font-medium">
                                {currentArticle.excerpt}
                            </motion.p>

                            {/* Read More Link — stronger CTA */}
                            <motion.div variants={contentVariants} custom={4} className="pt-4">
                                <Link
                                    href={`/articles/${currentArticle.slug}`}
                                    className="inline-flex items-center gap-2 text-black font-black font-montserrat-black uppercase tracking-widest text-xs md:text-sm bg-lemon-lime px-4 py-2 hover:bg-white hover:text-black transition-all duration-200"
                                >
                                    Read Full Story <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Side Navigation Buttons */}
            <div className="absolute inset-y-0 left-0 flex items-center z-30 px-4 md:px-8 pointer-events-none">
                <button
                    onClick={prevSlide}
                    className="p-3 md:p-4 rounded-full bg-black/10 backdrop-blur-md text-white border border-white/10 hover:bg-lemon-lime hover:text-black hover:border-lemon-lime transition-all duration-300 pointer-events-auto opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center z-30 px-4 md:px-8 pointer-events-none">
                <button
                    onClick={nextSlide}
                    className="p-3 md:p-4 rounded-full bg-black/10 backdrop-blur-md text-white border border-white/10 hover:bg-lemon-lime hover:text-black hover:border-lemon-lime transition-all duration-300 pointer-events-auto opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Bottom Progress/Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 bg-black/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/5">
                {articles.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            setCurrentIndex(idx);
                        }}
                        className={`transition-all duration-500 rounded-full ${idx === currentIndex ? 'w-8 bg-lemon-lime' : 'w-2 bg-white/20 hover:bg-white/50'
                            } h-1.5`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
