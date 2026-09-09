const fs = require('fs');
const path = require('path');

// Update Navbar.tsx
const navbarPath = path.join(__dirname, '..', 'src', 'components', 'Navbar.tsx');
let navbarContent = fs.readFileSync(navbarPath, 'utf8');

const newNavbar = `import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#0a714e] backdrop-blur-xl shadow-sm transition-all duration-300" id="mainNav">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-16 lg:h-20">
                {/* Brand */}
                <Link className="flex items-center group" href="/">
                    <Image 
                        src="/images/qdine-logo.jpg" 
                        alt="Qdine" 
                        width={40} 
                        height={40} 
                        className="rounded-xl shadow-sm group-hover:scale-105 transition-transform object-cover"
                        priority
                    />
                </Link>
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link className="text-white font-semibold text-[15px] border-b-2 border-white pb-0.5" href="/">
                        Platform
                    </Link>
                    <Link className="text-white/80 hover:text-white transition-colors text-[15px] font-medium" href="/pricing">
                        Pricing
                    </Link>
                    <Link className="text-white/80 hover:text-white transition-colors text-[15px] font-medium" href="/how-it-works">
                        How It Works
                    </Link>
                </div>
                {/* CTA */}
                <div className="flex items-center gap-4">
                    <Link className="hidden md:block text-white font-semibold text-[15px] hover:text-white/80 transition-colors" href="#">
                        Log in
                    </Link>
                    <Link className="bg-white hover:bg-gray-100 text-[#0a714e] px-6 py-2.5 rounded-full font-semibold text-[14px] transition-all duration-200 shadow-sm hover:shadow-lg active:scale-95" href="#">
                        Start Free Trial
                    </Link>
                </div>
            </div>
        </nav>
    );
}
`;

fs.writeFileSync(navbarPath, newNavbar, 'utf8');
console.log('Updated Navbar.tsx');

// Update ClientScripts.tsx
const clientScriptsPath = path.join(__dirname, '..', 'src', 'components', 'ClientScripts.tsx');
let clientScriptsContent = fs.readFileSync(clientScriptsPath, 'utf8');

clientScriptsContent = clientScriptsContent.replace(
    /nav\.classList\.add\('shadow-md', 'bg-white\/95'\);/g,
    "nav.classList.add('shadow-md', 'bg-[#0a714e]/95');"
);
clientScriptsContent = clientScriptsContent.replace(
    /nav\.classList\.remove\('bg-white\/80', 'shadow-sm'\);/g,
    "nav.classList.remove('bg-[#0a714e]/80', 'shadow-sm');"
);
clientScriptsContent = clientScriptsContent.replace(
    /nav\.classList\.remove\('shadow-md', 'bg-white\/95'\);/g,
    "nav.classList.remove('shadow-md', 'bg-[#0a714e]/95');"
);
clientScriptsContent = clientScriptsContent.replace(
    /nav\.classList\.add\('bg-white\/80', 'shadow-sm'\);/g,
    "nav.classList.add('bg-[#0a714e]/80', 'shadow-sm');"
);

fs.writeFileSync(clientScriptsPath, clientScriptsContent, 'utf8');
console.log('Updated ClientScripts.tsx');
