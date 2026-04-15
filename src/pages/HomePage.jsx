import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { heroRelease, releases } from '../data/releases'

export default function HomePage() {
  const heroRef = useRef(null)
  const heroBackgroundRef = useRef(null)

  useEffect(() => {
    const heroElement = heroRef.current
    const backgroundElement = heroBackgroundRef.current

    if (!heroElement || !backgroundElement) {
      return undefined
    }

    let frameId = 0

    const updateParallax = () => {
      frameId = 0

      const rect = heroElement.getBoundingClientRect()
      const viewportHeight = window.innerHeight || 0

      if (rect.bottom <= 0 || rect.top >= viewportHeight) {
        return
      }

      const offset = (rect.top - viewportHeight * 0.5) * -0.28
      backgroundElement.style.setProperty('--hero-parallax-y', `${offset}px`)
    }

    const requestUpdate = () => {
      if (frameId) {
        return
      }

      frameId = window.requestAnimationFrame(updateParallax)
    }

    requestUpdate()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  return (
    <main>
      <section className="hero-section" id="hero" ref={heroRef}>
        <div className="hero-background" aria-hidden="true" ref={heroBackgroundRef}>
          <img src={heroRelease.backgroundImage} alt="" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Short Studio Slug Maybe</p>
          <h1>Voidloop:<br/>Out Now!</h1>
          <p className="hero-text">
            Hero Info Section Stuffs
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href="https://store.steampowered.com/app/3803180/Voidloop/"
              target="_blank"
              rel="noreferrer"
            >
              Play Voidloop
            </a>
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
