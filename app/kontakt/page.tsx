import { ScrollReveal } from "../components/ScrollReveal";

export default function Kontakt() {
  return (
    <main>
      <section className="relative overflow-hidden px-[5%] pb-20 pt-36 md:pb-28 md:pt-44" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="grid-pattern absolute inset-0 opacity-50" />
        <div className="relative z-10 mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#F0C435]">Kontakt</p>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">Kontakta oss</h1>
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>Behöver du hjälp med batterier? Hör av dig så återkommer vi snabbt.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-[5%] py-24 md:py-32">
        <div className="mx-auto max-w-[1312px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <h2 className="mb-8 text-2xl font-extrabold">Skicka ett meddelande</h2>
                
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-6">
                {[
                  { label: "Adress", value: "Åkaregatan 26, 281 33 Hässleholm", href: "https://maps.app.goo.gl/X7WDfR7PK9wsmeSQ6", icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg> },
                  { label: "Telefon", value: "0451-10916", href: "tel:045110916", icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg> },
                  { label: "E-post", value: "info@battericentralen.se", href: "mailto:info@battericentralen.se", icon: <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg> },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl p-5" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F0C435]/10 text-[#F0C435]">{item.icon}</div>
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-base font-semibold transition-colors hover:text-[#F0C435]">{item.value}</a>
                    ) : (
                      <p className="text-base font-semibold">{item.value}</p>
                    )}
                  </div>
                ))}

                <div className="rounded-xl p-5" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F0C435]/10">
                    <svg className="h-5 w-5 text-[#F0C435]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Öppettider</p>
                  <div className="space-y-1 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <p><span className="font-medium" style={{ color: "var(--text-primary)" }}>Mån–Tor:</span> 08:00–17:00</p>
                    <p><span className="font-medium" style={{ color: "var(--text-primary)" }}>Fredag:</span> 08:00–16:00</p>
                    <p><span className="font-medium" style={{ color: "var(--text-primary)" }}>Lunch:</span> 12:00–13:00</p>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl" style={{ border: "1px solid var(--border)" }}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2213.5!2d13.7665!3d56.1590!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s%C3%85karegatan+26%2C+281+33+H%C3%A4ssleholm!5e0!3m2!1ssv!2sse!4v1" width="100%" height="250" style={{ border: 0 }} allowFullScreen loading="lazy" title="Battericentralen karta" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
