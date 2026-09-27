'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const photos = [
  { id: 1, tab: 'story_01.jpg', alt: 'Foto kenangan 1' },
  { id: 2, tab: 'story_02.jpg', alt: 'Foto kenangan 2' },
  { id: 3, tab: 'story_03.jpg', alt: 'Foto kenangan 3' },
  { id: 4, tab: 'story_04.jpg', alt: 'Foto kenangan 4' },
  { id: 5, tab: 'story_05.jpg', alt: 'Foto kenangan 5' },
  { id: 6, tab: 'story_06.jpg', alt: 'Foto kenangan 6' },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setSelectedPhoto(index);
    document.body.classList.add('no-scroll');
  }, []);

  const closeLightbox = useCallback(() => {
    setSelectedPhoto(null);
    document.body.classList.remove('no-scroll');
  }, []);

  const navigate = useCallback((direction: 'prev' | 'next') => {
    setSelectedPhoto((current) => {
      if (current === null) return null;
      if (direction === 'prev') return current === 0 ? photos.length - 1 : current - 1;
      return current === photos.length - 1 ? 0 : current + 1;
    });
  }, []);

  return (
    <section id="gallery" className="relative py-20 md:py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Section header */}
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs font-mono tracking-[0.3em] text-dim uppercase mb-3">
            {'// gallery'}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl gradient-text mb-4">
            Our Moments
          </h2>
          <p className="text-sm text-muted max-w-md mx-auto">
            Setiap foto adalah snapshot dari kenangan yang tak tergantikan.
          </p>
          <div className="section-divider mt-6" />
        </AnimatedSection>

        {/* Tab bar */}
        <AnimatedSection delay={0.1} className="mb-8">
          <div className="flex overflow-x-auto gap-0 border border-border rounded-lg max-w-fit mx-auto">
            {photos.map((photo, index) => (
              <button
                key={photo.id}
                onClick={() => openLightbox(index)}
                className={`px-3 py-1.5 text-[10px] font-mono whitespace-nowrap cursor-pointer transition-colors
                  ${index === 0 ? 'bg-surface-alt text-gold' : 'text-dim hover:text-muted hover:bg-surface-alt/50'}
                  ${index < photos.length - 1 ? 'border-r border-border' : ''}
                `}
                aria-label={`Lihat ${photo.tab}`}
              >
                {photo.tab}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Photo grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {photos.map((photo, index) => (
            <AnimatedSection key={photo.id} delay={index * 0.1}>
              <motion.button
                onClick={() => openLightbox(index)}
                className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-border group cursor-pointer bg-surface-alt"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={photo.alt}
              >
                {/* Placeholder content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                  <div className="w-12 h-12 rounded-full border border-border-gold flex items-center justify-center">
                    <span className="text-xl text-gold/40">📷</span>
                  </div>
                  <span className="text-[10px] font-mono text-dim">{photo.tab}</span>
                  <span className="text-[9px] font-mono text-dim/50">
                    commit #{String(photo.id).padStart(3, '0')}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-mono text-gold">View →</span>
                </div>
              </motion.button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-background/95 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-foreground transition-colors cursor-pointer z-10"
              aria-label="Tutup lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
              className="absolute left-4 w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-foreground transition-colors cursor-pointer z-10"
              aria-label="Foto sebelumnya"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate('next'); }}
              className="absolute right-4 w-10 h-10 rounded-full glass flex items-center justify-center text-muted hover:text-foreground transition-colors cursor-pointer z-10"
              aria-label="Foto selanjutnya"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Photo display */}
            <motion.div
              className="relative w-[90vw] h-[70vh] max-w-3xl flex items-center justify-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-full rounded-2xl border border-border bg-surface-alt flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full border border-border-gold flex items-center justify-center">
                  <span className="text-3xl text-gold/40">📷</span>
                </div>
                <span className="font-mono text-sm text-dim">
                  {photos[selectedPhoto].tab}
                </span>
                <span className="text-xs font-mono text-dim/50">
                  Ganti dengan foto asli
                </span>
              </div>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <span className="font-mono text-xs text-dim">
                {selectedPhoto + 1} / {photos.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
