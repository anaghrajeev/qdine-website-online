import Link from 'next/link';
import Image from 'next/image';
import AIShowcase from '@/components/AIShowcase';
import HeroSaaSAnimation from '@/components/HeroSaaSAnimation';
import FeatureShowcase from '@/components/FeatureShowcase';
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
{/*  UNIFIED FEATURE SHOWCASE  */}
{/*  ============================================  */}
<FeatureShowcase />


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
