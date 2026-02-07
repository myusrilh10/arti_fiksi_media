
interface AdBannerProps {
    size?: 'leaderboard' | 'large-leaderboard' | 'medium-rectangle';
    className?: string;
}

export default function AdBanner({ size = 'medium-rectangle', className = '' }: AdBannerProps) {
    let dimensions = 'w-[300px] h-[250px]'; // medium-rectangle default

    if (size === 'leaderboard') dimensions = 'w-[728px] h-[90px]';
    if (size === 'large-leaderboard') dimensions = 'w-[970px] h-[90px]';

    // For mobile responsiveness, we might want to override width
    const mobileDimensions = size === 'medium-rectangle' ? 'w-full max-w-[300px]' : 'w-full';

    return (
        <div className={`flex justify-center my-8 ${className}`}>
            <div
                className={`${dimensions} ${mobileDimensions} bg-gray-800 flex flex-col items-center justify-center border border-gray-700 relative overflow-hidden`}
            >
                <span className="text-xs text-gray-500 uppercase tracking-widest absolute top-1 left-2">Advertisement</span>
                <div className="text-gray-600 font-bold text-lg">ADS PLACEHOLDER</div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-primary/20 rounded-tl-lg"></div>
            </div>
        </div>
    );
}
