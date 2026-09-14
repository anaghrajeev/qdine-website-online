import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | Qdine",
  description: "Terms of Service for Qdine, a product by Devou Solutions LLP.",
};

export default function TermsPage() {
  return (
    <main className="pt-32 pb-24 bg-[#fdfaf6] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-[40px] sm:text-[48px] text-[#1a1a1a] tracking-tight mb-8">
          Terms of Service
        </h1>
        <div className="max-w-none">
          <p className="text-[14px] text-gray-400 mb-10 border-b border-gray-200 pb-4">Last Updated: September 2025</p>
          
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-12 font-medium">
            Welcome to Qdine, a restaurant management platform operated by Devou Solutions LLP ("Company", "we", "us", or "our"). We believe in a fair, transparent partnership. These Terms of Service ("Terms") outline your rights as our customer, as well as the rules that protect our platform. By accessing or using our Service, you agree to these Terms.
          </p>

          <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] mb-4 mt-12 font-bold tracking-tight">1. Your Data Rights & Ownership</h2>
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-8">
            <strong>You own your data.</strong> All restaurant menus, customer lists, sales figures, and operational data you input into Qdine remains 100% your exclusive property. We claim no ownership over your business data. Upon termination of your account, you maintain the absolute right to export your core business data in a standard format.
          </p>

          <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] mb-4 mt-12 font-bold tracking-tight">2. Our Commitment to Confidentiality</h2>
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-8">
            We understand that your sales and operational data are highly sensitive. We strictly guarantee that your proprietary business data will never be sold, leased, or shared with your competitors. We only utilize anonymized, aggregated data to improve our system infrastructure and AI features.
          </p>

          <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] mb-4 mt-12 font-bold tracking-tight">3. Use of the Service & Licensing</h2>
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-8">
            We grant you a non-exclusive, non-transferable, revocable license to access and use the Qdine platform. The underlying software, features, AI models, and design remain the exclusive intellectual property of Devou Solutions LLP. You agree not to reverse-engineer our platform or use it for unlawful purposes.
          </p>

          <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] mb-4 mt-12 font-bold tracking-tight">4. Subscriptions, Payments & Cancellations</h2>
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-8">
            You may cancel your subscription at any time without hidden penalty fees. While prepaid subscription fees are generally non-refundable, we reserve the right to issue prorated refunds in the event of prolonged service failure on our end. We will always provide at least 30 days' advance notice before implementing any pricing changes, ensuring you have time to make informed business decisions.
          </p>

          <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] mb-4 mt-12 font-bold tracking-tight">5. Service Availability & SLAs</h2>
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-8">
            We strive for 99.9% uptime because we know your restaurant cannot afford downtime. However, the Service is legally provided on an "AS IS" and "AS AVAILABLE" basis. While we utilize enterprise-grade servers and redundancies, we cannot guarantee absolute immunity against global internet outages or force majeure events.
          </p>

          <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] mb-4 mt-12 font-bold tracking-tight">6. Limitation of Liability</h2>
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-8">
            To protect our ability to operate, in no event shall Devou Solutions LLP be liable for any indirect, incidental, special, consequential, or punitive damages—including loss of profits, data, or goodwill—arising from (i) third-party hardware failures, (ii) external payment gateway outages, or (iii) unauthorized access caused by compromised user passwords. Our total liability is limited to the amount you paid us in the 12 months preceding the claim.
          </p>

          <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] mb-4 mt-12 font-bold tracking-tight">7. Governing Law and Dispute Resolution</h2>
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-8">
            These Terms shall be governed and construed in accordance with the laws of India. Any dispute arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in the jurisdiction of Devou Solutions LLP's registration.
          </p>

          <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] mb-4 mt-12 font-bold tracking-tight">8. Contact Us</h2>
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-8">
            We are here to support your business. If you have any questions about these Terms, please contact us at <a className="text-[#0a714e] font-semibold hover:underline" href="mailto:support@getqdine.com">support@getqdine.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
