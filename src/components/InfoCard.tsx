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
  /** Metni görselleştiren diyagram: lg+ sağ sütunda, daha dar ekranlarda metin ile eylem arasında. */
  visual?: ReactNode;
};

export default function InfoCard({ variant = "default", icon, title, children, action, visual }: InfoCardProps) {
  return (
    <Card tone={variant === "highlight" ? "accent" : "default"} padding="lg">
      <div
        className={
          visual
            ? "grid gap-8 [grid-template-areas:'text'_'visual'_'action'] lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-x-12 lg:[grid-template-areas:'text_visual'_'action_visual']"
            : undefined
        }
      >
        <div className="[grid-area:text]">
          <CardIcon icon={icon} />
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4 text-fg-strong">{title}</h2>
          <p className="text-lg sm:text-xl text-fg-muted leading-relaxed">{children}</p>
        </div>
        {visual && <div className="[grid-area:visual] lg:self-center">{visual}</div>}
        {action && <div className={visual ? "[grid-area:action]" : "mt-8"}>{action}</div>}
      </div>
    </Card>
  );
}
