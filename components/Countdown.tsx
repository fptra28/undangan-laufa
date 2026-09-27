'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

interface TimeUnit {
  value: number;
  label: string;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([]);
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const weddingDate = new Date('2031-10-30T00:00:00+07:00').getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference <= 0) {
        setIsPast(true);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft([
        { value: days, label: 'Days' },
        { value: hours, label: 'Hours' },
        { value: minutes, label: 'Minutes' },
        { value: seconds, label: 'Seconds' },
      ]);
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="relative py-20 md:py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />

      {/* Gradient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold/5 blur-[150px]" />

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
        <AnimatedSection>
          <p className="text-xs font-mono tracking-[0.3em] text-dim uppercase mb-3">
            {'// counting down'}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl gradient-text mb-4">
            {isPast ? 'Deployment Successful' : 'Countdown'}
          </h2>
          <div className="section-divider mt-4 mb-10" />
        </AnimatedSection>

        {isPast ? (
          <AnimatedSection delay={0.2}>
            <div className="glass-gold rounded-2xl p-8 md:p-12 max-w-lg mx-auto">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                Deployment Successful
              </h3>
              <p className="font-mono text-sm text-gold tracking-wider mb-4">
                30 . 10 . 2031
              </p>
              <p className="text-muted text-sm italic">
                The beginning of forever.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#28c840]/10 border border-[#28c840]/30">
                <span className="text-[#28c840] font-mono text-xs">● Status: LIVE</span>
              </div>
            </div>
          </AnimatedSection>
        ) : (
          <AnimatedSection delay={0.2}>
            <div className="mx-auto grid max-w-xl grid-cols-4 gap-2 sm:gap-3 md:gap-5">
              {timeLeft.map((unit, index) => (
                <motion.div
                  key={unit.label}
                  className="glass-gold rounded-xl p-3 md:p-6 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="font-mono text-2xl sm:text-3xl md:text-5xl text-gold font-bold tracking-tighter">
                    {String(unit.value).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] md:text-xs font-mono text-dim tracking-wider uppercase mt-1 md:mt-2">
                    {unit.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="mt-8 text-xs font-mono text-dim"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              await wedding(&#39;30-10-2031&#39;);
            </motion.p>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
