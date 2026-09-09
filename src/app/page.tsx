import Link from 'next/link';
import Image from 'next/image';
import AIShowcase from '@/components/AIShowcase';
import HeroSaaSAnimation from '@/components/HeroSaaSAnimation';

export default function Page() {
  return (
    <>
<section className="relative pt-24 sm:pt-28 lg:pt-32 pb-8 lg:pb-16 overflow-hidden min-h-[80vh] lg:min-h-screen flex flex-col justify-center bg-[#fdfaf6]">
    <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Content */}
            <div className="reveal-on-scroll max-w-xl">
                <h1 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[76px] font-medium leading-[1.05] tracking-tight mb-6 text-[#1a1a1a]">
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
                    <Link className="bg-[#111111] hover:bg-black text-white px-6 sm:px-8 py-3.5 rounded-full font-medium text-[15px] transition-all duration-200 flex items-center justify-center sm:w-max shadow-sm" href="#">
                        Book a demo
                    </Link>
                    <Link className="bg-white hover:bg-gray-50 text-[#1a1a1a] px-6 sm:px-8 py-3.5 rounded-full font-medium text-[15px] transition-all duration-200 border border-gray-200 flex items-center justify-center gap-2 sm:w-max shadow-sm" href="#">
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
            <div className="relative reveal-on-scroll" style={{"transitionDelay":"200ms"}}>
                <div className="rounded-[24px] sm:rounded-[40px] overflow-hidden relative shadow-2xl h-[350px] sm:h-[450px] lg:h-[600px] w-full bg-gray-50 border border-gray-100">
                    <HeroSaaSAnimation />
                </div>
            </div>
        </div>
    </div>
</section>

{/*  ============================================  */}
{/*  HOW IT WORKS (SIMPLE AS IT GETS)  */}
{/*  ============================================  */}
<section className="bg-[#fdfaf6] py-16 sm:py-24 relative z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-[32px] sm:text-[40px] md:text-[56px] text-[#1a1a1a] mb-10 sm:mb-16 tracking-tight">Simple as it gets.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="reveal-on-scroll">
                <div className="bg-[#f0f4f8] rounded-[24px] aspect-[4/3] mb-8 overflow-hidden relative shadow-inner border border-black/5">
                    <Image src="/images/pos-menu.jpg" alt="POS Menu" fill className="object-cover object-[center_20%] scale-[1.15] hover:scale-[1.25] transition-transform duration-700" />
                </div>
                <h3 className="text-[20px] font-bold text-[#1a1a1a] mb-3 flex items-center gap-4">
                    <span className="text-gray-400 text-[22px] font-medium">1</span> Browse the menu
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed pr-4">
                    Tap to add items to your cart instantly. Easily manage stock availability and variations on the fly.
                </p>
            </div>

            {/* Step 2 */}
            <div className="reveal-on-scroll" style={{"transitionDelay":"100ms"}}>
                <div className="bg-[#f0f4f8] rounded-[24px] aspect-[4/3] mb-8 overflow-hidden relative shadow-inner border border-black/5">
                    <Image src="/images/pos-checkout.jpg" alt="Complete Order" fill className="object-cover object-[center_60%] scale-[1.15] hover:scale-[1.25] transition-transform duration-700" />
                </div>
                <h3 className="text-[20px] font-bold text-[#1a1a1a] mb-3 flex items-center gap-4">
                    <span className="text-gray-400 text-[22px] font-medium">2</span> Complete the order
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed pr-4">
                    Assign tables, set order types (dine-in or takeaway), and add customer preferences before placing the order.
                </p>
            </div>

            {/* Step 3 */}
            <div className="reveal-on-scroll" style={{"transitionDelay":"200ms"}}>
                <div className="bg-[#f0f4f8] rounded-[24px] aspect-[4/3] mb-8 overflow-hidden relative shadow-inner border border-black/5">
                    <Image src="/images/pos-ticket.jpg" alt="Order Ticket" fill className="object-cover object-[center_40%] scale-[1.15] hover:scale-[1.25] transition-transform duration-700" />
                </div>
                <h3 className="text-[20px] font-bold text-[#1a1a1a] mb-3 flex items-center gap-4">
                    <span className="text-gray-400 text-[22px] font-medium">3</span> Track and manage
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed pr-4">
                    Stay on top of live orders. Update statuses to "Preparing" or "Ready" and keep your kitchen flowing smoothly.
                </p>
            </div>
        </div>
    </div>
</section>


{/*  ============================================  */}
{/*  FEATURES — PRODUCT SHOWCASE  */}
{/*  ============================================  */}
<section className="py-16 sm:py-24 bg-[#fdfaf6] relative z-10">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-20 reveal-on-scroll">
            <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[56px] text-[#1a1a1a] tracking-tight leading-[1.1]">
                Everything your restaurant needs.<br/>
                <span className="text-gray-500">Nothing it doesn't.</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {/* Feature 1 */}
            <div className="reveal-on-scroll flex flex-col">
                <div className="rounded-[24px] overflow-hidden aspect-[4/3] mb-8 bg-[#e8f1fb] flex items-center justify-center shadow-sm border border-black/5 relative">
                    <Image src="/images/ai-analyst.jpg" alt="AI Analyst" fill className="object-cover object-top hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-[24px] font-bold text-[#1a1a1a] mb-3 tracking-tight">
                    Ask anything. Get answers instantly.
                </h3>
                <p className="text-gray-600 text-[16px] leading-relaxed pr-4">
                    Qdine AI Analyst understands your sales, orders, peak hours, and inventory. Just ask a question — in plain English — and get data-driven answers in seconds. It's like having a business analyst who never sleeps.
                </p>
            </div>

            {/* Feature 2 */}
            <div className="reveal-on-scroll flex flex-col" style={{"transitionDelay":"100ms"}}>
                <div className="rounded-[24px] overflow-hidden aspect-[4/3] mb-8 bg-[#e8f1fb] flex items-center justify-center shadow-sm border border-black/5 relative">
                    <Image src="/images/table-management.jpg" alt="Table Management" fill className="object-cover object-top hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-[24px] font-bold text-[#1a1a1a] mb-3 tracking-tight">
                    Every seat. Every status. One glance.
                </h3>
                <p className="text-gray-600 text-[16px] leading-relaxed pr-4">
                    See which tables are occupied, available, or waiting. Track active orders and revenue per table in real time. Add tables, generate QR codes, and manage capacities — all from a single, beautiful dashboard.
                </p>
            </div>

            {/* Feature 3 */}
            <div className="reveal-on-scroll flex flex-col" style={{"transitionDelay":"100ms"}}>
                <div className="rounded-[24px] overflow-hidden aspect-[4/3] mb-8 bg-[#e8f1fb] flex items-center justify-center shadow-sm border border-black/5 relative">
                    <Image src="/images/products-inventory.jpg" alt="Products & Inventory" fill className="object-cover object-top hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-[24px] font-bold text-[#1a1a1a] mb-3 tracking-tight">
                    Your entire menu. Mastered.
                </h3>
                <p className="text-gray-600 text-[16px] leading-relaxed pr-4">
                    Manage every item, category, price, and stock level with precision. Visual status indicators — Available, Low Stock, Out of Stock — keep you one step ahead. Upload your menu via a photo or add items one by one.
                </p>
            </div>


            {/* Feature 4 */}
            <div className="reveal-on-scroll flex flex-col" style={{"transitionDelay":"200ms"}}>
                <div className="rounded-[24px] overflow-hidden aspect-[4/3] mb-8 bg-[#e8f1fb] flex items-center justify-center shadow-sm border border-black/5 relative">
                    <Image src="/images/ip-17.png" alt="Digital Menu" fill className="object-cover object-top hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="text-[24px] font-bold text-[#1a1a1a] mb-3 tracking-tight">
                    A menu your guests will love.
                </h3>
                <p className="text-gray-600 text-[16px] leading-relaxed pr-4">
                    Your customers scan a QR code and get a stunning, mobile-first digital menu. They browse, search, filter by category, and order — all from their phone. No app downloads. No waiting for the waiter. Just pure, frictionless dining.
                </p>
            </div>
        </div>
    </div>
</section>




{/*  ============================================  */}
{/*  CTA SECTION  */}
{/*  ============================================  */}
<section className="py-20 sm:py-32 bg-[#fdfaf6] relative z-10">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-on-scroll">
        <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[64px] text-[#1a1a1a] tracking-tight leading-[1.1] mb-6">
            The future of<br/>restaurants starts here.
        </h2>
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] text-gray-600 leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto font-medium">
            Join 500+ restaurant owners who've already made the switch. Start your free trial today — no credit card required, no contracts, no excuses.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a className="bg-[#111111] hover:bg-black text-white px-10 py-4 rounded-full font-medium text-[16px] transition-all duration-300 shadow-sm flex items-center justify-center gap-2 group" href="#">
                Start your free trial
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
            <a className="bg-white hover:bg-gray-50 text-[#1a1a1a] px-10 py-4 rounded-full font-medium text-[16px] transition-all duration-200 shadow-sm border border-gray-200" href="#">
                Talk to Sales
            </a>
        </div>
    </div>
</section>

{/*  ============================================  */}

    </>
  );
}
