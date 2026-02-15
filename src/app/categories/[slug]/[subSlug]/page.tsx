'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ARTICLES, CATEGORY_MAPPING } from '@/lib/data';
import ArticleCard from '@/components/ui/ArticleCard';
import SectionHeader from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100
        }
    }
};

// Helper to slugify category names
const slugify = (text: string) => {
    return text.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
};

export default function SubCategoryPage() {
    const params = useParams();
    const slug = params.slug as string;
    const subSlug = params.subSlug as string;

    // Capitalize slug to match Main Category keys
    const mainCategory = slug.charAt(0).toUpperCase() + slug.slice(1) as keyof typeof CATEGORY_MAPPING;

    // Validate Main Category
    if (!CATEGORY_MAPPING[mainCategory]) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-black font-montserrat-black mb-4">404</h1>
                    <p className="text-gray-600">Category not found</p>
                    <Link href="/" className="text-lemon-lime underline mt-4 block">Return Home</Link>
                </div>
            </div>
        );
    }

    const subCategories = CATEGORY_MAPPING[mainCategory];

    // Find the current sub-category name from the slug
    const currentSubCategory = subCategories.find(sub => slugify(sub) === subSlug);

    // Validate Sub Category
    if (!currentSubCategory) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-black font-montserrat-black mb-4">404</h1>
                    <p className="text-gray-600">Sub-category not found</p>
                    <Link href={`/categories/${slug}`} className="text-lemon-lime underline mt-4 block">Return to {mainCategory}</Link>
                </div>
            </div>
        );
    }

    // Filter articles for this sub-category
    const categoryArticles = ARTICLES.filter(
        article => article.category === currentSubCategory
    );

    return (
        <div className="min-h-screen bg-white">
            {/* Sub-Navigation Header */}
            <div className="bg-gray-50 border-b border-gray-200 sticky top-16 z-40">
                <div className="container mx-auto px-4 py-4 md:px-6 overflow-x-auto">
                    <div className="flex items-center justify-start md:justify-center gap-6 md:gap-12 min-w-max">
                        <Link href={`/categories/${slug}`} className="font-black font-montserrat-black uppercase tracking-widest text-gray-400 hover:text-[#203627] text-lg mr-4 border-r-2 border-gray-300 pr-6 transition-colors">
                            {mainCategory}
                        </Link>
                        {subCategories.map((sub) => {
                            const isActive = sub === currentSubCategory;
                            return (
                                <Link
                                    key={sub}
                                    href={`/categories/${slug}/${slugify(sub)}`}
                                    className={`text-xs md:text-sm font-bold font-montserrat-regular uppercase tracking-wider transition-colors ${isActive
                                            ? 'text-[#203627] underline decoration-2 decoration-lemon-lime underline-offset-4'
                                            : 'text-gray-500 hover:text-lemon-lime'
                                        }`}
                                >
                                    {sub}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 md:px-6">
                <div className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-2 font-black font-montserrat-black uppercase tracking-widest">
                        <Link href={`/categories/${slug}`} className="hover:text-lemon-lime transition-colors">{mainCategory}</Link>
                        <span>/</span>
                        <span className="text-[#203627]">{currentSubCategory}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black font-montserrat-black uppercase tracking-tighter text-[#203627] mb-4">
                        {currentSubCategory}
                    </h1>
                </div>

                {categoryArticles.length > 0 ? (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {categoryArticles.map((article) => (
                            <motion.div key={article.id} variants={itemVariants}>
                                <ArticleCard article={article} />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <div className="text-center py-20 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                        <p className="text-gray-500">No articles found in this sub-category yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
