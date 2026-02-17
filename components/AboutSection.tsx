import { FadeIn } from "@/components/FadeIn";
import { GoldDivider } from "@/components/GoldDivider";
import { TECH } from "@/app/data";

/**
 * About / Philosophy section with quote and tech stack.
 */
export function AboutSection() {
  return (
    <section
      id="about"
      className="py-32 px-6 md:px-10 relative overflow-hidden"
      style={{
        background: "rgba(201,168,76,0.025)",
        borderTop: "1px solid rgba(201,168,76,0.09)",
        borderBottom: "1px solid rgba(201,168,76,0.09)",
      }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 1000,
          height: 650,
          background:
            "radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <FadeIn>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#c9a84c] mb-8 font-normal">
            — Our Philosophy
          </p>

          <blockquote
            className="mb-8 font-light leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(28px,4.5vw,62px)",
              letterSpacing: "-0.02em",
            }}
          >
            "We treat every project as if our name depends on it.{" "}
            <em className="italic text-[rgba(232,223,208,0.36)]">
              Because it does.
            </em>
            "
          </blockquote>

          <GoldDivider maxW="max-w-xs" />

          <p
            className="mb-12 mx-auto font-light leading-relaxed text-[rgba(232,223,208,0.4)] tracking-wide"
            style={{ maxWidth: 620, fontSize: 17, lineHeight: 1.9 }}
          >
            CodeOT is a boutique studio — intentionally small, fiercely
            skilled. We take on fewer clients so we can give each one our full
            attention. The result: work that outlasts trends and delivers
            measurable impact.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {TECH.map((tech) => (
              <span
                key={tech}
                className="text-[12px] px-4 py-2 tracking-[0.08em] font-normal text-[rgba(232,223,208,0.4)]"
                style={{ border: "1px solid rgba(201,168,76,0.13)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}