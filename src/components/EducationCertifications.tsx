"use client";

import React, { useEffect, useRef, useState } from "react";
import { educationData, certificationsData } from "../data/portfolioData";
import { CheckCircle } from "lucide-react";
import { getCompanyLogo } from "./CompanyLogos";

export default function EducationCertifications() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    // Check user preference for reduced motion
    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) {
        setIsInView(true);
        return;
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Bidirectional in-and-out animation
          setIsInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "-30px 0px -30px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-20 md:py-28 border-t border-purple-200/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Certifications / Industry Credentials (Comes one by one from LEFT) */}
          <div className="lg:col-span-6 space-y-6">
            <div
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translate3d(0, 0, 0)" : "translate3d(-40px, 0, 0)",
                transitionProperty: "opacity, transform",
                transitionDuration: "700ms",
                transitionDelay: "0ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                willChange: "opacity, transform",
              }}
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-violet-700 mb-2">
                Certifications
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#181135] mb-2">
                Industry Credentials
              </h2>
              <p className="text-sm text-[#4a4365]">
                Verified coursework and credentials across data analytics and cloud foundations.
              </p>
            </div>

            <div className="space-y-3">
              {certificationsData.map((cert, cIdx) => {
                // Staggered one by one from left (80ms interval)
                const delay = 80 + cIdx * 80;

                return (
                  <div
                    key={cIdx}
                    style={{
                      opacity: isInView ? 1 : 0,
                      transform: isInView ? "translate3d(0, 0, 0)" : "translate3d(-55px, 0, 0)",
                      transitionProperty: "opacity, transform",
                      transitionDuration: "750ms",
                      transitionDelay: `${delay}ms`,
                      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                      willChange: "opacity, transform",
                    }}
                    className="flex items-center justify-between p-4 rounded-xl bg-white/90 border border-purple-200/70 hover:border-violet-300 hover:bg-white shadow-xs transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="flex-shrink-0">
                        {getCompanyLogo(cert.issuer, "w-9 h-9 rounded-xl shadow-xs overflow-hidden")}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-[#181135] truncate">
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-[#6b6385] mt-0.5">
                          <span className="text-violet-700 font-bold">
                            {cert.issuer}
                          </span>
                          <span>•</span>
                          <span>{cert.category}</span>
                        </div>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono text-[#585072] px-2.5 py-1 rounded bg-purple-50 border border-purple-200/60 ml-2 flex-shrink-0">
                      Verified
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Academic Background / Education (Comes one by one from RIGHT) */}
          <div className="lg:col-span-6 space-y-6">
            <div
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translate3d(0, 0, 0)" : "translate3d(40px, 0, 0)",
                transitionProperty: "opacity, transform",
                transitionDuration: "700ms",
                transitionDelay: "0ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                willChange: "opacity, transform",
              }}
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-violet-700 mb-2">
                Education
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#181135] mb-2">
                Academic Background
              </h2>
              <p className="text-sm text-[#4a4365]">
                Foundation in computational statistics, computer science, and data engineering.
              </p>
            </div>

            <div className="space-y-4">
              {educationData.map((edu, idx) => {
                // Staggered one by one from right (120ms interval)
                const delay = 100 + idx * 120;

                return (
                  <div
                    key={idx}
                    style={{
                      opacity: isInView ? 1 : 0,
                      transform: isInView ? "translate3d(0, 0, 0)" : "translate3d(55px, 0, 0)",
                      transitionProperty: "opacity, transform",
                      transitionDuration: "750ms",
                      transitionDelay: `${delay}ms`,
                      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                      willChange: "opacity, transform",
                    }}
                    className="p-6 rounded-2xl bg-white/90 border border-purple-200/70 hover:border-violet-300 shadow-sm transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[#181135]">
                          {edu.degree}
                        </h3>
                        <div className="text-sm text-violet-700 font-medium mt-0.5">
                          {edu.institution}
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[#585072] bg-purple-50 px-3 py-1 rounded-full border border-purple-200/60 whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>

                    {/* CGPA Score Highlight */}
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-xs font-semibold my-2.5">
                      <span>{edu.scoreType}: {edu.score}</span>
                    </div>

                    {edu.highlights && (
                      <ul className="space-y-1.5 pt-1">
                        {edu.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="text-xs text-[#3b3353] flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-violet-600 mt-0.5 flex-shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
