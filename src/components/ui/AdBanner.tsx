
interface AdBannerProps {
    size?: 'leaderboard' | 'large-leaderboard' | 'medium-rectangle';
    className?: string;
}

export default function AdBanner({ size = 'medium-rectangle', className = '' }: AdBannerProps) {
    let dimensions = 'w-[300px] h-[250px]';

    if (size === 'leaderboard') dimensions = 'w-[728px] h-[90px]';
    if (size === 'large-leaderboard') dimensions = 'w-[970px] h-[90px]';

    const mobileDimensions = size === 'medium-rectangle' ? 'w-full max-w-[300px]' : 'w-full';

    return (
        <div className={`flex justify-center my-6 ${className}`}>
            <div
                className={`${dimensions} ${mobileDimensions} relative flex flex-col items-center justify-center overflow-hidden`}
                style={{
                    backgroundImage: `radial-gradient(circle, #e5e5e5 1px, transparent 1px)`,
                    backgroundSize: '16px 16px',
                    backgroundColor: '#fafafa',
                    border: '1.5px dashed #d1d5db',
                }}
            >
                {/* Top label */}
                <span className="absolute top-2 left-3 text-[9px] font-black font-montserrat-black uppercase tracking-[0.2em] text-gray-400">
                    Advertisement
                </span>

                {/* Placeholder content */}
                <div className="flex flex-col items-center gap-1 opacity-30">
                    <div className="w-6 h-6 border-2 border-gray-400 rounded-sm" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Ad Slot</span>
                </div>

                {/* Dimensions hint */}
                <span className="absolute bottom-2 right-3 text-[9px] text-gray-300 font-mono">
                    {size === 'medium-rectangle' ? '300×250' : size === 'leaderboard' ? '728×90' : '970×90'}
                </span>
            </div>
        </div>
    );
}
