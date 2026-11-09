'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

type ProductType = 'POS' | 'DIGITAL_MENU' | 'QUEUE_MANAGEMENT';

export default function OnboardingPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // OTP State
    const [otpSent, setOtpSent] = useState(false);
    const [sendingOtp, setSendingOtp] = useState(false);
    const [cooldown, setCooldown] = useState(0);

    const [formData, setFormData] = useState({
        product: 'POS' as ProductType,
        name: '',
        admin_email: '',
        admin_password: '',
        email_verification_otp: '',
        phone: '',
    });

    // Cooldown countdown timer
    useEffect(() => {
        if (cooldown <= 0) return;
        const timer = setInterval(() => {
            setCooldown((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [cooldown]);

    // Send OTP handler
    const handleSendOtp = async () => {
        setError('');
        setSuccessMessage('');

        if (!formData.admin_email) {
            setError('Please enter your email address first.');
            return;
        }

        // Basic email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.admin_email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setSendingOtp(true);

        try {
            const res = await fetch('/api/auth/send-verification-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.admin_email,
                    restaurant_name: formData.name || 'My Restaurant',
                }),
            });

            const data = await res.json();

            if (res.ok && data.success !== false) {
                setOtpSent(true);
                setCooldown(30);
                setSuccessMessage('Verification code sent to your email! Please check your inbox.');
            } else {
                setError(data.error || data.message || 'Failed to send verification code. Please try again.');
            }
        } catch (err) {
            console.error('OTP Send error:', err);
            setError('Network error while requesting verification code.');
        } finally {
            setSendingOtp(false);
        }
    };

    // Onboarding Form Submit handler
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        if (!formData.email_verification_otp || formData.email_verification_otp.length !== 6) {
            setError('Please enter the 6-digit email verification code.');
            return;
        }

        setLoading(true);

        try {
            const payload = {
                name: formData.name,
                admin_email: formData.admin_email,
                admin_password: formData.admin_password,
                email_verification_otp: formData.email_verification_otp,
                product: formData.product,
                plan: formData.product === 'POS' ? 'PREMIUM' : undefined,
                billing_cycle: 'ANNUALLY',
                phone: formData.phone || undefined,
            };

            const res = await fetch('/api/onboarding', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const data = await res.json();

            if (res.ok && data.success !== false) {
                const token = data.token || data?.data?.token;
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
                    const slug = data?.data?.restaurant?.slug || data?.data?.slug || data?.slug;
                    if (slug) {
                        targetUrl = `https://test.getqdine.com/${slug}/admin/login`;
                    } else {
                        targetUrl = 'https://test.getqdine.com/admin';
                    }
                }

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
                    window.location.href = targetUrl;
                }
            } else {
                setError(data.error || data.message || 'Failed to create restaurant');
            }
        } catch (err) {
            console.error('Registration error:', err);
            setError('Network error connecting to onboarding service');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-[100dvh] lg:h-screen lg:max-h-screen flex flex-col lg:flex-row bg-white overflow-x-hidden lg:overflow-hidden select-none">
            
            {/* ========================================================= */}
            {/* LEFT PANEL: The Signup Form                                */}
            {/* ========================================================= */}
            <div className="w-full lg:w-[48%] xl:w-[45%] h-full flex flex-col justify-center items-center px-6 sm:px-10 lg:px-12 xl:px-16 py-8 sm:py-12 relative z-10 bg-white overflow-y-auto">
                
                {/* Unified Centered Form Container */}
                <div className="w-full max-w-[480px] sm:max-w-[500px] xl:max-w-[520px] mx-auto my-auto">
                    
                    {/* Subtle Back Link - perfectly aligned with the form */}
                    <div className="mb-5 sm:mb-6">
                        <Link 
                            href="/" 
                            className="inline-flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-[#1a1a1a] transition-colors font-medium group"
                        >
                            <span className="material-symbols-outlined text-[17px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            <span>Back</span>
                        </Link>
                    </div>

                    <h1 className="font-serif text-[30px] sm:text-[34px] lg:text-[38px] font-bold text-[#1a1a1a] tracking-tight mb-1.5 leading-tight">
                        Get Started Free
                    </h1>
                    <p className="text-gray-500 text-[13.5px] sm:text-[14.5px] font-normal mb-6">
                        Set up your restaurant in seconds. No credit card required.
                    </p>

                    {/* Product Selection Tabs */}
                    <div className="mb-4">
                        <label className="block text-[12.5px] font-semibold text-gray-600 uppercase tracking-wider mb-2">
                            Select Product
                        </label>
                        <div className="grid grid-cols-3 gap-1.5 p-1 bg-gray-100/80 rounded-xl border border-gray-200/60">
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, product: 'POS' })}
                                className={`py-2 px-1 text-center rounded-lg text-[12.5px] font-semibold transition-all duration-200 cursor-pointer ${
                                    formData.product === 'POS'
                                        ? 'bg-white text-[#0a714e] shadow-xs'
                                        : 'text-gray-500 hover:text-gray-800'
                                }`}
                            >
                                POS System
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, product: 'DIGITAL_MENU' })}
                                className={`py-2 px-1 text-center rounded-lg text-[12.5px] font-semibold transition-all duration-200 cursor-pointer ${
                                    formData.product === 'DIGITAL_MENU'
                                        ? 'bg-white text-[#0a714e] shadow-xs'
                                        : 'text-gray-500 hover:text-gray-800'
                                }`}
                            >
                                Digital Menu
                            </button>
                            <button
                                type="button"
                                onClick={() => setFormData({ ...formData, product: 'QUEUE_MANAGEMENT' })}
                                className={`py-2 px-1 text-center rounded-lg text-[12.5px] font-semibold transition-all duration-200 cursor-pointer ${
                                    formData.product === 'QUEUE_MANAGEMENT'
                                        ? 'bg-white text-[#0a714e] shadow-xs'
                                        : 'text-gray-500 hover:text-gray-800'
                                }`}
                            >
                                Q Management
                            </button>
                        </div>
                    </div>

                    {/* Product Highlight Banner */}
                    {formData.product === 'POS' && (
                        <div className="p-3 rounded-xl bg-[#0a714e]/5 border border-[#0a714e]/20 text-[#0a714e] text-[12px] font-medium flex items-center gap-2 mb-4.5 animate-in fade-in duration-200">
                            <span className="material-symbols-outlined text-[17px] flex-shrink-0">verified</span>
                            <span><b>14-Day Free Trial:</b> All Premium features &amp; 30 AI credits included. No credit card required.</span>
                        </div>
                    )}
                    {formData.product === 'DIGITAL_MENU' && (
                        <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-[12px] font-medium flex items-center gap-2 mb-4.5 animate-in fade-in duration-200">
                            <span className="material-symbols-outlined text-[17px] flex-shrink-0 text-amber-700">qr_code_2</span>
                            <span><b>Standalone Digital Menu:</b> QR menus, catalogue &amp; brand showcase for your guests.</span>
                        </div>
                    )}
                    {formData.product === 'QUEUE_MANAGEMENT' && (
                        <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-blue-900 text-[12px] font-medium flex items-center gap-2 mb-4.5 animate-in fade-in duration-200">
                            <span className="material-symbols-outlined text-[17px] flex-shrink-0 text-blue-700">groups</span>
                            <span><b>Standalone Q Management:</b> Waitlist queue, live token screen &amp; customer paging.</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                        {error && (
                            <div className="p-3.5 rounded-xl bg-red-50 text-red-600 text-[13px] font-medium border border-red-100 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px] flex-shrink-0">error</span>
                                <span>{error}</span>
                            </div>
                        )}

                        {successMessage && (
                            <div className="p-3.5 rounded-xl bg-emerald-50 text-[#0a714e] text-[13px] font-medium border border-emerald-100 flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px] flex-shrink-0">check_circle</span>
                                <span>{successMessage}</span>
                            </div>
                        )}

                        {/* Restaurant Name */}
                        <div>
                            <label className="block text-[13px] font-medium text-gray-700 mb-1.5" htmlFor="name">
                                Restaurant Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-xl bg-gray-50/70 border border-gray-200/90 focus:bg-white focus:border-[#0a714e] focus:ring-2 focus:ring-[#0a714e]/10 outline-none transition-all text-[#1a1a1a] text-[16px] sm:text-[14px] placeholder:text-gray-400"
                                placeholder="The Coastal Bistro"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        {/* Email Address + Send OTP Button */}
                        <div>
                            <label className="block text-[13px] font-medium text-gray-700 mb-1.5" htmlFor="email">
                                Your Email Address
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="w-full pl-4 pr-28 py-3 rounded-xl bg-gray-50/70 border border-gray-200/90 focus:bg-white focus:border-[#0a714e] focus:ring-2 focus:ring-[#0a714e]/10 outline-none transition-all text-[#1a1a1a] text-[16px] sm:text-[14px] placeholder:text-gray-400"
                                    placeholder="owner@gmail.com"
                                    value={formData.admin_email}
                                    onChange={(e) => setFormData({ ...formData, admin_email: e.target.value })}
                                />
                                <button
                                    type="button"
                                    onClick={handleSendOtp}
                                    disabled={sendingOtp || cooldown > 0 || !formData.admin_email}
                                    className="absolute right-1.5 px-3 py-1.5 bg-white hover:bg-gray-100 text-[#0a714e] text-[12px] font-bold rounded-lg border border-gray-200 shadow-2xs transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center gap-1.5"
                                >
                                    {sendingOtp ? (
                                        <span className="inline-block w-3.5 h-3.5 border-2 border-[#0a714e]/30 border-t-[#0a714e] rounded-full animate-spin"></span>
                                    ) : cooldown > 0 ? (
                                        <span>Resend ({cooldown}s)</span>
                                    ) : otpSent ? (
                                        <span>Resend Code</span>
                                    ) : (
                                        <span>Send Code</span>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* 6-Digit Email OTP (Shown once requested) */}
                        {otpSent && (
                            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                                <div className="flex justify-between items-center mb-1.5">
                                    <label className="block text-[13px] font-medium text-gray-700" htmlFor="otp">
                                        Email Verification Code (OTP)
                                    </label>
                                    <span className="text-[11.5px] text-gray-400">Valid for 10 min</span>
                                </div>
                                <input
                                    id="otp"
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    maxLength={6}
                                    required
                                    className="w-full px-4 py-2.5 rounded-xl bg-amber-50/60 border border-amber-300 focus:bg-white focus:border-[#0a714e] focus:ring-2 focus:ring-[#0a714e]/10 outline-none transition-all text-[#1a1a1a] text-center font-mono text-[18px] tracking-[0.25em] font-bold placeholder:tracking-normal placeholder:font-sans placeholder:text-[13px]"
                                    placeholder="Enter 6-digit code"
                                    value={formData.email_verification_otp}
                                    onChange={(e) => setFormData({ ...formData, email_verification_otp: e.target.value.replace(/\D/g, '') })}
                                />
                            </div>
                        )}

                        {/* Password */}
                        <div>
                            <label className="block text-[13px] font-medium text-gray-700 mb-1.5" htmlFor="password">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    minLength={6}
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50/70 border border-gray-200/90 focus:bg-white focus:border-[#0a714e] focus:ring-2 focus:ring-[#0a714e]/10 outline-none transition-all text-[#1a1a1a] text-[16px] sm:text-[14px] placeholder:text-gray-400 pr-11 tracking-wider"
                                    placeholder="••••••••••••"
                                    value={formData.admin_password}
                                    onChange={(e) => setFormData({ ...formData, admin_password: e.target.value })}
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

                        {/* Phone Number */}
                        <div>
                            <label className="block text-[13px] font-medium text-gray-700 mb-1.5" htmlFor="phone">
                                Phone Number <span className="text-gray-400 font-normal">(Optional)</span>
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                className="w-full px-4 py-3 rounded-xl bg-gray-50/70 border border-gray-200/90 focus:bg-white focus:border-[#0a714e] focus:ring-2 focus:ring-[#0a714e]/10 outline-none transition-all text-[#1a1a1a] text-[16px] sm:text-[14px] placeholder:text-gray-400"
                                placeholder="+91 98765 43210"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
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
                                ) : formData.product === 'POS' ? (
                                    'Start 14-Day Free Trial'
                                ) : (
                                    'Create Your Restaurant'
                                )}
                            </button>
                        </div>
                    </form>

                    <p className="mt-6 text-center text-gray-500 text-[13px] font-medium">
                        Already have an account?{' '}
                        <Link href="/login" className="text-[#0a714e] font-semibold hover:underline">
                            Log in
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
