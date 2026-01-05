"use client";

import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import useContactStore from "@/store/contactstore";
import { useToast } from "vyrn";

const ContactPage = () => {
  const toast = useToast();

  const { submitContact, loading, success, error, resetStatus } =
    useContactStore();

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    // 📧 Email validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prev) => ({
        ...prev,
        email: emailRegex.test(value)
          ? ""
          : "Please enter a valid email address",
      }));
    }

    // 📱 Contact number validation (digits only, 10–15)
    if (name === "contactNumber") {
      const digitsOnly = value.replace(/\D/g, "");

      setFormData((prev) => ({
        ...prev,
        contactNumber: digitsOnly,
      }));

      setErrors((prev) => ({
        ...prev,
        contactNumber:
          digitsOnly.length < 10 || digitsOnly.length > 15
            ? "Contact number must be 10–15 digits"
            : "",
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
      toast.success("Message sent successfully 🚀");

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

  return (
    <div className="min-h-screen  my-26 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to build something amazing together? Send us a message and
            let's create magic.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info & Social */}
          <div className="space-y-8 lg:sticky lg:top-12 lg:self-start">
            {/* Contact Info Cards */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-cyan-400">
                <FaMapMarkerAlt className="text-3xl" />
                Visit Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition">
                  <FaMapMarkerAlt className="text-xl text-cyan-400" />
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-gray-400">Ahmedabad, Gujarat, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition">
                  <FaPhone className="text-xl text-green-400" />
                  <div>
                    <p className="font-semibold text-white">Call Us</p>
                    <p className="text-gray-400">+91 94294 68900</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition">
                  <FaEnvelope className="text-xl text-orange-400" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-gray-400">techorbitra@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                Follow Us
              </h3>
              <div className="flex gap-4 flex-wrap">
                <SocialIcon
                  url="https://www.linkedin.com/company/techorbitra/"
                  style={{ height: 48, width: 48 }}
                  bgColor="#0077b5"
                  target="_blank"
                />
                <SocialIcon
                  url="https://github.com/techOrbitra"
                  style={{ height: 48, width: 48 }}
                  bgColor="#333"
                  target="_blank"
                />
                <SocialIcon
                  url="https://www.instagram.com/orbit_ra?igsh=MW5tbnVrM2EwbDUzcQ=="
                  style={{ height: 48, width: 48 }}
                  bgColor="#e4405f"
                  target="_blank"
                />
                <SocialIcon
                  url="https://www.facebook.com/share/1G3DC56GTE/"
                  style={{ height: 48, width: 48 }}
                  bgColor="#1877F2"
                  target="_blank"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          {/* Right Column - Contact Form */}
          <div>
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/10">
              <h3 className="text-3xl font-bold mb-8 text-cyan-400">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 bg-white/5 placeholder-gray-400 text-white hover:bg-white/10"
                    />
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      required
                      placeholder="Phone number"
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 bg-white/5 placeholder-gray-400 text-white hover:bg-white/10 ${
                        errors.contactNumber
                          ? "border-red-500"
                          : "border-white/20"
                      }`}
                    />

                    {errors.contactNumber && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.contactNumber}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 bg-white/5 placeholder-gray-400 text-white hover:bg-white/10 ${
                      errors.email ? "border-red-500" : "border-white/20"
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 bg-white/5 placeholder-gray-400 text-white hover:bg-white/10"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 border border-white/20 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-200 resize-vertical bg-white/5 placeholder-gray-400 text-white hover:bg-white/10"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading || errors.email || errors.contactNumber}
                  className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="mt-20">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-center text-cyan-400">
              Our Location
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.308671374037!2d72.57309901544879!3d23.022505984940693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84e4b5b2f5ff%3A0x3c8e9b5d8f2e4a0c!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1701152400000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="company-location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
