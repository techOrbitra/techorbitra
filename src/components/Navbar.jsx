// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X, Home, Package, FileText, Info, Phone } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const menuItems = [
//   { name: "Home", href: "/", icon: Home },
//   { name: "Products", href: "/products", icon: Package },
//   { name: "Blogs", href: "/blogs", icon: FileText },
//   { name: "About", href: "/about", icon: Info },
//   { name: "Contact", href: "/contact", icon: Phone },
// ];

// const Navbar = () => {
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const [scrollDirection, setScrollDirection] = useState("up");
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       const diff = currentScrollY - lastScrollY;

//       setScrolled(currentScrollY > 10);

//       if (!isOpen && Math.abs(diff) > 4) {
//         setScrollDirection(diff > 0 ? "down" : "up");
//         setLastScrollY(currentScrollY);
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       const diff = currentScrollY - lastScrollY;

//       setScrolled(currentScrollY > 10);

//       if (Math.abs(diff) > 4) {
//         setScrollDirection(diff > 0 ? "down" : "up");
//         setLastScrollY(currentScrollY);
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   return (
//     <motion.nav
//       initial={{ y: 0 }}
//       animate={{
//         y: scrollDirection === "down" && scrolled ? "-100%" : 0,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 260,
//         damping: 30,
//       }}
//       className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
//         ${scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-black"}`}
//       style={{ fontFamily: "Inter, sans-serif" }}
//     >
//       {/* bottom border gradient */}
//       <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-60" />

//       <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 relative">
//         {/* Logo */}
//         <Link href="/" className="flex items-center group">
//           <img
//             src="/Orbitra.png"
//             alt="Orbitra Logo"
//             className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform duration-300"
//           />
//         </Link>

//         {/* Desktop Menu */}

//         <div className="hidden md:flex items-center space-x-5 lg:space-x-8 tracking-wide">
//           {menuItems.map((item, index) => (
//             <motion.div
//               key={item.name}
//               initial={{ opacity: 0, y: -6 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.35, delay: index * 0.07 }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <Link
//                 href={item.href}
//                 className={`relative font-medium text-sm lg:text-base transition-all duration-200 group
//                   ${
//                     pathname === item.href
//                       ? "text-cyan-400 drop-shadow-[0_0_6px_rgba(0,255,255,0.7)]"
//                       : "text-gray-300 hover:text-cyan-400"
//                   }
//                 `}
//               >
//                 {item.name}

//                 {/* underline */}
//                 <span
//                   className={`absolute left-0 -bottom-1 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 transition-all duration-300
//                     ${
//                       pathname === item.href
//                         ? "w-full"
//                         : "w-0 group-hover:w-full"
//                     }
//                   `}
//                 />
//               </Link>
//             </motion.div>
//           ))}
//         </div>

//         {/* Desktop CTA */}
//         <motion.div
//           className="hidden md:block"
//           initial={{ opacity: 0, y: -6 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.35, delay: 0.35 }}
//           whileHover={{ scale: 1.06 }}
//         >
//           <Link
//             href="/contact"
//             className="relative px-4 lg:px-6 py-2 lg:py-3 rounded-full text-black font-semibold text-sm lg:text-base bg-linear-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-md hover:shadow-lg transition-all duration-300"
//           >
//             <span className="absolute inset-0 bg-linear-to-r from-cyan-300 to-blue-400 opacity-0 hover:opacity-100 transition-opacity duration-300" />
//             <span className="relative z-10">Get Started</span>
//           </Link>
//         </motion.div>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden text-gray-100 hover:text-cyan-400 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
//           onClick={() => setIsOpen((prev) => !prev)}
//         >
//           {isOpen ? <X size={20} /> : <Menu size={20} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ y: "100%" }}
//             animate={{ y: 0 }}
//             exit={{ y: "100%" }}
//             transition={{
//               type: "spring",
//               damping: 25,
//               stiffness: 300,
//             }}
//             className="fixed inset-0 z-40 bg-black/80 backdrop-blur-lg md:hidden"
//             onClick={() => setIsOpen(false)}
//           >
//             <div
//               className="absolute bottom-0 left-0 w-full bg-black/95 rounded-t-2xl px-4 sm:px-6 py-6 shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex justify-center mb-6">
//                 <button
//                   onClick={() => setIsOpen(false)}
//                   className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400"
//                 >
//                   <X size={20} />
//                 </button>
//               </div>

//               <div className="space-y-5 sm:space-y-6">
//                 {menuItems.map((item) => {
//                   const Icon = item.icon;
//                   return (
//                     <Link
//                       key={item.name}
//                       href={item.href}
//                       onClick={() => setIsOpen(false)}
//                       className={`flex items-center space-x-4 font-medium text-lg py-3 px-4 rounded-lg transition-all duration-200
//                         ${
//                           pathname === item.href
//                             ? "text-cyan-400 bg-gray-800/60 shadow-[0_0_10px_rgba(0,255,255,0.4)]"
//                             : "text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50"
//                         }
//                       `}
//                     >
//                       <Icon
//                         size={22}
//                         className={`${
//                           pathname === item.href
//                             ? "text-cyan-400"
//                             : "text-cyan-400/70"
//                         }`}
//                       />
//                       <span>{item.name}</span>
//                     </Link>
//                   );
//                 })}
//               </div>

//               <div className="mt-8 flex justify-center">
//                 <Link
//                   href="/contact"
//                   onClick={() => setIsOpen(false)}
//                   className="relative px-8 py-4 bg-linear-to-r from-cyan-400 to-blue-500 text-black rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
//                 >
//                   <span className="relative z-10">Get Started</span>
//                 </Link>
//               </div>

//               <div className="mt-6 flex justify-center">
//                 <div className="w-12 h-1 bg-gray-600 rounded-full" />
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home, Package, FileText, Info, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Products", href: "/products", icon: Package },
  { name: "Blogs", href: "/blogs", icon: FileText },
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Phone },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  // Single scroll handler - removed duplicate
 useEffect(() => {
  // RUN ONLY ON DESKTOP (md and above)
  if (window.innerWidth < 768) return;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const diff = currentScrollY - lastScrollY;

    setScrolled(currentScrollY > 10);

    // Change direction only when menu is closed
    if (!isOpen && Math.abs(diff) > 4) {
      setScrollDirection(diff > 0 ? "down" : "up");
      setLastScrollY(currentScrollY);
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY, isOpen]);


  // Handle body scroll lock and reset navbar position when menu opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setScrollDirection("up"); // Reset navbar to visible position
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{
        // Fixed: Added !isOpen condition to prevent hiding when mobile menu is open
        y: scrollDirection === "down" && scrolled && !isOpen ? "-100%" : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 30,
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
        ${scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-black"}`}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* bottom border gradient */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-cyan-400 via-blue-500 to-cyan-400 opacity-60" />

      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <img
            src="/Orbitra.png"
            alt="Orbitra Logo"
            className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-5 lg:space-x-8 tracking-wide">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href={item.href}
                className={`relative font-medium text-sm lg:text-base transition-all duration-200 group
                  ${
                    pathname === item.href
                      ? "text-cyan-400 drop-shadow-[0_0_6px_rgba(0,255,255,0.7)]"
                      : "text-gray-300 hover:text-cyan-400"
                  }
                `}
              >
                {item.name}

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500 transition-all duration-300
                    ${
                      pathname === item.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }
                  `}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop CTA */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.35 }}
          whileHover={{ scale: 1.06 }}
        >
          <Link
            href="/contact"
            className="relative px-4 lg:px-6 py-2 lg:py-3 rounded-full text-black font-semibold text-sm lg:text-base bg-linear-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <span className="absolute inset-0 bg-linear-to-r from-cyan-300 to-blue-400 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Get Started</span>
          </Link>
        </motion.div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-100 hover:text-cyan-400 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-lg md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="absolute bottom-0 left-0 w-full bg-black/95 rounded-t-2xl px-4 sm:px-6 py-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-center mb-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-5 sm:space-y-6">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-4 font-medium text-lg py-3 px-4 rounded-lg transition-all duration-200
                        ${
                          pathname === item.href
                            ? "text-cyan-400 bg-gray-800/60 shadow-[0_0_10px_rgba(0,255,255,0.4)]"
                            : "text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50"
                        }
                      `}
                    >
                      <Icon
                        size={22}
                        className={`${
                          pathname === item.href
                            ? "text-cyan-400"
                            : "text-cyan-400/70"
                        }`}
                      />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-8 flex justify-center">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="relative px-8 py-4 bg-linear-to-r from-cyan-400 to-blue-500 text-black rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="relative z-10">Get Started</span>
                </Link>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="w-12 h-1 bg-gray-600 rounded-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
