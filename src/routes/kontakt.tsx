import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – Více pro seniory" },
      {
        name: "description",
        content:
          "Napište nám svůj nápad, přání nebo podnět. E-mail ViceProSeniory@seznam.cz, telefon nebo SMS 607 280 428.",
      },
      { property: "og:title", content: "Kontakt – Více pro seniory" },
      {
        property: "og:description",
        content: "Máte nápad, podnět nebo potřebujete pomoci? Ozvěte se nám.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="section">
      <div className="container-page grid gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <h1 className="text-4xl font-bold text-primary md:text-5xl">Kontaktujte nás</h1>
          <p className="mt-6 rounded-2xl bg-accent p-6 text-xl font-semibold text-primary">
            Máte nápad, podnět nebo potřebujete pomoci? Ozvěte se nám.
          </p>
          <p className="mt-6 text-lg">
            Zajímá nás, co se seniorům v Plasích a přidružených obcích daří a co by se podle vás
            mohlo zlepšit. Napsat nám můžete také tehdy, pokud se chcete zapojit do některé z našich
            aktivit.
          </p>
        </div>

        <div className="rounded-2xl bg-card p-8 shadow-(--shadow-card) md:p-10">
          <p className="text-xl font-bold text-primary">{SITE.name}</p>
          <p className="mt-3 text-lg">Bc. Eliška Pospíšilová</p>
          <p className="text-lg">Bc. Lucie Helusová</p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${SITE.email}`}
              className="flex min-h-16 items-center gap-4 rounded-xl bg-primary px-6 text-lg font-semibold text-primary-foreground"
            >
              <Mail aria-hidden className="size-6 shrink-0" />
              <span className="break-all">E-mail: {SITE.email}</span>
            </a>
            <a
              href={`tel:${SITE.phoneHref}`}
              className="flex min-h-16 items-center gap-4 rounded-xl border-2 border-primary px-6 text-lg font-semibold text-primary"
            >
              <Phone aria-hidden className="size-6 shrink-0" />
              Telefon nebo SMS: {SITE.phone}
            </a>
          </div>

          <p className="mt-8 text-base text-muted-foreground">
            Kontaktní formulář zde zveřejníme, jakmile bude nastaveno skutečné odesílání zpráv na
            adresu {SITE.email}. Do té doby prosím využijte e-mail nebo telefon výše.
          </p>
        </div>
      </div>
    </section>
  );
}
