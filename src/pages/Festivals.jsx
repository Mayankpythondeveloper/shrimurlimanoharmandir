import { Helmet } from 'react-helmet-async';
import FestivalCards from '../components/FestivalCards';

export default function Festivals() {
  return (
    <>
      <Helmet>
        <title>Festivals | Shri Murli Manohar Mandir</title>
        <meta name="description" content="Discover upcoming temple festivals and celebrations." />
      </Helmet>
      <section className="relative flex min-h-[60vh] items-center justify-center bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6 py-24 text-center text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-200">Temple Festivals</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">Nauka Vihar Mahotsav</h1>
        </div>
      </section>
      <FestivalCards />
    </>
  );
}
