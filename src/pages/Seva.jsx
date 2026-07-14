import { Helmet } from 'react-helmet-async';
import SevaBookingForm from '../components/SevaBookingForm';

export default function Seva() {
  return (
    <>
      <Helmet>
        <title>Seva Booking | Shri Murli Manohar Mandir</title>
        <meta name="description" content="Book temple seva and submit prayer requests online." />
      </Helmet>
      <section className="relative flex min-h-[60vh] items-center justify-center bg-[url('https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6 py-24 text-center text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-200">Seva Booking</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">Offer your devotion through sacred service</h1>
        </div>
      </section>
      <SevaBookingForm />
    </>
  );
}
