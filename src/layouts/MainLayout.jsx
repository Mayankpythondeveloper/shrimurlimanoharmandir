import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import ScrollToTop from '../components/ScrollToTop';
import { ThemeProvider } from '../context/ThemeContext';

export default function MainLayout({ children }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <ThemeProvider value={{ darkMode, setDarkMode }}>
      <div className="min-h-screen bg-transparent text-slate-800 dark:text-slate-100 transition-colors duration-300">
        <motion.div className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-saffron to-gold" style={{ scaleX }} />
        <Navbar />
        <div className="pt-0">{children}</div>
        <Footer />
        <FloatingButtons />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
