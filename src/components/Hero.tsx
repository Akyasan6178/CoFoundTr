import { motion } from "motion/react";

export default function Hero() {
  return (
    <main className="relative pt-12 pb-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-[1.05]">
            {"Doğru "}
            <span className="text-[#E60000]">co-founder</span>
            {"'ını bul ve harekete geç!"}
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {
              "Hackathon'u domine edecek, o startup fikrini uçuracak veya ideathon'da fark yaratacak eksik parçayı mı arıyorsun? CoFoundTR ile seni tamamlayan o mükemmel yeteneği keşfet."
            }
          </p>
        </motion.div>
      </div>
    </main>
  );
}
