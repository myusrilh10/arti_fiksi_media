import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Struktur Organisasi | Arti Fiksi Media',
    description: 'Tim dan struktur organisasi Arti Fiksi Media.',
};

export default function TeamPage() {
    return (
        <div className="bg-[#efefef] min-h-screen text-[#203627] font-sans selection:bg-lemon-lime selection:text-[#203627]">
            <div className="pt-32 pb-20 px-4 md:px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-20 md:mb-24">
                        <span className="text-gray-400 font-bold font-montserrat-black uppercase tracking-[0.3em] text-xs mb-4 block">Tim Kami</span>
                        <h1 className="text-5xl md:text-7xl font-playfair font-black text-[#203627]">Struktur Organisasi</h1>
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
                </div>
            </div>
        </div>
    );
}
