import { Link } from 'react-router-dom'
import { heroRelease, releases } from '../data/releases'

export default function HomePage() {
  return (
    <main>
      <section className="hero-section" id="hero">
        <div className="hero-background" aria-hidden="true">
          <img src={heroRelease.backgroundImage} alt="" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Independent worlds, built with intent</p>
          <h1>Voidloop:<br/>Out Now!</h1>
          <p className="hero-text">
            This base gives you a responsive hero, dedicated pages for the studio,
            and a releases section that routes players into separate game pages.
          </p>

          <div className="hero-actions">
            <Link className="button button-primary" to="/releases">
              Play Voidloop
            </Link>
            <Link className="button button-secondary" to="/about">
              Press Kit
            </Link>
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-float">
            <img
              src={heroRelease.floatingImage}
              alt="Featured game artwork floating over the hero background"
            />
          </div>
        </div>
      </section>

      <section className="releases-section" id="releases">
        <div className="section-heading">
          <p className="eyebrow">Releases</p>
          <h2>Thumbnail cards ready to link into individual game pages.</h2>
          <p>
            Each card uses an image overlay so the title stays readable while
            still showcasing the artwork.
          </p>
        </div>

        <div className="release-grid">
          {releases.map((release) => (
            <Link
              className="release-card"
              key={release.slug}
              to={`/releases/${release.slug}`}
            >
              <img src={release.image} alt={release.title} />
              <div className="release-overlay">
                <p className="release-tag">{release.tag}</p>
                <h3>{release.title}</h3>
                <p>{release.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
