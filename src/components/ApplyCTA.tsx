import ApplyButton, { type OnApply } from "./ApplyButton.tsx";

type ApplyCTAProps = {
  onApply: OnApply;
};

export default function ApplyCTA({ onApply }: ApplyCTAProps) {
  return (
    <section id="apply-section" className="py-24 px-6 relative overflow-hidden border-t border-line bg-canvas">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-closing-tint" />
      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Başvurunu oluştur.</h2>
        <p className="text-xl text-fg-muted mb-10">Formu doldur; eşleşme, cevaplarınızdaki uyuma göre yapılır.</p>
        <div className="flex justify-center">
          <ApplyButton onApply={onApply} source="closing" fullWidthOnMobile />
        </div>
      </div>
    </section>
  );
}
