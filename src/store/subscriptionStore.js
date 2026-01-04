import { create } from "zustand";
import api from "@/utils/api";

const useSubscriptionStore = create((set) => ({
  isLoading: false,
  isSubscribed: false,

  subscribeEmail: async (email) => {
    if (!email) return;

    set({ isLoading: true, isSubscribed: false });

    try {
      await api.post("/subscription/subscribe", { email });

      // backend always returns 200 (success or silent ignore)
      set({
        isSubscribed: true,
        isLoading: false,
      });
    } catch (err) {
      console.error("Error subscribing email", err);
      set({ isLoading: false });
    }
  },

  resetSubscription: () => {
    set({ isSubscribed: false });
  },
}));

export default useSubscriptionStore;
