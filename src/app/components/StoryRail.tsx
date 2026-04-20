"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export type Item = {
  title?: string;
  subtitle?: string;
  label?: string;
  type?: "image" | "video";
  src: string;
  poster?: string;
  layout?: "landscape" | "portrait";
};

export default function StoryRail({
  items,
}: {
  items: Item[];
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const canGoLeft = activeIndex > 0;
  const canGoRight = activeIndex < items.length - 1;

  const goToIndex = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;

    const bounded = Math.max(0, Math.min(items.length - 1, index));
    const child = el.children[bounded] as HTMLElement | undefined;
    if (!child) return;

    child.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });

    setActiveIndex(bounded);
  };

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;

    const center = el.scrollLeft + el.clientWidth / 2;
    let bestIndex = 0;
    let bestDistance = Number.POSITIVE_INFINITY;

    Array.from(el.children).forEach((child, index) => {
      const node = child as HTMLElement;
      const childCenter = node.offsetLeft + node.offsetWidth / 2;
      const distance = Math.abs(center - childCenter);

      if (distance < bestDistance) {
        bestDistance = distance;
        bestIndex = index;
      }
    });

    setActiveIndex(bestIndex);
  };

  return (
    <section className="relative py-6">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="mb-4 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => goToIndex(activeIndex - 1)}
            disabled={!canGoLeft}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-[var(--ink)] transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Previous media"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => goToIndex(activeIndex + 1)}
            disabled={!canGoRight}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-[var(--ink)] transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Next media"
          >
            →
          </button>
        </div>

        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-[10vw] pb-2 [scrollbar-width:none] [-ms-overflow-style:none] md:px-[12vw]"
        >
          {items.map((item, index) => {
            const isPortrait = item.layout === "portrait";

            return (
              <article
                key={`${item.src}-${index}`}
                className={`shrink-0 snap-center transition-all duration-300 ${
                  activeIndex === index
                    ? "scale-100 opacity-100"
                    : "scale-[0.97] opacity-65"
                } ${
                  isPortrait
                    ? "w-[220px] md:w-[250px]"
                    : "w-[280px] md:w-[320px]"
                }`}
              >
                {item.label && (
                  <div className="mb-2 text-center text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] opacity-80">
                    {item.label}
                  </div>
                )}

                <div
                  className={`relative overflow-hidden rounded-xl ${
                    isPortrait ? "aspect-[9/16]" : "aspect-[4/3]"
                  }`}
                >
                  {item.type === "video" ? (
                    <video
  className={`h-full w-full rounded-xl ${
    isPortrait ? "object-contain" : "object-cover"
  }`}
  controls
  muted
  playsInline
  preload="metadata"
  poster={item.poster}
>
  <source src={item.src} type="video/mp4" />
  Your browser does not support the video tag.
</video>
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.title ?? item.label ?? ""}
                      fill
                      className={`rounded-xl ${
                        isPortrait ? "object-contain" : "object-cover"
                      }`}
                      sizes={
                        isPortrait
                          ? "(max-width: 768px) 220px, 250px"
                          : "(max-width: 768px) 280px, 320px"
                      }
                    />
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
