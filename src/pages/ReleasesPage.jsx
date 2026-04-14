import { Link } from 'react-router-dom'
import { releases } from '../data/releases'

export default function ReleasesPage() {
  return (
    <main className="page-section">
      <section className="section-heading section-heading-wide">
        <p className="eyebrow">Releases Archive</p>
        <h1>Current and upcoming projects from the studio.</h1>
        <p>
          This page acts as the root for the releases folder, with each title
          linking into its own detail page under `/releases/:slug`.
        </p>
      </section>

      <section className="release-grid">
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
      </section>
    </main>
  )
}
