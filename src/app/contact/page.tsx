"use client";

import { useMemo, useState } from "react";

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[var(--panel)]/60 p-6 shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base sm:text-lg font-medium">{title}</h2>
          {subtitle ? (
            <p className="mt-1 text-sm text-[var(--mute)]">{subtitle}</p>
          ) : null}
        </div>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1000);
    } catch {}
  }

  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-white/40">
          {label}
        </p>
        <p className="mt-1 text-sm text-[var(--ink)] break-all">{value}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onCopy}
          className="rounded-xl border border-white/15 px-3 py-2 text-sm hover:bg-white/5"
          type="button"
        >
          {copied ? "Copied" : "Copy"}
        </button>
        <a
          href={`mailto:${value}`}
          className="rounded-xl border border-white/15 px-3 py-2 text-sm hover:bg-white/5"
        >
          Email
        </a>
      </div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[var(--mute)]">
      {children}
    </span>
  );
}

export default function ContactPage() {
  const GOV_EMAIL = "digondevelopment@gmail.com";
  const GENERAL_EMAIL = "digondevelopment@gmail.com";

  const PGP_FINGERPRINT =
    "A6AA C947 751F BABC 620D  A986 A8AA 0A08 ADBE 1CC9";

  const mailtoGov = useMemo(() => {
    const subject = encodeURIComponent("DIGON — Government / DoD Inquiry");
    const body = encodeURIComponent(
      [
        "Hello DIGON,",
        "",
        "1) Organization / Program office:",
        "2) Objective (1–2 sentences):",
        "3) Desired engagement type: (SBIR / OTA / subcontract / pilot / other)",
        "4) Timeline:",
        "5) Point of contact + phone:",
        "",
        "Please avoid sending export-controlled technical data in the initial email.",
        "",
      ].join("\n")
    );
    return `mailto:${GOV_EMAIL}?subject=${subject}&body=${body}`;
  }, [GOV_EMAIL]);

  return (
    <main className="min-h-screen flex flex-col text-[var(--ink)] bg-[var(--canvas)]">
      <section className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>

              <h1 className="mt-2 text-3xl sm:text-4xl font-semibold leading-tight">
                Contact
              </h1>
              <p className="mt-3 max-w-2xl text-[var(--mute)]">
                DIGON maintains a limited public profile. For government or authorized
                industry engagements, use the channels below. Initial outreach should remain high-level.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <Pill>SBIR / OTA friendly</Pill>
                <Pill>Prototype engagements</Pill>
                <Pill>Subcontract support</Pill>
                <Pill>Secure comms available</Pill>
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href={mailtoGov}
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
              >
                Start Gov/DoD Email →
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Card
              title="Government & DoD"
              subtitle="Program offices, SBIR/OTA pathways, primes & authorized partners."
            >
              <CopyRow label="Primary inbox" value={GOV_EMAIL} />
              <div className="mt-4 text-sm text-[var(--mute)]">
                <p className="font-medium text-[var(--ink)]">Include:</p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>Program / organization and desired engagement type</li>
                  <li>Problem statement and operational context (high level)</li>
                  <li>Timeline, constraints, and point of contact</li>
                </ul>
              </div>
            </Card>

            <Card
              title="General inquiries"
              subtitle="Vendors, collaborators, press, and non-sensitive introductions."
            >
              <CopyRow label="General inbox" value={GENERAL_EMAIL} />
              <div className="mt-4 text-sm text-[var(--mute)]">
                <p className="font-medium text-[var(--ink)]">Best for:</p>
                <ul className="mt-2 space-y-1 list-disc pl-5">
                  <li>Partnering and teaming discussions</li>
                  <li>Non-sensitive capability alignment</li>
                  <li>Website / media / scheduling</li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="mt-4">
            <Card
              title="Encrypted communications"

            >
              <div className="grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-[var(--mute)]">
                    If you require encrypted email, request our PGP public key from{" "}
                    <span className="text-[var(--ink)]">{GOV_EMAIL}</span>.
                  </p>

                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-wider text-white/40">
                      PGP fingerprint
                    </p>
                    <p className="mt-1 text-sm break-all font-mono tracking-wide">
                      {PGP_FINGERPRINT}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[var(--panel)]/40 p-4">
                  <p className="text-sm text-[var(--mute)]">
                    <span className="text-[var(--ink)] font-medium">
                      Export control notice:
                    </span>{" "}
                    Initial contact should remain high-level. Sensitive technical
                    details, controlled drawings, source code, or design specifics
                    should not be sent until the appropriate export/compliance
                    framework is established.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
