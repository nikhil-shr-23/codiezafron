import React from 'react';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Mastering Dynamic Programming: A Comprehensive Guide",
    excerpt: "Learn the fundamental principles of dynamic programming and how to apply them to solve complex problems.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80",
    date: "Mar 15, 2024"
  },
  {
    title: "Top Interview Questions at Tech Giants",
    excerpt: "Common coding challenges you'll face at FAANG companies and how to tackle them effectively.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
    date: "Mar 12, 2024"
  },
  {
    title: "System Design: Building Scalable Applications",
    excerpt: "Essential concepts and best practices for designing large-scale distributed systems.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    date: "Mar 10, 2024"
  }
];

export default function BlogSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Latest from our blog</h2>
          <a href="#" className="text-black flex items-center gap-2 hover:gap-3 transition-all">
            View all posts <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.title} className="group">
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <time className="text-sm text-gray-500">{post.date}</time>
              <h3 className="text-xl font-semibold mt-2 mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}