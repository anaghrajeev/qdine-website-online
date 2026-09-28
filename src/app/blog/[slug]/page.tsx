import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  let postData;
  
  try {
      postData = await getPostData(slug);
  } catch (error) {
      notFound();
  }

  return (
    <main className="pt-24 sm:pt-28 lg:pt-32 pb-24 bg-[#fdfaf6] min-h-screen">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-10">
            <Link href="/blog" className="inline-flex items-center text-[15px] font-semibold text-gray-500 hover:text-[#1a1a1a] transition-colors">
                <span className="material-symbols-outlined text-[18px] mr-1">arrow_back</span>
                Back to Blog
            </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
            <div className="text-[14px] font-bold text-[#0a714e] tracking-wider uppercase mb-4">
              {new Date(postData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[52px] text-[#1a1a1a] tracking-tight leading-[1.15] mb-6">
              {postData.title}
            </h1>
            <p className="text-[18px] sm:text-[20px] text-gray-500 leading-relaxed font-medium">
              {postData.excerpt}
            </p>
        </header>

        {/* Cover Image */}
        {postData.coverImage && (
            <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden mb-16 bg-gray-100 shadow-sm border border-gray-100">
                <img 
                    src={postData.coverImage} 
                    alt={postData.title} 
                    className="w-full h-full object-cover" 
                />
            </div>
        )}

        {/* Content */}
        <div 
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#1a1a1a] prose-h2:text-[28px] prose-h2:mt-12 prose-h2:mb-6 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6 prose-a:text-[#0a714e] hover:prose-a:text-[#086042] prose-img:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
        />
        
      </article>
    </main>
  );
}
