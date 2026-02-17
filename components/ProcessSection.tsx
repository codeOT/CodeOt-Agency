import { FadeIn } from "@/components/FadeIn";
import { PROCESS } from "@/app/data";

/**
 * Process section — four-step workflow cards.
 */
export function ProcessSection() {
  return (
    <section id="process" className="py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-20">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#c9a84c] mb-4 font-normal">
            — How We Work
          </p>
          <h2
            className="font-light leading-tight"
            style={{ fontSize: "clamp(38px,6vw,80px)", letterSpacing: "-0.025em" }}
          >
            Our Process
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <FadeIn key={step.num} delay={i * 0.1}>
              <div
                className="p-10 border-r border-b sm:last:border-r-0 lg:border-b-0 lg:last:border-r-0"
                style={{ borderColor: "rgba(201,168,76,0.09)" }}
              >
                <p className="text-[11px] tracking-[0.18em] font-mono text-[rgba(201,168,76,0.42)] mb-7">
                  {step.num}
                </p>
                <div className="w-8 h-px mb-8 bg-[#c9a84c]" />
                <h3
                  className="mb-4 font-normal text-[#e8dfd0]"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(22px,2vw,28px)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[14px] font-light text-[rgba(232,223,208,0.38)]"
                  style={{ lineHeight: 1.85 }}
                >
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}