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
            >
                <div className={`relative overflow-hidden w-full ${featured ? 'aspect-[21/9]' : 'aspect-[4/3]'} group-hover:shadow-xl transition-all duration-500 rounded-t-xl`}>
                    <motion.div
                        className="w-full h-full relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
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
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400">
                                <span className="text-xs font-bold uppercase tracking-widest">No Image</span>
                            </div>
                        )}
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#203627] via-transparent to-transparent opacity-80" />
                    </motion.div>

                    {/* Category Label - Floating */}
                    <div className="absolute top-4 left-4 z-20">
                        <span className="bg-white/95 backdrop-blur-md text-[#203627] text-[10px] font-black font-montserrat-black px-3 py-1.5 uppercase tracking-wider rounded-full shadow-sm">
                            {article.category}
                        </span>
                    </div>
                </div>

                {/* Content - Sky Blue Background */}
                <div className="flex-grow flex flex-col bg-[#9cc4d4] p-6 rounded-b-xl relative z-10 border-t-0 -mt-1 group-hover:bg-[#8bb3c3] transition-colors duration-300">
                    {/* Metadata */}
                    <div className="flex items-center gap-3 text-[10px] text-[#203627]/70 mb-3 font-bold font-montserrat-regular tracking-wide uppercase">
                        <span>{article.author}</span>
                        <span className="w-1 h-1 bg-[#203627] rounded-full" />
                        <span>{article.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className={`font-playfair text-[#203627] font-bold leading-tight mb-3 group-hover:text-white transition-colors duration-300 ${featured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`}>
                        {article.title}
                    </h3>



                    {/* Hover Indicator */}
                    <div className="w-full h-1 bg-[#203627]/10 mt-6 rounded-full overflow-hidden">
                        <div className="w-0 h-full bg-[#203627] group-hover:w-full transition-all duration-500 ease-out" />
                    </div>
                </div>
            </motion.div>
        </Link >
    );
}
