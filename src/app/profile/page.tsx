'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import AdBanner from "@/components/ui/AdBanner";

export default function ProfilePage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div className="bg-[#efefef] min-h-screen text-[#203627] font-sans selection:bg-lemon-lime selection:text-[#203627]">
            {/* Hero Section with Parallax */}
            <section ref={containerRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/images/office.png"
                        alt="Office Aesthetic"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#203627]/30 mix-blend-multiply" />
                </motion.div>

                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-9xl font-playfair font-black text-[#e7fe41] mb-6 tracking-tighter drop-shadow-lg"
                    >
                        ARTI FIKSI
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-white text-xl md:text-2xl font-montserrat-regular tracking-widest uppercase max-w-2xl mx-auto"
                    >
                        Reimagining Media for the Creative Soul
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 z-10"
                >
                    <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Discover</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                </motion.div>
            </section>

            <div className="bg-[#efefef] relative z-20 rounded-t-[3rem] -mt-20 pt-20 shadow-2xl overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">

                    {/* 1. Deskripsi Singkat */}
                    <section className="py-24 max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-[#9cc4d4] font-bold uppercase tracking-widest text-sm mb-4 block">Tentang Kami</span>
                            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-10 leading-tight">
                                Arti Fiksi Media
                            </h2>
                            <div className="text-lg leading-relaxed text-gray-600 font-medium">
                                <p>
                                    Artifiksi merupakan platform media dan agensi kreatif yang berdiri di bawah naungan CV RYU ARTIFIKSI MEDIA yang secara resmi terdaftar sebagai badan usaha berdasarkan Surat Keputusan Menteri Hukum No AHU-007987-AH.01.14.2025.
                                </p>
                                <p>
                                    Arttifiksi Media menjalankan kegiatan usaha di bidang media, agensi kreatif, produksi konten kereatif, stratehi komunikasi, serta penyelenggaraan event. Seluruh aktivitas perushaan dikelola dengan prinsip profesionalisme, tata kelola yang baik, dan akuntabilitas.
                                </p>
                            </div>
                        </motion.div>
                    </section>

                    {/* Ad Break */}
                    <div className="mb-20">
                        <AdBanner size="leaderboard" className="hidden md:flex justify-center" />
                    </div>

                    {/* 2. Visi dan Misi */}
                    <section className="py-24 border-t border-gray-200">
                        <div className="grid md:grid-cols-2 gap-16 items-stretch">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="bg-[#203627] text-white p-12 md:p-16 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#e7fe41] opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-700 -mr-20 -mt-20" />
                                <h3 className="text-5xl font-playfair font-bold mb-8 text-[#e7fe41] relative z-10">Visi</h3>
                                <p className="text-xl leading-relaxed opacity-90 relative z-10 font-medium">
                                    Menjadi perushaan media dan agensi kreatif yang progresif dan berpengaruh dalam membangun komunikasi yang bermakna, etis, dan relevan di era digital.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-[#9cc4d4] text-[#203627] p-12 md:p-16 rounded-3xl shadow-xl flex flex-col justify-center relative overflow-hidden group"
                            >
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity duration-700 -ml-20 -mb-20" />
                                <h3 className="text-5xl font-playfair font-bold mb-8 relative z-10">Misi</h3>
                                <ul className="text-lg leading-relaxed space-y-4 list-none relative z-10 font-medium">
                                    {[1, 2, 3, 4].map((item) => (
                                        <li key={item} className="flex items-start gap-4">
                                            <span className="text-[#203627] font-black mt-1">✦</span>
                                            <span>{item === 1 ? "Menghasilkan karya media dan konten kreatif yang berbasis riset dan narasi kuat." : item === 2 ? "Membantu klien membangun identitas, citra, dan pesan yang autentik." : item === 3 ? "Mengembangkan strategi komunikasi yang adaptif terhadap perubahan sosial dan teknologi." : item === 4 ? "Menjadi mitra kreatif yang kolaboratif, profesional dan berorientasi dampak." : ""}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </section>

                    {/* 3. Layanan Kami */}
                    <section className="py-24 border-t border-gray-200">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-playfair font-black text-[#203627]">Layanan Kami</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                                    className="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-gray-100"
                                >
                                    <div className="w-16 h-16 bg-[#efefef] rounded-2xl text-[#203627] flex items-center justify-center font-black text-xl mb-8">
                                        0{idx + 1}
                                    </div>
                                    <h4 className="text-2xl md:text-3xl font-bold font-playfair mb-4 text-[#203627]">{item.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 4. 4 Kata Utama & Penjelasan */}
                    <section className="py-24 bg-[#203627] rounded-[3rem] text-white px-8 md:px-16 my-20 shadow-2xl relative overflow-hidden">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#9cc4d4] opacity-10 rounded-full blur-[100px]" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#e7fe41] opacity-5 rounded-full blur-[100px]" />

                        <div className="text-center mb-20 relative z-10">
                            <span className="text-[#9cc4d4] font-bold uppercase tracking-widest text-sm mb-4 block">Nilai Inti</span>
                            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-[#e7fe41]">Foundation</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:w-3/4 mx-auto gap-x-12 gap-y-12 relative z-10">
                            {[
                                { title: "Kreatif", color: "text-[#e7fe41]", desc: "Mengolah ide menjadi karya yang segar dan relevan." },
                                { title: "Kritis", color: "text-[#9cc4d4]", desc: "Berpikir reflektif terhadap isu sosial dan media." },
                                { title: "Autentik", color: "text-white", desc: "Menjunjung kejujuran dalam setiap cerita." },
                                { title: "Berdampak", color: "text-[#e7fe41]", desc: "Setiap karya memiliki tujuan dan makna." }
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="text-center bg-white/5 p-6 lg:p-8 rounded-3xl border border-white/10 flex flex-col items-center"
                                >
                                    <div className="w-12 h-12 rounded-full bg-white/10 mb-6 flex items-center justify-center font-bold text-white flex-shrink-0">
                                        {idx + 1}
                                    </div>
                                    <h3 className={`text-xl lg:text-2xl font-black font-montserrat-black uppercase tracking-wider lg:tracking-widest ${item.color} mb-4 break-words w-full`}>{item.title}</h3>
                                    <p className="text-gray-300 font-medium leading-relaxed text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 5. Pendekatan Kerja
                    <section className="py-24 border-t border-gray-200">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 w-full">
                                <div className="aspect-square bg-gray-200 rounded-3xl w-full relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-[#203627]/5 group-hover:bg-[#203627]/0 transition-colors duration-500" />
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold tracking-widest uppercase text-sm text-center p-8">
                                        [Tempatkan Foto Ilustrasi <br /> Pendekatan Kerja / Proses Kreatif]
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full space-y-10">
                                <div>
                                    <span className="text-[#9cc4d4] font-bold uppercase tracking-widest text-sm mb-4 block">Metodologi</span>
                                    <h2 className="text-5xl lg:text-6xl font-playfair font-black text-[#203627] mb-8 leading-tight">Pendekatan Kerja</h2>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-10 font-medium">
                                        [Penjelasan tentang cara kerja kami, proses kreatif, atau flow metodologi dari hulu ke hilir untuk mencapai hasil maksimal.]
                                    </p>
                                    <div className="space-y-6">
                                        {[1, 2, 3].map((step) => (
                                            <div key={step} className="flex items-start gap-6 group cursor-default">
                                                <div className="mt-1 w-10 h-10 rounded-full bg-white border-2 border-[#203627] text-[#203627] group-hover:bg-[#203627] group-hover:text-[#e7fe41] flex items-center justify-center text-base font-black flex-shrink-0 transition-all duration-300">
                                                    {step}
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-xl text-[#203627] mb-2 group-hover:text-[#9cc4d4] transition-colors">[Fase Pendekatan]</h5>
                                                    <p className="text-gray-500 leading-relaxed">[Deskripsi detail tentang apa yang dilakukan pada fase ini]</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    {/* 6. Klien & Mitra */}
                    <section className="py-24 border-t border-gray-200 text-center">
                        <div className="max-w-4xl mx-auto">
                            <span className="text-[#9cc4d4] font-bold uppercase tracking-widest text-sm mb-4 block">Kepercayaan</span>
                            <h2 className="text-4xl md:text-6xl font-playfair font-black text-[#203627] mb-10">Klien & Mitra</h2>

                            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                                Kami terbuka untuk bekerja sama dengan : Instansi Pemerintah, Brand dan Pelaku Usaha, Organisasi dan Komunitas, Media dan Institusi Pendidikan.
                            </p>
                        </div>
                    </section>

                    {/* 7. Struktur Organisasi */}
                    <section className="py-24 border-t border-gray-200">
                        <div className="flex flex-col items-center justify-center text-center mb-20">
                            <span className="text-[#9cc4d4] font-bold uppercase tracking-widest text-sm mb-4 block">Individu dan Creator</span>
                            <h2 className="text-5xl md:text-7xl font-playfair font-black text-[#203627]">Struktur Organisasi</h2>
                        </div>

                        <div className="space-y-20 max-w-6xl mx-auto">
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
                                <div key={groupIdx}>
                                    <h3 className="text-3xl font-playfair font-black text-[#203627] mb-8 pb-4 border-b-2 border-gray-200 inline-block pr-10">
                                        {group.division}
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {group.members.map((member, idx) => (
                                            <div
                                                key={idx}
                                                className="group p-6 lg:p-8 rounded-3xl bg-white border border-gray-100 hover:border-[#9cc4d4] hover:shadow-2xl transition-all duration-500 text-center flex flex-col justify-center min-h-[160px]"
                                            >
                                                <h4 className="text-xl lg:text-2xl font-bold font-playfair text-[#203627] group-hover:text-[#9cc4d4] transition-colors mb-2">{member.name}</h4>
                                                <p className="text-xs font-black font-montserrat-black uppercase tracking-widest text-gray-400 group-hover:text-gray-600 transition-colors leading-relaxed">{member.role}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 8. Collaboration / Contact CTA */}
                    <section className="py-32 text-center border-t border-gray-200">
                        <h2 className="text-4xl md:text-6xl font-black font-montserrat-black uppercase tracking-tighter text-[#203627] mb-6">
                            Have an <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#203627] to-[#9cc4d4]">Idea?</span>
                        </h2>
                        <p className="text-gray-600 max-w-xl mx-auto mb-10 text-lg font-medium">
                            Kami selalu terbuka untuk ide-ide segar, kolaborasi artistik, atau kritik yang membangun. Berikan percikan inspirasi kamu sekarang.
                        </p>
                        <a
                            href="mailto:artifiksimedia@gmail.com"
                            className="inline-block bg-[#203627] text-[#e7fe41] px-12 py-5 rounded-full font-black uppercase tracking-widest hover:bg-[#e7fe41] hover:text-[#203627] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2"
                        >
                            Contact Us
                        </a>
                    </section>

                </div>
            </div>
        </div>
    );
}
