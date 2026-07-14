import { useState } from 'react';
import { motion } from 'framer-motion';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import lgZoom from 'lightgallery/plugins/zoom';
import SectionTitle from './SectionTitle';

const images = [
  { src: '/images/gallery1.jpg', alt: 'Temple' },
  { src: '/images/gallery2.jpg', alt: 'Krishna Ji' },
  { src: '/images/gallery3.jpg', alt: 'Radha Rani' },
  { src: '/images/gallery4.jpg', alt: 'Festivals' },
  { src: '/images/gallery5.jpg', alt: 'Decoration' },
  { src: '/images/gallery1.jpg', alt: 'Evening Glow' }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', ...new Set(images.map((img) => img.alt))];

  const filteredImages = activeFilter === 'All' ? images : images.filter((img) => img.alt === activeFilter);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle title="Temple Gallery" description="A curated collection of sacred moments and festive splendor." />
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {filters.map((filter) => (
          <button key={filter} onClick={() => setActiveFilter(filter)} className={`rounded-full px-4 py-2 text-sm ${activeFilter === filter ? 'bg-saffron text-white' : 'bg-white/70 text-slate-700 dark:bg-slate-800 dark:text-slate-200'}`}>
            {filter}
          </button>
        ))}
      </div>
      <LightGallery speed={500} plugins={[lgZoom]} className="mt-8 grid gap-4 md:grid-cols-3">
        {filteredImages.map((image, index) => (
          <motion.a key={image.src} href={image.src} data-lg-size="1400-800" className="group overflow-hidden rounded-3xl" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
            <img src={image.src} alt={image.alt} loading="lazy" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
          </motion.a>
        ))}
      </LightGallery>
    </section>
  );
}
