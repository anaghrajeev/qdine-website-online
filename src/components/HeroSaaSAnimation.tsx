'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSaaSAnimation() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        let timer1: NodeJS.Timeout, timer2: NodeJS.Timeout, timer3: NodeJS.Timeout, timer4: NodeJS.Timeout, timer5: NodeJS.Timeout, timer6: NodeJS.Timeout, timerReset: NodeJS.Timeout;

        const runAnimation = () => {
            setStep(0);
            timer1 = setTimeout(() => setStep(1), 800); // Show user message
            timer2 = setTimeout(() => setStep(2), 2000); // Show typing indicator
            timer3 = setTimeout(() => setStep(3), 4500); // Show response
            timer4 = setTimeout(() => setStep(4), 7000); // Show second user message
            timer5 = setTimeout(() => setStep(5), 8500); // Show second typing indicator
            timer6 = setTimeout(() => setStep(6), 11000); // Show second response
            timerReset = setTimeout(runAnimation, 16000); // Wait 5s, then loop back to start
        };

        runAnimation();

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(timer5);
            clearTimeout(timer6);
            clearTimeout(timerReset);
        };
    }, []);

    return (
        <div className="w-full h-full flex flex-col bg-white overflow-hidden transition-all duration-500">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white/50">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full relative overflow-hidden shadow-sm">
                        <Image src="/images/qdine-logo.jpg" alt="Qdine Logo" fill className="object-cover" />
                    </div>
                    <span className="font-semibold text-gray-800 text-[13px] sm:text-[14px]">Qdine AI Analyst</span>
                    <div className="w-2 h-2 rounded-full border-2 border-yellow-400"></div>
                </div>
                <div className="flex gap-1.5">
                    <div className="w-7 h-7 rounded-[6px] border border-gray-200 bg-[#f8fafc] flex items-center justify-center text-gray-600 shadow-sm cursor-pointer hover:bg-gray-100 transition-colors">
                        <span className="material-symbols-outlined text-[15px] transform scale-[0.75]">magic_button</span>
                    </div>
                    <div className="w-7 h-7 rounded-[6px] border border-red-100 bg-red-50 flex items-center justify-center text-red-500 shadow-sm cursor-pointer hover:bg-red-100 transition-colors">
                        <span className="material-symbols-outlined text-[15px] transform scale-[0.75]">delete_outline</span>
                    </div>
                    <div className="w-7 h-7 rounded-[6px] border border-gray-200 bg-[#f8fafc] flex items-center justify-center text-gray-600 shadow-sm cursor-pointer hover:bg-gray-100 transition-colors">
                        <span className="material-symbols-outlined text-[15px] transform scale-[0.75]">close_fullscreen</span>
                    </div>
                    <div className="w-7 h-7 rounded-[6px] border border-gray-200 bg-[#f8fafc] flex items-center justify-center text-gray-600 shadow-sm cursor-pointer hover:bg-gray-100 transition-colors">
                        <span className="material-symbols-outlined text-[15px] transform scale-[0.75]">close</span>
                    </div>
                </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 sm:p-5 flex flex-col gap-4 flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* User Message */}
                <div className={`transition-all duration-500 transform ${step >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <div className="flex justify-end mb-1">
                        <div className="bg-[#0a714e] text-white text-[12px] sm:text-[13px] px-3 sm:px-4 py-2 rounded-[16px] rounded-tr-[4px] shadow-sm max-w-[85%] leading-relaxed">
                            What are the top 5 best selling items this week at a high sales restaurant?
                        </div>
                    </div>
                </div>

                {/* AI Typing Indicator / Response */}
                <div className={`flex gap-2 transition-all duration-500 transform ${step >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <div className="w-6 h-6 rounded-full relative overflow-hidden flex-shrink-0 mt-1 shadow-sm">
                        <Image src="/images/qdine-logo.jpg" alt="Qdine Logo" fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                        {step === 2 && (
                            <div className="bg-white border border-gray-100 px-4 py-3 rounded-[16px] rounded-tl-[4px] shadow-sm w-max flex gap-1.5 items-center h-[40px]">
                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                        )}
                        
                        {step >= 3 && (
                            <div className="bg-white border border-gray-100 p-3 sm:p-4 rounded-[16px] rounded-tl-[4px] shadow-sm animate-[fadeIn_0.5s_ease-out]">
                                <ul className="space-y-2 text-[12px] sm:text-[13px] text-gray-700">
                                    <li className="flex items-center gap-2"><span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#0a714e] text-white text-[10px] font-bold">1</span> <b>Chicken Biryani</b> - 245 orders | ₹12,250</li>
                                    <li className="flex items-center gap-2"><span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#0a714e] text-white text-[10px] font-bold">2</span> <b>Butter Chicken</b> - 198 orders | ₹9,900</li>
                                    <li className="flex items-center gap-2"><span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#0a714e] text-white text-[10px] font-bold">3</span> <b>Masala Dosa</b> - 176 orders | ₹7,920</li>
                                    <li className="flex items-center gap-2"><span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#0a714e] text-white text-[10px] font-bold">4</span> <b>Paneer Tikka</b> - 142 orders | ₹6,390</li>
                                    <li className="flex items-center gap-2"><span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#0a714e] text-white text-[10px] font-bold">5</span> <b>Tandoori Chicken</b> - 118 orders | ₹5,900</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Second User Message */}
                {step >= 4 && (
                    <div className="animate-[fadeIn_0.5s_ease-out]">
                        <div className="flex justify-end mb-1">
                            <div className="bg-[#0a714e] text-white text-[12px] sm:text-[13px] px-3 sm:px-4 py-2 rounded-[16px] rounded-tr-[4px] shadow-sm max-w-[85%] leading-relaxed">
                                How can I improve my restaurant sales?
                            </div>
                        </div>
                    </div>
                )}

                {/* Second AI Typing Indicator / Response */}
                {step >= 5 && (
                    <div className="flex gap-2 animate-[fadeIn_0.5s_ease-out]">
                        <div className="w-6 h-6 rounded-full relative overflow-hidden flex-shrink-0 mt-1 shadow-sm">
                            <Image src="/images/qdine-logo.jpg" alt="Qdine Logo" fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                            {step === 5 && (
                                <div className="bg-white border border-gray-100 px-4 py-3 rounded-[16px] rounded-tl-[4px] shadow-sm w-max flex gap-1.5 items-center h-[40px]">
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            )}
                            
                            {step >= 6 && (
                                <div className="bg-white border border-gray-100 p-3 sm:p-4 rounded-[16px] rounded-tl-[4px] shadow-sm animate-[fadeIn_0.5s_ease-out]">
                                    <ul className="space-y-3 text-[12px] sm:text-[13px] text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0a714e]"></span>
                                            <span><b>Focus on High-Profit Items:</b> Promote best-sellers like Chicken Biryani and Masala Dosa with combo offers.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0a714e]"></span>
                                            <span><b>Increase Average Order Value (AOV):</b> Suggest add-ons like drinks and create combo meals.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#0a714e]"></span>
                                            <span><b>Optimize Peak Hours:</b> Ensure smooth operations during lunch and dinner.</span>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Footer Input */}
            <div className="p-3 bg-white/50 border-t border-gray-100">
                <div className="relative">
                    <input type="text" placeholder="Ask sales, peak hours, cancellations..." className="w-full bg-white border border-gray-200 rounded-full pl-4 pr-10 py-2 sm:py-2.5 text-[11px] sm:text-[12px] outline-none focus:border-[#0a714e]/50 transition-colors shadow-inner" disabled />
                    <div className="absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="material-symbols-outlined text-[14px] text-gray-400 pl-[2px]">send</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
