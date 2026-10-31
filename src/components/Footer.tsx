"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-purple-200/80 bg-[#ece6f7] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-200/60">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-bold text-[#181135] text-base tracking-tight">
              {personalInfo.name}
            </span>
            <span className="text-xs text-[#6b6385] mt-1 font-mono">
              Data Scientist &amp; Machine Learning Practitioner
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg bg-white/70 border border-purple-200/60 text-[#585072] hover:text-[#181135] hover:bg-white hover:border-purple-300 transition-colors shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg bg-white/70 border border-purple-200/60 text-[#585072] hover:text-violet-700 hover:bg-white hover:border-purple-300 transition-colors shadow-xs"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2 rounded-lg bg-white/70 border border-purple-200/60 text-[#585072] hover:text-violet-700 hover:bg-white hover:border-purple-300 transition-colors shadow-xs"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-lg bg-white/70 border border-purple-200/60 text-[#585072] hover:text-[#181135] hover:bg-white transition-colors cursor-pointer ml-2 shadow-xs"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6b6385] font-mono">
          <p>© {year} Disha Polamarasetti. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Built with Next.js 16, TypeScript &amp; Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
