'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import OpeningScreen from '../components/OpeningScreen'

const chapters = [
  { number: '01', date: '2021', title: 'The first commit', text: 'Berawal dari percakapan sederhana, lalu tumbuh menjadi cerita yang ingin kami jalani bersama.' },
  { number: '02', date: '2024', title: 'A shared branch', text: 'Kami belajar bahwa rumah bukan hanya tempat, tetapi seseorang yang selalu ingin kita tuju.' },
  { number: '03', date: '2031', title: 'The release', text: 'Hari ini kami memilih satu sama lain, untuk setiap versi hidup yang akan datang.' },
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

  const copyVenue = async () => {
    await navigator.clipboard?.writeText('The Langham Jakarta, District 8 SCBD')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main className="invitation-app">
      <AnimatePresence>{!opened && <OpeningScreen guestName={guestName} onOpen={() => setOpened(true)} />}</AnimatePresence>

      <header className="site-header">
        <a className="wordmark" href="#top"><span>&lt;/&gt;</span> programingh</a>
        <nav aria-label="Navigasi undangan"><a href="#story">Story</a><a href="#event">Event</a><a href="#rsvp">RSVP</a></nav>
        <a className="header-button" href="#rsvp">Join us <span>↗</span></a>
      </header>

      <section id="top" className="hero-section page-section">
        <div className="hero-intro">
          <p className="kicker"><i /> digital wedding invitation · 30.10.2031</p>
          <h1>Two minds.<br /><em>One lifetime.</em></h1>
          <p className="hero-description">Kami mengundangmu untuk merayakan hari ketika dua perjalanan memilih arah yang sama.</p>
          <div className="hero-links"><a className="solid-button" href="#event">Open invitation <span>↓</span></a><a className="under-link" href="#story">Read our story <span>→</span></a></div>
        </div>
        <div className="portrait-card">
          <div className="portrait-frame"><div className="portrait-monogram"><span>F</span><b>&amp;</b><span>L</span></div><span className="portrait-label">Faturrahman<br />&amp; Laura</span></div>
          <div className="portrait-meta"><span>Jakarta, Indonesia</span><span>30 — 10 — 31</span></div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true"><span>love is the best feature</span><b>✦</b><span>compiled with intention</span><b>✦</b><span>love is the best feature</span></div>

      <section id="story" className="story-section page-section">
        <div className="section-heading"><p className="kicker">01 / our changelog</p><h2>Built with patience,<br /><em>shipped with love.</em></h2></div>
        <div className="chapter-list">{chapters.map((chapter) => <article className="chapter" key={chapter.number}><span className="chapter-number">{chapter.number}</span><span className="chapter-date">{chapter.date}</span><div><h3>{chapter.title}</h3><p>{chapter.text}</p></div></article>)}</div>
      </section>

      <section id="event" className="event-section page-section">
        <div className="event-card"><div className="event-title"><p className="kicker">02 / launch event</p><h2>Save the<br /><em>date.</em></h2><p>Untuk {guestName}, kami menantikan kehadiranmu di hari istimewa ini.</p></div><div className="event-info"><div><small>DATE</small><strong>Thursday, 30 October 2031</strong></div><div><small>TIME</small><strong>18:00 — 21:00 WIB</strong></div><div><small>VENUE</small><strong>The Langham Jakarta<br />District 8, SCBD</strong></div><button onClick={copyVenue}>{copied ? 'Address copied' : 'Copy venue address'} <span>⌘ C</span></button></div></div>
      </section>

      <section id="rsvp" className="rsvp-section page-section"><p className="kicker">03 / attendance</p><h2>Will you join<br /><em>our release?</em></h2><p>Konfirmasi kehadiranmu dan mari rayakan chapter baru ini bersama kami.</p><a className="solid-button" href="mailto:hello@programingh.love?subject=RSVP%20Faturrahman%20%26%20Laura">Confirm attendance <span>↗</span></a></section>

      <footer className="site-footer"><a className="wordmark" href="#top"><span>&lt;/&gt;</span> programingh</a><p>Made with intention by Faturrahman &amp; Laura.</p><small>© 2031 · all rights reserved</small></footer>
    </main>
  )
}

