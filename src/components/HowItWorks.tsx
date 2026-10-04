import { motion } from "motion/react";
import { UserPlus, Zap } from "lucide-react";
import StepCard from "./StepCard.tsx";
import { containerVariants } from "../lib/animations.ts";

export default function HowItWorks() {
  return (
    <section id="nasil-calisir" className="py-24 sm:py-32 px-6 border-t border-line bg-[#09090B] scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Nasıl çalışır?
          </h2>
          <p className="text-zinc-400">İki adımda: kendini anlat, uyumu birlikte görün.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 sm:gap-8"
        >
          <StepCard
            icon={UserPlus}
            title="1. Vizyonunu paylaş"
            description="Kendini, projeni veya aradığın eksik yeteneği bize anlat. Formu doldur, seni tamamlayan ortağı bulalım."
          />
          <StepCard
            icon={Zap}
            title="2. Test et ve inşa et"
            description="Tanış, enerjine bak ve birlikte çalışıp çalışamayacağınızı gör. Uyumu yakalarsan girişime hız ver."
          />
        </motion.div>
      </div>
    </section>
  );
}
