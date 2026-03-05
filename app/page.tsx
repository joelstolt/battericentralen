import HeroSlider from "./components/HeroSlider";
import { ScrollReveal } from "./components/ScrollReveal";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <HeroSlider />

      {/* PRODUKTER */}
      <section className="px-[5%] py-24 md:py-32">
        <div className="mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#F0C435]">Produkter</p>
              <h2 className="mb-5 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">Batterier för alla behov</h2>
              <p style={{ color: "var(--text-secondary)" }} className="leading-relaxed">Högkvalitativa batterier skräddarsydda för företag och professionella verksamheter – från fordon till industri.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Startbatterier", desc: "Maximal starteffekt för bilar, lastbilar, bussar, båtar och husbilar.", img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80", url: "/batterier" },
              { title: "Truckbatterier", desc: "Anpassade för lager och logistik – intensiv användning, lång drifttid.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80", url: "/batterier" },
              { title: "Liftbatterier", desc: "Robust konstruktion för lyftutrustning och arbetsplattformar.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80", url: "/batterier" },
              { title: "Stationära batterier", desc: "Telekom, reservkraft och energilagring med hög kapacitet.", img: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=600&q=80", url: "/batterier" },
              { title: "Fritidsbatterier", desc: "Pålitlig kraft för MC, båtar, husbilar, husvagnar och ATV.", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80", url: "/batterier" },
              { title: "Industribatterier", desc: "Byggda för industrins tuffaste krav med lång livslängd.", img: "https://images.unsplash.com/photo-1616432043562-3671ea2e5571?w=800&q=80", url: "/batterier" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <a href={item.url} className="card-lift group block overflow-hidden rounded-2xl" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <div className="relative h-[200px] overflow-hidden">
                    <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-10 text-center">
              <a href="/batterier" className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-bold transition-all hover:brightness-110" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)" }}>
                Se hela sortimentet
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* TJÄNSTER */}
      <section className="px-[5%] py-24 md:py-32" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#F0C435]">Tjänster</p>
              <h2 className="mb-5 text-3xl font-extrabold tracking-tight md:text-4xl">Mer än bara batterier</h2>
              <p style={{ color: "var(--text-secondary)" }} className="leading-relaxed">Vi erbjuder komplett batteriservice – från rådgivning och montering till underhåll och starthjälp.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Batteriservice", desc: "Test, statuskontroll och rådgivning för alla typer av batterier.", icon: "🔧" },
              { title: "Starthjälp", desc: "Snabb starthjälp när batteriet inte räcker till.", icon: "⚡" },
              { title: "Batterimontering", desc: "Professionell montering enligt tillverkarens specifikationer.", icon: "🔩" },
              { title: "Batteribyte", desc: "Vi byter batteri i truckar, liftar, städmaskiner och fordon.", icon: "🔄" },
              { title: "Batteriunderhåll", desc: "Förebyggande underhåll som förlänger batteriernas livslängd.", icon: "🛡️" },
              { title: "Rådgivning", desc: "Vi hjälper dig välja rätt batteri för din verksamhet.", icon: "💬" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-lift rounded-2xl p-6" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0C435]/10 text-2xl">{item.icon}</div>
                  <h3 className="mb-2 text-base font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* VARFÖR BATTERICENTRALEN */}
      <section className="relative overflow-hidden px-[5%] py-24 md:py-32" style={{ backgroundColor: "#1B3A6B" }}>
        <div className="grid-pattern absolute inset-0 opacity-20" />
        <div className="relative z-10 mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#F0C435]">Varför oss</p>
              <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-white md:text-4xl">Battericentralen i Hässleholm</h2>
              <p className="mb-12 text-lg text-white/70 leading-relaxed">Vi är specialister på batterier och har levererat pålitliga energilösningar till företag och privatpersoner i över 30 år. Vår kunskap, vårt breda sortiment och vår personliga service gör oss till din självklara partner.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: "Expertkunskap", desc: "Vi hjälper dig välja rätt batteri för din specifika användning – oavsett om det gäller fordon, industri eller fritid." },
              { title: "Snabba leveranser", desc: "Med lager i Hässleholm och leveranser över hela Sverige ser vi till att du aldrig behöver vänta." },
              { title: "Miljöansvar", desc: "Vi är anslutna till BlyBatteriRetur och arbetar aktivt med ansvarsfull återvinning. Över 95% av alla blybatterier i Sverige återvinns." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <h3 className="mb-3 text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-[5%] py-24 md:py-32">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight md:text-4xl">
              Behöver du hjälp att hitta <span className="text-[#F0C435]">rätt batteri?</span>
            </h2>
            <p className="mb-10 text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Kontakta oss så hjälper vi dig hitta den perfekta lösningen för din verksamhet. Snabbt, enkelt och med personlig service.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="/kontakt" className="rounded-lg bg-[#F0C435] px-8 py-4 text-base font-bold text-[#0B0F1A] shadow-[0_4px_20px_rgba(240,196,53,0.3)] transition-all hover:shadow-[0_8px_30px_rgba(240,196,53,0.4)] hover:brightness-110">
                Kontakta oss
              </a>
              <a href="tel:045110916" className="flex items-center gap-2 rounded-lg px-8 py-4 text-base font-semibold transition-all" style={{ border: "2px solid var(--border)", color: "var(--text-primary)" }}>
                <svg className="h-5 w-5 text-[#F0C435]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
                0451-10916
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
