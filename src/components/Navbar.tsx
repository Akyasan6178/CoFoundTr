import { useEffect, useState } from "react";

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
          ? "bg-[#09090B]/70 backdrop-blur-md border-white/[0.06]"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto h-14 sm:h-16 px-4 sm:px-6 flex items-center justify-between">
        <a
          href="#"
          aria-label="CoFoundTR ana sayfa"
          className="flex flex-col items-start select-none rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500"
        >
          <span className="text-[15px] sm:text-[18px] leading-[0.8] font-display font-black tracking-tighter text-white ml-px">
            CO
          </span>
          <span className="text-[19px] sm:text-[24px] leading-[0.9] font-display font-extrabold tracking-tighter text-white">
            Found<span className="text-[#E60000]">TR</span>
          </span>
        </a>

        <button
          type="button"
          onClick={onApply}
          className="h-9 px-4 rounded-lg bg-[#E60000] hover:bg-red-700 text-white text-sm font-display font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
        >
          Şimdi Başvur
        </button>
      </nav>
    </header>
  );
}
