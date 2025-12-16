// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import useBlogStore from "@/store/blogStore";
// import { useRouter } from "next/navigation";
// import { slugify } from "@/utils/slugify";

// export default function BlogsPage() {
//   const { blogs, fetchBlogs, isLoading } = useBlogStore();
//   const router = useRouter();

//   const [search, setSearch] = useState("");

//   // Format date: Jan 14, 2025
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

//   useEffect(() => {
//     fetchBlogs(); // Zustand prevents refetching
//   }, []);

//   // Filter blogs by title
//   const filteredBlogs = blogs.filter((post) =>
//     post.title.toLowerCase().includes(search.toLowerCase())
//   );

//   // Navigate to blog details page
//   const handleCardClick = (post) => {
//     router.push(`/blogs/${post._id}`); // just use the ID
//   };

//   return (
//     <section className="py-24 px-6 max-w-6xl mx-auto">
//       {/* ---------- PAGE HEADING ---------- */}
//       <div className="text-center mb-12">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-semibold mt-10 text-amber-50"
//         >
//           Explore Our Blogs
//         </motion.h2>

//         <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
//           Stay updated with our latest insights, articles, and automation
//           tutorials.
//         </p>
//       </div>

//       {/* ---------- SEARCH BAR ---------- */}
//       <div className="flex justify-center mb-10">
//         <div className="w-full max-w-lg relative">
//           <input
//             type="text"
//             placeholder="Search blogs by title..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full px-5 py-3 rounded-xl bg-gray-900/70 border border-white/10 text-white
//                        focus:border-cyan-400 outline-none transition-all"
//           />
//           <span className="absolute right-4 top-3.5 text-gray-400">🔍</span>
//         </div>
//       </div>

//       {/* LOADING */}
//       {isLoading && (
//         <p className="text-center text-gray-400 text-lg">Loading blogs...</p>
//       )}

//       {/* NO RESULTS */}
//       {!isLoading && filteredBlogs.length === 0 && (
//         <p className="text-center text-gray-400 text-lg">
//           No blogs found for "<span className="text-cyan-400">{search}</span>"
//         </p>
//       )}

//       {/* ---------- BLOG CARDS ---------- */}
//       <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//         {filteredBlogs.map((post, i) => (
//           <motion.div
//             key={post._id}
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: i * 0.1 }}
//             viewport={{ once: true }}
//             className="relative group bg-gray-900/70 border border-white/10 rounded-2xl overflow-hidden shadow-lg
//                        transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(0,255,255,0.25)]
//                        hover:border-cyan-400/40 cursor-pointer"
//             onClick={() => handleCardClick(post)} // <-- Entire card clickable
//           >
//             {/* IMAGE */}
//             <div className="relative h-40 overflow-hidden border-b border-white/10">
//               <img
//                 src={post.imageUrl}
//                 alt={post.title}
//                 className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
//               />

//               {/* shimmer highlight */}
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite]"></div>
//             </div>

//             {/* CONTENT */}
//             <div className="p-6 relative">
//               <p className="text-cyan-400 text-sm">
//                 {formatDate(post.createdAt)}
//               </p>

//               <h3 className="text-xl text-white font-semibold mt-2 group-hover:text-cyan-300 transition">
//                 {post.title}
//               </h3>

//               <p className="text-gray-300 mt-3 leading-relaxed line-clamp-3">
//                 {post.content}
//               </p>

//               <div className="inline-block mt-4 text-cyan-400 font-medium transition">
//                 Read More →
//               </div>

//               {/* Glow accent */}
//               <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/10 blur-2xl rounded-full opacity-0 group-hover:opacity-40 transition"></div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* shimmer keyframes */}
//       <style>
//         {`
//           @keyframes shimmer {
//             0% { transform: translateX(-100%); }
//             100% { transform: translateX(100%); }
//           }
//         `}
//       </style>
//     </section>
//   );
// }

"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import useBlogStore from "@/store/blogStore";
import { useRouter } from "next/navigation";

export default function Blog() {
  const { blogs, fetchBlogs, isLoading } = useBlogStore();
  const router = useRouter();

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

  // Fetch blogs once
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Navigate to blog details page
  const handleCardClick = (post) => {
    router.push(`/blogs/${post._id}`);
  };

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
                       hover:border-cyan-400/40 cursor-pointer"
            onClick={() => handleCardClick(post)}
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

              <div className="inline-block mt-4 text-cyan-400 font-medium transition">
                Read More →
              </div>

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
