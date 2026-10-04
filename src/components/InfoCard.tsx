import type { ReactNode } from "react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import { itemVariants } from "../lib/animations.ts";

type InfoCardVariant = "default" | "highlight";

type InfoCardProps = {
  variant?: InfoCardVariant;
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  action?: ReactNode;
};

const styles: Record<InfoCardVariant, { card: string; iconWrapper: string; text: string }> = {
  default: {
    card: "bg-zinc-900/40 rounded-[3rem] p-10 sm:p-16 border border-zinc-800 relative overflow-hidden group hover:border-red-500/40 transition-all duration-500 hover:shadow-[0_0_60px_rgba(230,0,0,0.15)] hover:scale-[1.02]",
    iconWrapper:
      "absolute top-0 right-0 p-12 opacity-5 transform group-hover:scale-125 group-hover:rotate-6 transition-transform duration-700 ease-out",
    text: "text-xl sm:text-2xl text-zinc-400 leading-relaxed relative z-10 group-hover:text-zinc-300 transition-colors",
  },
  highlight: {
    card: "bg-red-950/20 rounded-[3rem] p-10 sm:p-16 border border-red-900/30 relative overflow-hidden group hover:border-red-500/50 transition-all duration-500 hover:shadow-[0_0_60px_rgba(230,0,0,0.2)] hover:scale-[1.02]",
    iconWrapper:
      "absolute top-0 right-0 p-12 opacity-[0.05] transform group-hover:rotate-[15deg] group-hover:scale-125 transition-transform duration-700 ease-out text-red-500",
    text: "text-xl sm:text-2xl text-zinc-300 leading-relaxed mb-12 relative z-10 group-hover:text-zinc-200 transition-colors",
  },
};

export default function InfoCard({ variant = "default", icon: Icon, title, children, action }: InfoCardProps) {
  const s = styles[variant];

  return (
    <motion.div variants={itemVariants} className={s.card}>
      <div className={s.iconWrapper}>
        <Icon className="w-48 h-48" />
      </div>
      <h3 className="text-3xl sm:text-5xl font-display font-bold mb-6 text-white relative z-10 group-hover:text-red-50 transition-colors">
        {title}
      </h3>
      <p className={s.text}>{children}</p>
      {action}
    </motion.div>
  );
}
