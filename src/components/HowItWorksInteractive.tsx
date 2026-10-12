'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: 'Take orders with live stock.',
    desc: 'Browse categories with instant stock badges (Available, Low Stock, Out of Stock) for fast, zero-error order punching.',
    image: '/images/1.png'
  },
  {
    id: 2,
    title: 'Command tables & live occupancy.',
    desc: 'Track seat availability, occupied tables, and running bill totals across your floor at a single glance.',
    image: '/images/2.png'
  },
  {
    id: 3,
    title: 'Print KOTs & settle bills fast.',
    desc: 'Check kitchen fulfillment, print KOTs or receipts in one tap, and collect payments via UPI QR, Cash, Card, or Split.',
    image: '/images/3.png'
  }
];

export default function HowItWorksInteractive() {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [activeStep]); // Re-binds timer when activeStep changes so it grants a full 3s after click
  
  return (
    <section className="bg-[#fdfaf6] py-16 sm:py-24 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-[32px] sm:text-[40px] md:text-[56px] text-[#1a1a1a] mb-16 sm:mb-24 tracking-tight reveal-on-scroll">
                Simple as it gets.
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                {/* Left side: Steps */}
                <div className="lg:col-span-5 space-y-4 reveal-on-scroll">
                    {steps.map((step, index) => {
                        const isActive = activeStep === index;
                        return (
                            <div 
                                key={step.id}
                                className={`p-6 sm:p-8 rounded-[24px] cursor-pointer transition-all duration-500 relative overflow-hidden ${
                                    isActive ? 'bg-white shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-gray-100 scale-100' : 'hover:bg-gray-50 border border-transparent scale-[0.98] opacity-70 hover:opacity-100'
                                }`}
                                onClick={() => setActiveStep(index)}
                            >
                                <h3 className={`text-[20px] sm:text-[24px] font-bold mb-2 flex items-center gap-4 transition-colors duration-500 ${isActive ? 'text-[#1a1a1a]' : 'text-gray-500'}`}>
                                    <span className={`text-[16px] sm:text-[18px] font-serif transition-colors duration-500 ${isActive ? 'text-[#0a714e]' : 'text-gray-400'}`}>0{step.id}</span> 
                                    {step.title}
                                </h3>
                                
                                <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <p className="text-gray-600 text-[15px] sm:text-[16px] leading-relaxed pr-4">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Progress bar bottom */}
                                {isActive && (
                                    <div className="absolute bottom-0 left-0 h-[3px] bg-gray-100 w-full overflow-hidden">
                                        <div 
                                            key={activeStep}
                                            className="h-full bg-[#0a714e] origin-left animate-[progressBar_3s_linear_forwards]"
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Right side: Image Display */}
                <div className="lg:col-span-7 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                    <div className="aspect-[4/3] relative flex items-center justify-center">
                        {steps.map((step, index) => (
                            <div 
                                key={step.id} 
                                className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                                    activeStep === index 
                                    ? 'opacity-100 scale-100 z-10' 
                                    : 'opacity-0 scale-[0.95] z-0 pointer-events-none'
                                }`}
                            >
                                <div className="relative w-full h-full animate-float flex items-center justify-center">
                                    <Image 
                                        src={step.image} 
                                        alt={step.title} 
                                        fill 
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-contain scale-[1.35] lg:scale-[1.42] transition-transform duration-700 ease-out hover:scale-[1.45]" 
                                        priority={index === 0}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
