import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/SectionTitle';

const timeline = [
  { title: 'Foundation', text: 'Established with devotion and a vision of spiritual service.' },
  { title: 'Expansion', text: 'Grew into a sacred community center for festivals and charity.' },
  { title: 'Modern Outreach', text: 'Now serving devotees across the world through digital darshan.' }
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Shri Murli Manohar Mandir</title>
        <meta name="description" content="Learn about the temple history, vision, mission, founder and daily timings." />
      </Helmet>
      <section className="relative flex min-h-[60vh] items-center justify-center bg-[url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6 py-24 text-center text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-200">About the Temple</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">Devotion, heritage, and serene service</h1>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle title="Temple History Timeline" description="A legacy of spirituality, compassion, and sacred celebration." />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {timeline.map((item, index) => (
            <div key={item.title} className="glass-card p-8">
              <div className="text-4xl font-semibold text-saffron">0{index + 1}</div>
              <h3 className="mt-4 text-xl font-semibold text-templeBrown dark:text-amber-200">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-card p-8">
            <h3 className="font-serif text-2xl text-templeBrown dark:text-amber-200">Vision</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">To become a beacon of spiritual peace and compassionate service.</p>
            <h3 className="mt-8 font-serif text-2xl text-templeBrown dark:text-amber-200">Mission</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">To preserve sacred traditions while uplifting lives through seva and devotion.</p>
          </div>
          <div className="glass-card p-8">
            <h3 className="font-serif text-2xl text-templeBrown dark:text-amber-200">Founder</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">The temple was founded by spiritual visionaries committed to the ideals of devotion, charity, and community.</p>
            <h3 className="mt-8 font-serif text-2xl text-templeBrown dark:text-amber-200">Why Visit</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">For soulful aarti, peaceful meditation, festive celebrations, and divine blessings.</p>
          </div>
        </div>
      </section>
    </>
  );
}
