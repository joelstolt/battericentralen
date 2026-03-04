import { ScrollReveal } from "../components/ScrollReveal";

export default function Miljo() {
  return (
    <main>
      <section className="relative overflow-hidden px-[5%] pb-20 pt-36 md:pb-28 md:pt-44" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="grid-pattern absolute inset-0 opacity-50" />
        <div className="relative z-10 mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#F0C435]">Miljö</p>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">Hållbart batteriliv</h1>
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>Blybatterier lever ett i högsta grad miljöanpassat liv – med över 95% återvinningsgrad i Sverige.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-[5%] py-24 md:py-32">
        <div className="mx-auto max-w-[900px]">
          {/* Stats */}
          <ScrollReveal>
            <div className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                { number: "95%", label: "Återvinningsgrad i Sverige" },
                { number: "ISO 14001", label: "Certifierad miljöledning" },
                { number: "Sedan 1988", label: "Systematisk insamling" },
              ].map((s, i) => (
                <div key={i} className="rounded-2xl p-6 text-center" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <p className="text-2xl font-extrabold text-[#F0C435]">{s.number}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 text-2xl font-extrabold">Tillverkning med grönt samvete</h2>
                <div className="space-y-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <p>Miljöfrågorna har sedan länge stått i fokus vid tillverkning och hantering av blybatterier. Detta har varit särskilt viktigt eftersom blybatterier innehåller ämnen, i form av bly, blyföreningar och svavelsyra, som om de släpps ut till omgivningen har negativ påverkan på miljön. Att minimera blybatteriernas miljöpåverkan är därför en naturlig och angelägen uppgift för oss som batteriproducenter.</p>
                  <p>De viktigaste åtgärderna har dels varit att så långt som möjligt begränsa utsläppen från fabrikerna i samband med tillverkningen, och dels att skapa ett effektivt system för insamling av förbrukade batterier.</p>
                </div>
              </div>

              <div className="rounded-2xl p-8" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <h3 className="mb-4 text-lg font-bold">Tillverkningen kännetecknas av:</h3>
                <div className="space-y-3">
                  {[
                    "Merparten av det bly som används i produktionen är återvunnet från gamla batterier.",
                    "Noggrann utsläppskontroll med en omfattande rening av luft och processvatten.",
                    "Emissionsnivåerna registreras kontinuerligt för att säkerställa att gränsvärden innehålls.",
                    "Alla Exide Technologies fabriker arbetar efter miljöledningssystem certifierade enligt ISO 14001.",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#F0C435]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-extrabold">Över 95% återvinning</h2>
                <div className="space-y-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  <p>Idag finns ett väl fungerande system för återvinning av blybatterier. Återvinningsgraden är i Sverige så hög som ca 95%, vilket innebär att i stort sett alla förbrukade batterier går till återvinning.</p>
                  <p>Det svenska systemet för insamling av startbatterier infördes 1988. Den 1 januari 2009 trädde ett nytt EU-direktiv i kraft, med påföljande producentansvar för producenter och importörer. Batteribranschen har samlats till att bilda BlyBatteriRetur i Sverige AB – ett riksomfattande och kostnadseffektivt system som lever upp till lagens alla krav.</p>
                  <p>Exide Technologies AB är anslutna till BlyBatteriRetur. För mer info kring hantering av skrotbatterier besök <a href="http://www.blybatteriretur.se/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#F0C435] underline">blybatteriretur.se</a>.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
