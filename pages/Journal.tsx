
import React from 'react';
import { Post } from '../types';

interface JournalProps {
  posts: Post[];
}

const Journal: React.FC<JournalProps> = ({ posts }) => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-serif font-bold mb-4">소식 / 칼럼</h1>
          <p className="text-gray-500">연구소의 따뜻한 일상과 전문적인 심리 칼럼을 전합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-6 aspect-[4/3]">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 text-[10px] font-bold uppercase tracking-wider text-brand-charcoal">
                    {post.category}
                  </span>
                </div>
              </div>
              <div>
                <time className="text-xs text-brand-wood font-medium mb-3 block">{post.date}</time>
                <h2 className="text-xl font-bold mb-4 group-hover:text-brand-wood transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-brand-charcoal">
                  Read More
                  <div className="ml-2 w-8 h-[1px] bg-brand-charcoal group-hover:w-12 transition-all"></div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
