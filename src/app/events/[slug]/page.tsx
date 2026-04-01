import Image from "next/image";
import { Calendar, MapPin, Share2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import EventCard from "@/components/ui/EventCard";
import AdBanner from "@/components/ui/AdBanner";
import BottomAdBanner from "@/components/ui/BottomAdBanner";
import { notFound } from "next/navigation";
import { getEventBySlug, getEvents } from "@/lib/api";
import { Event } from "@/lib/data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const event = await getEventBySlug(slug);
    if (!event) return { title: "Event Not Found" };

    return {
        title: `${event.title} | Arti Fiksi Media`,
        description: event.description,
        openGraph: {
            images: [{ url: event.imageUrl }],
        },
    };
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const event = await getEventBySlug(slug);

    if (!event) {
        notFound();
    }

    const allEvents = await getEvents();
    const otherEvents = allEvents.filter((e: Event) => e.id !== event.id).slice(0, 3);

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Hero Section */}
            <div className="relative h-[45vh] md:h-[65vh] w-full overflow-hidden">
                <Image
                    src={event.imageUrl}
                    alt={event.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-4 md:p-12">
                    <div className="container mx-auto">
                        <Link
                            href="/events"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-[#e7fe41] transition-colors mb-4 md:mb-6 text-sm font-medium"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Kembali ke Daftar Event
                        </Link>

                        <div className="flex flex-col gap-3">
                            <span className="bg-[#e7fe41] text-[#203627] text-[10px] md:text-xs font-black font-montserrat-black px-4 py-1.5 uppercase tracking-wider rounded-full self-start">
                                {event.category}
                            </span>
                            <h1 className="text-2xl sm:text-3xl md:text-5xl font-playfair font-bold text-white leading-tight max-w-4xl">
                                {event.title}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 mt-12 md:px-6">
                <div className="grid gap-12 lg:grid-cols-3">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2">
                        <div className="flex flex-wrap gap-8 py-8 border-y border-gray-100 mb-10">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gray-50 rounded-xl text-[#203627]">
                                    <Calendar className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Waktu</p>
                                    <p className="font-bold text-gray-800">{event.date}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gray-50 rounded-xl text-[#203627]">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Lokasi</p>
                                    <p className="font-bold text-gray-800">{event.location}</p>
                                </div>
                            </div>

                            <button className="ml-auto p-3 hover:bg-gray-50 rounded-xl text-gray-400 hover:text-[#203627] transition-colors border border-gray-100">
                                <Share2 className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed overflow-hidden break-words font-serif whitespace-pre-wrap">
                            {event.description ? (
                                <p className="text-xl md:text-2xl text-[#203627] font-medium leading-relaxed mb-8">
                                    {event.description}
                                </p>
                            ) : (
                                <p className="text-gray-400 italic mb-8 border-l-4 border-gray-200 pl-4">Tidak ada deskripsi tersedia untuk event ini.</p>
                            )}
                        </div>

                        {event.registrationLink && (
                            <div className="flex justify-center md:justify-start mt-12 mb-6">
                                <a
                                    href={event.registrationLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#203627] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-black transition-all transform hover:-translate-y-1 shadow-xl inline-block"
                                >
                                    Daftar Sekarang
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Sidebar */}
                    <aside className="lg:col-span-1 space-y-12">
                        <div className="bg-[#203627] rounded-3xl p-8 text-white">
                            <h3 className="text-2xl font-playfair font-bold mb-4 text-[#e7fe41]">Ingin Liputan?</h3>
                            <p className="text-white/70 text-sm mb-6">
                                Punya acara seru yang ingin dipublikasikan di Arti Fiksi Media? Hubungi tim editorial kami sekarang.
                            </p>
                            <a href="mailto:artifiksimedia@gmail.com" className="inline-block border-2 border-[#e7fe41] text-[#e7fe41] px-6 py-3 rounded-full font-bold hover:bg-[#e7fe41] hover:text-[#203627] transition-all">
                                Hubungi Kami
                            </a>
                        </div>

                        <AdBanner size="medium-rectangle" className="mx-auto" />

                        <div>
                            <SectionHeader title="Event Lainnya" className="mb-8" />
                            <div className="space-y-8">
                                {otherEvents.map((e: Event) => (
                                    <div key={e.id}>
                                        <EventCard event={e} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>

                <BottomAdBanner className="mt-20" />
            </div>
        </div>
    );
}
