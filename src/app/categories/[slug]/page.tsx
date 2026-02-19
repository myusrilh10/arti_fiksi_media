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

export default function CategoryPage() {
    const params = useParams();
    const slug = params.slug as string;

    // Map slug to exactly match Main Category keys
    const slugToCategory: Record<string, keyof typeof CATEGORY_MAPPING> = {
        'lensa-lokal': 'Lensa Lokal',
        'lifestyle': 'Lifestyle',
        'public-interest': 'Public Interest'
    };

    const mainCategory = slugToCategory[slug];

    // Validate if category exists
    if (!mainCategory) {
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

    // Filter articles for this main category
    const categoryArticles = ARTICLES.filter(
        article => article.mainCategory === mainCategory
    );

    return (
        <div className="min-h-screen bg-white">

            <div className="container mx-auto px-4 py-12 md:px-6">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-black font-montserrat-black uppercase tracking-tighter text-[#203627] mb-4">
                        {mainCategory}
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Explore the latest stories, deep dives, and perspectives in {mainCategory}.
                    </p>
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
                        <p className="text-gray-500">No articles found in this category yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
