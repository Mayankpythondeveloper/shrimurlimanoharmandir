import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';

export default function FloatingButtons() {
  return (
    <>
      <a href="https://wa.me/919235608105" target="_blank" rel="noreferrer" className="fixed bottom-24 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl">
        <FaWhatsapp className="text-xl" />
      </a>
      <a href="tel:+919235608105" className="fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-white shadow-xl">
        <FaPhoneAlt className="text-xl" />
      </a>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-4 right-24 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500 text-white shadow-xl">
        <FaArrowUp />
      </button>
    </>
  );
}
