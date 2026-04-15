import { useState } from 'react'
import { voidloop } from '../data/voidloop'

export default function VoidloopPage() {
  const allScreenshots = [
    ...voidloop.featuredScreenshots,
    ...voidloop.galleryScreenshots,
  ]
  const [activeScreenshot, setActiveScreenshot] = useState(null)

  const showPreviousScreenshot = () => {
    if (!activeScreenshot) {
      return
    }

    const nextIndex =
      (activeScreenshot.index - 1 + allScreenshots.length) % allScreenshots.length

    setActiveScreenshot({ image: allScreenshots[nextIndex], index: nextIndex })
  }

  const showNextScreenshot = () => {
    if (!activeScreenshot) {
      return
    }

    const nextIndex = (activeScreenshot.index + 1) % allScreenshots.length
    setActiveScreenshot({ image: allScreenshots[nextIndex], index: nextIndex })
  }

  return (
    <>
      <main className="page-section game-page">
        <section className="game-hero">
          <img src={voidloop.heroImage} alt={voidloop.title} />
          <div className="game-hero-overlay">
            <p className="release-tag">{voidloop.releaseLabel}</p>
            <h1>{voidloop.title}</h1>
            <p>{voidloop.description}</p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={voidloop.links.steam}
                target="_blank"
                rel="noreferrer"
              >
                View on Steam
              </a>
              <a
                className="button button-secondary"
                href={voidloop.links.pressKit}
                target="_blank"
                rel="noreferrer"
              >
                Open press kit
              </a>
            </div>
          </div>
        </section>

        <section className="section-heading section-heading-wide">
          <p className="eyebrow">Overview</p>
          <h2>{voidloop.tagline}</h2>
          <p>
            Released on {voidloop.releaseDate}, Voidloop is Indie Game Studio&apos;s
            debut game, built around risky descents, camp-based progression, and a
            steady push back toward home.
          </p>
        </section>

        <section className="info-grid facts-grid">
          {voidloop.facts.map((fact) => (
            <article className="info-card" key={fact.label}>
              <p className="release-tag">{fact.label}</p>
              <h3>{fact.value}</h3>
            </article>
          ))}
        </section>

        <section className="section-heading section-heading-wide">
          <p className="eyebrow">Features</p>
          <h2>Designed around repeat runs, stronger loadouts, and deeper cave pressure.</h2>
        </section>

        <section className="info-grid">
          {voidloop.features.map((feature) => (
            <article className="info-card" key={feature}>
              <p>{feature}</p>
            </article>
          ))}
        </section>

        <section className="section-heading section-heading-wide">
          <p className="eyebrow">Gallery</p>
          <h2>Current visuals from camp, caves, and progression systems.</h2>
        </section>

        <section className="release-grid">
          {voidloop.featuredScreenshots.map((image, index) => (
            <button
              className="release-card static-card screenshot-card"
              key={image}
              onClick={() => setActiveScreenshot({ image, index })}
              type="button"
            >
              <img src={image} alt={`${voidloop.title} screenshot ${index + 1}`} />
            </button>
          ))}
        </section>

        <section className="mini-gallery-grid">
          {voidloop.galleryScreenshots.map((image, index) => (
            <button
              className="mini-gallery-card"
              key={image}
              onClick={() =>
                setActiveScreenshot({
                  image,
                  index: voidloop.featuredScreenshots.length + index,
                })
              }
              type="button"
            >
              <img
                src={image}
                alt={`${voidloop.title} gallery screenshot ${index + 4}`}
              />
            </button>
          ))}
        </section>

        <section className="presskit-section">
          <div className="section-heading section-heading-wide">
            <p className="eyebrow">Press Kit</p>
            <h2>Download materials, & request keys</h2>
          </div>

          <div className="info-grid">
            <article className="info-card">
              <h3>Download Press kit</h3>
              <p>
                Access the live press kit for logos, screenshots, videos and the trailer.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href={voidloop.links.pressKit}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open press kit
                </a>
              </div>
            </article>
            <article className="info-card">
              <h3>Steam key requests</h3>
              <p>
                Request coverage access for Voidloop.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-secondary"
                  href={voidloop.links.reqKey}
                  target="_blank"
                  rel="noreferrer"
                >
                  Request Key
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="section-heading section-heading-wide">
          <p className="eyebrow">Credits</p>
          <h2>The current team behind Voidloop.</h2>
        </section>

        <section className="info-grid">
          {voidloop.credits.map((credit) => (
            <article className="info-card" key={credit.role}>
              <p className="release-tag">{credit.role}</p>
              <h3>{credit.name}</h3>
            </article>
          ))}
        </section>

        <section className="section-heading section-heading-wide">
          <p className="eyebrow">About This Game</p>
          <h2>Built during Jasper Levin&apos;s self-employed placement year and expanded with a small collaborator team.</h2>
          <p>{voidloop.about}</p>
        </section>
      </main>

      {activeScreenshot ? (
        <div
          aria-modal="true"
          className="lightbox"
          onClick={() => setActiveScreenshot(null)}
          role="dialog"
          >
          <button
            aria-label="Previous screenshot"
            className="lightbox-nav lightbox-nav-prev"
            onClick={(event) => {
              event.stopPropagation()
              showPreviousScreenshot()
            }}
            type="button"
          >
            ‹
          </button>
          <button
            aria-label="Close screenshot"
            className="lightbox-close"
            onClick={() => setActiveScreenshot(null)}
            type="button"
          >
            ×
          </button>
          <div
            className="lightbox-panel"
            onClick={(event) => event.stopPropagation()}
            role="document"
          >
            <img
              src={activeScreenshot.image}
              alt={`${voidloop.title} screenshot ${activeScreenshot.index + 1}`}
            />
          </div>
          <button
            aria-label="Next screenshot"
            className="lightbox-nav lightbox-nav-next"
            onClick={(event) => {
              event.stopPropagation()
              showNextScreenshot()
            }}
            type="button"
          >
            ›
          </button>
        </div>
      ) : null}
    </>
  )
}
