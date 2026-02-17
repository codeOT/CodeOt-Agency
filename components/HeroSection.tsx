"use client";

import { FadeIn } from "@/components/FadeIn";
import { GoldDivider } from "@/components/GoldDivider";
import { STATS } from "@/app/data";

/**
 * Full-screen hero section with headline, stats, and CTAs.
 */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ padding: "160px 24px 120px" }}
    >
      {/* Background decorative lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-[14%] w-px h-full opacity-[0.08]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, #c9a84c 40%, #c9a84c 60%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-0 right-[14%] w-px h-full opacity-[0.08]"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, #c9a84c 40%, #c9a84c 60%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-[22%] inset-x-0 h-px opacity-[0.06]"
          style={{
            background:
              "linear-gradient(to right, transparent, #c9a84c 35%, #c9a84c 65%, transparent)",
          }}
        />
        <div
          className="absolute bottom-[22%] inset-x-0 h-px opacity-[0.06]"
          style={{
            background:
              "linear-gradient(to right, transparent, #c9a84c 35%, #c9a84c 65%, transparent)",
          }}
        />
        {/* Floating orbs */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 900,
            height: 900,
            background:
              "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 65%)",
            animation: "floatY 9s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/4 -right-20 rounded-full"
          style={{
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full text-center relative z-10">
        {/* Availability badge */}
        <FadeIn>
          <div
            className="inline-flex items-center gap-3 px-5 py-[9px] mb-12 border"
            style={{
              borderColor: "rgba(201,168,76,0.22)",
              background: "rgba(201,168,76,0.06)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full bg-[#02f33e]"
              style={{ animation: "pulseDot 2s infinite" }}
            />
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#c9a84c] font-normal">
              Accepting projects — 2026
            </span>
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.1}>
          <h1
            className="mb-6 font-light leading-[0.95]"
            style={{
              fontSize: "clamp(58px,10vw,128px)",
              letterSpacing: "-0.025em",
            }}
          >
            Digital Craft
            <br />
            <em className="shimmer-text font-light italic">Elevated.</em>
          </h1>
        </FadeIn>

        <FadeIn delay={0.17}>
          <GoldDivider maxW="max-w-xs" />
        </FadeIn>

        {/* Subtext */}
        <FadeIn delay={0.22}>
          <p
            className="mx-auto mb-14 font-light text-[rgba(232,223,208,0.46)] tracking-wide leading-relaxed"
            style={{
              maxWidth: 560,
              fontSize: "clamp(15px,1.8vw,18px)",
              lineHeight: 1.85,
            }}
          >
            CodeOT is a premium web development studio for founders and brands
            who refuse to settle. We engineer digital experiences that command
            attention — and convert it.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.28}>
          <div className="flex flex-wrap items-center justify-center gap-5 mb-20">
            <a
              href="#contact"
              className="btn-gold inline-block px-10 py-4 text-[13px] tracking-[0.16em] uppercase no-underline font-medium"
              style={{
                background: "#c9a84c",
                color: "#090805",
                boxShadow: "0 4px 24px rgba(201,168,76,0.28)",
              }}
            >
              Commission Your Project
            </a>
            <a
              href="#work"
              className="btn-ghost inline-block px-10 py-4 text-[13px] tracking-[0.16em] uppercase no-underline border font-normal text-[rgba(232,223,208,0.52)]"
              style={{ borderColor: "rgba(201,168,76,0.24)" }}
            >
              View Portfolio
            </a>
          </div>
        </FadeIn>

        {/* Stats grid */}
        <FadeIn delay={0.35}>
          <div
            className="grid grid-cols-2 md:grid-cols-4 border-t pt-12"
            style={{ borderColor: "rgba(201,168,76,0.11)" }}
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="py-6 px-4 border-r last:border-r-0"
                style={{ borderColor: "rgba(201,168,76,0.09)" }}
              >
                <div
                  className="mb-1.5 font-light leading-none text-[#c9a84c]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(40px,5vw,60px)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.value}
                  {s.suffix}
                </div>
                <div className="text-[11px] tracking-[0.13em] uppercase text-[rgba(232,223,208,0.36)] font-normal">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 pointer-events-none">
        <div className="w-px h-14 bg-gradient-to-b from-transparent to-[#c9a84c]" />
        <span className="text-[9px] tracking-[0.22em] uppercase text-[#c9a84c]">
          scroll
        </span>
      </div>
    </section>
  );
}