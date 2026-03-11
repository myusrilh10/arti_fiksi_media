import Link from "next/link";
import ArticleCard from "@/components/ui/ArticleCard";
import AdBanner from "@/components/ui/AdBanner";
import { getPaginatedArticles, getAdvertisements } from "@/lib/api";
import { Article, Advertisement } from "@/lib/data";

export const metadata = {
    title: "Latest Articles | Arti Fiksi Media",
    description: "Temukan artikel terbaru seputar teknologi, gaya hidup, fashion, dan budaya pop.",
};

export default async function ArticlesIndexPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const searchParamsData = await searchParams;
    const currentPage = Number(searchParamsData.page) || 1;
    const [{ articles, meta }, advertisements] = await Promise.all([
        getPaginatedArticles(currentPage, 12),
        getAdvertisements()
    ]);
    const bottomAd = advertisements.find((ad: Advertisement) => ad.position === 'bottom') || advertisements[0];

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-16 md:px-6">

                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black font-montserrat-black mb-4 tracking-tighter uppercase">
                        Stories
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base">
                        Explore the latest from our writers across technology, lifestyle, and culture.
                    </p>
                </div>

                {articles.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 text-gray-400">
                        <p className="text-lg font-semibold">Belum ada artikel yang dipublikasikan.</p>
                    </div>
                ) : (
                    <div className="space-y-16">
                        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                            {articles.map((article: Article) => (
                                <div key={article.id} className="h-full">
                                    <ArticleCard article={article} />
                                </div>
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        {meta && meta.pageCount > 1 && (
                            <div className="flex items-center justify-center gap-4 mt-16 pt-8 border-t border-black/10">
                                {currentPage > 1 ? (
                                    <Link
                                        href={`/articles?page=${currentPage - 1}`}
                                        className="px-6 py-2 border border-[#203627] text-[#203627] font-bold uppercase tracking-wider text-xs hover:bg-[#203627] hover:text-white transition-colors"
                                    >
                                        Previous
                                    </Link>
                                ) : (
                                    <span className="px-6 py-2 border border-gray-200 text-gray-400 font-bold uppercase tracking-wider text-xs cursor-not-allowed">
                                        Previous
                                    </span>
                                )}

                                <span className="text-sm font-medium text-gray-500">
                                    Page {currentPage} of {meta.pageCount}
                                </span>

                                {currentPage < meta.pageCount ? (
                                    <Link
                                        href={`/articles?page=${currentPage + 1}`}
                                        className="px-6 py-2 border border-[#203627] text-[#203627] font-bold uppercase tracking-wider text-xs hover:bg-[#203627] hover:text-white transition-colors"
                                    >
                                        Next
                                    </Link>
                                ) : (
                                    <span className="px-6 py-2 border border-gray-200 text-gray-400 font-bold uppercase tracking-wider text-xs cursor-not-allowed">
                                        Next
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                )}
                {/* Bottom Ad */}
                <AdBanner size="leaderboard" className="mt-16" />
            </div>
        </div>
    );
}
