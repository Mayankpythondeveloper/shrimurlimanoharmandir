export default function SectionTitle({ title, description }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="font-serif text-3xl text-templeBrown dark:text-amber-200">{title}</h2>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}
