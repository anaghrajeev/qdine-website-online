'use client';

import { useEffect, useRef, useState } from 'react';

function useCountUp(target: number, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered || target === 0) {
      if (target === 0) setCount(0);
      return;
    }
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [triggered, target, duration]);

  return count;
}

interface StatCardProps {
  icon: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  dark?: boolean;
  delay?: number;
  triggered: boolean;
}

function StatCard({ icon, value, suffix, prefix = '', label, dark = false, delay = 0, triggered }: StatCardProps) {
  const count = useCountUp(value, 1400, triggered);

  return (
    <div
      className={`
        group relative flex flex-col rounded-[28px] sm:rounded-[32px] overflow-hidden
        transition-all duration-500 ease-out cursor-default
        hover:-translate-y-2 hover:shadow-2xl
        ${dark
          ? 'bg-[#111111] shadow-[0_8px_40px_rgba(0,0,0,0.18)]'
          : 'bg-white border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.05)]'
        }
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Top accent bar */}
      <div className={`h-[3px] w-full ${dark ? 'bg-white/20' : 'bg-[#0a714e]'}`} />

      <div className="flex flex-col flex-1 p-8 sm:p-10">
        {/* Icon */}
        <span
          className={`material-symbols-outlined text-[28px] mb-6 ${dark ? 'text-white/40' : 'text-[#0a714e]/60'}`}
        >
          {icon}
        </span>

        {/* Stat number */}
        <div className={`font-serif tracking-tight leading-none mb-auto ${dark ? 'text-white' : 'text-[#1a1a1a]'}`}>
          <span className={`text-[20px] sm:text-[22px] font-serif mr-1 ${dark ? 'text-white/50' : 'text-[#0a714e]'}`}>
            {prefix}
          </span>
          <span className="text-[64px] sm:text-[80px]">
            {value === 0 ? '0' : count}
          </span>
          <span className={`text-[22px] sm:text-[26px] ml-1.5 font-serif ${dark ? 'text-white/60' : 'text-gray-400'}`}>
            {suffix}
          </span>
        </div>

        {/* Divider */}
        <div className={`my-6 h-px w-12 ${dark ? 'bg-white/10' : 'bg-gray-100'}`} />

        {/* Label */}
        <p className={`text-[14px] sm:text-[15px] leading-relaxed font-normal ${dark ? 'text-white/50' : 'text-gray-500'}`}>
          {label}
        </p>
      </div>
    </div>
  );
}

export default function MissionStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="text-center mb-16 sm:mb-20">
        <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[56px] text-[#1a1a1a] tracking-tight leading-[1.1] mb-5">
          The change we&apos;re making.
        </h2>
        <p className="text-[17px] sm:text-[19px] text-gray-500 font-normal max-w-xl mx-auto">
          Every day, Qdine helps restaurants replace complexity with absolute clarity.
        </p>
      </div>

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        <div
          className="reveal-on-scroll"
          style={{ transitionDelay: '0ms' }}
        >
          <StatCard
            icon="schedule"
            value={15}
            suffix="min"
            label="Average time from signup to first order taken"
            delay={0}
            triggered={triggered}
          />
        </div>

        <div
          className="reveal-on-scroll md:-translate-y-4"
          style={{ transitionDelay: '120ms' }}
        >
          <StatCard
            icon="currency_rupee"
            value={0}
            prefix="₹"
            suffix=""
            label="Hardware cost. No POS machines or servers required"
            dark
            delay={120}
            triggered={triggered}
          />
        </div>

        <div
          className="reveal-on-scroll"
          style={{ transitionDelay: '240ms' }}
        >
          <StatCard
            icon="bolt"
            value={1}
            suffix="shift"
            label="Time for any staff member to master the system"
            delay={240}
            triggered={triggered}
          />
        </div>
      </div>
    </section>
  );
}
