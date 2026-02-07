
interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export default function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
    return (
        <div className={`mb-8 ${className}`}>
            <div className="flex items-center gap-3 mb-2">
                <div className="w-1.5 h-6 bg-primary"></div>
                <h2 className="text-2xl font-bold uppercase tracking-tight text-white">{title}</h2>
            </div>
            {subtitle && <p className="text-gray-400 pl-4.5">{subtitle}</p>}
        </div>
    );
}
