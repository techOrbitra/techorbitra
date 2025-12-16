"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import useBlogStore from "@/store/blogStore";

export default function Blog() {
  const { blogs, fetchBlogs, isLoading } = useBlogStore();

  // Format date into: "Jan 14, 2025"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Remove all HTML tags
  const stripHtml = (htmlString) => {
    if (!htmlString) return "";
    return htmlString.replace(/<[^>]+>/g, "");
  };

  // Fetch only once (Zustand prevents refetching)
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-semibold text-center mb-12"
      >
        Latest Blog Posts
      </motion.h2>

      {/* Loading Skeleton */}
      {isLoading && (
        <p className="text-center text-gray-400 text-lg">Loading blogs...</p>
      )}

      {/* Blog Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogs?.map((post, i) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative group bg-gray-900/70 border border-white/10 rounded-2xl overflow-hidden shadow-lg
                       transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]
                       hover:border-cyan-400/40"
          >
            {/* IMAGE */}
            <div className="relative h-40 overflow-hidden border-b border-white/10">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* shimmer highlight */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
            </div>

            {/* CONTENT */}
            <div className="p-6 relative">
              <p className="text-cyan-400 text-sm">
                {formatDate(post.createdAt)}
              </p>

              <h3 className="text-xl text-white font-semibold mt-2 group-hover:text-cyan-300 transition">
                {post.title}
              </h3>

              <p className="text-gray-300 mt-3 leading-relaxed line-clamp-3">
                {stripHtml(post.content)}
              </p>

              <a
                href={`/blogs/${post._id}`}
                className="inline-block mt-4 text-cyan-400 hover:text-cyan-300 font-medium transition"
              >
                Read More →
              </a>

              {/* Glow accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-40 transition"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* shimmer keyframes */}
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}
      </style>
    </section>
  );
}
