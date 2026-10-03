import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, MapPin } from "lucide-react";
import { Placeholder } from "@/components/Placeholder";
import { SITE, pastEvents, upcomingEvents } from "@/data/site";

export const Route = createFileRoute("/akce")({
  head: () => ({
    meta: [
      { title: "Akce – Více pro seniory" },
      {
        name: "description",
        content:
          "Nejbližší akce Více pro seniory v Plasích a přidružených obcích: den otevřených dveří ve škole a zájezd na Šumavu.",
      },
      { property: "og:title", content: "Akce – Více pro seniory" },
      {
        property: "og:description",
        content: "Pojďme se potkávat, poznávat nová místa a trávit čas společně.",
      },
    ],
  }),
  component: Events,
});

function Events() {
  const upcoming = upcomingEvents();
  const past = pastEvents();

  return (
    <>
      <section className="section">
        <div className="container-page max-w-3xl">
          <h1 className="text-4xl font-bold text-primary md:text-5xl">Akce</h1>
          <p className="mt-6 text-lg">
            Pojďme se potkávat, poznávat nová místa a trávit čas společně. Tady najdete nejbližší
            akce Více pro seniory. Budeme průběžně doplňovat další pozvánky i zprávy z uskutečněných
            setkání.
          </p>
        </div>
      </section>

      <section className="pb-4">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Nejbližší akce</h2>
          <div className="mt-10 grid gap-8">
            {upcoming.length === 0 && (
              <p className="text-lg">
                Právě teď nemáme vypsanou žádnou akci. Nové pozvánky zveřejníme zde.
              </p>
            )}
            {upcoming.map((event) => (
              <article
                key={event.slug}
                id={event.slug}
                className="grid scroll-mt-28 gap-0 overflow-hidden rounded-2xl bg-card shadow-(--shadow-card) md:grid-cols-[18rem_1fr]"
              >
                <Placeholder
                  label={event.posterAlt}
                  className="min-h-56 rounded-none border-0 border-b-2 md:border-b-0 md:border-r-2"
                />
                <div className="p-7 md:p-9">
                  <h3 className="text-2xl font-bold text-primary">{event.title}</h3>
                  <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-base font-semibold text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays aria-hidden className="size-5 text-olive" />
                      {event.dateLabel}
                      {event.timeLabel ? ` ${event.timeLabel}` : ""}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin aria-hidden className="size-5 text-olive" />
                      {event.place}
                    </span>
                  </p>
                  {event.paragraphs.map((p) => (
                    <p key={p} className="mt-4 text-lg">
                      {p}
                    </p>
                  ))}
                  <p className="mt-4 rounded-xl bg-accent p-5 text-base font-semibold text-primary">
                    {event.signup}
                  </p>
                  {event.pendingDetails && (
                    <ul className="mt-4 space-y-1 text-base text-muted-foreground">
                      {event.pendingDetails.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href={`mailto:${SITE.email}?subject=${encodeURIComponent(event.title)}`}
                      className="inline-flex min-h-14 items-center justify-center rounded-xl bg-primary px-7 text-base font-semibold text-primary-foreground"
                    >
                      Přihlásit se e-mailem
                    </a>
                    <a
                      href={`sms:${SITE.phoneHref}`}
                      className="inline-flex min-h-14 items-center justify-center rounded-xl border-2 border-primary px-7 text-base font-semibold text-primary"
                    >
                      SMS {SITE.phone}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-secondary p-8">
            <h2 className="text-2xl font-bold text-primary">Připravujeme</h2>
            <p className="mt-4 text-lg">
              Chystáme další setkání, výlety, besedy a aktivity. Jakmile budou známé termíny a
              podrobnosti, zveřejníme je zde.
            </p>
            <p className="mt-4 text-lg">
              Máte nápad na společnou akci?{" "}
              <Link to="/kontakt" className="font-semibold underline underline-offset-4">
                Napište nám
              </Link>
              , co by vás zajímalo.
            </p>
          </div>
          <div className="rounded-2xl bg-secondary p-8">
            <h2 className="text-2xl font-bold text-primary">Proběhlo</h2>
            {past.length === 0 ? (
              <p className="mt-4 text-lg">
                Po uskutečnění akcí zde najdete krátké zprávy a fotografie. Budeme rádi, když se k
                nám příště přidáte.
              </p>
            ) : (
              <ul className="mt-4 space-y-3 text-lg">
                {past.map((event) => (
                  <li key={event.slug}>
                    <span className="font-semibold text-primary">{event.title}</span> —{" "}
                    {event.dateLabel}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
