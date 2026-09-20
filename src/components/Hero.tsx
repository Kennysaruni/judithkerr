import { type FC } from 'react';
import { ArrowDown, ArrowUpRight, ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';
import { SocialIcon } from './SocialIcons';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: FC<HeroProps> = ({ onOpenCVModal }) => {
  const { profile, socials } = portfolioData;

  return (
    <section id="overview" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 pt-6 items-start">
          {/* Left Column: Post-nominals, Name & Core Statement */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal delay={50}>
              <div className="space-y-3">
                <div className="font-mono text-xs uppercase tracking-[0.22em] text-[#9B7853] font-medium">
                  {profile.title}
                </div>
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#0E1116] tracking-tight leading-[1.08]">
                  Judith Kerr
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium text-[#2D3139] mt-2 font-serif italic">
                    {profile.postNominals}
                  </span>
                </h1>
              </div>
            </ScrollReveal>

            {/* Core Hero Statement */}
            <ScrollReveal delay={150}>
              <p className="font-serif text-2xl sm:text-3xl text-[#0E1116] font-medium leading-relaxed text-balance max-w-2xl pt-2">
                &ldquo;{profile.heroStatement}&rdquo;
              </p>
            </ScrollReveal>

            {/* Secondary Narrative Statement */}
            <ScrollReveal delay={200}>
              <p className="font-sans text-base sm:text-lg text-[#202329] leading-relaxed max-w-2xl font-medium">
                {profile.subStatement}
              </p>
            </ScrollReveal>

            {/* Call to Actions */}
            <ScrollReveal delay={250}>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                <a
                  href="#inquiries"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0E1116] text-[#FBFBF9] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#9B7853] transition-all duration-300 shadow-sm hover:shadow-md active:scale-[0.99] focus:outline-none overflow-hidden"
                >
                  <span className="relative z-10">Initiate Partnership</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
                </a>

                <button
                  type="button"
                  onClick={onOpenCVModal}
                  className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-transparent border border-[#0E1116]/40 text-[#0E1116] text-xs uppercase tracking-[0.18em] font-medium hover:border-[#0E1116] hover:bg-[#0E1116]/5 transition-all duration-300 active:scale-[0.99] focus:outline-none"
                >
                  <Download className="w-4 h-4 text-[#9B7853] stroke-[1.75] group-hover:-translate-y-0.5 transition-transform duration-300" />
                  <span>Download Executive CV</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </button>
              </div>

              {/* Quick Strategic Credentials Strip */}
              <div className="pt-6 mt-6 border-t border-[#E5E5E0] grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="space-y-1 p-2 rounded-xs hover:bg-[#F6F2EC]/40 transition-colors">
                  <span className="text-[#8A8880] text-[10px] uppercase tracking-wider block">Leadership Role</span>
                  <span className="text-[#0E1116] font-semibold block">Founder & Exec. Director</span>
                </div>
                <div className="space-y-1 p-2 rounded-xs hover:bg-[#F6F2EC]/40 transition-colors">
                  <span className="text-[#8A8880] text-[10px] uppercase tracking-wider block">Specialization</span>
                  <span className="text-[#0E1116] font-semibold block">Systemic Social Equity</span>
                </div>
                <div className="space-y-1 p-2 rounded-xs hover:bg-[#F6F2EC]/40 transition-colors">
                  <span className="text-[#8A8880] text-[10px] uppercase tracking-wider block">Credentials</span>
                  <span className="text-[#0E1116] font-semibold block">M.C.C., Dr-C., BASc</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Portrait & Executive Summary */}
          <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-[#E5E5E0] pt-8 lg:pt-0 lg:pl-10 space-y-8">
            {/* Editorial Portrait Frame with subtle shimmer and live status pulse */}
            <ScrollReveal delay={200} direction="left">
              <div className="relative group shimmer-hover">
                <div className="bg-[#F5F5F0] p-3 border border-[#E5E5E0] shadow-sm hover:border-[#9B7853]/40 transition-colors duration-500">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#EAEAE5]">
                    <img
                      src="/IMG-20260917-WA0022.jpg"
                      alt="Judith Kerr, BASc, M.C.C., Dr-C. — Executive Portrait"
                      className="w-full h-full object-cover object-[center_26%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="eager"
                    />
                  </div>

                  {/* Caption beneath portrait */}
                  <div className="pt-3 text-xs space-y-0.5">
                    <span className="font-serif text-sm font-medium text-[#0E1116] block">
                      Judith Kerr
                    </span>
                    <span className="font-mono text-[11px] text-[#9B7853] block">
                      Toronto / Global Outreach
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Executive Profile Summary */}
            <ScrollReveal delay={300}>
              <div className="space-y-3">
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0E1116] font-semibold">
                  Executive Profile Summary
                </h2>
                <p className="font-sans text-sm text-[#202329] font-medium leading-relaxed">
                  {profile.bioLong}
                </p>
              </div>

              {/* Core Pillars List */}
              <div className="border-t border-[#E5E5E0] pt-6 space-y-4">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8A8880] block font-medium">
                  Direct Engagements
                </span>
                <ul className="space-y-3 font-sans text-xs text-[#0E1116]">
                  <li className="flex items-baseline justify-between py-1 border-b border-[#E5E5E0]/60 hover:border-[#9B7853]/40 transition-colors">
                    <span className="font-semibold">Direct Email</span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-mono text-[#33373D] font-medium hover:text-[#9B7853] transition-colors"
                    >
                      {profile.email}
                    </a>
                  </li>
                  <li className="flex items-baseline justify-between py-1 border-b border-[#E5E5E0]/60 hover:border-[#9B7853]/40 transition-colors">
                    <span className="font-semibold">Direct Telephone</span>
                    <a
                      href={`tel:${profile.phone.replace(/[^0-9]/g, '')}`}
                      className="font-mono text-[#33373D] font-medium hover:text-[#9B7853] transition-colors"
                    >
                      {profile.phone}
                    </a>
                  </li>
                  <li className="flex items-baseline justify-between py-1 border-b border-[#E5E5E0]/60 hover:border-[#9B7853]/40 transition-colors">
                    <span className="font-semibold">Operational Base</span>
                    <span className="font-mono text-[#33373D] font-medium">Toronto / Global</span>
                  </li>
                  <li className="pt-2 flex items-center justify-between">
                    <span className="font-semibold text-[#0E1116]">Official Channels</span>
                    <div className="flex items-center gap-1.5">
                      {socials.map((social) => (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Judith Kerr on ${social.platform}`}
                          title={`${social.platform} (${social.handle})`}
                          className="w-7 h-7 rounded-xs border border-[#E5E5E0] bg-white hover:border-[#9B7853] hover:bg-[#9B7853] hover:text-[#FBFBF9] text-[#57595D] flex items-center justify-center transition-all duration-200 shadow-2xs hover:-translate-y-0.5"
                        >
                          <SocialIcon platform={social.platform} className="w-3.5 h-3.5" />
                        </a>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>

              {/* Section Anchor Guide */}
              <div className="pt-4">
                <a
                  href="#impact"
                  className="group inline-flex items-center gap-2 text-xs uppercase font-mono tracking-[0.18em] text-[#8A8880] hover:text-[#0E1116] transition-colors"
                >
                  <span>Explore Impact & Frameworks</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#9B7853] group-hover:translate-y-1.5 transition-transform duration-300" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
