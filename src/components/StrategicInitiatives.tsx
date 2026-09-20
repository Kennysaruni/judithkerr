import { useState, type FC } from 'react';
import { Plus, Minus, ArrowRight, Globe, Shield, Coins } from 'lucide-react';
import { portfolioData, type Initiative } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const StrategicInitiatives: FC = () => {
  const { strategicInitiatives } = portfolioData;
  const [activeInitiative, setActiveInitiative] = useState<string | null>('01');
  const [galleryIndices, setGalleryIndices] = useState<Record<string, number>>({});

  const toggleInitiative = (num: string) => {
    setActiveInitiative(activeInitiative === num ? null : num);
  };

  const getInitiativeIcon = (num: string) => {
    switch (num) {
      case '01':
        return <Globe className="w-5 h-5 text-[#9B7853] stroke-[1.5]" />;
      case '02':
        return <Shield className="w-5 h-5 text-[#9B7853] stroke-[1.5]" />;
      case '03':
        return <Coins className="w-5 h-5 text-[#9B7853] stroke-[1.5]" />;
      default:
        return null;
    }
  };

  return (
    <section id="initiatives" className="border-b border-[#E5E5E0] bg-[#FBFBF9] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-[#E5E5E0]">
            <div className="lg:col-span-5 space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#9B7853] block font-medium">
                Strategic Engines & Platforms
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#0E1116] font-normal tracking-tight">
                Pioneering Global & Community Initiatives
              </h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="font-sans text-base text-[#57595D] leading-relaxed max-w-xl">
                Founding and scaling independent organizations that unify grassroots advocacy, systemic social enterprise, and pastoral leadership to create permanent infrastructure for equity.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Editorial Initiatives Rows (Numbered 01, 02, 03) */}
        <div className="divide-y divide-[#E5E5E0]">
          {strategicInitiatives.map((item: Initiative, idx: number) => {
            const isOpen = activeInitiative === item.number;
            const currentImg = (item.gallery && item.gallery[galleryIndices[item.number] || 0]) || item.image;

            return (
              <ScrollReveal key={item.number} delay={idx * 140}>
                <div
                  className={`py-10 transition-colors duration-300 ${
                    isOpen ? 'bg-[#F6F2EC]/20' : 'hover:bg-[#F6F2EC]/10'
                  }`}
                >
                  {/* Header Row */}
                  <div
                    onClick={() => toggleInitiative(item.number)}
                    className="cursor-pointer group flex flex-col md:flex-row md:items-baseline justify-between gap-6"
                  >
                    <div className="flex items-baseline gap-6 sm:gap-10">
                      <span className="font-mono text-sm sm:text-base font-medium text-[#9B7853] tracking-widest transition-transform duration-300 group-hover:scale-110">
                        {item.number}
                      </span>
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <h3 className="font-serif text-2xl sm:text-3xl text-[#0E1116] group-hover:text-[#9B7853] transition-colors">
                            {item.title}
                          </h3>
                          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 hidden sm:inline-block">
                            {getInitiativeIcon(item.number)}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-[#8A8880]">
                          <span className="text-[#0E1116] font-medium">{item.role}</span>
                          <span>—</span>
                          <span>{item.focus}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 self-start md:self-auto pl-12 md:pl-0">
                      <span className="font-mono text-xs uppercase tracking-widest text-[#8A8880] hidden sm:inline-block">
                        {isOpen ? 'Close Blueprint' : 'Expand Blueprint'}
                      </span>
                      <button
                        type="button"
                        className="p-1.5 text-[#0E1116] group-hover:text-[#9B7853] transition-transform duration-300 transform group-hover:rotate-90"
                        aria-label={isOpen ? 'Collapse initiative details' : 'Expand initiative details'}
                      >
                        {isOpen ? (
                          <Minus className="w-5 h-5 stroke-[1.5]" />
                        ) : (
                          <Plus className="w-5 h-5 stroke-[1.5]" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Detail Panel with smooth opacity & slide */}
                  {isOpen && (
                    <div className="mt-8 pt-8 border-t border-[#E5E5E0]/60 grid grid-cols-1 lg:grid-cols-12 gap-8 pl-0 md:pl-16 transition-all duration-500 animate-in fade-in slide-in-from-top-3">
                      {currentImg ? (
                          <>
                            {/* Left Column: Narrative, Pillars & Realized Impact */}
                            <div className="lg:col-span-7 space-y-6">
                              <div className="space-y-3">
                                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0E1116] font-semibold">
                                  Strategic Mandate & Purpose
                                </h4>
                                <div className="space-y-3 font-sans text-sm text-[#33373D] leading-relaxed">
                                  {item.description.split('\n\n').map((para, pIdx) => (
                                    <p key={pIdx}>{para}</p>
                                  ))}
                                </div>
                              </div>

                              <div className="space-y-3 pt-2">
                                <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0E1116] font-semibold">
                                  Core Operational Pillars
                                </h4>
                                <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-[#57595D]">
                                  {item.pillars.map((pillar, pIdx) => (
                                    <li key={pIdx} className="flex items-start gap-3">
                                      <span className="font-mono text-xs text-[#9B7853] font-bold mt-0.5">
                                        0{pIdx + 1}.
                                      </span>
                                      <span className="leading-relaxed">{pillar}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="pt-2">
                                <div className="border-l-2 border-[#9B7853] pl-4 py-1 bg-[#FBFBF9]/80">
                                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8880] block">
                                    Outcomes & Realized Impact
                                  </span>
                                  <p className="font-serif italic text-base text-[#0E1116] mt-1">
                                    {item.impactNotes}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Right Column: Documentary Archival Photo Card & Inquiry CTA */}
                            <div className="lg:col-span-5 space-y-4">
                              <div className="bg-[#F5F5F0] border border-[#E5E5E0] p-3 shadow-xs hover:border-[#9B7853]/40 transition-colors duration-500 shimmer-hover group">
                                <div className={`relative ${currentImg.aspectRatio || 'aspect-[4/3]'} overflow-hidden bg-[#0E1116]`}>
                                  <img
                                    src={currentImg.src}
                                    alt={currentImg.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                    style={{ objectPosition: currentImg.objectPosition || 'center center' }}
                                    loading="lazy"
                                  />
                                  <div className="absolute top-2.5 left-2.5 bg-[#0E1116]/85 backdrop-blur-xs text-[#FBFBF9] px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest border border-white/15">
                                    {currentImg.badge}
                                  </div>
                                </div>
                                <p className="font-sans text-xs text-[#57595D] pt-2.5 leading-relaxed italic">
                                  {currentImg.caption}
                                </p>

                                {/* Optional Gallery Switcher Tabs */}
                                {item.gallery && item.gallery.length > 1 && (
                                  <div className="mt-3 pt-3 border-t border-[#E5E5E0]/70 flex flex-wrap gap-2">
                                    {item.gallery.map((gImg, gIdx) => {
                                      const isSelected = (galleryIndices[item.number] || 0) === gIdx;
                                      return (
                                        <button
                                          key={gIdx}
                                          type="button"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setGalleryIndices(prev => ({ ...prev, [item.number]: gIdx }));
                                          }}
                                          className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 transition-all cursor-pointer ${
                                            isSelected
                                              ? 'bg-[#0E1116] text-[#FBFBF9] font-medium shadow-xs'
                                              : 'bg-[#EAEAE5] text-[#57595D] hover:bg-[#DEDEC8]'
                                          }`}
                                        >
                                          View {gIdx + 1}: {gImg.badge.split('&')[0].trim()}
                                        </button>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>

                              <div className="pt-2">
                                <a
                                  href="#inquiries"
                                  className="editorial-link font-mono text-xs uppercase tracking-[0.18em] text-[#0E1116] inline-flex items-center gap-2"
                                >
                                  <span>Inquire About Strategic Collaboration</span>
                                  <ArrowRight className="w-3.5 h-3.5 text-[#9B7853]" />
                                </a>
                              </div>
                            </div>
                          </>
                        ) : (
                      <>
                        <div className="lg:col-span-6 space-y-4">
                          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0E1116] font-semibold">
                            Strategic Mandate & Scope
                          </h4>
                          <div className="space-y-3 font-sans text-sm text-[#33373D] leading-relaxed">
                            {item.description.split('\n\n').map((para, pIdx) => (
                              <p key={pIdx}>{para}</p>
                            ))}
                          </div>
                          <div className="pt-2">
                            <div className="border-l-2 border-[#9B7853] pl-4 py-1">
                              <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8880] block">
                                Outcomes & Realized Impact
                              </span>
                              <p className="font-serif italic text-base text-[#0E1116] mt-1">
                                {item.impactNotes}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="lg:col-span-6 space-y-4">
                          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#0E1116] font-semibold">
                            Core Operational Pillars
                          </h4>
                          <ul className="space-y-3 font-sans text-xs sm:text-sm text-[#57595D]">
                            {item.pillars.map((pillar, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-3">
                                <span className="font-mono text-xs text-[#9B7853] font-bold mt-0.5">
                                  0{pIdx + 1}.
                                </span>
                                <span className="leading-relaxed">{pillar}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="pt-4">
                            <a
                              href="#inquiries"
                              className="editorial-link font-mono text-xs uppercase tracking-[0.18em] text-[#0E1116] inline-flex items-center gap-2"
                            >
                              <span>Inquire About Strategic Collaboration</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#9B7853]" />
                            </a>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
      </div>
    </section>
  );
};
