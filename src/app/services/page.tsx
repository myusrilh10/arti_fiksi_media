import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Layanan Kami | Arti Fiksi Media',
    description: 'Layanan dan servis yang ditawarkan oleh Arti Fiksi Media.',
};

export default function ServicesPage() {
    return (
        <div className="bg-[#efefef] min-h-screen text-[#203627] font-sans selection:bg-lemon-lime selection:text-[#203627]">
            <div className="pt-32 pb-20 px-4 md:px-6">
                <div className="container mx-auto">
                    <div className="max-w-4xl mb-16">
                        <span className="text-gray-400 font-bold font-montserrat-black uppercase tracking-[0.3em] text-xs mb-4 block">Our Expertise</span>
                        <h1 className="text-5xl md:text-7xl font-playfair font-black text-[#203627] mb-6">Layanan Kami</h1>
                        <p className="text-xl text-gray-600 font-medium leading-relaxed">
                            Kami menyediakan berbagai layanan profesional di bidang media, komunikasi, dan produksi kreatif untuk membantu Anda mencapai tujuan dengan cara yang autentik dan berdampak.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                                className="group bg-white p-8 border border-gray-200 hover:border-[#203627] transition-colors duration-300 flex flex-col min-h-[300px]"
                            >
                                <div className="text-3xl font-playfair font-bold text-gray-200 group-hover:text-[#e7fe41] transition-colors mb-6">
                                    0{idx + 1}
                                </div>
                                <h4 className="text-xl md:text-2xl font-bold font-playfair mb-4 text-[#203627] leading-snug">{item.title}</h4>
                                <p className="text-gray-500 leading-relaxed text-sm md:text-base font-medium flex-grow">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
