import { create } from "zustand";
import api from "@/utils/api";

const useContactStore = create((set) => ({
  loading: false,
  success: false,
  error: null,

  submitContact: async (formData) => {
    try {
      set({ loading: true, error: null, success: false });

      const res = await api.post("/contact", formData);

      set({
        loading: false,
        success: true,
      });

      return res.data;
    } catch (err) {
      set({
        loading: false,
        error:
          err.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    }
  },

  resetStatus: () =>
    set({
      loading: false,
      success: false,
      error: null,
    }),
}));

export default useContactStore;
