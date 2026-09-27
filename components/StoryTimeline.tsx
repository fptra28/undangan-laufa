'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const storyEntries = [
  {
    hash: 'a1b2c3d',
    date: '2028',
    title: 'The Beginning',
    subtitle: 'git init love-story',
    description:
      'Semua bermula dari pertemuan yang tak terduga. Seperti dua branch yang terpisah, akhirnya menemukan merge point yang sempurna.',
    icon: '🌱',
  },
  {
    hash: 'e4f5g6h',
    date: '2029',
    title: 'Getting to Know',
    subtitle: 'git add memories',
    description:
      'Seiring berjalannya waktu, kami saling mengenal lebih dalam. Setiap percakapan adalah commit baru dalam repository hati kami.',
    icon: '💬',
  },
  {
    hash: 'i7j8k9l',
    date: '2030',
    title: 'Growing Together',
    subtitle: 'git commit -m "Found someone special"',
    description:
      'Kebersamaan mengajarkan kami arti kesabaran, kepercayaan, dan cinta yang tumbuh perlahan namun pasti.',
    icon: '🌿',
  },
  {
    hash: 'm1n2o3p',
    date: '2031',
    title: 'The Proposal',
    subtitle: 'git merge --no-ff proposal',
    description:
      'Sebuah pertanyaan sederhana yang mengubah segalanya. Sebuah "Ya" yang menjadi commit paling berarti.',
    icon: '💍',
  },
  {
    hash: 'q4r5s6t',
    date: '30.10.2031',
    title: 'Deploying Forever',
    subtitle: 'git push origin forever',
    description:
      'Hari di mana kami memutuskan untuk melakukan deployment paling penting dalam hidup kami — selamanya bersama.',
    icon: '🚀',
  },
];

export default function StoryTimeline() {
  return (
    <section id="story" className="relative py-20 md:py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-mono tracking-[0.3em] text-dim uppercase mb-3">
            $ git log --our-story
          </p>
          <h2 className="font-serif text-3xl md:text-5xl gradient-text mb-4">
            Our Story
          </h2>
          <p className="text-sm text-muted max-w-md mx-auto">
            Sebuah perjalanan yang ditulis dalam commit-commit kecil, menuju deployment terbesar dalam hidup kami.
          </p>
          <div className="section-divider mt-6" />
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative mx-auto max-w-2xl">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />

          {storyEntries.map((entry, index) => (
            <AnimatedSection
              key={entry.hash}
              delay={index * 0.15}
              direction={index % 2 === 0 ? 'left' : 'right'}
              className="relative mb-8 pl-10 last:mb-0 sm:pl-12"
            >
              {/* Dot on timeline */}
              <motion.div
                className={`absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-1 w-4 h-4 rounded-full border-2 border-gold bg-background z-10`}
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
              />

              {/* Content card */}
              <div className="glass rounded-2xl p-5 text-center transition-colors duration-300 hover:border-border-gold sm:p-6">
                {/* Date badge */}
                <div className="mb-3 flex items-center justify-center gap-2">
                  <span className="text-lg">{entry.icon}</span>
                  <span className="text-xs font-mono text-gold tracking-wider">{entry.date}</span>
                </div>

                {/* Hash */}
                <p className="text-[10px] font-mono text-dim mb-1">
                  commit {entry.hash}
                </p>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-1">
                  {entry.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs font-mono text-gold/60 mb-3">
                  {entry.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
