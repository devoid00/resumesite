// src/app/contracting/page.tsx
export default function ContractingPage() {
  return (
    <main className="min-h-screen bg-[var(--canvas)] text-[var(--ink)]">
      <div className="mx-auto max-w-5xl px-4 py-16 space-y-10">
        {/* Overview */}
        <header>
          <h1 className="text-3xl font-semibold">Contracting</h1>
          <p className="mt-3 text-[var(--mute)] max-w-2xl leading-relaxed">
            Digon LLC is a U.S.-owned, Tennessee-headquartered, multi-domain defense
            technology company. We maintain a limited public profile and operate in
            accordance with DFARS and U.S. export control regulations.
          </p>
        </header>

        {/* At-a-glance / identifiers */}
        <section className="grid gap-6 sm:grid-cols-2">
          <Card
            title="Company Identifiers"
            items={[
              "Legal Name: DIGON LLC",
              "NAICS: 541715 — R&D in Physical, Engineering, and Life Sciences",
              "UEI (SAM): QJ55E4DZH8T4",
              "CAGE Code: 19RX0",
              "Headquarters: Tennessee, USA",
            ]}
          />
          <Card
            title="Engagement Channels"
            items={[
              "SBIR/STTR (AFWERX / SpaceWERX / NSF / DOE)",
              "OTA prototyping (DIU, Army/Navy/AF consortia)",
              "Direct R&D contracts under DFARS-compliant terms",
            ]}
          />
        </section>

        {/* Capabilities (merged from previous page) */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium">Core Capabilities</h2>
          <p className="text-sm text-[var(--mute)] max-w-3xl">
            Digon actively develops technologies across electromagnetic defense, autonomous
            control systems, and resilient mission architectures. Certain details are
            export-controlled or restricted and are not publicly disclosed.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <Capability
              title="Electromagnetic Resilience"
              items={[
                "Directed energy defense",
                "Active EM shielding & adaptive impedance structures",
                "High-EMI fault-tolerant architectures",
              ]}
            />
            <Capability
              title="Autonomous Mission Control"
              items={[
                "AI-guided flight & robotic control in GPS-denied environments",
                "Fault-tolerant reinforcement learning",
                "Digital-twin simulation for contested EM spectrum",
              ]}
            />
            <Capability
              title="Operational Technology Security"
              items={[
                "Zero-trust embedded systems",
                "Air-gapped communication pathways",
                "Spectrum monitoring & anomaly detection",
              ]}
            />
            <Capability
              title="Advanced Materials & Propulsion R&D"
              items={[
                "Electro-thermal propulsion concepts",
                "High-entropy alloy research",
                "Magnetic confinement / containment theory",
              ]}
            />
          </div>
        </section>

        {/* Compliance posture */}
        <section className="rounded-2xl border border-white/10 bg-[var(--panel)]/60 p-6 shadow-[0_8px_20px_rgba(0,0,0,0.35)] space-y-3">
          <h2 className="text-xl font-medium">Compliance & Controls</h2>
          <ul className="text-sm text-[var(--mute)] space-y-2">
            <li>ITAR/EAR aware; export-controlled details not published.</li>
            <li>DFARS / NIST 800-171 posture in progress for controlled data.</li>
            <li>Program information and certain R&D activities are restricted.</li>
          </ul>
        </section>

        {/* Secure docs placeholder */}
        <section className="rounded-2xl border border-white/10 bg-[var(--panel)]/60 p-6">
          <h2 className="text-xl font-medium">Secure Document Access</h2>
          <p className="mt-2 text-sm text-[var(--mute)]">
            Capability statements and technical appendices are available to authorized U.S.
            government personnel upon request. A restricted portal will be provided to
            verified users.
          </p>
        </section>

        {/* Contact */}
        <section className="rounded-2xl border border-white/10 bg-[var(--panel)]/60 p-6">
          <h2 className="text-xl font-medium">Government Inquiries</h2>
          <p className="mt-2 text-sm text-[var(--mute)]">
            Contracting officers and program offices may contact:
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a
              className="rounded-xl border border-white/15 px-3 py-1.5 hover:bg-white/5"
              href="mailto:gov@digondefense.com"
            >
              gov@digondefense.com
            </a>
            <a
              className="rounded-xl border border-white/15 px-3 py-1.5 hover:bg-white/5"
              href="mailto:contact@di9on.com"
            >
              contact@di9on.com
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[var(--panel)]/60 p-5 shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
      <h3 className="font-medium">{title}</h3>
      <ul className="mt-3 text-sm text-[var(--mute)] space-y-1.5">
        {items.map((x, i) => (
          <li key={i}>• {x}</li>
        ))}
      </ul>
    </div>
  );
}

function Capability({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[var(--panel)]/60 p-5 shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
      <h3 className="font-medium">{title}</h3>
      <ul className="mt-3 text-sm text-[var(--mute)] space-y-1.5">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
