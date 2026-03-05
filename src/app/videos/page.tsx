import Link from "next/link";
import VideoCard from "@/components/ui/VideoCard";
import AdBanner from "@/components/ui/AdBanner";
import { getPaginatedVideos } from "@/lib/api";
import { Video } from "@/lib/data";

export const metadata = {
    title: "Videos | Arti Fiksi Media",
    description: "Watch the latest stories through our cinematic documentaries and interviews.",
};

export default async function VideosPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
    const searchParamsData = await searchParams;
    const currentPage = Number(searchParamsData.page) || 1;
    const { videos, meta } = await getPaginatedVideos(currentPage, 12);

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-16 md:px-6">

                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black font-montserrat-black mb-4 tracking-tighter uppercase">
                        Videos
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base">
                        Eksplorasi visual melalui dokumentasi, wawancara, dan cerita-cerita menarik lainnya.
                    </p>
                </div>

                {videos.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-24 text-gray-400">
                        <p className="text-lg font-semibold">Belum ada video yang dipublikasikan.</p>
                    </div>
                ) : (
                    <div className="space-y-16">
                        <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                            {videos.map((video: Video) => (
                                <div key={video.id} className="h-full">
                                    <VideoCard video={video} />
                                </div>
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        {meta && meta.pageCount > 1 && (
                            <div className="flex items-center justify-center gap-4 mt-16 pt-8 border-t border-black/10">
                                {currentPage > 1 ? (
                                    <Link
                                        href={`/videos?page=${currentPage - 1}`}
                                        className="px-6 py-2 border border-[#203627] text-[#203627] font-bold uppercase tracking-wider text-xs hover:bg-[#203627] hover:text-white transition-colors"
                                    >
                                        Previous
                                    </Link>
                                ) : (
                                    <span className="px-6 py-2 border border-gray-200 text-gray-400 font-bold uppercase tracking-wider text-xs cursor-not-allowed">
                                        Previous
                                    </span>
                                )}

                                <span className="text-sm font-medium text-gray-500">
                                    Page {currentPage} of {meta.pageCount}
                                </span>

                                {currentPage < meta.pageCount ? (
                                    <Link
                                        href={`/videos?page=${currentPage + 1}`}
                                        className="px-6 py-2 border border-[#203627] text-[#203627] font-bold uppercase tracking-wider text-xs hover:bg-[#203627] hover:text-white transition-colors"
                                    >
                                        Next
                                    </Link>
                                ) : (
                                    <span className="px-6 py-2 border border-gray-200 text-gray-400 font-bold uppercase tracking-wider text-xs cursor-not-allowed">
                                        Next
                                    </span>
                                )}
                            </div>
                        )}
                    </div>
                )}

                <div className="mt-24">
                    <AdBanner size="leaderboard" className="hidden md:flex" />
                    <AdBanner size="medium-rectangle" className="md:hidden" />
                </div>
            </div>
        </div>
    );
}
