import Image from 'next/image';

interface FeatureRowProps {
  label: string;
  headline: string;
  description: string;
  bullets: { icon: string; text: string }[];
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  tintFrom: string;
  tintTo: string;
  accentColor: string;
  delay?: number;
}

export default function FeatureRow({
  label,
  headline,
  description,
  bullets,
  imageSrc,
  imageAlt,
  reversed = false,
  tintFrom,
  tintTo,
  accentColor,
  delay = 0,
}: FeatureRowProps) {
  return (
    <div
      className="reveal-on-scroll"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`rounded-[32px] sm:rounded-[40px] overflow-hidden border border-gray-200/60 shadow-[0_2px_16px_rgba(0,0,0,0.03)]`}
        style={{
          background: `linear-gradient(135deg, ${tintFrom}, ${tintTo})`,
        }}
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center ${
            reversed ? 'lg:direction-rtl' : ''
          }`}
        >
          {/* Text Side */}
          <div
            className={`p-8 sm:p-10 lg:p-14 flex flex-col justify-center ${
              reversed ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            {/* Label pill */}
            <div className="mb-5">
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border"
                style={{
                  backgroundColor: `${accentColor}12`,
                  color: accentColor,
                  borderColor: `${accentColor}25`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: accentColor }}
                />
                {label}
              </span>
            </div>

            {/* Headline */}
            <h3 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] text-[#1a1a1a] tracking-tight leading-[1.1] mb-4">
              {headline}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-[15px] sm:text-[17px] leading-relaxed mb-8 max-w-md">
              {description}
            </p>

            {/* Bullet points */}
            <div className="space-y-3">
              {bullets.map((bullet, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${accentColor}14`,
                    }}
                  >
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ color: accentColor }}
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

          {/* Image Side */}
          <div
            className={`relative px-6 pb-6 lg:px-0 lg:pb-0 ${
              reversed ? 'lg:order-1' : 'lg:order-2'
            }`}
          >
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[440px] rounded-[20px] lg:rounded-none overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-4 sm:p-6 lg:p-8 drop-shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

