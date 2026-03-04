"use client";
import { useState } from "react";
import { ScrollReveal } from "../components/ScrollReveal";

const FAQItem = ({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) => (
  <div className="rounded-xl transition-colors" style={{ backgroundColor: open ? "var(--bg-card)" : "transparent", border: `1px solid ${open ? "var(--border-hover)" : "var(--border)"}` }}>
    <button onClick={onClick} className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-6">
      <span className="font-semibold leading-snug">{q}</span>
      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${open ? "bg-[#F0C435] text-[#0B0F1A] rotate-45" : "text-[#F0C435]"}`} style={open ? {} : { backgroundColor: "var(--bg-card)" }}>
        <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5"/></svg>
      </span>
    </button>
    <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
      <div className="overflow-hidden">
        <p className="px-5 pb-5 text-sm leading-relaxed md:px-6 md:pb-6" style={{ color: "var(--text-secondary)" }}>{a}</p>
      </div>
    </div>
  </div>
);

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const resources = [
    { title: "Guide för batteriskötsel", desc: "Grundläggande information och tips på hur du bör sköta om dina batterier.", url: "/exide-batteriskotsel.pdf" },
    { title: "Startbatteriets konstruktion & funktion", desc: "Montering och underhåll, \"Ström i båt\" samt kopplingsschema.", url: "/exide-batteriskotsel-1.pdf" },
    { title: "Ny bilteknik förändrar krav på batterier", desc: "En intressant artikel om bilar, batterier och framtiden.", url: "/ny-bilteknik.pdf" },
    { title: "Frågor och svar – teknisk karaktär", desc: "Frågor och svar av lite mer teknisk karaktär.", url: "/tudor-faq.pdf" },
  ];

  return (
    <main>
      <section className="relative overflow-hidden px-[5%] pb-20 pt-36 md:pb-28 md:pt-44" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="grid-pattern absolute inset-0 opacity-50" />
        <div className="relative z-10 mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#F0C435]">FAQ</p>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">Vanliga frågor</h1>
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>Lär dig mer om hur batterier fungerar och hur du ska sköta om dem. Med lite batterikunskap är det enkelt att välja rätt!</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-[5%] py-24 md:py-32">
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#F0C435]">Resurser & guider</p>
            <h2 className="mb-8 text-2xl font-extrabold">Ladda ner våra guider</h2>
          </ScrollReveal>

          <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {resources.map((r, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-lift flex h-full flex-col rounded-xl p-5" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F0C435]/10">
                    <svg className="h-5 w-5 text-[#F0C435]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>
                  </div>
                  <h3 className="mb-1 text-sm font-bold">{r.title}</h3>
                  <p className="mb-4 flex-1 text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>{r.desc}</p>
                  <span className="text-xs font-semibold text-[#F0C435]">Ladda ner PDF →</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="rounded-2xl p-8 text-center md:p-10" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <h3 className="mb-3 text-xl font-bold">Har du en annan fråga?</h3>
              <p className="mb-6 text-sm" style={{ color: "var(--text-secondary)" }}>Hör av dig till oss – vi hjälper gärna.</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a href="tel:045110916" className="flex items-center gap-2 text-sm font-semibold text-[#F0C435]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
                  0451-10916
                </a>
                <a href="mailto:info@battericentralen.se" className="flex items-center gap-2 text-sm font-semibold text-[#F0C435]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
                  info@battericentralen.se
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
