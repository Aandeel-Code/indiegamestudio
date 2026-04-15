import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { heroRelease } from '../data/releases'

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
          <p className="eyebrow">Indie Game Studio</p>
          <h1>Voidloop</h1>
          <p className="hero-text">
            Voidloop: Dive into cursed caves, gather
            resources, upgrade your tools, and push deeper in Indie Game Studio's
            debut roguelite adventure.
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
            <Link className="button button-secondary" to="/voidloop">
              Explore Voidloop
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
    </main>
  )
}
