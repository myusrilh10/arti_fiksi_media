import VideoCard from "@/components/ui/VideoCard";
import AdBanner from "@/components/ui/AdBanner";
import { VIDEOS } from "@/lib/data";

export const metadata = {
    title: "Videos | Arti Fiksi Media",
    description: "Watch the latest stories through our cinematic documentaries and interviews.",
};

export default function VideosPage() {
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

                <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                    {VIDEOS.map((video) => (
                        <div key={video.id} className="h-full">
                            <VideoCard video={video} />
                        </div>
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
