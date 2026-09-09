const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const targetStart = `                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

const targetEnd = `{/*  FEATURES — PRODUCT SHOWCASE  */}`;

const startIndex = content.indexOf(targetStart);
const endIndexText = content.indexOf(targetEnd);

if (startIndex !== -1 && endIndexText !== -1) {
    // find the `\n{/*  ============================================  */}` just before targetEnd
    const sectionCommentStart = content.lastIndexOf('{/*  ============================================  */}', endIndexText);

    const startChunk = content.substring(0, startIndex + targetStart.length);
    const endChunk = content.substring(sectionCommentStart);

    const replacement = `
</section>

{/*  ============================================  */}
{/*  TRUSTED BY LOGOS  */}
{/*  ============================================  */}
<section className="bg-[#fdfaf6] pb-16 pt-0 relative z-10">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 reveal-on-scroll">
        <p className="text-center font-serif text-gray-500 text-[18px] mb-8">Trusted by the fine folks at</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-[26px] font-bold tracking-tighter text-[#635BFF]">stripe</div>
            <div className="flex items-center gap-2 font-bold text-[22px] tracking-tight text-[#1a1a1a]">
                <div className="w-6 h-6 bg-[#1a1a1a] rounded-sm flex items-center justify-center text-white text-[12px] transform rotate-45"><span className="-rotate-45">C</span></div> CURSOR
            </div>
            <div className="flex items-center gap-2 font-medium text-[22px] text-[#1a1a1a]">
                <span className="material-symbols-outlined text-[28px]">donut_large</span> OpenAI
            </div>
            <div className="flex items-center gap-2 font-serif italic text-[24px] text-[#FF813F] font-bold">
                <span className="material-symbols-outlined">local_cafe</span> Buy me a coffee
            </div>
            <div className="flex items-center gap-1 font-bold text-[26px] tracking-tighter text-[#FD297B]">
                <span className="material-symbols-outlined text-[28px]">local_fire_department</span> tinder
            </div>
            <div className="font-bold text-[24px] tracking-tight text-[#1a1a1a]">Cookie<span className="text-[#00A3FF]">Yes</span></div>
        </div>
    </div>
</section>

{/*  ============================================  */}
{/*  SOCIAL PROOF — STATS BAR  */}
{/*  ============================================  */}
<section className="py-16 border-y border-gray-100 bg-white relative z-10">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="text-center reveal-on-scroll">
                <p className="text-[36px] lg:text-[44px] font-extrabold text-gradient tracking-tight">500+</p>
                <p className="text-[14px] text-on-surface-variant font-medium mt-1">Restaurants across India</p>
            </div>
            <div className="text-center reveal-on-scroll" style={{"transitionDelay":"100ms"}}>
                <p className="text-[36px] lg:text-[44px] font-extrabold text-gradient tracking-tight">₹12Cr+</p>
                <p className="text-[14px] text-on-surface-variant font-medium mt-1">Orders processed monthly</p>
            </div>
            <div className="text-center reveal-on-scroll" style={{"transitionDelay":"200ms"}}>
                <p className="text-[36px] lg:text-[44px] font-extrabold text-gradient tracking-tight">99.9%</p>
                <p className="text-[14px] text-on-surface-variant font-medium mt-1">Platform uptime</p>
            </div>
            <div className="text-center reveal-on-scroll" style={{"transitionDelay":"300ms"}}>
                <p className="text-[36px] lg:text-[44px] font-extrabold text-gradient tracking-tight">4.9★</p>
                <p className="text-[14px] text-on-surface-variant font-medium mt-1">Rated by restaurant owners</p>
            </div>
        </div>
    </div>
</section>

`;

    fs.writeFileSync(filePath, startChunk + replacement + endChunk, 'utf8');
    console.log('Fixed syntax error successfully.');
} else {
    console.log('Could not find start or end index.', { startIndex, endIndexText });
}
