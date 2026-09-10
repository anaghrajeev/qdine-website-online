import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for restaurants of all sizes. Find the right Qdine plan for your business with no hidden fees.",
};

export default function Page() {
  return (
    <>

<main className="pt-24 sm:pt-28 lg:pt-40 pb-24 bg-[#fdfaf6]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/*  HEADER  */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 reveal-on-scroll">
            <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[56px] text-[#1a1a1a] tracking-tight leading-[1.1] mb-6">
                Simple pricing,<br/>
                <span className="text-gray-400">no surprises.</span>
            </h1>
            <p className="text-[16px] sm:text-[18px] text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
                Get the Qdine plan that's right for your restaurant, so no order goes unmanaged.
            </p>
        </div>

        {/*  PRICING CARDS  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl mx-auto mb-20 sm:mb-32 reveal-on-scroll" style={{"transitionDelay":"150ms"}}>
            
            {/*  STARTER  */}
            <div className="bg-white border border-gray-200 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none p-8 sm:p-10 flex flex-col">
                <div className="mb-8">
                    <h3 className="text-[22px] font-bold text-[#1a1a1a] mb-2">Starter</h3>
                    <p className="text-[14px] text-gray-500 leading-relaxed">
                        For small restaurants just getting started with digital ordering.
                    </p>
                </div>
                <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-[48px] font-bold text-[#1a1a1a] tracking-tight">₹999</span>
                    <span className="text-[15px] text-gray-400 font-medium">/month</span>
                </div>
                <Link className="w-full py-3.5 px-4 rounded-full bg-white hover:bg-gray-50 text-[#1a1a1a] font-semibold text-[14px] transition-all duration-200 border border-gray-300 text-center mb-10 block" href="#">
                    Get Started
                </Link>

                {/* Features */}
                <div className="space-y-8 flex-grow">
                    <div>
                        <h4 className="text-[15px] font-bold text-[#1a1a1a] mb-1.5">1 restaurant location</h4>
                        <p className="text-[13px] text-gray-500 leading-relaxed">Manage a single outlet with full POS, table management, and digital menus.</p>
                    </div>
                    <div>
                        <h4 className="text-[15px] font-bold text-[#1a1a1a] mb-1.5">Up to 20 tables</h4>
                        <p className="text-[13px] text-gray-500 leading-relaxed">Perfect for cafés and small dining rooms. Track occupancy and orders in real time.</p>
                    </div>
                    <div>
                        <h4 className="text-[15px] font-bold text-[#1a1a1a] mb-1.5">QR digital menu</h4>
                        <p className="text-[13px] text-gray-500 leading-relaxed">Beautiful mobile menus your guests can browse and order from instantly.</p>
                    </div>
                    <div>
                        <h4 className="text-[15px] font-bold text-[#1a1a1a] mb-1.5">Basic AI Analyst</h4>
                        <p className="text-[13px] text-gray-500 leading-relaxed">10 queries per day — ask about sales, top items, and peak hours.</p>
                    </div>
                    <div>
                        <h4 className="text-[15px] font-bold text-[#1a1a1a] mb-1.5">Inventory management</h4>
                        <p className="text-[13px] text-gray-500 leading-relaxed">Track stock levels, set alerts, and never run out of key ingredients.</p>
                    </div>
                </div>
            </div>

            {/*  PROFESSIONAL (HERO)  */}
            <div className="bg-[#111111] border border-[#111111] p-8 sm:p-10 flex flex-col relative z-10 md:shadow-2xl md:-my-4 md:rounded-3xl">
                <div className="mb-8">
                    <h3 className="text-[22px] font-bold text-white mb-2">Professional</h3>
                    <p className="text-[14px] text-white/50 leading-relaxed">
                        For growing restaurants that demand intelligence and scale.
                    </p>
                </div>
                <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-[48px] font-bold text-white tracking-tight">₹2,499</span>
                    <span className="text-[15px] text-white/40 font-medium">/month</span>
                </div>
                <Link className="w-full py-3.5 px-4 rounded-full bg-white hover:bg-gray-100 text-[#111111] font-semibold text-[14px] transition-all duration-200 text-center mb-10 block" href="#">
                    Get started
                </Link>

                {/* Features */}
                <p className="text-[13px] text-white/40 font-semibold uppercase tracking-wider mb-6">Everything in Starter, plus</p>
                <div className="space-y-8 flex-grow">
                    <div>
                        <h4 className="text-[15px] font-bold text-white mb-1.5">Up to 3 locations</h4>
                        <p className="text-[13px] text-white/50 leading-relaxed">Manage multiple outlets from one dashboard. Centralized menus, staff, and analytics.</p>
                    </div>
                    <div>
                        <h4 className="text-[15px] font-bold text-white mb-1.5">Unlimited tables & AI queries</h4>
                        <p className="text-[13px] text-white/50 leading-relaxed">No caps. Ask the AI anything, anytime — sales trends, cancellations, peak hours, waste analysis.</p>
                    </div>
                    <div>
                        <h4 className="text-[15px] font-bold text-white mb-1.5">Photo menu upload</h4>
                        <p className="text-[13px] text-white/50 leading-relaxed">Snap a photo of your menu — Qdine auto-creates items, categories, and prices.</p>
                    </div>
                    <div>
                        <h4 className="text-[15px] font-bold text-white mb-1.5">Staff management & permissions</h4>
                        <p className="text-[13px] text-white/50 leading-relaxed">Role-based access for owners, managers, and waitstaff. Full audit trail.</p>
                    </div>
                    <div>
                        <h4 className="text-[15px] font-bold text-white mb-1.5">Priority 24/7 support</h4>
                        <p className="text-[13px] text-white/50 leading-relaxed">Dedicated support with fast response times. We're here when you need us.</p>
                    </div>
                </div>
            </div>

            {/*  ENTERPRISE  */}
            <div className="bg-white border border-gray-200 rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none p-8 sm:p-10 flex flex-col">
                <div className="mb-8">
                    <h3 className="text-[22px] font-bold text-[#1a1a1a] mb-2">Enterprise</h3>
                    <p className="text-[14px] text-gray-500 leading-relaxed">
                        For restaurant chains and hospitality groups at scale.
                    </p>
                </div>
                <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-[48px] font-bold text-[#1a1a1a] tracking-tight">Custom</span>
                </div>
                <Link className="w-full py-3.5 px-4 rounded-full bg-[#0a714e] hover:bg-[#086042] text-white font-semibold text-[14px] transition-all duration-200 text-center mb-10 block" href="#">
                    Contact Sales
                </Link>

                {/* Features */}
                <p className="text-[13px] text-gray-400 font-semibold uppercase tracking-wider mb-6">Everything in Pro, plus</p>
                <div className="space-y-8 flex-grow">
                    <div>
                        <h4 className="text-[15px] font-bold text-[#1a1a1a] mb-1.5">Unlimited locations</h4>
                        <p className="text-[13px] text-gray-500 leading-relaxed">Scale to 10, 50, or 500 outlets. Qdine grows with you, no re-architecture needed.</p>
                    </div>
                    <div>
                        <h4 className="text-[15px] font-bold text-[#1a1a1a] mb-1.5">Custom API integrations</h4>
                        <p className="text-[13px] text-gray-500 leading-relaxed">Connect Qdine with your existing POS, ERP, accounting, or delivery systems.</p>
                    </div>
                    <div>
                        <h4 className="text-[15px] font-bold text-[#1a1a1a] mb-1.5">Dedicated account manager</h4>
                        <p className="text-[13px] text-gray-500 leading-relaxed">A named point of contact who knows your business inside and out.</p>
                    </div>
                    <div>
                        <h4 className="text-[15px] font-bold text-[#1a1a1a] mb-1.5">White-label & on-premise training</h4>
                        <p className="text-[13px] text-gray-500 leading-relaxed">Custom branding, on-site staff training, and SLA guarantees for enterprise peace of mind.</p>
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
                            Yes — every plan comes with a 14-day free trial. No credit card required. Set up your restaurant in 15 minutes and experience the full platform.
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
                            Zero. Qdine charges a flat monthly subscription — no per-order fees, no per-table fees, no revenue sharing. Your margins are yours.
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
                Start Free Trial
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
        </div>
    </div>
</main>

    </>
  );
}