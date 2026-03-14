"use client";

import { useEffect } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Global boundary caught error:", error);
    }, [error]);

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
            <div className="text-red-500 bg-red-50 p-6 rounded-full mb-6">
                <AlertCircle className="w-12 h-12" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-montserrat-black text-[#203627] mb-4">
                Terjadi Kesalahan Tak Terduga
            </h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
                Maaf, kami kesulitan memuat data halaman ini. Kami telah mencatat error ini dan akan segera memperbaikinya.
            </p>
            <button
                onClick={() => reset()}
                className="inline-flex items-center gap-2 bg-[#203627] text-white px-6 py-3 rounded-full font-bold hover:bg-black transition-all shadow-md"
            >
                <RotateCcw className="w-5 h-5" />
                Coba Muat Ulang
            </button>
        </div>
    );
}
