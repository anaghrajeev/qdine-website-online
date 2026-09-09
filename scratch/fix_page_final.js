const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const feature4Marker = '            {/* Feature 4 */}';
const startIdx = content.indexOf(feature4Marker);

const endingChunk = `
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

<AIShowcase />

{/*  ============================================  */}
{/*  WHY QDINE — DIFFERENTIATORS  */}
{/*  ============================================  */}
<section className="section-spacer bg-white relative z-10">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
            <p className="text-[13px] font-semibold text-primary-container uppercase tracking-[0.15em] mb-4">Why Qdine</p>
            <h2 className="text-[32px] md:text-[44px] font-extrabold leading-tight tracking-tight">
                Built different.<br/>
                <span className="text-on-surface-variant font-semibold">Because your restaurant deserves it.</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-on-scroll">
            {/*  Differentiator 1  */}
            <div className="text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary-container/8 flex items-center justify-center text-primary-container mx-auto mb-6">
                    <span className="material-symbols-outlined text-[32px]">speed</span>
                </div>
                <h3 className="text-[20px] font-bold mb-3">Live in 15 minutes</h3>
                <p className="text-on-surface-variant text-[15px] leading-relaxed">
                    Sign up, upload your menu, print your QR codes, and start taking orders. No hardware. No installation. No waiting.
                </p>
            </div>
            {/*  Differentiator 2  */}
            <div className="text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary-container/8 flex items-center justify-center text-primary-container mx-auto mb-6">
                    <span className="material-symbols-outlined text-[32px]">auto_awesome</span>
                </div>
                <h3 className="text-[20px] font-bold mb-3">AI that actually helps</h3>
                <p className="text-on-surface-variant text-[15px] leading-relaxed">
                    Not a gimmick. Our AI Analyst processes your real data — sales, cancellations, peak hours — and gives you answers you can act on. Today.
                </p>
            </div>
            {/*  Differentiator 3  */}
            <div className="text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary-container/8 flex items-center justify-center text-primary-container mx-auto mb-6">
                    <span className="material-symbols-outlined text-[32px]">public</span>
                </div>
                <h3 className="text-[20px] font-bold mb-3">Built for Scale</h3>
                <p className="text-on-surface-variant text-[15px] leading-relaxed">
                    Multi-currency pricing. Local tax-ready billing. Flexible integrations. Built by hospitality experts, for modern restaurants.
                </p>
            </div>
        </div>
    </div>
</section>

{/*  ============================================  */}
{/*  TESTIMONIAL  */}
{/*  ============================================  */}
<section className="section-spacer bg-surface-container-low relative overflow-hidden z-10">
    <div className="absolute inset-0 opacity-[0.03]" style={{"backgroundImage":"radial-gradient(#0a714e 1px, transparent 1px)","backgroundSize":"24px 24px"}}></div>
    <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center reveal-on-scroll">
        <div className="w-16 h-16 rounded-2xl bg-primary-container/10 flex items-center justify-center text-primary-container mx-auto mb-8">
            <span className="material-symbols-outlined text-[32px]">format_quote</span>
        </div>
        <h2 className="text-[24px] md:text-[32px] font-bold leading-relaxed mb-10 text-on-surface max-w-3xl mx-auto">
            "We switched from a ₹3 lakh POS system to Qdine. Setup took 20 minutes. Our staff learned it in one shift. The AI Analyst alone has saved us lakhs by catching waste we never knew existed. This isn't just software — it's the best decision we made this year."
        </h2>
        <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container font-bold text-lg">RK</div>
            <div className="text-left">
                <p className="text-[16px] font-bold text-on-surface">Rahul Krishnan</p>
                <p className="text-[14px] text-on-surface-variant">Owner, Spice District — Kochi</p>
            </div>
        </div>
    </div>
</section>

{/*  ============================================  */}
{/*  CTA SECTION  */}
{/*  ============================================  */}
<section className="section-spacer bg-surface relative z-10">
    <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal-on-scroll">
        <h2 className="text-[32px] md:text-[48px] font-extrabold leading-tight tracking-tight mb-6">
            The future of<br/>restaurants starts here.
        </h2>
        <p className="text-[17px] text-on-surface-variant leading-relaxed mb-10 max-w-2xl mx-auto">
            Join 500+ restaurant owners who've already made the switch. Start your free trial today — no credit card required, no contracts, no excuses.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a className="bg-primary-container hover:bg-[#086042] text-white px-10 py-4 rounded-full font-semibold text-[16px] transition-all duration-300 shadow-lg shadow-primary-container/20 flex items-center justify-center gap-2 group" href="#">
                Start your free trial
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
            <a className="bg-white hover:bg-gray-50 text-on-surface px-10 py-4 rounded-full font-semibold text-[16px] transition-all duration-200 shadow-sm border border-gray-200" href="#">
                Talk to Sales
            </a>
        </div>
    </div>
</section>

{/*  ============================================  */}

    </>
  );
}
`;

if (startIdx !== -1) {
    const startChunk = content.substring(0, startIdx);
    fs.writeFileSync(filePath, startChunk + endingChunk, 'utf8');
    console.log('Restored the page effectively.');
}
