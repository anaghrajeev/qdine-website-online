'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const usps = [
    "Manage every order and perfect every service with zero delays.",
    "The intelligent POS system built for incredible speed.",
    "Drive profitability with real-time analytics and insights.",
    "Seamlessly connect your front-of-house and kitchen operations."
];

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    // USP animation state
    const [uspIndex, setUspIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setUspIndex((prev) => (prev + 1) % usps.length);
                setFade(true);
            }, 500); // sync with tailwind transition duration
        }, 4000);
        return () => clearInterval(interval);
    }, []);
    
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
                
                // 1. Optionally save user info and token to localStorage
                if (data.token) {
                    localStorage.setItem('admin_token', data.token);
                    if (data.user) {
                        localStorage.setItem('admin_user', JSON.stringify(data.user));
                    }
                }
                
                // Safely extract redirect URL
                const portalUrl = data?.data?.urls?.admin_portal || data?.redirect_url || data?.url;
                
                if (portalUrl) {
                    if (portalUrl.startsWith('http')) {
                        window.location.href = portalUrl;
                    } else {
                        const path = portalUrl.startsWith('/') ? portalUrl : `/${portalUrl}`;
                        window.location.href = `https://test.getqdine.com${path}`;
                    }
                } else {
                    const slug = data?.data?.slug || data?.slug || data?.user?.restaurant_slug;
                    if (slug) {
                        window.location.href = `https://test.getqdine.com/${slug}/admin/orders`;
                    } else {
                        window.location.href = 'https://test.getqdine.com/admin';
                    }
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
        <div className="min-h-screen flex flex-col md:flex-row bg-[#fdfaf6]">
            {/* Left side: Login Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 relative z-10">
                <div className="w-full max-w-md">
                    <h1 className="font-serif text-[32px] sm:text-[40px] font-bold text-[#1a1a1a] tracking-tight mb-2">
                        Welcome back
                    </h1>
                    <p className="text-gray-500 mb-8 font-medium">
                        Log in to your Qdine admin portal to manage your restaurant.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                            <div className="p-4 rounded-xl bg-red-50 text-red-600 text-[14px] font-medium border border-red-100">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-[14px] font-medium text-gray-700 mb-1.5" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-[#0a714e] focus:ring-1 focus:ring-[#0a714e] outline-none transition-all text-[#1a1a1a]"
                                placeholder="owner@restaurant.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1.5">
                                <label className="block text-[14px] font-medium text-gray-700" htmlFor="password">
                                    Password
                                </label>
                                <a href="#" className="text-[13px] text-[#0a714e] font-semibold hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-[#0a714e] focus:ring-1 focus:ring-[#0a714e] outline-none transition-all text-[#1a1a1a] pr-12"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <span className="material-symbols-outlined text-[20px]">
                                        {showPassword ? 'visibility_off' : 'visibility'}
                                    </span>
                                </button>
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-[#0a714e] hover:opacity-90 text-white py-3.5 rounded-full font-semibold text-[15px] transition-all duration-200 shadow-lg shadow-[#0a714e]/20 hover:shadow-[#0a714e]/40 hover:-translate-y-0.5 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                        >
                            {loading ? (
                                <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            ) : 'Log in'}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-gray-500 text-[14px] font-medium">
                        Don't have an account?{' '}
                        <Link href="/onboarding" className="text-[#0a714e] font-semibold hover:underline">
                            Start for free
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right side: Image/Graphic */}
            <div className="hidden md:flex w-1/2 bg-[#0a714e] p-12 items-center justify-center relative overflow-hidden">
                {/* Logo / Brand Anchor */}
                <div className="absolute top-12 left-12 z-20">
                    <Link href="/" className="inline-block hover:opacity-80 transition-opacity duration-300">
                        <Image 
                            src="/images/nav-logo.png" 
                            alt="Qdine" 
                            width={130} 
                            height={44} 
                            className="w-[130px] h-auto object-contain [filter:brightness(0)_invert(1)]"
                            priority
                        />
                    </Link>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
                
                <div className="relative z-10 w-full max-w-2xl flex flex-col items-center justify-center">
                    <Image 
                        src="/images/pos_login_img.png" 
                        alt="Qdine Restaurant Management System" 
                        width={800} 
                        height={600} 
                        className="w-full h-auto object-contain drop-shadow-2xl animate-float relative z-10"
                        priority
                    />
                    {/* Shadow under the image to ground it */}
                    <div className="w-[70%] h-8 bg-black/30 rounded-[100%] blur-xl mt-[-2rem] z-0"></div>
                    
                    {/* Animated USP Text */}
                    <div className="mt-12 h-20 px-4 md:px-12 flex items-center justify-center text-center">
                        <p 
                            className={`text-white text-[20px] md:text-[22px] font-serif tracking-tight leading-tight transition-all duration-500 transform ${
                                fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                        >
                            {usps[uspIndex]}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
