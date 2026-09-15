import { type FC } from 'react';
import { portfolioData } from '../data/portfolioData';

export const ImpactMetrics: FC = () => {
  const { impactMetrics } = portfolioData;

  return (
    <section id="impact" className="border-b border-[#E5E5E0] bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-10 border-b border-[#E5E5E0] gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#9B7853] block mb-2">
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

        {/* 4-Column Minimalist Metric Strip with 1px Stone Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-[#E5E5E0] divide-y md:divide-y-0 md:divide-x divide-[#E5E5E0]">
          {impactMetrics.map((item, index) => (
            <div
              key={index}
              className={`py-8 sm:py-10 ${
                index === 0
                  ? 'md:pr-8'
                  : index === 3
                  ? 'md:pl-8'
                  : 'md:px-8'
              } flex flex-col justify-between space-y-4`}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-4xl sm:text-5xl lg:text-5xl text-[#0E1116] font-light tracking-tight">
                  {item.metric}
                </span>
                <span className="font-mono text-xs text-[#8A8880] tracking-widest uppercase">
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
          ))}
        </div>

        {/* Global Focus Strip (Kenya, Uganda, Nigeria, India, Jamaica) */}
        <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8A8880]">
              International Focus
            </span>
          </div>
          <div className="lg:col-span-9 flex flex-wrap items-center gap-x-8 gap-y-3 font-serif text-base sm:text-lg text-[#0E1116]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#9B7853]"></span>
              <span>Kenya</span>
            </span>
            <span className="text-[#D4D4CD]">/</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#9B7853]"></span>
              <span>Uganda</span>
            </span>
            <span className="text-[#D4D4CD]">/</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#9B7853]"></span>
              <span>Nigeria</span>
            </span>
            <span className="text-[#D4D4CD]">/</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#9B7853]"></span>
              <span>India</span>
            </span>
            <span className="text-[#D4D4CD]">/</span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#9B7853]"></span>
              <span>Jamaica</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
