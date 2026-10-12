import Link from 'next/link';
import Image from 'next/image';
import AIShowcase from '@/components/AIShowcase';
import HeroSaaSAnimation from '@/components/HeroSaaSAnimation';
import HowItWorksInteractive from '@/components/HowItWorksInteractive';
import BookDemoButton from '@/components/BookDemoButton';

export default function Page() {
  return (
    <>
<section className="relative pt-24 sm:pt-28 lg:pt-32 pb-8 lg:pb-16 overflow-hidden min-h-[80vh] lg:min-h-screen flex flex-col justify-center bg-[#fdfaf6]">
    <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="grid xl:grid-cols-2 gap-10 xl:gap-16 items-center">
            
            {/* Left Column: Content */}
            <div className="reveal-on-scroll max-w-xl">
                <h1 className="text-[60px] sm:text-[64px] md:text-[72px] lg:text-[84px] font-medium leading-[1.05] tracking-tight mb-6 text-[#1a1a1a]">
                    The world's most<br/>
                    <span className="inline-grid [grid-template-columns:1fr] [grid-template-rows:1fr] overflow-hidden align-baseline relative">
                        <span className="col-start-1 row-start-1 font-serif italic font-normal animate-[slideUp1_9s_ease-in-out_infinite] pr-3">intelligent</span>
                        <span className="col-start-1 row-start-1 font-serif italic font-normal text-[#0a714e] animate-[slideUp2_9s_ease-in-out_infinite] pr-3">easy-to-use</span>
                        <span className="col-start-1 row-start-1 font-serif italic font-normal text-[#FF813F] animate-[slideUp3_9s_ease-in-out_infinite] pr-3">profitable</span>
                    </span>
                    restaurant<br/>
                    management system
                </h1>
                
                <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-600 leading-relaxed mb-8 sm:mb-10 font-medium">
                    Qdine turns every order into perfect insights and instant service, and works with every restaurant workflow. You'll never manage tables manually again.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
                    <BookDemoButton />
                    <Link className="bg-white hover:bg-gray-50 text-[#1a1a1a] px-6 sm:px-8 py-3.5 rounded-full font-medium text-[15px] transition-all duration-200 border border-gray-200 flex items-center justify-center gap-2 sm:w-max shadow-sm" href="/onboarding">
                        <span className="material-symbols-outlined text-[18px]">grid_view</span>
                        Start for free
                    </Link>
                </div>

                <div className="space-y-3 text-[12px] sm:text-[13px] text-gray-500 font-medium">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[16px] text-gray-400 flex-shrink-0">lock</span>
                        Private by design, FSSAI & GST Compliant
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[16px] text-gray-400 flex-shrink-0">devices</span>
                        Available on Web, iOS, Android & Custom POS hardware
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[16px] text-gray-400 flex-shrink-0">integration_instructions</span>
                        Works with Zomato, Swiggy without a bot
                    </div>
                </div>
            </div>

            {/* Right Column: Visual */}
            <div className="relative reveal-on-scroll xl:-translate-y-12" style={{"transitionDelay":"200ms"}}>
                <div className="rounded-[24px] sm:rounded-[40px] overflow-hidden relative shadow-2xl h-[420px] sm:h-[450px] lg:h-[600px] w-full bg-gray-50 border border-gray-100">
                    <HeroSaaSAnimation />
                </div>
            </div>
        </div>
    </div>
</section>

{/*  ============================================  */}
{/*  HOW IT WORKS (SIMPLE AS IT GETS)  */}
{/*  ============================================  */}
<HowItWorksInteractive />


{/*  ============================================  */}
{/*  FEATURES — PRODUCT SHOWCASE  */}
{/*  ============================================  */}
<section className="py-16 sm:py-24 bg-[#fdfaf6] relative z-10 overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-20 reveal-on-scroll">
            <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[56px] text-[#1a1a1a] tracking-tight leading-[1.1]">
                Everything your restaurant needs.<br/>
                <span className="text-gray-500">Nothing it doesn't.</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 bento-grid">
            {/* Feature 1: Table Management */}
            <div className="reveal-on-scroll bento-item">
                <div className="flex flex-col h-full bento-inner">
                    <div className="rounded-[28px] overflow-hidden aspect-[4/3] mb-8 bg-gradient-to-b from-[#f7faf8] to-[#edf3ef] flex items-center justify-center border border-[#0a714e]/[0.08] shadow-sm relative p-6 sm:p-8 group hover:border-[#0a714e]/25 transition-all duration-500">
                        <div className="relative w-[90%] h-[90%] flex items-center justify-center">
                            <Image 
                                src="/images/mgmt_tbl.png" 
                                alt="Table & Seating Management" 
                                fill 
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-transform duration-500 ease-out" 
                            />
                        </div>
                    </div>
                    <h3 className="text-[22px] sm:text-[24px] font-bold text-[#1a1a1a] mb-3 tracking-tight">
                        Every table. In real time.
                    </h3>
                    <p className="text-gray-600 text-[16px] leading-relaxed pr-4">
                        Live seat capacity, occupied tables, and running tabs at a glance. Spot open seats the second guests walk in and track kitchen prep status without leaving the floor.
                    </p>
                </div>
            </div>

            {/* Feature 2: Kitchen & Order Sync */}
            <div className="reveal-on-scroll bento-item" style={{"transitionDelay":"100ms"}}>
                <div className="flex flex-col h-full bento-inner">
                    <div className="rounded-[28px] overflow-hidden aspect-[4/3] mb-8 bg-gradient-to-b from-[#f7faf8] to-[#edf3ef] flex items-center justify-center border border-[#0a714e]/[0.08] shadow-sm relative p-6 sm:p-8 group hover:border-[#0a714e]/25 transition-all duration-500">
                        <div className="relative w-[92%] h-[92%] flex items-center justify-center">
                            <Image 
                                src="/images/counterwise.png" 
                                alt="Kitchen Order Tracking" 
                                fill 
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-transform duration-500 ease-out" 
                            />
                        </div>
                    </div>
                    <h3 className="text-[22px] sm:text-[24px] font-bold text-[#1a1a1a] mb-3 tracking-tight">
                        Kitchen to counter. In perfect sync.
                    </h3>
                    <p className="text-gray-600 text-[16px] leading-relaxed pr-4">
                        Follow orders from the kitchen pass to the table item by item. Real-time served badges keep front-of-house and back-of-house operating as one, eliminating delays.
                    </p>
                </div>
            </div>

            {/* Feature 3: Billing & Multi-method Checkout */}
            <div className="reveal-on-scroll bento-item" style={{"transitionDelay":"100ms"}}>
                <div className="flex flex-col h-full bento-inner">
                    <div className="rounded-[28px] overflow-hidden aspect-[4/3] mb-8 bg-gradient-to-b from-[#f7faf8] to-[#edf3ef] flex items-center justify-center border border-[#0a714e]/[0.08] shadow-sm relative p-6 sm:p-8 group hover:border-[#0a714e]/25 transition-all duration-500">
                        <div className="relative w-[92%] h-[92%] flex items-center justify-center">
                            <Image 
                                src="/images/pay_method.png" 
                                alt="Payment Methods" 
                                fill 
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-transform duration-500 ease-out" 
                            />
                        </div>
                    </div>
                    <h3 className="text-[22px] sm:text-[24px] font-bold text-[#1a1a1a] mb-3 tracking-tight">
                        Split, tap, settle. In seconds.
                    </h3>
                    <p className="text-gray-600 text-[16px] leading-relaxed pr-4">
                        Settle checks on your guest’s terms. Collect payments seamlessly via UPI QR, card, cash, or flexible bill splits with a single tap to keep table turnover brisk.
                    </p>
                </div>
            </div>

            {/* Feature 4: Recipe & Inventory Control */}
            <div className="reveal-on-scroll bento-item" style={{"transitionDelay":"200ms"}}>
                <div className="flex flex-col h-full bento-inner">
                    <div className="rounded-[28px] overflow-hidden aspect-[4/3] mb-8 bg-gradient-to-b from-[#f7faf8] to-[#edf3ef] flex items-center justify-center border border-[#0a714e]/[0.08] shadow-sm relative p-6 sm:p-8 group hover:border-[#0a714e]/25 transition-all duration-500">
                        <div className="relative w-[92%] h-[92%] flex items-center justify-center">
                            <Image 
                                src="/images/product_inv.png" 
                                alt="Recipe-level Inventory" 
                                fill 
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-transform duration-500 ease-out" 
                            />
                        </div>
                    </div>
                    <h3 className="text-[22px] sm:text-[24px] font-bold text-[#1a1a1a] mb-3 tracking-tight">
                        Recipe-linked stock. Automated.
                    </h3>
                    <p className="text-gray-600 text-[16px] leading-relaxed pr-4">
                        Link recipes directly to menu items so every order automatically deducts raw ingredients from inventory. Prevent stockouts and protect your margins effortlessly.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>




{/*  ============================================  */}
{/*  AI SHOWCASE  */}
{/*  ============================================  */}
<AIShowcase />

{/*  ============================================  */}
{/*  CTA SECTION  */}
{/*  ============================================  */}
<section className="py-20 sm:py-32 bg-[#fdfaf6] relative z-10 overflow-hidden">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-on-scroll">
        <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[64px] text-[#1a1a1a] tracking-tight leading-[1.1] mb-6">
            The future of<br/>restaurants starts here.
        </h2>
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-600 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto font-medium">
            Join 500+ restaurant owners who've already made the switch. Start your free trial today — no credit card required, no contracts, no excuses.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a className="bg-[#111111] hover:bg-black text-white px-10 py-4 rounded-full font-medium text-[16px] transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group" href="/onboarding">
                Start your free trial
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
            <a className="bg-white hover:bg-gray-50 text-[#1a1a1a] px-10 py-4 rounded-full font-medium text-[16px] transition-all duration-200 shadow-sm border border-gray-200" href="#">
                Talk to Sales
            </a>
        </div>
    </div>
</section>

    </>
  );
}
