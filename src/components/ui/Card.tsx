import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import { itemVariants } from "../../lib/animations.ts";

export type CardTone = "default" | "accent";
export type CardPadding = "md" | "lg";

const tones: Record<CardTone, string> = {
  default: "bg-surface border-line",
  accent: "bg-accent-surface border-accent-line",
};

const paddings: Record<CardPadding, string> = {
  md: "p-6 sm:p-8",
  lg: "p-8 sm:p-10",
};

type CardProps = {
  tone?: CardTone;
  padding?: CardPadding;
  children: ReactNode;
};

/**
 * Bilgi gösteren statik kart. Tıklanabilir değil: hover, glow, scale ve
 * renk geçişi bilerek yok; etkileşim hissi yalnızca CTA'larda.
 */
export default function Card({ tone = "default", padding = "md", children }: CardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className={`rounded-2xl border shadow-card ${tones[tone]} ${paddings[padding]}`}
    >
      {children}
    </motion.div>
  );
}

export function CardIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="w-10 h-10 mb-6 rounded-lg border border-line bg-surface-raised flex items-center justify-center text-fg-secondary">
      <Icon aria-hidden="true" className="w-5 h-5" />
    </div>
  );
}
