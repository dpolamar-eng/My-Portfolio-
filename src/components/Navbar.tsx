"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#e8ddfa]/95 backdrop-blur-md border-b border-purple-300/60 shadow-sm shadow-purple-950/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Desktop Navigation - Dark, Bold, High-Contrast */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7 lg:gap-9"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-[#090314] hover:text-violet-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 rounded-md py-1 tracking-tight"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-violet-700 text-white hover:bg-violet-800 hover:shadow-md hover:shadow-violet-700/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 active:scale-95"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden ml-auto">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="p-2 rounded-lg text-[#090314] hover:text-violet-950 hover:bg-purple-100/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#e8ddfa]/98 border-b border-purple-300/80 px-6 pt-4 pb-6 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-[#090314] hover:text-violet-950 py-2 border-b border-purple-200/80"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center block py-2.5 rounded-xl bg-violet-700 text-white font-semibold text-sm hover:bg-violet-800 shadow-xs"
              >
                Connect with Disha
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
