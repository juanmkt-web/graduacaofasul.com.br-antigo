import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoFasul from "@/assets/logo-fasul-lp-2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Debug (temporary): helps identify if the header is being hidden after initial paint.
  useEffect(() => {
    const el = document.querySelector("header");
    console.log("[Header] mounted", {
      hasHeader: Boolean(el),
    });

    const log = (label: string) => {
      const headerEl = document.querySelector("header") as HTMLElement | null;
      if (!headerEl) return console.log(`[Header] ${label}: not found`);
      const styles = window.getComputedStyle(headerEl);
      console.log(`[Header] ${label}`, {
        display: styles.display,
        opacity: styles.opacity,
        visibility: styles.visibility,
        zIndex: styles.zIndex,
        rect: headerEl.getBoundingClientRect(),
      });
    };

    requestAnimationFrame(() => log("rAF"));
    const t = window.setTimeout(() => log("+1200ms"), 1200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] isolate bg-[#1e2842] border-b border-white/10 shadow-lg overflow-visible">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 md:py-5 flex items-center justify-between w-full gap-2">
        <div className="flex items-center min-w-0">
          <img
            src={logoFasul}
            alt="Fasul Educação"
            className="h-10 sm:h-12 md:h-14 w-auto max-w-[160px] sm:max-w-[200px] object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center gap-10">
          <a href="#cursos" className="text-base font-medium text-white hover:scale-110 transition-all duration-300">
            Cursos
          </a>
          <a href="#sobre" className="text-base font-medium text-white hover:scale-110 transition-all duration-300">
            Como Funciona
          </a>
          <a
            href="#depoimentos"
            className="text-base font-medium text-white hover:scale-110 transition-all duration-300"
          >
            Alunos
          </a>
        </nav>

        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          <a href="https://www.fasuleducacional.edu.br/posgraduacao/cursos" target="_blank" rel="noopener noreferrer">
            <Button
              variant="default"
              className="bg-primary text-primary-foreground hover:bg-primary/80 font-semibold rounded-full whitespace-nowrap text-[10px] sm:text-sm md:text-base px-2 sm:px-4 md:px-5 py-1.5 sm:py-2.5"
            >
              COMECE AGORA
            </Button>
          </a>

          {/* Mobile hamburger menu */}
          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsMenuOpen(false)} />}

      {/* Mobile menu sidebar */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-72 bg-[#1e2842] z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <img src={logoFasul} alt="Fasul Educação" className="h-10" />
          <button className="p-2 text-white" onClick={() => setIsMenuOpen(false)} aria-label="Fechar menu">
            <X className="h-7 w-7" />
          </button>
        </div>
        <nav className="px-5 py-7 flex flex-col gap-3">
          <a
            href="#cursos"
            className="text-lg font-medium text-white py-3.5 border-b border-white/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Cursos
          </a>
          <a
            href="#sobre"
            className="text-lg font-medium text-white py-3.5 border-b border-white/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Como Funciona
          </a>
          <a
            href="#depoimentos"
            className="text-lg font-medium text-white py-3.5 border-b border-white/10"
            onClick={() => setIsMenuOpen(false)}
          >
            Alunos
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
