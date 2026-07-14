import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaSearch, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/darshan', label: 'Darshan' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/festivals', label: 'Festivals' },
  { to: '/seva', label: 'Seva' },
  { to: '/donation', label: 'Festival Calendar' },
  { to: '/contact', label: 'Contact' }
];

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-lg dark:bg-slate-950/90' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <RouterLink to="/" className="text-lg font-semibold tracking-wide text-templeBrown dark:text-amber-200">Shri Murli Manohar Mandir</RouterLink>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <RouterLink key={link.to} to={link.to} className="text-sm font-medium text-templeBrown/80 transition hover:text-saffron dark:text-slate-200">
              {link.label}
            </RouterLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <button className="rounded-full border border-slate-300 p-2 text-sm dark:border-slate-700" aria-label="Search"><FaSearch /></button>
          <button className="rounded-full border border-slate-300 p-2 text-sm dark:border-slate-700" aria-label="Toggle dark mode" onClick={() => setDarkMode(!darkMode)}>{darkMode ? <FaSun /> : <FaMoon />}</button>
        </div>
        <button className="rounded-full border border-slate-300 p-2 text-sm lg:hidden dark:border-slate-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="border-t border-white/20 bg-white/95 px-4 py-4 dark:bg-slate-950/95 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <RouterLink key={link.to} to={link.to} className="text-sm font-medium text-templeBrown dark:text-slate-200" onClick={() => setOpen(false)}>{link.label}</RouterLink>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
