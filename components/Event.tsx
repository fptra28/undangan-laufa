'use client';

import { Calendar, MapPin, Clock } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Event() {
  return (
    <section id="event" className="relative py-20 md:py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-mono tracking-[0.3em] text-dim uppercase mb-3">
            {'// save the date'}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl gradient-text mb-4">
            Wedding Event
          </h2>
          <p className="text-sm text-muted max-w-md mx-auto">
            Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara pernikahan kami.
          </p>
          <div className="section-divider mt-6" />
        </AnimatedSection>

        {/* Date banner */}
        <AnimatedSection delay={0.1} className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-gold">
            <Calendar className="w-4 h-4 text-gold" />
            <span className="font-mono text-sm text-gold tracking-wider">
              Kamis, 30 Oktober 2031
            </span>
          </div>
        </AnimatedSection>

        {/* Events grid */}
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2 md:gap-7">
          {/* Akad Nikah */}
          <AnimatedSection delay={0.2} direction="left">
            <div className="glass-gold rounded-2xl p-6 md:p-8 h-full flex flex-col group hover:shadow-[0_0_40px_rgba(205,161,58,0.1)] transition-shadow duration-500">
              <div className="text-center flex-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-border-gold flex items-center justify-center mx-auto mb-5">
                  <span className="text-2xl">💒</span>
                </div>

                <p className="text-xs font-mono text-dim tracking-wider uppercase mb-2">
                  Event.akadNikah()
                </p>

                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                  Akad Nikah
                </h3>

                <div className="w-8 h-px bg-gold/30 mx-auto mb-5" />

                <div className="space-y-3 text-sm text-muted">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gold/60" />
                    <span className="text-gold-light font-mono">[WAKTU AKAD]</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gold/60" />
                    <span className="text-gold-light font-mono">[LOKASI AKAD]</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-3 mt-6 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono text-gold border border-border-gold hover:bg-gold/10 transition-colors"
                  aria-label="Buka lokasi akad di Google Maps"
                >
                  <MapPin className="w-3 h-3" />
                  Google Maps
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Resepsi */}
          <AnimatedSection delay={0.4} direction="right">
            <div className="glass-gold rounded-2xl p-6 md:p-8 h-full flex flex-col group hover:shadow-[0_0_40px_rgba(205,161,58,0.1)] transition-shadow duration-500">
              <div className="text-center flex-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-border-gold flex items-center justify-center mx-auto mb-5">
                  <span className="text-2xl">🎉</span>
                </div>

                <p className="text-xs font-mono text-dim tracking-wider uppercase mb-2">
                  Event.resepsi()
                </p>

                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                  Resepsi
                </h3>

                <div className="w-8 h-px bg-gold/30 mx-auto mb-5" />

                <div className="space-y-3 text-sm text-muted">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gold/60" />
                    <span className="text-gold-light font-mono">[WAKTU RESEPSI]</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gold/60" />
                    <span className="text-gold-light font-mono">[LOKASI RESEPSI]</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-3 mt-6 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono text-gold border border-border-gold hover:bg-gold/10 transition-colors"
                  aria-label="Buka lokasi resepsi di Google Maps"
                >
                  <MapPin className="w-3 h-3" />
                  Google Maps
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Add to Calendar */}
        <AnimatedSection delay={0.5} className="text-center mt-10">
          <a
            href="https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Faturrahman+%26+Laura&dates=20311030T000000Z%2F20311031T000000Z&details=Undangan+Pernikahan+Muhammad+Faturrahman+Putra+%26+Laura+Shakira+Aisyah+Putri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-gold text-sm font-mono text-gold hover:bg-gold/10 transition-colors"
            aria-label="Tambahkan ke Google Calendar"
          >
            <Calendar className="w-4 h-4" />
            Add to Calendar
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
