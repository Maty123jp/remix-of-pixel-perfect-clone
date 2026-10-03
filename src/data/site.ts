export const SITE = {
  name: "Více pro seniory",
  places: "Plasy, Babina, Horní Hradiště, Lomnička, Nebřeziny, Žebnice",
  email: "ViceProSeniory@seznam.cz",
  phone: "607 280 428",
  phoneHref: "+420607280428",
  ballotNumber: 6,
};

export const NAV = [
  { to: "/", label: "Úvod" },
  { to: "/o-nas", label: "O nás" },
  { to: "/co-chceme", label: "Co chceme" },
  { to: "/akce", label: "Akce" },
  { to: "/volby-2026", label: "Volby 2026" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

/**
 * Jediný zdroj dat o akcích. Zde stačí upravit nebo přidat akci.
 * `date` = datum akce (ISO), `posterUrl` = adresa plakátu (zatím nedodán).
 */
export type Event = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  timeLabel?: string;
  place: string;
  shortDescription: string;
  paragraphs: string[];
  signup: string;
  posterUrl?: string;
  posterAlt: string;
  /** Doplníme, až budou známé (cena, hodiny odjezdu a návratu). */
  pendingDetails?: string[];
};

export const EVENTS: Event[] = [
  {
    slug: "den-otevrenych-dveri-zs-plasy",
    title: "Den otevřených dveří – Základní škola Plasy, nová nástavba",
    date: "2026-10-05T16:00:00+02:00",
    dateLabel: "5. října 2026",
    timeLabel: "od 16:00",
    place: "Základní škola Plasy",
    shortDescription:
      "Prohlídka nových prostor školy, beseda a prostor pro vaše dotazy. Počet míst je omezený; je potřeba se předem přihlásit.",
    paragraphs: [
      "Přijďte si prohlédnout nové prostory školy. Součástí setkání bude beseda a prostor pro vaše dotazy. Sejdeme se před vchodem do školy.",
    ],
    signup:
      "Počet míst je omezený, proto je potřeba se předem přihlásit. Napište na ViceProSeniory@seznam.cz nebo pošlete SMS na číslo 607 280 428.",
    posterAlt:
      "Plakát akce Den otevřených dveří v Základní škole Plasy – místo pro dodaný plakát",
  },
  {
    slug: "dostupna-sumava",
    title: "Dostupná Šumava",
    date: "2026-10-07T08:00:00+02:00",
    dateLabel: "7. října 2026",
    place: "odjezd z Plas",
    shortDescription:
      "Společný zájezd na Kvildu, Srní, Březník a další místa na Šumavě. Počet míst je omezený; přihlaste se do 29. září.",
    paragraphs: [
      "Zveme vás na společný zájezd na Šumavu. Navštívíme Kvildu, Srní, Březník a další známá místa. Nastupovat se bude na autobusové zastávce v Plasích u pošty.",
    ],
    signup:
      "Počet míst je omezený. Přihlaste se do 29. září 2026 na ViceProSeniory@seznam.cz nebo SMS na číslo 607 280 428.",
    posterAlt: "Plakát zájezdu Dostupná Šumava – místo pro dodaný plakát",
    pendingDetails: ["Cena: bude doplněna", "Hodina odjezdu a návratu: bude doplněna"],
  },
];

export function sortedEvents() {
  return [...EVENTS].sort((a, b) => +new Date(a.date) - +new Date(b.date));
}

export function upcomingEvents(now = new Date()) {
  return sortedEvents().filter((e) => +new Date(e.date) >= +now);
}

export function pastEvents(now = new Date()) {
  return sortedEvents().filter((e) => +new Date(e.date) < +now);
}

export type Person = {
  name: string;
  origin: string;
  bio: string;
  photoUrl?: string;
};

export const LEADERS: Person[] = [
  {
    name: "Bc. Eliška Pospíšilová",
    origin: "Horní Hradiště",
    photoUrl: "/__l5e/assets-v1/d84b3438-0496-454b-b90e-e84ac3e29d23/eliska-pospisilova.png",
    bio: "Eliška pochází z Horního Hradiště a pracuje v oblasti sociálních dávek. Při své práci se setkává také se seniory, kteří potřebují pomoc nebo radu. Chce pro ně podporovat nejen praktickou pomoc, ale i příležitosti k setkávání a společným zážitkům.",
  },
  {
    name: "Bc. Lucie Helusová",
    origin: "Plasy",
    photoUrl: "/__l5e/assets-v1/aca96c61-0634-4686-a0b8-bcf93cdc5f4f/lucie-helusova.png",
    bio: "Lucie žije se svou rodinou v Plasích. Záleží jí na tom, aby zde senioři žili bezpečně, aktivně a důstojně a aby se přirozeně potkávaly různé generace. Do společné práce přináší zkušenost s organizací, spoluprací a hledáním praktických řešení.",
  },
  {
    name: "Květoslava Švajdlenková",
    origin: "Horní Hradiště",
    photoUrl: "/__l5e/assets-v1/4f78bbf2-b192-4533-9bd9-10728ede418a/kvetoslava-svajdlenkova.png",
    bio: "Květoslava pochází z Horního Hradiště a pracuje jako vychovatelka. Má ráda práci s lidmi a věří, že přibývající roky nemusejí znamenat ústup ze společenského života. Ráda by podporovala setkání, výlety a další aktivity, ze kterých si lidé odnesou příjemný zážitek.",
  },
  {
    name: "Lucie Halilovová",
    origin: "Plasy",
    photoUrl: "/__l5e/assets-v1/28764af1-44b9-4db6-a688-e08c5fabb411/lucie-halilovova.png",
    bio: "Lucie žije od dětství v Plasích a sport je dlouhodobou součástí jejího života. Chtěla by, aby město nabízelo více možností ke společnému setkávání a aktivnímu trávení času. Záleží jí také na tom, aby Plasy více naslouchaly názorům seniorů.",
  },
];

export const CANDIDATES = [
  "Bc. Eliška Pospíšilová",
  "Bc. Lucie Helusová",
  "Květoslava Švajdlenková",
  "Lucie Halilovová",
  "Rudolf Vojáček",
  "Ladislav Urban",
  "Jiří Klika",
  "Lenka Ryšicová",
  "Stanislava Vítková",
  "Ivan Hřebec",
  "Ing. Václav Mour",
  "Miloš Zpěváček",
  "Jitka Halilovová",
  "Jana Čiháková",
  "Vlasta Soutnerová",
];
