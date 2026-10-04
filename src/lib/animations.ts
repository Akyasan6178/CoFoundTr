import type { Variants } from "motion/react";

/** Kartları sırayla (0.2s arayla) görünür yapan kapsayıcı. */
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

/** Her kartın aşağıdan yukarı belirmesi. */
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
