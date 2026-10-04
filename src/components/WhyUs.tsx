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
    <section className="py-24 sm:py-32 px-6 border-t border-line bg-[#09090B]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6 sm:gap-8"
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
              <div className="flex flex-col items-start gap-3">
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
