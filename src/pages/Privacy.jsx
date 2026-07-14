import { Helmet } from 'react-helmet-async';

export default function Privacy() {
  return (
    <>
      <Helmet><title>Privacy Policy | Shri Murli Manohar Mandir</title></Helmet>
      <section className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="font-serif text-4xl text-templeBrown dark:text-amber-200">Privacy Policy</h1>
        <p className="mt-5 text-sm text-slate-600 dark:text-slate-300">We respect your privacy and only use your information for temple communications, donations, and seva requests.</p>
      </section>
    </>
  );
}
