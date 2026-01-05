"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useContactStore from "@/store/contactstore";
import { useToast } from "vyrn";

export default function Products() {
  const toast = useToast();

  const { submitContact, loading, success, error, resetStatus } =
    useContactStore();

  const [particles, setParticles] = useState([]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    contactNumber: "",
  });

  // Generate particles (unchanged)
  useEffect(() => {
    const list = Array.from({ length: 25 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 4 + Math.random() * 3,
    }));
    setParticles(list);
  }, []);

  /* ===============================
     FORM HANDLERS
  ================================ */
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Email validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prev) => ({
        ...prev,
        email: emailRegex.test(value)
          ? ""
          : "Please enter a valid email address",
      }));
    }

    // Contact number validation
    if (name === "contactNumber") {
      const numberOnly = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, contactNumber: numberOnly }));

      setErrors((prev) => ({
        ...prev,
        contactNumber:
          numberOnly.length < 10 || numberOnly.length > 15
            ? "Contact number must be 10–15 digits"
            : "",
      }));

      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitContact(formData);
  };

  /* ===============================
     TOAST HANDLING
  ================================ */
  useEffect(() => {
    if (success) {
      toast.success("Thanks for joining our journey 🚀");

      setFormData({
        fullName: "",
        email: "",
        contactNumber: "",
        subject: "",
        message: "",
      });

      resetStatus();
    }

    if (error) {
      toast.error(error);
      resetStatus();
    }
  }, [success, error, toast, resetStatus]);

  // Generate particles ONLY on the client (avoids SSR mismatch)
  useEffect(() => {
    const list = Array.from({ length: 25 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 4 + Math.random() * 3,
    }));
    setParticles(list);
  }, []);

  return (
    <div className="min-h-screen text-white mt-10 px-6 py-20 flex flex-col items-center relative overflow-hidden">
      {/* --- PREMIUM BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Ambient Glow Clouds */}
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/25 blur-[180px] top-[-100px] left-[-150px]" />
        <div className="absolute w-[700px] h-[700px] bg-purple-600/25 blur-[200px] bottom-[-150px] right-[-200px]" />

        {/* Elegant Moving Gradient Wave */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15, x: ["0%", "100%", "0%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute w-full h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent blur-3xl"
        />

        {/* Floating Particles */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full"
            style={{ top: p.top, left: p.left }}
          />
        ))}

        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-[0_0_18px_rgba(34,211,238,0.7)] mb-6 text-center"
      >
        Something Big Is Coming...
      </motion.h1>

      {/* SUBTEXT */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl text-center text-gray-300 leading-relaxed mb-14 text-lg"
      >
        We're crafting next-gen digital products designed to transform how
        creators, founders, and developers build and grow.
        <br />
        <br />
        These tools are powerful. Intelligent. Beautiful. And we can’t wait to
        show them to you.
      </motion.p>

      {/* FUTURISTIC BOX */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="bg-gray-900/40 border border-cyan-500/20 rounded-2xl p-10 mb-16 shadow-[0_0_40px_rgba(34,211,238,0.15)] w-full max-w-3xl backdrop-blur-2xl"
      >
        <motion.h2
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-3xl font-semibold text-cyan-300 text-center mb-4"
        >
          ⚡ A New Digital Universe Is Loading…
        </motion.h2>

        <p className="text-gray-300 text-center">
          We are building futuristic tools powered by automation, creativity,
          and intelligence.
          <br />
          Want early access or beta invites?
        </p>

        <motion.p
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="text-center mt-4 text-cyan-400 font-semibold"
        >
          Be the first to know.
        </motion.p>
      </motion.div>

      {/* CONTACT FORM */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-2xl bg-black/70 border border-cyan-500/20 p-8 rounded-2xl backdrop-blur-xl"
      >
        <h2 className="text-3xl font-semibold text-center mb-6 text-cyan-300">
          Join Our Journey
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <motion.input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white focus:border-cyan-400 outline-none"
          />

          <motion.input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className={`w-full p-3 rounded-lg bg-black border ${
              errors.email ? "border-red-500" : "border-gray-700"
            } text-white focus:border-cyan-400 outline-none`}
          />

          {errors.email && (
            <p className="text-sm text-red-400">{errors.email}</p>
          )}

          <motion.input
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
            className={`w-full p-3 rounded-lg bg-black border ${
              errors.contactNumber ? "border-red-500" : "border-gray-700"
            } text-white focus:border-cyan-400 outline-none`}
          />

          {errors.contactNumber && (
            <p className="text-sm text-red-400">{errors.contactNumber}</p>
          )}

          <motion.input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white focus:border-cyan-400 outline-none"
          />

          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message or description..."
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white focus:border-cyan-400 outline-none"
          />

          <motion.button
            type="submit"
            disabled={loading || errors.email || errors.contactNumber}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full p-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 font-semibold text-black disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
