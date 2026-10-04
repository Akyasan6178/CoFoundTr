import { ArrowRight } from "lucide-react";

type ApplyCTAProps = {
  onApply: () => void;
};

export default function ApplyCTA({ onApply }: ApplyCTAProps) {
  return (
    <section id="apply-section" className="py-24 px-6 relative overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-500/5" />
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Sahneye Çıkmaya Hazır Mısın?</h2>
        <p className="text-xl text-zinc-400 mb-10">Formu doldur, uyumuna göre eşleşme başlasın!</p>
        <div className="flex justify-center mt-8">
          {/* "font-space" legacy build'de de tanımsızdı; görünümü korumak için olduğu gibi bırakıldı. */}
          <button
            onClick={onApply}
            className="inline-flex items-center gap-2 bg-[#E60000] text-white hover:bg-red-700 shadow-[0_4px_14px_0_rgba(230,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(230,0,0,0.23)] px-10 py-4 rounded-xl font-space font-bold transition-all hover:-translate-y-1"
          >
            Şimdi Başvur
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
