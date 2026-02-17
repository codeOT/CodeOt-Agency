"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { PROJECTS } from "@/app/data";

/**
 * Selected Work section — each row is a link that opens the live site in a new tab.
 */
export function WorkSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section
      id="work"
      className="py-32 px-6 md:px-10"
      style={{
        background: "rgba(201,168,76,0.02)",
        borderTop: "1px solid rgba(201,168,76,0.08)",
        borderBottom: "1px solid rgba(201,168,76,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#c9a84c] mb-4 font-normal">
                — Selected Work
              </p>
              <h2
                className="font-light leading-tight"
                style={{
                  fontSize: "clamp(38px,6vw,80px)",
                  letterSpacing: "-0.025em",
                }}
              >
                A Portfolio
                <br />
                <em className="italic font-light text-[rgba(232,223,208,0.38)]">
                  Built on Results
                </em>
              </h2>
            </div>
            <p className="md:max-w-[260px] text-[14px] leading-relaxed font-light text-[rgba(232,223,208,0.36)] tracking-wide">
              Every engagement is a partnership. We don't just ship — we invest
              in your success.
            </p>
          </div>
        </FadeIn>

        <div className="border-t" style={{ borderColor: "rgba(201,168,76,0.09)" }}>
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08} from="left">
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-8 border-b gap-6 flex-wrap no-underline transition-colors duration-300"
                style={{
                  borderColor:
                    hoveredProject === i
                      ? "rgba(201,168,76,0.28)"
                      : "rgba(201,168,76,0.08)",
                }}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flex items-center gap-8 flex-1 min-w-0">
                  <span className="hidden md:block text-[11px] tracking-[0.15em] uppercase font-normal text-[rgba(201,168,76,0.42)] shrink-0 w-40">
                    {p.category}
                  </span>
                  <div className="min-w-0">
                    <h3
                      className="font-normal leading-tight transition-colors duration-300"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "clamp(22px,3.5vw,44px)",
                        letterSpacing: "-0.02em",
                        color: hoveredProject === i ? "#e8c97a" : "#e8dfd0",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-[13px] mt-1 font-light text-[rgba(232,223,208,0.28)]">
                      {p.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6 shrink-0">
                  <span className="hidden md:block text-[13px] font-light text-[rgba(232,223,208,0.26)]">
                    {p.year}
                  </span>
                  <span
                    className="text-2xl transition-all duration-300"
                    style={{
                      color:
                        hoveredProject === i
                          ? "#c9a84c"
                          : "rgba(201,168,76,0.18)",
                      transform:
                        hoveredProject === i
                          ? "translate(4px,-4px)"
                          : "none",
                    }}
                  >
                    ↗
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}