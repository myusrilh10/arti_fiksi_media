import Link from 'next/link';
import Image from 'next/image';

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
            <div className={`flex flex-col h-full bg-gray-950 border border-gray-900 overflow-hidden transition-all duration-300 hover:border-primary/50 text-white`}>
                {/* Image Container */}
                <div className={`relative overflow-hidden ${featured ? 'aspect-video w-full' : 'aspect-[4/3]'}`}>
                    {/* Using a placeholder for now as we don't have real images yet, but prepared for Image component */}
                    <div className="w-full h-full bg-gray-800 relative">
                        {/* Fallback/Placeholder if no image */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                            No Image
                        </div>
                        {/* 
                 <Image 
                    src={article.imageUrl} 
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                 />
                 */}
                    </div>
                    <div className="absolute top-4 left-4 bg-primary text-black text-xs font-bold px-2 py-1 uppercase">
                        {article.category}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-5 flex flex-col">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{article.date}</span>
                    </div>

                    <h3 className={`font-bold leading-tight mb-2 group-hover:text-primary transition-colors ${featured ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
                        {article.title}
                    </h3>

                    <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-1">
                        {article.excerpt}
                    </p>

                    <div className="text-xs font-medium text-primary flex items-center gap-1 mt-auto">
                        READ MORE <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
