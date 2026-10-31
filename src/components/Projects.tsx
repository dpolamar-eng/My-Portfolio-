"use client";

import React, { useState, useEffect } from "react";
import { projectsData } from "../data/portfolioData";
import { ProjectItem } from "../types/portfolio";
import {
  ArrowUpRight,
  ArrowLeft,
  X,
  ExternalLink,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { getTechIcon } from "./TechIcons";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [pullingCardId, setPullingCardId] = useState<string | null>(null);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [isCaseStudyClosing, setIsCaseStudyClosing] = useState(false);

  // Close with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isCaseStudyOpen) {
          handleCloseCaseStudy();
        } else if (selectedProject) {
          setSelectedProject(null);
        }
      }
    };

    if (isCaseStudyOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isCaseStudyOpen, selectedProject]);

  // Pull card out of folder
  const handleSelectCard = (project: ProjectItem) => {
    if (pullingCardId) return;
    setPullingCardId(project.id);
    setTimeout(() => {
      setSelectedProject(project);
      setPullingCardId(null);
    }, 300);
  };

  // Close case study and return directly to the folder with stacked cards
  const handleCloseCaseStudy = () => {
    if (isCaseStudyClosing) return;
    setIsCaseStudyClosing(true);
    setTimeout(() => {
      setIsCaseStudyOpen(false);
      setIsCaseStudyClosing(false);
      setSelectedProject(null); // Returns directly to folder
    }, 260);
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-purple-200/50 relative data-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-violet-700 mb-2">
            Featured Projects
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181135] mb-3">
            Machine learning &amp; analytics case studies.
          </h2>
          <p className="text-base text-[#4a4365]">
            Select any project to review its problem statement, technical architecture, and implementation details.
          </p>
        </div>

        {/* VIEW 1: THE STACKED CARDS (Stacked one upon the other, only names visible) */}
        {!selectedProject && (
          <div
            style={{
              animation: "folderReturn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
            className="max-w-4xl mx-auto"
          >
            {/* Stacked Cards Envelope Container */}
            <div className="relative rounded-3xl bg-gradient-to-b from-purple-100/80 via-[#f9f7fc] to-[#ede5f9] border border-purple-300/90 p-5 sm:p-8 pt-6 sm:pt-8 shadow-xl shadow-purple-950/5">
              {/* Stacked Cards Deck (Overlapping one upon the other with just project names visible) */}
              <div className="relative space-y-[-26px] sm:space-y-[-30px] pb-2">
                {projectsData.map((project, idx) => {
                  const isPulling = pullingCardId === project.id;
                  const isLast = idx === projectsData.length - 1;

                  return (
                    <div
                      key={project.id}
                      onClick={() => handleSelectCard(project)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleSelectCard(project);
                        }
                      }}
                      style={{
                        zIndex: idx + 1,
                        animation: isPulling
                          ? "cardPullUp 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards"
                          : undefined,
                        willChange: isPulling ? "transform, opacity" : undefined,
                      }}
                      className={`group relative rounded-2xl bg-white border border-purple-200/90 px-5 sm:px-7 pt-4 sm:pt-5 ${
                        isLast ? "pb-4 sm:pb-5" : "pb-9 sm:pb-11"
                      } shadow-md hover:shadow-2xl hover:border-violet-500 hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
                    >
                      {/* Card Content: Just the Project Name and Action Indicator */}
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-base sm:text-xl font-extrabold text-[#181135] tracking-tight group-hover:text-violet-700 transition-colors">
                          {project.title}
                        </h3>

                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-50/80 border border-purple-200/70 flex items-center justify-center text-violet-700 group-hover:bg-violet-600 group-hover:text-white transition-all shadow-xs flex-shrink-0">
                          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:rotate-45 transition-transform" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Folder Bottom Pocket Lip */}
              <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-purple-200/40 via-purple-100/20 to-transparent pointer-events-none rounded-b-3xl" />
            </div>
          </div>
        )}

        {/* VIEW 2: THE ENTIRE FULL CARD (Pulled out of the folder) */}
        {selectedProject && !isCaseStudyOpen && (
          <div
            style={{
              animation: "fullCardReveal 0.38s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            }}
            className="max-w-3xl mx-auto rounded-3xl bg-white border border-purple-300/90 p-7 sm:p-10 shadow-2xl shadow-purple-950/10 space-y-6 text-left"
          >
            {/* Top Bar: Category + Return to Folder */}
            <div className="flex items-center justify-between gap-4 pb-4 border-b border-purple-100">
              <span className="text-xs font-bold uppercase tracking-widest text-violet-700 bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-200/80">
                {selectedProject.category}
              </span>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-[#4a4365] hover:text-[#181135] text-xs font-semibold border border-purple-200 transition-all cursor-pointer shadow-xs"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Folder</span>
              </button>
            </div>

            {/* Project Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#181135] tracking-tight">
              {selectedProject.title}
            </h3>

            {/* Full Summary */}
            <p className="text-base sm:text-lg text-[#32234f] leading-relaxed font-normal">
              {selectedProject.summary}
            </p>

            {/* Problem Solved Highlight */}
            <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-100 text-sm text-[#3b3353] leading-relaxed">
              <span className="font-bold text-violet-900 block mb-1 uppercase tracking-wider text-xs">
                The Core Challenge &amp; Problem Solved:
              </span>
              <p>{selectedProject.problemSolved}</p>
            </div>

            {/* Tech Stack Icons */}
            <div className="space-y-2.5 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6b6385] block">
                Technologies &amp; Libraries
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-purple-200 text-xs font-medium text-[#3b3353] shadow-xs"
                  >
                    {getTechIcon(tech, "w-3.5 h-3.5")}
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="pt-6 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setIsCaseStudyOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-violet-700 text-white font-bold text-sm hover:bg-violet-800 shadow-md shadow-violet-700/25 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 active:scale-95"
              >
                <span>Case Study</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-purple-200 text-[#4a4365] hover:text-[#181135] hover:bg-purple-50 text-xs sm:text-sm font-semibold transition-all shadow-xs"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* VIEW 3: CASE STUDY MODAL OVERLAY */}
      {selectedProject && isCaseStudyOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          style={{
            animation: isCaseStudyClosing
              ? "backdropFadeOut 0.26s cubic-bezier(0.16, 1, 0.3, 1) forwards"
              : "backdropFadeIn 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          }}
          className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={handleCloseCaseStudy}
        >
          {/* Modal Container: Spacious Width (max-w-5xl) with Generous Breathing Room */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: isCaseStudyClosing
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
                <span className="text-xs font-bold uppercase tracking-widest text-violet-700 block mb-1.5">
                  Project Case Study • {selectedProject.category}
                </span>
                <h3 id="modal-title" className="text-3xl sm:text-4xl font-extrabold text-[#181135] tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={handleCloseCaseStudy}
                aria-label="Close Case Study"
                className="p-2.5 rounded-full bg-white border border-purple-200 text-[#585072] hover:text-[#181135] hover:bg-purple-50 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 shadow-xs"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Overview Summary */}
            <p className="text-base sm:text-lg text-[#32234f] leading-relaxed max-w-4xl font-normal">
              {selectedProject.summary}
            </p>

            {/* Context & Contribution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-purple-200/80 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-violet-800 mb-2">
                  Challenge &amp; Context
                </h4>
                <p className="text-sm text-[#4a4365] leading-relaxed">
                  {selectedProject.problemSolved}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-purple-200/80 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-violet-800 mb-2">
                  Implementation &amp; Approach
                </h4>
                <p className="text-sm text-[#4a4365] leading-relaxed">
                  {selectedProject.myContribution}
                </p>
              </div>
            </div>

            {/* Pipeline Steps */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-violet-800">
                Pipeline &amp; Method Details
              </h4>
              <div className="space-y-3 bg-white p-6 rounded-2xl border border-purple-200/80 shadow-xs">
                {selectedProject.architectureDetails.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-3 text-sm text-[#4a4365]">
                    <CheckCircle2 className="w-4 h-4 text-violet-600 mt-1 flex-shrink-0" />
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Measurable Outcomes */}
            {selectedProject.metricsOrOutcomes && (
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-violet-800">
                  Key Outcomes &amp; Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedProject.metricsOrOutcomes.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-4 rounded-xl bg-white border border-purple-200/80 text-xs sm:text-sm text-[#181135] font-medium shadow-xs"
                    >
                      {metric}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-violet-800">
                Tools &amp; Libraries
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {selectedProject.techStack.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-purple-200/80 text-xs sm:text-sm font-medium text-[#3b3353] shadow-xs"
                  >
                    {getTechIcon(tech, "w-4 h-4")}
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions Footer */}
            <div className="pt-6 border-t border-purple-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-violet-600 text-white font-semibold text-sm hover:bg-violet-700 shadow-md shadow-violet-600/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 active:scale-95 cursor-pointer"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

              <button
                type="button"
                onClick={handleCloseCaseStudy}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white border border-purple-200 text-[#4a4365] hover:text-[#181135] hover:bg-purple-50 text-sm font-semibold transition-all cursor-pointer shadow-xs"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
