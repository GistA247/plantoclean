import { useState, useRef, forwardRef } from "react";
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

interface IconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

// Icon mapping: Material Icon name → Lucide Animated component
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; ref?: React.Ref<IconHandle> }>> = {
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

// Simple icon without hover extension (for bullets etc.)
function AnimIcon({ name, size = 24, className = "" }: { name: string; size?: number; className?: string }) {
  const Icon = iconMap[name];
  if (!Icon) return <span className={className}>{name}</span>;
  return <Icon size={size} className={`inline-flex ${className}`} />;
}

// Icon + children wrapped in a hover zone that triggers the icon animation
function HoverIcon({ name, size = 24, className = "", children, as: Tag = "div", tagClassName = "", tagProps }: {
  name: string;
  size?: number;
  className?: string;
  children?: React.ReactNode;
  as?: "div" | "button" | "a";
  tagClassName?: string;
  tagProps?: Record<string, unknown>;
}) {
  const iconRef = useRef<IconHandle>(null);
  const Icon = iconMap[name];

  if (!Icon) return <Tag className={tagClassName} {...tagProps}><span className={className}>{name}</span>{children}</Tag>;

  return (
    <Tag
      className={tagClassName}
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      {...tagProps}
    >
      <Icon ref={iconRef} size={size} className={`inline-flex ${className}`} />
      {children}
    </Tag>
  );
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

// Sub-component for task category with hover-triggered icon animation
function TaskCategory({ task, seasonColor }: { task: Task; seasonColor: string }) {
  const iconRef = useRef<IconHandle>(null);
  const Icon = iconMap[task.icon];

  return (
    <div
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
    >
      <div className="flex items-center gap-2 mb-2">
        {Icon ? (
          <Icon ref={iconRef} size={20} className={`inline-flex ${seasonColor}`} />
        ) : (
          <span className={seasonColor}>{task.icon}</span>
        )}
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
  );
}

// Sub-component for month header button with hover-triggered icon animation
function MonthHeader({ month, season, isOpen, onToggle }: {
  month: Month;
  season: typeof seasons[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  const iconRef = useRef<IconHandle>(null);
  const chevronRef = useRef<IconHandle>(null);
  const MonthIcon = iconMap[month.icon];
  const ChevronIcon = iconMap["expand_more"];

  return (
    <button
      onClick={onToggle}
      onMouseEnter={() => { iconRef.current?.startAnimation(); chevronRef.current?.startAnimation(); }}
      onMouseLeave={() => { iconRef.current?.stopAnimation(); chevronRef.current?.stopAnimation(); }}
      className={`w-full flex items-center gap-3 px-6 py-4 ${season.bg} hover:brightness-95 transition-all cursor-pointer`}
    >
      {MonthIcon ? (
        <MonthIcon ref={iconRef} size={24} className={`inline-flex ${season.color}`} />
      ) : (
        <span className={season.color}>{month.icon}</span>
      )}
      <span className={`font-bold text-lg ${season.color} flex-1 text-left`}>{month.name}</span>
      <span className="text-xs text-anthracite/40">{month.tasks.length} Kategorien</span>
      <div className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
        {ChevronIcon ? (
          <ChevronIcon ref={chevronRef} size={20} className="inline-flex text-anthracite/40" />
        ) : (
          <span className="text-anthracite/40">expand_more</span>
        )}
      </div>
    </button>
  );
}

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
          <HoverIcon
            key={s.key}
            name={s.icon}
            size={32}
            className={s.color}
            as="a"
            tagClassName={`flex flex-col items-center gap-2 py-5 rounded-2xl ${s.bg} ${s.border} border hover:shadow-md transition-shadow`}
            tagProps={{ href: `#${s.key}` }}
          >
            <span className={`font-semibold ${s.color}`}>{s.label}</span>
          </HoverIcon>
        ))}
      </div>

      {/* Calendar Sections */}
      {seasons.map((season) => (
        <section key={season.key} id={season.key} className="mb-16 scroll-mt-8">
          <HoverIcon name={season.icon} size={28} className={season.color} tagClassName="flex items-center gap-3 mb-6">
            <h3 className={`text-2xl font-bold ${season.color}`}>{season.label}</h3>
          </HoverIcon>

          <div className="space-y-4">
            {season.months.map((monthIdx) => {
              const month = months[monthIdx];
              const isOpen = openMonth === monthIdx;

              return (
                <div key={monthIdx} className={`rounded-2xl border ${season.border} overflow-hidden`}>
                  <MonthHeader
                    month={month}
                    season={season}
                    isOpen={isOpen}
                    onToggle={() => setOpenMonth(isOpen ? null : monthIdx)}
                  />

                  {/* Month Content */}
                  {isOpen && (
                    <div className="px-6 py-5 space-y-5 bg-white">
                      {month.tasks.map((task, ti) => (
                        <TaskCategory key={ti} task={task} seasonColor={season.color} />
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
      <HoverIcon name="lightbulb" size={28} className="text-primary shrink-0" tagClassName="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 flex items-start gap-4">
        <div>
          <h4 className="font-bold text-anthracite mb-2">Profi-Tipp</h4>
          <p className="text-sm text-anthracite/70 leading-relaxed">
            Die beste Zeit fuer die meisten Schnittarbeiten ist der spaete Winter bis fruehe Fruehling,
            bevor der neue Austrieb beginnt. So vermeiden Sie Frostschaeden an frischen Schnittstellen
            und die Pflanzen koennen im Fruehjahr kraeftig austreiben.
          </p>
        </div>
      </HoverIcon>
    </div>
  );
}
