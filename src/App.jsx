import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import Loader from './components/Loader';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const GalleryPage = lazy(() => import('./pages/Gallery'));
const Darshan = lazy(() => import('./pages/Darshan'));
const Festivals = lazy(() => import('./pages/Festivals'));
const Donation = lazy(() => import('./pages/Donation'));
const Seva = lazy(() => import('./pages/Seva'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Shri Murli Manohar Mandir</title>
        <meta name="description" content="A premium spiritual destination with darshan, festivals, donations, seva booking, and divine experiences." />
      </Helmet>
      {loading ? <Loader /> : null}
      <MainLayout>
        <Suspense fallback={<div className="min-h-screen" />}> 
          <AnimatePresence mode="wait">
            <motion.div key={location.pathname} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/darshan" element={<Darshan />} />
                <Route path="/festivals" element={<Festivals />} />
                <Route path="/donation" element={<Donation />} />
                <Route path="/seva" element={<Seva />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </MainLayout>
    </>
  );
}

export default App;
