"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1400&q=85",
    tag: "Startbatterier",
    caption: "Maximal starteffekt för alla typer av fordon",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=85",
    tag: "Industri & Lager",
    caption: "Skräddarsydda lösningar för intensiv drift",
  },
  {
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eebd21d?w=1400&q=85",
    tag: "Snabba leveranser",
    caption: "Vi levererar batterier över hela Sverige",
  },
];

const stats = [
  { value: "30+", label: "Års erfarenhet" },
  { value: "1000+", label: "Nöjda kunder" },
  { value: "24h", label: "Snabb leverans" },
  { value: "100%", label: "Kvalitetsgaranti" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [current]);

  function goTo(index: number) {
    if (index === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(index);
      setFading(false);
    }, 350);
  }

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[var(--bg-primary)]">
      {/* ── LEFT: Content ─────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-14 lg:px-20 py-32 lg:py-0 w-full lg:w-[52%]">
        {/* Grid overlay – subtle */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gold accent line */}
        <div className="w-12 h-[3px] bg-[var(--accent)] mb-8 rounded-full" />

        {/* Eyebrow */}
        <span className="inline-block text-[var(--accent)] text-sm font-semibold tracking-widest uppercase mb-5">
          Batterileverantör sedan 1988
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.08] text-[var(--text-primary)] mb-6">
          Din partner för
          <br />
          <span className="text-[var(--accent)]">rätt batteri</span>
          <br />
          — direkt.
        </h1>

        {/* Subtext */}
        <p className="text-[var(--text-secondary)] text-lg max-w-[480px] leading-relaxed mb-10">
          Oavsett om du representerar ett företag eller är privatkund erbjuder
          vi snabba, säkra och behovsanpassade leveranser av batterier, laddare
          och tillbehör till alla typer av fordon och elutrustning.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-14">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-[var(--accent)] text-[#0a0a0a] font-bold px-8 py-4 rounded-lg text-base hover:brightness-110 transition-all duration-200 shadow-lg shadow-[var(--accent)]/20"
          >
            Kontakta oss
          </Link>
          <Link
            href="/batterier"
            className="inline-flex items-center gap-2 border border-[var(--text-primary)]/20 text-[var(--text-primary)] font-semibold px-8 py-4 rounded-lg text-base hover:bg-[var(--text-primary)]/8 transition-all duration-200"
          >
            Se sortimentet
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[var(--text-primary)]/10 pt-10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-[var(--accent)] mb-1">
                {s.value}
              </div>
              <div className="text-sm text-[var(--text-muted)]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT: Image slider ───────────────────────────────────── */}
      <div className="relative w-full lg:w-[48%] h-[400px] lg:h-auto lg:min-h-screen overflow-hidden">
        {/* Images */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current && !fading ? 1 : 0 }}
          >
            <img
              src={slide.image}
              alt={slide.tag}
              className="w-full h-full object-cover"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-[var(--bg-primary)] lg:via-transparent lg:to-transparent" />
          </div>
        ))}

        {/* Slide caption */}
        <div className="absolute bottom-10 left-8 right-8 z-10">
          <div
            className="transition-all duration-500"
            style={{ opacity: fading ? 0 : 1, transform: fading ? "translateY(6px)" : "translateY(0)" }}
          >
            <span className="inline-block bg-[var(--accent)]/15 border border-[var(--accent)]/30 text-[var(--accent)] text-xs font-semibold px-3 py-1 rounded-full mb-2 tracking-wide uppercase">
              {slides[current].tag}
            </span>
            <p className="text-white/80 text-sm font-medium">
              {slides[current].caption}
            </p>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-10 right-8 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Bild ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                background:
                  i === current
                    ? "var(--accent)"
                    : "rgba(255,255,255,0.35)",
              }}
            />
          ))}
        </div>

        {/* Vertical text label */}
        <div className="hidden lg:flex absolute top-1/2 right-5 -translate-y-1/2 z-10 items-center gap-2 -rotate-90 origin-center">
          <span className="text-white/30 text-xs tracking-[0.25em] uppercase font-medium whitespace-nowrap">
            {current + 1} / {slides.length}
          </span>
        </div>
      </div>
    </section>
  );
}
