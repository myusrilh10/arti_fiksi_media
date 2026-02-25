import Image from 'next/image';
import AdBanner from "@/components/ui/AdBanner";

export const metadata = {
    title: "About Us | Arti Fiksi Media",
    description: "Reimagining Media for the Creative Soul",
};

export default function ProfilePage() {
    return (
        <div className="bg-white min-h-screen text-[#203627] font-sans selection:bg-lemon-lime selection:text-[#203627]">
            {/* Hero Section - Static elegant hero */}
            <section className="relative h-[70vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/office.png"
                        alt="Office Aesthetic"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-black/30" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-black text-white mb-6 tracking-tight drop-shadow-lg">
                        ARTI FIKSI
                    </h1>
                    <div className="w-24 h-1 bg-[#e7fe41] mx-auto mb-8" />
                    <p className="text-gray-200 text-lg md:text-2xl font-montserrat-regular tracking-[0.2em] uppercase max-w-2xl mx-auto drop-shadow-md font-medium">
                        Reimagining Media for the Creative Soul
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 relative z-20 -mt-20 md:-mt-32">

                {/* 1. Deskripsi Singkat */}
                <section className="bg-white p-10 md:p-16 lg:p-24 shadow-2xl max-w-5xl mx-auto relative mt-8 border-t-8 border-[#203627]">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-gray-400 font-bold font-montserrat-black uppercase tracking-[0.3em] text-xs mb-6 block">Tentang Kami</span>
                        <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-10 text-[#203627] leading-tight">
                            Arti Fiksi Media
                        </h2>
                        <div className="text-base md:text-lg leading-loose text-gray-600 font-medium space-y-6">
                            <p>
                                Artifiksi merupakan platform media dan agensi kreatif yang berdiri di bawah naungan CV RYU ARTIFIKSI MEDIA yang secara resmi terdaftar sebagai badan usaha berdasarkan Surat Keputusan Menteri Hukum No AHU-007987-AH.01.14.2025.
                            </p>
                            <p>
                                Arttifiksi Media menjalankan kegiatan usaha di bidang media, agensi kreatif, produksi konten kereatif, strategi komunikasi, serta penyelenggaraan event. Seluruh aktivitas perushaan dikelola dengan prinsip profesionalisme, tata kelola yang baik, dan akuntabilitas.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Ad Break */}
                <div className="my-16">
                    <AdBanner size="leaderboard" className="hidden md:flex justify-center" />
                </div>

                {/* 2. Visi dan Misi */}
                <section className="py-16 md:py-24 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
                        {/* Visi */}
                        <div className="bg-[#203627] text-white p-10 md:p-16 flex flex-col justify-center border-l-8 border-[#e7fe41] relative overflow-hidden">
                            <h3 className="text-sm font-montserrat-black uppercase tracking-[0.2em] text-[#e7fe41] mb-6">Visi</h3>
                            <p className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold leading-tight opacity-95">
                                Menjadi perushaan media dan agensi kreatif yang progresif dan berpengaruh dalam membangun komunikasi yang bermakna, etis, dan relevan di era digital.
                            </p>
                        </div>

                        {/* Misi */}
                        <div className="bg-gray-50 text-[#203627] p-10 md:p-16 flex flex-col justify-center border border-gray-100">
                            <h3 className="text-sm font-montserrat-black uppercase tracking-[0.2em] text-gray-400 mb-6">Misi</h3>
                            <ul className="text-lg leading-relaxed space-y-6 list-none font-medium text-gray-700">
                                {[
                                    "Menghasilkan karya media dan konten kreatif yang berbasis riset dan narasi kuat.",
                                    "Membantu klien membangun identitas, citra, dan pesan yang autentik.",
                                    "Mengembangkan strategi komunikasi yang adaptif terhadap perubahan sosial dan teknologi.",
                                    "Menjadi mitra kreatif yang kolaboratif, profesional dan berorientasi dampak."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <span className="text-[#203627] font-black mt-1 text-sm block">0{idx + 1}</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 3. Layanan Kami */}
                <section className="py-16 md:py-24 border-t border-gray-200 border-dashed">
                    <div className="text-center mb-16 md:mb-20">
                        <span className="text-gray-400 font-bold font-montserrat-black uppercase tracking-[0.3em] text-xs mb-4 block">Expertise</span>
                        <h2 className="text-4xl md:text-6xl font-playfair font-black text-[#203627]">Layanan Kami</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                        {[
                            {
                                title: "Strategi Komunikasi & Media",
                                desc: "Perencanaan strategi komunikasi, Brand storytelling, campaign media (Digital & Konvensional), dan Manajemen isu dan opini publik."
                            },
                            {
                                title: "Produksi Konten Kreatif",
                                desc: "Penulisan konten (artikel, feature, esai, caption, naskah), Produksi Video (profil, dokumenter, campaign), Konten Media Sosial, dan Desain visual dan kreatif"
                            },
                            {
                                title: "Media & Publikasi",
                                desc: "Rilis berita dan advertorial, Manajemen media partner, Publikasi digital dan cetak, Editorial dan kurasi konten"
                            },
                            {
                                title: "Riset & Kaajian Media",
                                desc: "Analisis audiens dan media, Monitoring dan evaluasi konten, Riset komunikasi dan Sosial, Insight berbasis data untuk strategi konten"
                            }
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="group bg-white p-8 border border-gray-200 hover:border-[#203627] transition-colors duration-300"
                            >
                                <div className="text-3xl font-playfair font-bold text-gray-200 group-hover:text-[#e7fe41] transition-colors mb-6">
                                    0{idx + 1}
                                </div>
                                <h4 className="text-xl md:text-2xl font-bold font-playfair mb-4 text-[#203627] leading-snug">{item.title}</h4>
                                <p className="text-gray-500 leading-relaxed text-sm md:text-base font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 4. Nilai Inti */}
                <section className="py-20 md:py-32 bg-[#203627] text-white my-12 border-y-8 border-[#e7fe41]">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-16 md:mb-20">
                            <span className="font-bold font-montserrat-black uppercase tracking-[0.3em] text-xs mb-4 block text-[#e7fe41]">Nilai Inti</span>
                            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white">Foundation</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
                            {[
                                { title: "Kreatif", desc: "Mengolah ide menjadi karya yang segar dan relevan." },
                                { title: "Kritis", desc: "Berpikir reflektif terhadap isu sosial dan media." },
                                { title: "Autentik", desc: "Menjunjung kejujuran dalam setiap cerita." },
                                { title: "Berdampak", desc: "Setiap karya memiliki tujuan dan makna." }
                            ].map((item, idx) => (
                                <div key={idx} className="text-center md:text-left flex flex-col items-center md:items-start group">
                                    <div className="w-16 h-16 border border-gray-600 rounded-full flex items-center justify-center text-xl font-bold font-playfair text-[#e7fe41] mb-6 group-hover:bg-[#e7fe41] group-hover:text-[#203627] transition-colors duration-300">
                                        {idx + 1}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black font-montserrat-black uppercase tracking-widest text-white mb-4">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 font-medium leading-relaxed text-sm md:text-base">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 6. Klien & Mitra */}
                <section className="py-16 md:py-24 max-w-4xl mx-auto text-center">
                    <span className="text-gray-400 font-bold font-montserrat-black uppercase tracking-[0.3em] text-xs mb-4 block">Kepercayaan</span>
                    <h2 className="text-3xl md:text-5xl font-playfair font-black text-[#203627] mb-8">Klien & Mitra</h2>
                    <p className="text-lg md:text-2xl text-gray-600 leading-relaxed font-medium">
                        Kami terbuka untuk bekerja sama dengan Instansi Pemerintah, Brand dan Pelaku Usaha, Organisasi dan Komunitas, serta Media dan Institusi Pendidikan.
                    </p>
                </section>

                {/* 7. Struktur Organisasi */}
                <section className="py-20 md:py-32 border-t border-gray-200 border-dashed">
                    <div className="text-center mb-20 md:mb-24">
                        <span className="text-gray-400 font-bold font-montserrat-black uppercase tracking-[0.3em] text-xs mb-4 block">Tim Kami</span>
                        <h2 className="text-4xl md:text-6xl font-playfair font-black text-[#203627]">Struktur Organisasi</h2>
                    </div>

                    <div className="space-y-24 max-w-6xl mx-auto">
                        {[
                            {
                                division: "Direktur",
                                members: [
                                    { name: "Rahmat Zamzami Pramudya", role: "Direktur Utama" }
                                ]
                            },
                            {
                                division: "Strategic Advisor / Advisory Board",
                                members: [
                                    { name: "Sulistiyo Anggriawan", role: "Strategic Advisor" },
                                    { name: "Inayah Nurul Pramesti", role: "Advisory Board" },
                                    { name: "Sabrina Lorencia Manan", role: "Advisory Board" }
                                ]
                            },
                            {
                                division: "Divisi Media & Creative Production",
                                members: [
                                    { name: "Moh. Chandra Syahputra", role: "Head of Media & Creative Production / Art Director" },
                                    { name: "Reyhan Adfriansyah", role: "Visual Designer" },
                                    { name: "Alif Fajar", role: "Videographer & Video Editor" },
                                    { name: "Sahrul Ramadan", role: "Illustrator & Visual Artist" }
                                ]
                            },
                            {
                                division: "Divisi Event & Activation",
                                members: [
                                    { name: "Sabrina Lorencia Manan", role: "Head of Event & Activation" },
                                    { name: "Inayah Nurul Pramesti", role: "Event Coordinator" },
                                    { name: "Dian Bramana Putra", role: "Event Crew & Technical Support" },
                                    { name: "Sulistiyo Anggriawan", role: "Event Crew & Talent Coordinator" }
                                ]
                            }
                        ].map((group, groupIdx) => (
                            <div key={groupIdx} className="relative">
                                <h3 className="text-xl md:text-2xl font-montserrat-black font-black uppercase tracking-widest text-[#203627] mb-10 pb-4 border-b-2 border-gray-900 inline-block">
                                    {group.division}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
                                    {group.members.map((member, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white p-8 text-center flex flex-col justify-center min-h-[180px] hover:bg-gray-50 transition-colors"
                                        >
                                            <h4 className="text-lg font-bold font-playfair text-[#203627] mb-3">{member.name}</h4>
                                            <p className="text-xs font-bold font-montserrat-regular tracking-widest text-gray-400 uppercase leading-relaxed">{member.role}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 8. Collaboration Block */}
                <section className="py-24 md:py-32 text-center border-t border-gray-900">
                    <h2 className="text-4xl md:text-6xl font-black font-montserrat-black uppercase tracking-tighter text-[#203627] mb-6">
                        Have an Idea?
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto mb-10 text-lg md:text-xl font-medium leading-relaxed">
                        Kami selalu terbuka untuk ide-ide segar, kolaborasi artistik, atau kritik yang membangun. Berikan percikan inspirasi kamu sekarang.
                    </p>
                    <a
                        href="mailto:artifiksimedia@gmail.com"
                        className="inline-block bg-[#203627] text-white px-10 py-4 font-bold font-montserrat-black uppercase tracking-[0.2em] text-sm hover:bg-[#e7fe41] hover:text-[#203627] transition-colors duration-300"
                    >
                        Contact Us
                    </a>
                </section>

            </div>
        </div>
    );
}
