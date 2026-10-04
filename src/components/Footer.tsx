import { Instagram, Linkedin } from "lucide-react";
import { SOCIAL_LINKS } from "../config/site.ts";

const linkClassName =
  "flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] active:scale-95";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className={linkClassName}>
            <Instagram className="w-5 h-5" />
            <span className="font-semibold text-sm tracking-wide">Instagram</span>
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={linkClassName}>
            <Linkedin className="w-5 h-5" />
            <span className="font-semibold text-sm tracking-wide">LinkedIn</span>
          </a>
        </div>
        <div className="text-center">
          <div className="text-zinc-600 text-xs">© 2026 CoFoundTR. Tüm hakları saklıdır. Built for the next gen.</div>
        </div>
      </div>
    </footer>
  );
}
