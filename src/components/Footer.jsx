// "use client";

// import { useState, useEffect } from "react";
// import { Twitter, Github, Linkedin, Instagram, Facebook } from "lucide-react";
// import useSubscriptionStore from "@/store/subscriptionStore";
// import { toast } from "vyrn";

// export default function Footer() {
//   const [email, setEmail] = useState("");

//   const { subscribeEmail, isLoading, isSubscribed, resetSubscription } =
//     useSubscriptionStore();

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     subscribeEmail(email);
//   };

//   useEffect(() => {
//     if (isSubscribed) {
//       // ✅ Toast on success
//       toast.success("Thanks for subscribing! 🚀");

//       setEmail("");

//       const timer = setTimeout(() => {
//         resetSubscription();
//       }, 2000);

//       return () => clearTimeout(timer);
//     }
//   }, [isSubscribed, resetSubscription]);

//   return (
//     <footer className="bg-black/90 py-16 border-t border-white/10 text-gray-400">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* TOP FOOTER GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {/* LOGO + ABOUT */}
//           <div>
//             <div className="flex items-center gap-3">
//               <img
//                 src="/Orbitra.png"
//                 alt="Orbitra Logo"
//                 className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform duration-300"
//               />
//               {/* <h2 className="text-white font-semibold text-2xl">Orbitra</h2> */}
//             </div>

//             <p className="mt-4 text-gray-400 leading-relaxed">
//               Build, automate, and monitor your workflows with Orbitra — a
//               futuristic no-code automation platform.
//             </p>

//             {/* SOCIAL ICONS */}
//             <div className="flex gap-4 mt-5">
//               <a
//                 href="https://www.facebook.com/share/1G3DC56GTE/"
//                 className="w-10 h-10 rounded-full border border-white/10 flex justify-center items-center hover:border-cyan-400 hover:text-cyan-400 transition cursor-pointer"
//               >
//                 <Facebook size={18} />
//               </a>

//               <a
//                 href="https://github.com/techOrbitra"
//                 className="w-10 h-10 rounded-full border border-white/10 flex justify-center items-center hover:border-cyan-400 hover:text-cyan-400 transition cursor-pointer"
//               >
//                 <Github size={18} />
//               </a>

//               <a
//                 href="https://www.linkedin.com/company/techorbitra/"
//                 className="w-10 h-10 rounded-full border border-white/10 flex justify-center items-center hover:border-cyan-400 hover:text-cyan-400 transition cursor-pointer"
//               >
//                 <Linkedin size={18} />
//               </a>

//               <a
//                 href="https://www.instagram.com/orbit_ra?igsh=MW5tbnVrM2EwbDUzcQ=="
//                 className="w-10 h-10 rounded-full border border-white/10 flex justify-center items-center hover:border-cyan-400 hover:text-cyan-400 transition cursor-pointer"
//               >
//                 <Instagram size={18} />
//               </a>
//             </div>
//           </div>

//           {/* PAGE LINKS */}
//           <div className="flex md:justify-center">
//             <div>
//               <h3 className="text-white font-semibold text-lg mb-4">Pages</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <a href="/" className="hover:text-cyan-400">
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/features" className="hover:text-cyan-400">
//                     Products
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/blogs" className="hover:text-cyan-400">
//                     Blogs
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/about" className="hover:text-cyan-400">
//                     About
//                   </a>
//                 </li>
//                 <li>
//                   <a href="/contact" className="hover:text-cyan-400">
//                     Contact
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* NEWSLETTER */}
//           <div>
//             <h3 className="text-white font-semibold text-xl mb-4">
//               Stay Updated
//             </h3>
//             <p className="text-gray-400 mb-4">
//               Get updates and automation tips directly in your inbox.
//             </p>

//             <form
//               className="flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden"
//               onSubmit={handleSubscribe}
//             >
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="bg-transparent px-4 py-3 text-white w-full outline-none"
//               />
//               <button
//                 className="px-5 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium"
//                 type="submit"
//                 disabled={isLoading}
//               >
//                 {isLoading ? "..." : "Subscribe"}
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* COPYRIGHT */}
//         <div className="mt-12 border-t border-white/10 pt-6 text-center">
//           © {new Date().getFullYear()} Orbitra. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { Twitter, Github, Linkedin, Instagram, Facebook } from "lucide-react";
import useSubscriptionStore from "@/store/subscriptionStore";
import { useToast } from "vyrn"; // Changed from import { toast }

export default function Footer() {
  const [email, setEmail] = useState("");
  const { subscribeEmail, isLoading, isSubscribed, resetSubscription } =
    useSubscriptionStore();

  const toast = useToast(); // ✅ Initialize toast hook

  const handleSubscribe = (e) => {
    e.preventDefault();
    subscribeEmail(email);
  };

  useEffect(() => {
    if (isSubscribed) {
      // ✅ Toast on success
      toast.success("Thanks for subscribing! 🚀");

      setEmail("");

      const timer = setTimeout(() => {
        resetSubscription();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isSubscribed, resetSubscription]); // ✅ Added toast to dependencies

  return (
    <footer className="bg-black/90 py-16 border-t border-white/10 text-gray-400">
      <div className="max-w-6xl mx-auto px-6">
        {/* TOP FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* LOGO + ABOUT */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/Orbitra.png"
                alt="Orbitra Logo"
                className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="mt-4 text-gray-400 leading-relaxed">
              Build, automate, and monitor your workflows with Orbitra — a
              futuristic no-code automation platform.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.facebook.com/share/1G3DC56GTE/"
                className="w-10 h-10 rounded-full border border-white/10 flex justify-center items-center hover:border-cyan-400 hover:text-cyan-400 transition cursor-pointer"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://github.com/techOrbitra"
                className="w-10 h-10 rounded-full border border-white/10 flex justify-center items-center hover:border-cyan-400 hover:text-cyan-400 transition cursor-pointer"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/techorbitra/"
                className="w-10 h-10 rounded-full border border-white/10 flex justify-center items-center hover:border-cyan-400 hover:text-cyan-400 transition cursor-pointer"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://www.instagram.com/orbit_ra?igsh=MW5tbnVrM2EwbDUzcQ=="
                className="w-10 h-10 rounded-full border border-white/10 flex justify-center items-center hover:border-cyan-400 hover:text-cyan-400 transition cursor-pointer"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* PAGE LINKS */}
          <div className="flex md:justify-center">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Pages</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/" className="hover:text-cyan-400">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/features" className="hover:text-cyan-400">
                    Products
                  </a>
                </li>
                <li>
                  <a href="/blogs" className="hover:text-cyan-400">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-cyan-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-cyan-400">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4">
              Get updates and automation tips directly in your inbox.
            </p>

            <form
              className="flex items-center bg-white/5 border border-white/10 rounded-xl overflow-hidden"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent px-4 py-3 text-white w-full outline-none"
              />
              <button
                className="px-5 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-medium"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          © {new Date().getFullYear()} Orbitra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
