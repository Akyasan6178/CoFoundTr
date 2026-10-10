import { useSyncExternalStore } from "react";

export type ThemePreference = "system" | "light" | "dark";
export type Theme = "light" | "dark";

/** index.html'deki açılış script'iyle aynı anahtar ve aynı çözümleme mantığı. */
const STORAGE_KEY = "cofoundtr-theme";
const lightQuery = window.matchMedia("(prefers-color-scheme: light)");

function readPreference(): ThemePreference {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark" || saved === "system") return saved;
  } catch {
    // Gizli sekme / engellenmiş depolama: sisteme uy.
  }
  return "system";
}

const resolve = (preference: ThemePreference): Theme =>
  preference === "system" ? (lightQuery.matches ? "light" : "dark") : preference;

function apply(theme: Theme) {
  const root = document.documentElement;
  if (root.dataset.theme === theme) return;
  // Geçiş anında renk animasyonlarını kapat: her şey aynı karede değişsin.
  const freeze = document.createElement("style");
  freeze.textContent = "*,*::before,*::after{transition:none!important}";
  document.head.appendChild(freeze);
  root.dataset.theme = theme;
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  const color = meta?.dataset[theme];
  if (meta && color) meta.content = color;
  void getComputedStyle(root).color; // yeni renkleri hemen uygula
  requestAnimationFrame(() => freeze.remove());
}

let preference = readPreference();
let snapshot = { preference, theme: resolve(preference) };
const listeners = new Set<() => void>();

function update() {
  snapshot = { preference, theme: resolve(preference) };
  apply(snapshot.theme);
  listeners.forEach((listener) => listener());
}

// "Sistem" seçiliyken işletim sistemi teması değişirse canlı izle.
lightQuery.addEventListener("change", () => {
  if (preference === "system") update();
});
// Başka bir sekmede değiştirilirse eşitle.
window.addEventListener("storage", (event) => {
  if (event.key === STORAGE_KEY) {
    preference = readPreference();
    update();
  }
});

export function setThemePreference(next: ThemePreference) {
  preference = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Kaydedilemese de bu oturumda uygula.
  }
  update();
}

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export function useTheme() {
  return useSyncExternalStore(subscribe, () => snapshot);
}
