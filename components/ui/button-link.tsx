import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "brand" | "turquoise" | "secondary" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  brand:
    "bg-brand text-white hover:bg-brand-hover focus-visible:ring-brand/30",
  turquoise:
    "bg-turquoise text-foreground hover:bg-turquoise-hover focus-visible:ring-turquoise/30",
  secondary:
    "border border-border bg-card text-foreground hover:bg-background focus-visible:ring-border",
  ghost: "text-foreground hover:bg-black/5 focus-visible:ring-border",
};

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "brand",
  external = false,
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variantStyles[variant],
    className,
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
