"use client";

import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-purple-200/50 relative data-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Direct Invitation */}
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-semibold uppercase tracking-widest text-violet-700 mb-2">
              Contact
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181135] leading-tight">
              Let&apos;s build data-driven solutions together.
            </h2>

            <p className="text-base sm:text-lg text-[#4a4365] leading-relaxed max-w-2xl font-normal">
              I am open to full-time roles, internship opportunities, and collaborations in Data Science, Machine Learning, and Analytics. Feel free to reach out directly via email or LinkedIn.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-violet-600 text-white font-semibold text-sm hover:bg-violet-700 shadow-md shadow-violet-600/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 active:scale-95 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Email Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-purple-200/80 text-[#181135] font-semibold text-sm hover:bg-purple-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 shadow-xs active:scale-95"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Cards */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-white/90 border border-purple-200/80 shadow-xl shadow-purple-950/5 space-y-5">
            <h3 className="text-lg font-bold text-[#181135]">
              Contact Details
            </h3>

            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-purple-50/50 border border-purple-100 hover:border-violet-300 hover:bg-purple-100/50 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-purple-100 text-violet-700 group-hover:scale-105 transition-transform flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-semibold text-[#6b6385]">EMAIL</span>
                  <span className="text-sm font-semibold text-[#181135] group-hover:text-violet-700 truncate">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-purple-50/50 border border-purple-100 hover:border-violet-300 hover:bg-purple-100/50 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-indigo-100 text-indigo-700 group-hover:scale-105 transition-transform flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-semibold text-[#6b6385]">PHONE</span>
                  <span className="text-sm font-semibold text-[#181135] group-hover:text-indigo-700 truncate">
                    {personalInfo.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3 rounded-xl bg-purple-50/50 border border-purple-100">
                <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-800 flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-semibold text-[#6b6385]">LOCATION</span>
                  <span className="text-sm font-semibold text-[#181135] truncate">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Direct Links */}
            <div className="pt-3 border-t border-purple-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-[#6b6385]">
                Profiles &amp; Repositories
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-xl bg-purple-50 border border-purple-200/80 text-[#585072] hover:text-[#181135] hover:border-violet-300 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-xl bg-purple-50 border border-purple-200/80 text-[#585072] hover:text-violet-700 hover:border-violet-300 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
