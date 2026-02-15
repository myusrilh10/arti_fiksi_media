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
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 text-black backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <img
                        src="/images/logo.png"
                        alt="Arti Fiksi Logo"
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-black font-montserrat-black uppercase tracking-widest relative">
                    <Link href="/" className="hover:text-lemon-lime transition-colors">
                        Home
                    </Link>

                    {/* Insight Dropdown */}
                    <div className="relative group">
                        <Link href="/categories/insight" className="hover:text-lemon-lime transition-colors flex items-center gap-1">
                            Insight
                        </Link>
                        <div className="absolute top-full left-0 w-48 pt-4 transition-all duration-200 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                            <div className="bg-white border border-gray-100 shadow-xl rounded-md overflow-hidden py-2">
                                {['Science', 'General Knowledge', 'Business & Career'].map((topic) => (
                                    <Link
                                        key={topic}
                                        href={`/categories/insight/${topic.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                        className="block px-4 py-2 text-xs hover:bg-lemon-lime hover:text-black transition-colors"
                                    >
                                        {topic}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Inspire Dropdown */}
                    <div className="relative group">
                        <Link href="/categories/inspire" className="hover:text-lemon-lime transition-colors flex items-center gap-1">
                            Inspire
                        </Link>
                        <div className="absolute top-full left-0 w-48 pt-4 transition-all duration-200 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                            <div className="bg-white border border-gray-100 shadow-xl rounded-md overflow-hidden py-2">
                                {['Human Stories', 'Love & Relationships'].map((topic) => (
                                    <Link
                                        key={topic}
                                        href={`/categories/inspire/${topic.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                        className="block px-4 py-2 text-xs hover:bg-lemon-lime hover:text-black transition-colors"
                                    >
                                        {topic}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Interest Dropdown */}
                    <div className="relative group">
                        <Link href="/categories/interest" className="hover:text-lemon-lime transition-colors flex items-center gap-1">
                            Interest
                        </Link>
                        <div className="absolute top-full left-0 w-48 pt-4 transition-all duration-200 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                            <div className="bg-white border border-gray-100 shadow-xl rounded-md overflow-hidden py-2">
                                {['Fashion', 'Wellness', 'Art & Culture', 'Home'].map((topic) => (
                                    <Link
                                        key={topic}
                                        href={`/categories/interest/${topic.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                                        className="block px-4 py-2 text-xs hover:bg-lemon-lime hover:text-black transition-colors"
                                    >
                                        {topic}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link href="/events" className="hover:text-lemon-lime transition-colors">
                        Events
                    </Link>
                    <Link href="#" className="hover:text-lemon-lime transition-colors">
                        Videos
                    </Link>
                    <Link href="/profile" className="hover:text-lemon-lime transition-colors">
                        About
                    </Link>
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

                    <button className="hidden rounded-md bg-lemon-lime px-5 py-2 text-sm font-black font-montserrat-black text-black hover:bg-lemon-lime/80 md:block transition-colors uppercase tracking-wider">
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

                            {/* Mobile Categories Accordion - Simplified for now */}
                            <div className="px-2 space-y-2">
                                {/* Insight */}
                                <div>
                                    <Link href="/categories/insight" className="block text-sm font-black font-montserrat-black uppercase tracking-widest text-gray-800 hover:text-lemon-lime mb-1" onClick={() => setIsMenuOpen(false)}>Insight</Link>
                                    <div className="pl-3 text-xs text-gray-500 space-y-1">
                                        {['Science', 'General Knowledge', 'Business & Career'].map(t => (
                                            <Link key={t} href={`/categories/insight/${t.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="block hover:text-lemon-lime" onClick={() => setIsMenuOpen(false)}>{t}</Link>
                                        ))}
                                    </div>
                                </div>
                                {/* Inspire */}
                                <div>
                                    <Link href="/categories/inspire" className="block text-sm font-black font-montserrat-black uppercase tracking-widest text-gray-800 hover:text-lemon-lime mb-1" onClick={() => setIsMenuOpen(false)}>Inspire</Link>
                                    <div className="pl-3 text-xs text-gray-500 space-y-1">
                                        {['Human Stories', 'Love & Relationships'].map(t => (
                                            <Link key={t} href={`/categories/inspire/${t.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="block hover:text-lemon-lime" onClick={() => setIsMenuOpen(false)}>{t}</Link>
                                        ))}
                                    </div>
                                </div>
                                {/* Interest */}
                                <div>
                                    <Link href="/categories/interest" className="block text-sm font-black font-montserrat-black uppercase tracking-widest text-gray-800 hover:text-lemon-lime mb-1" onClick={() => setIsMenuOpen(false)}>Interest</Link>
                                    <div className="pl-3 text-xs text-gray-500 space-y-1">
                                        {['Fashion', 'Wellness', 'Art & Culture', 'Home'].map(t => (
                                            <Link key={t} href={`/categories/interest/${t.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="block hover:text-lemon-lime" onClick={() => setIsMenuOpen(false)}>{t}</Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/events"
                                className="text-sm font-black font-montserrat-black uppercase tracking-widest p-2 hover:bg-lemon-lime hover:text-black rounded-md"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Events
                            </Link>
                            <Link
                                href="#"
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
                            <button className="w-full mt-2 rounded-md bg-lemon-lime px-4 py-2.5 text-sm font-black font-montserrat-black text-black hover:bg-lemon-lime/80 transition-colors uppercase tracking-wider">
                                Subscribe Now
                            </button>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
