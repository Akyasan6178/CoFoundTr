import { Instagram, Linkedin } from "lucide-react";
import { SOCIAL_LINKS } from "../config/site.ts";
import Logo from "./Logo.tsx";
import Button from "./ui/Button.tsx";

const SOCIALS = [
  { label: "Instagram", href: SOCIAL_LINKS.instagram, icon: Instagram },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      {/* Mobil: logo, sosyal linkler, telif. sm+: solda logo ve telif, linkler telif satırıyla aynı hizada sağda. */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-x-8">
        <Logo />

        {/* -mx-4: ghost linklerin iç boşluğu kenar eksenini kaydırmasın. */}
        <ul className="flex items-center gap-1 -mx-4 sm:col-start-2 sm:row-start-2">
          {SOCIALS.map(({ label, href, icon }) => (
            <li key={label}>
              <Button
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label} (yeni sekmede açılır)`}
                variant="ghost"
                size="sm"
                leadingIcon={icon}
              >
                {label}
              </Button>
            </li>
          ))}
        </ul>

        <p className="text-sm text-fg-muted sm:col-start-1 sm:row-start-2">© {new Date().getFullYear()} CoFoundTR. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
