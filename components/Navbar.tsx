"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";
import { NAV_LINKS } from "@/app/data";

/**
 * Fixed top navigation bar with scroll-aware background and mobile menu.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(9,8,5,0.93)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(201,168,76,0.1)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <Logo size="md" />

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link-u text-[12px] tracking-[0.11em] uppercase no-underline font-normal text-[rgba(232,223,208,0.48)] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-gold text-[12px] tracking-[0.13em] uppercase px-6 py-3 no-underline font-medium"
            style={{
              background: "#c9a84c",
              color: "#090805",
              boxShadow: "0 4px 20px rgba(201,168,76,0.22)",
            }}
          >
            Begin Project
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-6 h-px bg-[#c9a84c] transition-all duration-300"
              style={{
                opacity: i === 1 && menuOpen ? 0 : 1,
                transform:
                  i === 0 && menuOpen
                    ? "rotate(45deg) translate(4px,4px)"
                    : i === 2 && menuOpen
                    ? "rotate(-45deg) translate(4px,-4px)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-8 pt-2 flex flex-col gap-5 border-t"
          style={{
            background: "rgba(9,8,5,0.98)",
            borderColor: "rgba(201,168,76,0.1)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="no-underline text-[15px] tracking-[0.1em] uppercase text-[rgba(232,223,208,0.58)] font-normal"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="no-underline text-center py-3 tracking-[0.13em] uppercase text-sm font-medium"
            style={{ background: "#c9a84c", color: "#090805" }}
            onClick={() => setMenuOpen(false)}
          >
            Begin Project
          </a>
        </div>
      )}
    </nav>
  );
}