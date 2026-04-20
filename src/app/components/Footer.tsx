import Link from "next/link";
import Brand from "@/app/components/Brand";

export default function Footer() {
  return (
    <footer
      // align with the main content when the navbar docks left
      style={{ marginLeft: "var(--nav-left, 0px)", transition: "margin-left var(--nav-transition, 500ms)" }}
      className="mt-16 border-t border-white/10"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-6">
        {/* top row */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Brand className="text-base" withTM />
            <span className="text-xs text-[var(--mute)]">LLC</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm">
            <Link href="/contracting" className="text-[var(--mute)] hover:text-[var(--ink)]">Contracting</Link>
            <Link href="/about" className="text-[var(--mute)] hover:text-[var(--ink)]">About</Link>
            <Link href="/projects" className="text-[var(--mute)] hover:text-[var(--ink)]">Projects</Link>
            <Link href="/contact" className="text-[var(--mute)] hover:text-[var(--ink)]">Contact</Link>
            <a href="mailto:contact@digondefense.com" className="text-[var(--mute)] hover:text-[var(--ink)]">
              contact@digondefense.com
            </a>
          </div>
        </div>

        {/* divider */}
        <div className="my-4 h-px w-full bg-white/10" />

        {/* bottom row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--mute)]">
            © {new Date().getFullYear()} DIGON™ LLC. All rights reserved.
          </p>

          <p className="text-xs text-[var(--mute)]">
            Export control notice: Certain information may be subject to U.S. ITAR/EAR restrictions and is not publicly disclosed.
          </p>
        </div>
      </div>
    </footer>
  );
}
