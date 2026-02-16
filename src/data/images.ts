import type { Locale } from "../i18n";

// ─── Type Definitions ───────────────────────────────────────────

/** A single image with its URL and localized alt text */
export interface ImageEntry {
  url: string;
  alt: Record<Locale, string>;
}

/** A before/after image pair */
export interface BeforeAfterPair {
  before: ImageEntry;
  after: ImageEntry;
}

/** All before/after data for one service section */
export interface ServiceImages {
  /** The primary slider shown inline in the service grid */
  hero: BeforeAfterPair;
  /** Additional pairs shown in the expandable gallery */
  gallery: BeforeAfterPair[];
}

/** Keys matching the 4 service section IDs */
export type ServiceKey =
  | "gruenschnitt"
  | "jahrespflege"
  | "rueckschnitt"
  | "beischnitt";

// ─── Hero Image ─────────────────────────────────────────────────

export const heroImage: ImageEntry = {
  url: "https://images.unsplash.com/photo-1770169096244-90f4288392d7?w=1920&q=80",
  alt: {
    de: "Professionelle Grünpflege",
    en: "Professional green care",
  },
};

// ─── Service Preview Cards (Homepage) ───────────────────────────

export const servicePreviewCards: {
  key: "card1" | "card2" | "card3";
  image: ImageEntry;
}[] = [
  {
    key: "card1",
    image: {
      url: "https://images.unsplash.com/photo-1756428785435-c3a6b74147d7?w=800&q=80",
      alt: {
        de: "Gepflegter Rasen nach dem Mähen",
        en: "Well-maintained lawn after mowing",
      },
    },
  },
  {
    key: "card2",
    image: {
      url: "https://images.unsplash.com/photo-1766289082911-40e9eecec21d?w=800&q=80",
      alt: {
        de: "Gewerbliche Grünfläche mit moderner Bepflanzung",
        en: "Commercial green space with modern landscaping",
      },
    },
  },
  {
    key: "card3",
    image: {
      url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
      alt: {
        de: "Gepflegter Garten mit Wegen und Blumen",
        en: "Well-maintained garden with paths and flowers",
      },
    },
  },
];

// ─── Before/After Images (Service Pages) ────────────────────────

export const serviceImages: Record<ServiceKey, ServiceImages> = {
  gruenschnitt: {
    hero: {
      before: {
        url: "https://images.unsplash.com/photo-1703432043433-3bb86c844968?w=800&q=80",
        alt: {
          de: "Verwilderte Grünfläche vor dem Grünschnitt",
          en: "Overgrown area before mowing",
        },
      },
      after: {
        url: "https://images.unsplash.com/photo-1756428785435-c3a6b74147d7?w=800&q=80",
        alt: {
          de: "Gepflegter Rasen nach dem Grünschnitt",
          en: "Well-maintained lawn after mowing",
        },
      },
    },
    gallery: [],
  },

  jahrespflege: {
    hero: {
      before: {
        url: "https://images.unsplash.com/photo-1759090901556-726bcc677252?w=800&q=80",
        alt: {
          de: "Ungepflegter Garten vor der Jahrespflege",
          en: "Neglected garden before year-round care",
        },
      },
      after: {
        url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80",
        alt: {
          de: "Garten nach professioneller Jahrespflege",
          en: "Garden after professional year-round care",
        },
      },
    },
    gallery: [],
  },

  rueckschnitt: {
    hero: {
      before: {
        url: "https://images.unsplash.com/photo-1767341634320-a4e88929a376?w=800&q=80",
        alt: {
          de: "Überwucherte Bäume vor dem Rückschnitt",
          en: "Overgrown trees before pruning",
        },
      },
      after: {
        url: "https://images.unsplash.com/photo-1758877482768-d67e469f8f50?w=800&q=80",
        alt: {
          de: "Bäume nach dem fachgerechten Rückschnitt",
          en: "Trees after professional pruning",
        },
      },
    },
    gallery: [],
  },

  beischnitt: {
    hero: {
      before: {
        url: "https://images.unsplash.com/photo-1766228271529-7aac76cca4c9?w=800&q=80",
        alt: {
          de: "Ungeschnittene Hecke vor dem Beischnitt",
          en: "Untrimmed hedge before trimming",
        },
      },
      after: {
        url: "https://images.unsplash.com/photo-1766483084888-51ff4f677115?w=800&q=80",
        alt: {
          de: "Hecke nach dem präzisen Formschnitt",
          en: "Hedge after precise topiary trimming",
        },
      },
    },
    gallery: [],
  },
};
