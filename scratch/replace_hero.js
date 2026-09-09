const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const newHero = `<section className="relative pt-28 lg:pt-32 pb-8 lg:pb-16 overflow-hidden min-h-screen flex flex-col justify-center bg-[#fdfaf6]">
    <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Content */}
            <div className="reveal-on-scroll max-w-xl">
                <h1 className="text-[48px] md:text-[64px] lg:text-[76px] font-medium leading-[1.05] tracking-tight mb-6 text-[#1a1a1a]">
                    India's #1<br/>
                    <span className="font-serif italic font-normal">intelligent</span> restaurant<br/>
                    management system
                </h1>
                
                <p className="text-[18px] lg:text-[20px] text-gray-600 leading-relaxed mb-10 font-medium">
                    Qdine turns every order into perfect insights and instant service, and works with every restaurant workflow. You'll never manage tables manually again.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                    <Link className="bg-[#111111] hover:bg-black text-white px-8 py-3.5 rounded-full font-medium text-[15px] transition-all duration-200 flex items-center justify-center w-max shadow-sm" href="#">
                        Book a demo
                    </Link>
                    <Link className="bg-white hover:bg-gray-50 text-[#1a1a1a] px-8 py-3.5 rounded-full font-medium text-[15px] transition-all duration-200 border border-gray-200 flex items-center justify-center gap-2 w-max shadow-sm" href="#">
                        <span className="material-symbols-outlined text-[18px]">grid_view</span>
                        Start for free
                    </Link>
                </div>

                <div className="space-y-3 text-[13px] text-gray-500 font-medium">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[16px] text-gray-400">lock</span>
                        Private by design, FSSAI & GST Compliant
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[16px] text-gray-400">devices</span>
                        Available on Web, iOS, Android & Custom POS hardware
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[16px] text-gray-400">integration_instructions</span>
                        Works with Zomato, Swiggy without a bot
                    </div>
                </div>
            </div>

            {/* Right Column: Visual */}
            <div className="relative reveal-on-scroll" style={{"transitionDelay":"200ms"}}>
                <div className="rounded-[40px] overflow-hidden relative shadow-2xl h-[600px] w-full">
                    <Image src="/images/table-management.jpg" alt="Qdine Background" fill className="object-cover" priority/>
                    
                    {/* Floating AI Card */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] z-30">
                        <div className="bg-white/95 rounded-[24px] shadow-2xl p-5 backdrop-blur-xl border border-white/40">
                            <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-3">
                                <div className="flex items-center gap-2 bg-gray-100/80 rounded-full p-1 pr-4">
                                    <button className="bg-white rounded-full px-3 py-1 text-[13px] font-medium shadow-sm">Notes</button>
                                    <button className="text-[13px] text-gray-500 font-medium px-2">Ask AI</button>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-green-500 text-[20px]">graphic_eq</span>
                                    <span className="material-symbols-outlined text-gray-800 text-[20px]">pause</span>
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-end">
                                    <div className="bg-gray-100 rounded-2xl rounded-tr-sm px-4 py-2 text-[13px] text-[#1a1a1a] w-max">
                                        Catch me up
                                    </div>
                                </div>
                                <div className="text-[13px] text-gray-600 leading-relaxed">
                                    The team has been unpacking what drove the stronger-than-expected weekend numbers. Three things came up: the new targeted menu converted fast and drove word of mouth in the first 48 hours, the Friday launch timing gave the kitchen room to build...
                                </div>
                                <div className="relative mt-4">
                                    <input type="text" placeholder="Ask about this meeting" className="w-full bg-gray-50 border border-gray-100 rounded-full px-4 py-3 text-[13px] outline-none focus:ring-2 focus:ring-[#00A3FF]/20" />
                                    <button className="absolute right-1.5 top-1.5 w-8 h-8 rounded-full bg-[#00A3FF] text-white flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`;

// Replace from <section className="relative pt-28 to the first </section>
const startIndex = content.indexOf('<section className="relative pt-28');
const endIndex = content.indexOf('</section>', startIndex) + '</section>'.length;

if (startIndex !== -1 && endIndex !== -1) {
    const updated = content.substring(0, startIndex) + newHero + content.substring(endIndex);
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log('Replaced hero section successfully.');
} else {
    console.log('Could not find the bounds to replace.');
}
