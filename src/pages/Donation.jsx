import { Helmet } from 'react-helmet-async';
import calenderImg from '../../images/calender.jpg';

export default function Donation() {
  return (
    <>
      <Helmet>
        <title>Temple Festival Calendar | Shri Murli Manohar Mandir</title>
        <meta name="description" content="Stay updated with all temple festivals and celebrations. Download or view the official festival calendar." />
      </Helmet>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-200">Temple Festival Calendar</p>
            <h2 className="font-serif text-3xl sm:text-4xl">Stay updated with all temple festivals and celebrations.</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">Download or view the official Shri Murli Manohar Mandir Festival Calendar to know the dates of important festivals, aartis, utsavs and special celebrations throughout the year.</p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a href={calenderImg} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-amber-300 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:shadow-md">📄 View Calendar</a>
              <a href={calenderImg} download className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-saffron to-gold px-5 py-3 text-sm font-semibold text-white shadow-glow">⬇ Download Calendar</a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <a href={calenderImg} target="_blank" rel="noreferrer" className="block w-full max-w-2xl overflow-hidden rounded-3xl transition-transform hover:scale-105">
              <img src={calenderImg} alt="Shri Murli Manohar Mandir Festival Calendar" className="w-full object-cover rounded-3xl shadow-xl border-4 border-[#ffd700]" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
