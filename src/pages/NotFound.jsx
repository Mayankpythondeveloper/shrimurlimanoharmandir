import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-24 text-center">
      <div className="glass-card max-w-xl p-10">
        <h1 className="font-serif text-4xl text-templeBrown dark:text-amber-200">404</h1>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">The page you are looking for is not available. Please return to the sacred home page.</p>
        <Link to="/" className="mt-6 inline-block rounded-full bg-gradient-to-r from-saffron to-gold px-6 py-3 font-semibold text-white">Go Home</Link>
      </div>
    </section>
  );
}
