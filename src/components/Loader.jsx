import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-[#fffaf1] dark:bg-slate-950">
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-4">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-saffron/20 border-t-saffron" />
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-templeBrown dark:text-amber-200">Preparing the Darshan</p>
      </motion.div>
    </div>
  );
}
