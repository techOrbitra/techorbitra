// utils/api.js

import axios from "axios";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
// Example: http://localhost:5000

// ------------------------------
// AXIOS INSTANCE
// ------------------------------
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // sends cookies / auth tokens
  headers: {
    "Content-Type": "application/json",
  },
});
export default api;
