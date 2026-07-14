const timings = [
  { title: 'Mangala Aarti', time: '05:30 AM', desc: 'The first prayer of the day.' },
  { title: 'Rajbhog', time: '12:30 PM', desc: 'Sacred bhog offered with love.' },
  { title: 'Sandhya Aarti', time: '07:00 PM', desc: 'Evening divine celebration.' },
  { title: 'Shayan Aarti', time: '09:30 PM', desc: 'Night prayer and closing.' }
];

export default function TempleTimings() {
  return (
    <div className="mt-4 grid gap-3">
      {timings.map((item) => (
        <div key={item.title} className="rounded-2xl border border-slate-200 bg-amber-50/70 p-4 dark:border-slate-700 dark:bg-slate-800/70">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-templeBrown dark:text-amber-200">{item.title}</h4>
            <span className="text-sm font-semibold text-saffron">{item.time}</span>
          </div>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
