import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, HandHeart, Trees, Megaphone } from "lucide-react";

export const Route = createFileRoute("/co-chceme")({
  head: () => ({
    meta: [
      { title: "Co chceme – Více pro seniory" },
      {
        name: "description",
        content:
          "Čtyři oblasti naší práce: setkávání a aktivní život, pomoc v běžných záležitostech, Plasy přátelské k seniorům a hlas seniorů.",
      },
      { property: "og:title", content: "Co chceme – Více pro seniory" },
      {
        property: "og:description",
        content: "Setkávání, pomoc, přátelské prostředí a naslouchání seniorům v Plasích.",
      },
    ],
  }),
  component: Goals,
});

const AREAS = [
  {
    icon: Users,
    title: "Být spolu a aktivně žít",
    paragraphs: [
      "Chceme vytvářet více příležitostí k setkávání. Mohou to být posezení, přednášky, besedy, výlety, zájezdy, kulturní akce i další společné aktivity. Záleží nám na tom, aby si každý mohl vybrat podle svých zájmů a možností.",
      "Program nechceme připravovat pouze od stolu. Budeme se ptát, o jaké akce mají lidé skutečný zájem, a vítáme každého, kdo se chce zapojit do jejich pořádání.",
    ],
  },
  {
    icon: HandHeart,
    title: "Pomoc, když je potřeba",
    paragraphs: [
      "Vyplnit formulář, zorientovat se na úřadě nebo začít používat mobil a internet může být někdy složité. Chceme hledat způsoby, jak seniorům s těmito běžnými záležitostmi pomáhat srozumitelně a trpělivě.",
      "Rádi bychom také propojovali dobrovolníky s lidmi, kterým by pomohla drobná pomoc v každodenním životě. Někdy stačí poradit, doprovodit nebo věnovat chvíli svého času.",
    ],
  },
  {
    icon: Trees,
    title: "Plasy přátelské k seniorům",
    paragraphs: [
      "Pohodlná lavička, bezpečná cesta pěšky nebo dostupná služba mohou rozhodnout o tom, jak snadno se člověk dostane ven a vyřídí, co potřebuje. Chceme se věnovat odpočinkovým místům, pěším trasám, chybějícím chodníkům, dostupnosti zdravotní péče, možnosti Senior taxi a dalším podnětům z Plas i přidružených obcí.",
      "Tyto věci nemůžeme vyřešit sami. Chceme na konkrétní potřeby upozorňovat a společně s městem a dalšími partnery hledat možnosti, jak je postupně řešit.",
    ],
  },
  {
    icon: Megaphone,
    title: "Hlas seniorů musí být slyšet",
    paragraphs: [
      "Senioři nejlépe vědí, co jim pomáhá a co jim v každodenním životě chybí. Chceme s nimi pravidelně mluvit, naslouchat jejich zkušenostem a dát jim prostor podílet se na tom, co se v Plasích děje.",
      "Jejich názory a životní zkušenosti jsou cenné pro celé město. Chceme, aby se dostávaly k lidem, kteří mohou o změnách rozhodovat, a aby se o navržených řešeních dál mluvilo.",
    ],
  },
];

function Goals() {
  return (
    <>
      <section className="section">
        <div className="container-page max-w-3xl">
          <h1 className="text-4xl font-bold text-primary md:text-5xl">Co chceme</h1>
          <p className="mt-6 text-xl">
            Chceme, aby se seniorům v Plasích a přidružených obcích dobře žilo, měli možnost být
            aktivní, nebyli zbytečně sami a věděli, že se mají na koho obrátit.
          </p>
          <p className="mt-5 text-lg">
            Naše práce stojí na čtyřech oblastech. Zajímají nás konkrétní potřeby lidí, proto chceme
            seniorům především naslouchat a podle jejich podnětů hledat řešení.
          </p>
        </div>
      </section>

      <section className="pb-4">
        <div className="container-page grid gap-8">
          {AREAS.map(({ icon: Icon, title, paragraphs }) => (
            <article key={title} className="rounded-2xl bg-card p-7 shadow-(--shadow-card) md:p-10">
              <Icon aria-hidden className="size-10 text-olive" strokeWidth={1.75} />
              <h2 className="mt-4 text-2xl font-bold text-primary md:text-3xl">{title}</h2>
              {paragraphs.map((p) => (
                <p key={p} className="mt-4 text-lg">
                  {p}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl rounded-2xl bg-secondary p-8 md:p-10">
          <h2 className="text-3xl font-bold text-primary">Máte další nápad?</h2>
          <p className="mt-5 text-lg">
            Co vám v Plasích nebo v přidružených obcích chybí? Co by vám nebo vašim blízkým usnadnilo
            život?
          </p>
          <p className="mt-4 text-lg">
            Napište nám svůj nápad, přání nebo podnět. Rádi si ho vyslechneme.
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
