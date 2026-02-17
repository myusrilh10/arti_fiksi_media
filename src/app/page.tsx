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

export default function Home() {
  // Use first 3 articles for carousel
  const carouselArticles = ARTICLES.slice(0, 3);

  // Filter for 3 columns
  const insightArticles = ARTICLES.filter(a => a.mainCategory === 'Insight').slice(0, 3);
  const inspireArticles = ARTICLES.filter(a => a.mainCategory === 'Inspire').slice(0, 3);
  const interestArticles = ARTICLES.filter(a => a.mainCategory === 'Interest').slice(0, 3);

  // Trending articles (simulated)
  const trendingArticles = ARTICLES.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-6 md:py-8 md:px-6">

      {/* Hero Section - Carousel */}
      <section className="mb-12">
        <HeroCarousel articles={carouselArticles} />
      </section>

      {/* Main Categories Section - Full Width */}
      {/* Main Categories Section - Full Width with Partitions */}
      {/* Main Categories Section - Full Width with Partitions */}
      <section className="mb-20">
        <SectionHeader title="Newest Article" subtitle="Ikuti perkembangan terkini" className="mb-10" />
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#203627]">
          {/* Insight Column */}
          <div className="space-y-6 md:pr-8 py-8 md:py-0">
            <Link href="/categories/insight" className="block group">
              <div className="flex items-center gap-3 mb-6 border-b-2 border-[#203627] pb-3">
                <span className="w-3 h-3 bg-lemon-lime rounded-full" />
                <h2 className="font-black font-montserrat-black text-2xl uppercase tracking-tighter text-[#203627]">Insight</h2>
              </div>
            </Link>
            <div className="space-y-8">
              {insightArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Inspire Column */}
          <div className="space-y-6 md:px-8 py-8 md:py-0">
            <Link href="/categories/inspire" className="block group">
              <div className="flex items-center gap-3 mb-6 border-b-2 border-[#203627] pb-3">
                <span className="w-3 h-3 bg-lemon-lime rounded-full" />
                <h2 className="font-black font-montserrat-black text-2xl uppercase tracking-tighter text-[#203627]">Inspire</h2>
              </div>
            </Link>
            <div className="space-y-8">
              {inspireArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Interest Column */}
          <div className="space-y-6 md:pl-8 py-8 md:py-0">
            <Link href="/categories/interest" className="block group">
              <div className="flex items-center gap-3 mb-6 border-b-2 border-[#203627] pb-3">
                <span className="w-3 h-3 bg-lemon-lime rounded-full" />
                <h2 className="font-black font-montserrat-black text-2xl uppercase tracking-tighter text-[#203627]">Interest</h2>
              </div>
            </Link>
            <div className="space-y-8">
              {interestArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader title="Upcoming Events" subtitle="Jangan lewatkan momen seru" className="mb-0" />
          <Link href="/events" className="hidden md:flex items-center gap-2 text-sm font-black font-montserrat-black text-lemon-lime uppercase tracking-widest hover:translate-x-1 transition-transform">
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
                  <span className="bg-lemon-lime/90 backdrop-blur-md text-[#203627] text-[10px] font-black font-montserrat-black px-2 py-1 rounded-sm uppercase tracking-tighter">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold font-montserrat-black text-[#203627] leading-tight mb-2 line-clamp-2 h-10 group-hover:text-lemon-lime transition-colors">
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

      {/* Secondary Section - Trending & Newsletter */}
      <div className="grid lg:grid-cols-12 gap-12 mb-20">

        {/* Trending Section - Takes up 8 cols */}
        <div className="lg:col-span-8">
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full">
            <div className="flex items-center gap-2 mb-8 text-[#203627]">
              <TrendingUp className="w-6 h-6" />
              <h3 className="font-black font-montserrat-black uppercase tracking-tighter text-2xl leading-none">Trending Now<span className="text-lemon-lime">.</span></h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {trendingArticles.map((article, idx) => (
                <Link key={article.id} href={`/articles/${article.slug}`} className="flex gap-4 group items-start">
                  <span className="text-4xl font-black font-montserrat-black text-gray-200 group-hover:text-lemon-lime transition-colors tabular-nums leading-none">
                    0{idx + 1}
                  </span>
                  <div>
                    <span className="text-[10px] font-bold font-montserrat-black uppercase tracking-widest text-[#203627] mb-1.5 block opacity-60">{article.category}</span>
                    <h4 className="text-lg font-bold font-playfair text-gray-900 leading-snug group-hover:text-[#203627] transition-colors">
                      {article.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section - Takes up 4 cols */}
        <div className="lg:col-span-4">
          {/* Newsletter Box - Dark Green Background */}
          <div className="bg-[#203627] text-white p-8 rounded-2xl shadow-xl relative overflow-hidden group h-full flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-40 h-40 bg-lemon-lime/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-1000"></div>
            <div className="relative z-10">
              <Mail className="w-10 h-10 text-lemon-lime mb-6" />
              <h3 className="text-2xl font-black font-montserrat-black mb-3 text-white">The Weekly Arti</h3>
              <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                Dapatkan kurasi konten terbaik mingguan langsung di inbox kamu. Tak ada spam, hanya inspirasi.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="email@kamu.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-lemon-lime focus:bg-white/10 transition-colors text-white placeholder-gray-500"
                />
                <button className="w-full bg-lemon-lime text-[#203627] font-black font-montserrat-black py-3 rounded-lg transition-transform hover:scale-[1.02] active:scale-95 uppercase tracking-wider text-sm shadow-lg shadow-lemon-lime/20">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Ad Slot */}
      <AdBanner size="large-leaderboard" className="hidden lg:flex mt-12" />

    </div >
  );
}
