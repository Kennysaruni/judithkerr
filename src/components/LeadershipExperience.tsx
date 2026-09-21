import { type FC } from 'react';
import { portfolioData, type LeadershipRole } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const LeadershipExperience: FC = () => {
  const { leadershipExperience, priorLeadershipEngagements } = portfolioData;

  return (
    <section id="leadership" className="border-b border-[#E5E5E0] bg-[#FBFBF9] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-8 border-b border-[#E5E5E0]">
            <div className="lg:col-span-6 space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#9B7853] block font-bold">
                Institutional Governance & Operations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0E1116] font-bold tracking-tight">
                Executive Appointments & Frontline Leadership
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-end">
              <p className="font-sans text-base text-[#1A1D20] font-bold leading-relaxed">
                Proven stewardship across high-acuity crisis environments, multi-site housing portfolios, and inter-agency municipal partnerships across the Greater Toronto Area.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Primary Executive Roles (Clean Editorial Timeline Rows) */}
        <div className="divide-y divide-[#E5E5E0]">
          {leadershipExperience.map((role: LeadershipRole, idx: number) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 group hover:bg-[#F6F2EC]/30 transition-colors duration-300 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-xs">
                {/* Left Meta: Period, Organization & Location */}
                <div className="lg:col-span-4 space-y-2">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9B7853] font-bold block">
                    {role.period}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#0E1116] font-bold leading-snug group-hover:text-[#9B7853] transition-colors duration-300">
                    {role.organization}
                  </h3>
                  <div className="font-mono text-xs text-[#57595D] font-bold flex items-center gap-2">
                    <span>{role.location}</span>
                  </div>
                </div>

                {/* Right Details: Role Title, Mandate & Key Accomplishments */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <h4 className="font-sans text-lg sm:text-xl font-bold text-[#0E1116]">
                      {role.role}
                    </h4>
                    <p className="font-mono text-xs text-[#1A1D20] font-bold mt-1 tracking-wide">
                      Mandate: {role.scope}
                    </p>
                  </div>

                  <ul className="space-y-2.5 font-sans text-sm text-[#1A1D20] font-semibold">
                    {role.responsibilities.map((resp: string, rIdx: number) => (
                      <li key={rIdx} className="flex items-start gap-3 group/item">
                        <span className="w-1.5 h-1.5 bg-[#9B7853] mt-2 shrink-0 transition-transform duration-300 group-hover/item:scale-150"></span>
                        <span className="leading-relaxed font-semibold">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Select Prior Frontline Engagements Grid */}
        <ScrollReveal delay={150}>
          <div className="mt-10 pt-8 border-t border-[#E5E5E0]">
            <div className="mb-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#9B7853] block mb-1 font-bold">
                Foundational Frontline Leadership
              </span>
              <h3 className="font-serif text-2xl text-[#0E1116] font-bold">
                Select Prior Crisis & Supportive Housing Appointments
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {priorLeadershipEngagements.map((item, index) => (
                <div
                  key={index}
                  className="p-5 border border-[#E5E5E0] bg-[#FBFBF9] hover:border-[#9B7853] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm flex flex-col justify-between space-y-3 group cursor-default"
                >
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#9B7853] block mb-1 font-bold">
                      {item.domain}
                    </span>
                    <h4 className="font-serif text-base text-[#0E1116] font-bold leading-snug group-hover:text-[#9B7853] transition-colors">
                      {item.organization}
                    </h4>
                  </div>
                  <p className="font-sans text-xs text-[#1A1D20] font-bold pt-2 border-t border-[#E5E5E0]/60">
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
