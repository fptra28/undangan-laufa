'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

type AttendanceStatus = 'attending' | 'not-attending' | '';

export default function RSVP() {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState<AttendanceStatus>('');
  const [guestCount, setGuestCount] = useState('1');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !attendance) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="rsvp" className="relative py-20 md:py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />

      <div className="relative z-10 mx-auto w-full max-w-xl">
        {/* Section header */}
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs font-mono tracking-[0.3em] text-dim uppercase mb-3">
            {'// your response'}
          </p>
          <h2 className="font-serif text-3xl md:text-5xl gradient-text mb-4">
            RSVP
          </h2>
          <p className="text-sm text-muted max-w-md mx-auto">
            Kehadiran Anda adalah hadiah terindah bagi kami.
          </p>
          <div className="section-divider mt-6" />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                className="glass-gold mx-auto max-w-lg rounded-2xl p-6 text-center sm:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Success terminal */}
                <div className="font-mono text-sm space-y-2 text-left bg-card/80 rounded-lg p-4 mb-6">
                  <p className="text-dim">POST /api/rsvp</p>
                  <p className="text-dim">Sending response...</p>
                  <p className="text-[#28c840]">200 OK</p>
                  <p className="text-gold mt-2">✓ RSVP successfully committed.</p>
                </div>
                <h3 className="font-serif text-xl text-foreground mb-2">
                  Terima Kasih!
                </h3>
                <p className="text-sm text-muted">
                  Konfirmasi kehadiran Anda telah kami terima.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="glass-gold mx-auto max-w-lg space-y-5 rounded-2xl p-5 sm:p-6 md:p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Name */}
                <div>
                  <label htmlFor="rsvp-name" className="block text-xs font-mono text-dim tracking-wider uppercase mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    id="rsvp-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masukkan nama Anda"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm font-mono placeholder:text-dim/50 focus:outline-none focus:border-border-gold transition-colors"
                  />
                </div>

                {/* Attendance */}
                <div>
                  <label className="block text-xs font-mono text-dim tracking-wider uppercase mb-2">
                    Kehadiran
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setAttendance('attending')}
                      className={`px-4 py-3 rounded-lg text-sm font-mono border transition-all cursor-pointer ${
                        attendance === 'attending'
                          ? 'border-gold bg-gold/10 text-gold'
                          : 'border-border text-muted hover:border-border-gold'
                      }`}
                    >
                      ✓ Akan Hadir
                    </button>
                    <button
                      type="button"
                      onClick={() => setAttendance('not-attending')}
                      className={`px-4 py-3 rounded-lg text-sm font-mono border transition-all cursor-pointer ${
                        attendance === 'not-attending'
                          ? 'border-gold bg-gold/10 text-gold'
                          : 'border-border text-muted hover:border-border-gold'
                      }`}
                    >
                      ✗ Tidak Hadir
                    </button>
                  </div>
                </div>

                {/* Guest count */}
                {attendance === 'attending' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <label htmlFor="rsvp-count" className="block text-xs font-mono text-dim tracking-wider uppercase mb-2">
                      Jumlah Tamu
                    </label>
                    <select
                      id="rsvp-count"
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm font-mono focus:outline-none focus:border-border-gold transition-colors cursor-pointer appearance-none"
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <option key={n} value={n}>
                          {n} orang
                        </option>
                      ))}
                    </select>
                  </motion.div>
                )}

                {/* Message */}
                <div>
                  <label htmlFor="rsvp-message" className="block text-xs font-mono text-dim tracking-wider uppercase mb-2">
                    Ucapan
                  </label>
                  <textarea
                    id="rsvp-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tulis ucapan untuk mempelai..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground text-sm font-mono placeholder:text-dim/50 focus:outline-none focus:border-border-gold transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || !name || !attendance}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-gold/20 to-gold-light/20 border border-border-gold text-gold font-mono text-sm hover:from-gold/30 hover:to-gold-light/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                        className="inline-block"
                      >
                        ⟳
                      </motion.span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit RSVP
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </AnimatedSection>
      </div>
    </section>
  );
}
