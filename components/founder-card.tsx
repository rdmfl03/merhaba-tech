import Image from "next/image";
import Link from "next/link";
import { founders, type Founder } from "@/lib/founders";

const FOUNDER_PHOTO_SIZE = 192;

function LinkedInIcon() {
  return (
    <svg
      aria-hidden
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FounderPhoto({
  founder,
  size,
  className,
}: {
  founder: Founder;
  size: number;
  className?: string;
}) {
  return (
    <Image
      src={founder.image}
      alt={`Profilfoto von ${founder.name}`}
      width={size}
      height={size}
      quality={95}
      className={className}
      sizes={`${size}px`}
    />
  );
}

export function FounderCard({ founder }: { founder: Founder }) {
  return (
    <article className="rounded-[var(--radius-xl)] border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div className="mx-auto shrink-0 sm:mx-0">
          <FounderPhoto
            founder={founder}
            size={FOUNDER_PHOTO_SIZE}
            className="h-[192px] w-[192px] rounded-full object-cover object-center ring-4 ring-brand-soft"
          />
        </div>

        <div className="flex flex-1 flex-col text-center sm:text-left">
          <div className="mb-4 space-y-1">
            <h3 className="text-xl font-semibold text-foreground">
              {founder.name}
            </h3>
            <p className="text-sm font-medium text-brand">{founder.role}</p>
          </div>

          <p className="mb-5 text-sm leading-relaxed text-muted">
            {founder.bio}
          </p>

          <ul className="mb-6 flex flex-wrap justify-center gap-2 sm:justify-start">
            {founder.highlights.map((item) => (
              <li
                key={item}
                className="rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground/80"
              >
                {item}
              </li>
            ))}
          </ul>

          <a
            href={founder.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-auto inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-border px-4 text-sm font-medium text-foreground transition-colors hover:bg-background sm:mx-0"
          >
            <LinkedInIcon />
            LinkedIn-Profil
          </a>
        </div>
      </div>
    </article>
  );
}

export function FounderPreview() {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
      <div className="flex -space-x-3">
        {founders.map((founder) => (
          <FounderPhoto
            key={founder.id}
            founder={founder}
            size={64}
            className="h-16 w-16 rounded-full border-2 border-card object-cover ring-2 ring-background"
          />
        ))}
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium text-foreground">
          {founders.map((f) => f.name).join(" & ")}
        </p>
        <p className="text-sm text-muted">
          Gründer aus Paderborn — IT, Qualität und Projektmanagement.
        </p>
        <Link
          href="/ueber-uns"
          className="inline-flex min-h-11 items-center text-sm font-medium text-brand transition-colors hover:text-brand-hover"
        >
          Team kennenlernen →
        </Link>
      </div>
    </div>
  );
}
