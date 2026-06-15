import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum der ${siteConfig.name}.`,
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="mb-8 text-4xl font-semibold tracking-tight text-foreground">
        Impressum
      </h1>

      <div className="space-y-8 text-sm leading-relaxed text-muted">
        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">
            Angaben gemäß § 5 TMG
          </h2>
          <p>
            {siteConfig.name}
            <br />
            [Straße und Hausnummer]
            <br />
            [PLZ Ort]
            <br />
            Deutschland
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">
            Vertreten durch
          </h2>
          <p>{siteConfig.founders.map((f) => f.name).join(", ")} (Geschäftsführung)</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-brand hover:text-brand-hover"
            >
              {siteConfig.email}
            </a>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">
            Registereintrag
          </h2>
          <p>
            Eintragung im Handelsregister.
            <br />
            Registergericht: [Amtsgericht]
            <br />
            Registernummer: [HRB-Nummer]
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">
            Umsatzsteuer-ID
          </h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            [USt-IdNr.]
          </p>
        </section>

        <p className="rounded-[var(--radius-md)] border border-border bg-background p-4 text-xs">
          Hinweis: Bitte ergänzt die Platzhalter in eurem Impressum mit den
          vollständigen GmbH-Angaben, bevor die Website öffentlich live geht.
        </p>
      </div>
    </main>
  );
}
