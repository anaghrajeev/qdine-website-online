'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    label: 'Order',
    title: 'Order in seconds.',
    headline: 'Browse, punch, done.',
    desc: 'Tap through categories with instant stock badges — Available, Low Stock, Out of Stock — so every order is accurate and lightning fast.',
    bullets: [
      { icon: 'inventory', text: 'Real-time stock availability' },
      { icon: 'touch_app', text: 'One-tap order punching' },
      { icon: 'error_outline', text: 'Zero out-of-stock errors' },
    ],
    image: '/images/1.png',
    accentColor: '#0a714e',
    tintFrom: '#f3faf6',
    tintTo: '#e8f5ee',
  },
  {
    id: 2,
    label: 'Tables',
    title: 'Your floor, at a glance.',
    headline: 'Every seat accounted for.',
    desc: 'See occupied tables, available seats, and running bill totals across your entire floor on a single, live-updating map.',
    bullets: [
      { icon: 'grid_view', text: 'Live floor map layout' },
      { icon: 'event_seat', text: 'Seat-level occupancy tracking' },
      { icon: 'payments', text: 'Running tab amounts per table' },
    ],
    image: '/images/2.png',
    accentColor: '#6366f1',
    tintFrom: '#f5f3ff',
    tintTo: '#ede9fe',
  },
  {
    id: 3,
    label: 'Checkout',
    title: 'Kitchen to checkout, one flow.',
    headline: 'Print. Split. Settle.',
    desc: 'Fire KOTs to the kitchen, print receipts, split checks, and collect payment via UPI, card, or cash — all without leaving the screen.',
    bullets: [
      { icon: 'receipt_long', text: 'One-tap KOT & receipt printing' },
      { icon: 'call_split', text: 'Flexible bill splitting' },
      { icon: 'qr_code_scanner', text: 'UPI, Card, Cash in one place' },
    ],
    image: '/images/3.png',
    accentColor: '#f59e0b',
    tintFrom: '#fffbeb',
    tintTo: '#fef3c7',
  },
];

export default function HowItWorksInteractive() {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Auto-play when not hovering
  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeStep, isHovering]);

  const handleStepClick = useCallback((index: number) => {
    setActiveStep(index);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#fdfaf6] py-20 sm:py-28 relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-gray-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse" />
            How it works
          </div>
          <h2 className="font-serif text-[36px] sm:text-[44px] md:text-[56px] text-[#1a1a1a] tracking-tight leading-[1.1]">
            Simple as it gets.
          </h2>
          <p className="mt-5 text-gray-600 text-[16px] sm:text-[18px] leading-relaxed">
            Three screens. That&apos;s all it takes to run your restaurant floor.
          </p>
        </div>

        {/* Interactive Display */}
        <div
          className="reveal-on-scroll"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Step Tabs — Horizontal */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(index)}
                  className={`relative flex items-center gap-2.5 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-[13px] sm:text-[14px] transition-all duration-500 cursor-pointer overflow-hidden ${
                    isActive
                      ? 'text-white shadow-lg'
                      : 'bg-white text-gray-600 border border-gray-200/80 hover:border-gray-300 hover:text-gray-900 shadow-sm'
                  }`}
                  style={
                    isActive
                      ? { backgroundColor: step.accentColor }
                      : undefined
                  }
                >
                  <span className="relative z-10 flex items-center gap-2.5">
                    <span
                      className={`font-serif text-[16px] sm:text-[18px] ${
                        isActive ? 'opacity-80' : 'opacity-40'
                      }`}
                    >
                      0{step.id}
                    </span>
                    <span className="hidden sm:inline">{step.label}</span>
                  </span>

                  {/* Progress bar inside active tab */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 h-[3px] w-full bg-white/20">
                      <div
                        key={activeStep}
                        className="h-full bg-white/50 origin-left animate-[progressBar_4s_linear_forwards]"
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Content Card */}
          <div
            className="rounded-[28px] sm:rounded-[36px] overflow-hidden border border-gray-200/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-700"
            style={{
              background: `linear-gradient(135deg, ${steps[activeStep].tintFrom}, ${steps[activeStep].tintTo})`,
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center min-h-[400px] sm:min-h-[480px]">
              {/* Text Side */}
              <div className="p-8 sm:p-10 lg:p-14">
                {/* Animated heading */}
                {steps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`transition-all duration-500 ${
                      activeStep === index
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4 absolute pointer-events-none'
                    }`}
                    style={
                      activeStep !== index ? { position: 'absolute' } : {}
                    }
                  >
                    <h3 className="font-serif text-[30px] sm:text-[38px] lg:text-[44px] text-[#1a1a1a] tracking-tight leading-[1.1] mb-2">
                      {step.headline}
                    </h3>
                    <p className="text-gray-500 text-[15px] sm:text-[17px] leading-relaxed mb-8 max-w-md">
                      {step.desc}
                    </p>

                    {/* Bullets */}
                    <div className="space-y-3">
                      {step.bullets.map((bullet, bi) => (
                        <div
                          key={bi}
                          className="flex items-center gap-3"
                          style={{
                            transitionDelay: `${bi * 80}ms`,
                          }}
                        >
                          <span
                            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{
                              backgroundColor: `${step.accentColor}14`,
                            }}
                          >
                            <span
                              className="material-symbols-outlined text-[18px]"
                              style={{ color: step.accentColor }}
                            >
                              {bullet.icon}
                            </span>
                          </span>
                          <span className="text-[14px] sm:text-[15px] font-medium text-gray-700">
                            {bullet.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Image Side */}
              <div className="relative px-6 pb-6 lg:px-0 lg:pb-0">
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[440px]">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`absolute inset-0 w-full h-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        activeStep === index
                          ? 'opacity-100 scale-100 z-10'
                          : 'opacity-0 scale-[0.92] z-0 pointer-events-none'
                      }`}
                    >
                      <div className="relative w-full h-full animate-float flex items-center justify-center">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-contain scale-[1.1] lg:scale-[1.2] drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
