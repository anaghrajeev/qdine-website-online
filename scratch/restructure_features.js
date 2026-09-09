const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const startTarget = 'FEATURES — PRODUCT SHOWCASE';
const endTarget = 'WHY QDINE — DIFFERENTIATORS';

let startIndex = content.indexOf(startTarget);
if (startIndex !== -1) {
    // go back to the start of the section comment
    startIndex = content.lastIndexOf('{/*  ============================================  */}', startIndex);
}
let endIndex = content.indexOf(endTarget);
if (endIndex !== -1) {
    // go back to the start of the section comment
    endIndex = content.lastIndexOf('{/*  ============================================  */}', endIndex);
}

if (startIndex !== -1 && endIndex !== -1) {
    const startChunk = content.substring(0, startIndex);
    const endChunk = content.substring(endIndex);

    const replacement = `{/*  ============================================  */}
{/*  FEATURES — PRODUCT SHOWCASE  */}
{/*  ============================================  */}
<section className="py-24 bg-[#fdfaf6] relative z-10">
    <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20 reveal-on-scroll">
            <h2 className="font-serif text-[40px] md:text-[56px] text-[#1a1a1a] tracking-tight leading-[1.1]">
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

`;

    fs.writeFileSync(filePath, startChunk + replacement + endChunk, 'utf8');
    console.log('Restructured Features layout successfully.');
} else {
    console.log('Could not find start or end index.', { startIndex, endIndex });
}
