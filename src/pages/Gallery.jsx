import { Helmet } from 'react-helmet-async';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
  return (
    <>
      <Helmet>
        <title>Gallery | Shri Murli Manohar Mandir</title>
        <meta name="description" content="Explore the temple gallery with sacred images and festive moments." />
      </Helmet>
      <section className="relative flex min-h-[60vh] items-center justify-center bg-[url('https://images.unsplash.com/photo-1523741543316-beb7ba3b4f0e?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-6 py-24 text-center text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-200">Temple Gallery</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">Moments of devotion and splendor</h1>
        </div>
      </section>
      <Gallery />
    </>
  );
}
