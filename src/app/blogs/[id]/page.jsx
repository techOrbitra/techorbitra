"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import useBlogStore from "@/store/blogStore";

export default function BlogDetails() {
  const params = useParams();
  const router = useRouter();
  const blogId = params?.id;

  const { selectedBlog, fetchBlogById, isLoading } = useBlogStore();

  useEffect(() => {
    if (!blogId) {
      router.push("/blogs");
      return;
    }
    fetchBlogById(blogId);
  }, [blogId]);

  if (isLoading || !selectedBlog) {
    return (
      <p className="text-center text-gray-400 text-lg py-24">Loading blog...</p>
    );
  }

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto md:mt-10">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        {selectedBlog.title}
      </h1>
      <p className="text-cyan-400 mb-8">
        {new Date(selectedBlog.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
      <img
        src={selectedBlog.imageUrl}
        className="w-full max-h-[420px] object-cover rounded-2xl border border-white/10 shadow-lg"
      />
      <div className="blog-content mt-10 max-w-3xl mx-auto text-gray-300">
        <div
          className="prose prose-invert prose-lg leading-relaxed [&>p]:text-justify [&>p]:mb-4
               [&>h2]:font-semibold [&>h2]:text-2xl [&>h2]:mb-6
               [&>h3]:font-semibold [&>h3]:text-xl [&>h3]:mb-5
               [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4
               [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4
               [&>blockquote]:border-l-4 [&>blockquote]:border-gray-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:mb-4
               [&>img]:my-6 [&>img]:rounded-lg [&>img]:shadow-md
               [&>a]:text-blue-400 [&>a]:underline [&>a]:hover:text-blue-300"
          dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
        />
      </div>
    </section>
  );
}
