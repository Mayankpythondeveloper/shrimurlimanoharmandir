import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import heroBg from '../../images/Murli mamohar.avif';

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.35)), url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#180c08]/80 via-[#4e342e]/60 to-transparent" />
      <div className="absolute left-[10%] top-[20%] h-3 w-3 animate-pulse rounded-full bg-amber-300 shadow-[0_0_25px_#ffd700]" />
      <div className="absolute right-[15%] top-[25%] h-4 w-4 animate-pulse rounded-full bg-white/70" />
      <div className="absolute bottom-[20%] left-[20%] h-2 w-2 rounded-full bg-amber-300" />
      <div className="absolute bottom-[15%] right-[25%] h-3 w-3 rounded-full bg-white/70" />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-28 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl text-white">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-amber-200">Sacred Home of Krishna Bhakti</p>
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">Shri Murli Manohar Mandir</h1>
          <p className="mt-6 text-lg text-slate-100 sm:text-xl">Experience Divine Peace, Devotion and Spiritual Bliss.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/darshan" className="rounded-full bg-gradient-to-r from-saffron to-gold px-6 py-3 font-semibold text-white shadow-glow">Live Darshan</Link>
            <Link to="/donation" className="rounded-full border border-white/80 px-6 py-3 font-semibold text-white">Festival Calendar</Link>
            <Link to="/about" className="rounded-full bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur">Explore Temple</Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-amber-100">
            <span className="rounded-full bg-white/10 px-4 py-2">Daily Aarti</span>
            <span className="rounded-full bg-white/10 px-4 py-2">Seva & Charity</span>
            <span className="rounded-full bg-white/10 px-4 py-2">Festival Celebrations</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="glass-card w-full max-w-lg p-6 text-white">
          <div className="flex items-center gap-3 text-amber-300"><FaHeart /> <span className="font-semibold uppercase tracking-[0.2em]">Divine Blessings</span></div>
          <h2 className="mt-4 font-serif text-2xl text-templeBrown dark:text-amber-100">Temple of Grace & Harmony</h2>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">Step into a premium experience of spiritual reflection, sacred rituals, and serene celebration.</p>
          <img src={heroBg} alt="Shri Murli Manohar Mandir view" className="mt-6 h-64 w-full rounded-3xl object-cover" />
        </motion.div>
      </div>
    </section>
  );
}
