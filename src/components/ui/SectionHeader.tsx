
interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export default function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
    return (
        <div className={`flex flex-col items-center text-center ${className}`}>
            <div className="flex flex-col items-center gap-4">
                {/* Accent line — thicker and more intentional */}
                <div className="h-[3px] w-10 bg-lemon-lime" />

                <h2 className="text-3xl md:text-[2.75rem] font-playfair text-gray-900 leading-[1.1] tracking-tight">
                    {title}
                </h2>

                {subtitle && (
                    <p className="text-gray-400 text-[10px] md:text-[11px] font-black font-montserrat-black tracking-[0.28em] uppercase max-w-sm leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
