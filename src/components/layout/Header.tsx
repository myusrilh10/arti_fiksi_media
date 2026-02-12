'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

export default function Header() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
            setIsMenuOpen(false);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 text-black backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary text-black font-bold">
                        AF
                    </div>
                    <span className="text-xl font-bold tracking-tight">Arti Fiksi</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-black uppercase tracking-widest">
                    <Link href="/" className="hover:text-primary transition-colors">
                        Home
                    </Link>
                    <Link href="/articles" className="hover:text-primary transition-colors">
                        Stories
                    </Link>
                    <Link href="#" className="hover:text-primary transition-colors">
                        Events
                    </Link>
                    <Link href="/profile" className="hover:text-primary transition-colors">
                        About
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Search - Desktop */}
                    <form onSubmit={handleSearch} className="relative hidden md:block">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                        <input
                            type="search"
                            placeholder="Search articles..."
                            className="h-9 w-64 rounded-md border border-gray-200 bg-gray-100 pl-9 pr-4 text-sm focus:border-primary focus:outline-none transition-all focus:bg-white focus:ring-2 focus:ring-primary/20"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>

                    <button className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-500 md:block transition-colors">
                        Subscribe
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-md"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white">
                    <div className="container mx-auto px-4 py-4 space-y-4">
                        {/* Mobile Search */}
                        <form onSubmit={handleSearch} className="relative">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            <input
                                type="search"
                                placeholder="Search..."
                                className="w-full h-10 rounded-md border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm focus:border-primary focus:outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </form>

                        <nav className="flex flex-col gap-3">
                            <Link
                                href="/"
                                className="text-sm font-black uppercase tracking-widest p-2 hover:bg-gray-50 rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/articles"
                                className="text-sm font-black uppercase tracking-widest p-2 hover:bg-gray-50 rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Stories
                            </Link>
                            <Link
                                href="#"
                                className="text-sm font-black uppercase tracking-widest p-2 hover:bg-gray-50 rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Events
                            </Link>
                            <Link
                                href="/profile"
                                className="text-sm font-black uppercase tracking-widest p-2 hover:bg-gray-50 rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <button className="w-full mt-2 rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-black hover:bg-yellow-500 transition-colors">
                                Subscribe Now
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
