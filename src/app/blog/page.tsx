import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function BlogIndex() {
  const allPostsData = getSortedPostsData();

  return (
    <main className="pt-24 sm:pt-28 lg:pt-40 pb-24 bg-[#fdfaf6] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h1 className="font-serif text-[36px] sm:text-[48px] md:text-[60px] text-[#1a1a1a] tracking-tight leading-[1.1] mb-6">
                Restaurant insights &<br/>
                <span className="text-[#0a714e] italic">platform news.</span>
            </h1>
            <p className="text-[16px] sm:text-[18px] text-gray-600 leading-relaxed max-w-2xl mx-auto font-medium">
                Read our latest tips, strategies, and updates on how to run a more profitable and efficient restaurant.
            </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {allPostsData.map(({ id, date, title, excerpt, coverImage }) => (
            <Link href={`/blog/${id}`} key={id} className="group block bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                    <img 
                      src={coverImage} 
                      alt={title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                    <div className="text-[13px] font-bold text-[#0a714e] tracking-wider uppercase mb-3">
                      {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <h3 className="text-[24px] font-bold text-[#1a1a1a] mb-4 group-hover:text-[#0a714e] transition-colors leading-tight">
                      {title}
                    </h3>
                    <p className="text-[15px] text-gray-600 leading-relaxed mb-6 flex-grow">
                      {excerpt}
                    </p>
                    <div className="flex items-center text-[15px] font-semibold text-[#1a1a1a] group-hover:text-[#0a714e] transition-colors mt-auto">
                      Read Article
                      <span className="material-symbols-outlined text-[18px] ml-1 transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
