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
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col h-full group"
            >
                {/* Image Frame */}
                <div className={`relative overflow-hidden ${featured ? 'aspect-video' : 'aspect-[3/2]'} bg-gray-50 border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow duration-500`}>
                    <motion.div
                        className="w-full h-full relative"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
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
                            <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                                <span className="text-xs font-medium uppercase tracking-widest">ARTI FIKSI</span>
                            </div>
                        )}
                    </motion.div>

                    {/* Minimalist Category */}
                    <div className="absolute top-4 left-4 z-20">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[9px] font-black font-montserrat-black px-2 py-1 uppercase tracking-[0.2em] rounded-sm">
                            {article.category}
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="pt-6 flex flex-col items-center text-center px-2">
                    {/* Metadata */}
                    <div className="flex items-center justify-center gap-3 text-[9px] text-gray-400 mb-3 font-black font-montserrat-black uppercase tracking-[0.2em]">
                        <span>{article.author}</span>
                        <span className="h-0.5 w-4 bg-gray-100" />
                        <span>{article.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className={`font-playfair text-gray-900 group-hover:text-dark-green transition-colors leading-snug mb-3 ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                        {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-500 text-xs md:text-sm line-clamp-2 leading-relaxed max-w-sm">
                        {article.excerpt}
                    </p>

                    {/* Read More Link */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-[10px] font-black font-montserrat-black text-gray-900 border-b-2 border-lemon-lime pb-1 uppercase tracking-widest">
                            Read Story
                        </span>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
