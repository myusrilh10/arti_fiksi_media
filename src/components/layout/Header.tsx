import Link from 'next/link';
import { Search, Menu } from 'lucide-react';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black text-white backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary text-black font-bold">
                        AF
                    </div>
                    <span className="text-xl font-bold tracking-tight">Arti Fiksi</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/" className="hover:text-primary transition-colors">
                        Home
                    </Link>
                    <Link href="/articles" className="hover:text-primary transition-colors">
                        Articles
                    </Link>
                    <Link href="/profile" className="hover:text-primary transition-colors">
                        Profile
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button className="md:hidden">
                        <Menu className="h-6 w-6" />
                    </button>
                    <div className="relative hidden md:block">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <input
                            type="search"
                            placeholder="Search..."
                            className="h-9 w-64 rounded-md border border-gray-800 bg-gray-900 pl-9 pr-4 text-sm focus:border-primary focus:outline-hidden"
                        />
                    </div>
                    <button className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-500 md:block">
                        Subscribe
                    </button>
                </div>
            </div>
        </header>
    );
}
