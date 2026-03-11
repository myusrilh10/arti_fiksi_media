import Image from 'next/image';
import { Advertisement } from '@/lib/data';

interface AdBannerProps {
    size?: 'leaderboard' | 'large-leaderboard' | 'medium-rectangle';
    className?: string;
    ad?: Advertisement;
}

export default function AdBanner({ size = 'medium-rectangle', className = '', ad }: AdBannerProps) {
    if (!ad || !ad.imageUrl) return null;

    let dimensions = 'w-[300px] h-[250px]';

    if (size === 'leaderboard') dimensions = 'w-[728px] h-[90px]';
    if (size === 'large-leaderboard') dimensions = 'w-[970px] h-[90px]';

    const mobileDimensions = size === 'medium-rectangle' ? 'w-full max-w-[300px]' : 'w-full';

    return (
        <div className={`flex justify-center my-6 ${className}`}>
            <a href={ad.linkUrl} target="_blank" rel="noopener noreferrer" className={`${dimensions} ${mobileDimensions} relative block rounded-sm overflow-hidden`}>
                <Image src={ad.imageUrl} alt="Advertisement" fill className="object-cover" />
            </a>
        </div>
    );
}
