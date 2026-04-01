import AdBanner from './AdBanner';
import { Advertisement } from '@/lib/data';

interface BottomAdBannerProps {
    ad?: Advertisement;
    className?: string;
}

export default function BottomAdBanner({ ad, className = '' }: BottomAdBannerProps) {
    return (
        <div className={`w-full flex flex-col items-center ${className}`}>
            <AdBanner size="leaderboard" className="hidden md:flex w-full" ad={ad} />
            <AdBanner size="medium-rectangle" className="flex md:hidden w-full" ad={ad} />
        </div>
    );
}
