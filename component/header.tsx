"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "HOME", href: "#" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "PROJECTS", href: "#projects" },
  // { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll listener logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past 120px for shadow
      if (currentScrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll down/up visibility logic
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scroll down -> hide navbar
        setVisible(false);
      } else {
        // Scroll up -> show navbar
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        style={{
          transform: visible ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
        className={`fixed top-0 left-0 right-0 z-50 bg-[#ecf0f3]  transition-shadow duration-300 ${isScrolled && visible ? "shadow-lg shadow-black/20" : "border-b border-gray-500"
          }`}
      >
        <div className="max-w-8xl mx-auto px-6 md:px-16 lg:px-20 h-20 flex items-center justify-between">

          {/* 1. Left: Profile Image + Logo Text */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-bold text-xl tracking-wider text-gray-800 uppercase">
              PORTFOLIO
            </span>
          </Link>

          {/* 2. Middle: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-gray-700 hover:text-red-600 tracking-widest transition-colors duration-200 uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* 3. Right: Call Button & Mobile Hamburger Toggle */}
          <div className="flex items-center gap-4">

            {/* Call Action Button */}
            <HeadButton />

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-black focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>

        {/* 4. Mobile Drawer Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#ecf0f3] border-t border-gray-200 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-semibold text-gray-700 hover:text-red-600 tracking-wider py-2 transition-colors uppercase"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile View Call Button */}
            <div className="pt-2">
              <a
                href="tel:+1234567890"
                className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition-all"
              >
                <FiPhoneCall size={18} />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}


function HeadButton() {
  return (
    <a
      href="tel:+1234567890" // Apna phone number replace karein
      aria-label="Call Us"
      className="relative flex items-center max-md:hidden justify-center gap-2 px-5 h-12 rounded-full bg-[#ecf0f3] text-red-600 shadow-[-4px_-4px_10px_rgba(255,255,255,0.8),4px_4px_10px_rgba(0,0,0,0.1)] hover:shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.8),inset_4px_4px_8px_rgba(0,0,0,0.1)] hover:text-green-600 transition-all duration-300"
    >
      <FiPhoneCall size={18} />
      <span className="text-xs font-bold tracking-wider uppercase text-gray-800">
        Let's Connect
      </span>
    </a>
  );
}