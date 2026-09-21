import { type FC } from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SocialIcon } from './SocialIcons';

export const Footer: FC = () => {
  const { profile, socials } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E1116] text-[#FBFBF9] border-t border-[#242933]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-12 space-y-10">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Col 1: Identity & Credentials */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#FBFBF9]">
              Judith Kerr
              <span className="block text-sm font-sans text-[#B0B0A8] mt-1 font-bold tracking-wide">
                {profile.postNominals}
              </span>
            </h3>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#9B7853] font-bold">
              {profile.title}
            </p>
            <p className="font-sans text-xs sm:text-sm text-[#B0B0A8] font-semibold leading-relaxed max-w-sm">
              Advancing systemic equity, sustainable social enterprise, and community restoration across Canada and globally.
            </p>
            {/* Social Channels */}
            <div className="pt-2 flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#B0B0A8] font-bold mr-1">Connect</span>
              {socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Judith Kerr on ${social.platform}`}
                  title={`${social.platform} (${social.handle})`}
                  className="w-8 h-8 rounded-xs border border-[#242933] bg-[#161B22] text-[#B0B0A8] hover:text-[#FBFBF9] hover:border-[#9B7853] hover:bg-[#9B7853]/30 flex items-center justify-center transition-all duration-200"
                >
                  <SocialIcon platform={social.platform} className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Jump Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#9B7853] font-bold">
              Dossier Navigation
            </h4>
            <ul className="space-y-2 font-sans text-xs text-[#B0B0A8] font-bold">
              <li>
                <a href="#overview" className="hover:text-[#FBFBF9] transition-colors">
                  Overview & Statement
                </a>
              </li>
              <li>
                <a href="#profile" className="hover:text-[#FBFBF9] transition-colors">
                  Leadership Profile & Mission
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-[#FBFBF9] transition-colors">
                  Impact & Reach Metrics
                </a>
              </li>
              <li>
                <a href="#initiatives" className="hover:text-[#FBFBF9] transition-colors">
                  Strategic Initiatives (01–03)
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-[#FBFBF9] transition-colors">
                  Institutional Leadership
                </a>
              </li>
              <li>
                <a href="#governance" className="hover:text-[#FBFBF9] transition-colors">
                  Civic & Board Governance
                </a>
              </li>
              <li>
                <a href="#credentials" className="hover:text-[#FBFBF9] transition-colors">
                  Education & Accreditations
                </a>
              </li>
              <li>
                <a href="#inquiries" className="hover:text-[#FBFBF9] transition-colors">
                  Initiate Strategic Dialogue
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Executive Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#9B7853] font-bold">
              Executive Channels
            </h4>
            <div className="space-y-2.5 font-mono text-xs text-[#B0B0A8]">
              <div>
                <span className="text-[#8A8880] block text-[10px] uppercase font-bold">Email Inquiries</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[#FBFBF9] hover:text-[#9B7853] font-bold transition-colors flex items-center gap-2 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#9B7853]" />
                  <span>{profile.email}</span>
                </a>
              </div>
              <div>
                <span className="text-[#8A8880] block text-[10px] uppercase font-bold">Telephone Direct</span>
                <a
                  href={`tel:${profile.phone.replace(/[^0-9]/g, '')}`}
                  className="text-[#FBFBF9] hover:text-[#9B7853] font-bold transition-colors flex items-center gap-2 mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#9B7853]" />
                  <span>{profile.phone}</span>
                </a>
              </div>
              <div>
                <span className="text-[#8A8880] block text-[10px] uppercase font-bold">Location</span>
                <span className="text-[#FBFBF9] font-bold block mt-0.5">{profile.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 border-t border-[#242933] flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-[#8A8880] font-semibold">
          <p>
            © Judith Kerr. All rights reserved. Professional portfolio and executive record.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B0B0A8] font-bold hover:text-[#FBFBF9] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#9B7853] group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
