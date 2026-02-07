'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

interface ArticleCardProps {
    article: Article;
    featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
    return (
        <Link href={`/articles/${article.slug}`} className="block h-full">
            <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`flex flex-col h-full bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300`}
            >
                {/* Image Container */}
                <div className={`relative overflow-hidden ${featured ? 'aspect-video w-full' : 'aspect-[4/3]'} bg-gray-200`}>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full relative"
                    >
                        {/* Fallback/Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            Image Placeholder
                        </div>
                        {/* 
                 <Image 
                    src={article.imageUrl} 
                    alt={article.title}
                    fill
                    className="object-cover"
                 />
                 */}
                    </motion.div>
                    <div className="absolute top-4 left-4 bg-primary text-black text-xs font-bold px-3 py-1 uppercase tracking-wider shadow-sm">
                        {article.category}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-medium">
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                    </div>

                    <h3 className={`font-bold leading-tight mb-3 text-gray-900 group-hover:text-primary transition-colors ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                        {article.title}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1 leading-relaxed">
                        {article.excerpt}
                    </p>

                    <div className="text-xs font-bold text-black border-b-2 border-primary w-max pb-0.5 mt-auto uppercase tracking-wide">
                        Read Article
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
