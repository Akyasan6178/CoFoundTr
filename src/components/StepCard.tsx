import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { itemVariants } from "../lib/animations.ts";

type StepCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function StepCard({ icon: Icon, title, description }: StepCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-zinc-900/40 border border-zinc-800 shadow-sm rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(230,0,0,0.15)] relative overflow-hidden cursor-default group"
    >
      <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-500/20 transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-display font-semibold mb-3 relative z-10">{title}</h3>
      <p className="text-zinc-400 leading-relaxed relative z-10">{description}</p>
    </motion.div>
  );
}
