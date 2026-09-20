import { type FC } from 'react';
import { portfolioData } from '../data/portfolioData';
import { AnimatedCounter } from './AnimatedCounter';
import { ScrollReveal } from './ScrollReveal';

export const ImpactMetrics: FC = () => {
  const { impactMetrics } = portfolioData;

  return (
    <section id="impact" className="border-b border-[#E5E5E0] bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-10 border-b border-[#E5E5E0] gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#9B7853] block mb-2 font-medium">
                Scale & Track Record
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0E1116] font-normal tracking-tight">
                Measurable Executive Impact
              </h2>
            </div>
            <p className="font-sans text-sm text-[#57595D] max-w-md">
              Delivering structural resilience across municipal crisis centres, transitional housing networks, and grassroots international programs.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Column Minimalist Metric Strip with 1px Stone Dividers & Rolling Counter Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-[#E5E5E0] divide-y md:divide-y-0 md:divide-x divide-[#E5E5E0]">
          {impactMetrics.map((item, index) => (
            <ScrollReveal key={index} delay={index * 120} className="h-full">
              <div
                className={`py-8 sm:py-10 ${
                  index === 0
                    ? 'md:pr-8'
                    : index === 3
                    ? 'md:pl-8'
                    : 'md:px-8'
                } flex flex-col justify-between space-y-4 h-full transition-all duration-300 hover:bg-[#F6F2EC]/40 group`}
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-4xl sm:text-5xl lg:text-5xl text-[#0E1116] font-light tracking-tight group-hover:text-[#9B7853] transition-colors duration-300">
                    <AnimatedCounter value={item.metric} duration={1600 + index * 200} />
                  </span>
                  <span className="font-mono text-xs text-[#8A8880] tracking-widest uppercase group-hover:text-[#0E1116] transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="font-sans text-sm font-semibold text-[#0E1116] tracking-wide uppercase">
                    {item.label}
                  </h3>
                  <p className="font-sans text-xs text-[#57595D] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Global Focus Strip (Kenya, Uganda, Nigeria, India, Jamaica) */}
        <ScrollReveal delay={250}>
          <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8A8880] font-medium">
                International Focus
              </span>
            </div>
            <div className="lg:col-span-9 flex flex-wrap items-center gap-x-8 gap-y-3 font-serif text-base sm:text-lg text-[#0E1116]">
              {['Kenya', 'Uganda', 'Nigeria', 'India', 'Jamaica'].map((country, idx, arr) => (
                <div key={country} className="flex items-center gap-x-8">
                  <span className="group flex items-center gap-2 cursor-default transition-transform duration-200 hover:-translate-y-0.5">
                    <span className="w-1.5 h-1.5 bg-[#9B7853] transition-all duration-300 group-hover:scale-150 group-hover:bg-[#826241]"></span>
                    <span className="group-hover:text-[#9B7853] transition-colors">{country}</span>
                  </span>
                  {idx < arr.length - 1 && <span className="text-[#D4D4CD]">/</span>}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* International Field Missions Documentary Gallery */}
        <ScrollReveal delay={350}>
          <div className="mt-10 pt-8 border-t border-[#E5E5E0] grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission Card 1: Uganda */}
            <div className="bg-[#F5F5F0] border border-[#E5E5E0] p-3 shadow-xs hover:border-[#9B7853]/40 transition-colors duration-500 shimmer-hover group">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0E1116]">
                <img
                  src="/IMG-20260917-WA0018.jpg"
                  alt="Judith Kerr in Uganda with community women leaders"
                  className="w-full h-full object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#0E1116]/85 backdrop-blur-xs text-[#FBFBF9] px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest border border-white/15">
                  Grassroots Outreach • Uganda
                </div>
              </div>
              <div className="pt-3 space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#9B7853] font-semibold block">
                  Diaspora Solidarity & Rights
                </span>
                <p className="font-sans text-xs text-[#57595D] leading-relaxed">
                  Judith Kerr with women leaders in rural Uganda, advancing grassroots empowerment, family wellness, and international solidarity.
                </p>
              </div>
            </div>

            {/* Mission Card 2: Kenya */}
            <div className="bg-[#F5F5F0] border border-[#E5E5E0] p-3 shadow-xs hover:border-[#9B7853]/40 transition-colors duration-500 shimmer-hover group">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0E1116]">
                <img
                  src="/IMG-20260917-WA0021.jpg"
                  alt="Judith Kerr in Kenya in traditional cultural attire"
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#0E1116]/85 backdrop-blur-xs text-[#FBFBF9] px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest border border-white/15">
                  Community Immersion • Kenya
                </div>
              </div>
              <div className="pt-3 space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#9B7853] font-semibold block">
                  Cultural Engagement & Foundations
                </span>
                <p className="font-sans text-xs text-[#57595D] leading-relaxed">
                  Deep community integration in Kenya, fostering sustainable grassroots hubs and long-term socio-economic capacity.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
