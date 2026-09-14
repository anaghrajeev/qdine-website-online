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
      <main className="pt-24 sm:pt-28 lg:pt-40 bg-[#fdfaf6] overflow-x-hidden">

        {/* HERO */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-32 text-center reveal-on-scroll">
            <p className="text-[13px] font-bold text-gray-500 uppercase tracking-[0.15em] mb-6">Our Mission</p>
            <h1 className="font-serif text-[40px] sm:text-[56px] md:text-[64px] lg:text-[76px] text-[#1a1a1a] tracking-tight leading-[1.05] mb-8">
                Empowering every restaurant<br/>
                to run <span className="font-serif italic font-normal text-[#0a714e] pr-2">smarter.</span>
            </h1>
            <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
                We believe the best restaurants shouldn't need the biggest budgets. Qdine exists to give every restaurant — from a 10-seat café to a 200-cover fine dining room — the same powerful, intelligent tools that were once reserved for global chains.
            </p>
        </section>

        {/* WHY WE EXIST */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-40 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="reveal-on-scroll order-2 lg:order-1">
                    <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[56px] text-[#1a1a1a] tracking-tight leading-[1.1] mb-8">
                        Restaurants deserve<br/>
                        <span className="text-gray-400">better software.</span>
                    </h2>
                    <div className="space-y-6">
                        <p className="text-[16px] sm:text-[18px] text-gray-600 leading-relaxed font-medium">
                            The restaurant industry runs on razor-thin margins, yet most restaurant software is bloated, overpriced, and designed for enterprises — not the people who actually cook and serve.
                        </p>
                        <p className="text-[16px] sm:text-[18px] text-gray-600 leading-relaxed font-medium">
                            We started Qdine because we saw restaurant owners spending lakhs on POS systems that took weeks to learn, required dedicated hardware, and still couldn't answer a simple question like <em className="text-[#1a1a1a]">"What sold the most last Friday?"</em>
                        </p>
                        <p className="text-[16px] sm:text-[18px] text-[#1a1a1a] font-semibold leading-relaxed">
                            That's unacceptable. So we built something different.
                        </p>
                    </div>
                </div>
                
                {/* Image Placeholder */}
                <div className="reveal-on-scroll order-1 lg:order-2 lg:translate-x-4" style={{ transitionDelay: '100ms' }}>
                    <div className="bg-[#f0f4f8] rounded-[32px] sm:rounded-[40px] aspect-[4/3] overflow-hidden relative shadow-inner border border-black/5 flex items-center justify-center">
                        <Image src="/images/kitchen_img_mock.png" alt="Our Mission" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </section>

        {/* CORE BELIEFS */}
        <section className="bg-[#fdfaf6] py-12 sm:py-20 relative z-10 overflow-hidden mb-12 sm:mb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 sm:mb-24 reveal-on-scroll">
                    <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[56px] text-[#1a1a1a] tracking-tight leading-[1.1]">
                        What we believe.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 reveal-on-scroll">
                    {/* Belief 1 */}
                    <div className="flex flex-col">

                        <h3 className="text-[22px] font-bold text-[#1a1a1a] mb-3 tracking-tight">Intelligence should be accessible</h3>
                        <p className="text-gray-600 text-[16px] leading-relaxed pr-4 font-medium">
                            AI-powered analytics shouldn't cost ₹10 lakhs. Every restaurant owner deserves to know their peak hours, best sellers, and waste patterns — without hiring a data analyst.
                        </p>
                    </div>

                    {/* Belief 2 */}
                    <div className="flex flex-col" style={{ transitionDelay: '100ms' }}>

                        <h3 className="text-[22px] font-bold text-[#1a1a1a] mb-3 tracking-tight">Software should feel effortless</h3>
                        <p className="text-gray-600 text-[16px] leading-relaxed pr-4 font-medium">
                            If your staff can't learn the system in one shift, the system has failed — not your staff. We obsess over simplicity so you can focus on hospitality.
                        </p>
                    </div>

                    {/* Belief 3 */}
                    <div className="flex flex-col" style={{ transitionDelay: '200ms' }}>

                        <h3 className="text-[22px] font-bold text-[#1a1a1a] mb-3 tracking-tight">Your data is sacred</h3>
                        <p className="text-gray-600 text-[16px] leading-relaxed pr-4 font-medium">
                            We will never sell, share, or use your restaurant's data to train AI models. Your business intelligence belongs to you. Period.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* THE IMPACT */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-40">
            <div className="reveal-on-scroll relative">
                <div className="text-center mb-16 sm:mb-24">
                    <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[56px] text-[#1a1a1a] tracking-tight leading-[1.1] mb-6">
                        The change we're making.
                    </h2>
                    <p className="text-[18px] sm:text-[20px] text-gray-500 font-medium max-w-2xl mx-auto">
                        Every day, Qdine helps restaurants replace complexity with absolute clarity.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 text-center">
                    <div className="flex flex-col items-center">
                        <div className="text-[48px] sm:text-[64px] font-serif text-[#1a1a1a] tracking-tight mb-4">15 min</div>
                        <p className="text-[16px] text-gray-600 font-medium max-w-[220px] leading-relaxed">Average time from signup to first order taken</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-[48px] sm:text-[64px] font-serif text-[#1a1a1a] tracking-tight mb-4">₹0</div>
                        <p className="text-[16px] text-gray-600 font-medium max-w-[220px] leading-relaxed">Hardware cost. No POS machines or servers required</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-[48px] sm:text-[64px] font-serif text-[#1a1a1a] tracking-tight mb-4">1 shift</div>
                        <p className="text-[16px] text-gray-600 font-medium max-w-[220px] leading-relaxed">Time for any staff member to master the system</p>
                    </div>
                </div>
            </div>
        </section>

        {/* TEAM NOTE */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 sm:mb-40 reveal-on-scroll">
            <div className="bg-[#f8fafc] rounded-[32px] p-8 sm:p-12 border border-gray-200/60 relative">
                <span className="absolute -top-6 -left-2 text-[80px] font-serif text-gray-200 leading-none select-none">"</span>
                
                <div className="relative z-10 pl-4 sm:pl-8 border-l-2 border-[#0a714e]/30">
                    <h2 className="font-serif text-[24px] sm:text-[32px] md:text-[40px] text-[#1a1a1a] tracking-tight leading-[1.3] mb-8">
                        We're a small team of engineers, designers, and hospitality lovers building from India — for the world.
                    </h2>
                    <p className="text-[18px] text-gray-600 font-medium leading-relaxed mb-10">
                        Every line of code we write is guided by one simple question: <em className="text-[#1a1a1a]">does this make a restaurant owner's life easier?</em> If the answer isn't a definitive yes, we don't ship it.
                    </p>
                    
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full shadow-sm overflow-hidden relative border border-gray-100 flex-shrink-0">
                            <Image src="/images/devou_solutions_logo.jpg" alt="Devou Solutions Logo" fill className="object-cover" />
                        </div>
                        <div>
                            <p className="text-[16px] font-bold text-[#1a1a1a]">The Team</p>
                            <p className="text-[14px] text-gray-500 font-medium">Devou Solutions LLP</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="bg-white py-20 sm:py-32 relative z-10 overflow-hidden border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-on-scroll">
                <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[64px] text-[#1a1a1a] tracking-tight leading-[1.1] mb-6">
                    Ready to join the mission?
                </h2>
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
                    Start your free trial and see why hundreds of restaurants are switching to smarter management today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link className="bg-[#111111] hover:bg-black text-white px-10 py-4 rounded-full font-medium text-[16px] transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group" href="#">
                        Start Free Trial
                        <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                    <Link className="bg-white hover:bg-gray-50 text-[#1a1a1a] px-10 py-4 rounded-full font-medium text-[16px] transition-all duration-200 shadow-sm border border-gray-200 flex items-center justify-center" href="/pricing">
                        View Pricing
                    </Link>
                </div>
            </div>
        </section>

      </main>
    </>
  );
}
