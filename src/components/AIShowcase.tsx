'use client';

import { useState, useEffect } from 'react';

const queries = [
    "What were the total sales last night?",
    "Which items are running low on stock?",
    "Show me the peak hours for this week.",
    "Compare weekend revenue for this month."
];

export default function AIShowcase() {
    const [currentQueryIndex, setCurrentQueryIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        let timer: NodeJS.Timeout;
        
        const fullText = queries[currentQueryIndex];
        
        if (!isDeleting && currentText === fullText) {
            timer = setTimeout(() => setIsDeleting(true), 2500);
        } else if (isDeleting && currentText === "") {
            setIsDeleting(false);
            setCurrentQueryIndex((prev) => (prev + 1) % queries.length);
        } else {
            const timeout = isDeleting ? 40 : 80;
            timer = setTimeout(() => {
                setCurrentText(
                    fullText.substring(0, currentText.length + (isDeleting ? -1 : 1))
                );
            }, timeout);
        }
        
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentQueryIndex]);

    return (
        <section className="bg-[#fdfaf6] pt-32 pb-24 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 relative z-20 reveal-on-scroll">
                    <h2 className="font-serif text-[40px] md:text-[56px] text-[#1a1a1a] mb-6 tracking-tight leading-[1.1]">
                        Just Ask.<br className="md:hidden" /> AI Remembers.
                    </h2>
                    <p className="text-[18px] md:text-[20px] text-gray-500 leading-relaxed font-medium">
                        Get instant answers and unlock the knowledge buried in every<br className="hidden md:block" /> transaction, table turn, and menu update you've ever had.
                    </p>
                </div>

                {/* Interactive Area */}
                <div className="relative w-full max-w-5xl mx-auto h-[400px] flex items-center justify-center reveal-on-scroll">
                    
                    {/* Background Faded Grid */}
                    <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-40 select-none pointer-events-none">
                        {[
                            { title: "Weekly Revenue Sync", text: "Team discussed a 15% increase in weekend sales due to the new combo offers...", time: "Mon · 10:00 AM", duration: "45m" },
                            { title: "Inventory Alert", text: "Automated alert: Mozzarella cheese is running below the 5kg buffer limit...", time: "Tue · 2:15 PM", duration: "Automated" },
                            { title: "Staff Shift Log", text: "Shafeeq handed over the POS. Total cash in drawer matched the reported ₹45,000...", time: "Wed · 11:30 PM", duration: "Log" },
                            { title: "Customer Feedback", text: "Table 12 noted the new Teriyaki burger was a bit too salty. Chef was informed...", time: "Thu · 8:45 PM", duration: "Feedback" },
                            { title: "Marketing Strategy", text: "Discussed upcoming Diwali offers. Agreed on a flat 20% off for orders above ₹1000...", time: "Fri · 3:00 PM", duration: "1.2hr" },
                            { title: "Menu Optimization", text: "Analyzing slow-moving items. The Greek Salad had 0 orders last week. Considering removal...", time: "Sat · 9:00 AM", duration: "30m" }
                        ].map((card, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm opacity-60 blur-[1px] transform scale-95 transition-all duration-500">
                                <div className="text-[12px] text-gray-400 font-medium mb-2">{card.time}</div>
                                <h4 className="text-[16px] font-bold text-[#1a1a1a] mb-2">{card.title}</h4>
                                <p className="text-[13px] text-gray-500 line-clamp-3 leading-relaxed mb-4">{card.text}</p>
                                <div className="text-[12px] text-gray-400 flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">play_arrow</span> {card.duration}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Gradient overlay to fade edges */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#fdfaf6] via-transparent to-[#fdfaf6] z-10 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#fdfaf6] via-transparent to-[#fdfaf6] z-10 pointer-events-none"></div>

                    {/* Search Bar */}
                    <div className="relative z-30 w-full max-w-2xl bg-white rounded-full p-2.5 pl-6 md:pl-8 flex items-center justify-between shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] border border-gray-200/60 transform hover:scale-[1.02] transition-transform duration-500">
                        <div className="flex-1 text-[#1a1a1a] text-[16px] md:text-[20px] font-medium tracking-tight overflow-hidden whitespace-nowrap flex items-center">
                            {currentText}
                            <span className="inline-block w-0.5 h-[1.2em] bg-[#1a1a1a] align-middle ml-1 animate-pulse"></span>
                        </div>
                        <button className="w-12 h-12 md:w-14 md:h-14 bg-[#00A3FF] hover:bg-[#008AE6] text-white rounded-full flex items-center justify-center transition-colors flex-shrink-0 shadow-md group">
                            <span className="material-symbols-outlined text-[24px] transform group-hover:-translate-y-1 transition-transform">arrow_upward</span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
