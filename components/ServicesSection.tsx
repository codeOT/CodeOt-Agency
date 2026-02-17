import { FadeIn } from "@/components/FadeIn";
import { SERVICES } from "@/app/data";

/**
 * Services section — displays the four service cards.
 */
export function ServicesSection() {
  return (
    <section id="services" className="py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-20">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#c9a84c] mb-4 font-normal">
            — Our Disciplines
          </p>
          <h2
            className="font-light leading-tight"
            style={{ fontSize: "clamp(38px,6vw,80px)", letterSpacing: "-0.025em" }}
          >
            The Full Spectrum
            <br />
            <em className="font-light italic text-[rgba(232,223,208,0.38)]">
              of Digital Excellence
            </em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.index} delay={i * 0.1}>
              <div
                className="svc-card border h-full p-10 cursor-default"
                style={{
                  borderColor: "rgba(201,168,76,0.1)",
                  background: "rgba(255,255,255,0.018)",
                }}
              >
                <div className="flex items-start justify-between mb-8">
                  <span
                    className="text-[13px] tracking-[0.18em] text-[#c9a84c] font-normal"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {s.index}
                  </span>
                  <div
                    className="w-10 h-px mt-2"
                    style={{ background: "rgba(201,168,76,0.28)" }}
                  />
                </div>
                <h3
                  className="mb-4 leading-tight font-normal text-[#e8dfd0]"
                  style={{
                    fontSize: "clamp(22px,2.5vw,30px)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="mb-8 font-light text-[rgba(232,223,208,0.42)]"
                  style={{ fontSize: 15, lineHeight: 1.85 }}
                >
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-4 py-1.5 tracking-[0.09em] font-normal text-[rgba(201,168,76,0.62)]"
                      style={{ border: "1px solid rgba(201,168,76,0.17)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}