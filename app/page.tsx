'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import OpeningScreen from '../components/OpeningScreen';
import Hero from '../components/Hero';
import Couple from '../components/Couple';
import StoryTimeline from '../components/StoryTimeline';
import ProgrammingStory from '../components/ProgrammingStory';
import Event from '../components/Event';
import Countdown from '../components/Countdown';
import Gallery from '../components/Gallery';
import RSVP from '../components/RSVP';
import ScrollProgress from '../components/ScrollProgress';
import { DigitalGift, FinalCommit, Guestbook, MusicPlayer, Navigation } from '../components/InvitationExtras';

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [guestName, setGuestName] = useState('You');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const rawName = params.get('to') ?? params.get('wto');
    if (rawName?.trim()) window.setTimeout(() => setGuestName(rawName.trim().slice(0, 100)), 0);
    console.info('%cHey developer 👋\nYou found the source of our love story.\n30.10.2031', 'color:#CDA13A;font-size:14px');
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', !opened);
    return () => document.body.classList.remove('no-scroll');
  }, [opened]);

  return (
    <main className="invitation-page min-h-screen overflow-x-clip bg-background text-foreground selection:bg-gold/30">
      <AnimatePresence>
        {!opened && <OpeningScreen guestName={guestName} onOpen={() => setOpened(true)} />}
      </AnimatePresence>
      <ScrollProgress />
      <Navigation />
      <div className="invitation-content relative z-[1]">
        <Hero />
        <Couple />
        <StoryTimeline />
        <ProgrammingStory />
        <Event />
        <Countdown />
        <Gallery />
        <RSVP />
        <Guestbook />
        <DigitalGift />
        <FinalCommit />
      </div>
      <MusicPlayer />
    </main>
  );
}
