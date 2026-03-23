import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Klien & Mitra | Arti Fiksi Media',
    description: 'Daftar klien dan mitra terpercaya Arti Fiksi Media.',
};

export default function AdvertisementPage() {
    return (
        <div className="bg-[#efefef] min-h-screen text-[#203627] font-sans selection:bg-lemon-lime selection:text-[#203627]">
            <div className="pt-32 pb-20 px-4 md:px-6">
                <div className="container mx-auto">
                    <section className="py-16 md:py-24 max-w-4xl mx-auto text-center">
                        <span className="text-gray-400 font-bold font-montserrat-black uppercase tracking-[0.3em] text-xs mb-4 block">Kepercayaan</span>
                        <h1 className="text-5xl md:text-7xl font-playfair font-black text-[#203627] mb-8">Klien & Mitra</h1>
                        <p className="text-xl md:text-3xl text-gray-600 leading-relaxed font-medium mt-12 mb-12">
                            Kami terbuka untuk bekerja sama dengan Instansi Pemerintah, Brand dan Pelaku Usaha, Organisasi dan Komunitas, serta Media dan Institusi Pendidikan.
                        </p>
                        <a
                            href="mailto:artifiksimedia@gmail.com"
                            className="inline-block bg-[#203627] text-[#e7fe41] px-12 py-5 rounded-full font-black font-montserrat-black uppercase tracking-widest hover:bg-[#e7fe41] hover:text-[#203627] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-2"
                        >
                            Contact Us
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
}
