import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, TrendingUp, ArrowRight } from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";
import ArticleCard from "@/components/ui/ArticleCard";
import AdBanner from "@/components/ui/AdBanner";
import HeroCarousel from "@/components/ui/HeroCarousel";
import VideoCard from "@/components/ui/VideoCard";

import { getArticles, getEvents, getVideos, getAdvertisements } from "@/lib/api";
import { Article, Event, Video, Advertisement } from "@/lib/data";

export default async function Home() {
  // Parallel fetch for better performance
  const [articles, events, videos, advertisements] = await Promise.all([
    getArticles(),
    getEvents(),
    getVideos(),
    getAdvertisements()
  ]);

  // Hero carousel — first 3 featured articles or fallback to latest 3
  const featuredArticles = articles.filter((a: Article) => a.isFeatured);
  const carouselArticles = featuredArticles.length > 0
    ? featuredArticles.slice(0, 3)
    : articles.slice(0, 3);

  // Latest article per main category (articles already sorted by publishedAt:desc from API)
  const matchCategory = (article: Article, keyword: string) => {
    const cat = (article.mainCategory ?? article.category ?? '').toLowerCase();
    return cat.includes(keyword.toLowerCase());
  };
  const lensaLokalArticle = articles.find((a: Article) => matchCategory(a, 'lensa lokal'));
  const lifestyleArticle = articles.find((a: Article) => matchCategory(a, 'lifestyle'));
  const publicInterestArticle =
    articles.find((a: Article) => matchCategory(a, 'public interest')) ??
    articles.find((a: Article) => matchCategory(a, 'news'));

  // Trending — sort by views first, then is_trending/isFeatured, then latest
  const trendingArticles = [...articles].sort((a, b) => {
    // 1. Sort by views (descending)
    const viewsA = a.views || 0;
    const viewsB = b.views || 0;
    if (viewsA !== viewsB) {
      return viewsB - viewsA;
    }
    // 2. Fallback to isTrending or isFeatured
    const aTrending = (a.isTrending || a.isFeatured) ? 1 : 0;
    const bTrending = (b.isTrending || b.isFeatured) ? 1 : 0;
    return bTrending - aTrending;
  }).slice(0, 4);

  // Featured Videos
  const homepageVideos = videos.slice(0, 3);

  // Upcoming Events
  const homepageEvents = events.slice(0, 4);

  // Extract ads by position
  const topAd = advertisements.find((ad: Advertisement) => ad.position === 'top');
  const middleAd = advertisements.find((ad: Advertisement) => ad.position === 'middle');
  const bottomAd = advertisements.find((ad: Advertisement) => ad.position === 'bottom');

  return (
    <div className="py-6 md:py-8">

      {/* Top Ad Banner */}
      <div className="container mx-auto px-4 md:px-6 mb-8">
        <AdBanner size="large-leaderboard" ad={topAd} />
      </div>

      {/* Hero Carousel — Full Width */}
      <section className="mb-12 w-full">
        <HeroCarousel articles={carouselArticles} />
      </section>

      <div className="container mx-auto px-4 md:px-6">

        {/* Newest Articles by Category */}
        <section className="mb-16 md:mb-24">
          <SectionHeader title="Newest Article" subtitle="Ikuti perkembangan terkini" className="mb-10 md:mb-12" />
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#203627]/20">

            {/* Lensa Lokal */}
            <div className="flex flex-col gap-6 md:pr-8 py-8 md:py-0">
              <Link href="/categories/lensa-lokal" className="block group">
                <div className="flex items-center gap-3 mb-2 pb-3 border-b border-[#203627]/15">
                  <span className="w-1 h-6 bg-lemon-lime flex-shrink-0" />
                  <h2 className="font-black font-montserrat-black text-xl uppercase tracking-[0.08em] text-[#203627] group-hover:text-[#203627]/60 transition-colors">
                    Lensa Lokal
                  </h2>
                </div>
              </Link>
              <div className="flex-1">
                {lensaLokalArticle && <ArticleCard article={lensaLokalArticle} />}
              </div>
            </div>

            {/* Lifestyle */}
            <div className="flex flex-col gap-6 md:px-8 py-8 md:py-0">
              <Link href="/categories/lifestyle" className="block group">
                <div className="flex items-center gap-3 mb-2 pb-3 border-b border-[#203627]/15">
                  <span className="w-1 h-6 bg-lemon-lime flex-shrink-0" />
                  <h2 className="font-black font-montserrat-black text-xl uppercase tracking-[0.08em] text-[#203627] group-hover:text-[#203627]/60 transition-colors">
                    Lifestyle
                  </h2>
                </div>
              </Link>
              <div className="flex-1">
                {lifestyleArticle && <ArticleCard article={lifestyleArticle} />}
              </div>
            </div>

            {/* Public Interest / News */}
            <div className="flex flex-col gap-6 md:pl-8 py-8 md:py-0">
              <Link href="/categories/public-interest" className="block group">
                <div className="flex items-center gap-3 mb-2 pb-3 border-b border-[#203627]/15">
                  <span className="w-1 h-6 bg-lemon-lime flex-shrink-0" />
                  <h2 className="font-black font-montserrat-black text-xl uppercase tracking-[0.08em] text-[#203627] group-hover:text-[#203627]/60 transition-colors">
                    Public Interest
                  </h2>
                </div>
              </Link>
              <div className="flex-1">
                {publicInterestArticle && <ArticleCard article={publicInterestArticle} />}
              </div>
            </div>

          </div>
        </section>

        {/* Trending + Ad */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-24">
          <div className="lg:col-span-8">
            <div className="bg-gray-50/80 p-5 md:p-8 rounded-2xl border border-gray-100 h-full">
              <div className="flex items-center gap-3 mb-6 md:mb-8 pb-5 border-b border-gray-200">
                <span className="w-1 h-7 bg-lemon-lime flex-shrink-0" />
                <div className="flex items-center gap-2 text-[#203627]">
                  <TrendingUp className="w-5 h-5" />
                  <h3 className="font-black font-montserrat-black uppercase tracking-[0.08em] text-xl leading-none">
                    Trending Now<span className="text-lemon-lime">.</span>
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-8">
                {trendingArticles.map((article: Article, idx: number) => (
                  <Link key={article.id} href={`/articles/${article.slug}`} className="flex gap-4 group items-start">
                    <span className="text-[2.5rem] font-black font-montserrat-black text-gray-200 group-hover:text-lemon-lime transition-colors duration-200 tabular-nums leading-none select-none">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="pt-1">
                      <span className="text-[10px] font-bold font-montserrat-black uppercase tracking-[0.15em] text-[#203627]/50 mb-1.5 block">
                        {article.category}
                      </span>
                      <h4 className="text-[15px] font-bold font-playfair text-gray-900 leading-snug group-hover:text-[#203627]/60 transition-colors line-clamp-3">
                        {article.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex items-center justify-center">
            <AdBanner size="medium-rectangle" className="w-full h-full my-0" ad={middleAd} />
          </div>
        </div>

        {/* Upcoming Events */}
        {homepageEvents.length > 0 && (
          <section className="mb-16 md:mb-24">
            <div className="flex items-center justify-between mb-8 md:mb-10">
              <SectionHeader title="Upcoming Events" subtitle="Jangan lewatkan momen seru" className="mb-0" />
              <Link href="/events" className="flex items-center gap-2 text-[11px] font-black font-montserrat-black text-[#203627] uppercase tracking-[0.12em] hover:text-lemon-lime hover:translate-x-1 transition-all duration-200">
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile: horizontal scroll, Desktop: grid */}
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0">
              {homepageEvents.map((event: Event) => (
                <Link key={event.id} href={`/events/${event.slug}`} className="block group flex-none w-[75vw] sm:w-[55vw] md:w-auto snap-start">
                  <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
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
                    <div className="p-4 flex flex-col flex-grow">
                      <h4 className="font-playfair font-bold text-[#203627] leading-snug mb-2.5 line-clamp-2 group-hover:text-[#203627]/70 transition-colors text-base flex-grow">
                        {event.title}
                      </h4>
                      <div className="space-y-1.5 mt-auto">
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
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Featured Videos */}
        {homepageVideos.length > 0 && (
          <section className="mb-16 md:mb-24">
            <div className="flex items-center justify-between mb-8 md:mb-10">
              <SectionHeader title="Featured Videos" subtitle="Tonton tayangan eksklusif kami" className="mb-0" />
              <Link href="/videos" className="flex items-center gap-2 text-[11px] font-black font-montserrat-black text-[#203627] uppercase tracking-[0.12em] hover:text-lemon-lime hover:translate-x-1 transition-all duration-200">
                View All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile: horizontal scroll, Desktop: grid */}
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0">
              {homepageVideos.map((video: Video) => (
                <div key={video.id} className="flex-none w-[80vw] sm:w-[60vw] md:w-auto snap-start h-[280px] md:h-[300px]">
                  <VideoCard video={video} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Ad */}
        <AdBanner size="large-leaderboard" className="hidden lg:flex mt-4 mb-4" ad={bottomAd} />

      </div>
    </div>
  );
}
