import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 shadow-(--shadow-header) backdrop-blur">
      <div className="container-page grid min-h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:flex lg:min-h-24 lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span
            aria-hidden
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-display text-2xl font-bold text-primary-foreground shadow-(--shadow-mark)"
          >
            V
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-xl font-bold leading-none text-primary md:text-2xl">
              {SITE.name}
            </span>
            <span className="mt-1 hidden text-xs font-bold uppercase tracking-wider text-olive sm:block">
              Plasy a přidružené obce
            </span>
          </span>
        </Link>

        <nav aria-label="Hlavní menu" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="inline-block rounded-md px-3 py-3 text-base font-bold text-foreground transition-colors hover:bg-secondary [&.active]:bg-primary [&.active]:text-primary-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          className="inline-flex min-h-12 items-center gap-2 rounded-md border-2 border-primary px-4 py-3 text-base font-bold text-primary lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          Menu
        </button>
      </div>

      {open && (
        <nav aria-label="Hlavní menu" className="border-t border-border bg-background lg:hidden">
          <ul className="container-page flex flex-col py-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-4 text-lg font-semibold [&.active]:bg-secondary [&.active]:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
