import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact | Shri Murli Manohar Mandir</title>
        <meta name="description" content="Get in touch with the temple for visits, seva, prayers, and inquiries." />
      </Helmet>
      <section className="relative flex min-h-[60vh] items-center justify-center bg-[url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6 py-24 text-center text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-200">Contact Us</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">Connect with the temple family</h1>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-card p-8">
            <h2 className="font-serif text-2xl text-templeBrown dark:text-amber-200">Temple Address</h2>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">Shri Murli Manohar Mandir</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Bara Bazar, Subhash Ganj, Jhansi, Uttar Pradesh – 284002</p>
            <a href="tel:+919235608105" className="mt-2 inline-block text-sm text-slate-600 transition hover:text-saffron dark:text-slate-300">+91 92356 08105</a>
            <iframe title="Temple Map" className="mt-6 h-72 w-full rounded-3xl" src="https://www.google.com/maps?q=Bara%20Bazar%2C%20Subhash%20Ganj%2C%20Jhansi%2C%20Uttar%20Pradesh%20284002&z=15&output=embed" loading="lazy"></iframe>
          </div>
          <div className="glass-card p-8">
            <h2 className="font-serif text-2xl text-templeBrown dark:text-amber-200">Send a Message</h2>
            <form className="mt-6 grid gap-4">
              <input className="rounded-2xl border border-slate-300 bg-white/70 px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-900" placeholder="Name" />
              <input className="rounded-2xl border border-slate-300 bg-white/70 px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-900" placeholder="Email" />
              <textarea className="rounded-2xl border border-slate-300 bg-white/70 px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-900" rows="4" placeholder="Message" />
              <button className="rounded-full bg-gradient-to-r from-saffron to-gold px-6 py-3 font-semibold text-white">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
