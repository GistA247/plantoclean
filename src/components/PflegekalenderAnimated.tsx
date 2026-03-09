import { useState } from "react";
import { SnowflakeIcon } from "./icons/animated/Snowflake";
import { FeatherIcon } from "./icons/animated/Feather";
import { SunIcon } from "./icons/animated/Sun";
import { WindIcon } from "./icons/animated/Wind";
import { GitForkIcon } from "./icons/animated/GitFork";
import { HeartIcon } from "./icons/animated/Heart";
import { SparklesIcon } from "./icons/animated/Sparkles";
import { WavesIcon } from "./icons/animated/Waves";
import { LayersIcon } from "./icons/animated/Layers";
import { HomeIcon } from "./icons/animated/Home";
import { ZapIcon } from "./icons/animated/Zap";
import { CalendarDaysIcon } from "./icons/animated/CalendarDays";
import { ChevronDownIcon } from "./icons/animated/ChevronDown";
import { FlameIcon } from "./icons/animated/Flame";
import { ChevronRightIcon } from "./icons/animated/ChevronRight";

// Icon mapping: Material Icon name → Lucide Animated component
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  ac_unit: SnowflakeIcon,
  eco: FeatherIcon,
  wb_sunny: SunIcon,
  nest_eco_leaf: WindIcon,
  park: GitForkIcon,
  spa: HeartIcon,
  local_florist: SparklesIcon,
  grass: WavesIcon,
  fence: LayersIcon,
  potted_plant: HomeIcon,
  tips_and_updates: ZapIcon,
  calendar_month: CalendarDaysIcon,
  expand_more: ChevronDownIcon,
  lightbulb: FlameIcon,
  chevron_right: ChevronRightIcon,
};

function AnimIcon({ name, size = 24, className = "" }: { name: string; size?: number; className?: string }) {
  const Icon = iconMap[name];
  if (!Icon) return <span className={className}>{name}</span>;
  return <Icon size={size} className={`inline-flex ${className}`} />;
}

interface Task {
  cat: string;
  icon: string;
  items: string[];
}

interface Month {
  name: string;
  icon: string;
  season: string;
  tasks: Task[];
}

