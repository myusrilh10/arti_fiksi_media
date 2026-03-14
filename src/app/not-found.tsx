import Link from "next/link";
import { Ghost, Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
            <div className="bg-[#e7fe41]/10 p-6 rounded-full inline-flex mb-6 text-[#203627]">
                <Ghost className="w-16 h-16 sm:w-20 sm:h-20" />
            </div>

            <h1 className="text-6xl sm:text-8xl font-black font-montserrat-black text-[#203627] mb-4">404</h1>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-playfair">Halaman Tidak Ditemukan</h2>
            <p className="text-gray-500 max-w-md mx-auto mb-8 text-sm sm:text-base leading-relaxed">
                Maaf, artikel atau halaman yang Anda tuju mungkin telah dipindahkan atau sudah tidak tersedia di portal Arti Fiksi Media.
            </p>

            <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#203627] text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all transform hover:-translate-y-1 shadow-xl"
            >
                <Home className="w-5 h-5" />
                Kembali ke Beranda
            </Link>
        </div>
    );
}
