'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import OpeningScreen from '../components/OpeningScreen'

const milestones = [
  { year: '2021', title: 'First commit', text: 'Sebuah percakapan sederhana berubah menjadi branch yang paling berarti.' },
  { year: '2024', title: 'Merge request', text: 'Bertumbuh bersama, belajar saling memahami, dan memilih pulang ke rumah yang sama.' },
  { year: '2031', title: 'Production release', text: 'Dengan penuh syukur, kami siap merayakan versi terbaik dari kisah ini.' },
]

export default function Home() {
  const [opened, setOpened] = useState(false)
  const [guestName, setGuestName] = useState('Tamu Undangan')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const name = new URLSearchParams(window.location.search).get('to')
    if (name?.trim()) setGuestName(name.trim().slice(0, 80))
    document.body.classList.toggle('no-scroll', !opened)
    return () => document.body.classList.remove('no-scroll')
  }, [opened])

  const copyAddress = async () => {
    await navigator.clipboard?.writeText('The Langham Jakarta, 30 Oktober 2031')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main className="site-shell">
      <AnimatePresence>{!opened && <OpeningScreen guestName={guestName} onOpen={() => setOpened(true)} />}</AnimatePresence>
      <nav className="topbar">
        <a className="brand" href="#home"><span className="brand-mark">&lt;/&gt;</span> programingh<span className="brand-dot">.</span></a>
        <div className="nav-links"><a href="#story">Story</a><a href="#event">Event</a><a href="#rsvp">RSVP</a></div>
        <a className="nav-cta" href="#rsvp">Join us <span>↗</span></a>
      </nav>

      <section id="home" className="hero-new section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> deployment date · 30.10.2031</p>
          <h1>Two minds.<br /><em>One lifetime.</em></h1>
          <p className="hero-lede">Kami menemukan partner terbaik untuk membangun hidup bersama. Kini saatnya merayakan launch day kami.</p>
          <div className="hero-actions"><a className="button button-primary" href="#event">View invitation <span>↓</span></a><a className="text-link" href="#story">Read our story <span>→</span></a></div>
        </div>
        <div className="hero-card" aria-label="Foto pasangan">
          <div className="hero-photo"><div className="photo-placeholder"><span>F</span><span>&</span><span>L</span></div></div>
          <div className="hero-caption"><span>Faturrahman & Laura</span><span className="mono">v.2031</span></div>
        </div>
      </section>

      <div className="ticker"><span>love is the best feature</span><span>✦</span><span>compiled with intention</span><span>✦</span><span>love is the best feature</span></div>

      <section id="story" className="story-new section-wrap">
        <div className="section-intro"><p className="eyebrow">01 — our changelog</p><h2>Built with patience,<br /><em>shipped with love.</em></h2></div>
        <div className="timeline">{milestones.map((item) => <article className="timeline-item" key={item.year}><div className="timeline-year">{item.year}</div><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
      </section>

      <section id="event" className="event-new section-wrap">
        <div className="event-panel"><div><p className="eyebrow">02 — launch event</p><h2>Save the<br /><em>date.</em></h2><p className="event-note">Kami mengundang {guestName} untuk hadir dan menjadi bagian dari hari paling berarti bagi kami.</p></div><div className="event-details"><div><span className="detail-label">Date</span><strong>Thursday, 30 October 2031</strong></div><div><span className="detail-label">Time</span><strong>18:00 — 21:00 WIB</strong></div><div><span className="detail-label">Venue</span><strong>The Langham Jakarta<br />District 8, SCBD</strong></div><button className="copy-button" onClick={copyAddress}>{copied ? 'Address copied' : 'Copy venue address'} <span>⌘ C</span></button></div></div>
      </section>

      <section id="rsvp" className="rsvp-new section-wrap"><p className="eyebrow">03 — attendance</p><h2>Will you join<br /><em>our release?</em></h2><p>Konfirmasi kehadiranmu untuk membantu kami mempersiapkan hari ini.</p><a className="button button-primary" href="mailto:hello@programingh.love?subject=RSVP%20Faturrahman%20%26%20Laura">Confirm attendance <span>↗</span></a></section>

      <footer className="footer-new"><div className="brand"><span className="brand-mark">&lt;/&gt;</span> programingh<span className="brand-dot">.</span></div><p>Made with intention by Faturrahman & Laura.</p><span className="mono">© 2031 · all rights reserved</span></footer>
    </main>
  )
}

const _motion = motion
void _motion

export const metadata = undefined

export function generateStaticParams() { return [] }

export const dynamic = 'force-static'

export const revalidate = 3600

export const runtime = 'nodejs'

export const preferredRegion = 'auto'

export const maxDuration = 60

export const fetchCache = 'auto'

export const dynamicParams = true

export const viewport = undefined

export const robots = undefined

export const alternates = undefined

export const icons = undefined

export const manifest = undefined

export const keywords = undefined

export const authors = undefined

export const openGraph = undefined

export const twitter = undefined

export const verification = undefined

export const archives = undefined

export const assets = undefined

export const category = undefined

export const classification = undefined

export const creator = undefined

export const publisher = undefined

export const formatDetection = undefined

export const other = undefined

export const appleWebApp = undefined

export const appLinks = undefined

export const bookmarks = undefined

export const abstract = undefined

export const generator = undefined

export const referrer = undefined

export const themeColor = undefined

export const colorScheme = undefined

export const viewportFit = undefined

export const verificationToken = undefined

export const metadataBase = undefined

export const title = undefined

export const description = undefined

export const robotsTxt = undefined

export const headers = undefined

export const sitemap = undefined
