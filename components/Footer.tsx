import { Logo } from "@/components/Logo";

export function Footer() {
    const date = new Date();
  return (
    <footer
      className="py-12 px-6 md:px-10"
      style={{ borderTop: "1px solid rgba(201,168,76,0.09)" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo size="sm" />

        <p className="text-[12px] tracking-[0.09em] text-[rgba(232,223,208,0.2)] font-light text-center">
          Digital craft, elevated. Built with precision.
        </p>

        <p className="text-[12px] font-light text-[rgba(232,223,208,0.18)]">
          © {date.getFullYear()} CodeOT Studio
        </p>
      </div>
    </footer>
  );
}