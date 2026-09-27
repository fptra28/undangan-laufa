'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import CodeBlock from './CodeBlock';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Gradient orbs */}
      <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full bg-gold/5 blur-[120px]" />
      <div className="absolute bottom-20 left-1/3 w-56 h-56 rounded-full bg-gold/3 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        {/* Top decorator */}
        <AnimatedSection delay={0.2}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/50" />
            <span className="text-[10px] font-mono tracking-[0.4em] text-dim uppercase">
              The Wedding Of
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </AnimatedSection>

        {/* Names */}
        <AnimatedSection delay={0.4}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-medium leading-tight">
            <span className="gradient-text">Muhammad Faturrahman Putra</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="my-4 md:my-6 flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/40" />
            <span className="text-gold text-2xl md:text-3xl font-serif italic">&amp;</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/40" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.8}>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-medium leading-tight">
            <span className="gradient-text">Laura Shakira Aisyah Putri</span>
          </h1>
        </AnimatedSection>

        {/* Date */}
        <AnimatedSection delay={1.0}>
          <div className="mt-8 md:mt-10">
            <p className="font-mono text-sm md:text-base text-muted tracking-[0.3em]">
              30 . 10 . 2031
            </p>
          </div>
        </AnimatedSection>

        {/* Tagline */}
        <AnimatedSection delay={1.2}>
          <p className="mt-6 text-sm md:text-base text-muted/80 italic font-serif max-w-md mx-auto">
            &ldquo;Di antara ribuan baris kode, kami menemukan satu cerita yang ingin kami jalankan selamanya.&rdquo;
          </p>
        </AnimatedSection>

        {/* Decorative code block */}
        <AnimatedSection delay={1.4} className="mx-auto mt-10 w-full max-w-md md:mt-14">
          <CodeBlock title="love.ts" language="typescript">
            <div className="text-left">
              <p>
                <span className="text-[#c678dd]">const</span>{' '}
                <span className="text-gold-light">love</span>{' '}
                <span className="text-muted">=</span>{' '}
                <span className="text-muted">{'{'}</span>
              </p>
              <p className="ml-4">
                <span className="text-[#e06c75]">groom</span>
                <span className="text-muted">:</span>{' '}
                <span className="text-[#98c379]">&quot;Faturrahman&quot;</span>
                <span className="text-muted">,</span>
              </p>
              <p className="ml-4">
                <span className="text-[#e06c75]">bride</span>
                <span className="text-muted">:</span>{' '}
                <span className="text-[#98c379]">&quot;Laura Shakira&quot;</span>
                <span className="text-muted">,</span>
              </p>
              <p className="ml-4">
                <span className="text-[#e06c75]">date</span>
                <span className="text-muted">:</span>{' '}
                <span className="text-[#98c379]">&quot;2031-10-30&quot;</span>
                <span className="text-muted">,</span>
              </p>
              <p className="ml-4">
                <span className="text-[#e06c75]">status</span>
                <span className="text-muted">:</span>{' '}
                <span className="text-[#98c379]">&quot;forever&quot;</span>
              </p>
              <p>
                <span className="text-muted">{'}'}</span>
                <span className="text-muted">;</span>
                <span className="cursor-blink text-gold ml-1">▌</span>
              </p>
            </div>
          </CodeBlock>
        </AnimatedSection>

        {/* Scroll indicator */}
        <AnimatedSection delay={1.6} className="mt-12 md:mt-14">
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-[10px] font-mono text-dim tracking-wider">scroll down</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-gold/40">
              <path d="M8 4V20M8 20L2 14M8 20L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
