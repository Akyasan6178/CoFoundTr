import type { LucideIcon } from "lucide-react";
import Card, { CardIcon } from "./ui/Card.tsx";

type StepCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function StepCard({ icon, title, description }: StepCardProps) {
  return (
    <Card>
      <CardIcon icon={icon} />
      <h3 className="text-lg font-display font-semibold mb-2 text-fg-strong">{title}</h3>
      <p className="text-fg-muted leading-relaxed">{description}</p>
    </Card>
  );
}
