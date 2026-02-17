interface GoldDividerProps {
  maxW?: string;
}

/**
 * Decorative horizontal divider with a centered gold dot.
 */
export function GoldDivider({ maxW = "max-w-xs" }: GoldDividerProps) {
  return (
    <div className={`flex items-center gap-4 my-8 ${maxW} mx-auto`}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[rgba(201,168,76,0.4)]" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]/60" />
      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[rgba(201,168,76,0.4)]" />
    </div>
  );
}