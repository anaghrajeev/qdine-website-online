import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#fdfaf6] border-t border-gray-200/50 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-5">
                            <Image src="/images/qdine-logo.jpg" alt="Qdine" width={36} height={36} className="rounded-lg shadow-sm object-cover"/>
                        </div>
                        <p className="text-gray-600 text-[14px] leading-relaxed max-w-xs mb-4 font-medium">
                            The world's most intelligent restaurant management platform. Built with precision, designed for hospitality.
                        </p>
                    </div>
                    {/* Product */}
                    <div>
                        <h4 className="font-bold text-[#1a1a1a] text-[13px] mb-4 uppercase tracking-wider">Product</h4>
                        <ul className="space-y-3">
                            <li><Link className="text-gray-600 hover:text-[#1a1a1a] transition-colors text-[14px] font-medium" href="#">Features</Link></li>
                            <li><Link className="text-gray-600 hover:text-[#1a1a1a] transition-colors text-[14px] font-medium" href="/pricing">Pricing</Link></li>
                            <li><Link className="text-gray-600 hover:text-[#1a1a1a] transition-colors text-[14px] font-medium" href="#">Security</Link></li>
                        </ul>
                    </div>
                    {/* Resources */}
                    <div>
                        <h4 className="font-bold text-[#1a1a1a] text-[13px] mb-4 uppercase tracking-wider">Resources</h4>
                        <ul className="space-y-3">
                            <li><Link className="text-gray-600 hover:text-[#1a1a1a] transition-colors text-[14px] font-medium" href="#">Blog</Link></li>
                            <li><Link className="text-gray-600 hover:text-[#1a1a1a] transition-colors text-[14px] font-medium" href="#">Guides</Link></li>
                            <li><Link className="text-gray-600 hover:text-[#1a1a1a] transition-colors text-[14px] font-medium" href="#">Help Center</Link></li>
                        </ul>
                    </div>
                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-[#1a1a1a] text-[13px] mb-4 uppercase tracking-wider">Company</h4>
                        <ul className="space-y-3">
                            <li><Link className="text-gray-600 hover:text-[#1a1a1a] transition-colors text-[14px] font-medium" href="#">About Us</Link></li>
                            <li><Link className="text-gray-600 hover:text-[#1a1a1a] transition-colors text-[14px] font-medium" href="#">Careers</Link></li>
                            <li><Link className="text-gray-600 hover:text-[#1a1a1a] transition-colors text-[14px] font-medium" href="#">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                {/* Bottom Bar */}
                <div className="border-t border-gray-200/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-[13px] font-medium">© 2025 Devou Solutions LLP. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link className="text-gray-500 hover:text-[#1a1a1a] transition-colors text-[13px] font-medium" href="#">Privacy</Link>
                        <Link className="text-gray-500 hover:text-[#1a1a1a] transition-colors text-[13px] font-medium" href="#">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
