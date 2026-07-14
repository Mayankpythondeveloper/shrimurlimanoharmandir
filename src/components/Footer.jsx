import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-templeBrown to-slate-950 px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <h3 className="mb-3 font-serif text-xl">Shri Murli Manohar Mandir</h3>
          <p className="text-sm text-slate-300">A sacred sanctuary for devotion, service, and peace.</p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link to="/about" className="hover:text-amber-300">About</Link></li>
            <li><Link to="/gallery" className="hover:text-amber-300">Gallery</Link></li>
            <li><Link to="/donation" className="hover:text-amber-300">Festival Calendar</Link></li>
            <li><Link to="/contact" className="hover:text-amber-300">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Important Links</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link to="/privacy" className="hover:text-amber-300">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-amber-300">Terms & Conditions</Link></li>
            <li><a href="#" className="hover:text-amber-300">Developer Credit</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Contact</h4>
          <div className="space-y-2 text-sm text-slate-300">
            <p className="flex items-center gap-2"><FaPhoneAlt /> +91 98765 43210</p>
            <p className="flex items-center gap-2"><FaEnvelope /> info@mandir.org</p>
          </div>
          <div className="mt-4">
            <h5 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">Follow Us</h5>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.facebook.com/share/18o1UoLt2n/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1877f2] to-[#4f8ff7] px-4 py-2 text-sm font-medium text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <FaFacebookF />
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/murli.manohar.mandir.jhansi?igsh=MTAweDFwbmF0YXIxMQ==" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-saffron to-gold px-4 py-2 text-sm font-medium text-templeBrown transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <FaInstagram />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-slate-400">© 2026 Shri Murli Manohar Mandir. All rights reserved.</div>
    </footer>
  );
}
