"use client";

import React, { useEffect, useRef, useState } from "react";

interface SectionTransitionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  initialInView?: boolean;
}

export default function SectionTransition({
  children,
  className = "",
  id,
  delay = 0,
  initialInView = false,
}: SectionTransitionProps) {
  const [inView, setInView] = useState(initialInView);
  const [isFullySettled, setIsFullySettled] = useState(initialInView);
  const [exitDirection, setExitDirection] = useState<"up" | "down">("down");
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    // Respect user's motion preferences
    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        setInView(true);
        setIsFullySettled(true);
        return;
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
            setIsFullySettled(false);
            if (entry.boundingClientRect.top < 0) {
              setExitDirection("up");
            } else {
              setExitDirection("down");
            }
          }
        });
      },
      {
        threshold: 0.06,
        rootMargin: "-20px 0px -20px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, []);

  // When section enters, settle to transform: none once animation completes
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsFullySettled(true);
      }, 780 + delay);
      return () => clearTimeout(timer);
    } else {
      setIsFullySettled(false);
    }
  }, [inView, delay]);

  // Compute dynamic transform and filter
  let transform = "none";
  let filter = "none";

  if (!isFullySettled) {
    if (inView) {
      transform = "translate3d(0, 0, 0) scale(1)";
      filter = "blur(0px)";
    } else {
      transform =
        exitDirection === "up"
          ? "translate3d(0, -32px, 0) scale(0.985)"
          : "translate3d(0, 32px, 0) scale(0.985)";
      filter = "blur(3px)";
    }
  }

  return (
    <div
      ref={domRef}
      id={id}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform,
        filter,
        transitionProperty: isFullySettled ? "none" : "opacity, transform, filter",
        transitionDuration: inView ? "750ms" : "550ms",
        transitionDelay: inView ? `${delay}ms` : "0ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        willChange: isFullySettled ? "auto" : "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
}

