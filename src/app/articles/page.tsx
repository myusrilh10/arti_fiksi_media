
import SectionHeader from "@/components/ui/SectionHeader";
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
    return (
        <div className="container mx-auto px-4 py-12 md:px-6">

            <SectionHeader title="All Articles" subtitle="Jelajahi semua cerita kami" />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                {ARTICLES.map((article) => (
                    <div key={article.id} className="h-full">
                        <ArticleCard article={article} />
                    </div>
                ))}
                {/* Duplicate simply to fill page */}
                {ARTICLES.map((article) => (
                    <div key={`dup-${article.id}`} className="h-full">
                        <ArticleCard article={article} />
                    </div>
                ))}
            </div>

            <div className="flex justify-center mb-12">
                <button className="px-6 py-3 border border-gray-300 text-gray-600 rounded-md hover:bg-primary hover:text-black hover:border-primary transition-colors font-medium">
                    Load More Articles
                </button>
            </div>

            <AdBanner size="leaderboard" className="hidden md:flex" />
            <AdBanner size="medium-rectangle" className="md:hidden" />

        </div>
    );
}
