const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const anchor = `                <h3 className="text-[24px] font-bold text-[#1a1a1a] mb-3 tracking-tight">
                    Your entire menu. Mastered.
                </h3>
                <p className="text-gray-600 text-[16px] leading-relaxed pr-4">
                    Manage every item, category, price, and stock level with precision. Visual status indicators — Available, Low Stock, Out of Stock — keep you one step ahead. Upload your menu via a photo or add items one by one.
                </p>
            </div>`;

const endAnchor = `{/*  ============================================  */}
{/*  TESTIMONIAL  */}`;

const startIdx = content.indexOf(anchor);
const endIdx = content.indexOf(endAnchor);

if (startIdx !== -1 && endIdx !== -1) {
    const startChunk = content.substring(0, startIdx + anchor.length);
    const endChunk = content.substring(endIdx);
    
    const replacement = `

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

`;
    fs.writeFileSync(filePath, startChunk + replacement + endChunk, 'utf8');
    console.log('Fixed page.tsx finally.');
} else {
    console.log('Could not find indices.');
}
