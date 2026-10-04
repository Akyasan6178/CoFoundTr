import { motion } from "motion/react";
import { ShieldCheck, Target } from "lucide-react";
import InfoCard from "./InfoCard.tsx";
import ApplyButton from "./ApplyButton.tsx";
import { containerVariants } from "../lib/animations.ts";

type WhyUsProps = {
  onApply: () => void;
};

export default function WhyUs({ onApply }: WhyUsProps) {
  return (
    <section className="py-32 px-6 border-t border-zinc-900 bg-[#09090B] overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          <InfoCard variant="default" icon={Target} title="Neden CoFoundTR?">
            {
              "Türkiye'de co-founder bulmak hâlâ rastlantıya bağlı. LinkedIn mesajları cevapsız kalıyor, kulüp etkinlikleri yetmiyor. CoFoundTR, seni sadece profil değil — "
            }
            <span className="font-semibold text-red-500">gerçek uyum</span>
            {" üzerinden eşleştiriyor."}
          </InfoCard>

          <InfoCard
            variant="highlight"
            icon={ShieldCheck}
            title="Farklı olarak ne yapıyoruz?"
            action={
              <div className="relative z-10 flex flex-col items-start gap-3">
                <p className="text-sm text-zinc-400">Platform açılmadan başvurunu oluşturabilirsin.</p>
                <ApplyButton onApply={onApply} fullWidthOnMobile />
              </div>
            }
          >
            {
              "Sadece tanıştırmıyoruz — test ettiriyoruz. Eşleşmeden önce her iki tarafa üç soru soruyoruz: "
            }
            <span className="font-semibold text-white">uyum, çalışma tarzı, niyet.</span>
            {" Cevapları gördükten sonra eşleşme sağlanıyor."}
          </InfoCard>
        </motion.div>
      </div>
    </section>
  );
}
