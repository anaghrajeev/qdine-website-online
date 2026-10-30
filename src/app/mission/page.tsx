import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Mission",
  description: "Empowering every restaurant to run smarter. Qdine gives every restaurant the same powerful, intelligent tools reserved for global chains.",
};

export default function Page() {
  return (
    <>
      <main className="pt-24 sm:pt-28 lg:pt-40 bg-[#fdfaf6] overflow-x-hidden min-h-screen">

        {/* HERO */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32 text-center reveal-on-scroll">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a714e]/10 text-[#0a714e] text-xs font-semibold uppercase tracking-wider mb-6 border border-[#0a714e]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a714e]"></span>
                Our Purpose
            </div>
            <h1 className="font-serif text-[40px] sm:text-[56px] md:text-[64px] lg:text-[76px] text-[#1a1a1a] tracking-tight leading-[1.05] mb-8">
                Empowering every restaurant<br/>
                to run <span className="font-serif italic font-normal text-[#0a714e] pr-2">smarter.</span>
            </h1>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
                We believe the best restaurants shouldn&apos;t need the biggest budgets. Qdine exists to give every restaurant — from a 10-seat café to a 200-cover fine dining room — the same powerful, intelligent tools that were once reserved for global chains.
            </p>
        </section>

        {/* WHY WE EXIST */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-36 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="reveal-on-scroll order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-gray-200/60">
                        The Problem
                    </div>
                    <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[52px] text-[#1a1a1a] tracking-tight leading-[1.1] mb-6">
                        Restaurants deserve<br/>
                        <span className="text-gray-400">better software.</span>
                    </h2>
                    <div className="space-y-5">
                        <p className="text-[16px] sm:text-[17px] text-gray-600 leading-relaxed font-normal">
                            The restaurant industry runs on razor-thin margins, yet most restaurant software is bloated, overpriced, and designed for enterprises — not the people who actually cook and serve.
                        </p>
                        <p className="text-[16px] sm:text-[17px] text-gray-600 leading-relaxed font-normal">
                            We started Qdine because we saw restaurant owners spending lakhs on POS systems that took weeks to learn, required dedicated hardware, and still couldn&apos;t answer a simple question like <em className="text-[#1a1a1a] font-medium">&ldquo;What sold the most last Friday?&rdquo;</em>
                        </p>
                        <p className="text-[16px] sm:text-[18px] text-[#1a1a1a] font-semibold leading-relaxed pt-2">
                            That&apos;s unacceptable. So we built something different.
                        </p>
                    </div>
                </div>
                
                {/* Image Card */}
                <div className="reveal-on-scroll order-1 lg:order-2" style={{ transitionDelay: '100ms' }}>
                    <div className="bg-white rounded-[28px] sm:rounded-[36px] aspect-[4/3] overflow-hidden relative shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-gray-100 flex items-center justify-center p-2 sm:p-3">
                        <div className="relative w-full h-full rounded-[20px] sm:rounded-[28px] overflow-hidden bg-gray-50">
                            <Image 
                                src="/images/kitchen_img_mock.png" 
                                alt="Modern restaurant kitchen operations" 
                                fill 
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CORE BELIEFS */}
        <section className="py-20 sm:py-28 relative z-10 overflow-hidden mb-12 sm:mb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 reveal-on-scroll">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a714e]/10 text-[#0a714e] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#0a714e]/15">
                        Guiding Principles
                    </div>
                    <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[56px] text-[#1a1a1a] tracking-tight leading-[1.1]">
                        What we believe.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {/* Belief 1 */}
                    <div className="reveal-on-scroll bg-white rounded-[24px] sm:rounded-[28px] p-8 sm:p-10 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between">
                        <div>
                            <div className="font-serif text-[28px] sm:text-[32px] font-normal text-[#0a714e] mb-4">01</div>
                            <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1a1a1a] mb-3 tracking-tight">Intelligence should be accessible</h3>
                            <p className="text-gray-500 text-[15px] sm:text-[16px] leading-relaxed font-normal">
                                AI-powered analytics shouldn&apos;t cost ₹10 lakhs. Every restaurant owner deserves to know their peak hours, best sellers, and waste patterns — without hiring a data analyst.
                            </p>
                        </div>
                    </div>

                    {/* Belief 2 */}
                    <div className="reveal-on-scroll bg-white rounded-[24px] sm:rounded-[28px] p-8 sm:p-10 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between" style={{ transitionDelay: '100ms' }}>
                        <div>
                            <div className="font-serif text-[28px] sm:text-[32px] font-normal text-[#0a714e] mb-4">02</div>
                            <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1a1a1a] mb-3 tracking-tight">Software should feel effortless</h3>
                            <p className="text-gray-500 text-[15px] sm:text-[16px] leading-relaxed font-normal">
                                If your staff can&apos;t learn the system in one shift, the system has failed — not your staff. We obsess over simplicity so you can focus on hospitality.
                            </p>
                        </div>
                    </div>

                    {/* Belief 3 */}
                    <div className="reveal-on-scroll bg-white rounded-[24px] sm:rounded-[28px] p-8 sm:p-10 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between" style={{ transitionDelay: '200ms' }}>
                        <div>
                            <div className="font-serif text-[28px] sm:text-[32px] font-normal text-[#0a714e] mb-4">03</div>
                            <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1a1a1a] mb-3 tracking-tight">Your data is sacred</h3>
                            <p className="text-gray-500 text-[15px] sm:text-[16px] leading-relaxed font-normal">
                                We will never sell, share, or use your restaurant&apos;s data to train AI models. Your business intelligence belongs to you. Period.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* THE IMPACT */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-36">
            <div className="reveal-on-scroll relative">
                <div className="text-center mb-16 sm:mb-20">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-gray-200/60">
                        Tangible Results
                    </div>
                    <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[56px] text-[#1a1a1a] tracking-tight leading-[1.1] mb-5">
                        The change we&apos;re making.
                    </h2>
                    <p className="text-[17px] sm:text-[19px] text-gray-500 font-normal max-w-xl mx-auto">
                        Every day, Qdine helps restaurants replace complexity with absolute clarity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
                    <div className="bg-white rounded-[24px] sm:rounded-[28px] p-8 sm:p-10 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col items-center">
                        <div className="text-[44px] sm:text-[56px] font-serif text-[#1a1a1a] tracking-tight mb-3">15 min</div>
                        <p className="text-[15px] sm:text-[16px] text-gray-500 font-normal leading-relaxed">Average time from signup to first order taken</p>
                    </div>
                    <div className="bg-white rounded-[24px] sm:rounded-[28px] p-8 sm:p-10 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col items-center">
                        <div className="text-[44px] sm:text-[56px] font-serif text-[#0a714e] tracking-tight mb-3">₹0</div>
                        <p className="text-[15px] sm:text-[16px] text-gray-500 font-normal leading-relaxed">Hardware cost. No POS machines or servers required</p>
                    </div>
                    <div className="bg-white rounded-[24px] sm:rounded-[28px] p-8 sm:p-10 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] flex flex-col items-center">
                        <div className="text-[44px] sm:text-[56px] font-serif text-[#1a1a1a] tracking-tight mb-3">1 shift</div>
                        <p className="text-[15px] sm:text-[16px] text-gray-500 font-normal leading-relaxed">Time for any staff member to master the system</p>
                    </div>
                </div>
            </div>
        </section>

        {/* TEAM NOTE */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-36 reveal-on-scroll">
            <div className="bg-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] relative">
                <div className="relative z-10 pl-4 sm:pl-6 border-l-2 border-[#0a714e]">
                    <h2 className="font-serif text-[22px] sm:text-[28px] md:text-[34px] text-[#1a1a1a] tracking-tight leading-[1.25] mb-6">
                        We&apos;re a small team of engineers, designers, and hospitality lovers building from India — for the world.
                    </h2>
                    <p className="text-[16px] sm:text-[17px] text-gray-600 font-normal leading-relaxed mb-8">
                        Every line of code we write is guided by one simple question: <em className="text-[#1a1a1a] font-medium">&ldquo;does this make a restaurant owner&apos;s life easier?&rdquo;</em> If the answer isn&apos;t a definitive yes, we don&apos;t ship it.
                    </p>
                    
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full shadow-sm overflow-hidden relative border border-gray-200/80 flex-shrink-0">
                            <Image src="/images/devou_solutions_logo.jpg" alt="Devou Solutions Logo" fill className="object-cover" />
                        </div>
                        <div>
                            <p className="text-[15px] font-bold text-[#1a1a1a]">The Team</p>
                            <p className="text-[13px] text-gray-500 font-medium">Devou Solutions LLP</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-32 bg-[#fdfaf6] relative z-10 overflow-hidden border-t border-gray-200/40">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-on-scroll">
                <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[56px] text-[#1a1a1a] tracking-tight leading-[1.1] mb-6">
                    Ready to join the mission?
                </h2>
                <p className="text-[16px] sm:text-[18px] lg:text-[19px] text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
                    Start your free trial and see why hundreds of restaurants are switching to smarter management today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link className="bg-[#111111] hover:bg-black text-white px-9 py-4 rounded-full font-medium text-[15px] transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group" href="/onboarding">
                        Start your free trial
                        <span className="material-symbols-outlined text-[19px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                    <Link className="bg-white hover:bg-gray-50 text-[#1a1a1a] px-9 py-4 rounded-full font-medium text-[15px] transition-all duration-200 shadow-sm border border-gray-200 flex items-center justify-center" href="/pricing">
                        View Pricing
                    </Link>
                </div>
            </div>
        </section>

      </main>
    </>
  );
}
