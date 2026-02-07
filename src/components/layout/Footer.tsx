import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white border-t border-white/10">
            <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
                <div className="grid gap-12 md:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary text-black font-bold">
                                AF
                            </div>
                            <span className="text-xl font-bold">Arti Fiksi</span>
                        </div>
                        <p className="text-sm text-gray-400">
                            Media masa kini untuk generasi kreatif. Menyajikan konten inspiratif seputar gaya hidup, budaya, dan teknologi.
                        </p>
                    </div>

                    {/* Links 1 */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Platform</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/articles" className="hover:text-white transition-colors">Latest Articles</Link></li>
                            <li><Link href="/profile" className="hover:text-white transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Legal</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Advertise</Link></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Follow Us</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="rounded-full bg-gray-900 p-2 text-gray-400 hover:bg-primary hover:text-black transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="rounded-full bg-gray-900 p-2 text-gray-400 hover:bg-primary hover:text-black transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="rounded-full bg-gray-900 p-2 text-gray-400 hover:bg-primary hover:text-black transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="rounded-full bg-gray-900 p-2 text-gray-400 hover:bg-primary hover:text-black transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Arti Fiksi Media. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
