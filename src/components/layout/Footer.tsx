import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-sky-blue text-black border-t border-black/10">
            <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
                <div className="grid gap-12 md:grid-cols-4">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <img
                                src="/images/logo.png"
                                alt="Arti Fiksi Logo"
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-sm text-gray-800">
                            Media masa kini untuk generasi kreatif. Menyajikan konten inspiratif seputar gaya hidup, budaya, dan teknologi.
                        </p>
                    </div>

                    {/* Links 1 */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-black text-lemon-lime uppercase tracking-wider font-montserrat-black drop-shadow-sm">Platform</h3>
                        <ul className="space-y-2 text-sm text-gray-800">
                            <li><Link href="/" className="hover:text-lemon-lime transition-colors">Home</Link></li>
                            <li><Link href="/articles" className="hover:text-lemon-lime transition-colors">Latest Articles</Link></li>
                            <li><Link href="/profile" className="hover:text-lemon-lime transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-black text-lemon-lime uppercase tracking-wider font-montserrat-black drop-shadow-sm">Legal</h3>
                        <ul className="space-y-2 text-sm text-gray-800">
                            <li><Link href="#" className="hover:text-lemon-lime transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-lemon-lime transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-lemon-lime transition-colors">Advertise</Link></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-black text-lemon-lime uppercase tracking-wider font-montserrat-black drop-shadow-sm">Follow Us</h3>
                        <div className="flex gap-4">
                            <Link href="#" className="rounded-full bg-black/10 p-2 text-gray-800 hover:bg-lemon-lime hover:text-black transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="rounded-full bg-black/10 p-2 text-gray-800 hover:bg-lemon-lime hover:text-black transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="rounded-full bg-black/10 p-2 text-gray-800 hover:bg-lemon-lime hover:text-black transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="rounded-full bg-black/10 p-2 text-gray-800 hover:bg-lemon-lime hover:text-black transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-black/10 pt-8 text-center text-xs text-black/60">
                    <p>&copy; {new Date().getFullYear()} Arti Fiksi Media. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
