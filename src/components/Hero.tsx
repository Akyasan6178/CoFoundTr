import type { Ref } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import ApplyButton, { type OnApply } from "./ApplyButton.tsx";
import Button from "./ui/Button.tsx";

type HeroProps = {
  onApply: OnApply;
  /** Birincil CTA'yı izlemek için (navbar CTA'sının görünürlüğü). */
  ctaRef?: Ref<HTMLButtonElement>;
};

const TRUST_ITEMS = ["Uyum", "Çalışma tarzı", "Niyet"];

export default function Hero({ onApply, ctaRef }: HeroProps) {
  return (
    <main className="relative pt-16 sm:pt-20 pb-24 px-6 overflow-hidden">
      {/* Kenarlarına ulaşmadan sönen yumuşak ışık; kesik kenar oluşmaz. */}
      <div className="absolute inset-0 bg-(image:--hero-light) pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center mb-8 px-4 py-1.5 rounded-full border border-line-strong text-sm text-fg-muted">
            Hackathon · Startup · Ideathon
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.1]">
            {"Seni "}
            <span className="text-accent">tamamlayan</span>{" "}
            <span className="whitespace-nowrap">co-founder'ı</span>
            {" bul."}
          </h1>
          <p className="text-lg md:text-xl text-fg-muted max-w-xl mx-auto leading-relaxed">
            Becerilerini tamamlayan, aynı hedefe bakan biriyle tanış. Eşleşme profile değil, gerçek
            uyuma dayanır.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <ApplyButton ref={ctaRef} onApply={onApply} source="hero" fullWidthOnMobile />
            <Button href="#nasil-calisir" variant="secondary" linkOnMobile trailingIcon={ArrowRight}>
              Nasıl çalışır?
            </Button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-1.5 text-sm">
            <span className="text-fg-subtle">Eşleşmeden önce değerlendirilen:</span>
            <ul className="flex items-center gap-3 text-fg-secondary">
              {TRUST_ITEMS.map((item, i) => (
                <li key={item} className="flex items-center gap-3">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-fg-faint">
                      ·
                    </span>
                  )}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
