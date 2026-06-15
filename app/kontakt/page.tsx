import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kontakt",
  description: `Kontaktieren Sie die ${siteConfig.name}.`,
};

export default function KontaktPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="max-w-3xl space-y-6">
        <p className="text-sm font-medium text-brand">Kontakt</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Schreib uns.
        </h1>
        <p className="text-lg leading-relaxed text-muted">
          Fragen zu {siteConfig.product.name}, Partnerschaften oder Feedback zur
          Community — wir freuen uns auf deine Nachricht.
        </p>
      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-2">
        <article className="rounded-[var(--radius-xl)] border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            E-Mail
          </h2>
          <p className="mb-6 text-sm text-muted">
            Am schnellsten erreichst du uns per E-Mail.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-base font-medium text-brand transition-colors hover:text-brand-hover"
          >
            {siteConfig.email}
          </a>
        </article>

        <article className="rounded-[var(--radius-xl)] border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
          <h2 className="mb-2 text-lg font-semibold text-foreground">
            {siteConfig.product.name}
          </h2>
          <p className="mb-6 text-sm text-muted">
            Für Support und Community-Themen direkt auf der Plattform.
          </p>
          <ButtonLink
            href={siteConfig.product.url}
            variant="turquoise"
            external
          >
            Zur Plattform
          </ButtonLink>
        </article>
      </div>
    </main>
  );
}
