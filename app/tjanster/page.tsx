import { ScrollReveal } from "../components/ScrollReveal";

export default function Tjanster() {
  return (
    <main>
      <section className="relative overflow-hidden px-[5%] pb-20 pt-36 md:pb-28 md:pt-44" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="grid-pattern absolute inset-0 opacity-50" />
        <div className="relative z-10 mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#F0C435]">Tjänster</p>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">Batteriservice för företag</h1>
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>Komplett batteriservice anpassad för professionella verksamheter – från test och montering till förebyggande underhåll.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-[5%] py-24 md:py-32">
        <div className="mx-auto max-w-[1312px]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              { title: "Batteriservice", desc: "Vi erbjuder batteriservice för företag som är beroende av tillförlitlig energiförsörjning i fordon, maskiner och stationära system. Batteritest, statuskontroll, kontroll av laddning, anslutningar och säkerhetsfunktioner.", icon: "🔧", features: ["Batteritest och statuskontroll", "Kontroll av laddning och anslutningar", "Rådgivning kring val av batterityp"] },
              { title: "Starthjälp", desc: "Snabb och professionell starthjälp när batteriet inte räcker till. Vi ser till att du kommer igång igen utan onödiga driftstopp.", icon: "⚡", features: ["Snabb utryckning", "Professionell utrustning", "Diagnos av batteristatus"] },
              { title: "Batterimontering", desc: "Professionell montering enligt tillverkarens specifikationer. Korrekt montering är viktigt för både funktion och säkerhet.", icon: "🔩", features: ["Montering enligt specifikation", "Alla typer av fordon och maskiner", "Säkerhetskontroll"] },
              { title: "Batteribyte", desc: "Vi ansvarar för hela processen vid batteribyte, från val av batteri till färdig installation i truckar, liftar, städmaskiner och fordon.", icon: "🔄", features: ["Val av rätt batteri", "Demontage och montering", "Test och kvalitetskontroll"] },
              { title: "Batteriunderhåll", desc: "Regelbunden batteriservice minskar risken för akuta problem. Genom planerade kontroller får ni överblick över batteriernas skick.", icon: "🛡️", features: ["Planerade kontroller", "Statusrapporter", "Förebyggande åtgärder"] },
              { title: "Rådgivning", desc: "Med vår expertkunskap hjälper vi dig välja rätt batterilösning utifrån din verksamhets specifika behov och driftmönster.", icon: "💬", features: ["Behovsanalys", "Produktrekommendationer", "Optimering av driftkostnader"] },
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-lift h-full rounded-2xl p-8" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F0C435]/10 text-2xl">{service.icon}</div>
                  <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{service.desc}</p>
                  <div className="space-y-2">
                    {service.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <svg className="h-4 w-4 shrink-0 text-[#F0C435]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                        <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[5%] py-24 md:py-32" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight md:text-4xl">Behöver ni <span className="text-[#F0C435]">batteriservice?</span></h2>
            <p className="mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>Kontakta oss för dialog om hur vi kan stödja er verksamhet med professionell batteriservice.</p>
            <a href="/kontakt" className="rounded-lg bg-[#F0C435] px-8 py-4 text-base font-bold text-[#0B0F1A] shadow-[0_4px_20px_rgba(240,196,53,0.3)] transition-all hover:shadow-[0_8px_30px_rgba(240,196,53,0.4)] hover:brightness-110">Kontakta oss</a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
