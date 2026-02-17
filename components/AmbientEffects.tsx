"use client";

import { useState, useEffect } from "react";

/**
 * Global ambient effects: cursor glow + SVG noise overlay.
 * Mount once at the root layout level.
 */
export function AmbientEffects() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMouse = (e: MouseEvent) =>
      setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMouse);
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  return (
    <>
      {/* Cursor glow */}
      <div
        className="fixed pointer-events-none z-0 rounded-full"
        style={{
          width: 480,
          height: 480,
          left: mouse.x,
          top: mouse.y,
          transform: "translate(-50%,-50%)",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)",
          transition: "left 0.12s, top 0.12s",
        }}
      />

      {/* SVG noise overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />
    </>
  );
}