const months: Month[] = [
  { name: "Januar", icon: "ac_unit", season: "winter", tasks: [
    { cat: "Gehoelze", icon: "park", items: ["Straeucher in der Wachstumsruhe schneiden", "Schmetterlingsflieder zurueckschneiden", "Immergruene von Schneelast befreien"] },
    { cat: "Rosen", icon: "spa", items: ["Rosenschnitt oberhalb der Augen durchfuehren", "Duenne Triebe entfernen"] },
    { cat: "Stauden & Blumen", icon: "local_florist", items: ["Knollen pruefen und reinigen", "Bepflanzung fuer das neue Jahr planen"] },
  ]},
  { name: "Februar", icon: "ac_unit", season: "winter", tasks: [
    { cat: "Gehoelze", icon: "park", items: ["Straeucher auslichten und tote Aeste absaegen", "Baumwunden behandeln"] },
    { cat: "Stauden & Blumen", icon: "local_florist", items: ["Graeser und Stauden zurueckschneiden", "Lavendel zurueckschneiden"] },
    { cat: "Rasen", icon: "grass", items: ["Bei milder Witterung kalken", "Bei Frost den Rasen nicht betreten"] },
  ]},
  { name: "Maerz", icon: "eco", season: "spring", tasks: [
    { cat: "Gehoelze", icon: "park", items: ["Baeume und Straeucher pflanzen", "Winterschutz entfernen"] },
    { cat: "Rosen", icon: "spa", items: ["Rosen abhaeufeln und erste Duengung", "Rosen und Bluetenstraeucher duengen"] },
    { cat: "Rasen", icon: "grass", items: ["Vertikutieren und mit Langzeitduenger duengen", "Moosbekaempfung"] },
  ]},
  { name: "April", icon: "eco", season: "spring", tasks: [
    { cat: "Gehoelze", icon: "park", items: ["Beste Pflanzzeit fuer Nadelbaeume", "Alte Bluetenstaende entfernen"] },
    { cat: "Stauden & Blumen", icon: "local_florist", items: ["Stauden pflanzen", "Gladiolen- und Anemonenknollen legen"] },
    { cat: "Allgemein", icon: "tips_and_updates", items: ["Unkrautbekaempfung auf feuchtem Boden", "Boden auflockern"] },
  ]},
  { name: "Mai", icon: "eco", season: "spring", tasks: [
    { cat: "Gehoelze", icon: "park", items: ["Verbluehte Fliederdolden entfernen", "Kletterrosen anbinden"] },
    { cat: "Rasen", icon: "grass", items: ["Nochmals vertikutieren", "Nicht unter 4 cm maehen"] },
    { cat: "Allgemein", icon: "tips_and_updates", items: ["Morgens oder abends giessen", "Lieber einmal durchdringend giessen"] },
  ]},
  { name: "Juni", icon: "wb_sunny", season: "summer", tasks: [
    { cat: "Rosen", icon: "spa", items: ["Zweite Rosenduengung", "Blattkrankheiten behandeln"] },
    { cat: "Stauden & Blumen", icon: "local_florist", items: ["Zweiter Duengungstermin", "Verwelkte Blueten entfernen"] },
    { cat: "Hecken", icon: "fence", items: ["Hecken zum Monatsende schneiden"] },
  ]},
  { name: "Juli", icon: "wb_sunny", season: "summer", tasks: [
    { cat: "Stauden & Blumen", icon: "local_florist", items: ["Rueckschnitt nach der Bluete", "Grosswachsende Stauden anbinden"] },
    { cat: "Rosen", icon: "spa", items: ["Verwelkte Blueten entfernen", "Letzte Duengung der Rosen"] },
    { cat: "Rasen", icon: "grass", items: ["Zweite Duengung mit Langzeitduenger", "pH-Wert pruefen"] },
  ]},
  { name: "August", icon: "wb_sunny", season: "summer", tasks: [
    { cat: "Stauden & Blumen", icon: "local_florist", items: ["Verbluehte Bluetenstaende schneiden", "Stauden teilen"] },
    { cat: "Gehoelze", icon: "park", items: ["Neupflanzung fuer Herbst planen", "Rueckschnitt der Fruehblueher"] },
    { cat: "Kuebelpflanzen", icon: "potted_plant", items: ["Duengung auf halbe Menge reduzieren", "Stecklinge schneiden"] },
  ]},
  { name: "September", icon: "nest_eco_leaf", season: "autumn", tasks: [
    { cat: "Stauden & Blumen", icon: "local_florist", items: ["Fruehjahrsblueher-Zwiebeln pflanzen", "Lupine und Mohn aussaeen"] },
    { cat: "Gehoelze", icon: "park", items: ["Beste Pflanzzeit fuer Zierstraeucher", "Gehoelze pflanzen"] },
    { cat: "Rasen", icon: "grass", items: ["Vertikutieren und nachsaeen", "Herbstduengung ausbringen"] },
  ]},
  { name: "Oktober", icon: "nest_eco_leaf", season: "autumn", tasks: [
    { cat: "Stauden & Blumen", icon: "local_florist", items: ["Verbluehte Stauden zurueckschneiden", "Zwiebeln spaetestens jetzt pflanzen"] },
    { cat: "Rosen", icon: "spa", items: ["Rosen anhaeufeln", "Hochstammrosen umlegen"] },
    { cat: "Kuebelpflanzen", icon: "potted_plant", items: ["Empfindliche Kuebelpflanzen einwintern"] },
  ]},
  { name: "November", icon: "nest_eco_leaf", season: "autumn", tasks: [
    { cat: "Gehoelze", icon: "park", items: ["Zierstraeucher umpflanzen und neu pflanzen", "Immergruene bei Trockenheit waessern"] },
    { cat: "Rosen", icon: "spa", items: ["Letzte Rosen neu pflanzen", "Beetrosen zurueckschneiden"] },
    { cat: "Kuebelpflanzen", icon: "potted_plant", items: ["Uebrige Kuebelpflanzen einwintern", "Auf Schaedlinge kontrollieren"] },
  ]},
  { name: "Dezember", icon: "ac_unit", season: "winter", tasks: [
    { cat: "Allgemein", icon: "tips_and_updates", items: ["Winterschutz kontrollieren", "Barbarazweige schneiden"] },
    { cat: "Gehoelze", icon: "park", items: ["Immergruene bei Frost giessen", "Bluetenstraeucher ausholzen"] },
    { cat: "Stauden & Blumen", icon: "local_florist", items: ["Hyazinthen im Wasserglas treiben", "Wintervorbereitung"] },
  ]},
];

