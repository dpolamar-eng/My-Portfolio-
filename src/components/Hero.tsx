"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import GradientASCII from "./GradientASCII";

// Upward Rolling Digit Component: Butter-smooth GPU-accelerated upward motion
function RollingDigit({
  target,
  delay = 0,
  triggerKey = 0,
}: {
  target: number;
  delay?: number;
  triggerKey?: number;
}) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
    // Minimal delay so 0 barely pauses and movement starts almost instantly
    const timer = setTimeout(() => {
      setActive(true);
    }, delay + 25);
    return () => clearTimeout(timer);
  }, [delay, triggerKey]);

  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <span className="inline-block h-[1.15em] overflow-hidden leading-none align-baseline">
      <span
        className="inline-flex flex-col"
        style={{
          transitionProperty: "transform",
          transitionDuration: "1400ms",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          transform: active
            ? `translate3d(0, -${target * 10}%, 0)`
            : "translate3d(0, 0, 0)",
          willChange: "transform",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        {digits.map((d) => (
          <span key={d} className="h-[1.15em] flex items-center justify-center">
            {d}
          </span>
        ))}
      </span>
    </span>
  );
}

// Staggered Upward Letter-by-Letter Animated Name: "Disha Polamarasetti"
function AnimatedName({ triggerKey = 0 }: { triggerKey: number }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(false);
    // Synced with number animation starting at 25ms
    const timer = setTimeout(() => {
      setActive(true);
    }, 25);
    return () => clearTimeout(timer);
  }, [triggerKey]);

  const firstName = "Disha";
  const lastName = "Polamarasetti";
  const charDelayMs = 38;

  return (
    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#150d2e] mb-3 leading-[1.12]">
      {/* First Name: D -> i -> s -> h -> a */}
      <span className="inline-block whitespace-nowrap">
        {firstName.split("").map((char, i) => {
          const delay = i * charDelayMs;
          return (
            <span
              key={`first-${i}`}
              className="inline-block overflow-hidden align-bottom py-1 -my-1"
            >
              <span
                className="inline-block"
                style={{
                  transitionProperty: "transform, opacity",
                  transitionDuration: "850ms",
                  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  transform: active
                    ? "translate3d(0, 0, 0)"
                    : "translate3d(0, 115%, 0)",
                  opacity: active ? 1 : 0,
                  willChange: "transform, opacity",
                  transitionDelay: `${delay}ms`,
                }}
              >
                {char}
              </span>
            </span>
          );
        })}
      </span>

      {/* Space between First & Last Name */}
      <span className="inline-block">&nbsp;</span>

      {/* Last Name: P -> o -> l -> a -> m -> a -> r -> a -> s -> e -> t -> t -> i */}
      <span className="inline-block whitespace-nowrap">
        {lastName.split("").map((char, i) => {
          // Delay flows continuously from first name into last name
          const delay = (firstName.length + 1 + i) * charDelayMs;
          return (
            <span
              key={`last-${i}`}
              className="inline-block overflow-hidden align-bottom py-1 -my-1"
            >
              <span
                className="inline-block"
                style={{
                  transitionProperty: "transform, opacity",
                  transitionDuration: "850ms",
                  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                  transform: active
                    ? "translate3d(0, 0, 0)"
                    : "translate3d(0, 115%, 0)",
                  opacity: active ? 1 : 0,
                  willChange: "transform, opacity",
                  transitionDelay: `${delay}ms`,
                }}
              >
                {char}
              </span>
            </span>
          );
        })}
      </span>
    </h1>
  );
}

