import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

type HeroProps = {
  onApply: () => void;
};

const TRUST_ITEMS = ["Uyum", "Çalışma tarzı", "Niyet"];

export default function Hero({ onApply }: HeroProps) {
  return (
    <main className="relative pt-12 pb-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 text-sm text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E60000]" />
            Hackathon · Startup · Ideathon
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.05]">
            {"Doğru "}
            <span className="text-[#E60000] whitespace-nowrap">co-founder</span>
            {"'ını bul ve harekete geç!"}
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {
              "Hackathon'u domine edecek, o startup fikrini uçuracak veya ideathon'da fark yaratacak eksik parçayı mı arıyorsun? CoFoundTR ile seni tamamlayan o mükemmel yeteneği keşfet."
            }
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onApply}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E60000] text-white hover:bg-red-700 px-8 py-4 rounded-xl font-display font-bold transition-colors cursor-pointer"
            >
              Şimdi Başvur
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#nasil-calisir"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 font-display font-semibold transition-colors"
            >
              Nasıl çalışır?
            </a>
          </div>

          <ul className="mt-8 flex items-center justify-center gap-3 text-sm text-zinc-500">
            {TRUST_ITEMS.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true">·</span>}
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </main>
  );
}
