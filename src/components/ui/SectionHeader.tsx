
interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export default function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
    return (
        <div className={`mb-16 flex flex-col items-center text-center ${className}`}>
            <div className="flex flex-col items-center gap-3">
                <div className="h-0.5 w-12 bg-lemon-lime mb-2" />
                <h2 className="text-3xl md:text-5xl font-playfair text-gray-900 leading-tight">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-gray-400 text-[10px] md:text-xs font-black font-montserrat-black tracking-[0.3em] uppercase max-w-lg">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
