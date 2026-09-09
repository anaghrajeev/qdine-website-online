const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const target = `{/*  ============================================  */}
{/*  CTA SECTION  */}`;

const replacement = `{/*  ============================================  */}
{/*  SECURITY SECTION  */}
{/*  ============================================  */}
<section className="py-32 bg-[#fdfaf6] relative z-10">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
            <h2 className="font-serif text-[40px] md:text-[56px] text-[#1a1a1a] tracking-tight leading-[1.1]">
                Enterprise-grade security.<br/>
                <span className="text-gray-500">No compromise.</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-on-scroll">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-start transition-transform hover:-translate-y-1 duration-300">
                <div className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center mb-6">
                    <span className="text-[9px] font-bold text-center leading-tight tracking-wider text-gray-700">AICPA<br/>SOC 2<br/>TYPE II</span>
                </div>
                <h3 className="text-[17px] font-bold text-[#1a1a1a] mb-2">SOC 2 Type II certified</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">Independently audited security controls.</p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-start transition-transform hover:-translate-y-1 duration-300" style={{transitionDelay: "100ms"}}>
                <div className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[20px] text-gray-700">security</span>
                </div>
                <h3 className="text-[17px] font-bold text-[#1a1a1a] mb-2">GDPR compliant</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">Built to meet global data protection standards.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-start transition-transform hover:-translate-y-1 duration-300" style={{transitionDelay: "200ms"}}>
                <div className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[20px] text-gray-700">lock</span>
                </div>
                <h3 className="text-[17px] font-bold text-[#1a1a1a] mb-2">Encrypted data</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">Your data is protected at every stage.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col items-start transition-transform hover:-translate-y-1 duration-300" style={{transitionDelay: "300ms"}}>
                <div className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[20px] text-gray-700">language</span>
                </div>
                <h3 className="text-[17px] font-bold text-[#1a1a1a] mb-2">Never used to train AI</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">Your restaurant data stays yours. Period.</p>
            </div>
        </div>
    </div>
</section>

{/*  ============================================  */}
{/*  CTA SECTION  */}`;

if (content.includes(target)) {
    content = content.replace(target, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Security section added successfully.');
} else {
    console.log('Could not find CTA target in page.tsx');
}
