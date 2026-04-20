"use client";

import { useState } from "react";

const DEFAULT = {
  companyName: "DIGON",
  headline: "Perception, Embedded Systems, and Secure Pipelines",
  summary:
    "DIGON delivers low-SWaP computer vision, embedded perception, and secure data pipelines for mission-critical environments. We design, test, and transition prototypes with a focus on reliability and speed.",
  naics: "541715, 541330",
  cage: "TBD",
  uei: "TBD",
  core: `Edge computer vision (cv2, CUDA)
Embedded systems (Jetson, MCU, RTOS)
Data pipelines & zero-trust interfaces
Test & evaluation (field + HIL)`,
  differentiators: `Rapid prototyping (TRL 5-7)
Ruggedization & thermal design
Small team, fast iteration
Academic + industry bridge`,
  pastPerf: `USAF — On-vehicle perception demo — Real-time object detection @ 30 FPS
NASA — Autonomous sensing prototype — Flight-like ruggedization`,
  contacts: `T. R. — Founder — tr@example.com — (555) 555-5555`,
  footerLegal:
    "ITAR/EAR awareness: Do not include export-controlled technical data. Market research only.",
};

export default function CapStmtPage() {
  const [form, setForm] = useState(DEFAULT);
  const [busy, setBusy] = useState(false);

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function generate() {
    setBusy(true);
    try {
      const payload = {
        companyName: form.companyName,
        headline: form.headline,
        summary: form.summary,
        naics: form.naics.split(",").map((s) => s.trim()).filter(Boolean),
        cage: form.cage || undefined,
        uei: form.uei || undefined,
        core: form.core.split("\n").map((s) => s.trim()).filter(Boolean),
        differentiators: form.differentiators.split("\n").map((s) => s.trim()).filter(Boolean),
        pastPerf: form.pastPerf
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean)
          .map((line) => {
            const [client, title, outcome] = line.split(" — ");
            return { client: client ?? "", title: title ?? "", outcome };
          }),
        contacts: form.contacts
          .split("\n")
          .map((s) => s.trim())
          .filter(Boolean)
          .map((line) => {
            const [name, title, email, phone] = line.split(" — ");
            return { name: name ?? "", title, email, phone };
          }),
        footerLegal: form.footerLegal || undefined,
      };

      const res = await fetch("/api/defense/capability-statement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        alert(`Failed to generate PDF.\n${j.error ?? res.statusText}`);
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "capability-statement.pdf";
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setBusy(false);
    }
  }

  const Input = (p: { label: string; val: string; on: (s: string) => void; textarea?: boolean }) => (
    <label className="block">
      <div className="mb-1 text-xs text-[var(--muted)]">{p.label}</div>
      {p.textarea ? (
        <textarea
          value={p.val}
          onChange={(e) => p.on(e.target.value)}
          rows={p.label.toLowerCase().includes("summary") ? 5 : 4}
          className="w-full rounded-xl border border-white/10 bg-[var(--panel)]/60 px-3 py-2 text-sm"
        />
      ) : (
        <input
          value={p.val}
          onChange={(e) => p.on(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-[var(--panel)]/60 px-3 py-2 text-sm"
        />
      )}
    </label>
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-[var(--panel)]/80 to-[var(--panel)]/40 p-6">
        <h1 className="text-2xl font-semibold">Capability Statement Generator</h1>
        <p className="mt-1 text-sm text-[var(--muted)]">
          Fill the fields and export a government-ready PDF.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Input label="Company Name" val={form.companyName} on={(v) => update("companyName", v)} />
          <Input label="Headline" val={form.headline} on={(v) => update("headline", v)} />
          <div className="md:col-span-2">
            <Input label="Summary" val={form.summary} on={(v) => update("summary", v)} textarea />
          </div>

          <Input label="NAICS (comma-separated)" val={form.naics} on={(v) => update("naics", v)} />
          <Input label="CAGE" val={form.cage} on={(v) => update("cage", v)} />
          <Input label="UEI" val={form.uei} on={(v) => update("uei", v)} />

          <Input label="Core Competencies (one per line)" val={form.core} on={(v) => update("core", v)} textarea />
          <Input
            label="Differentiators (one per line)"
            val={form.differentiators}
            on={(v) => update("differentiators", v)}
            textarea
          />

          <Input
            label="Past Performance (Client — Title — Outcome; one per line)"
            val={form.pastPerf}
            on={(v) => update("pastPerf", v)}
            textarea
          />
          <Input
            label="Contacts (Name — Title — Email — Phone; one per line)"
            val={form.contacts}
            on={(v) => update("contacts", v)}
            textarea
          />

          <div className="md:col-span-2">
            <Input label="Footer Legal (optional)" val={form.footerLegal} on={(v) => update("footerLegal", v)} textarea />
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={generate}
            disabled={busy}
            className="rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-medium text-white disabled:opacity-60"
          >
            {busy ? "Generating…" : "Download PDF"}
          </button>
        </div>
      </section>
    </main>
  );
}
