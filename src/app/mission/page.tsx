import Link from 'next/link';

export default function Page() {
  return (
    <>

<main className="pt-24 sm:pt-28 lg:pt-40 pb-24 bg-[#fdfaf6]">

    {/*  HERO  */}
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-32 text-center reveal-on-scroll">
        <p className="text-[13px] font-bold text-gray-500 uppercase tracking-[0.15em] mb-5">Our Mission</p>
        <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] text-[#1a1a1a] tracking-tight leading-[1.1] mb-8">
            Empowering every restaurant<br/>
            <span className="text-gray-400">to run smarter.</span>
        </h1>
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
            We believe the best restaurants shouldn't need the biggest budgets. Qdine exists to give every restaurant — from a 10-seat café to a 200-cover fine dining room — the same powerful, intelligent tools that were once reserved for global chains.
        </p>
    </section>

    {/*  WHY WE EXIST  */}
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start reveal-on-scroll">
            <div>
                <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[44px] text-[#1a1a1a] tracking-tight leading-[1.1] mb-6">
                    Restaurants deserve<br/>
                    <span className="text-gray-400">better software.</span>
                </h2>
            </div>
            <div className="space-y-6">
                <p className="text-[16px] sm:text-[17px] text-gray-600 leading-relaxed font-medium">
                    The restaurant industry runs on razor-thin margins, yet most restaurant software is bloated, overpriced, and designed for enterprises — not the people who actually cook and serve.
                </p>
                <p className="text-[16px] sm:text-[17px] text-gray-600 leading-relaxed font-medium">
                    We started Qdine because we saw restaurant owners spending lakhs on POS systems that took weeks to learn, required dedicated hardware, and still couldn't answer a simple question like <em>"What sold the most last Friday?"</em>
                </p>
                <p className="text-[16px] sm:text-[17px] text-gray-600 leading-relaxed font-medium">
                    That's unacceptable. So we built something different.
                </p>
            </div>
        </div>
    </section>

    {/*  CORE BELIEFS  */}
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-32">
        <div className="text-center mb-12 sm:mb-16 reveal-on-scroll">
            <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[44px] text-[#1a1a1a] tracking-tight leading-[1.1]">
                What we believe.
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 reveal-on-scroll">
            <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#e8f1fb] flex items-center justify-center text-[#1a1a1a] shadow-sm border border-black/5">
                    <span className="material-symbols-outlined text-[24px]">psychology</span>
                </div>
                <h3 className="text-[18px] font-bold text-[#1a1a1a]">Intelligence should be accessible</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">
                    AI-powered analytics shouldn't cost ₹10 lakhs. Every restaurant owner deserves to know their peak hours, best sellers, and waste patterns — without hiring a data analyst.
                </p>
            </div>
            <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#e8f1fb] flex items-center justify-center text-[#1a1a1a] shadow-sm border border-black/5">
                    <span className="material-symbols-outlined text-[24px]">favorite</span>
                </div>
                <h3 className="text-[18px] font-bold text-[#1a1a1a]">Software should feel effortless</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">
                    If your staff can't learn the system in one shift, the system has failed — not your staff. We obsess over simplicity so you can focus on hospitality.
                </p>
            </div>
            <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#e8f1fb] flex items-center justify-center text-[#1a1a1a] shadow-sm border border-black/5">
                    <span className="material-symbols-outlined text-[24px]">handshake</span>
                </div>
                <h3 className="text-[18px] font-bold text-[#1a1a1a]">Your data is sacred</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">
                    We will never sell, share, or use your restaurant's data to train AI models. Your business intelligence belongs to you. Period.
                </p>
            </div>
        </div>
    </section>

    {/*  THE IMPACT  */}
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-32">
        <div className="bg-white rounded-[24px] sm:rounded-[32px] border border-gray-200/80 p-8 sm:p-12 lg:p-16 reveal-on-scroll">
            <div className="text-center mb-12">
                <h2 className="font-serif text-[28px] sm:text-[36px] text-[#1a1a1a] tracking-tight leading-[1.1] mb-4">
                    The change we're making.
                </h2>
                <p className="text-[16px] text-gray-600 font-medium max-w-2xl mx-auto">
                    Every day, Qdine helps restaurants replace complexity with clarity.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 text-center">
                <div>
                    <div className="text-[40px] sm:text-[48px] font-bold text-[#1a1a1a] tracking-tight mb-2">15 min</div>
                    <p className="text-[14px] text-gray-500 font-medium">Average time from signup to first order taken</p>
                </div>
                <div>
                    <div className="text-[40px] sm:text-[48px] font-bold text-[#1a1a1a] tracking-tight mb-2">₹0</div>
                    <p className="text-[14px] text-gray-500 font-medium">Hardware cost. No POS machines, no printers required</p>
                </div>
                <div>
                    <div className="text-[40px] sm:text-[48px] font-bold text-[#1a1a1a] tracking-tight mb-2">1 shift</div>
                    <p className="text-[14px] text-gray-500 font-medium">Time for any staff member to learn the complete system</p>
                </div>
            </div>
        </div>
    </section>

    {/*  TEAM NOTE  */}
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-32 reveal-on-scroll">
        <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#e8f1fb] flex items-center justify-center text-[#1a1a1a] mx-auto mb-6 shadow-sm border border-black/5">
                <span className="material-symbols-outlined text-[28px] sm:text-[32px]">groups</span>
            </div>
            <h2 className="font-serif text-[24px] sm:text-[32px] text-[#1a1a1a] tracking-tight leading-[1.3] mb-6 max-w-2xl mx-auto">
                We're a small team of engineers, designers, and hospitality lovers building from India — for the world.
            </h2>
            <p className="text-[16px] text-gray-600 font-medium leading-relaxed max-w-xl mx-auto mb-2">
                Every line of code we write is guided by one question: <em>does this make a restaurant owner's life easier?</em> If the answer isn't yes, we don't ship it.
            </p>
            <p className="text-[14px] text-gray-400 font-medium mt-6">
                — The team at Devou Solutions LLP
            </p>
        </div>
    </section>

    {/*  CTA  */}
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center reveal-on-scroll">
        <h2 className="font-serif text-[28px] sm:text-[40px] text-[#1a1a1a] tracking-tight leading-[1.1] mb-6">
            Ready to join the mission?
        </h2>
        <p className="text-[16px] sm:text-[17px] text-gray-600 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto font-medium">
            Start your free trial and see why hundreds of restaurants are switching to smarter management.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link className="bg-[#111111] hover:bg-black text-white px-10 py-4 rounded-full font-medium text-[16px] transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group" href="#">
                Start Free Trial
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <Link className="bg-white hover:bg-gray-50 text-[#1a1a1a] px-10 py-4 rounded-full font-medium text-[16px] transition-all duration-200 shadow-sm border border-gray-200" href="/pricing">
                View Pricing
            </Link>
        </div>
    </section>
</main>

    </>
  );
}
