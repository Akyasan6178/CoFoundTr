import ApplyButton from "./ApplyButton.tsx";

type ApplyCTAProps = {
  onApply: () => void;
};

export default function ApplyCTA({ onApply }: ApplyCTAProps) {
  return (
    <section id="apply-section" className="py-24 px-6 relative overflow-hidden border-t border-zinc-900 bg-zinc-950">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-500/5" />
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Sahneye Çıkmaya Hazır Mısın?</h2>
        <p className="text-xl text-zinc-400 mb-10">Formu doldur, uyumuna göre eşleşme başlasın.</p>
        <div className="flex justify-center">
          <ApplyButton onApply={onApply} fullWidthOnMobile />
        </div>
      </div>
    </section>
  );
}
