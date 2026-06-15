import { ButtonLink } from "@/components/ui/button-link";
import { FounderPreview } from "@/components/founder-card";
import { siteConfig } from "@/lib/site-config";

const pillars = [
  {
    title: "Lokal & relevant",
    description:
      "Orte, Events und Communities in deiner Stadt — nicht irgendwo im Internet, sondern dort, wo du lebst.",
  },
  {
    title: "Vertrauenswürdig",
    description:
      "Inhalte erscheinen erst nach Prüfung. Kein Werbelärm, keine versteckte Werbung.",
  },
  {
    title: "Community-getrieben",
    description:
      "Von Menschen für Menschen. Inhaber:innen können Profile transparent beanspruchen.",
  },
] as const;

const productFeatures = [
  {
    label: "Orte",
    color: "bg-brand",
    description: "Restaurants, Geschäfte und Locations mit türkischem Bezug.",
  },
  {
    label: "Events",
    color: "bg-merhaba-black",
    description: "Veranstaltungen, die für die Community wirklich relevant sind.",
  },
  {
    label: "Communities",
    color: "bg-community",
    description: "Gruppen und Netzwerke — vernetzt und auffindbar.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-card">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(227,10,23,0.12),transparent_45%)]"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-medium tracking-wide text-brand uppercase">
              Türkisch-deutsche Community
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl lg:leading-[1.05]">
              Technologie, die Brücken baut.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              {siteConfig.shortName} entwickelt digitale Produkte für Menschen
              mit türkischem Bezug in Deutschland — warm, verlässlich und nah
              an der Community.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink
              href={siteConfig.product.url}
              variant="turquoise"
              external
            >
              {siteConfig.product.name} entdecken
            </ButtonLink>
            <ButtonLink href="/ueber-uns" variant="secondary">
              Mehr über uns
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="text-sm font-medium text-brand">Unser erstes Produkt</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {siteConfig.product.name}
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            {siteConfig.product.tagline}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {productFeatures.map((feature) => (
            <article
              key={feature.label}
              className="rounded-[var(--radius-xl)] border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  aria-hidden
                  className={`h-2.5 w-2.5 rounded-full ${feature.color}`}
                />
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.label}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <ButtonLink href="/produkte" variant="brand">
            Produkt im Detail
          </ButtonLink>
        </div>
      </section>

      <section className="border-y border-border bg-background">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-10 max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Was uns antreibt
            </h2>
            <p className="text-lg text-muted">
              Merhaba bedeutet „Hallo“ — der Beginn jeder Verbindung.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-[var(--radius-lg)] border border-border bg-card p-6"
              >
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-8 max-w-2xl space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Die Gründer
            </h2>
            <p className="text-lg text-muted">
              Zwei Menschen mit türkischen Wurzeln in Deutschland — und der
              Überzeugung, dass Technologie Brücken bauen kann.
            </p>
          </div>
          <FounderPreview />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="rounded-[var(--radius-xl)] border border-border bg-card p-8 shadow-[var(--shadow-soft)] sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Fragen oder Feedback?
            </h2>
            <p className="text-muted">
              Wir freuen uns über Nachrichten von der Community, Partner:innen
              und allen, die MerhabaMap mitgestalten wollen.
            </p>
          </div>
          <div className="mt-6 shrink-0 lg:mt-0">
            <ButtonLink href="/kontakt" variant="brand">
              Kontakt aufnehmen
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
