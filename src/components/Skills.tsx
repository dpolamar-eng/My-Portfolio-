"use client";

import React, { useState } from "react";
import { skillGroups } from "../data/portfolioData";
import {
  Code,
  BarChart3,
  Brain,
  Database,
  ChevronDown,
  Layers,
} from "lucide-react";
import { getTechIcon } from "./TechIcons";

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pinnedIndex, setPinnedIndex] = useState<number | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="w-5 h-5 text-violet-600" />;
      case "BarChart3":
        return <BarChart3 className="w-5 h-5 text-indigo-600" />;
      case "Brain":
        return <Brain className="w-5 h-5 text-purple-600" />;
      case "Database":
        return <Database className="w-5 h-5 text-emerald-600" />;
      default:
        return <Layers className="w-5 h-5 text-violet-600" />;
    }
  };

  const handleToggle = (idx: number) => {
    setPinnedIndex(pinnedIndex === idx ? null : idx);
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-purple-200/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header without AI slop */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-violet-700 mb-2">
            Skills &amp; Technologies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#181135] mb-3">
            Technical proficiencies &amp; tooling.
          </h2>
          <p className="text-base text-[#4a4365]">
            Hover over any domain to inspect specific tools, libraries, and frameworks used in production and research.
          </p>
        </div>

        {/* 4 Interactive Dropdown Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
          {skillGroups.map((group, idx) => {
            const isOpen = hoveredIndex === idx || pinnedIndex === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative rounded-2xl bg-white/90 border transition-all duration-300 ${
                  isOpen
                    ? "border-violet-400 shadow-xl shadow-purple-900/10 bg-white"
                    : "border-purple-200/70 hover:border-purple-300 shadow-sm"
                }`}
              >
                {/* Dropdown Trigger Box */}
                <button
                  type="button"
                  onClick={() => handleToggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 flex items-center justify-between text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-2xl"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-100 flex-shrink-0">
                      {getCategoryIcon(group.icon)}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm sm:text-base text-[#181135] truncate">
                        {group.category}
                      </h3>
                      <span className="text-xs text-[#6b6385] font-medium block mt-0.5">
                        {group.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  <div
                    className={`p-1.5 rounded-lg transition-transform duration-300 flex-shrink-0 ml-2 ${
                      isOpen
                        ? "rotate-180 bg-violet-100/70 text-violet-700"
                        : "text-[#6b6385] hover:text-[#181135]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Dropdown Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out px-5 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-5"
                      : "grid-rows-[0fr] opacity-0 pb-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-purple-100 pt-3">
                      <p className="text-xs text-[#6b6385] leading-relaxed mb-4">
                        {group.description}
                      </p>

                      <div className="space-y-2">
                        {group.skills.map((skill, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-center justify-between p-2 rounded-xl bg-purple-50/40 border border-purple-100/70 hover:bg-purple-100/50 hover:border-violet-200 transition-colors"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="w-6 h-6 rounded-md bg-white border border-purple-200/60 flex items-center justify-center text-[#3b3353] flex-shrink-0 shadow-xs">
                                {getTechIcon(skill.name, "w-3.5 h-3.5")}
                              </div>
                              <span className="text-xs font-medium text-[#181135] truncate">
                                {skill.name}
                              </span>
                            </div>

                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded-md flex-shrink-0 ml-2 ${
                                skill.level === "Core"
                                  ? "bg-violet-100/80 text-violet-800 border border-violet-200/80"
                                  : "bg-purple-100/50 text-purple-700 border border-purple-200/50"
                              }`}
                            >
                              {skill.level}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
