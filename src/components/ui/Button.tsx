import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode, Ref } from "react";
import type { LucideIcon } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "lg";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** 640px altında tam genişlik. */
  fullWidthOnMobile?: boolean;
  /** Yalnızca secondary: mobilde çerçevesiz metin bağlantısı, sm ve üstünde buton. */
  linkOnMobile?: boolean;
  leadingIcon?: LucideIcon;
  trailingIcon?: LucideIcon;
  /** Yalnızca yerleşim (margin, hizalama) için; renk ve ölçüler buradan değiştirilmez. */
  className?: string;
  children: ReactNode;
};

// React 19: ref normal bir prop olarak gelir ve ...rest ile <button>'a iletilir.
type AsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined; ref?: Ref<HTMLButtonElement> };
type AsLink = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { href: string };

export type ButtonProps = AsButton | AsLink;

const base =
  "inline-flex items-center justify-center gap-2 font-display font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-on-accent hover:bg-accent-hover active:bg-accent-active focus-visible:outline-focus-accent",
  secondary:
    "border border-line-strong text-fg-secondary hover:text-fg-strong hover:border-line-hover focus-visible:outline-fg-muted",
  // Sessiz metin bağlantısı (ör. footer sosyal linkleri): çerçeve ve zemin yok, hover yalnızca renk.
  ghost: "text-fg-muted hover:text-fg-strong focus-visible:outline-fg-muted",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 rounded-lg text-sm",
  lg: "h-12 px-6 rounded-xl text-base",
};

// Mobilde metin bağlantısı, sm ve üstünde secondary lg buton. Çakışan sınıf olmasın diye ayrı tutuluyor.
const secondaryLinkOnMobile =
  "py-2 rounded-lg text-base text-fg-muted hover:text-fg-strong focus-visible:outline-fg-muted sm:py-0 sm:h-12 sm:px-6 sm:rounded-xl sm:border sm:border-line-strong sm:text-fg-secondary sm:hover:border-line-hover";

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "lg",
    fullWidthOnMobile = false,
    linkOnMobile = false,
    leadingIcon: LeadingIcon,
    trailingIcon: Icon,
    className,
    children,
    ...rest
  } = props;

  const asMobileLink = linkOnMobile && variant === "secondary";
  const classes = [
    base,
    asMobileLink ? secondaryLinkOnMobile : `${variants[variant]} ${sizes[size]}`,
    fullWidthOnMobile && "w-full sm:w-auto",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {LeadingIcon && <LeadingIcon aria-hidden="true" className="w-4 h-4" />}
      {children}
      {Icon && <Icon aria-hidden="true" className={asMobileLink ? "w-4 h-4 sm:hidden" : "w-4 h-4"} />}
    </>
  );

  if (rest.href !== undefined) {
    return (
      <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} className={classes}>
      {content}
    </button>
  );
}
