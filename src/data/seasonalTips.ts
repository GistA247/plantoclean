import type { Locale } from "../i18n";

export interface SeasonalTip {
  tip: Record<Locale, string>;
  icon: string;
}

export const seasonalTips: SeasonalTip[] = [
  // Januar
  {
    tip: {
      de: "Jetzt ist die ideale Zeit für den Strauchschnitt – wir bringen Ihre Gehölze in Form, solange sie in der Wachstumsruhe sind.",
      en: "Now is the ideal time for shrub pruning – we shape your woody plants while they're dormant.",
    },
    icon: "content_cut",
  },
  // Februar
  {
    tip: {
      de: "Gräser und Stauden zurückschneiden, bevor der Neuaustrieb beginnt – wir kümmern uns darum.",
      en: "Time to cut back grasses and perennials before new growth starts – we'll take care of it.",
    },
    icon: "grass",
  },
  // März
  {
    tip: {
      de: "Frühjahr ist Pflanzzeit! Wir pflanzen Bäume, Sträucher und Rosen für einen blühenden Garten.",
      en: "Spring is planting season! We plant trees, shrubs and roses for a blooming garden.",
    },
    icon: "park",
  },
  // April
  {
    tip: {
      de: "Rasen vertikutieren und düngen – wir bereiten Ihren Rasen optimal auf die Saison vor.",
      en: "Scarifying and fertilising your lawn – we prepare it perfectly for the season ahead.",
    },
    icon: "grass",
  },
  // Mai
  {
    tip: {
      de: "Formschnitt an Hecken und Sträuchern – wir sorgen für klare Linien in Ihrem Garten.",
      en: "Hedge and shrub shaping – we create clean lines in your garden.",
    },
    icon: "spa",
  },
  // Juni
  {
    tip: {
      de: "Verblühtes regelmäßig entfernen fördert die Nachblüte – wir halten Ihre Beete in Bestform.",
      en: "Regular deadheading promotes re-blooming – we keep your beds in top shape.",
    },
    icon: "local_florist",
  },
  // Juli
  {
    tip: {
      de: "Hecken in Form bringen? Wir schneiden Ihre Hecken fachgerecht und sorgen für ein gepflegtes Bild.",
      en: "Need your hedges shaped? We trim them professionally for a well-kept appearance.",
    },
    icon: "content_cut",
  },
  // August
  {
    tip: {
      de: "Sommerblühende Stauden teilen und Rasen bei Trockenheit wässern – sprechen Sie uns an!",
      en: "Dividing summer perennials and watering lawns in dry spells – get in touch!",
    },
    icon: "water_drop",
  },
  // September
  {
    tip: {
      de: "Der Herbst naht – jetzt ist die perfekte Zeit für Neupflanzungen und die letzte Rasendüngung.",
      en: "Autumn is coming – now is the perfect time for new plantings and the final lawn feed.",
    },
    icon: "eco",
  },
  // Oktober
  {
    tip: {
      de: "Herbstlaub und Rückschnitt – wir machen Ihren Garten winterfest und sorgen für Ordnung.",
      en: "Autumn leaves and pruning – we prepare your garden for winter and keep it tidy.",
    },
    icon: "park",
  },
  // November
  {
    tip: {
      de: "Winterschutz für empfindliche Pflanzen und letzte Aufräumarbeiten – wir erledigen das für Sie.",
      en: "Winter protection for sensitive plants and final clean-up – we handle it for you.",
    },
    icon: "ac_unit",
  },
  // Dezember
  {
    tip: {
      de: "Ruhephase im Garten – die ideale Zeit, um Projekte fürs Frühjahr zu planen. Wir beraten Sie gerne!",
      en: "Garden rest period – the ideal time to plan spring projects. We're happy to advise!",
    },
    icon: "calendar_month",
  },
];
