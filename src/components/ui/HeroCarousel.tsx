'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % articles.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
    };

    // Auto-advance every 5 seconds
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [articles.length]);

    if (!articles.length) return null;

    const currentArticle = articles[currentIndex];

    return (
        <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-lg bg-gray-900 group">
            {/* Background Image/Placeholder */}
            <div className="absolute inset-0 bg-gray-800">
                {/* Placeholder for now */}
                <div className="w-full h-full flex items-center justify-center text-gray-700 font-bold text-4xl opacity-20 select-none">
                    MEDIA {currentIndex + 1}
                </div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                <div className="max-w-3xl space-y-4">
                    <div className="inline-block bg-primary px-3 py-1 text-xs font-bold text-black uppercase tracking-wider">
                        {currentArticle.category}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        <Link href={`/articles/${currentArticle.slug}`} className="hover:text-primary transition-colors">
                            {currentArticle.title}
                        </Link>
                    </h2>
                    <p className="text-gray-300 md:text-lg line-clamp-2 max-w-2xl">
                        {currentArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-4">
                        <span>{currentArticle.author}</span>
                        <span>•</span>
                        <span>{currentArticle.date}</span>
                    </div>
                </div>
            </div>

            {/* Navigation Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-primary hover:text-black transition-colors md:opacity-0 md:group-hover:opacity-100"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-primary hover:text-black transition-colors md:opacity-0 md:group-hover:opacity-100"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 right-6 flex gap-2">
                {articles.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-white/50 hover:bg-white'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
