import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';

const faqs = [
  { q: 'What are the temple timings?', a: 'The temple is open daily from early morning to late evening for aarti and darshan.' },
  { q: 'Can I book seva online?', a: 'Yes, seva and prayer requests can be arranged through the online form.' },
  { q: 'Is live darshan available?', a: 'Yes, sacred rituals and selected programs are streamed online regularly.' }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle title="Frequently Asked Questions" description="Everything you need to know before visiting or supporting the temple." />
      <div className="mx-auto mt-10 max-w-3xl space-y-3">
        {faqs.map((item, index) => (
          <div key={item.q} className="glass-card overflow-hidden">
            <button onClick={() => setOpenIndex(openIndex === index ? -1 : index)} className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold text-templeBrown dark:text-amber-200">
              <span>{item.q}</span>
              <span>{openIndex === index ? '-' : '+'}</span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-6 pb-4 text-sm text-slate-600 dark:text-slate-300">
                  {item.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
