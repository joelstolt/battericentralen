"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { title: "Hem", url: "/" },
    { title: "Batterier", url: "/batterier" },
    { title: "Tjänster", url: "/tjanster" },
    { title: "FAQ", url: "/faq" },
    { title: "Miljö", url: "/miljo" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || isOpen ? "backdrop-blur-xl shadow-sm" : ""}`}
      style={{ backgroundColor: "var(--nav-bg)", borderBottom: "1px solid var(--border)" }}>
      
      {/* Top bar */}
      <div className="hidden border-b lg:block" style={{ borderColor: "var(--border)" }}>
        <div className="mx-auto flex h-9 max-w-[1312px] items-center justify-end gap-6 px-[5%] text-xs" style={{ color: "var(--text-muted)" }}>
          <a href="tel:045110916" className="flex items-center gap-1.5 transition-colors hover:text-[#F0C435]">
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
            0451-10916
          </a>
          <a href="mailto:info@battericentralen.se" className="flex items-center gap-1.5 transition-colors hover:text-[#F0C435]">
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
            info@battericentralen.se
          </a>
          <span className="flex items-center gap-1.5">
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Mån–Tor 08–17 · Fre 08–16
          </span>
        </div>
      </div>

      <div className="mx-auto flex h-[68px] max-w-[1312px] items-center justify-between px-[5%]">
        <a href="/" className="flex items-center">
          <img src="/logo.webp" alt="Battericentralen" className="h-18 w-auto max-w-[160px] object-contain -ml-10" style={{ filter: theme === "dark" ? "brightness(1.8) saturate(0.3) invert(0.85)" : "none" }} />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link, i) => (
            <a key={i} href={link.url} className="text-sm font-medium transition-colors hover:text-[#F0C435]" style={{ color: "var(--text-secondary)" }}>{link.title}</a>
          ))}

          {/* Theme toggle */}
          <button onClick={toggle} className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
            {theme === "dark" ? (
              <svg className="h-4 w-4 text-[#F0C435]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/></svg>
            ) : (
              <svg className="h-4 w-4" style={{ color: "var(--text-secondary)" }} fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
            )}
          </button>

          <a href="/kontakt" className="rounded-lg bg-[#F0C435] px-6 py-2.5 text-sm font-bold text-[#0B0F1A] shadow-[0_4px_16px_rgba(240,196,53,0.25)] transition-all hover:shadow-[0_6px_24px_rgba(240,196,53,0.35)] hover:brightness-110">
            Kontakta oss
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <button onClick={toggle} className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)" }}>
            {theme === "dark" ? (
              <svg className="h-4 w-4 text-[#F0C435]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd"/></svg>
            ) : (
              <svg className="h-4 w-4" style={{ color: "var(--text-secondary)" }} fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/></svg>
            )}
          </button>
          <button className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]" onClick={() => setIsOpen(!isOpen)}>
            <span className={`block h-[2px] w-5 transition-all duration-300 ${isOpen ? "translate-y-[7px] -rotate-45" : ""}`} style={{ backgroundColor: "var(--text-primary)" }}/>
            <span className={`block h-[2px] w-5 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} style={{ backgroundColor: "var(--text-primary)" }}/>
            <span className={`block h-[2px] w-5 transition-all duration-300 ${isOpen ? "-translate-y-[7px] rotate-45" : ""}`} style={{ backgroundColor: "var(--text-primary)" }}/>
          </button>
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-500 lg:hidden ${isOpen ? "max-h-[500px] pb-6" : "max-h-0"}`} style={{ backgroundColor: "var(--nav-bg)" }}>
        <div className="px-[5%]">
          {links.map((link, i) => (
            <a key={i} href={link.url} className="block py-3.5 text-base font-medium" style={{ color: "var(--text-secondary)", borderBottom: "1px solid var(--border)" }} onClick={() => setIsOpen(false)}>{link.title}</a>
          ))}
          <a href="/kontakt" className="mt-5 flex items-center justify-center rounded-lg bg-[#F0C435] px-6 py-3 text-base font-bold text-[#0B0F1A]" onClick={() => setIsOpen(false)}>Kontakta oss</a>
        </div>
      </div>
    </nav>
  );
};
