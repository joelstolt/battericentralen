import { ScrollReveal } from "../components/ScrollReveal";

export default function Batterier() {
  const categories = [
    { title: "Startbatterier", desc: "Maximal starteffekt och driftsäkerhet för bilar, lastbilar, bussar, båtar, husbilar och dieseltruckar. Hög kvalitet och lång livslängd.", img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80", types: ["Bil", "Lastbil", "Buss", "Båt", "Husbil", "Dieseltruck"] },
    { title: "Truckbatterier", desc: "Särskilt anpassade för lager och logistik. Designade för intensiv användning med långvarig drifttid för effektiv och pålitlig arbetsmiljö.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80", types: ["Motviktstruck", "Dieseltruck", "Teleskoptruck", "Skjutstativtruck", "Ledstaplare", "Hjullastare"] },
    { title: "Liftbatterier", desc: "Utformade för att möta kraven inom lyftutrustning och arbetsplattformar. Robust konstruktion och hög prestanda under krävande förhållanden.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", types: ["Teleskoplift", "Pelarlift", "Saxlift", "Vikbomslift", "Släpvagnslift"] },
    { title: "Stationära batterier", desc: "Viktiga för säkerhetskritiska system och energilagring inom telekom, reservkraft och stationära applikationer. Hög kapacitet och låg självurladdning.", img: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&q=80", types: ["Blybatterier", "Litiumbatterier"] },
    { title: "Traktionsbatterier", desc: "Robust lösning för elektriska fordon och maskiner i krävande miljöer. Lång livslängd för gaffeltruckar, pallyftare och liknande utrustning.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", types: ["Gaffeltruckar", "Pallyftare", "Bygg & entreprenad"] },
    { title: "Fritidsbatterier", desc: "Pålitlig och långvarig kraft för husbilar, husvagnar, båtar, MC, mopeder, gräsklippare, ATV och permobiler.", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80", types: ["Båt", "MC", "Moped", "Husvagn", "Gräsklippare", "Husbil", "ATV", "Permobil"] },
    { title: "Industribatterier", desc: "Byggda för industrins tuffaste krav med hög kvalitet och lång livslängd. Stabil drift och effektiv energiförsörjning.", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", types: ["Industri", "Produktion", "Lager"] },
    { title: "Städmaskinsbatterier", desc: "Anpassade för professionell rengöringsutrustning. Lång driftstid och hög prestanda för städverksamheter.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80", types: ["Skurmaskiner", "Städmaskiner"] },
    { title: "Tillbehör", desc: "Laddare, förbindningskablar och startkablar. Allt du behöver för installation, användning och underhåll av dina batterier.", img: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?w=800&q=80", types: ["Laddare", "Förbindningskablar", "Startkablar"] },
  ];

  return (
    <main>
      <section className="relative overflow-hidden px-[5%] pb-20 pt-36 md:pb-28 md:pt-44" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="grid-pattern absolute inset-0 opacity-50" />
        <div className="relative z-10 mx-auto max-w-[1312px]">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#F0C435]">Sortiment</p>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">Batterier</h1>
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>Högkvalitativa industriella batterier som levererar prestanda och kvalité. Ett brett sortiment skräddarsytt för företag och professionella verksamheter.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-[5%] py-24 md:py-32">
        <div className="mx-auto max-w-[1312px] space-y-16">
          {categories.map((cat, i) => (
            <ScrollReveal key={i}>
              <div className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <h2 className="mb-4 text-2xl font-extrabold md:text-3xl">{cat.title}</h2>
                  <p className="mb-6 leading-relaxed" style={{ color: "var(--text-secondary)" }}>{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.types.map((type, j) => (
                      <span key={j} className="rounded-full px-3 py-1 text-xs font-medium" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>{type}</span>
                    ))}
                  </div>
                </div>
                <div className={`overflow-hidden rounded-2xl ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                  <img src={cat.img} alt={cat.title} className="h-[300px] w-full object-cover" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="px-[5%] py-24 md:py-32" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight md:text-4xl">Hittar du inte vad du söker?</h2>
            <p className="mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>Kontakta oss så hjälper vi dig hitta rätt batteri för dina behov.</p>
            <a href="/kontakt" className="rounded-lg bg-[#F0C435] px-8 py-4 text-base font-bold text-[#0B0F1A] shadow-[0_4px_20px_rgba(240,196,53,0.3)] transition-all hover:shadow-[0_8px_30px_rgba(240,196,53,0.4)] hover:brightness-110">Kontakta oss</a>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
