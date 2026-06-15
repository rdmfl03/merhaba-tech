import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Produkte",
  description: `${siteConfig.product.name} — ${siteConfig.product.tagline}`,
};

const features = [
  {
    title: "Karte & Entdecken",
    description:
      "Finde Orte mit türkischem Bezug in deiner Nähe — übersichtlich auf der Karte.",
    accent: "text-turquoise",
  },
  {
    title: "Orte",
    description:
      "Restaurants, Geschäfte und Locations — kuratiert und ohne Werbelärm.",
    accent: "text-brand",
  },
  {
    title: "Events",
    description:
      "Relevante Veranstaltungen für die Community in deiner Stadt.",
    accent: "text-merhaba-black",
  },
  {
    title: "Communities",
    description:
      "Gruppen und Netzwerke — vernetzt, auffindbar und nah an der Community.",
    accent: "text-community",
  },
] as const;

export default function ProduktePage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="max-w-3xl space-y-6">
        <p className="text-sm font-medium text-brand">Produkte</p>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full shadow-[var(--shadow-soft)] ring-1 ring-border">
            <Image
              src={siteConfig.product.logo}
              alt={`${siteConfig.product.name} Logo`}
              width={96}
              height={96}
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {siteConfig.product.name}
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              {siteConfig.product.tagline}
            </p>
          </div>
        </div>

        <p className="text-muted">
          Alles an einem Ort — für die türkisch-deutsche Community in
          Deutschland.
        </p>

        <ButtonLink
          href={siteConfig.product.url}
          variant="turquoise"
          external
        >
          Jetzt {siteConfig.product.name} öffnen
        </ButtonLink>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-[var(--radius-xl)] border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
          >
            <h2 className={`mb-2 text-lg font-semibold ${feature.accent}`}>
              {feature.title}
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              {feature.description}
            </p>
          </article>
        ))}
      </div>

      <section className="mt-14 rounded-[var(--radius-xl)] border border-border bg-brand-soft p-8">
        <h2 className="mb-3 text-xl font-semibold text-foreground">
          Vertrauen & Transparenz
        </h2>
        <ul className="space-y-3 text-sm leading-relaxed text-muted">
          <li>
            Öffentliche Orte und Events erscheinen erst nach Prüfung — kein
            unübersichtlicher Feed.
          </li>
          <li>
            Inhaber:innen können ihr Profil beanspruchen — klar erkennbar und
            ohne heimliche Werbung.
          </li>
          <li>
            Etwas passt nicht? Meldungen werden geprüft und bearbeitet.
          </li>
        </ul>
      </section>
    </main>
  );
}
