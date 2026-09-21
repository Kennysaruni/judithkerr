import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SocialIcon } from './SocialIcons';

interface HeaderProps {
  onOpenCVModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCVModal }) => {
  const { socials } = portfolioData;
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Impact', href: '#impact' },
    { label: 'Initiatives', href: '#initiatives' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Governance', href: '#governance' },
    { label: 'Credentials', href: '#credentials' },
    { label: 'Inquiries', href: '#inquiries' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-200 ${
          isScrolled
            ? 'bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#E5E5E0] shadow-2xs'
            : 'bg-[#FBFBF9] border-b border-[#E5E5E0]/60'
        }`}
        style={{
          paddingTop: 'max(14px, env(safe-area-inset-top, 14px))',
          paddingBottom: '14px',
        }}
      >
        {/* Dynamic Reading Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-[#9B7853] transition-all duration-100 ease-out pointer-events-none"
          style={{ width: `${scrollProgress}%` }}
        />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a href="#overview" className="group flex flex-col focus:outline-none">
          <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-[#0E1116] group-hover:text-[#9B7853] transition-colors">
            Judith Kerr
          </span>
          <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#8A8880] mt-0.5">
            Executive Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="editorial-link font-sans text-xs uppercase tracking-[0.18em] text-[#57595D] hover:text-[#0E1116] transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center space-x-4">
          <button
            type="button"
            onClick={onOpenCVModal}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium text-[#57595D] hover:text-[#0E1116] px-3.5 py-2.5 transition-colors focus:outline-none"
            aria-label="View Executive Curriculum Vitae"
          >
            <FileText className="w-3.5 h-3.5 text-[#9B7853] stroke-[1.75]" />
            <span>Executive CV</span>
          </button>

          <a
            href="#inquiries"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium text-[#0E1116] bg-transparent border border-[#0E1116] px-5 py-2.5 hover:bg-[#0E1116] hover:text-[#FBFBF9] transition-all duration-200 focus:outline-none"
          >
            <span>Initiate Dialogue</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden items-center gap-3">
          <button
            type="button"
            onClick={onOpenCVModal}
            className="text-xs uppercase tracking-wider font-mono text-[#9B7853] px-2 py-1 border border-[#E5E5E0]"
            aria-label="View CV"
          >
            CV
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0E1116] focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E5E5E0] bg-[#FBFBF9] px-6 py-6 transition-all">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-lg text-[#0E1116] hover:text-[#9B7853] transition-colors py-1 border-b border-[#E5E5E0]/40"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCVModal();
                }}
                className="w-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.16em] font-medium text-[#0E1116] border border-[#E5E5E0] px-4 py-3"
              >
                <FileText className="w-4 h-4 text-[#9B7853]" />
                <span>View Full Executive CV</span>
              </button>
              <a
                href="#inquiries"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.16em] font-medium text-[#FBFBF9] bg-[#0E1116] px-4 py-3"
              >
                <span>Initiate Dialogue</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social Channels */}
            <div className="pt-4 border-t border-[#E5E5E0]/70 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A8880]">
                Connect & Follow
              </span>
              <div className="flex items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Judith Kerr on ${social.platform}`}
                    className="w-8 h-8 rounded-xs border border-[#E5E5E0] bg-white text-[#57595D] hover:text-[#9B7853] hover:border-[#9B7853] flex items-center justify-center transition-colors shadow-2xs"
                  >
                    <SocialIcon platform={social.platform} className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>

      {/* Header Placeholder Spacer to preserve document layout flow */}
      <div
        className="w-full shrink-0"
        style={{
          height: 'calc(max(14px, env(safe-area-inset-top, 14px)) + 14px + 45px)',
        }}
        aria-hidden="true"
      />
    </>
  );
};
