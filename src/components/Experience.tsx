"use client";

import React, { useState, useEffect } from "react";
import { experienceData } from "../data/portfolioData";
import {
  Calendar,
  CheckCircle2,
  ExternalLink,
  X,
  RotateCw,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { getTechIcon } from "./TechIcons";
import { getCompanyLogo } from "./CompanyLogos";

export default function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const internItem = experienceData[0];

  // Smooth close handler with graceful exit animation
  const handleCloseMatter = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
      setIsFlipping(false);
    }, 260);
  };

  // Keyboard accessibility: ESC key to close modal smoothly
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen && !isClosing) {
        handleCloseMatter();
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen, isClosing]);

  const handleOpenMatter = () => {
    setIsFlipping(true);
    // Smooth micro-delay so the card begins its elegant 3D lift before modal unfolds
    setTimeout(() => {
      setIsModalOpen(true);
    }, 90);
  };

  return (
    <section
      id="experience"
      className="py-20 md:py-28 relative bg-gradient-to-b from-[#d0bbf5]/40 via-[#f6f3fb] to-[#f6f3fb]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-violet-700 mb-2">
            Work Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181135] mb-3">
            Practical data science in agile teams.
          </h2>
          <p className="text-base text-[#4a4365]">
            Translating machine learning and statistical modeling into functional data pipelines, automated preprocessing, and model benchmarking.
          </p>
        </div>

        {/* Compact, Well-Proportioned Internship Box with Fluid 3D Perspective */}
        <div className="w-full" style={{ perspective: "1200px" }}>
          <div
            style={{
              transformStyle: "preserve-3d",
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease",
              transform: isFlipping
                ? "rotateX(-14deg) translateY(-8px) scale(0.985)"
                : "rotateX(0deg) translateY(0) scale(1)",
              transformOrigin: "center bottom",
              willChange: "transform",
            }}
            className="w-full"
          >
            <div className="w-full rounded-3xl bg-white/95 border border-purple-200/80 p-6 sm:p-8 shadow-md shadow-purple-950/5 hover:border-violet-400 hover:shadow-lg transition-all duration-300">
              {/* Top Row: Role, Company, Period */}
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 pb-4 border-b border-purple-100">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#181135] tracking-tight">
                    {internItem.role}
                  </h3>
                  <div className="flex items-center gap-2 text-base font-bold text-violet-700 mt-1">
                    {getCompanyLogo(internItem.company, "w-5 h-5 rounded-md overflow-hidden shadow-xs")}
                    <span>{internItem.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#585072] bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-200/60 self-start md:self-auto shadow-xs">
                  <Calendar className="w-3.5 h-3.5 text-violet-600" />
                  <span>{internItem.period}</span>
                </div>
              </div>

              {/* Brief Concise Context */}
              <p className="text-sm sm:text-base text-[#4a4365] leading-relaxed py-4 max-w-3xl">
                {internItem.summary}
              </p>

              {/* Bottom Row: Compact 'More about it' trigger & Tech tags */}
              <div className="pt-4 border-t border-purple-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleOpenMatter}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-violet-700 text-white font-semibold text-xs sm:text-sm hover:bg-violet-800 shadow-sm shadow-violet-700/20 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 active:scale-95 self-start sm:self-auto group"
                >
                  <span>More about it</span>
                  <RotateCw className={`w-4 h-4 transition-transform duration-500 ${isFlipping ? "rotate-180" : "group-hover:rotate-45"}`} />
                </button>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-[#6b6385] font-medium mr-1">
                    Environment:
                  </span>
                  {internItem.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-purple-50 text-[#3b3353] border border-purple-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacious, Un-congested Case Study Modal Overlay */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="internship-modal-title"
          style={{
            animation: isClosing
              ? "backdropFadeOut 0.26s cubic-bezier(0.16, 1, 0.3, 1) forwards"
              : "backdropFadeIn 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          }}
          className="fixed inset-0 z-50 bg-slate-950/45 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={handleCloseMatter}
        >
          {/* Modal Container: Expanded Width (max-w-5xl) with Generous Breathing Room & Fluid 3D Unfold */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: isClosing
                ? "smoothFlipOut 0.26s cubic-bezier(0.4, 0, 0.2, 1) forwards"
                : "smoothFlipIn 0.42s cubic-bezier(0.16, 1, 0.3, 1) forwards",
              transformOrigin: "center top",
              willChange: "transform, opacity",
            }}
            className="max-w-5xl w-full max-h-[90vh] overflow-y-auto no-scrollbar rounded-3xl bg-[#faf8fd] border border-purple-300/90 p-7 sm:p-12 shadow-2xl shadow-purple-950/25 space-y-8 text-left relative"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-6 pb-6 border-b border-purple-200/80">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-violet-700 flex items-center gap-1.5 mb-1.5">
                  {getCompanyLogo(internItem.company, "w-4 h-4 rounded-sm overflow-hidden")}
                  <span>Internship Experience • {internItem.company}</span>
                </span>
                <h3
                  id="internship-modal-title"
                  className="text-3xl sm:text-4xl font-extrabold text-[#181135] tracking-tight"
                >
                  Predictive Salary Analytics &amp; EDA Suite
                </h3>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-mono text-[#585072] mt-2">
                  <span>{internItem.period}</span>
                  <span>•</span>
                  <span className="text-violet-700 font-bold">
                    End-to-End Machine Learning &amp; Regression
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCloseMatter}
                aria-label="Show less"
                className="p-2.5 rounded-full bg-white border border-purple-200 text-[#585072] hover:text-[#181135] hover:bg-purple-50 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 shadow-xs"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Level Overview Paragraph */}
            <p className="text-base sm:text-lg text-[#32234f] leading-relaxed max-w-4xl font-normal">
              During my internship at Launched Global, I engineered an end-to-end predictive modeling and exploratory analytics suite to benchmark compensation distributions across experience levels, tech stacks, and company tiers.
            </p>

            {/* 2-Column Balanced Grid: Eliminates Congestion */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column (7 cols): Pipeline & Architectural Contributions */}
              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-violet-800">
                  Pipeline Architecture &amp; Key Work
                </div>

                <div className="p-6 rounded-2xl bg-white border border-purple-200/80 shadow-xs space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-sm sm:text-base text-[#181135] font-semibold block mb-0.5">
                        Automated Data Preprocessing
                      </strong>
                      <p className="text-xs sm:text-sm text-[#4a4365] leading-relaxed">
                        Engineered automated cleaning routines, outlier elimination, categorical normalization, and null-value imputation across disparate salary datasets.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-purple-100 pt-3.5">
                    <CheckCircle2 className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-sm sm:text-base text-[#181135] font-semibold block mb-0.5">
                        Predictive Regression Modeling
                      </strong>
                      <p className="text-xs sm:text-sm text-[#4a4365] leading-relaxed">
                        Trained, evaluated, and cross-validated multivariate regression models (Linear, Ridge, Tree-based) in Scikit-Learn to estimate compensation benchmarks based on candidate skill profiles.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-purple-100 pt-3.5">
                    <CheckCircle2 className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-sm sm:text-base text-[#181135] font-semibold block mb-0.5">
                        Metric Benchmarking &amp; Validation
                      </strong>
                      <p className="text-xs sm:text-sm text-[#4a4365] leading-relaxed">
                        Evaluated precision and residual errors using standardized Mean Absolute Error (MAE), RMSE, and R² scores against baseline industry distributions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-purple-100 pt-3.5">
                    <CheckCircle2 className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-sm sm:text-base text-[#181135] font-semibold block mb-0.5">
                        Exploratory Visual Storytelling
                      </strong>
                      <p className="text-xs sm:text-sm text-[#4a4365] leading-relaxed">
                        Synthesized distribution density curves, correlation heatmaps, and variance reports in Matplotlib and Seaborn for technical and business stakeholders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (5 cols): Context, Challenge & Core Takeaway */}
              <div className="lg:col-span-5 space-y-6">
                {/* Challenge & Context Card */}
                <div className="p-6 rounded-2xl bg-white border border-purple-200/80 shadow-xs space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-violet-800">
                    The Real-World Challenge
                  </div>
                  <p className="text-xs sm:text-sm text-[#4a4365] leading-relaxed">
                    Navigating non-transparent compensation distributions across disparate job markets and experience levels requires statistically rigorous normalization, outlier elimination, and predictive regression modeling.
                  </p>
                </div>

                {/* Practical Takeaway Card */}
                <div className="p-6 rounded-2xl bg-purple-100/70 border border-purple-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-violet-900 block">
                    Key Practical Takeaway:
                  </span>
                  <p className="text-xs sm:text-sm text-[#281a42] leading-relaxed">
                    {internItem.keyLearning}
                  </p>
                </div>

                {/* Tech Stack Chips */}
                <div className="p-5 rounded-2xl bg-white border border-purple-200/80 shadow-xs space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#6b6385] block">
                    Tech Stack &amp; Libraries
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "Pandas",
                      "NumPy",
                      "Scikit-Learn",
                      "Matplotlib",
                      "Seaborn",
                      "Regression Analysis",
                      "EDA",
                    ].map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-50/60 border border-purple-200/60 text-xs font-medium text-[#3b3353]"
                      >
                        {getTechIcon(tech, "w-3.5 h-3.5")}
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="pt-6 border-t border-purple-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href="https://github.com/disha-polamarasetti/data-science-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-violet-700 text-white font-bold text-sm hover:bg-violet-800 shadow-md shadow-violet-700/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 active:scale-95 cursor-pointer"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Inspect Repository on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

              <button
                type="button"
                onClick={handleCloseMatter}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white border border-purple-200 text-[#4a4365] hover:text-[#181135] hover:bg-purple-50 text-sm font-semibold transition-all cursor-pointer shadow-xs"
              >
                Show less
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
