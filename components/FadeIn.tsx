"use client";

import { ReactNode } from "react";
import { useInView } from "@/app/hooks/useInView";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  from?: "bottom" | "left" | "right";
  className?: string;
}

/**
 * Wraps children in a div that fades + slides into view on scroll.
 */
export function FadeIn({
  children,
  delay = 0,
  from = "bottom",
  className = "",
}: FadeInProps) {
  const [ref, inView] = useInView();

  const translate =
    from === "left"
      ? "translateX(-28px)"
      : from === "right"
      ? "translateX(28px)"
      : "translateY(28px)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : translate,
        transition: `opacity 0.85s ease ${delay}s, transform 0.85s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}