import { createFileRoute, Link } from "@tanstack/react-router";
import { Placeholder } from "@/components/Placeholder";
import { LEADERS } from "@/data/site";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nás – Více pro seniory" },
      {
        name: "description",
        content:
          "Kdo za iniciativou Více pro seniory stojí, co nás spojuje a jak chceme pracovat pro seniory v Plasích a přidružených obcích.",
      },
      { property: "og:title", content: "O nás – Více pro seniory" },
      {
        property: "og:description",
        content: "Iniciativa pro setkávání, vzájemnou pomoc a aktivní život seniorů v Plasích.",
      },
    ],
  }),
  component: About,
});

const WORK = [
  ["Naslouchat.", "Ptát se seniorů, co potřebují a co by si přáli."],
  [
    "Pomáhat.",
    "Nabídnout pomoc s běžnými záležitostmi a propojovat ty, kteří ji potřebují, s těmi, kteří ji mohou poskytnout.",
  ],
  ["Spojovat.", "Pořádat setkání a akce, při kterých se potkávají lidé různých generací."],
  ["Hledat řešení.", "Předávat podněty dál a společně hledat způsoby, jak je uskutečnit."],
];

function About() {
  return (
    <>
      <section className="section">
        <div className="container-page max-w-3xl">
          <h1 className="text-4xl font-bold text-primary md:text-5xl">O nás</h1>
          <p className="mt-6 rounded-2xl bg-accent p-6 text-xl font-semibold text-primary">
            Chceme spojovat lidi, kterým záleží na tom, aby se seniorům v Plasích a přidružených
            obcích dobře žilo.
          </p>
          <p className="mt-6 text-lg">
            Více pro seniory je iniciativa pro setkávání, vzájemnou pomoc a aktivní život. Chceme
            vytvářet příležitosti, aby lidé byli spolu, poznávali se a věděli, na koho se mohou
            obrátit. Zároveň chceme otevřeně mluvit o tom, co seniorům v našem městě a obcích chybí.
          </p>
          <p className="mt-6 border-l-4 border-ochre pl-5 text-xl font-semibold text-primary">
            Nechceme rozhodovat za seniory. Chceme jim naslouchat, znát jejich zkušenosti a společně
            hledat praktická řešení.
          </p>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container-page grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-primary">Co nás spojuje</h2>
            <p className="mt-5 text-lg">
              Zájem o místo, kde žijeme, chuť být aktivní a ochota pomáhat druhým. Věříme, že i
              drobné věci mohou zlepšit každodenní život: společné setkání, pomoc s telefonem,
              lavička na správném místě nebo možnost říct svůj názor a být vyslyšen.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary">Jak chceme pracovat</h2>
            <ul className="mt-5 space-y-4">
              {WORK.map(([lead, text]) => (
                <li key={lead} className="rounded-xl bg-card p-5 shadow-(--shadow-card)">
                  <span className="font-bold text-primary">{lead}</span> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <h2 className="text-3xl font-bold text-primary">Zkušenosti, které mají hodnotu</h2>
          <p className="mt-5 text-lg">
            Senioři mají zkušenosti, znalosti a vzpomínky, ze kterých mohou čerpat i mladší
            generace. Chceme vytvářet více příležitostí, aby se lidé různého věku poznávali, pomáhali
            si a trávili spolu čas.
          </p>
        </div>
      </section>

      <section className="section bg-accent">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">
            Kdo za Více pro seniory stojí
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {LEADERS.map((person) => (
              <article
                key={person.name}
                id={person.name
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .replace(/[^a-z]+/g, "-")
                  .replace(/^-|-$/g, "")}
                className="flex h-full overflow-hidden rounded-2xl bg-card shadow-(--shadow-card)"
              >
                <div className="shrink-0 self-start p-5 pr-0">
                  {person.photoUrl ? (
                    <img
                      src={person.photoUrl}
                      alt={`Fotografie: ${person.name}`}
                      className="aspect-3/4 w-24 rounded-xl object-cover object-top shadow-(--shadow-card) md:w-28"
                      loading="lazy"
                    />
                  ) : (
                    <Placeholder
                      label={`Fotografie: ${person.name}`}
                      className="aspect-3/4 w-24 rounded-xl md:w-28"
                    />
                  )}
                </div>
                <div className="flex flex-1 flex-col py-6 pr-6">
                  <h3 className="text-2xl font-bold text-primary">{person.name}</h3>
                  <p className="mt-3 text-lg">{person.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <h2 className="text-3xl font-bold text-primary">Nejsme na to sami</h2>
          <p className="mt-5 text-lg">
            Více pro seniory podporují také další lidé z naší patnáctičlenné kandidátky a lidé z Plas
            a přidružených obcí. Postupně zde rádi představíme i další podporovatele, kteří budou
            chtít být veřejně uvedeni.
          </p>
          <Link
            to="/volby-2026"
            className="mt-7 inline-flex min-h-14 items-center justify-center rounded-xl bg-primary px-7 text-lg font-semibold text-primary-foreground"
          >
            Poznejte naši kandidátku
          </Link>
        </div>
      </section>
    </>
  );
}
