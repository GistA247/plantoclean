import { useState, useEffect, useCallback } from "react";

type FontSize = "normal" | "large" | "x-large";
type ContrastMode = "normal" | "high" | "inverted";

interface A11ySettings {
  fontSize: FontSize;
  contrast: ContrastMode;
  highlightLinks: boolean;
  wideSpacing: boolean;
}

const defaults: A11ySettings = {
  fontSize: "normal",
  contrast: "normal",
  highlightLinks: false,
  wideSpacing: false,
};

const STORAGE_KEY = "ptc-a11y";

function loadSettings(): A11ySettings {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return { ...defaults, ...JSON.parse(stored) };
  } catch {}
  return { ...defaults };
}

function saveSettings(s: A11ySettings) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch {}
}

export default function AccessibilityToolbar() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(defaults);

  // Load from localStorage on mount
  useEffect(() => {
    setSettings(loadSettings());
  }, []);

  // Apply settings to <html> element
  useEffect(() => {
    const html = document.documentElement;

    // Font size
    html.classList.remove("a11y-font-large", "a11y-font-x-large");
    if (settings.fontSize === "large") html.classList.add("a11y-font-large");
    if (settings.fontSize === "x-large") html.classList.add("a11y-font-x-large");

    // Contrast
    html.classList.remove("a11y-high-contrast", "a11y-inverted");
    if (settings.contrast === "high") html.classList.add("a11y-high-contrast");
    if (settings.contrast === "inverted") html.classList.add("a11y-inverted");

    // Highlight links
    html.classList.toggle("a11y-highlight-links", settings.highlightLinks);

    // Wide spacing
    html.classList.toggle("a11y-wide-spacing", settings.wideSpacing);

    saveSettings(settings);
  }, [settings]);

  const update = useCallback(
    (patch: Partial<A11ySettings>) =>
      setSettings((prev) => ({ ...prev, ...patch })),
    [],
  );

  const reset = useCallback(() => {
    setSettings({ ...defaults });
  }, []);

  const cycleFontSize = useCallback(() => {
    setSettings((prev) => {
      const order: FontSize[] = ["normal", "large", "x-large"];
      const next = order[(order.indexOf(prev.fontSize) + 1) % order.length];
      return { ...prev, fontSize: next };
    });
  }, []);

  const cycleContrast = useCallback(() => {
    setSettings((prev) => {
      const order: ContrastMode[] = ["normal", "high", "inverted"];
      const next = order[(order.indexOf(prev.contrast) + 1) % order.length];
      return { ...prev, contrast: next };
    });
  }, []);

  const fontLabel =
    settings.fontSize === "normal"
      ? "Normal"
      : settings.fontSize === "large"
        ? "Gross"
        : "Sehr gross";

  const contrastLabel =
    settings.contrast === "normal"
      ? "Normal"
      : settings.contrast === "high"
        ? "Hoch"
        : "Invertiert";

  const isDefault =
    settings.fontSize === "normal" &&
    settings.contrast === "normal" &&
    !settings.highlightLinks &&
    !settings.wideSpacing;

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Barrierefreiheit-Einstellungen"
        aria-expanded={open}
        className="fixed bottom-24 right-5 z-[9999] w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-primary-light transition-all flex items-center justify-center"
      >
        <span className="material-icons text-2xl">accessibility_new</span>
      </button>

      {/* Panel */}
      {open && (
        <div
          className="fixed bottom-[7.5rem] right-5 z-[9999] w-72 bg-white rounded-2xl shadow-2xl border border-primary/20 overflow-hidden"
          role="dialog"
          aria-label="Barrierefreiheit"
        >
          {/* Header */}
          <div className="bg-primary text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-icons text-lg">accessibility_new</span>
              <span className="font-bold text-sm">Barrierefreiheit</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Schliessen"
              className="hover:bg-white/20 rounded p-0.5 transition-colors"
            >
              <span className="material-icons text-lg">close</span>
            </button>
          </div>

          {/* Options */}
          <div className="p-4 space-y-3">
            {/* Font size */}
            <button
              onClick={cycleFontSize}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all text-left"
            >
              <span className="material-icons text-primary text-xl">text_fields</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-anthracite">Schriftgrosse</p>
                <p className="text-xs text-anthracite/50">{fontLabel}</p>
              </div>
              {settings.fontSize !== "normal" && (
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              )}
            </button>

            {/* Contrast */}
            <button
              onClick={cycleContrast}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all text-left"
            >
              <span className="material-icons text-primary text-xl">contrast</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-anthracite">Kontrast</p>
                <p className="text-xs text-anthracite/50">{contrastLabel}</p>
              </div>
              {settings.contrast !== "normal" && (
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              )}
            </button>

            {/* Highlight links */}
            <button
              onClick={() => update({ highlightLinks: !settings.highlightLinks })}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all text-left"
            >
              <span className="material-icons text-primary text-xl">link</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-anthracite">Links hervorheben</p>
                <p className="text-xs text-anthracite/50">
                  {settings.highlightLinks ? "An" : "Aus"}
                </p>
              </div>
              {settings.highlightLinks && (
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              )}
            </button>

            {/* Wide spacing */}
            <button
              onClick={() => update({ wideSpacing: !settings.wideSpacing })}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg border border-primary/10 hover:border-primary/30 hover:bg-primary/5 transition-all text-left"
            >
              <span className="material-icons text-primary text-xl">format_line_spacing</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-anthracite">Grosse Abstande</p>
                <p className="text-xs text-anthracite/50">
                  {settings.wideSpacing ? "An" : "Aus"}
                </p>
              </div>
              {settings.wideSpacing && (
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
              )}
            </button>
          </div>

          {/* Reset */}
          {!isDefault && (
            <div className="px-4 pb-4">
              <button
                onClick={reset}
                className="w-full text-center text-xs text-primary hover:text-primary-light font-medium py-2 border-t border-primary/10 transition-colors"
              >
                Alles zurucksetzen
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
