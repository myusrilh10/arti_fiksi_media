'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

export default function Header() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
            setIsMenuOpen(false);
            setIsSearchOpen(false);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200/60 bg-white/90 text-black backdrop-blur-lg shadow-sm">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <img
                        src="/images/logo_artifiksi.png"
                        alt="Arti Fiksi Logo"
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-[11px] font-black font-montserrat-black uppercase tracking-[0.12em] relative">
                    {[
                        { href: '/', label: 'Home' },
                        { href: '/categories/lensa-lokal', label: 'Lensa Lokal' },
                        { href: '/categories/lifestyle', label: 'Lifestyle' },
                        { href: '/categories/public-interest', label: 'Public Interest' },
                        { href: '/events', label: 'Events' },
                        { href: '/videos', label: 'Videos' },
                        { href: '/profile', label: 'About' },
                    ].map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="relative pb-0.5 text-gray-700 hover:text-black transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-lemon-lime after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    {/* Search - Desktop Toggle */}
                    <div className="relative hidden md:flex items-center">
                        <div className={`overflow-hidden transition-all duration-300 ${isSearchOpen ? 'w-64 opacity-100 mr-2' : 'w-0 opacity-0'}`}>
                            <form onSubmit={handleSearch}>
                                <input
                                    type="search"
                                    placeholder="Search..."
                                    className="h-9 w-full rounded-md border border-gray-200 bg-gray-50 px-3 text-sm focus:border-lemon-lime focus:outline-none"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    autoFocus={isSearchOpen}
                                    onBlur={() => !searchQuery && setIsSearchOpen(false)}
                                />
                            </form>
                        </div>
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="text-black hover:text-lemon-lime transition-colors"
                        >
                            <Search className="h-5 w-5" />
                        </button>
                    </div>


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
                                className="w-full h-10 rounded-md border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm focus:border-lemon-lime focus:outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </form>

                        <nav className="flex flex-col gap-3">
                            <Link
                                href="/"
                                className="text-sm font-black font-montserrat-black uppercase tracking-widest p-2 hover:bg-lemon-lime hover:text-black rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>

                            <div className="px-2 space-y-4">
                                <Link href="/categories/lensa-lokal" className="block text-sm font-black font-montserrat-black uppercase tracking-widest text-gray-800 hover:text-lemon-lime" onClick={() => setIsMenuOpen(false)}>Lensa Lokal</Link>
                                <Link href="/categories/lifestyle" className="block text-sm font-black font-montserrat-black uppercase tracking-widest text-gray-800 hover:text-lemon-lime" onClick={() => setIsMenuOpen(false)}>Lifestyle</Link>
                                <Link href="/categories/public-interest" className="block text-sm font-black font-montserrat-black uppercase tracking-widest text-gray-800 hover:text-lemon-lime" onClick={() => setIsMenuOpen(false)}>Public Interest</Link>
                            </div>

                            <Link
                                href="/events"
                                className="text-sm font-black font-montserrat-black uppercase tracking-widest p-2 hover:bg-lemon-lime hover:text-black rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Events
                            </Link>
                            <Link
                                href="/videos"
                                className="text-sm font-black font-montserrat-black uppercase tracking-widest p-2 hover:bg-lemon-lime hover:text-black rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Videos
                            </Link>
                            <Link
                                href="/profile"
                                className="text-sm font-black font-montserrat-black uppercase tracking-widest p-2 hover:bg-lemon-lime hover:text-black rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
