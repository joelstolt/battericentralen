export const Footer = () => {
  return (
    <footer className="px-[5%] py-12 md:py-16" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
      <div className="mx-auto max-w-[1312px]">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <img src="/logo.webp" alt="Battericentralen" className="mb-4 h-12 w-auto" />
            <p className="max-w-xs text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Din batterileverantör i Hässleholm. Batterier, laddare och tillbehör till alla typer av fordon och elutrustning.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#F0C435]">Produkter</h4>
            <div className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
              <a href="/batterier" className="transition-colors hover:text-[#F0C435]">Batterier</a>
              <a href="/tjanster" className="transition-colors hover:text-[#F0C435]">Tjänster</a>
              <a href="/faq" className="transition-colors hover:text-[#F0C435]">FAQ</a>
              <a href="/miljo" className="transition-colors hover:text-[#F0C435]">Miljö</a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#F0C435]">Kontakt</h4>
            <div className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
              <a href="https://maps.app.goo.gl/X7WDfR7PK9wsmeSQ6" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#F0C435]">Åkaregatan 26, 281 33 Hässleholm</a>
              <a href="tel:045110916" className="transition-colors hover:text-[#F0C435]">0451-10916</a>
              <a href="mailto:info@battericentralen.se" className="transition-colors hover:text-[#F0C435]">info@battericentralen.se</a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#F0C435]">Öppettider</h4>
            <div className="flex flex-col gap-2.5 text-sm" style={{ color: "var(--text-secondary)" }}>
              <span>Måndag–Torsdag: 08–17</span>
              <span>Fredag: 08–16</span>
              <span>Lunchstängt: 12–13</span>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 pt-8 md:flex-row" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>© 2025 Battericentralen. Alla rättigheter förbehållna.</p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>Leveranser över hela Sverige</p>
        </div>
      </div>
    </footer>
  );
};
