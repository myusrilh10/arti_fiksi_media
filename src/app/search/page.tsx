import { ARTICLES } from "@/lib/data";
import ArticleCard from "@/components/ui/ArticleCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<{ q?: string }>;
}) {
    const { q } = await searchParams;
    const query = q?.toLowerCase() || "";

    const results = ARTICLES.filter((article) => {
        const titleMatch = article.title.toLowerCase().includes(query);
        const categoryMatch = article.category.toLowerCase().includes(query);
        const excerptMatch = article.excerpt.toLowerCase().includes(query);
        return titleMatch || categoryMatch || excerptMatch;
    });

    return (
        <div className="container mx-auto px-4 py-12 md:px-6 min-h-[60vh]">
            <SectionHeader
                title={query ? `Search: ${query}` : "Search Articles"}
                subtitle={query ? `Found ${results.length} results` : "Enter a keyword to search"}
            />

            {results.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {results.map(article => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-gray-100 rounded-lg bg-gray-50/50">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4 text-2xl">🔍</div>
                    <h3 className="text-xl font-bold text-gray-800">No matching articles found</h3>
                    <p className="mt-2 text-gray-500 max-w-sm">
                        We couldn't find anything matching "{query}". Try checking your spelling or use more general keywords.
                    </p>
                </div>
            )}
        </div>
    );
}
