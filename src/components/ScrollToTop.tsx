import { useState, useEffect, type FC } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="no-print">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 p-3 sm:px-4 sm:py-3 bg-[#0E1116] text-[#FBFBF9] border border-[#E5E5E0] shadow-lg transition-all duration-300 flex items-center gap-2 group cursor-pointer focus:outline-none ${
          isVisible
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        } hover:bg-[#9B7853] hover:border-[#9B7853]`}
      >
        <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        <span className="font-mono text-[11px] uppercase tracking-widest hidden sm:inline">
          Top
        </span>
      </button>
    </div>
  );
};
