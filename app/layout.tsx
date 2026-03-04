import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Battericentralen – Din Batterileverantör i Hässleholm",
  description: "Batterier, laddare och tillbehör till alla typer av fordon och elutrustning. Leveranser över hela Sverige. Ring 0451-10916.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" data-theme="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
