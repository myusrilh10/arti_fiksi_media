import Image from 'next/image';
import AdBanner from "@/components/ui/AdBanner";
import InteractiveMenu from "@/components/ui/InteractiveMenu";

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
                    <div className="text-left max-w-3xl mx-auto">
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
                <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 md:px-6 relative">
                    {/* Header Divider */}
                    <div className="flex items-center justify-center mb-12 md:mb-16">
                        <div className="w-16 md:w-24 h-[1px] bg-gray-200"></div>
                        <h2 className="mx-6 text-2xl md:text-3xl font-sans font-bold text-[#203627]">Visi & Misi</h2>
                        <div className="w-16 md:w-24 h-[1px] bg-gray-200"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {/* Visi */}
                        <div className="bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-500 relative overflow-hidden">
                            {/* Subtle green gradient from bottom left */}
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#e7fe41]/15 to-transparent"></div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-full bg-[#f4f7f2] text-[#203627] flex items-center justify-center">
                                        {/* Eye Icon */}
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                    </div>
                                    <h3 className="text-2xl font-bold font-sans text-[#203627]">Visi</h3>
                                </div>
                                <p className="text-gray-500 font-medium leading-relaxed text-lg">
                                    Menjadi perusahaan media dan agensi kreatif yang progresif dan berpengaruh dalam membangun komunikasi yang bermakna, etis, dan relevan di era digital.
                                </p>
                            </div>
                        </div>

                        {/* Misi */}
                        <div className="bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-500 relative">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-full bg-[#f4f7f2] text-[#203627] flex items-center justify-center">
                                    {/* Target Icon */}
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold font-sans text-[#203627]">Misi</h3>
                            </div>
                            <ul className="space-y-4 list-none">
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-[#e7fe41] mt-2.5 flex-shrink-0"></span>
                                    <span className="text-gray-500 leading-relaxed"><strong className="text-gray-800 font-bold">Menghasilkan karya media</strong> dan konten kreatif yang berbasis riset dan narasi kuat.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-[#e7fe41] mt-2.5 flex-shrink-0"></span>
                                    <span className="text-gray-500 leading-relaxed"><strong className="text-gray-800 font-bold">Membantu klien</strong> membangun identitas, citra, dan pesan yang autentik.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-[#e7fe41] mt-2.5 flex-shrink-0"></span>
                                    <span className="text-gray-500 leading-relaxed"><strong className="text-gray-800 font-bold">Mengembangkan strategi</strong> komunikasi yang adaptif terhadap perubahan sosial.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 rounded-full bg-[#e7fe41] mt-2.5 flex-shrink-0"></span>
                                    <span className="text-gray-500 leading-relaxed"><strong className="text-gray-800 font-bold">Menjadi mitra kreatif</strong> yang kolaboratif dan berorientasi dampak.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>



                {/* 4. Nilai-Nilai Utama */}
                <section className="py-16 md:py-24 max-w-6xl mx-auto px-4 md:px-6 relative">
                    <div className="flex items-center justify-center mb-12 md:mb-16">
                        <div className="w-16 md:w-24 h-[1px] bg-gray-200"></div>
                        <h2 className="mx-6 text-2xl md:text-3xl font-sans font-bold text-[#203627]">Nilai-Nilai Utama</h2>
                        <div className="w-16 md:w-24 h-[1px] bg-gray-200"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Kreatif",
                                desc: "Mengolah ide menjadi karya yang segar dan relevan.",
                                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                            },
                            {
                                title: "Kritis",
                                desc: "Berpikir reflektif terhadap isu sosial dan tren media.",
                                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            },
                            {
                                title: "Autentik",
                                desc: "Menjunjung kejujuran dalam setiap cerita dan karya.",
                                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            },
                            {
                                title: "Berdampak",
                                desc: "Setiap karya memiliki tujuan dan makna ke khalayak.",
                                icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-[2rem] p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-[#f4f7f2] text-[#203627] flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold font-sans text-[#203627] mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 font-medium leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Interactive Navigation Menu */}
            <InteractiveMenu />

            {/* 5. Collaboration Block */}
            <section className="py-24 md:py-32 text-center border-t border-gray-900 bg-white px-4">
                <h2 className="text-4xl md:text-6xl font-black font-montserrat-black uppercase tracking-tighter text-[#203627] mb-6">
                    Have an <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#203627] to-[#9cc4d4]">Idea?</span>
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-10 text-lg md:text-xl font-medium leading-relaxed">
                    Kami selalu terbuka untuk ide-ide segar, kolaborasi artistik, atau kritik yang membangun. Berikan percikan inspirasi kamu sekarang.
                </p>
                <a
                    href="mailto:artifiksimedia@gmail.com"
                    className="inline-block bg-[#203627] text-[#e7fe41] px-12 py-5 rounded-full font-black font-montserrat-black uppercase tracking-widest hover:bg-[#e7fe41] hover:text-[#203627] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2"
                >
                    Contact Us
                </a>
            </section>
        </div>
    );
}
