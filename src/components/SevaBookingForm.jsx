import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

export default function SevaBookingForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    emailjs.send('service_id', 'template_id', data, 'public_key').then(() => {
      alert('Seva request submitted successfully');
      reset();
    }).catch(() => alert('Unable to send request right now.'));
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="glass-card p-8">
        <h2 className="font-serif text-3xl text-templeBrown dark:text-amber-200">Book a Seva</h2>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Reserve a sacred service or share your prayer request with the temple team.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-4 md:grid-cols-2">
          <input className="rounded-2xl border border-slate-300 bg-white/70 px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-900" placeholder="Name" {...register('name')} />
          <input className="rounded-2xl border border-slate-300 bg-white/70 px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-900" placeholder="Phone" {...register('phone')} />
          <input className="rounded-2xl border border-slate-300 bg-white/70 px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-900" placeholder="Email" {...register('email')} />
          <input className="rounded-2xl border border-slate-300 bg-white/70 px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-900" placeholder="Seva Type" {...register('sevaType')} />
          <input className="rounded-2xl border border-slate-300 bg-white/70 px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-900" type="date" {...register('date')} />
          <textarea className="rounded-2xl border border-slate-300 bg-white/70 px-4 py-3 outline-none dark:border-slate-700 dark:bg-slate-900 md:col-span-2" rows="4" placeholder="Message" {...register('message')} />
          <button className="rounded-full bg-gradient-to-r from-saffron to-gold px-6 py-3 font-semibold text-white md:col-span-2" type="submit">Submit Request</button>
        </form>
      </div>
    </section>
  );
}
