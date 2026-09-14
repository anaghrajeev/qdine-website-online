import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Qdine",
  description: "Privacy Policy for Qdine, a product by Devou Solutions LLP.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-24 bg-[#fdfaf6] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-[40px] sm:text-[48px] text-[#1a1a1a] tracking-tight mb-8">
          Privacy Policy
        </h1>
        <div className="max-w-none">
          <p className="text-[14px] text-gray-400 mb-10 border-b border-gray-200 pb-4">Last Updated: September 2025</p>
          
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-12 font-medium">
            At Qdine, operated by Devou Solutions LLP ("we", "us", or "our"), your privacy is our priority. We recognize that restaurants run on trust, and we extend that same trust to how we handle your data. This Privacy Policy explains our stringent safeguards and how we collect, use, and protect your information.
          </p>

          <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] mb-4 mt-12 font-bold tracking-tight">1. The Golden Rule: We Do Not Sell Your Data</h2>
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-4">
            We want to be absolutely clear: <strong>We will never sell, rent, or trade your personal or business data to third parties.</strong> Your customer lists, sales volumes, and operational metrics are yours alone. We enforce strict data isolation to ensure your competitors can never access your proprietary information.
          </p>

          <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] mb-4 mt-12 font-bold tracking-tight">2. Information We Collect</h2>
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-4">
            To provide our services efficiently, we collect:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-600 text-[16px] sm:text-[18px] leading-relaxed">
            <li><strong>Account Data:</strong> Name, email, phone number, and restaurant details required for onboarding.</li>
            <li><strong>Operational Data:</strong> Menu items, order histories, table configurations, and employee logs processed through the POS.</li>
            <li><strong>Technical Data:</strong> IP addresses, browser types, and usage logs strictly for security monitoring and troubleshooting.</li>
          </ul>

          <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] mb-4 mt-12 font-bold tracking-tight">3. How We Use Your Information</h2>
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-4">
            We use your data solely to operate and improve the Qdine platform:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-600 text-[16px] sm:text-[18px] leading-relaxed">
            <li>To facilitate fast, reliable point-of-sale transactions.</li>
            <li>To generate secure, private analytics and reports for your dashboard.</li>
            <li>To train our internal AI features (using strictly anonymized, aggregated data stripped of identifying information).</li>
            <li>To provide technical support and security alerts.</li>
          </ul>

          <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] mb-4 mt-12 font-bold tracking-tight">4. Enterprise-Grade Security</h2>
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-8">
            We treat your data with bank-level security. All data transmitted between your devices and our servers is encrypted using industry-standard TLS/SSL protocols. Payment processing is handled by PCI-DSS compliant partners; Qdine never stores raw credit card numbers on our servers. While we maintain rigorous safeguards, no system is perfectly secure, and we continuously monitor for emerging threats.
          </p>

          <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] mb-4 mt-12 font-bold tracking-tight">5. Your Control & Privacy Rights</h2>
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-4">
            We adhere to global privacy standards, granting you full control over your data:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8 text-gray-600 text-[16px] sm:text-[18px] leading-relaxed">
            <li><strong>Right to Access & Export:</strong> You can request a full copy of your business data at any time.</li>
            <li><strong>Right to Deletion:</strong> If you leave Qdine, you can request the permanent deletion of your account and operational data, subject only to legal retention requirements.</li>
            <li><strong>Marketing Opt-Out:</strong> You have the absolute right to opt out of any promotional communications.</li>
          </ul>

          <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] mb-4 mt-12 font-bold tracking-tight">6. Third-Party Integrations</h2>
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-8">
            If you choose to connect Qdine with third-party delivery platforms (like Swiggy or Zomato) or accounting software, data will be shared with them strictly as necessary to execute those services. We are not responsible for the privacy practices of third-party platforms.
          </p>

          <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] mb-4 mt-12 font-bold tracking-tight">7. Legal Compliance</h2>
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-8">
            We will only disclose your data to outside parties if we believe, in good faith, that such disclosure is strictly necessary to comply with a binding court order, legal process, or to protect the safety and rights of Devou Solutions LLP and its users.
          </p>

          <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] mb-4 mt-12 font-bold tracking-tight">8. Contact Us</h2>
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-8">
            If you have questions, concerns, or wish to exercise your data rights, our compliance team is ready to help at <a className="text-[#0a714e] font-semibold hover:underline" href="mailto:support@getqdine.com">support@getqdine.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
