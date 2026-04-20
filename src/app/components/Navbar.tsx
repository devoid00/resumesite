"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <Link
      href={href}
      className={`group relative whitespace-nowrap transition-colors ${
        isActive ? "text-[var(--ink)]" : "text-[var(--mute)] hover:text-[var(--ink)]"
      }`}
    >
      {label}
      <span
        aria-hidden="true"
        className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ${
          isActive ? "w-full bg-[var(--accent-3)]" : "w-0 group-hover:w-full bg-[var(--accent)]"
        }`}
      />
    </Link>
  );
}

export default function Navbar() {
  const links = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/photos", label: "Photos" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const setVar = () =>
      document.documentElement.style.setProperty(
        "--sidebar-width",
        `${Math.ceil(el.offsetWidth)}px`
      );

    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    setVar();

    return () => ro.disconnect();
  }, []);

  return (
    <aside
      ref={ref}
      className="
        fixed left-6 top-8 z-50
        flex flex-col
        rounded-2xl border border-white/10
        bg-[color-mix(in_srgb,var(--panel)_70%,transparent)]
        backdrop-blur-2xl shadow-[0_6px_30px_rgba(0,0,0,0.25)]
        px-4 py-5 gap-3
        w-auto max-w-fit
      "
      style={{ height: "fit-content" }}
    >
      <nav className="flex flex-col gap-2 text-sm font-medium">
        {links.map((l) => (
          <NavLink key={l.href} {...l} />
        ))}
      </nav>
    </aside>
  );
}
