// store/blogStore.js
import { create } from "zustand";
import api from "@/utils/api";

const useBlogStore = create((set, get) => ({
  blogs: [],
  isLoaded: false,
  isLoading: false,
  selectedBlog: null, // <-- store single blog

  fetchBlogs: async () => {
    if (get().isLoaded) return;
    set({ isLoading: true });

    try {
      const res = await api.get("/blog/getall");
      set({
        blogs: res.data?.blogs || [],
        isLoaded: true,
        isLoading: false,
      });
    } catch (err) {
      console.error("Error fetching blogs", err);
      set({ isLoading: false });
    }
  },

  fetchBlogById: async (id) => {
    set({ isLoading: true });
    try {
      const res = await api.get(`/blog/getbyid/${id}`);
      set({
        selectedBlog: res.data.blog || null,
        isLoading: false,
      });
    } catch (err) {
      console.error("Error fetching blog by ID", err);
      set({ isLoading: false });
    }
  },
}));

export default useBlogStore;
