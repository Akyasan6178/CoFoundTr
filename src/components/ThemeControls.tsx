import { Monitor, Moon, Sun, type LucideIcon } from "lucide-react";
import { setThemePreference, useTheme, type ThemePreference } from "../lib/theme.ts";

/** Navbar: açık ↔ koyu arasında geçiş. İkon, geçilecek temayı gösterir. */
export function ThemeToggle() {
  const { theme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  const label = next === "light" ? "Açık temaya geç" : "Koyu temaya geç";
  const Icon = next === "light" ? Sun : Moon;

  return (
    <button
      type="button"
      onClick={() => setThemePreference(next)}
      aria-label={label}
      title={label}
      className="h-9 w-9 inline-flex items-center justify-center rounded-lg text-fg-muted hover:text-fg-strong transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg-muted"
    >
      <Icon aria-hidden="true" className="w-4 h-4" />
    </button>
  );
}

const OPTIONS: { value: ThemePreference; label: string; icon: LucideIcon }[] = [
  { value: "system", label: "Sistem", icon: Monitor },
  { value: "light", label: "Açık", icon: Sun },
  { value: "dark", label: "Koyu", icon: Moon },
];

/** Footer: Sistem / Açık / Koyu. Seçili olan aria-pressed ile işaretli. */
export function ThemeSelect() {
  const { preference } = useTheme();

  return (
    <div role="group" aria-label="Tema" className="inline-flex gap-0.5 p-0.5 rounded-lg border border-line-strong">
      {OPTIONS.map(({ value, label, icon: Icon }) => {
        const active = preference === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={active}
            onClick={() => setThemePreference(value)}
            className={`inline-flex items-center gap-1.5 h-7 px-2.5 rounded-md text-xs font-medium transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg-muted ${
              active ? "bg-surface-raised text-fg-strong ring-1 ring-inset ring-line" : "text-fg-muted hover:text-fg-strong"
            }`}
          >
            <Icon aria-hidden="true" className="w-3.5 h-3.5" />
            {label}
          </button>
        );
      })}
    </div>
  );
}
