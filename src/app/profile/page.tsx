import SectionHeader from "@/components/ui/SectionHeader";
import AdBanner from "@/components/ui/AdBanner";
import Image from "next/image";

export const metadata = {
    title: "Profile | Arti Fiksi Media",
    description: "Tentang Arti Fiksi Media, visi, misi, dan tim kami.",
};

export default function ProfilePage() {
    return (
        <div className="container mx-auto px-4 py-12 md:px-6">

            {/* About Us */}
            <section className="mb-16 grid gap-12 md:grid-cols-2 items-center">
                <div>
                    <SectionHeader title="About Us" subtitle="Siapa Kami" />
                    <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        Arti Fiksi Media adalah platform media digital yang berfokus pada eksplorasi budaya kreatif, gaya hidup, dan teknologi modern. Kami percaya bahwa setiap cerita memiliki arti, dan fiksi bisa menjadi cerminan realitas yang menginspirasi.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Didirikan pada tahun 2026, kami berkomitmen untuk menjadi wadah bagi suara-suara baru dan ide-ide liar yang membentuk masa depan industri kreatif di Indonesia.
                    </p>
                </div>
                <div className="relative aspect-video w-full bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                        Office / Team Photo Placeholder
                    </div>
                </div>
            </section>

            <AdBanner size="leaderboard" className="hidden md:flex mb-16" />

            {/* Vision & Mission */}
            <section className="mb-16">
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                        <h3 className="text-xl font-bold text-primary mb-4 uppercase">Visi</h3>
                        <p className="text-gray-300">
                            Menjadi ekosistem media terdepan yang menghubungkan kreator, inovator, dan audiens melalui konten berkualitas tinggi dan bermakna.
                        </p>
                    </div>
                    <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                        <h3 className="text-xl font-bold text-primary mb-4 uppercase">Misi</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Menyajikan jurnalisme gaya hidup yang mendalam dan relevan.</li>
                            <li>Mendukung pertumbuhan komunitas kreatif lokal.</li>
                            <li>Menghadirkan pengalaman visual yang estetik dan inovatif.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section>
                <SectionHeader title="Our Team" subtitle="Orang-orang di balik layar" />
                <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="group">
                            <div className="relative aspect-square bg-gray-800 mb-4 overflow-hidden rounded-md">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                                    Team Member {i}
                                </div>
                            </div>
                            <h4 className="font-bold text-white group-hover:text-primary transition-colors">Nama Anggota {i}</h4>
                            <p className="text-sm text-gray-500">Posisi / Jabatan</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
