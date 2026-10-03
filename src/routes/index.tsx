import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, HandHeart, Trees, Megaphone, ArrowRight, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, upcomingEvents } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Více pro seniory – Plasy a přidružené obce" },
      {
        name: "description",
        content:
          "Chceme, aby se seniorům v Plasích a přidružených obcích dobře žilo: setkávání, pomoc, přátelské prostředí a naslouchání.",
      },
      { property: "og:title", content: "Více pro seniory – Plasy a přidružené obce" },
      {
        property: "og:description",
        content:
          "Setkávání, pomoc, přátelské prostředí a hlas seniorů v Plasích a přidružených obcích.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const AREAS = [
  {
    icon: Users,
    title: "Být spolu a aktivně žít",
    text: "Setkávání, posezení, přednášky, besedy, výlety, zájezdy a další společné aktivity podle toho, o co mají lidé zájem.",
  },
  {
    icon: HandHeart,
    title: "Pomoc, když je potřeba",
    text: "Pomoc s formuláři, úřady, mobilem a internetem. Chceme také propojovat dobrovolníky s lidmi, kterým by pomohla drobná pomoc v každodenním životě.",
  },
  {
    icon: Trees,
    title: "Plasy přátelské k seniorům",
    text: "Více laviček a odpočinkových míst, bezpečnější pěší trasy, dostupná zdravotní péče a služby, které usnadní každodenní život.",
  },
  {
    icon: Megaphone,
    title: "Hlas seniorů musí být slyšet",
    text: "Chceme seniorům naslouchat, znát jejich potřeby a zkušenosti a dát jim možnost podílet se na tom, co se v Plasích děje.",
  },
];

function Index() {
  const next = upcomingEvents().slice(0, 2);

  return (
    <>
      <section className="overflow-hidden border-b border-border bg-secondary">
        <div className="container-page grid items-center gap-10 py-12 md:grid-cols-[1.02fr_0.98fr] md:gap-14 md:py-16 lg:py-20">
          <div className="relative z-10">
            <p className="eyebrow">Plasy a přidružené obce</p>
            <h1 className="mt-3 max-w-2xl font-display text-5xl font-extrabold leading-none text-primary md:text-6xl lg:text-7xl">
              {SITE.name}
            </h1>
            <p className="mt-7 max-w-2xl text-xl font-semibold leading-relaxed md:text-2xl">
              Chceme, aby se seniorům v Plasích a přidružených obcích dobře žilo, měli možnost být
              aktivní, nebyli zbytečně sami a věděli, že se mají na koho obrátit.
            </p>
            <p className="hand-slogan mt-6">Zkušenosti, které spojují generace</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="min-h-14 rounded-lg px-7 text-lg font-bold">
                <Link to="/co-chceme">Co chceme</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-14 rounded-lg border-2 border-primary px-7 text-lg font-bold text-primary">
                <Link to="/akce">Aktuální akce</Link>
              </Button>
            </div>
          </div>
          <div className="relative order-first md:order-none">
            <div aria-hidden className="absolute -bottom-4 -left-4 h-full w-full rounded-lg bg-ochre" />
            <img src="/images/uvodni-fotografie.jpg" alt="Senioři společně hledí na klášter v Plasích" className="relative aspect-4/3 w-full rounded-lg object-cover shadow-(--shadow-lift)" />
          </div>
        </div>
      </section>

      <section className="section bg-background">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Naše hlavní oblasti</p>
            <h2 className="section-title mt-3">Co je pro nás důležité</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {AREAS.map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className="group grid grid-cols-[auto_minmax(0,1fr)] gap-5 rounded-lg border border-border bg-card p-6 shadow-(--shadow-card) transition-transform hover:-translate-y-1 md:p-8"
              >
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                  <Icon aria-hidden className="size-7" strokeWidth={1.9} />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-ochre">0{index + 1}</p>
                  <h3 className="mt-1 text-2xl font-bold text-primary">{title}</h3>
                  <p className="mt-3 text-base leading-relaxed">{text}</p>
                </div>
              </article>
            ))}
          </div>
          <Link
            to="/co-chceme"
            className="mt-8 inline-flex items-center gap-2 text-lg font-semibold text-primary underline underline-offset-4"
          >
            Přečtěte si více <ArrowRight aria-hidden className="size-5" />
          </Link>
        </div>
      </section>

      <section className="section bg-primary text-primary-foreground">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-accent">Pojďme se potkat</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">Co právě připravujeme</h2>
          </div>
          <div className="mt-10 grid gap-7 md:grid-cols-2">
            {next.map((event) => (
              <article
                key={event.slug}
                className="grid overflow-hidden rounded-lg bg-card text-card-foreground shadow-(--shadow-lift) sm:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]"
              >
                <div className="min-h-72 overflow-hidden bg-muted sm:min-h-full">
                  <img src={event.posterUrl} alt={event.posterAlt} className="h-full w-full object-cover object-top" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col p-6 md:p-7">
                  <p className="flex items-center gap-2 text-sm font-bold uppercase text-ochre">
                    <CalendarDays aria-hidden className="size-5" />
                    {event.dateLabel}
                    {event.timeLabel ? ` ${event.timeLabel}` : ""}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-primary">{event.title}</h3>
                  <p className="mt-3 flex-1 text-base">{event.shortDescription}</p>
                  <Button asChild className="mt-6 min-h-13 rounded-lg px-6 text-base font-bold">
                    <Link to="/akce" hash={event.slug}>Více informací</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-accent">
        <div className="container-page max-w-3xl">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Kdo jsme</h2>
          <p className="mt-5 text-lg">
            Více pro seniory spojuje lidi, kterým záleží na životě seniorů v Plasích a přidružených
            obcích. Chceme pořádat akce, pomáhat tam, kde je potřeba, a naslouchat tomu, co by se
            mělo zlepšit.
          </p>
          <Link
            to="/o-nas"
            className="mt-7 inline-flex min-h-14 items-center justify-center rounded-xl bg-primary px-7 text-lg font-semibold text-primary-foreground"
          >
            Více o nás
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            Naším cílem jsou Plasy, kde se dobře žije v každém věku
          </h2>
          <p className="mt-5 text-lg">
            Chceme, aby měli senioři příležitosti být spolu, zůstávat aktivní a věděli, že se mají
            na koho obrátit. Zkušenosti starších lidí mohou zároveň obohacovat celé naše město a
            spojovat generace.
          </p>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container-page max-w-3xl">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            Máte nápad, přání nebo podnět?
          </h2>
          <p className="mt-5 text-lg">
            Napište nám, co vám nebo vašim blízkým chybí a co by se podle vás mohlo zlepšit. Rádi si
            vás vyslechneme.
          </p>
          <Link
            to="/kontakt"
            className="mt-7 inline-flex min-h-14 items-center justify-center rounded-xl bg-primary px-7 text-lg font-semibold text-primary-foreground"
          >
            Napište nám
          </Link>
        </div>
      </section>
    </>
  );
}
