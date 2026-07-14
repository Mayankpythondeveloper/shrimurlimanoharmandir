import { motion } from 'framer-motion';

export default function FestivalCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="glass-card overflow-hidden rounded-[2rem] p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)] sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-amber-200/70 bg-amber-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-saffron dark:bg-slate-800/70">
              🚣 Nauka Vihar Mahotsav
            </div>
            <div>
              <h2 className="font-serif text-3xl text-templeBrown dark:text-amber-200 sm:text-4xl">Nauka Vihar Mahotsav</h2>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                A unique and divine celebration where Shri Krishna and Radha Rani are taken on a sacred boat ride inside the temple in a beautifully decorated water pool.
              </p>
            </div>
            <p className="text-sm leading-8 text-slate-600 dark:text-slate-300">
              The Nauka Vihar Mahotsav is one of the most beautiful and devotional festivals celebrated at Shri Murli Manohar Mandir. During this festival, Shri Radha Krishna are lovingly seated in a beautifully decorated boat and gently taken around a specially prepared water pool inside the temple. Devotees sing melodious bhajans, perform kirtan, and witness this divine pastime with immense joy and devotion. The entire atmosphere becomes filled with spiritual bliss, flowers, lights, and the chanting of the holy names.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.08 }} className="w-full">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-amber-400/50 bg-gradient-to-br from-amber-50 via-white to-amber-100 p-4 shadow-[0_30px_80px_-30px_rgba(154,101,0,0.45)] dark:from-slate-900 dark:via-slate-950 dark:to-slate-800">
              <div className="relative aspect-video overflow-hidden rounded-[1.25rem] border border-white/70 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(250,245,220,0.9))] dark:border-slate-700">
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/15 text-3xl">🎥</div>
                  <p className="text-lg font-semibold text-templeBrown dark:text-amber-200">Nauka Vihar Video Coming Soon</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Temple Festival Video will be uploaded here.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
