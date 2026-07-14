import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import TempleTimings from '../components/TempleTimings';

export default function Darshan() {
  const [embedError, setEmbedError] = useState(false);

  return (
    <>
      <Helmet>
        <title>Darshan | Shri Murli Manohar Mandir</title>
        <meta name="description" content="Watch live darshan sessions and sacred aarti schedule from the temple." />
      </Helmet>
      <section className="relative flex min-h-[60vh] items-center justify-center bg-[url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6 py-24 text-center text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-200">Live Darshan</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">Sacred rituals, anywhere, anytime</h1>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-card p-8">
            <h2 className="font-serif text-2xl text-templeBrown dark:text-amber-200">Live Broadcast</h2>
            {!embedError ? (
              <div className="mt-6 overflow-hidden rounded-[24px] border border-amber-200/60 shadow-[0_18px_35px_rgba(255,140,0,0.16)]">
                <iframe
                  src="https://www.youtube.com/embed/cmN3DgKx1w0?rel=0"
                  title="Live Darshan – Shri Murli Manohar Mandir"
                  className="aspect-video w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                  onError={() => setEmbedError(true)}
                />
              </div>
            ) : (
              <div className="mt-6 flex min-h-[280px] flex-col items-center justify-center rounded-[24px] border border-amber-200/60 bg-gradient-to-br from-amber-100/70 to-amber-50 p-6 text-center text-templeBrown shadow-[0_18px_35px_rgba(255,140,0,0.12)]">
                <div className="mb-3 text-3xl text-saffron">▶</div>
                <h3 className="font-semibold">Live Darshan – Shri Murli Manohar Mandir</h3>
                <p className="mt-2 text-sm text-slate-600">Live Darshan is currently available on our official YouTube channel.</p>
              </div>
            )}
            <a href="https://youtu.be/cmN3DgKx1w0?si=9wKprSiNvX23P_lv" target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-gradient-to-r from-saffron to-gold px-5 py-3 text-sm font-semibold text-white shadow-lg">Watch on YouTube</a>
          </div>
          <div className="glass-card p-8">
            <h2 className="font-serif text-2xl text-templeBrown dark:text-amber-200">Daily Aarti Timings</h2>
            <TempleTimings />
          </div>
        </div>
      </section>
    </>
  );
}
