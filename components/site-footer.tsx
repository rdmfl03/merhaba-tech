import Link from "next/link";
import { legalLinks, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">
              {siteConfig.name}
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Digitale Produkte für die türkisch-deutsche Community — lokal,
              vertrauenswürdig und community-getrieben.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Produkt</p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a
                  href={siteConfig.product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  {siteConfig.product.name}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Rechtliches</p>
            <ul className="space-y-2 text-sm text-muted">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}</p>
          <p>Gegründet von {siteConfig.founders.map((f) => f.name).join(" & ")}</p>
        </div>
      </div>
    </footer>
  );
}
