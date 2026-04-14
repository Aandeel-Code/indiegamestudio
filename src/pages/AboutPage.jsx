export default function AboutPage() {
  return (
    <main className="page-section">
      <section className="section-heading section-heading-wide">
        <p className="eyebrow">About</p>
        <h1>A small studio focused on original games with a strong visual identity.</h1>
        <p>
          Use this page for team background, studio philosophy, milestone history,
          and links to press material or hiring details.
        </p>
      </section>

      <section className="info-grid">
        <article className="info-card">
          <h2>How we work</h2>
          <p>
            We build compact teams around each project, aiming for strong art
            direction, readable systems, and clear player-facing hooks.
          </p>
        </article>
        <article className="info-card">
          <h2>What we make</h2>
          <p>
            The slate spans action, horror, puzzle, and experimental hybrids, but
            every release is treated like a distinct world rather than a template.
          </p>
        </article>
        <article className="info-card">
          <h2>What belongs here</h2>
          <p>
            Founder bios, awards, platform links, publisher notes, and production
            credits all fit cleanly into this layout.
          </p>
        </article>
      </section>
    </main>
  )
}
