import type { Ref } from "react";
import { ArrowRight } from "lucide-react";
import Button, { type ButtonSize } from "./ui/Button.tsx";
import type { CtaSource } from "../config/site.ts";

export type OnApply = (source: CtaSource) => void;

type ApplyButtonProps = {
  onApply: OnApply;
  /** Tally'ye "source" olarak gönderilir; her CTA kendi değerini verir. */
  source: CtaSource;
  variant?: "primary" | "secondary";
  size?: ButtonSize;
  fullWidthOnMobile?: boolean;
  className?: string;
  ref?: Ref<HTMLButtonElement>;
};

/** Sitedeki tüm başvuru CTA'ları: aynı metin, aynı Tally modalı. */
export default function ApplyButton({
  onApply,
  source,
  variant = "primary",
  size = "lg",
  fullWidthOnMobile = false,
  className,
  ref,
}: ApplyButtonProps) {
  return (
    <Button
      ref={ref}
      onClick={() => onApply(source)}
      data-cta={source}
      variant={variant}
      size={size}
      fullWidthOnMobile={fullWidthOnMobile}
      trailingIcon={size === "lg" ? ArrowRight : undefined}
      className={className}
    >
      Şimdi başvur
    </Button>
  );
}
