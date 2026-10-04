import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
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

type AsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined };
type AsLink = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { href: string };

export type ButtonProps = AsButton | AsLink;

const base =
  "inline-flex items-center justify-center gap-2 font-display font-semibold whitespace-nowrap transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-[#E60000] text-white hover:bg-[#C40000] active:bg-[#A80000] focus-visible:outline-red-400",
  secondary:
    "border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 focus-visible:outline-zinc-400",
  // Sessiz metin bağlantısı (ör. footer sosyal linkleri): çerçeve ve zemin yok, hover yalnızca renk.
  ghost: "text-zinc-400 hover:text-white focus-visible:outline-zinc-400",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 rounded-lg text-sm",
  lg: "h-12 px-6 rounded-xl text-base",
};

// Mobilde metin bağlantısı, sm ve üstünde secondary lg buton. Çakışan sınıf olmasın diye ayrı tutuluyor.
const secondaryLinkOnMobile =
  "py-2 rounded-lg text-base text-zinc-400 hover:text-white focus-visible:outline-zinc-400 sm:py-0 sm:h-12 sm:px-6 sm:rounded-xl sm:border sm:border-zinc-800 sm:text-zinc-300 sm:hover:border-zinc-600";

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
