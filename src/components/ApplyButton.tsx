import { ArrowRight } from "lucide-react";
import Button, { type ButtonSize } from "./ui/Button.tsx";

type ApplyButtonProps = {
  onApply: () => void;
  size?: ButtonSize;
  fullWidthOnMobile?: boolean;
  className?: string;
};

/** Sitedeki tüm başvuru CTA'ları: aynı metin, aynı görünüm, aynı Tally modalı. */
export default function ApplyButton({ onApply, size = "lg", fullWidthOnMobile = false, className }: ApplyButtonProps) {
  return (
    <Button
      onClick={onApply}
      size={size}
      fullWidthOnMobile={fullWidthOnMobile}
      trailingIcon={size === "lg" ? ArrowRight : undefined}
      className={className}
    >
      Şimdi Başvur
    </Button>
  );
}
