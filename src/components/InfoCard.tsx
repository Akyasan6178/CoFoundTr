import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Card, { CardIcon } from "./ui/Card.tsx";

type InfoCardVariant = "default" | "highlight";

type InfoCardProps = {
  variant?: InfoCardVariant;
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  action?: ReactNode;
};

export default function InfoCard({ variant = "default", icon, title, children, action }: InfoCardProps) {
  return (
    <Card tone={variant === "highlight" ? "accent" : "default"} padding="lg">
      <CardIcon icon={icon} />
      <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4 text-fg-strong">{title}</h2>
      <p className="text-lg sm:text-xl text-fg-muted leading-relaxed">{children}</p>
      {action && <div className="mt-8">{action}</div>}
    </Card>
  );
}
