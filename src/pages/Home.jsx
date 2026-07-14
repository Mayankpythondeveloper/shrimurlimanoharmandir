import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaPlay, FaHandsHelping } from 'react-icons/fa';
import CountUp from 'react-countup';
import SectionTitle from '../components/SectionTitle';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import TempleTimings from '../components/TempleTimings';
import FestivalCards from '../components/FestivalCards';
import SevaBookingForm from '../components/SevaBookingForm';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Shri Murli Manohar Mandir</title>
        <meta name="description" content="Experience divine peace, devotional blessings, live darshan, and sacred temple services at Shri Murli Manohar Mandir." />
      </Helmet>
      <Hero />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle title="Temple in Spirit & Service" description="A modern sanctuary blending sacred traditions with premium digital experiences." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: 'Temple History', text: 'A legacy of devotion and spiritual service.' },
            { title: 'Daily Darshan', text: 'Sacred rituals streamed with grace and peace.' },
            { title: 'Community Care', text: 'Food, charity, and seva uplift lives every day.' }
          ].map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="glass-card p-8">
              <h3 className="mb-3 text-xl font-semibold text-templeBrown dark:text-amber-200">{item.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-card p-8">
            <SectionTitle title="Live Darshan" description="Join the sacred aarti from anywhere in the world." />
            <div className="mt-6 overflow-hidden rounded-3xl">
              <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80" alt="Temple live darshan" className="h-72 w-full object-cover" />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/darshan" className="rounded-full bg-saffron px-5 py-3 text-sm font-semibold text-white shadow-lg">Watch Live</Link>
              <Link to="/donation" className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold">Festival Calendar</Link>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 text-saffron"><FaPlay /> <span className="font-semibold">Daily Aarti Schedule</span></div>
              <TempleTimings />
            </div>
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 text-saffron"><FaHandsHelping /> <span className="font-semibold">Temple Activities</span></div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {['Food Distribution','Bhajan Sandhya','Cow Seva','Charity'].map((item) => <div key={item} className="rounded-2xl bg-amber-50 p-3 text-sm dark:bg-slate-800">{item}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="glass-card p-8">
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { label: 'Devotees Served', value: 25000 },
              { label: 'Meals Shared', value: 180000 },
              { label: 'Festivals Hosted', value: 35 },
              { label: 'Volunteer Hours', value: 12000 }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-semibold text-saffron"><CountUp end={stat.value} duration={2.5} separator="," /></div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery />
      <FestivalCards />
      <Testimonials />
      <FAQ />
      <SevaBookingForm />
    </>
  );
}
