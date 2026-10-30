import Image from 'next/image';

const features = [
  {
    headline: 'Manage Orders, effortlessly',
    description:
      'Take dine-in, takeaway, and delivery orders on a single screen with live stock badges so nothing goes out that shouldn\u2019t.',
    bullets: [
      'Real-time order management',
      'Send orders directly to kitchen',
      'Reduce KOT and billing errors',
    ],
    image: '/images/1.png',
    imageAlt: 'Order management interface',
  },
  {
    headline: 'Every table, at a glance',
    description:
      'See your entire floor\u2014occupied, available, reserved\u2014on one live map. Seat guests in seconds, not minutes.',
    bullets: [
      'Live seat & table tracking',
      'Dynamic table QR codes',
      'Running tab per table',
    ],
    image: '/images/mgmt_tbl.png',
    imageAlt: 'Table management view',
  },
  {
    headline: 'Kitchen to counter, in perfect sync',
    description:
      'Orders fire to the kitchen display instantly. Track every item from prep to served with real-time status badges.',
    bullets: [
      'Instant KOT ticket firing',
      'Item-by-item served tracking',
      'Front & back-of-house sync',
    ],
    image: '/images/counterwise.png',
    imageAlt: 'Kitchen display system',
  },
  {
    headline: 'Easy billing',
    description:
      'Fast, error-free billing to speed up checkout. Split checks, accept UPI, card, or cash\u2014all from one screen.',
    bullets: [
      'UPI QR, card & cash payments',
      'Flexible check splitting',
      'Auto GST-compliant invoices',
    ],
    image: '/images/pay_method.png',
    imageAlt: 'Billing and payment interface',
  },
  {
    headline: 'Inventory Management',
    description:
      'Link recipes to menu items so every order auto-deducts raw ingredients. Get alerts before stock runs low.',
    bullets: [
      'Recipe-linked stock deduction',
      'Low-stock buffer alerts',
      'Purchase order tracking',
    ],
    image: '/images/product_inv.png',
    imageAlt: 'Inventory management dashboard',
  },
  {
    headline: 'Print KOTs & settle bills, fast',
    description:
      'One-tap KOT printing, receipt generation, and checkout. The last mile of every order, handled in seconds.',
    bullets: [
      'One-tap KOT printing',
      'Digital & printed receipts',
      'Multi-method settlement',
    ],
    image: '/images/3.png',
    imageAlt: 'KOT and billing checkout flow',
  },
  {
    headline: 'Command your entire floor',
    description:
      'Bird\u2019s-eye view of table occupancy, running orders, and bill totals. Everything your floor manager needs on one screen.',
    bullets: [
      'Real-time floor overview',
      'Occupancy heatmap',
      'Running order totals',
    ],
    image: '/images/2.png',
    imageAlt: 'Floor management overview',
  },
];

export default function FeatureShowcase() {
  return (
    <section className="py-24 sm:py-32 bg-[#fdfaf6] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-28 reveal-on-scroll">
          <h2 className="font-serif text-[36px] sm:text-[48px] md:text-[64px] text-[#1a1a1a] tracking-tight leading-[1.05] mb-5">
            Everything your restaurant needs.
            <br />
            <span className="text-gray-300">Nothing it doesn&apos;t.</span>
          </h2>
          <p className="text-gray-500 text-[17px] sm:text-[19px] leading-relaxed max-w-xl mx-auto">
            One platform. Every workflow. From the first order to the last receipt.
          </p>
        </div>

        {/* Feature Rows */}
        <div className="space-y-6 sm:space-y-8">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={index}
                className="reveal-on-scroll"
              >
                <div className="bg-white rounded-[24px] sm:rounded-[32px] border border-gray-100 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-500">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 items-center ${
                      isReversed ? '' : ''
                    }`}
                  >
                    {/* Text */}
                    <div
                      className={`p-8 sm:p-12 lg:p-16 ${
                        isReversed ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <h3 className="text-[26px] sm:text-[32px] lg:text-[38px] font-semibold text-[#1a1a1a] tracking-tight leading-[1.15] mb-4">
                        {feature.headline}
                      </h3>
                      <p className="text-gray-500 text-[15px] sm:text-[17px] leading-relaxed mb-8">
                        {feature.description}
                      </p>

                      {/* Bullets */}
                      <ul className="space-y-3">
                        {feature.bullets.map((bullet, bi) => (
                          <li
                            key={bi}
                            className="flex items-center gap-3 text-[14px] sm:text-[15px] text-gray-700"
                          >
                            <span className="w-5 h-5 rounded-full bg-[#0a714e]/10 flex items-center justify-center flex-shrink-0">
                              <svg
                                className="w-3 h-3 text-[#0a714e]"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                            </span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Image */}
                    <div
                      className={`relative bg-gradient-to-br from-gray-50 to-gray-100/50 ${
                        isReversed ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <div className="relative aspect-[4/3] lg:aspect-[5/4]">
                        <Image
                          src={feature.image}
                          alt={feature.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-contain p-6 sm:p-10"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

