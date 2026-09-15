import { content, contactHref, reservationHref } from '../content'
import { assetUrl } from '../lib/asset'

export default function Hero() {
  const bg = content.gallery[1]

  return (
    <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden">
      <img
        src={assetUrl(bg.src)}
        alt={bg.alt}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/10" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6 sm:pb-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sun">
          Camins al Grau · Valencia
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight text-cream sm:text-6xl">
          {content.name}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-cream/90">{content.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={reservationHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-flag-red px-6 py-3 text-sm font-semibold text-cream shadow-lg shadow-flag-red/30 transition hover:bg-flag-red/85"
          >
            Reservar mesa
          </a>
          <a
            href={contactHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/70 px-6 py-3 text-sm font-semibold text-cream transition hover:bg-cream hover:text-ink"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  )
}
