import { useEffect, useState } from "react";
import ApplyButton, { type OnApply } from "./ApplyButton.tsx";
import Logo from "./Logo.tsx";

type NavbarProps = {
  onApply: OnApply;
  /** Hero CTA'ları görünürken false: aynı ekranda iki birincil CTA olmasın. */
  showCta: boolean;
};

export default function Navbar({ onApply, showCta }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Sayfa kaydırılınca cam görünümüne geç; state yalnızca eşik aşılınca değişir.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-200 ${
        isScrolled
          ? "bg-header-glass backdrop-blur-md border-line"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto h-14 sm:h-16 px-4 sm:px-6 flex items-center justify-between">
        <Logo />

        {/* Gizliyken DOM'da kalır (düzen kaymaz), inert ile odak ve ekran okuyucudan çıkar. */}
        <div
          inert={!showCta}
          className={`transition-opacity duration-200 ${showCta ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <ApplyButton onApply={onApply} source="navbar" size="sm" />
        </div>
      </nav>
    </header>
  );
}
