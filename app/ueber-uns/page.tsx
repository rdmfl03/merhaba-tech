import type { Metadata } from "next";
import { FounderCard } from "@/components/founder-card";
import { ButtonLink } from "@/components/ui/button-link";
import { founders } from "@/lib/founders";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Über uns",
  description: `Erdem Oflu und Samet Akyazi — Gründer der ${siteConfig.name}.`,
};

export default function UeberUnsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="max-w-3xl space-y-6">
        <p className="text-sm font-medium text-brand">Über uns</p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Wir bauen digitale Brücken.
        </h1>
        <p className="text-lg leading-relaxed text-muted">
          {siteConfig.name} wurde von{" "}
          <strong className="font-medium text-foreground">
            {siteConfig.founders.map((f) => f.name).join(" und ")}
          </strong>{" "}
          gegründet. Aus Paderborn entwickeln wir Produkte, die Menschen mit
          türkischem Bezug in Deutschland sichtbar, auffindbar und vernetzt
          machen.
        </p>
      </div>

      <section className="mt-14">
        <div className="mb-10 max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Das Team
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            Zwei Gründer mit Wurzeln in der türkisch-deutschen Community und
            langjähriger Erfahrung aus der IT- und Automobilbranche.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {founders.map((founder) => (
            <FounderCard key={founder.id} founder={founder} />
          ))}
        </div>
      </section>

      <div className="mt-14 grid gap-4 lg:grid-cols-2">
        <article className="rounded-[var(--radius-xl)] border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Unsere Mission
          </h2>
          <p className="text-sm leading-relaxed text-muted">
            Wir schaffen digitale Räume, in denen die türkisch-deutsche
            Community lokal und relevant sichtbar ist — mit Respekt vor
            Authentizität, Transparenz und Vertrauen.
          </p>
        </article>

        <article className="rounded-[var(--radius-xl)] border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Unser erstes Produkt
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-muted">
            Mit {siteConfig.product.name} haben wir eine Plattform gebaut, auf
            der Orte, Events und Communities mit türkischem Bezug an einem Ort
            zusammenkommen.
          </p>
          <ButtonLink
            href={siteConfig.product.url}
            variant="turquoise"
            external
          >
            {siteConfig.product.name} besuchen
          </ButtonLink>
        </article>
      </div>

      <section className="mt-14 rounded-[var(--radius-xl)] border border-border bg-background p-8">
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          Was „Merhaba“ bedeutet
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted">
          Merhaba heißt „Hallo“ — der Beginn jeder Begegnung. Genau so verstehen
          wir unsere Arbeit: offen, einladend und nah an den Menschen, für die
          wir bauen.
        </p>
      </section>
    </main>
  );
}
