'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [includePrinter, setIncludePrinter] = useState(false);
  const [isBannerExpanded, setIsBannerExpanded] = useState(false);

  return (
    <main className="pt-24 sm:pt-28 lg:pt-40 pb-24 bg-[#fdfaf6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/*  HEADER  */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 reveal-on-scroll">
                <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[56px] text-[#1a1a1a] tracking-tight leading-[1.1] mb-6">
                    Simple pricing,<br/>
                    <span className="text-gray-400">no surprises.</span>
                </h1>
                <p className="text-[16px] sm:text-[18px] text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
                    Get the Qdine plan that's right for your restaurant, so no order goes unmanaged.
                </p>
            </div>

            {/* BILLING TOGGLE */}
            <div className="flex flex-col items-center gap-6 mb-12 reveal-on-scroll">
                <div className="flex justify-center items-center gap-4">
                    <span className={`text-[15px] font-medium transition-colors ${!isAnnual ? 'text-[#1a1a1a]' : 'text-gray-400'}`}>Monthly (+25%)</span>
                    <button 
                        onClick={() => {
                            setIsAnnual(!isAnnual);
                            if (isAnnual) setIncludePrinter(false);
                        }}
                        className="relative w-14 h-8 rounded-full bg-[#111111] transition-colors focus:outline-none"
                    >
                        <div className={`absolute top-1 left-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`} />
                    </button>
                    <span className={`text-[15px] font-medium transition-colors ${isAnnual ? 'text-[#1a1a1a]' : 'text-gray-400'}`}>Yearly (Save 25%)</span>
                </div>
                
                {/* PRINTER BUNDLE TOGGLE */}
                <div className={`flex items-center gap-3 px-5 py-2.5 rounded-full border transition-all duration-300 ${isAnnual ? (includePrinter ? 'border-[#0a714e] bg-[#0a714e]/5' : 'border-gray-200 bg-white') : 'opacity-50 pointer-events-none border-gray-200 bg-gray-50'}`}>
                    <span className="material-symbols-outlined text-[20px] text-[#1a1a1a]">print</span>
                    <span className="text-[14px] font-bold text-[#1a1a1a]">Bundle with Any Printer</span>
                    <div className="w-[1px] h-4 bg-gray-300 mx-1"></div>
                    <button 
                        onClick={() => setIncludePrinter(!includePrinter)}
                        disabled={!isAnnual}
                        className={`relative w-10 h-5 rounded-full transition-colors focus:outline-none ${includePrinter ? 'bg-[#0a714e]' : 'bg-gray-300'}`}
                    >
                        <div className={`absolute top-0.5 left-0.5 bg-white w-4 h-4 rounded-full transition-transform duration-300 ${includePrinter ? 'translate-x-5' : 'translate-x-0'}`} />
                    </button>
                </div>
            </div>

            {/* BANNER */}
            <div 
                className="max-w-5xl mx-auto mb-16 reveal-on-scroll cursor-pointer group relative"
                onClick={() => setIsBannerExpanded(true)}
            >
                <img src="/images/banner.png" alt="POS Terminals Banner" className="w-full rounded-2xl shadow-sm border border-gray-100" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors rounded-2xl flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity md:hidden">
                        Tap to expand
                    </div>
                </div>
            </div>

            {/* EXPANDED BANNER MODAL */}
            {isBannerExpanded && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                    onClick={() => setIsBannerExpanded(false)}
                >
                    <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="absolute -top-12 right-0 md:-right-10 md:top-0 text-white hover:text-gray-300 bg-white/20 hover:bg-white/30 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                            onClick={() => setIsBannerExpanded(false)}
                        >
                            <span className="material-symbols-outlined text-[24px]">close</span>
                        </button>
                        <img 
                            src="/images/banner.png" 
                            alt="POS Terminals Banner Expanded" 
                            className="w-full rounded-xl shadow-2xl object-contain max-h-[85vh]" 
                        />
                    </div>
                </div>
            )}

            {/*  PRICING CARDS  */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto mb-20 sm:mb-32 reveal-on-scroll" style={{"transitionDelay":"150ms"}}>
                
                {/*  PLAN 1: FREE TRIAL  */}
                <div className="bg-white border border-gray-200 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none p-8 sm:p-10 flex flex-col">
                    <div className="mb-8">
                        <h3 className="text-[22px] font-bold text-[#1a1a1a] mb-2">Free Trial</h3>
                        <p className="text-[14px] text-gray-500 leading-relaxed">
                            Know us better and see how we work.
                        </p>
                    </div>
                    <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-[48px] font-bold text-[#1a1a1a] tracking-tight">Free</span>
                        <span className="text-[15px] text-gray-400 font-medium">/ 7 days</span>
                    </div>
                    <Link className="w-full py-3.5 px-4 rounded-full bg-white hover:bg-gray-50 text-[#1a1a1a] font-semibold text-[14px] transition-all duration-200 border border-gray-300 text-center mb-10 block" href="#">
                        Start 7-Day Trial
                    </Link>

                    {/* Features */}
                    <div className="space-y-8 flex-grow">
                        <div>
                            <h4 className="text-[15px] font-bold text-[#1a1a1a] mb-1.5">All premium features</h4>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Get the most out of Qdine. Experience everything the platform has to offer with zero restrictions.</p>
                        </div>
                        <div>
                            <h4 className="text-[15px] font-bold text-[#1a1a1a] mb-1.5">No credit card required</h4>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Simply sign up and start managing your restaurant immediately.</p>
                        </div>
                    </div>
                </div>

                {/*  PLAN 2: PROFESSIONAL (HERO)  */}
                <div className="bg-[#111111] border border-[#111111] p-8 sm:p-10 flex flex-col relative z-10 md:shadow-2xl md:-my-4 md:rounded-3xl">
                    <div className="mb-8 flex flex-col items-start">
                        <div className="flex justify-between w-full items-start">
                            <h3 className="text-[22px] font-bold text-white mb-2">Essential</h3>
                            {includePrinter && isAnnual && (
                                <span className="bg-[#0a714e] text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Printer Bundle</span>
                            )}
                        </div>
                        <p className="text-[14px] text-white/50 leading-relaxed">
                            Everything you need to run your daily operations smoothly. {includePrinter && isAnnual && "Includes any printer of your choice."}
                        </p>
                    </div>
                    <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-[48px] font-bold text-white tracking-tight">
                            {isAnnual ? (includePrinter ? '₹11,999' : '₹6,999') : '₹520'}
                        </span>
                        <span className="text-[15px] text-white/40 font-medium">
                            {isAnnual ? '/year' : '/month'}
                        </span>
                    </div>
                    <Link className="w-full py-3.5 px-4 rounded-full bg-white hover:bg-gray-100 text-[#111111] font-semibold text-[14px] transition-all duration-200 text-center mb-10 block" href="#">
                        Get Essential
                    </Link>

                    {/* Features */}
                    <p className="text-[13px] text-white/40 font-semibold uppercase tracking-wider mb-6">Core Features</p>
                    <div className="space-y-8 flex-grow">
                        <div>
                            <h4 className="text-[15px] font-bold text-white mb-1.5">POS & Table Management</h4>
                            <p className="text-[13px] text-white/50 leading-relaxed">Complete control over your floor plan, orders, and checkout process.</p>
                        </div>
                        <div>
                            <h4 className="text-[15px] font-bold text-white mb-1.5">Digital Menu & QR Ordering</h4>
                            <p className="text-[13px] text-white/50 leading-relaxed">Let guests scan and order instantly from beautifully designed menus.</p>
                        </div>
                        <div>
                            <h4 className="text-[15px] font-bold text-white mb-1.5">Products Management</h4>
                            <p className="text-[13px] text-white/50 leading-relaxed">Manage your entire catalog, variations, and pricing on the fly.</p>
                        </div>
                        <div>
                            <h4 className="text-[15px] font-bold text-white mb-1.5">Sales & Statements</h4>
                            <p className="text-[13px] text-white/50 leading-relaxed">Detailed reports and daily statements to track your revenue.</p>
                        </div>
                        <div>
                            <h4 className="text-[15px] font-bold text-white mb-1.5">Customised Profile & Branding</h4>
                            <p className="text-[13px] text-white/50 leading-relaxed">Make your digital menu match your restaurant's unique brand identity.</p>
                        </div>
                        <div>
                            <h4 className="text-[15px] font-bold text-white mb-1.5">10 AI Analyst Credits</h4>
                            <p className="text-[13px] text-white/50 leading-relaxed">Ask our AI questions about your sales, top items, and peak hours every month.</p>
                        </div>
                    </div>
                </div>

                {/*  PLAN 3: ENTERPRISE  */}
                <div className="bg-white border border-gray-200 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none p-8 sm:p-10 flex flex-col">
                    <div className="mb-8 flex flex-col items-start">
                        <div className="flex justify-between w-full items-start">
                            <h3 className="text-[22px] font-bold text-[#1a1a1a] mb-2">Premium</h3>
                            {includePrinter && isAnnual && (
                                <span className="bg-[#0a714e]/10 text-[#0a714e] text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Printer Bundle</span>
                            )}
                        </div>
                        <p className="text-[14px] text-gray-500 leading-relaxed">
                            Advanced tools to scale your restaurant and build customer loyalty. {includePrinter && isAnnual && "Includes any printer of your choice."}
                        </p>
                    </div>
                    <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-[48px] font-bold text-[#1a1a1a] tracking-tight">
                            {isAnnual ? (includePrinter ? '₹13,999' : '₹8,999') : '₹833'}
                        </span>
                        <span className="text-[15px] text-gray-400 font-medium">
                            {isAnnual ? '/year' : '/month'}
                        </span>
                    </div>
                    <Link className="w-full py-3.5 px-4 rounded-full bg-[#0a714e] hover:bg-[#086042] text-white font-semibold text-[14px] transition-all duration-200 text-center mb-10 block" href="#">
                        Get Premium
                    </Link>

                    {/* Features */}
                    <p className="text-[13px] text-gray-400 font-semibold uppercase tracking-wider mb-6">Everything in Essential, plus</p>
                    <div className="space-y-8 flex-grow">
                        <div>
                            <h4 className="text-[15px] font-bold text-[#1a1a1a] mb-1.5">Comprehensive Inventory</h4>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Deep stock management, supplier tracking, and automated low-stock alerts.</p>
                        </div>
                        <div>
                            <h4 className="text-[15px] font-bold text-[#1a1a1a] mb-1.5">Customisable Loyalty Points</h4>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Build your own rewards system to turn first-time guests into regulars.</p>
                        </div>
                        <div>
                            <h4 className="text-[15px] font-bold text-[#1a1a1a] mb-1.5">30 AI Analyst Credits</h4>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Advanced monthly quota for deep insights, forecasting, and business analysis.</p>
                        </div>
                        <div>
                            <h4 className="text-[15px] font-bold text-[#1a1a1a] mb-1.5">Inbuilt Finance Management</h4>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Track expenses, manage vendor payouts, and keep your restaurant's books in perfect order.</p>
                        </div>
                        <div>
                            <h4 className="text-[15px] font-bold text-[#1a1a1a] mb-1.5">SOP Builder & Checklists</h4>
                            <p className="text-[13px] text-gray-500 leading-relaxed">Standardize operations with daily checklists and procedures to keep your staff aligned.</p>
                        </div>
                        <div>
                            <h4 className="text-[15px] font-bold text-[#1a1a1a] mb-1.5">Free Access to New Features</h4>
                            <p className="text-[13px] text-gray-500 leading-relaxed">As our platform grows, you automatically get all new standard features at no extra cost.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/*  FAQ  */}
            <div className="max-w-3xl mx-auto mb-20 reveal-on-scroll">
                <div className="text-center mb-10 sm:mb-12">
                    <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[44px] text-[#1a1a1a] tracking-tight mb-4">Questions? Answers.</h2>
                </div>
                <div className="space-y-4" id="faqContainer">
                    <div className="faq-item">
                        <button className="faq-trigger" >
                            <span className="text-[16px] font-bold text-[#1a1a1a]">Is there a free trial?</span>
                            <span className="material-symbols-outlined text-gray-400 faq-icon">add</span>
                        </button>
                        <div className="faq-content">
                            <p className="text-gray-600 text-[14px] leading-relaxed">
                                Yes — you get a 7-day free trial where you can get the most out of Qdine and use all premium features to know us better.
                            </p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-trigger" >
                            <span className="text-[16px] font-bold text-[#1a1a1a]">Does Qdine support GST billing?</span>
                            <span className="material-symbols-outlined text-gray-400 faq-icon">add</span>
                        </button>
                        <div className="faq-content">
                            <p className="text-gray-600 text-[14px] leading-relaxed">
                                Absolutely. All invoices are GST-ready with automated tax breakdowns and export-ready formats for your accountant.
                            </p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-trigger" >
                            <span className="text-[16px] font-bold text-[#1a1a1a]">Can I switch plans later?</span>
                            <span className="material-symbols-outlined text-gray-400 faq-icon">add</span>
                        </button>
                        <div className="faq-content">
                            <p className="text-gray-600 text-[14px] leading-relaxed">
                                Of course. Upgrade or downgrade anytime from your dashboard. Changes are prorated — you only pay the difference. No lock-in contracts.
                            </p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-trigger" >
                            <span className="text-[16px] font-bold text-[#1a1a1a]">Do I need special hardware?</span>
                            <span className="material-symbols-outlined text-gray-400 faq-icon">add</span>
                        </button>
                        <div className="faq-content">
                            <p className="text-gray-600 text-[14px] leading-relaxed">
                                No. Qdine is 100% cloud-based and works in any modern browser — tablet, laptop, or phone. Your customers scan QR codes with their own phones.
                            </p>
                        </div>
                    </div>
                    <div className="faq-item">
                        <button className="faq-trigger" >
                            <span className="text-[16px] font-bold text-[#1a1a1a]">Are there any per-transaction fees?</span>
                            <span className="material-symbols-outlined text-gray-400 faq-icon">add</span>
                        </button>
                        <div className="faq-content">
                            <p className="text-gray-600 text-[14px] leading-relaxed">
                                Zero. Qdine charges a flat subscription — no per-order fees, no per-table fees, no revenue sharing. Your margins are yours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/*  CTA  */}
            <div className="text-center py-12 sm:py-16 reveal-on-scroll">
                <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[44px] text-[#1a1a1a] tracking-tight leading-[1.1] mb-6">
                    Still thinking?<br/>
                    <span className="text-gray-400">Your competitors aren't.</span>
                </h2>
                <p className="text-[16px] text-gray-600 mb-8 max-w-xl mx-auto font-medium">
                    Start your free trial today. 15 minutes to setup. Zero risk.
                </p>
                <Link className="inline-flex items-center gap-2 bg-[#111111] hover:bg-black text-white px-10 py-4 rounded-full font-medium text-[16px] transition-all duration-300 shadow-sm group" href="#">
                    Start 7-Day Free Trial
                    <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
            </div>
        </div>
    </main>
  );
}