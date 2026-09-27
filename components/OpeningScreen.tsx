'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface OpeningScreenProps {
  guestName: string;
  onOpen: () => void;
}

const loadingSteps = [
  'initializing wedding invitation...',
  'loading love modules...',
  'compiling memories...',
  'connecting hearts...',
  'building forever...',
  'system ready.',
];

export default function OpeningScreen({ guestName, onOpen }: OpeningScreenProps) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('');
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let stepIndex = 0;
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        const next = prev + Math.random() * 3 + 1;
        return next >= 100 ? 100 : next;
      });
    }, 50);

    const typeText = (text: string, index: number, callback: () => void) => {
      if (index <= text.length) { setLoadingText(text.substring(0, index)); setTimeout(() => typeText(text, index + 1, callback), 25); }
      else { setTimeout(callback, 300); }
    };
    const runStep = () => {
      if (stepIndex < loadingSteps.length) {
        typeText(loadingSteps[stepIndex], 0, () => {
          stepIndex++;
          if (stepIndex < loadingSteps.length) {
            setTimeout(runStep, 200);
          } else {
            setLoadingProgress(100);
            clearInterval(progressInterval);
            setTimeout(() => {
              setTimeout(() => setShowContent(true), 300);
            }, 500);
          }
        });
      }
    };

    const timer = setTimeout(runStep, 500);
    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  return (
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#0b0a09] px-5"
        exit={{
          opacity: 0,
          scale: 1.1,
          filter: 'blur(20px)',
          transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
        }}
      >
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-30" />

        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gold/5 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-gold/3 blur-[80px]" />

        {/* Content */}
        <div className="relative z-10 flex w-full max-w-lg flex-col items-center px-6 text-center">

          {/* Terminal loading area */}
          {!showContent && (
            <motion.div
              className="w-full max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="terminal-block w-full">
                <div className="terminal-header">
                  <span className="terminal-dot bg-[#ff5f57]" />
                  <span className="terminal-dot bg-[#ffbd2e]" />
                  <span className="terminal-dot bg-[#28c840]" />
                  <span className="ml-3 text-[10px] font-mono text-dim">wedding-init</span>
                </div>
                <div className="terminal-body text-left">
                  <p className="text-muted">
                    <span className="text-gold">$</span> {loadingText}
                    <span className="cursor-blink text-gold">▌</span>
                  </p>

                  {/* Progress bar */}
                  <div className="mt-3 mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-dim text-[10px]">[</span>
                      <div className="flex-1 h-1.5 bg-surface-alt rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
                          style={{ width: `${loadingProgress}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </div>
                      <span className="text-dim text-[10px]">]</span>
                      <span className="text-gold text-[10px] font-mono w-8 text-right">
                        {Math.round(loadingProgress)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Main content after loading */}
          {showContent && (
            <motion.div
              className="flex flex-col items-center gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Decorative line */}
              <motion.div
                className="w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />

              {/* Label */}
              <motion.p
                className="text-xs font-mono tracking-[0.3em] text-muted uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                The Wedding of
              </motion.p>

              {/* Names */}
              <div className="space-y-2">
                <motion.h1
                  className="font-serif text-3xl md:text-5xl font-medium gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                >
                  Faturrahman
                </motion.h1>
                <motion.p
                  className="text-gold text-xl md:text-2xl font-serif italic"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  &amp;
                </motion.p>
                <motion.h1
                  className="font-serif text-3xl md:text-5xl font-medium gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                >
                  Laura Shakira
                </motion.h1>
              </div>

              {/* Date */}
              <motion.p
                className="font-mono text-sm text-muted tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                30 . 10 . 2031
              </motion.p>

              {/* Guest name */}
              <motion.div
                className="mt-4 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                <p className="text-xs font-mono text-dim tracking-wider uppercase mb-1">Kepada Yth.</p>
                <p className="text-lg text-gold-light font-serif">{guestName}</p>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                onClick={onOpen}
                className="group relative mt-6 px-8 py-3.5 rounded-full border border-border-gold bg-transparent overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Buka undangan pernikahan"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gold/10 to-gold-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: '0 0 30px rgba(205, 161, 58, 0.2), inset 0 0 30px rgba(205, 161, 58, 0.05)' }} />
                <span className="relative flex items-center gap-2 text-sm font-mono text-gold tracking-wider">
                  <span className="text-gold/60">&gt;</span>
                  Execute Our Story
                  <span className="cursor-blink">_</span>
                </span>
              </motion.button>

              {/* Decorative bottom line */}
              <motion.div
                className="w-px h-12 bg-gradient-to-b from-gold/30 to-transparent"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              />
            </motion.div>
          )}
        </div>

        {/* Floating code snippets - very subtle */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <motion.div
            className="absolute top-[15%] left-[5%] font-mono text-[10px] text-dim/30"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            import love from &apos;heart&apos;;
          </motion.div>
          <motion.div
            className="absolute top-[70%] right-[8%] font-mono text-[10px] text-dim/30"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          >
            const forever = true;
          </motion.div>
          <motion.div
            className="absolute top-[40%] right-[3%] font-mono text-[10px] text-dim/30"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            git commit -m &quot;forever&quot;
          </motion.div>
          <motion.div
            className="absolute bottom-[20%] left-[10%] font-mono text-[10px] text-dim/30"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          >
            deploy(happiness);
          </motion.div>
        </div>
      </motion.div>
  );
}