const seasons = [
  { key: "spring", label: "Fruehling", icon: "eco", color: "text-green-600", bg: "bg-green-50", border: "border-green-200", months: [2, 3, 4] },
  { key: "summer", label: "Sommer", icon: "wb_sunny", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200", months: [5, 6, 7] },
  { key: "autumn", label: "Herbst", icon: "nest_eco_leaf", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200", months: [8, 9, 10] },
  { key: "winter", label: "Winter", icon: "ac_unit", color: "text-sky-600", bg: "bg-sky-50", border: "border-sky-200", months: [11, 0, 1] },
];

export default function PflegekalenderAnimated() {
  const [openMonth, setOpenMonth] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <AnimIcon name="calendar_month" size={28} className="text-primary" />
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Gartentipps</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-anthracite mb-4">Pflegekalender</h2>
        <p className="text-anthracite/70 max-w-2xl mx-auto">
          Alle Icons sind animierte Lucide-Icons. Hover ueber eine Kategorie, um die Animation zu sehen.
        </p>
      </div>

      {/* Season Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {seasons.map((s) => (
          <a
            key={s.key}
            href={`#${s.key}`}
            className={`flex flex-col items-center gap-2 py-5 rounded-2xl ${s.bg} ${s.border} border hover:shadow-md transition-shadow`}
          >
            <AnimIcon name={s.icon} size={32} className={s.color} />
            <span className={`font-semibold ${s.color}`}>{s.label}</span>
          </a>
        ))}
      </div>

      {/* Calendar Sections */}
      {seasons.map((season) => (
        <section key={season.key} id={season.key} className="mb-16 scroll-mt-8">
          <div className="flex items-center gap-3 mb-6">
            <AnimIcon name={season.icon} size={28} className={season.color} />
            <h3 className={`text-2xl font-bold ${season.color}`}>{season.label}</h3>
          </div>

          <div className="space-y-4">
            {season.months.map((monthIdx) => {
              const month = months[monthIdx];
              const isOpen = openMonth === monthIdx;

              return (
                <div key={monthIdx} className={`rounded-2xl border ${season.border} overflow-hidden`}>
                  {/* Month Header */}
                  <button
                    onClick={() => setOpenMonth(isOpen ? null : monthIdx)}
                    className={`w-full flex items-center gap-3 px-6 py-4 ${season.bg} hover:brightness-95 transition-all cursor-pointer`}
                  >
                    <AnimIcon name={month.icon} size={24} className={season.color} />
                    <span className={`font-bold text-lg ${season.color} flex-1 text-left`}>{month.name}</span>
                    <span className="text-xs text-anthracite/40">{month.tasks.length} Kategorien</span>
                    <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                      <AnimIcon name="expand_more" size={20} className="text-anthracite/40" />
                    </div>
                  </button>

                  {/* Month Content */}
                  {isOpen && (
                    <div className="px-6 py-5 space-y-5 bg-white">
                      {month.tasks.map((task, ti) => (
                        <div key={ti} className="group">
                          <div className="flex items-center gap-2 mb-2">
                            <AnimIcon name={task.icon} size={20} className={season.color} />
                            <h4 className="font-semibold text-anthracite">{task.cat}</h4>
                          </div>
                          <ul className="space-y-1.5 ml-7">
                            {task.items.map((item, ii) => (
                              <li key={ii} className="flex items-start gap-2 text-sm text-anthracite/70">
                                <AnimIcon name="chevron_right" size={14} className="text-primary/40 mt-0.5 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}

      {/* Pro Tip */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 flex items-start gap-4">
        <AnimIcon name="lightbulb" size={28} className="text-primary shrink-0" />
        <div>
          <h4 className="font-bold text-anthracite mb-2">Profi-Tipp</h4>
          <p className="text-sm text-anthracite/70 leading-relaxed">
            Die beste Zeit fuer die meisten Schnittarbeiten ist der spaete Winter bis fruehe Fruehling,
            bevor der neue Austrieb beginnt. So vermeiden Sie Frostschaeden an frischen Schnittstellen
            und die Pflanzen koennen im Fruehjahr kraeftig austreiben.
          </p>
        </div>
      </div>
    </div>
  );
}
