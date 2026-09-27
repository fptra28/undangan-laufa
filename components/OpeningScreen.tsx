'use client'

import { motion } from 'framer-motion'

interface OpeningScreenProps {
  guestName: string
  onOpen: () => void
}

export default function OpeningScreen({ guestName, onOpen }: OpeningScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#07100f] px-5 py-8"
      exit={{ opacity: 0, scale: 1.03, transition: { duration: 0.7 } }}
    >
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(101,224,180,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(101,224,180,.12)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-emerald-200/20 bg-[#0c1917]/90 p-6 shadow-[0_24px_100px_rgba(0,0,0,.45)] backdrop-blur-xl sm:p-10"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-300 via-amber-200 to-emerald-300" />
        <div className="mb-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[.24em] text-emerald-200/60">
          <span>programingh.exe</span>
          <span>v1.0.30</span>
        </div>

        <div className="mx-auto flex max-w-sm flex-col items-center text-center">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-amber-200/30 bg-amber-200/10 font-mono text-2xl text-amber-100 shadow-[0_0_40px_rgba(244,210,125,.12)]">
            {'</>'}
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[.38em] text-emerald-200/70">A new chapter is deploying</p>
          <h1 className="mt-5 font-serif text-3xl leading-tight text-amber-100 sm:text-6xl"><span className="block sm:inline">Faturrahman</span> <span className="text-emerald-200">&amp;</span> <span className="block sm:inline">Laura</span></h1>
          <p className="mt-5 font-mono text-xs tracking-[.3em] text-white/45">30 · 10 · 2031</p>

          <div className="my-9 h-px w-full bg-gradient-to-r from-transparent via-emerald-200/30 to-transparent" />
          <p className="font-mono text-[10px] uppercase tracking-[.3em] text-white/40">Invitation prepared for</p>
          <p className="mt-2 font-serif text-2xl text-white">{guestName}</p>
          <button onClick={onOpen} className="mt-9 rounded-full border border-amber-200/50 bg-amber-100 px-7 py-3 font-mono text-xs font-semibold uppercase tracking-[.18em] text-[#10201b] transition hover:-translate-y-1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-[#0c1917]">
            Open invitation <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 font-mono text-[10px] text-white/30">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          <span>love successfully compiled</span>
        </div>
      </motion.div>
    </motion.div>
  )
}
