import { motion } from "motion/react";
import { ShieldCheck, Target } from "lucide-react";
import InfoCard from "./InfoCard.tsx";
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
              <button
                onClick={onApply}
                className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-lg shadow-[0_0_30px_rgba(230,0,0,0.4)] hover:shadow-[0_0_40px_rgba(230,0,0,0.6)] transition-all cursor-pointer relative z-10 hover:-translate-y-1"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
                </span>
                Platformu beklemeden şimdi burada formu doldur!
              </button>
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
