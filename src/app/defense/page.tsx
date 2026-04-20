import Link from "next/link";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[var(--panel)]/60 px-3 py-1 text-xs text-[var(--muted)]">
      {children}
    </span>
  );
}

function Tile({
  title,
  body,
  href,
}: {
  title: string;
  body: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-white/10 bg-[var(--panel)]/60 p-5 shadow-[0_8px_20px_rgba(0,0,0,0.35)] transition hover:translate-y-[-2px] hover:shadow-[0_12px_26px_rgba(0,0,0,0.4)]"
    >
      <h3 className="font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{body}</p>
      <div className="mt-4 text-sm text-[var(--accent)]">Open →</div>
    </Link>
  );
}

export default function DefensePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      {/* Hero */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-[var(--panel)]/80 to-[var(--panel)]/40 p-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="flex flex-wrap gap-2">
              <Pill>ITAR-aware</Pill>
              <Pill>CMMC-ready</Pill>
              <Pill>Small Business</Pill>
            </div>
            <h1 className="mt-4 text-3xl font-semibold leading-tight">
              DIGON Defense
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-[var(--muted)]">
              Prototyping, perception, and secure systems for mission-critical
              applications. Explore our capabilities, past performance, and
              current opportunities.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/defense/opportunities"
                className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
              >
                View Opportunities
              </Link>
              <Link
                href="/contact?context=defense"
                className="rounded-full border border-white/10 bg-[var(--panel)]/60 px-4 py-2 text-sm"
              >
                Request a Capability Brief
              </Link>
            </div>
          </div>
          {/* Simple stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { k: "Capabilities", v: "6" },
              { k: "Programs", v: "3" },
              { k: "TRL Range", v: "5-7" },
            ].map(({ k, v }) => (
              <div
                key={k}
                className="rounded-2xl border border-white/10 bg-[var(--panel)]/60 p-4 text-center"
              >
                <div className="text-2xl font-semibold">{v}</div>
                <div className="mt-1 text-xs text-[var(--muted)]">{k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiles */}
      <section className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Tile
          title="Capabilities"
          body="Computer vision, embedded systems, secure pipelines, test & eval, and more."
          href="/contracting" // reusing your rebuilt page for now
        />
        <Tile
          title="Past Performance"
          body="Selected prototypes, pilots, and case studies demonstrating outcomes."
          href="/defense/past-performance"
        />
        <Tile
          title="Compliance"
          body="Overview of CMMC approach, SSP summary, and governance basics."
          href="/defense/compliance"
        />
        <Tile
          title="Opportunities"
          body="Active RFI/RFQ/RFP tracking with quick filters and team notes."
          href="/defense/opportunities"
        />
      </section>
    </main>
  );
}
