'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/centralized-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok && data.success !== false) {
                console.log("Login success response:", data);
                
                const token = data.token || data?.data?.token;

                if (token) {
                    localStorage.setItem('admin_token', token);
                    if (data.user) {
                        localStorage.setItem('admin_user', JSON.stringify(data.user));
                    }
                }
                
                const rawPortalUrl = data?.data?.urls?.admin_portal || data?.redirect_url || data?.url;
                let targetUrl = '';

                if (rawPortalUrl) {
                    if (rawPortalUrl.startsWith('http')) {
                        targetUrl = rawPortalUrl;
                    } else {
                        const path = rawPortalUrl.startsWith('/') ? rawPortalUrl : `/${rawPortalUrl}`;
                        targetUrl = `https://test.getqdine.com${path}`;
                    }
                } else {
                    const slug = data?.data?.slug || data?.slug || data?.user?.restaurant_slug;
                    if (slug) {
                        targetUrl = `https://test.getqdine.com/${slug}/admin/orders`;
                    } else {
                        targetUrl = 'https://test.getqdine.com/admin';
                    }
                }

                // Option 2: Token Bridge / URL Handshake
                // Appends token to the portal URL so test.getqdine.com authenticates cross-domain
                if (token && targetUrl) {
                    try {
                        const urlObj = new URL(targetUrl);
                        urlObj.searchParams.set('token', token);
                        urlObj.searchParams.set('auth_token', token);
                        window.location.href = urlObj.toString();
                    } catch {
                        const separator = targetUrl.includes('?') ? '&' : '?';
                        window.location.href = `${targetUrl}${separator}token=${encodeURIComponent(token)}&auth_token=${encodeURIComponent(token)}`;
                    }
                } else {
                    window.location.href = targetUrl || 'https://test.getqdine.com/admin';
                }
            } else {
                setError(data.error || data.message || 'Login failed. Please check your credentials.');
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('A network error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[100dvh] lg:h-screen lg:max-h-screen flex flex-col lg:flex-row bg-white overflow-x-hidden lg:overflow-hidden select-none">
            
            {/* ========================================================= */}
            {/* LEFT PANEL: The Login Form                                 */}
            {/* ========================================================= */}
            <div className="w-full lg:w-[48%] xl:w-[45%] h-full flex flex-col justify-center items-center px-6 sm:px-10 lg:px-12 xl:px-16 py-8 sm:py-12 relative z-10 bg-white overflow-y-auto">
                
                {/* Unified Centered Form Container */}
                <div className="w-full max-w-[480px] sm:max-w-[500px] xl:max-w-[520px] mx-auto my-auto">
                    
                    {/* Subtle Back Link - perfectly aligned with the form */}
                    <div className="mb-6 sm:mb-8">
                        <Link 
                            href="/" 
                            className="inline-flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-[#1a1a1a] transition-colors font-medium group"
                        >
                            <span className="material-symbols-outlined text-[17px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            <span>Back</span>
                        </Link>
                    </div>

                    <h1 className="font-serif text-[32px] sm:text-[36px] lg:text-[40px] font-bold text-[#1a1a1a] tracking-tight mb-2 leading-tight">
                        Welcome Back
                    </h1>
                    <p className="text-gray-500 text-[14px] sm:text-[15px] font-normal mb-8">
                        Log in to your Qdine admin portal to manage your restaurant.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5">
                        {error && (
                            <div className="p-3.5 rounded-xl bg-red-50 text-red-600 text-[13px] font-medium border border-red-100 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]">error</span>
                                <span>{error}</span>
                            </div>
                        )}

                        {/* Email Address */}
                        <div>
                            <label className="block text-[13px] font-medium text-gray-700 mb-1.5" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="w-full px-4 py-3.5 rounded-xl bg-gray-50/70 border border-gray-200/90 focus:bg-white focus:border-[#0a714e] focus:ring-2 focus:ring-[#0a714e]/10 outline-none transition-all text-[#1a1a1a] text-[16px] sm:text-[14px] placeholder:text-gray-400"
                                placeholder="owner@restaurant.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex justify-between items-center mb-1.5">
                                <label className="block text-[13px] font-medium text-gray-700" htmlFor="password">
                                    Password
                                </label>
                                <a href="#" className="text-[12.5px] text-[#0a714e] font-semibold hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="w-full px-4 py-3.5 rounded-xl bg-gray-50/70 border border-gray-200/90 focus:bg-white focus:border-[#0a714e] focus:ring-2 focus:ring-[#0a714e]/10 outline-none transition-all text-[#1a1a1a] text-[16px] sm:text-[14px] placeholder:text-gray-400 pr-11 tracking-wider"
                                    placeholder="••••••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    <span className="material-symbols-outlined text-[19px]">
                                        {showPassword ? 'visibility_off' : 'visibility'}
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                            <button 
                                type="submit" 
                                disabled={loading}
                                className="w-full bg-[#0a714e] hover:bg-[#085a3e] active:scale-[0.99] text-white py-3.5 sm:py-4 rounded-full font-semibold text-[15px] sm:text-[16px] transition-all duration-200 shadow-sm flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                            >
                                {loading ? (
                                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                ) : 'Log in'}
                            </button>
                        </div>
                    </form>

                    <p className="mt-7 text-center text-gray-500 text-[13.5px] font-medium">
                        Don&apos;t have an account?{' '}
                        <Link href="/onboarding" className="text-[#0a714e] font-semibold hover:underline">
                            Start for free
                        </Link>
                    </p>
                </div>
            </div>

            {/* ========================================================= */}
            {/* RIGHT PANEL: Angular Chevron + Lifestyle Image (Desktop)   */}
            {/* Omitted completely on mobile for clean Apple-like focus   */}
            {/* ========================================================= */}
            <div className="hidden lg:flex relative w-full lg:w-[52%] xl:w-[55%] h-full flex-col justify-start items-start pt-14 lg:pt-16 xl:pt-20 2xl:pt-24 overflow-hidden bg-[#0a714e]">
                
                {/* Background Image: Lady Manager & POS Laptop */}
                <Image
                    src="/images/onboarding_hero.png"
                    alt="Run a Smarter Restaurant with Qdine"
                    fill
                    priority
                    sizes="(max-width: 1024px) 0vw, 55vw"
                    className="object-cover object-[70%_center]"
                />

                {/* Dark Vignette / Gradient Scrim for crisp text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20 z-10 pointer-events-none" />

                {/* Angular Green Chevron Divider */}
                <div className="absolute inset-y-0 left-0 w-28 xl:w-36 z-20 pointer-events-none select-none">
                    <svg 
                        viewBox="0 0 120 1000" 
                        preserveAspectRatio="none" 
                        className="w-full h-full"
                    >
                        {/* White polygon matching the left form background */}
                        <polygon points="0,0 24,0 72,460 0,1000" fill="#ffffff" />
                        
                        {/* Green chevron band running alongside */}
                        <polygon points="24,0 56,0 120,460 38,1000 0,1000 72,460" fill="#0a714e" />
                    </svg>
                </div>

                {/* Overlay Text Content - 2 wide lines, bold & prominent with generous breathing room */}
                <div className="relative z-30 lg:pl-44 xl:pl-52 2xl:pl-60 pr-8 max-w-lg xl:max-w-xl">
                    <h2 className="text-[34px] sm:text-[38px] lg:text-[42px] xl:text-[48px] 2xl:text-[52px] font-bold text-white tracking-tight leading-[1.08] mb-3.5 drop-shadow-sm">
                        <span className="whitespace-nowrap">Run a <span className="text-[#0a714e]">Smarter</span></span><br />
                        <span>Restaurant</span>
                    </h2>
                    
                    <p className="text-white/90 text-[15px] sm:text-[16px] xl:text-[18px] font-medium leading-relaxed max-w-sm xl:max-w-md mb-4 drop-shadow-sm">
                        Manage orders, track sales, and grow your business.
                    </p>

                    {/* Green Accent Underline Bar */}
                    <div className="w-12 h-1 bg-[#0a714e] rounded-full shadow-sm" />
                </div>
            </div>

        </div>
    );
}
