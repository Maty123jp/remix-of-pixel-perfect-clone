import { Link } from "@tanstack/react-router";
import { NAV, SITE } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-border bg-secondary">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold text-primary">{SITE.name}</p>
          <p className="mt-2 text-base text-muted-foreground">{SITE.places}</p>
        </div>

        <div>
          <p className="text-base font-bold text-primary">Kontakt</p>
          <ul className="mt-2 space-y-2 text-base">
            <li>
              <a className="underline underline-offset-4" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </li>
            <li>
              <a className="underline underline-offset-4" href={`tel:${SITE.phoneHref}`}>
                {SITE.phone}
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Menu v patičce">
          <p className="text-base font-bold text-primary">Stránky</p>
          <ul className="mt-2 space-y-2 text-base">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="underline underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
