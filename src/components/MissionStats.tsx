'use client';

import { useEffect, useRef, useState } from 'react';

function useCountUp(target: number, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    if (target === 0) {
      setCount(0);
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const count15 = useCountUp(15, 1000, triggered);
  const count1 = useCountUp(1, 800, triggered);

  const stats = [
    {
      index: '01',
      tag: 'Setup Time',
      val: triggered ? count15 : 0,
      suffix: 'min',
      prefix: '',
      title: 'Immediate Go-Live',
      description: 'Average time from signup to taking your first live order on the floor.',
    },
    {
      index: '02',
      tag: 'Hardware Cost',
      val: 0,
      suffix: '',
      prefix: '₹',
      title: 'Zero Hardware Lock-In',
      description: 'No proprietary POS machines or servers. Run on any phone, tablet, or laptop.',
    },
    {
      index: '03',
      tag: 'Staff Training',
      val: triggered ? count1 : 0,
      suffix: 'shift',
      prefix: '',
      title: 'Effortless Mastery',
      description: 'Time for any team member to master the entire system with zero prior experience.',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="text-center mb-14 sm:mb-16 reveal-on-scroll">
        <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[56px] text-[#1a1a1a] tracking-tight leading-[1.1] mb-5">
          The change we&apos;re making.
        </h2>
        <p className="text-[17px] sm:text-[19px] text-gray-500 font-normal max-w-xl mx-auto">
          Every day, Qdine helps restaurants replace complexity with absolute clarity.
        </p>
      </div>

      {/* Unified Bento Bar aligned with website design system */}
      <div
        ref={ref}
        className="reveal-on-scroll bg-white rounded-[24px] sm:rounded-[32px] border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-500 overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between group transition-colors duration-300 hover:bg-[#fdfaf6]/60"
            >
              {/* Top metadata */}
              <div>
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-gray-400">
                    {stat.tag}
                  </span>
                  <span className="text-[13px] font-semibold text-gray-300 group-hover:text-[#0a714e] transition-colors">
                    {stat.index}
                  </span>
                </div>

                {/* Metric — using website's bold display font (Plus Jakarta Sans) */}
                <div className="flex items-baseline mb-8 sm:mb-10 tracking-tight">
                  {stat.prefix && (
                    <span className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-[#0a714e] mr-1">
                      {stat.prefix}
                    </span>
                  )}
                  <span className="text-[52px] sm:text-[60px] lg:text-[72px] font-bold text-[#1a1a1a] leading-none">
                    {stat.val}
                  </span>
                  {stat.suffix && (
                    <span className="text-[18px] sm:text-[20px] lg:text-[22px] font-medium text-gray-400 ml-2">
                      {stat.suffix}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom copy */}
              <div className="pt-6 border-t border-gray-100">
                <h3 className="text-[18px] sm:text-[19px] font-semibold text-[#1a1a1a] mb-2 tracking-tight">
                  {stat.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed font-normal">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
