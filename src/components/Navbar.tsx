import { useEffect, useState } from "react";
import ApplyButton from "./ApplyButton.tsx";
import Logo from "./Logo.tsx";

type NavbarProps = {
  onApply: () => void;
};

export default function Navbar({ onApply }: NavbarProps) {
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
          ? "bg-[#09090B]/70 backdrop-blur-md border-line"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto h-14 sm:h-16 px-4 sm:px-6 flex items-center justify-between">
        <Logo />

        <ApplyButton onApply={onApply} size="sm" />
      </nav>
    </header>
  );
}
