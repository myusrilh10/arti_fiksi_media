'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#203627] text-[#e7fe41] border-t border-[#e7fe41]/20">
            <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
                <div className="grid gap-12 md:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <img
                                src="/images/logo.png"
                                alt="Arti Fiksi Logo"
                                className="h-16 w-auto object-contain"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/400x120/203627/e7fe41.png?text=ARTI+FIKSI&font=playfair";
                                }}
                            />
                        </Link>
                        <p className="text-sm text-gray-300">
                            Media yang menemanimu simak dunia dan sekitar. Mulai dari kota Palu, sampai entah di belahan dunia mana
                        </p>
                    </div>

                    {/* Links 1 */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-black text-[#e7fe41] uppercase tracking-wider font-montserrat-black drop-shadow-sm">Platform</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="/" className="hover:text-[#e7fe41] transition-colors">Home</Link></li>
                            <li><Link href="/articles" className="hover:text-[#e7fe41] transition-colors">Latest Articles</Link></li>
                            <li><Link href="/profile" className="hover:text-[#e7fe41] transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-black text-[#e7fe41] uppercase tracking-wider font-montserrat-black drop-shadow-sm">Legal</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="#" className="hover:text-[#e7fe41] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-[#e7fe41] transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-[#e7fe41] transition-colors">Advertise</Link></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-black text-[#e7fe41] uppercase tracking-wider font-montserrat-black drop-shadow-sm">Follow Us</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="rounded-full bg-[#e7fe41]/10 p-2 text-[#e7fe41] hover:bg-[#e7fe41] hover:text-[#203627] transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="rounded-full bg-[#e7fe41]/10 p-2 text-[#e7fe41] hover:bg-[#e7fe41] hover:text-[#203627] transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="rounded-full bg-[#e7fe41]/10 p-2 text-[#e7fe41] hover:bg-[#e7fe41] hover:text-[#203627] transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="rounded-full bg-[#e7fe41]/10 p-2 text-[#e7fe41] hover:bg-[#e7fe41] hover:text-[#203627] transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-[#e7fe41]/20 pt-8 text-center text-xs text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Arti Fiksi Media. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
