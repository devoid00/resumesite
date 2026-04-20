"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Status = "Open" | "Submitted" | "Won" | "Lost" | "Draft" | "Watching";
type Vehicle = "Direct" | "SBIR" | "STTR" | "OTA" | "IDIQ" | "BAA" | "RFI" | "RFP";

type Opportunity = {
  id: string;
  title: string;
  agency: string;
  bureau?: string;
  vehicle: Vehicle;
  status: Status;
  dueDate?: string;         // ISO date (YYYY-MM-DD)
  posted?: string;          // ISO date
  value?: string;           // e.g., "$250k–$1.2M"
  tags: string[];
  link?: string;            // external SAM/Grants/etc
  notes?: string;
};

// ----- Mock data (swap later with Prisma/API) -----
const MOCK: Opportunity[] = [
  {
    id: "op-001",
    title: "Low-SWaP On-Vehicle Perception Prototype",
    agency: "DoD",
    bureau: "AFRL",
    vehicle: "SBIR",
    status: "Open",
    dueDate: "2025-11-14",
    posted: "2025-10-10",
    value: "$150k Phase I",
    tags: ["computer-vision", "embedded", "edge-ai"],
    link: "https://sam.gov/",
    notes: "Good technical fit; pair with our Jetson + cv2 pipeline."
  },
  {
    id: "op-002",
    title: "Secure Telemetry Processing (RFI)",
    agency: "DoD",
    bureau: "NAVWAR",
    vehicle: "RFI",
    status: "Watching",
    dueDate: "2025-11-03",
    posted: "2025-10-05",
    value: "TBD",
    tags: ["zero-trust", "pipeline", "rust"],
    link: "https://sam.gov/"
  },
  {
    id: "op-003",
    title: "Rapid T&E Support IDIQ",
    agency: "DHS",
    bureau: "S&T",
    vehicle: "IDIQ",
    status: "Submitted",
    dueDate: "2025-09-22",
    posted: "2025-08-20",
    value: "$10M ceiling",
    tags: ["test-eval", "safety", "data"],
  },
  {
    id: "op-004",
    title: "Autonomous Sensing – BAA Call",
    agency: "NASA",
    bureau: "LaRC",
    vehicle: "BAA",
    status: "Draft",
    dueDate: "2025-12-01",
    posted: "2025-09-01",
    value: "$250k–$750k",
    tags: ["perception", "flight", "cv2"],
  },
  {
    id: "op-005",
    title: "Prototype OTA: Ruggedized Edge Compute",
    agency: "Army",
    bureau: "DEVCOM",
    vehicle: "OTA",
    status: "Open",
    dueDate: "2025-11-21",
    posted: "2025-10-01",
    value: "$500k–$2M",
    tags: ["hardware", "thermal", "nvme"],
  },
];

function cls(...xs: (string | false | null | undefined)[]) {
  return xs.filter(Boolean).join(" ");
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[var(--panel)]/60 px-3 py-1 text-xs text-[var(--muted)]">
      {children}
    </span>
  );
}

function StatusDot({ status }: { status: Status }) {
  const color =
    status === "Open" ? "bg-green-500" :
    status === "Submitted" ? "bg-blue-500" :
    status === "Won" ? "bg-emerald-500" :
    status === "Lost" ? "bg-rose-500" :
    status === "Draft" ? "bg-yellow-500" :
    "bg-slate-400";
  return <span className={cls("inline-block h-2.5 w-2.5 rounded-full", color)} />;
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-[var(--panel)]/60 px-2.5 py-0.5 text-[10px] uppercase tracking-wide text-[var(--muted)]">
      {children}
    </span>
  );
}

type SortKey = "dueDate" | "posted" | "value" | "title" | "agency" | "status" | "vehicle";
type SortDir = "asc" | "desc";

