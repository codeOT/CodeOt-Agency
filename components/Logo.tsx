interface LogoProps {
  size?: "sm" | "md";
}

export function Logo({ size = "md" }: LogoProps) {
  const diamondSize = size === "sm" ? "w-6 h-6" : "w-7 h-7";
  const dotSize = size === "sm" ? "w-1.5 h-1.5" : "w-2 h-2";
  const textSize = size === "sm" ? "text-[1rem]" : "text-[1.1rem]";

  return (
    <a href="#" className="flex items-center gap-3 no-underline group">
      <div
        className={`logo-diamond ${diamondSize} border rotate-45 flex items-center justify-center`}
        style={{ borderColor: "#c9a84c" }}
      >
        <div className={`${dotSize} rotate-45 bg-[#c9a84c]`} />
      </div>
      <span
        className={`${textSize} tracking-[0.2em] font-light text-[#e8dfd0]`}
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        CODE<span className="text-[#c9a84c]">OT</span>
      </span>
    </a>
  );
}