export default function Hero() {
  const [animTrigger, setAnimTrigger] = useState(0);
  const [industryVisible, setIndustryVisible] = useState(false);

  useEffect(() => {
    setIndustryVisible(false);
    const timer = setTimeout(() => {
      setIndustryVisible(true);
    }, 70);
    return () => clearTimeout(timer);
  }, [animTrigger]);

  const handleReplay = () => {
    setAnimTrigger((prev) => prev + 1);
  };

  return (
    <section className="relative min-h-screen h-[100dvh] flex flex-col justify-center pt-20 pb-10 sm:pt-24 sm:pb-14 overflow-hidden bg-gradient-to-b from-[#cfbbf5] via-[#d7c4f7] to-[#d0bbf5]">
      {/* 1. Extended Generative ASCII Ambient Background continuing deeply down */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-auto">
        <GradientASCII
          lightMode={true}
          colors={["#3b0764", "#581c87", "#7c3aed", "#9333ea", "#a855f7", "#c4b5fd"]}
          shape="horizon"
          characters=" =+xX0S8#@"
          cellSize={28}
          scale={2.4}
          density={0.94}
          gradientOpacity={0.95}
          glyphOpacity={0.96}
          glow={0.35}
          softness={0.7}
          speed={0.7}
          mouseInteraction={true}
          clickEffect="wave"
          fontFamily='"Geist Mono", monospace'
        />
        {/* Rich Continuous Lavender Vignettes - Keeps rich color consistent from top to bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-purple-950/10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-purple-800/5 to-purple-900/15 pointer-events-none" />
      </div>

      {/* 2. Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
        <div className="flex flex-col items-start max-w-3xl">
          {/* Eyebrow */}
          <div className="text-xs font-bold uppercase tracking-widest text-violet-900 mb-3">
            Applied Machine Learning &amp; Analytics
          </div>

          {/* Primary Name Headline with Staggered Upward Letter Reveal */}
          <AnimatedName triggerKey={animTrigger} />

          {/* Specialization Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-violet-800 font-bold mb-5 tracking-tight">
            Data Scientist &amp; Machine Learning Practitioner
          </p>

          {/* Professional Narrative Pitch - Refined & High Contrast */}
          <p className="text-base sm:text-lg text-[#0e0722] leading-relaxed mb-8 font-medium max-w-2xl">
            Data Scientist and Applied ML practitioner with hands-on industry experience building predictive pipelines, NLP applications, and executive business intelligence dashboards that transform complex data into actionable decisions.
          </p>

          {/* Action Buttons & Dark High-Contrast Social Icons */}
          <div className="flex flex-wrap items-center gap-4 mb-12 pointer-events-auto">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-violet-700 text-white font-semibold text-sm hover:bg-violet-800 shadow-md shadow-violet-700/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 active:scale-95"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/95 text-[#150d2e] font-semibold text-sm border border-purple-300/80 hover:bg-white hover:border-purple-400 shadow-xs transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 active:scale-95"
            >
              <span>Experience</span>
            </a>

            {/* Social Icons - Dark, Clean & Normal */}
            <div className="flex items-center gap-4 ml-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-[#090314] hover:text-black hover:scale-110 transition-all p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 rounded-md"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-[#090314] hover:text-violet-950 hover:scale-110 transition-all p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 rounded-md"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Disha"
                className="text-[#090314] hover:text-violet-950 hover:scale-110 transition-all p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-600 rounded-md"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Reduced Size, Cylindrical (Pill-Shaped) Metrics Bar with Perfectly Centered Alignment */}
          <div
            onClick={handleReplay}
            title="Click to replay animation"
            className="w-full max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-0 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white/95 border border-purple-300/80 shadow-lg shadow-purple-950/5 pointer-events-auto cursor-pointer group hover:border-purple-400 transition-all backdrop-blur-md items-center justify-items-center"
          >
            {/* Metric 1: 9.1 / 10 */}
            <div className="flex flex-col items-center justify-center text-center w-full px-2">
              <div className="flex items-baseline justify-center font-mono text-xl sm:text-2xl font-extrabold text-[#150d2e]">
                <RollingDigit target={9} delay={0} triggerKey={animTrigger} />
                <span className="font-sans">.</span>
                <RollingDigit target={1} delay={40} triggerKey={animTrigger} />
                <span className="text-violet-700 text-xs font-sans font-normal ml-1">
                  / 10
                </span>
              </div>
              <span className="text-[11px] text-[#554374] mt-0.5 font-semibold whitespace-nowrap text-center">
                M.Sc. CGPA
              </span>
            </div>

            {/* Metric 2: 5+ */}
            <div className="flex flex-col items-center justify-center text-center w-full px-2 border-l border-purple-200/80">
              <div className="flex items-baseline justify-center font-mono text-xl sm:text-2xl font-extrabold text-[#150d2e]">
                <RollingDigit target={5} delay={30} triggerKey={animTrigger} />
                <span className="text-violet-700 text-lg font-bold ml-0.5">+</span>
              </div>
              <span className="text-[11px] text-[#554374] mt-0.5 font-semibold whitespace-nowrap text-center">
                Certifications
              </span>
            </div>

            {/* Metric 3: 3 */}
            <div className="flex flex-col items-center justify-center text-center w-full px-2 border-l border-purple-200/80">
              <div className="flex items-baseline justify-center font-mono text-xl sm:text-2xl font-extrabold text-[#150d2e]">
                <RollingDigit target={3} delay={60} triggerKey={animTrigger} />
              </div>
              <span className="text-[11px] text-[#554374] mt-0.5 font-semibold whitespace-nowrap text-center">
                AI Projects
              </span>
            </div>

            {/* Metric 4: Industry */}
            <div className="flex flex-col items-center justify-center text-center w-full px-2 border-l border-purple-200/80">
              <div className="overflow-hidden h-[1.15em] flex items-baseline justify-center font-mono text-xl sm:text-2xl font-extrabold text-[#150d2e]">
                <span
                  className="inline-block transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transform: industryVisible
                      ? "translate3d(0, 0, 0)"
                      : "translate3d(0, 100%, 0)",
                    opacity: industryVisible ? 1 : 0,
                    willChange: "transform, opacity",
                  }}
                >
                  Industry
                </span>
              </div>
              <span className="text-[11px] text-[#554374] mt-0.5 font-semibold whitespace-nowrap text-center">
                Internship
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
