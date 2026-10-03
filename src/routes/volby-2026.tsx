import { createFileRoute, Link } from "@tanstack/react-router";
import { Placeholder } from "@/components/Placeholder";
import { CANDIDATES, LEADERS, SITE } from "@/data/site";

export const Route = createFileRoute("/volby-2026")({
  head: () => ({
    meta: [
      { title: "Volby 2026 – Více pro seniory" },
      {
        name: "description",
        content:
          "Proč kandidujeme, s čím jdeme do komunálních voleb 2026 v Plasích, naše kandidátka a informace, kdy a jak volit.",
      },
      { property: "og:title", content: "Volby 2026 – Více pro seniory" },
      {
        property: "og:description",
        content: "Sdružení nezávislých kandidátů Více pro seniory v komunálních volbách 2026.",
      },
    ],
  }),
  component: Elections,
});

function slugify(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]+/g, "-")
    .replace(/^-|-$/g, "");
}

function Elections() {
  return (
    <>
      <section className="section">
        <div className="container-page max-w-3xl">
          <h1 className="text-4xl font-bold text-primary md:text-5xl">Volby 2026</h1>
          <h2 className="mt-8 text-2xl font-bold text-primary">Proč kandidujeme</h2>
          <p className="mt-4 text-lg">
            Více pro seniory vzniklo z přesvědčení, že lidé mají mít možnost být aktivní, setkávat se
            a říkat, co ve svém okolí potřebují. Chceme v této práci pokračovat dlouhodobě. Účast v
            komunálních volbách je pro nás jednou z cest, jak podněty seniorů přinášet také do
            zastupitelstva města Plasy.
          </p>
          <p className="mt-4 text-lg">
            Kandidujeme jako sdružení nezávislých kandidátů Více pro seniory. Záleží nám na tom, aby
            se při rozhodování o životě v Plasích a přidružených obcích více naslouchalo starším
            obyvatelům a hledala se praktická řešení pro všechny generace.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-primary">S čím do voleb jdeme</h2>
          <p className="mt-4 text-lg">
            Chceme podporovat setkávání a aktivní život, pomoc s běžnými záležitostmi, příjemné a
            bezpečné prostředí i větší zapojení seniorů do dění ve městě.
          </p>
          <Link
            to="/co-chceme"
            className="mt-7 inline-flex min-h-14 items-center justify-center rounded-xl bg-primary px-7 text-lg font-semibold text-primary-foreground"
          >
            Přečtěte si, co chceme dělat
          </Link>
        </div>
      </section>

      <section className="section bg-secondary">
        <div className="container-page">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Naši kandidáti</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {LEADERS.map((person, index) => (
              <article
                key={person.name}
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
                  <p className="text-lg font-semibold text-ochre">{index + 1}. místo na kandidátce</p>
                  <h3 className="mt-2 text-2xl font-bold text-primary">{person.name}</h3>
                  <Link
                    to="/o-nas"
                    hash={slugify(person.name)}
                    className="mt-4 text-lg font-semibold text-primary underline underline-offset-4"
                  >
                    Přečtěte si medailonek
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <ol className="mt-10 grid gap-3 md:grid-cols-2">
            {CANDIDATES.slice(4).map((name, index) => (
              <li
                key={name}
                className="flex items-center gap-4 rounded-xl bg-card px-5 py-4 text-xl shadow-(--shadow-card)"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary font-bold text-primary">
                  {index + 5}
                </span>
                {name}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-page max-w-3xl">
          <h2 className="text-3xl font-bold text-primary md:text-4xl">Kdy a jak volit</h2>
          <p className="mt-5 text-lg">
            Komunální volby se konají v pátek 9. října 2026 od 14:00 do 22:00 a v sobotu 10. října
            2026 od 8:00 do 14:00.
          </p>
          <p className="mt-4 text-lg">
            Chcete-li podpořit celou kandidátku Více pro seniory, označte jeden křížek ve čtverečku
            před názvem naší kandidátky. Jednotlivé kandidáty v našem sloupci už v takovém případě
            zvlášť neoznačujte.
          </p>
          <p className="mt-4 text-lg">
            K hlasování si vezměte platný občanský průkaz nebo cestovní pas. Pokud ze závažných,
            zejména zdravotních důvodů nemůžete přijít do volební místnosti, můžete požádat o
            hlasování do přenosné volební schránky.
          </p>

          <p className="mt-10 rounded-2xl bg-primary px-8 py-7 text-center text-2xl font-bold text-primary-foreground md:text-3xl">
            Více pro seniory – volte č. {SITE.ballotNumber}.
          </p>
        </div>
      </section>
    </>
  );
}
