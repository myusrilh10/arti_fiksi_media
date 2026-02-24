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

  // Filter for 3 columns - Only 1 highlighted article per category
  const lensaLokalArticle = ARTICLES.find(a => a.mainCategory === 'Lensa Lokal');
  const lifestyleArticle = ARTICLES.find(a => a.mainCategory === 'Lifestyle');
  const publicInterestArticle = ARTICLES.find(a => a.mainCategory === 'Public Interest');

  // Trending articles (simulated)
  const trendingArticles = ARTICLES.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-6 md:py-8 md:px-6">

      {/* Top Ad Banner */}
      <AdBanner size="large-leaderboard" className="mb-8" />

      {/* Hero Section - Carousel */}
      <section className="mb-12">
        <HeroCarousel articles={carouselArticles} />
      </section>

      {/* Main Categories Section */}
      <section className="mb-24">
        <SectionHeader title="Newest Article" subtitle="Ikuti perkembangan terkini" className="mb-12" />
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#203627]/20">
          {/* Lensa Lokal Column */}
          <div className="space-y-6 md:pr-8 py-8 md:py-0">
            <Link href="/categories/lensa-lokal" className="block group">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#203627]/15">
                <span className="w-1 h-6 bg-lemon-lime flex-shrink-0" />
                <h2 className="font-black font-montserrat-black text-xl uppercase tracking-[0.08em] text-[#203627] group-hover:text-[#203627]/60 transition-colors">
                  Lensa Lokal
                </h2>
              </div>
            </Link>
            <div className="space-y-8">
              {lensaLokalArticle && <ArticleCard article={lensaLokalArticle} />}
            </div>
          </div>

          {/* Lifestyle Column */}
          <div className="space-y-6 md:px-8 py-8 md:py-0">
            <Link href="/categories/lifestyle" className="block group">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#203627]/15">
                <span className="w-1 h-6 bg-lemon-lime flex-shrink-0" />
                <h2 className="font-black font-montserrat-black text-xl uppercase tracking-[0.08em] text-[#203627] group-hover:text-[#203627]/60 transition-colors">
                  Lifestyle
                </h2>
              </div>
            </Link>
            <div className="space-y-8">
              {lifestyleArticle && <ArticleCard article={lifestyleArticle} />}
            </div>
          </div>

          {/* Public Interest Column */}
          <div className="space-y-6 md:pl-8 py-8 md:py-0">
            <Link href="/categories/public-interest" className="block group">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#203627]/15">
                <span className="w-1 h-6 bg-lemon-lime flex-shrink-0" />
                <h2 className="font-black font-montserrat-black text-xl uppercase tracking-[0.08em] text-[#203627] group-hover:text-[#203627]/60 transition-colors">
                  Public Interest
                </h2>
              </div>
            </Link>
            <div className="space-y-8">
              {publicInterestArticle && <ArticleCard article={publicInterestArticle} />}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-10">
          <SectionHeader title="Upcoming Events" subtitle="Jangan lewatkan momen seru" className="mb-0" />
          <Link href="/events" className="hidden md:flex items-center gap-2 text-[11px] font-black font-montserrat-black text-[#203627] uppercase tracking-[0.12em] hover:text-lemon-lime hover:translate-x-1 transition-all duration-200">
            View All <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EVENTS.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-lemon-lime text-[#203627] text-[10px] font-black font-montserrat-black px-2.5 py-1 uppercase tracking-[0.1em]">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-playfair font-bold text-[#203627] leading-snug mb-2.5 line-clamp-2 group-hover:text-[#203627]/70 transition-colors text-base">
                  {event.title}
                </h4>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-gray-500 text-[11px] font-medium uppercase tracking-wider">
                    <Calendar className="w-3 h-3 text-lemon-lime flex-shrink-0" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-[11px] font-medium truncate">
                    <MapPin className="w-3 h-3 text-gray-300 flex-shrink-0" />
                    {event.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Secondary Section - Trending & Ad */}
      <div className="grid lg:grid-cols-12 gap-12 mb-24">

        {/* Trending Section - 8 cols */}
        <div className="lg:col-span-8">
          <div className="bg-gray-50/80 p-8 rounded-2xl border border-gray-100 h-full">
            <div className="flex items-center gap-3 mb-8 pb-5 border-b border-gray-200">
              <span className="w-1 h-7 bg-lemon-lime flex-shrink-0" />
              <div className="flex items-center gap-2 text-[#203627]">
                <TrendingUp className="w-5 h-5" />
                <h3 className="font-black font-montserrat-black uppercase tracking-[0.08em] text-xl leading-none">
                  Trending Now<span className="text-lemon-lime">.</span>
                </h3>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {trendingArticles.map((article, idx) => (
                <Link key={article.id} href={`/articles/${article.slug}`} className="flex gap-4 group items-start">
                  <span className="text-[2.5rem] font-black font-montserrat-black text-gray-200 group-hover:text-lemon-lime transition-colors duration-200 tabular-nums leading-none select-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="pt-1">
                    <span className="text-[10px] font-bold font-montserrat-black uppercase tracking-[0.15em] text-[#203627]/50 mb-1.5 block">{article.category}</span>
                    <h4 className="text-[15px] font-bold font-playfair text-gray-900 leading-snug group-hover:text-[#203627]/60 transition-colors">
                      {article.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Ad Banner - 4 cols */}
        <div className="lg:col-span-4 flex items-center justify-center">
          <AdBanner size="medium-rectangle" className="w-full h-full my-0" />
        </div>
      </div>

      {/* Bottom Ad Slot */}
      <AdBanner size="large-leaderboard" className="hidden lg:flex mt-4 mb-4" />

    </div>
  );
}
