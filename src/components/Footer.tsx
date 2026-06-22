import { links, navItems } from "../content/site";
import { ExternalLink } from "./ExternalLink";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="footer">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <BrandMark />
          <nav className="flex flex-wrap gap-5 text-sm" aria-label="Navegação do rodapé">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="footer-link">
                {item.label}
              </a>
            ))}
            <ExternalLink className="footer-link" href={links.instagram}>
              Instagram
            </ExternalLink>
            <ExternalLink className="footer-link" href={links.humanizaDev}>
              humaniza.dev
            </ExternalLink>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>Médicos de Gente, um capítulo da Humaniza Health.</span>
          <span>© 2026 Médicos de Gente. Todos os direitos reservados.</span>
          <span className="flex gap-3">
            <a href="/termos-uso.html">Termos</a>
            <a href="/politica-privacidade.html">Privacidade</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
