'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function OnboardingPage() {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        admin_email: '',
        admin_password: '',
        phone: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/onboarding', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (res.ok && data.success) {
                // Automatically redirect to the created admin portal
                // For test environment, it could be relative or absolute, handle accordingly
                const portalUrl = data.data.urls.admin_portal;
                if (portalUrl.startsWith('http')) {
                    window.location.href = portalUrl;
                } else {
                    window.location.href = `https://test.getqdine.com${portalUrl}`;
                }
            } else {
                setError(data.error || 'Failed to create restaurant');
            }
        } catch (err) {
            console.error('Registration error:', err);
            setError('Network error connecting to onboarding service');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-[#fdfaf6]">
            {/* Left side: Onboarding Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 relative z-10 overflow-y-auto">
                <div className="w-full max-w-md my-auto py-8">
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
                        Get Started Free
                    </h1>
                    <p className="text-gray-500 mb-8 font-medium">
                        Set up your restaurant in seconds. No credit card required.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {error && (
                            <div className="p-4 rounded-xl bg-red-50 text-red-600 text-[14px] font-medium border border-red-100">
                                {error}
                            </div>
                        )}

                        <div>
                            <label className="block text-[14px] font-medium text-gray-700 mb-1.5" htmlFor="name">
                                Restaurant Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0a714e] focus:ring-1 focus:ring-[#0a714e] outline-none transition-all text-[#1a1a1a]"
                                placeholder="The Coastal Bistro"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-[14px] font-medium text-gray-700 mb-1.5" htmlFor="email">
                                Your Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0a714e] focus:ring-1 focus:ring-[#0a714e] outline-none transition-all text-[#1a1a1a]"
                                placeholder="owner@restaurant.com"
                                value={formData.admin_email}
                                onChange={(e) => setFormData({ ...formData, admin_email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-[14px] font-medium text-gray-700 mb-1.5" htmlFor="password">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    minLength={6}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0a714e] focus:ring-1 focus:ring-[#0a714e] outline-none transition-all text-[#1a1a1a] pr-12"
                                    placeholder="min 6 characters"
                                    value={formData.admin_password}
                                    onChange={(e) => setFormData({ ...formData, admin_password: e.target.value })}
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

                        <div>
                            <label className="block text-[14px] font-medium text-gray-700 mb-1.5" htmlFor="phone">
                                Phone Number <span className="text-gray-400 font-normal">(Optional)</span>
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0a714e] focus:ring-1 focus:ring-[#0a714e] outline-none transition-all text-[#1a1a1a]"
                                placeholder="+91 98765 43210"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-[#0a714e] hover:bg-[#085a3e] text-white py-3.5 rounded-xl font-semibold text-[15px] transition-all duration-200 shadow-sm flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                        >
                            {loading ? (
                                <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            ) : 'Create Your Restaurant'}
                        </button>
                    </form>

                    <p className="mt-8 text-center text-gray-500 text-[14px] font-medium">
                        Already have an account?{' '}
                        <Link href="/login" className="text-[#0a714e] font-semibold hover:underline">
                            Log in
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
                        <span className="material-symbols-outlined text-[64px] text-white mb-6 animate-[pulse_3s_infinite]">
                            rocket_launch
                        </span>
                        <h2 className="text-white text-[28px] font-serif tracking-tight mb-4 leading-tight">
                            Launch your digital<br/>restaurant today
                        </h2>
                        <p className="text-white/80 text-[16px] leading-relaxed font-medium">
                            Join 500+ successful owners. Instant setup, QR menus, and POS out of the box.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
