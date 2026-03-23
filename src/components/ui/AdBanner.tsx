import Image from 'next/image';
import { Advertisement } from '@/lib/data';

interface AdBannerProps {
    size?: 'leaderboard' | 'large-leaderboard' | 'medium-rectangle';
    className?: string;
    ad?: Advertisement;
}

export default function AdBanner({ size = 'medium-rectangle', className = '', ad }: AdBannerProps) {
    let dimensions = 'w-[300px] h-[250px]';

    if (size === 'leaderboard') dimensions = 'w-[728px] h-[90px]';
    if (size === 'large-leaderboard') dimensions = 'w-[970px] h-[90px]';

    const mobileDimensions = size === 'medium-rectangle' ? 'w-full max-w-[300px]' : 'w-full';

    const hasAd = ad && ad.imageUrl;

    return (
        <div className={`flex justify-center my-6 ${className}`}>
            {hasAd ? (
                ad.linkUrl && ad.linkUrl !== '#' ? (
                    <a href={ad.linkUrl} target="_blank" rel="noopener noreferrer" className={`${dimensions} ${mobileDimensions} relative block rounded-sm overflow-hidden`}>
                        <Image src={ad.imageUrl} alt="Advertisement" fill className="object-cover" />
                    </a>
                ) : (
                    <div className={`${dimensions} ${mobileDimensions} relative block rounded-sm overflow-hidden`}>
                        <Image src={ad.imageUrl} alt="Advertisement" fill className="object-cover" />
                    </div>
                )
            ) : (
                <div className={`${dimensions} ${mobileDimensions} relative flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-sm overflow-hidden`}>
                    <span className="text-gray-400 font-bold uppercase tracking-widest text-sm text-center px-4">
                        Tempat Beriklan<br />
                        <span className="text-xs font-normal mt-1 block">Space Ads</span>
                    </span>
                </div>
            )}
        </div>
    );
}
