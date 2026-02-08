
interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export default function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
    return (
        <div className={`mb-12 flex flex-col ${className}`}>
            <div className="flex flex-col gap-1 border-b border-gray-200 pb-4">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black leading-none">
                    {title}<span className="text-primary">.</span>
                </h2>
                {subtitle && (
                    <p className="text-gray-500 text-sm font-bold tracking-widest uppercase mt-1">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
