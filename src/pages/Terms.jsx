import { Helmet } from 'react-helmet-async';

export default function Terms() {
  return (
    <>
      <Helmet><title>Terms & Conditions | Shri Murli Manohar Mandir</title></Helmet>
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="font-serif text-4xl text-templeBrown dark:text-amber-200">Terms & Conditions</h1>
        <p className="mt-5 text-sm text-slate-600 dark:text-slate-300">By using this website, you agree to our terms regarding donations, seva bookings, and communications.</p>
      </section>
    </>
  );
}
