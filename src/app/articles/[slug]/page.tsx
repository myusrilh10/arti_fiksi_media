
import SectionHeader from "@/components/ui/SectionHeader";
import AdBanner from "@/components/ui/AdBanner";
import ArticleCard from "@/components/ui/ArticleCard";
import { notFound } from "next/navigation";

import { ARTICLES } from "@/lib/data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = ARTICLES.find(a => a.slug === slug);
    if (!article) return { title: "Article Not Found" };

    return {
        title: `${article.title} | Arti Fiksi Media`,
        description: article.excerpt,
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = ARTICLES.find(a => a.slug === slug);

    // Fallback for demo purposes if slug doesn't match mock data
    const displayArticle = article || ARTICLES[0];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": displayArticle.title,
        "image": [displayArticle.imageUrl],
        "datePublished": displayArticle.date,
        "author": [{
            "@type": "Person",
            "name": displayArticle.author,
        }]
    };

    return (
        <div className="container mx-auto px-4 py-8 md:px-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="grid gap-12 lg:grid-cols-3">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    <div className="mb-6">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm">{displayArticle.category}</span>
                        <h1 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">{displayArticle.title}</h1>
                        <div className="flex items-center gap-4 text-gray-500 mt-4 text-sm">
                            <span>By {displayArticle.author}</span>
                            <span>•</span>
                            <span>{displayArticle.date}</span>
                        </div>
                    </div>

                    <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden mb-8 relative">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            Article Image Placeholder
                        </div>
                    </div>

                    <article className="prose prose-lg max-w-none text-gray-800">
                        <div dangerouslySetInnerHTML={{ __html: displayArticle.content || '' }} />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                    </article>

                    <AdBanner size="medium-rectangle" className="md:hidden my-8" />
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-1 space-y-8">
                    {/* Ad */}
                    <AdBanner size="medium-rectangle" className="hidden md:flex mx-auto" />

                    {/* Popular/Related */}
                    <div>
                        <SectionHeader title="Popular" className="mb-4" />
                        <div className="space-y-4">
                            {ARTICLES.slice(0, 3).map(a => (
                                <ArticleCard key={a.id} article={{ ...a, imageUrl: a.imageUrl || '/images/tech.png' }} />
                            ))}
                        </div>
                    </div>
                </aside>

            </div>

            <AdBanner size="leaderboard" className="mt-12 hidden md:flex" />

        </div>
    );
}
