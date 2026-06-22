import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { links, navItems } from "../content/site";
import { BrandMark } from "./BrandMark";
import { ExternalLink } from "./ExternalLink";

type Theme = "dark" | "light";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  try {
    const storedTheme = window.localStorage.getItem("mdg-theme");
    return storedTheme === "light" || storedTheme === "dark" ? storedTheme : "dark";
  } catch {
    return "dark";
  }
}

export function Nav() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("mdg-theme", theme);
    } catch {
      // Theme still works without persistence when storage is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  const themeLabel = theme === "dark" ? "Modo escuro ativo. Ativar tema claro" : "Modo claro ativo. Ativar tema escuro";

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div className="site-header-shell mx-auto flex max-w-7xl items-center justify-between rounded-[22px] px-4 py-3 md:px-5">
        <a href="#topo" className="focus-ring rounded-2xl" aria-label="Ir para o início">
          <BrandMark />
        </a>

        <nav className="hidden items-center gap-7 xl:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={themeLabel}
            aria-pressed={theme === "dark"}
          >
            <Sun size={16} />
            <span className="theme-toggle-track" aria-hidden="true">
              <span className="theme-toggle-thumb" />
            </span>
            <Moon size={16} />
          </button>
          <ExternalLink className="btn btn-primary btn-small" href={links.humaniza}>
            Conheça a Humaniza Health
          </ExternalLink>
        </div>

        <button
          type="button"
          className="icon-button xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open ? (
        <div className="mobile-menu-shell mx-auto mt-3 max-w-7xl rounded-[20px] p-4 xl:hidden">
          <nav className="grid gap-2" aria-label="Navegação mobile">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="mobile-nav-link" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <ExternalLink className="btn btn-primary mt-3 justify-center" href={links.humaniza}>
              Conheça a Humaniza Health
            </ExternalLink>
            <button
              type="button"
              className="theme-toggle mt-2 w-full justify-center"
              onClick={toggleTheme}
              aria-label={themeLabel}
              aria-pressed={theme === "dark"}
            >
              <Sun size={16} />
              <span>{theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}</span>
              <Moon size={16} />
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
