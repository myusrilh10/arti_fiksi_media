export default function Loading() {
    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                <div className="absolute inset-0 border-4 border-[#e7fe41]/30 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-[#203627] rounded-full border-t-transparent animate-spin"></div>
            </div>
            <p className="mt-6 text-sm font-bold tracking-widest text-[#203627] uppercase animate-pulse">
                Memuat Konten...
            </p>
        </div>
    );
}
