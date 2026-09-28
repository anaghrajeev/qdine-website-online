'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
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
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                console.log("Login success response:", data);
                
                // Try to extract the redirect URL or slug from the response
                const slug = data?.data?.restaurant?.slug || data?.restaurant?.slug || data?.data?.slug || data?.slug;
                
                let redirectUrl = 
                    data?.url || 
                    data?.redirect_url || 
                    data?.redirectUrl || 
                    data?.data?.url || 
                    data?.data?.redirect_url || 
                    data?.data?.redirectUrl ||
                    data?.data?.urls?.admin_portal ||
                    data?.data?.urls?.pos_terminal;

                if (!redirectUrl && slug) {
                    redirectUrl = `/${slug}/admin/pos`;
                }

                if (redirectUrl) {
                    // If the backend returned a path, we redirect them to the test.getqdine.com domain
                    // assuming the admin panel is hosted there, or keep it relative if it's hosted here.
                    // For now, let's redirect to the test.getqdine.com domain as the API is there.
                    window.location.href = redirectUrl.startsWith('http') ? redirectUrl : `https://test.getqdine.com${redirectUrl}`;
                } else {
                    // Fallback to a generic admin URL if nothing is found
                    window.location.href = 'https://test.getqdine.com/admin'; 
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
                    {/* Brand */}
                    <div className="mb-10">
                        <Link href="/">
                            <Image 
                                src="/images/nav-logo.png" 
                                alt="Qdine" 
                                width={120} 
                                height={40} 
                                className="w-[100px] sm:w-[120px] h-auto object-contain [filter:brightness(0)_saturate(100%)]" 
                                priority
                            />
                        </Link>
                    </div>

                    <h1 className="text-[32px] sm:text-[40px] font-bold text-[#1a1a1a] tracking-tight mb-2">
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
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0a714e] focus:ring-1 focus:ring-[#0a714e] outline-none transition-all text-[#1a1a1a]"
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
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0a714e] focus:ring-1 focus:ring-[#0a714e] outline-none transition-all text-[#1a1a1a] pr-12"
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
                            className="w-full bg-[#0a714e] hover:bg-[#085a3e] text-white py-3.5 rounded-xl font-semibold text-[15px] transition-all duration-200 shadow-sm flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
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
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[60px] translate-y-1/3 -translate-x-1/4"></div>
                
                <div className="relative z-10 max-w-md text-center">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[32px] shadow-2xl inline-flex flex-col items-center">
                        <span className="material-symbols-outlined text-[64px] text-white mb-6 animate-[bounce_3s_infinite]">
                            point_of_sale
                        </span>
                        <h2 className="text-white text-[28px] font-serif tracking-tight mb-4 leading-tight">
                            Manage every order,<br/>perfect every service
                        </h2>
                        <p className="text-white/80 text-[16px] leading-relaxed font-medium">
                            The intelligent restaurant management system built for speed and profitability.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
