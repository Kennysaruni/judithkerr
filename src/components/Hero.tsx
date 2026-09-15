import { type FC } from 'react';
import { ArrowDown, ArrowUpRight, ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: FC<HeroProps> = ({ onOpenCVModal }) => {
  const { profile } = portfolioData;

  return (
    <section id="overview" className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Top Monospace Classification */}
        {/* <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#E5E5E0]/60">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#9B7853] font-medium">
              Official Bio
            </span>
            <span className="text-[#D4D4CD]">/</span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8A8880]">
              Toronto, Canada & Global Outreach
            </span>
          </div>
          <div className="font-mono text-xs text-[#8A8880] tracking-wider">
            Ref: JK-2025/EXEC
          </div>
        </div> */}

        {/* Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
          {/* Left Column: Post-nominals, Name & Core Statement */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-[#9B7853] font-medium">
                {profile.title}
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#0E1116] tracking-tight leading-[1.08]">
                Judith Kerr
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-[#57595D] mt-2 font-serif italic">
                  {profile.postNominals}
                </span>
              </h1>
            </div>

            {/* Core Hero Statement */}
            <p className="font-serif text-2xl sm:text-3xl lg:text-3xl text-[#0E1116] font-normal leading-relaxed text-balance max-w-3xl pt-2">
              &ldquo;{profile.heroStatement}&rdquo;
            </p>

            {/* Secondary Narrative Statement */}
            <p className="font-sans text-base sm:text-lg text-[#57595D] leading-relaxed max-w-2xl font-normal">
              {profile.subStatement}
            </p>

            {/* Call to Actions (Strictly minimalist without pill shapes) */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <a
                href="#inquiries"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0E1116] text-[#FBFBF9] text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#9B7853] transition-colors duration-200 focus:outline-none"
              >
                <span>Initiate Partnership</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onOpenCVModal}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-transparent border border-[#0E1116]/40 text-[#0E1116] text-xs uppercase tracking-[0.18em] font-medium hover:border-[#0E1116] hover:bg-[#0E1116]/5 transition-all duration-200 focus:outline-none"
              >
                <Download className="w-4 h-4 text-[#9B7853] stroke-[1.75]" />
                <span>Download Executive CV</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </button>
            </div>
          </div>

          {/* Right Column: Executive Summary & Direct Channels */}
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#E5E5E0] pt-8 lg:pt-0 lg:pl-12 space-y-8">
            <div className="space-y-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0E1116] font-semibold">
                Executive Profile Summary
              </h2>
              <p className="font-sans text-sm text-[#57595D] leading-relaxed">
                {profile.bioLong}
              </p>
            </div>

            {/* Core Pillars List (Editorial text hierarchy, no icon boxes) */}
            <div className="border-t border-[#E5E5E0] pt-6 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8A8880] block">
                Direct Engagements
              </span>
              <ul className="space-y-3 font-sans text-xs text-[#0E1116]">
                <li className="flex items-baseline justify-between py-1 border-b border-[#E5E5E0]/60">
                  <span className="font-medium">Direct Email</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-mono text-[#57595D] hover:text-[#9B7853] transition-colors"
                  >
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-baseline justify-between py-1 border-b border-[#E5E5E0]/60">
                  <span className="font-medium">Direct Telephone</span>
                  <a
                    href={`tel:${profile.phone.replace(/[^0-9]/g, '')}`}
                    className="font-mono text-[#57595D] hover:text-[#9B7853] transition-colors"
                  >
                    {profile.phone}
                  </a>
                </li>
                <li className="flex items-baseline justify-between py-1">
                  <span className="font-medium">Operational Base</span>
                  <span className="font-mono text-[#57595D]">Toronto / Global</span>
                </li>
              </ul>
            </div>

            {/* Section Anchor Guide */}
            <div className="pt-2">
              <a
                href="#impact"
                className="group inline-flex items-center gap-2 text-xs uppercase font-mono tracking-[0.18em] text-[#8A8880] hover:text-[#0E1116] transition-colors"
              >
                <span>Explore Impact & Frameworks</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#9B7853] group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
