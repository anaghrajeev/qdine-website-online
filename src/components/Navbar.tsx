'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0a714e] backdrop-blur-xl shadow-sm transition-all duration-300" id="mainNav">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 lg:h-20">
                {/* Brand */}
                <Link className="flex items-center group flex-shrink-0" href="/">
                    <Image 
                        src="/images/nav-logo.png" 
                        alt="Qdine" 
                        width={105} 
                        height={34} 
                        className="w-[85px] sm:w-[95px] md:w-[105px] h-auto group-hover:scale-105 transition-transform object-contain"
                        priority
                    />
                </Link>
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link className={`text-[15px] transition-colors ${pathname === '/' ? 'text-white font-semibold border-b-2 border-white pb-0.5' : 'text-white/80 hover:text-white font-medium'}`} href="/">
                        Platform
                    </Link>
                    <Link className={`text-[15px] transition-colors ${pathname === '/pricing' ? 'text-white font-semibold border-b-2 border-white pb-0.5' : 'text-white/80 hover:text-white font-medium'}`} href="/pricing">
                        Pricing
                    </Link>
                    <Link className={`text-[15px] transition-colors ${pathname === '/mission' ? 'text-white font-semibold border-b-2 border-white pb-0.5' : 'text-white/80 hover:text-white font-medium'}`} href="/mission">
                        Mission
                    </Link>
                </div>
                {/* CTA + Mobile Toggle */}
                <div className="flex items-center gap-3 sm:gap-4">
                    <Link className="hidden md:block text-white font-semibold text-[15px] hover:text-white/80 transition-colors" href="#">
                        Log in
                    </Link>
                    <Link className="hidden sm:inline-flex bg-white hover:bg-gray-100 text-[#0a714e] px-5 sm:px-6 py-2.5 rounded-full font-semibold text-[13px] sm:text-[14px] transition-all duration-200 shadow-sm hover:shadow-lg active:scale-95" href="#">
                        Start Free Trial
                    </Link>
                    {/* Mobile hamburger */}
                    <button 
                        className="md:hidden flex items-center justify-center w-10 h-10 text-white rounded-lg hover:bg-white/10 transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle mobile menu"
                    >
                        <span className="material-symbols-outlined text-[24px]">
                            {mobileOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-[#0a714e] border-t border-white/10 px-4 pb-6 pt-4 space-y-1 animate-[fadeIn_200ms_ease-out]">
                    <Link 
                        className={`block py-3 px-4 text-[15px] rounded-xl hover:bg-white/10 transition-colors ${pathname === '/' ? 'text-white font-semibold' : 'text-white/80 font-medium'}`} 
                        href="/"
                        onClick={() => setMobileOpen(false)}
                    >
                        Platform
                    </Link>
                    <Link 
                        className={`block py-3 px-4 text-[15px] rounded-xl hover:bg-white/10 transition-colors ${pathname === '/pricing' ? 'text-white font-semibold' : 'text-white/80 font-medium'}`} 
                        href="/pricing"
                        onClick={() => setMobileOpen(false)}
                    >
                        Pricing
                    </Link>
                    <Link 
                        className={`block py-3 px-4 text-[15px] rounded-xl hover:bg-white/10 transition-colors ${pathname === '/mission' ? 'text-white font-semibold' : 'text-white/80 font-medium'}`} 
                        href="/mission"
                        onClick={() => setMobileOpen(false)}
                    >
                        Mission
                    </Link>
                    <div className="pt-3 border-t border-white/10 mt-2 space-y-3">
                        <Link className="block py-3 px-4 text-white/80 font-medium text-[15px] rounded-xl hover:bg-white/10 transition-colors" href="#">
                            Log in
                        </Link>
                        <Link className="block text-center bg-white hover:bg-gray-100 text-[#0a714e] px-6 py-3 rounded-full font-semibold text-[14px] transition-all duration-200 shadow-sm" href="#">
                            Start Free Trial
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
