const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
    const fullPath = path.join(__dirname, '..', filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    for (const [search, replace] of replacements) {
        content = content.replace(search, replace);
    }
    fs.writeFileSync(fullPath, content, 'utf8');
}

// 1. Footer.tsx
replaceInFile('src/components/Footer.tsx', [
    ["India's most intelligent", "The world's most intelligent"],
    ["Made with ❤️ in India", "Made with ❤️ for the world"]
]);

// 2. pricing/page.tsx
replaceInFile('src/app/pricing/page.tsx', [
    ["across India", "worldwide"],
    ["Indian compliance", "global compliance"],
    ["GST-ready with proper GSTIN support, tax breakdowns, and export-ready formats for your CA", "ready with proper tax compliance, automated breakdowns, and export-ready formats for your accountant"]
]);

// 3. page.tsx
replaceInFile('src/app/page.tsx', [
    ["Indian restaurants", "modern restaurants"],
    [">india<", ">public<"], // changing the material symbol from india to public (globe)
    ["Made for India", "Built for Scale"],
    ["Rupee pricing. GST-ready billing. UPI integration. Veg/Non-veg indicators. Built by Indians, for Indian restaurants.", "Multi-currency pricing. Local tax-ready billing. Flexible integrations. Built by hospitality experts, for modern restaurants."],
    ["The future of Indian<br/>restaurants starts here", "The future of<br/>restaurants starts here"]
]);

// 4. layout.tsx
replaceInFile('src/app/layout.tsx', [
    ["India's #1", "The World's #1"],
    ["India's most", "the world's most"]
]);

// 5. how-it-works/page.tsx
replaceInFile('src/app/how-it-works/page.tsx', [
    ["Built for India — clear dietary markers", "Built for everyone — clear dietary markers"]
]);

console.log('Global copy updates completed.');
