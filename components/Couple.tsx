'use client';

import AnimatedSection from './AnimatedSection';
import CodeBlock from './CodeBlock';

export default function Couple() {
  return (
    <section id="couple" className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <p className="text-xs font-mono tracking-[0.3em] text-dim uppercase mb-3">
            {'// introducing'}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl gradient-text mb-4">
            Mempelai
          </h2>
          <div className="section-divider mt-4" />
        </AnimatedSection>

        {/* Couple grid */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 md:gap-8">
          {/* Groom */}
          <AnimatedSection delay={0.2} direction="left">
            <div className="glass-gold h-full rounded-2xl p-6 text-center transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(205,161,58,0.1)] md:p-8">
              {/* Profile placeholder */}
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full border-2 border-border-gold overflow-hidden bg-surface-alt flex items-center justify-center pulse-glow">
                <span className="text-4xl md:text-5xl font-serif text-gold/40">F</span>
              </div>

              <p className="text-xs font-mono text-dim tracking-wider uppercase mb-2">
                The Groom
              </p>

              <h3 className="font-serif text-2xl md:text-3xl gradient-text mb-4">
                Muhammad Faturrahman Putra
              </h3>

              <div className="w-8 h-px bg-gold/30 mx-auto mb-4" />

              <p className="text-sm text-muted leading-relaxed mb-6">
                Anak kedua dari<br />
                Bapak <span className="text-gold-light">Edi Jubaedi</span>
                {' & '}
                Ibu <span className="text-gold-light">Isvalia Dwirani</span>
              </p>

              {/* Code representation */}
              <CodeBlock title="groom.ts" className="text-left mt-4">
                <p>
                  <span className="text-[#c678dd]">class</span>{' '}
                  <span className="text-[#e5c07b]">Groom</span>{' '}
                  <span className="text-muted">{'{'}</span>
                </p>
                <p className="ml-4">
                  <span className="text-[#e06c75]">name</span>
                  <span className="text-muted"> = </span>
                  <span className="text-[#98c379]">&quot;M. Faturrahman Putra&quot;</span>
                  <span className="text-muted">;</span>
                </p>
                <p className="ml-4">
                  <span className="text-[#e06c75]">childOrder</span>
                  <span className="text-muted"> = </span>
                  <span className="text-[#d19a66]">2</span>
                  <span className="text-muted">;</span>
                </p>
                <p className="ml-4">
                  <span className="text-[#e06c75]">parents</span>
                  <span className="text-muted"> = [</span>
                </p>
                <p className="ml-8">
                  <span className="text-[#98c379]">&quot;Edi Jubaedi&quot;</span>
                  <span className="text-muted">,</span>
                </p>
                <p className="ml-8">
                  <span className="text-[#98c379]">&quot;Isvalia Dwirani&quot;</span>
                </p>
                <p className="ml-4">
                  <span className="text-muted">];</span>
                </p>
                <p>
                  <span className="text-muted">{'}'}</span>
                </p>
              </CodeBlock>
            </div>
          </AnimatedSection>

          {/* Bride */}
          <AnimatedSection delay={0.4} direction="right">
            <div className="glass-gold h-full rounded-2xl p-6 text-center transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(205,161,58,0.1)] md:p-8">
              {/* Profile placeholder */}
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full border-2 border-border-gold overflow-hidden bg-surface-alt flex items-center justify-center pulse-glow">
                <span className="text-4xl md:text-5xl font-serif text-gold/40">L</span>
              </div>

              <p className="text-xs font-mono text-dim tracking-wider uppercase mb-2">
                The Bride
              </p>

              <h3 className="font-serif text-2xl md:text-3xl gradient-text mb-4">
                Laura Shakira Aisyah Putri
              </h3>

              <div className="w-8 h-px bg-gold/30 mx-auto mb-4" />

              <p className="text-sm text-muted leading-relaxed mb-6">
                Anak pertama dari<br />
                Bapak <span className="text-gold-light">Mus Mulyadi</span>
                {' & '}
                Ibu <span className="text-gold-light">Hendah Rahmawati</span>
              </p>

              {/* Code representation */}
              <CodeBlock title="bride.ts" className="text-left mt-4">
                <p>
                  <span className="text-[#c678dd]">class</span>{' '}
                  <span className="text-[#e5c07b]">Bride</span>{' '}
                  <span className="text-muted">{'{'}</span>
                </p>
                <p className="ml-4">
                  <span className="text-[#e06c75]">name</span>
                  <span className="text-muted"> = </span>
                  <span className="text-[#98c379]">&quot;Laura Shakira Aisyah Putri&quot;</span>
                  <span className="text-muted">;</span>
                </p>
                <p className="ml-4">
                  <span className="text-[#e06c75]">childOrder</span>
                  <span className="text-muted"> = </span>
                  <span className="text-[#d19a66]">1</span>
                  <span className="text-muted">;</span>
                </p>
                <p className="ml-4">
                  <span className="text-[#e06c75]">parents</span>
                  <span className="text-muted"> = [</span>
                </p>
                <p className="ml-8">
                  <span className="text-[#98c379]">&quot;Mus Mulyadi&quot;</span>
                  <span className="text-muted">,</span>
                </p>
                <p className="ml-8">
                  <span className="text-[#98c379]">&quot;Hendah Rahmawati&quot;</span>
                </p>
                <p className="ml-4">
                  <span className="text-muted">];</span>
                </p>
                <p>
                  <span className="text-muted">{'}'}</span>
                </p>
              </CodeBlock>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
