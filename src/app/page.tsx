'use client';

import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import ArticleCard from "@/components/ui/ArticleCard";
import AdBanner from "@/components/ui/AdBanner";
import HeroCarousel from "@/components/ui/HeroCarousel";
import { motion } from "framer-motion";

// Mock Data
const ARTICLES = [
  {
    id: "1",
    title: "Masa Depan Industri Kreatif Indonesia di Era Digital",
    excerpt: "Bagaimana teknologi AI dan blockchain mengubah cara kita menikmati seni dan budaya pop lokal.",
    category: "Teknologi",
    author: "Rizky Ramadhan",
    date: "7 Feb 2026",
    imageUrl: "/images/tech.png",
    slug: "masa-depan-industri-kreatif"
  },
  {
    id: "2",
    title: "5 Kafe Tersembunyi di Jakarta Selatan yang Wajib Dikunjungi",
    excerpt: "Tempat nongkrong asik dengan suasana vintage yang cocok untuk WFC atau sekadar bersantai.",
    category: "Gaya Hidup",
    author: "Sarah Amalia",
    date: "6 Feb 2026",
    imageUrl: "/images/cafe.png",
    slug: "kafe-tersembunyi-jakarta"
  },
  {
    id: "3",
    title: "Mengulik Filosofi di Balik Tren Fashion 'Slow Living'",
    excerpt: "Kenapa semakin banyak brand lokal beralih ke metode produksi yang lebih ramah lingkungan?",
    category: "Fashion",
    author: "Dimas Anggara",
    date: "5 Feb 2026",
    imageUrl: "/images/fashion.png",
    slug: "filosofi-slow-living"
  },
  {
    id: "4",
    title: "Review Film: Eksplorasi Emosi dalam Sinema Modern",
    excerpt: "Sebuah tinjauan mendalam tentang bagaimana sutradara muda mengangkat isu kesehatan mental.",
    category: "Film",
    author: "Dinda Kirana",
    date: "4 Feb 2026",
    imageUrl: "/images/film.png",
    slug: "review-film-modern"
  },
  {
    id: "5",
    title: "Panduan Memulai Podcasting untuk Pemula",
    excerpt: "Alat, tips, dan trik untuk membuat podcast yang didengar ribuan orang.",
    category: "Kreatif",
    author: "Aldi Taher",
    date: "3 Feb 2026",
    imageUrl: "/images/podcast.png",
    slug: "panduan-podcasting"
  },
  {
    id: "6",
    title: "Sejarah Musik Indie di Indonesia: Dari Garasi ke Panggung Besar",
    excerpt: "Perjalanan panjang musisi independen menaklukkan industri musik tanah air.",
    category: "Musik",
    author: "Citra Scholastika",
    date: "2 Feb 2026",
    imageUrl: "/images/music.png",
    slug: "sejarah-musik-indie"
  }
];

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

export default function Home() {
  // Use first 3 articles for carousel
  const carouselArticles = ARTICLES.slice(0, 3);
  // Use the rest for the latest news
  const latestArticles = ARTICLES.slice(3);

  return (
    <div className="container mx-auto px-4 py-8 md:px-6">

      {/* Hero Section - Carousel */}
      <section className="mb-12">
        <HeroCarousel articles={carouselArticles} />
      </section>

      {/* Leaderboard Ad */}
      <AdBanner size="leaderboard" className="hidden md:flex" />
      <AdBanner size="medium-rectangle" className="md:hidden" />

      {/* Latest News */}
      <section className="my-12">
        <SectionHeader title="Latest News" subtitle="Update terkini dari dunia kreatif" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {latestArticles.map((article) => (
            <motion.div key={article.id} variants={itemVariants} className="h-full">
              <ArticleCard article={article} />
            </motion.div>
          ))}
          {/* Add some more to fill grid if needed (simulating more content) */}
          {ARTICLES.slice(0, 2).map((article) => (
            <motion.div key={`repeat-${article.id}`} variants={itemVariants} className="h-full">
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Secondary Ad Slot */}
      <AdBanner size="large-leaderboard" className="hidden lg:flex" />

    </div>
  );
}
