'use client';

import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import ArticleCard from "@/components/ui/ArticleCard";
import AdBanner from "@/components/ui/AdBanner";
import HeroCarousel from "@/components/ui/HeroCarousel";
import { motion } from "framer-motion";

import { ARTICLES, EVENTS } from "@/lib/data";
import { Mail, Calendar, MapPin, TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";

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

const TOPICS = [
  "Teknologi", "Gaya Hidup", "Fashion", "Film", "Kreatif", "Musik", "Seni", "Kultur"
];

export default function Home() {
  // Use first 3 articles for carousel
  const carouselArticles = ARTICLES.slice(0, 3);
  // Use the rest for the latest news
  const latestArticles = ARTICLES.slice(3);
  // Trending articles (simulated)
  const trendingArticles = ARTICLES.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-6 md:py-8 md:px-6">

      {/* Hero Section - Carousel */}
      <section className="mb-10">
        <HeroCarousel articles={carouselArticles} />
      </section>

      {/* Topics Bar */}
      <section className="mb-12 border-y border-gray-100 py-4 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-8 min-w-max justify-center px-4">
          <span className="text-[10px] font-black font-montserrat-black uppercase tracking-tighter text-gray-400">Explore Topics:</span>
          {TOPICS.map((topic) => (
            <Link
              key={topic}
              href={`/search?q=${topic}`}
              className="text-xs font-black font-montserrat-black text-gray-800 hover:text-lemon-lime transition-colors uppercase tracking-widest whitespace-nowrap"
            >
              {topic}
            </Link>
          ))}
        </div>
      </section>

      <div className="grid lg:grid-cols-4 gap-12">
        <div className="lg:col-span-3">
          {/* Latest News */}
          <section className="mb-16">
            <SectionHeader title="Latest Stories" subtitle="Update terkini dari dunia kreatif" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-8 md:grid-cols-2"
            >
              {latestArticles.map((article) => (
                <motion.div key={article.id} variants={itemVariants} className="h-full">
                  <ArticleCard article={article} />
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Leaderboard Ad */}
          <div className="mb-16">
            <AdBanner size="leaderboard" className="hidden md:flex" />
            <AdBanner size="medium-rectangle" className="md:hidden" />
          </div>

          {/* Upcoming Events */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <SectionHeader title="Upcoming Events" subtitle="Jangan lewatkan momen seru" className="mb-0" />
              <Link href="#" className="hidden md:flex items-center gap-2 text-sm font-black font-montserrat-black text-lemon-lime uppercase tracking-widest hover:translate-x-1 transition-transform">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 whitespace-normal">
              {EVENTS.map((event) => (
                <motion.div
                  key={event.id}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={event.imageUrl} alt={event.title} fill className="object-cover transition-transform group-hover:scale-110 duration-500" />
                    <div className="absolute top-3 left-3">
                      <span className="bg-lemon-lime/90 backdrop-blur-md text-black text-[10px] font-black font-montserrat-black px-2 py-1 rounded uppercase tracking-tighter">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-black font-montserrat-black text-gray-900 leading-tight mb-2 line-clamp-2 h-10 group-hover:text-lemon-lime transition-colors">
                      {event.title}
                    </h4>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-gray-500 text-[11px] font-medium uppercase tracking-wider">
                        <Calendar className="w-3 h-3 text-lemon-lime" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-[11px] font-medium truncate">
                        <MapPin className="w-3 h-3 text-gray-300" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-12">
          {/* Trending Now */}
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-2 mb-6 text-lemon-lime">
              <TrendingUp className="w-5 h-5 text-lemon-lime" />
              <h3 className="font-black font-montserrat-black uppercase tracking-tighter text-black text-xl leading-none">Trending<span className="text-gray-300">.</span></h3>
            </div>
            <div className="space-y-6">
              {trendingArticles.map((article, idx) => (
                <Link key={article.id} href={`/articles/${article.slug}`} className="flex gap-4 group">
                  <span className="text-3xl font-black font-montserrat-black text-gray-200 group-hover:text-lemon-lime transition-colors tabular-nums leading-none">
                    0{idx + 1}
                  </span>
                  <div>
                    <span className="text-[10px] font-black font-montserrat-black uppercase tracking-widest text-lemon-lime mb-1 block">{article.category}</span>
                    <h4 className="text-sm font-black font-montserrat-black text-gray-900 leading-snug group-hover:text-lemon-lime transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Ad Slot */}
          <AdBanner size="medium-rectangle" className="!my-0" />

          {/* Newsletter Box */}
          <div className="bg-black text-white p-8 rounded-2xl shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-lemon-lime/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
            <Mail className="w-8 h-8 text-lemon-lime mb-4" />
            <h3 className="text-xl font-black font-montserrat-black mb-2">The Weekly Arti</h3>
            <p className="text-gray-400 text-xs mb-6 leading-relaxed">
              Dapatkan kurasi konten terbaik mingguan langsung di inbox kamu.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="email@kamu.com"
                className="w-full bg-white/10 border border-white/20 rounded-md py-2 px-3 text-sm focus:outline-none focus:border-lemon-lime transition-colors"
              />
              <button className="w-full bg-lemon-lime text-black font-black font-montserrat-black py-2 rounded-md transition-transform hover:scale-[1.02] active:scale-95 uppercase tracking-wider">
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </div>

      {/* Secondary Ad Slot */}
      <AdBanner size="large-leaderboard" className="hidden lg:flex mt-12" />

    </div>
  );
}
