import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung der ${siteConfig.name}.`,
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="mb-8 text-4xl font-semibold tracking-tight text-foreground">
        Datenschutz
      </h1>

      <div className="space-y-8 text-sm leading-relaxed text-muted">
        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">
            1. Verantwortlicher
          </h2>
          <p>
            {siteConfig.name}
            <br />
            [Straße und Hausnummer]
            <br />
            [PLZ Ort]
            <br />
            E-Mail: {siteConfig.email}
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">
            2. Diese Website
          </h2>
          <p>
            Diese Unternehmenswebsite ({siteConfig.url}) stellt Informationen
            über {siteConfig.shortName} und {siteConfig.product.name} bereit.
            Beim Besuch können technisch notwendige Server-Logdaten (z. B.
            IP-Adresse, Zeitpunkt, aufgerufene Seite) verarbeitet werden.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">
            3. {siteConfig.product.name}
          </h2>
          <p>
            Für die Nutzung von {siteConfig.product.name} gelten separate
            Datenschutzhinweise auf{" "}
            <a
              href={siteConfig.product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-brand-hover"
            >
              {siteConfig.product.url}
            </a>
            .
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-foreground">
            4. Ihre Rechte
          </h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Widerspruch und
            Datenübertragbarkeit — im Rahmen der gesetzlichen Vorgaben. Wenden
            Sie sich dazu an {siteConfig.email}.
          </p>
        </section>

        <p className="rounded-[var(--radius-md)] border border-border bg-background p-4 text-xs">
          Hinweis: Dies ist eine vorläufige Datenschutzerklärung. Bitte lasst
          sie vor dem Go-live von einer Rechtsberatung prüfen und vervollständigen.
        </p>
      </div>
    </main>
  );
}
