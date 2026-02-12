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

            {/* About Us / Hero */}
            <section className="mb-20 grid gap-12 lg:grid-cols-2 items-center">
                <div className="order-2 lg:order-1">
                    <SectionHeader title="About Us" subtitle="Siapa Kami" />
                    <div className="prose prose-lg text-gray-700">
                        <p className="text-xl font-medium text-black mb-6 leading-relaxed">
                            Arti Fiksi Media adalah platform media digital yang berfokus pada eksplorasi budaya kreatif, gaya hidup, dan teknologi modern.
                        </p>
                        <p className="leading-relaxed mb-4">
                            Kami percaya bahwa setiap cerita memiliki arti, dan fiksi bisa menjadi cerminan realitas yang menginspirasi. Didirikan pada tahun 2026, kami berkomitmen untuk menjadi wadah bagi suara-suara baru dan ide-ide liar yang membentuk masa depan industri kreatif di Indonesia.
                        </p>
                        <p className="leading-relaxed">
                            Di balik setiap artikel, ada tim yang berdedikasi untuk menggali kedalaman, bukan sekadar permukaan. Kami hadir untuk menantang status quo dan merayakan orisinalitas dalam segala bentuknya.
                        </p>
                    </div>
                </div>
                <div className="relative aspect-[4/3] w-full bg-gray-100 rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2 group">
                    <Image
                        src="/images/office.png"
                        alt="Suasana kantor Arti Fiksi Media"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
                </div>
            </section>

            <AdBanner size="leaderboard" className="hidden md:flex mb-20" />

            {/* Vision & Mission */}
            <section className="mb-20">
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-1 bg-primary mb-6"></div>
                        <h3 className="text-2xl font-serif font-bold text-black mb-4 uppercase tracking-tight">Visi</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Menjadi ekosistem media terdepan yang menghubungkan kreator, inovator, dan audiens melalui konten berkualitas tinggi yang tidak hanya menghibur, tetapi juga bermakna dan memicu perubahan positif.
                        </p>
                    </div>
                    <div className="bg-black text-white p-8 md:p-10 rounded-2xl shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <div className="w-12 h-1 bg-primary mb-6 relative z-10"></div>
                        <h3 className="text-2xl font-serif font-bold text-white mb-4 uppercase tracking-tight relative z-10">Misi</h3>
                        <ul className="space-y-4 text-gray-300 relative z-10 text-lg">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1.5">•</span>
                                <span>Menyajikan jurnalisme gaya hidup yang mendalam, akurat, dan relevan dengan zaman.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1.5">•</span>
                                <span>Mendukung pertumbuhan komunitas kreatif lokal dengan memberikan panggung layak.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1.5">•</span>
                                <span>Menghadirkan pengalaman visual yang estetik, inovatif, dan memanjakan mata.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section>
                <div className="flex flex-col md:flex-row items-end justify-between mb-8 pb-4 border-b border-gray-200">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black leading-none">
                            Our Team<span className="text-primary">.</span>
                        </h2>
                        <p className="text-gray-500 text-sm font-bold tracking-widest uppercase mt-2">
                            Orang-orang di balik layar
                        </p>
                    </div>
                    <p className="text-gray-400 text-sm mt-4 md:mt-0 font-medium">
                        Meet the brilliant minds driving our vision.
                    </p>
                </div>

                <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Member 1 - With generated image */}
                    <div className="group">
                        <div className="relative aspect-[3/4] bg-gray-200 mb-5 overflow-hidden rounded-xl">
                            {/* <Image
                                src="/images/team1.png"
                                alt="Creative Director"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            /> */}
                        </div>
                        <div className="border-l-2 border-primary pl-4">
                            <h4 className="font-bold text-lg text-black group-hover:text-primary transition-colors">Andi Pratama</h4>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Creative Director</p>
                        </div>
                    </div>

                    {/* Member 2 - Placeholder */}
                    <div className="group opacity-60 hover:opacity-100 transition-opacity">
                        <div className="relative aspect-[3/4] bg-gray-100 mb-5 overflow-hidden rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                            <span className="text-gray-400 font-medium text-sm">Add Member Photo</span>
                        </div>
                        <div className="border-l-2 border-gray-200 pl-4 group-hover:border-primary transition-colors">
                            <h4 className="font-bold text-lg text-black">Sarah Wijaya</h4>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Editor in Chief</p>
                        </div>
                    </div>

                    {/* Member 3 - Placeholder */}
                    <div className="group opacity-60 hover:opacity-100 transition-opacity">
                        <div className="relative aspect-[3/4] bg-gray-100 mb-5 overflow-hidden rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                            <span className="text-gray-400 font-medium text-sm">Add Member Photo</span>
                        </div>
                        <div className="border-l-2 border-gray-200 pl-4 group-hover:border-primary transition-colors">
                            <h4 className="font-bold text-lg text-black">Budi Santoso</h4>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Head of Technology</p>
                        </div>
                    </div>

                    {/* Member 4 - Placeholder */}
                    <div className="group opacity-60 hover:opacity-100 transition-opacity">
                        <div className="relative aspect-[3/4] bg-gray-100 mb-5 overflow-hidden rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                            <span className="text-gray-400 font-medium text-sm">Add Member Photo</span>
                        </div>
                        <div className="border-l-2 border-gray-200 pl-4 group-hover:border-primary transition-colors">
                            <h4 className="font-bold text-lg text-black">Dina Kusuma</h4>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Senior Writer</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
