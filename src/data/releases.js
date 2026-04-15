import releaseCoverOne from '../assets/ar57i3.png'
import releaseCoverTwo from '../assets/ar57i4.png'
import releaseCoverThree from '../assets/ar57i5.png'
import heroBackdrop from '../assets/ar57i3.png'
import releaseCoverFour from '../assets/image01.png'
import heroLogo from '../assets/e23781d7_original.png'

export const releases = [
  {
    slug: 'starline-echo',
    title: 'Starline Echo',
    tag: 'Action RPG',
    description: 'A neon frontier expedition across shifting asteroid cities.',
    image: releaseCoverOne,
    accent: 'Frontier Systems',
    year: '2026',
    body:
      'Chart unstable trade routes, recruit a modular crew, and fight for control of a living constellation that rewrites itself between jumps.',
  },
  {
    slug: 'cinder-circuit',
    title: 'Cinder Circuit',
    tag: 'Arcade Racer',
    description: 'Tight corners, rust-red skies, and high-speed elimination runs.',
    image: releaseCoverTwo,
    accent: 'Burnout League',
    year: '2026',
    body:
      'Built around heavy drift handling and aggressive rival AI, Cinder Circuit pushes every event toward a last-lap collapse.',
  },
  {
    slug: 'hollow-signal',
    title: 'Hollow Signal',
    tag: 'Narrative Horror',
    description: 'Investigate a broadcast tower where every transmission fights back.',
    image: releaseCoverThree,
    accent: 'Signal Archive',
    year: '2025',
    body:
      'Follow unstable radio logs, decode spatial anomalies, and decide which voices deserve to be heard before the tower rewrites your route out.',
  },
  {
    slug: 'bloom-static',
    title: 'Bloom Static',
    tag: 'Puzzle Adventure',
    description: 'Restore a drowned biome through light, timing, and old machinery.',
    image: releaseCoverFour,
    accent: 'Biotech Restoration',
    year: '2025',
    body:
      'Reconnect flooded systems, coax dormant ecosystems back online, and uncover the failed experiment that buried the valley under glasswater.',
  },
]

export const heroRelease = {
  backgroundImage: heroBackdrop,
  floatingImage: heroLogo,
}
