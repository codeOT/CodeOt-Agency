"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { GoldDivider } from "@/components/GoldDivider";
import { CONTACT_INFO, BUDGET_OPTIONS } from "@/app/data";
import { FormData } from "@/app/types";

/**
 * Contact section with info panel + project enquiry form.
 */
export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormData({ name: "", email: "", budget: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

         
          <FadeIn from="left">
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#c9a84c] mb-4 font-normal">
              — Begin the Conversation
            </p>
            <h2
              className="font-light leading-tight mb-8 text-[#e8dfd0]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(38px,5vw,68px)",
                letterSpacing: "-0.025em",
              }}
            >
              Let's Build
              <br />
              <em className="italic font-light text-[rgba(232,223,208,0.38)]">
                Something Lasting
              </em>
            </h2>

            <GoldDivider maxW="max-w-[200px]" />

            <p
              className="mb-10 font-light leading-relaxed text-[rgba(232,223,208,0.38)] tracking-wide"
              style={{ fontSize: 15, lineHeight: 1.9 }}
            >
              Tell us about your project. We respond within 24 hours with a
              clear proposal — no filler, no fluff. Just a thoughtful path
              forward.
            </p>

            <div className="flex flex-col gap-5">
              {CONTACT_INFO.map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 border flex items-center justify-center shrink-0 text-[#c9a84c] text-sm"
                    style={{ borderColor: "rgba(201,168,76,0.2)" }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.12em] uppercase text-[rgba(201,168,76,0.52)] mb-0.5 font-normal">
                      {label}
                    </p>
                    <p className="text-[14px] font-light text-[rgba(232,223,208,0.48)]">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

        
          <FadeIn from="right" delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 p-10 md:p-12"
              style={{
                border: "1px solid rgba(201,168,76,0.12)",
                background: "rgba(255,255,255,0.018)",
              }}
            >
              {/* Name + Email row */}
              <div className="grid grid-cols-2 gap-4">
                {(["name", "email"] as const).map((key) => (
                  <div key={key} className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.12em] uppercase text-[rgba(201,168,76,0.52)] font-normal">
                      {key === "name" ? "Full Name" : "Email Address"}
                    </label>
                    <input
                      type={key === "email" ? "email" : "text"}
                      required
                      value={formData[key]}
                      onChange={(e) =>
                        setFormData({ ...formData, [key]: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-transparent text-[14px] font-light text-[#e8dfd0] transition-all duration-200"
                      style={{
                        border: "1px solid rgba(201,168,76,0.14)",
                        fontFamily: "'Jost', sans-serif",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Budget */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.12em] uppercase text-[rgba(201,168,76,0.52)] font-normal">
                  Project Budget
                </label>
                <select
                  required
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-transparent text-[14px] font-light cursor-pointer appearance-none transition-all duration-200"
                  style={{
                    border: "1px solid rgba(201,168,76,0.14)",
                    fontFamily: "'Jost', sans-serif",
                    color: formData.budget
                      ? "#e8dfd0"
                      : "rgba(232,223,208,0.25)",
                  }}
                >
                  <option value="">Select a range</option>
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Project brief */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.12em] uppercase text-[rgba(201,168,76,0.52)] font-normal">
                  Project Brief
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Describe your project, goals, and timeline..."
                  className="w-full px-4 py-3 bg-transparent text-[14px] font-light text-[#e8dfd0] resize-none transition-all duration-200"
                  style={{
                    border: "1px solid rgba(201,168,76,0.14)",
                    fontFamily: "'Jost', sans-serif",
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="submit-btn w-full py-4 text-[13px] tracking-[0.16em] uppercase font-medium border-none cursor-pointer mt-2"
                style={{
                  background: sent ? "rgba(201,168,76,0.22)" : "#c9a84c",
                  color: sent ? "#c9a84c" : "#090805",
                  fontFamily: "'Jost', sans-serif",
                  boxShadow: sent ? "none" : "0 4px 20px rgba(201,168,76,0.22)",
                }}
              >
                {sent ? "✓ Enquiry Received" : "Submit Enquiry →"}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}