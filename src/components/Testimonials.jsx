import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import SectionTitle from './SectionTitle';

const testimonials = [
  { name: 'Priya Sharma', review: 'The atmosphere is serene and divine. Every visit leaves me calm and grateful.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80' },
  { name: 'Raghav Mehta', review: 'The darshan experience and aarti timings are simply exceptional.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80' },
  { name: 'Ananya Joshi', review: 'A place where devotion feels alive and the community spirit is inspiring.', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80' }
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle title="Devotee Testimonials" description="Stories of blessings, peace, and heartfelt gratitude." />
      <Swiper modules={[Autoplay]} autoplay={{ delay: 3500 }} spaceBetween={20} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 } }} className="mt-10">
        {testimonials.map((item) => (
          <SwiperSlide key={item.name}>
            <div className="glass-card p-8 text-center">
              <img src={item.avatar} alt={item.name} className="mx-auto h-20 w-20 rounded-full object-cover" />
              <h3 className="mt-4 font-semibold text-templeBrown dark:text-amber-200">{item.name}</h3>
              <p className="mt-2 text-sm text-amber-500">★★★★★</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">“{item.review}”</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
