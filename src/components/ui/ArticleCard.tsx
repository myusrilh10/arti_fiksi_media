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
        <Link href={`/articles/${article.slug}`} className="group block h-full">
            <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col h-full bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
                {/* Image Container */}
                <div className={`relative overflow-hidden ${featured ? 'aspect-video w-full' : 'aspect-[4/3]'} bg-gray-100`}>
                    <motion.div
                        className="w-full h-full relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        {/* Gradient Overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {article.imageUrl ? (
                            <Image
                                src={article.imageUrl}
                                alt={article.title}
                                fill
                                priority={featured}
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-gray-300 bg-gray-200">
                                <span className="text-xs font-medium uppercase tracking-widest">Image Placeholder</span>
                            </div>
                        )}
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                        <span className="inline-block bg-white/90 backdrop-blur-md text-black text-[10px] font-extrabold px-3 py-1 uppercase tracking-wider shadow-sm rounded-sm">
                            {article.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                    {/* Metadata */}
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-medium uppercase tracking-wide">
                        <span className="text-gray-900 font-bold">{article.author}</span>
                        <span className="text-gray-300">•</span>
                        <span>{article.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className={`font-serif font-bold leading-tight mb-3 text-gray-900 decoration-primary decoration-2 underline-offset-4 group-hover:underline transition-all duration-200 ${featured ? 'text-2xl md:text-3xl tracking-tight' : 'text-xl tracking-tight'}`}>
                        {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-500 text-sm line-clamp-2 mb-6 flex-1 leading-relaxed">
                        {article.excerpt}
                    </p>

                    {/* Footer / Action */}
                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                        <span className="text-xs font-bold text-black border-b-2 border-primary pb-0.5 uppercase tracking-widest group-hover:border-black transition-colors duration-300">
                            Read Article
                        </span>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
