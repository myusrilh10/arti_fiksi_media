

import ArticleCard from "@/components/ui/ArticleCard";
import AdBanner from "@/components/ui/AdBanner";

export const metadata = {
    title: "Latest Articles | Arti Fiksi Media",
    description: "Temukan artikel terbaru seputar teknologi, gaya hidup, fashion, dan budaya pop.",
};

// Mock Data (duplicated for now)
const ARTICLES = [
    {
        id: "1",
        title: "Masa Depan Industri Kreatif Indonesia di Era Digital",
        excerpt: "Bagaimana teknologi AI dan blockchain mengubah cara kita menikmati seni dan budaya pop lokal.",
        category: "Teknologi",
        author: "Rizky Ramadhan",
        date: "7 Feb 2026",
        imageUrl: "/images/tech.jpg",
        slug: "masa-depan-industri-kreatif"
    },
    {
        id: "2",
        title: "5 Kafe Tersembunyi di Jakarta Selatan yang Wajib Dikunjungi",
        excerpt: "Tempat nongkrong asik dengan suasana vintage yang cocok untuk WFC atau sekadar bersantai.",
        category: "Gaya Hidup",
        author: "Sarah Amalia",
        date: "6 Feb 2026",
        imageUrl: "/images/cafe.jpg",
        slug: "kafe-tersembunyi-jakarta"
    },
    {
        id: "3",
        title: "Mengulik Filosofi di Balik Tren Fashion 'Slow Living'",
        excerpt: "Kenapa semakin banyak brand lokal beralih ke metode produksi yang lebih ramah lingkungan?",
        category: "Fashion",
        author: "Dimas Anggara",
        date: "5 Feb 2026",
        imageUrl: "/images/fashion.jpg",
        slug: "filosofi-slow-living"
    },
    {
        id: "4",
        title: "Review Film: Eksplorasi Emosi dalam Sinema Modern",
        excerpt: "Sebuah tinjauan mendalam tentang bagaimana sutradara muda mengangkat isu kesehatan mental.",
        category: "Film",
        author: "Dinda Kirana",
        date: "4 Feb 2026",
        imageUrl: "/images/film.jpg",
        slug: "review-film-modern"
    },
    {
        id: "5",
        title: "Panduan Memulai Podcasting untuk Pemula",
        excerpt: "Alat, tips, dan trik untuk membuat podcast yang didengar ribuan orang.",
        category: "Kreatif",
        author: "Aldi Taher",
        date: "3 Feb 2026",
        imageUrl: "/images/podcast.jpg",
        slug: "panduan-podcasting"
    },
    {
        id: "6",
        title: "Sejarah Musik Indie di Indonesia: Dari Garasi ke Panggung Besar",
        excerpt: "Perjalanan panjang musisi independen menaklukkan industri musik tanah air.",
        category: "Musik",
        author: "Citra Scholastika",
        date: "2 Feb 2026",
        imageUrl: "/images/music.jpg",
        slug: "sejarah-musik-indie"
    }
];

export default function ArticlesIndexPage() {
    // Group articles by category
    const articlesByCategory = ARTICLES.reduce((acc, article) => {
        const category = article.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(article);
        return acc;
    }, {} as Record<string, typeof ARTICLES>);

    // Get categories in defined order or just sorted
    const categories = Object.keys(articlesByCategory);

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

                <div className="space-y-24">
                    {categories.map((category, index) => (
                        <section key={category} className="relative">
                            <div className="flex items-end justify-between mb-10 border-b border-black/10 pb-4">
                                <h2 className="text-3xl md:text-4xl font-playfair text-black">
                                    {category}
                                </h2>
                                <span className="text-xs font-black font-montserrat-black uppercase tracking-widest text-gray-400 hidden md:block">
                                    0{index + 1} /
                                </span>
                            </div>

                            <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                                {articlesByCategory[category].map((article) => (
                                    <div key={article.id} className="h-full">
                                        <ArticleCard article={article} />
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                <div className="mt-24">
                    <AdBanner size="leaderboard" className="hidden md:flex" />
                    <AdBanner size="medium-rectangle" className="md:hidden" />
                </div>
            </div>
        </div>
    );
}
