import { type FC } from 'react';
import { portfolioData, type LeadershipRole } from '../data/portfolioData';

export const LeadershipExperience: FC = () => {
  const { leadershipExperience, priorLeadershipEngagements } = portfolioData;

  return (
    <section id="leadership" className="border-b border-[#E5E5E0] bg-[#FBFBF9] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-[#E5E5E0]">
          <div className="lg:col-span-6 space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#9B7853] block">
              Institutional Governance & Operations
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#0E1116] font-normal tracking-tight">
              Executive Appointments & Frontline Leadership
            </h2>
          </div>
          <div className="lg:col-span-6 flex items-end">
            <p className="font-sans text-base text-[#57595D] leading-relaxed">
              Proven stewardship across high-acuity crisis environments, multi-site housing portfolios, and inter-agency municipal partnerships across the Greater Toronto Area.
            </p>
          </div>
        </div>

        {/* Primary Executive Roles (Clean Editorial Timeline Rows) */}
        <div className="divide-y divide-[#E5E5E0]">
          {leadershipExperience.map((role: LeadershipRole, idx: number) => (
            <div key={idx} className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Meta: Period, Organization & Location */}
              <div className="lg:col-span-4 space-y-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#9B7853] font-medium block">
                  {role.period}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#0E1116] leading-snug">
                  {role.organization}
                </h3>
                <div className="font-mono text-xs text-[#8A8880] flex items-center gap-2">
                  <span>{role.location}</span>
                </div>
              </div>

              {/* Right Details: Role Title, Mandate & Key Accomplishments */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h4 className="font-sans text-lg sm:text-xl font-medium text-[#0E1116]">
                    {role.role}
                  </h4>
                  <p className="font-mono text-xs text-[#57595D] mt-1 tracking-wide">
                    Mandate: {role.scope}
                  </p>
                </div>

                <ul className="space-y-3 font-sans text-sm text-[#57595D]">
                  {role.responsibilities.map((resp: string, rIdx: number) => (
                    <li key={rIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#9B7853] mt-2 shrink-0"></span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Select Prior Frontline Engagements Grid */}
        <div className="mt-16 pt-12 border-t border-[#E5E5E0]">
          <div className="mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8A8880] block mb-2">
              Foundational Frontline Leadership
            </span>
            <h3 className="font-serif text-2xl text-[#0E1116]">
              Select Prior Crisis & Supportive Housing Appointments
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {priorLeadershipEngagements.map((item, index) => (
              <div
                key={index}
                className="p-6 border border-[#E5E5E0] bg-[#FBFBF9] hover:border-[#9B7853] transition-colors duration-200 flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#9B7853] block mb-1">
                    {item.domain}
                  </span>
                  <h4 className="font-serif text-lg text-[#0E1116] font-medium leading-snug">
                    {item.organization}
                  </h4>
                </div>
                <p className="font-sans text-xs text-[#57595D] pt-2 border-t border-[#E5E5E0]/60">
                  {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
