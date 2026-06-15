import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-card/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="group flex min-h-11 items-center gap-2.5">
          <span
            aria-hidden
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-sm font-bold text-white"
          >
            M
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              {siteConfig.shortName}
            </span>
            <span className="hidden text-xs text-muted sm:block">GmbH</span>
          </span>
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="flex items-center gap-1 sm:gap-2"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="min-h-11 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-background hover:text-foreground sm:px-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
