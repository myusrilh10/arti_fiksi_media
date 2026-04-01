import { getPaginatedArticles } from '@/lib/api';
import { Article } from '@/lib/data';
import Link from 'next/link';
import ArticleCard from '@/components/ui/ArticleCard';
import BottomAdBanner from '@/components/ui/BottomAdBanner';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring" as const, stiffness: 100 }
    }
};

export default async function CategoryPage({ params, searchParams }: { params: Promise<{ slug: string }>, searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const { slug } = await params;
    const resolvedSearchParams = await searchParams;
    const page = typeof resolvedSearchParams.page === 'string' ? parseInt(resolvedSearchParams.page) : 1;

    // Fetch articles specifically matching this category Slug from Strapi
    // We fetch a larger amount OR we can use Strapi's deep filtering. 
    // To support generic fetching, we fetch and filter locally for simplicity, 
    // but in production `filters[category][slug][$eq]` is better. 
    // We will use the existing paginated fetcher for now, and rely on the UI to load them all
    // Let's create a robust filtering here:

    // Convert slug back to readable Title for the Header
    const formattedTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    // 1. Fetch from Strapi (page 1, fetching 100 to ensure we capture them for this category, or rely on a new endpoint. 
    // We'll fetch 50 for now since this is a global list filter).
    const { articles } = await getPaginatedArticles(1, 50);

    // 2. Filter by Category Name natively
    const categoryArticles = articles.filter(
        article =>
            article.category.toLowerCase().replace(/\s+/g, '-') === slug ||
            article.mainCategory.toLowerCase().replace(/\s+/g, '-') === slug
    );

    // 3. Slice for Local Pagination (12 per page)
    const pageSize = 12;
    const totalItems = categoryArticles.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (page - 1) * pageSize;
    const paginatedArticles = categoryArticles.slice(startIndex, startIndex + pageSize);

    if (totalItems === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-black font-montserrat-black mb-4">Empty</h1>
                    <p className="text-gray-600">No articles found in this category yet.</p>
                    <Link href="/" className="text-lemon-lime underline mt-4 block">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-12 md:px-6">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-black font-montserrat-black uppercase tracking-tighter text-[#203627] mb-4">
                        {formattedTitle}
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Explore the latest stories, deep dives, and perspectives in {formattedTitle}.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {paginatedArticles.map((article: Article) => (
                        <div key={article.id}>
                            <ArticleCard article={article} />
                        </div>
                    ))}
                </div>

                {/* Local Pagination Controls */}
                {totalPages > 1 && (
                    <div className="mt-16 flex justify-center items-center gap-4">
                        <Link
                            href={`/categories/${slug}?page=${page - 1}`}
                            className={`px-6 py-3 rounded-full font-bold transition-all ${page <= 1 ? 'bg-gray-100 text-gray-400 pointer-events-none' : 'bg-white border-2 border-[#203627] text-[#203627] hover:bg-[#203627] hover:text-white'}`}
                        >
                            Previous
                        </Link>

                        <span className="text-sm font-medium text-gray-500">
                            Page {page} of {totalPages}
                        </span>

                        <Link
                            href={`/categories/${slug}?page=${page + 1}`}
                            className={`px-6 py-3 rounded-full font-bold transition-all ${page >= totalPages ? 'bg-gray-100 text-gray-400 pointer-events-none' : 'bg-white border-2 border-[#203627] text-[#203627] hover:bg-[#203627] hover:text-white'}`}
                        >
                            Next
                        </Link>
                    </div>
                )}

                <BottomAdBanner className="mt-16" />
            </div>
        </div>
    );
}