export default function OpportunitiesPage() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"All" | Status>("All");
  const [vehicle, setVehicle] = useState<"All" | Vehicle>("All");
  const [sortKey, setSortKey] = useState<SortKey>("dueDate");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [tag, setTag] = useState<string>("All");

  const allTags = useMemo(() => {
    const t = new Set<string>();
    MOCK.forEach((m) => m.tags.forEach((x) => t.add(x)));
    return ["All", ...Array.from(t).sort()];
  }, []);

  const filtered = useMemo(() => {
    const norm = (s: string | undefined) => (s || "").toLowerCase();
    const text = q.toLowerCase().trim();

    const byText = (o: Opportunity) =>
      !text ||
      norm(o.title).includes(text) ||
      norm(o.agency).includes(text) ||
      norm(o.bureau).includes(text) ||
      norm(o.value).includes(text) ||
      o.tags.some((t) => t.toLowerCase().includes(text));

    const byStatus = (o: Opportunity) => status === "All" || o.status === status;
    const byVehicle = (o: Opportunity) => vehicle === "All" || o.vehicle === vehicle;
    const byTag = (o: Opportunity) => tag === "All" || o.tags.includes(tag);

    const list = MOCK.filter((o) => byText(o) && byStatus(o) && byVehicle(o) && byTag(o));

    const getVal = (o: Opportunity) => {
      switch (sortKey) {
        case "dueDate": return o.dueDate || "";
        case "posted": return o.posted || "";
        case "value":  return o.value || "";
        case "title":  return o.title;
        case "agency": return o.agency;
        case "status": return o.status;
        case "vehicle":return o.vehicle;
      }
    };

    list.sort((a, b) => {
      const va = getVal(a);
      const vb = getVal(b);
      if (va < vb) return sortDir === "asc" ? -1 : 1;
      if (va > vb) return sortDir === "asc" ? 1 : -1;
      return 0;
    });

    return list;
  }, [q, status, vehicle, sortKey, sortDir, tag]);

  const headers: { key: SortKey; label: string; className?: string }[] = [
    { key: "title", label: "Opportunity" },
    { key: "agency", label: "Agency/Bureau" },
    { key: "vehicle", label: "Vehicle", className: "hidden md:table-cell" },
    { key: "status", label: "Status" },
    { key: "posted", label: "Posted", className: "hidden md:table-cell" },
    { key: "dueDate", label: "Due", className: "hidden sm:table-cell" },
    { key: "value", label: "Value", className: "hidden lg:table-cell" },
  ];

  function clickSort(k: SortKey) {
    setSortDir((d) => (k === sortKey ? (d === "asc" ? "desc" : "asc") : "asc"));
    setSortKey(k);
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      {/* Header / Hero */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-[var(--panel)]/80 to-[var(--panel)]/40 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Pill>Pipeline</Pill>
              <Pill>Capture</Pill>
              <Pill>Teaming</Pill>
            </div>
            <h1 className="mt-3 text-2xl font-semibold tracking-tight">Opportunities</h1>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Track RFIs/RFQs/RFPs, SBIR/STTR calls, OTAs, and IDIQs in one place.
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/defense"
              className="rounded-full border border-white/10 bg-[var(--panel)]/60 px-4 py-2 text-sm"
            >
              ← Defense Home
            </Link>
            <Link
              href="/contact?context=defense-opportunity"
              className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
            >
              Share an Opportunity
            </Link>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-2">
            <label className="block text-xs text-[var(--muted)]">Search</label>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search titles, agencies, tags…"
              className="mt-1 w-full rounded-xl border border-white/10 bg-[var(--panel)]/60 px-3 py-2 text-sm outline-none placeholder:text-[var(--muted)]"
            />
          </div>
          <div>
            <label className="block text-xs text-[var(--muted)]">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as "All" | Status)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-[var(--panel)]/60 px-3 py-2 text-sm"
            >
              {["All","Open","Watching","Draft","Submitted","Won","Lost"].map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-[var(--muted)]">Vehicle</label>
            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value as "All" | Vehicle)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-[var(--panel)]/60 px-3 py-2 text-sm"
            >
              {["All","Direct","SBIR","STTR","OTA","IDIQ","BAA","RFI","RFP"].map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-[var(--muted)]">Tag</label>
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="mt-1 w-full rounded-xl border border-white/10 bg-[var(--panel)]/60 px-3 py-2 text-sm"
            >
              {allTags.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="mt-6 overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full border-collapse">
          <thead className="bg-[var(--panel)]/60">
            <tr className="text-left text-xs uppercase tracking-wide text-[var(--muted)]">
              {headers.map((h) => (
                <th
                  key={h.key}
                  onClick={() => clickSort(h.key)}
                  className={cls("cursor-pointer px-4 py-3 select-none", h.className)}
                >
                  <div className="flex items-center gap-2">
                    {h.label}
                    {sortKey === h.key && (
                      <span className="text-[10px]">{sortDir === "asc" ? "▲" : "▼"}</span>
                    )}
                  </div>
                </th>
              ))}
              <th className="px-4 py-3 text-xs uppercase tracking-wide text-[var(--muted)]">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-[var(--panel)]/40 text-sm">
            {filtered.map((o) => (
              <tr key={o.id} className="border-t border-white/10 hover:bg-white/5">
                {/* Opportunity */}
                <td className="px-4 py-3">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <Link href={`/defense/opportunities/${o.id}`} className="font-medium hover:underline">
                        {o.title}
                      </Link>
                      {o.link && (
                        <a
                          href={o.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-[var(--accent)] hover:underline"
                        >
                          External →
                        </a>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {o.tags.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                </td>

                {/* Agency/Bureau */}
                <td className="px-4 py-3">
                  <div className="flex flex-col">
                    <span className="font-medium">{o.agency}</span>
                    {o.bureau && <span className="text-xs text-[var(--muted)]">{o.bureau}</span>}
                  </div>
                </td>

                {/* Vehicle */}
                <td className="hidden px-4 py-3 md:table-cell">{o.vehicle}</td>

                {/* Status */}
                <td className="px-4 py-3">
                  <div className="inline-flex items-center gap-2">
                    <StatusDot status={o.status} />
                    <span>{o.status}</span>
                  </div>
                </td>

                {/* Posted */}
                <td className="hidden px-4 py-3 md:table-cell">
                  {o.posted ?? "—"}
                </td>

                {/* Due */}
                <td className="hidden px-4 py-3 sm:table-cell">
                  {o.dueDate ?? "—"}
                </td>

                {/* Value */}
                <td className="hidden px-4 py-3 lg:table-cell">
                  {o.value ?? "—"}
                </td>

                {/* Actions */}
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={`/defense/opportunities/${o.id}`}
                      className="rounded-full border border-white/10 bg-[var(--panel)]/60 px-3 py-1 text-xs"
                    >
                      Open
                    </Link>
                    <Link
                      href={`/contact?context=defense&op=${o.id}`}
                      className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs text-white"
                    >
                      Team
                    </Link>
                  </div>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td colSpan={headers.length + 1} className="px-4 py-10 text-center text-[var(--muted)]">
                  No opportunities match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      {/* Footer helper */}
      <section className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs text-[var(--muted)]">
          Showing <strong>{filtered.length}</strong> of {MOCK.length}
        </div>
        <div className="flex flex-wrap gap-2">
          <Pill>Pro tip: Click headers to sort</Pill>
          <Pill>Use tags to narrow tech fit</Pill>
        </div>
      </section>
    </main>
  );
}
