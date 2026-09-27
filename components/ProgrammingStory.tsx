'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { TerminalBlock } from './CodeBlock';

export default function ProgrammingStory() {
  return (
    <section id="code-love" className="relative py-20 md:py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-mono tracking-[0.3em] text-dim uppercase mb-3">
            {'// love metaphors'}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl gradient-text mb-4">
            Love in Code
          </h2>
          <p className="text-sm text-muted max-w-md mx-auto">
            Ketika cinta ditulis dalam bahasa yang kami pahami.
          </p>
          <div className="section-divider mt-6" />
        </AnimatedSection>

        <div className="mx-auto max-w-3xl space-y-6 md:space-y-8">
          {/* Pull Request */}
          <AnimatedSection delay={0.1}>
            <div className="glass-gold rounded-2xl p-6 md:p-8 overflow-hidden">
              <div className="mb-5 flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:text-left">
                <div className="w-8 h-8 rounded-full bg-[#28c840]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 14V12C10 10.8954 10.8954 10 12 10H14M6 2V4C6 5.10457 5.10457 6 4 6H2M10 2L14 6V14H10M2 10V2H6L10 6" stroke="#28c840" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-foreground">
                    Pull Request <span className="text-gold font-mono text-lg">#2031</span>
                  </h3>
                  <p className="text-xs font-mono text-muted mt-1">
                    Muhammad requested to merge his life with Laura
                  </p>
                </div>
              </div>

              <div className="mx-auto flex w-fit flex-col items-start gap-2 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-[#28c840] text-sm">✓</span>
                  <span className="text-sm text-muted">Reviewed by families</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#28c840] text-sm">✓</span>
                  <span className="text-sm text-muted">Approved with love</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#28c840] text-sm">✓</span>
                  <span className="text-sm text-muted">All tests passed</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#28c840] text-sm">✓</span>
                  <span className="text-sm text-muted">Ready to merge</span>
                </div>
              </div>

              <motion.div
                className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-lg border border-[#28c840]/30 bg-[#28c840]/10 px-4 py-2"
                whileInView={{ scale: [0.9, 1] }}
                viewport={{ once: true }}
              >
                <span className="text-[#28c840] font-mono text-sm font-medium">● Merged</span>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Merge — No Conflict */}
          <AnimatedSection delay={0.2}>
            <div className="glass rounded-2xl p-6 md:p-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-border-gold mb-4">
                <span className="text-gold text-xs font-mono">merge successful</span>
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                No Merge Conflicts Found
              </h3>
              <p className="text-sm text-muted max-w-sm mx-auto">
                Dua perjalanan yang berbeda. Satu tujuan yang sama.
              </p>
              <p className="text-sm text-muted max-w-sm mx-auto mt-1 italic">
                Two different journeys. One destination.
              </p>
            </div>
          </AnimatedSection>

          {/* Production Deployment */}
          <AnimatedSection delay={0.3}>
            <TerminalBlock title="deployment" className="text-left">
              <div className="space-y-2">
                <p>
                  <span className="text-gold">$</span>{' '}
                  <span className="text-foreground">deploy love-story --env production</span>
                </p>
                <p className="text-dim mt-3">Building relationship...</p>
                <DeploymentProgress />
                <p className="text-dim mt-2">Running tests...</p>
                <div className="space-y-1 mt-1">
                  <p><span className="text-[#28c840]">  ✓</span> <span className="text-muted">Love</span></p>
                  <p><span className="text-[#28c840]">  ✓</span> <span className="text-muted">Trust</span></p>
                  <p><span className="text-[#28c840]">  ✓</span> <span className="text-muted">Patience</span></p>
                  <p><span className="text-[#28c840]">  ✓</span> <span className="text-muted">Commitment</span></p>
                  <p><span className="text-[#28c840]">  ✓</span> <span className="text-muted">Communication</span></p>
                </div>
                <div className="mt-4 pt-3 border-t border-border">
                  <p className="text-[#28c840]">
                    ✓ Deployment successful
                  </p>
                  <p className="text-muted text-[11px] mt-1">
                    Status: <span className="text-gold">FOREVER</span> | Uptime: <span className="text-gold">∞</span>
                  </p>
                </div>
              </div>
            </TerminalBlock>
          </AnimatedSection>

          {/* Final Commit Preview */}
          <AnimatedSection delay={0.4}>
            <div className="glass rounded-2xl p-6 text-center md:p-8">
              <div className="mb-4 flex items-center justify-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gold" />
                <span className="text-xs font-mono text-dim">commit 30102031</span>
              </div>
              <blockquote className="border-gold/30 md:border-l-2 md:pl-6">
                <p className="font-serif text-lg md:text-xl text-foreground italic mb-3">
                  &ldquo;Forever starts here.&rdquo;
                </p>
                <footer className="break-words text-xs font-mono text-muted">
                  <p>Author: Muhammad Faturrahman Putra &lt;fatur@love.dev&gt;</p>
                  <p>Laura Shakira Aisyah Putri &lt;laura@love.dev&gt;</p>
                  <p className="mt-1 text-dim">Date: Thu Oct 30 2031 00:00:00 GMT+0700</p>
                </footer>
              </blockquote>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function DeploymentProgress() {
  return (
    <motion.div
      className="flex items-center gap-2 my-1"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <span className="text-dim text-[11px]">[</span>
      <div className="flex-1 h-2 bg-surface-alt rounded-full overflow-hidden max-w-xs">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
          initial={{ width: '0%' }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
        />
      </div>
      <span className="text-dim text-[11px]">]</span>
      <motion.span
        className="text-gold text-[11px] font-mono"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 2.5 }}
      >
        100%
      </motion.span>
    </motion.div>
  );
}
